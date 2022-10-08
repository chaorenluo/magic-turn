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



enum optionsApi {
  data = 'data',
  computed = 'computed',
  methods = 'methods',
  props = 'props',
  watch = 'watch'
}


const loopProperty = (path) => {
  if (!path.node.property) {
    return path.node.type
  }
 return loopProperty(path.context.parentPath)
}

const createSetupState = () => {
  importRender.addVueApi('getCurrentInstance')
  let node = t.memberExpression(t.callExpression(t.identifier('getCurrentInstance'),[]), t.identifier('setupState'));
  return node
}


const scriptRender = async (code: string,options) => {
  
  let dataRender: DataRender;
  let computedRender: ComputedRender;
  let methodsRender: MethodsRender;
  let lifeCycleRender: LifeCycleRender = new LifeCycleRender(options)
  let propsRender: PropsRender;
  let watchRender: WatchRender;


  const ast = parse(code, {
    sourceType: 'module'
  })
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
          computedRender = new ComputedRender(properties,options)
          importRender.addVueApi('computed')
          break;
        case optionsApi.methods:
          methodsRender = new MethodsRender(properties,options)
          break;
        case optionsApi.props:
          propsRender = new PropsRender(path.node.value,options)
          break;
        case optionsApi.watch:
          watchRender = new WatchRender(path.node.value, dataRender,options)
          break;
        default:
          break;
      }
    },
    ImportDeclaration(path) {
      importRender.addImportGlobal(path.node)
    },
    MemberExpression(path) {
      if (path.node.object.type === 'ThisExpression') {
        const property = path.node.property;
        const name = property.name;
        let newNode = path.node;
        if (property.type === 'TemplateLiteral'){
          let type = loopProperty(path)
          newNode.object = type === 'CallExpression' ? createSetupState() : t.identifier('state')
        }else if (dataRender && dataRender?.hasReactiveKey(name)) {
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
          // 处理router
          if (name === "$router" || name === "$route") {
            newNode.name = name.replace('$', '')
            importRender.addRouter(newNode.name)
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
  let newCode = '';
  newCode += importRender ?await importRender.render() : '';
  newCode += propsRender ? await propsRender.render() : '';
  newCode += dataRender ? await dataRender.render() : '';
  newCode += computedRender ? await computedRender.render() : '';
  newCode += methodsRender ? await methodsRender.render() : '';
  newCode += watchRender ? await watchRender.render() : '';
  newCode += lifeCycleRender ? await lifeCycleRender.render() : '';
  return {
    newCode,
    dataRender,
    computedRender,
    methodsRender,
    lifeCycleRender,
    propsRender,
    watchRender
  }
}

export { scriptRender }

