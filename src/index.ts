// @ts-nocheck

import parser from "@babel/parser";
import { readFile } from 'fs/promises'
import generate from "@babel/generator";
import t from '@babel/types';
import traverse from "@babel/traverse";
import DataRender from './DataRender';
import ComputedRender from './ComputedRender';
import MethodsRender from './MethodsRender'
import LifeCycleRender from './LifeCycleRender'
import PropsRender from './PropsRender'
import importRender from './importRender'
import WatchRender from './WatchRender'
const { parse } = parser;


let nuxtApp = new Set<string>();
let dataRender: DataRender;
let computedRender: ComputedRender;
let methodsRender: MethodsRender;
let lifeCycleRender: LifeCycleRender = new LifeCycleRender()
let propsRender: PropsRender;
let watchRender: WatchRender;

enum optionsApi {
  data = 'data',
  computed = 'computed',
  methods = 'methods',
  props = 'props',
  watch = 'watch'
}



const getAst = async (path: string) => {
  const code = await readFile(path, { encoding: 'utf-8' });

  const ast = parse(code)

  traverse.default(ast, {
    ObjectMethod(path) {
      const nodeName = path.node.key.name;
      if (nodeName === optionsApi.data) {
        dataRender = new DataRender(path.node.body.body)
      } else if (LifeCycleRender.isCycle(nodeName)) {
        lifeCycleRender.init(path.node)
      }
    },
    ObjectProperty(path) {
      const properties = path.node.value.properties;
      const nodeName = path.node.key.name;
      switch (nodeName) {
        case optionsApi.computed:
          computedRender = new ComputedRender(properties)
          importRender.addVueApi('computed')
          break;
        case optionsApi.methods:
          methodsRender = new MethodsRender(properties)
          break;
        case optionsApi.props:
          propsRender = new PropsRender(path.node.value)
          break;
        case optionsApi.watch:
          watchRender = new WatchRender(path.node.value, dataRender)
          break;
        default:
          break;
      }
    },

    MemberExpression(path) {
      if (path.node.object.type === 'ThisExpression') {
        const name = path.node.property.name;
        let newNode = path.node
        if (dataRender && dataRender?.hasReactiveKey(name)) {
          newNode.object = t.identifier('state')
        } else if (computedRender && computedRender?.hasReactiveKey(name)) {
           newNode.object = newNode.property;
           newNode.property = t.identifier('value')
        } else if (propsRender && propsRender?.hasPropsKey(name)) {
          newNode.object = t.identifier('props')
        } else {
          newNode = newNode.property;
        }
        if (name && name.indexOf('$') > -1) {
          // 处理refs语句
          if (name === '$refs') {
            path.parent.object = path.parent.property
            path.parent.property = t.identifier('value')
            importRender.addVueApi('ref');
            importRender.addRefKey(path.parent.object.name)
            return
          }
          if (importRender.isVueApi(name)) {
            newNode.name = importRender.conversionApi(name);
            importRender.addApiKey(newNode.name, path)
          } else {
            importRender.addGlobal(name)
          }
        }
        path.replaceWith(newNode)
      }
    }

  });
  //  let code =  await generate.default(ast);
  // console.log(generate.default(ast).code)
  //  console.log(code)
  importRender && importRender.renderImports()
  importRender && importRender.renderRef()
  // propsRender && await propsRender.render();
  // dataRender && await dataRender.render()
  // computedRender && await computedRender.render()
  methodsRender && await methodsRender.render()
  // watchRender && await watchRender.render()
  lifeCycleRender && await lifeCycleRender.render()
  console.log(nuxtApp);

}

export default getAst