// @ts-nocheck

import parser from "@babel/parser";
import t from '@babel/types';
import generate from "@babel/generator";
import traverse from "@babel/traverse";
import DataRender from './DataRender';
import ComputedRender from './ComputedRender';
import MethodsRender from './MethodsRender'
import LifeCycleRender from './LifeCycleRender'
import PropsRender from './PropsRender'
import ImportRender from './ImportRender'
import WatchRender from './WatchRender'
import MixinRender from './MixinRender'
import VuexRender from './VuexRender'
import { OptionsApi } from './utils'
const { parse } = parser;




const scriptRender = async (code: string, options) => {
  let newAst = parse('', {
    sourceType: 'module'
  })

  let dataRender: DataRender;
  let computedRender: ComputedRender;
  let methodsRender: MethodsRender;
  let lifeCycleRender: LifeCycleRender = new LifeCycleRender(options, newAst)
  let propsRender: PropsRender;
  let watchRender: WatchRender;
  let mixinRender: MixinRender;
  let vuexRender: VuexRender;
  let importRender = ImportRender(newAst);
  const loopProperty = (path) => {
    if (!path.node.property) {
      return path.node.type
    }
    return loopProperty(path.context.parentPath)
  }

  const createSetupState = () => {
    importRender.addVueApi('getCurrentInstance')
    let node = t.memberExpression(t.callExpression(t.identifier('getCurrentInstance'), []), t.identifier('setupState'));
    return node
  }

  const replaceNodeName = (property, name, newNode) => {
    const computedReplace = () => {
      newNode.object = newNode.property;
      newNode.property = t.identifier('value')
      return true;
    }
    const templateLiteral = () => {
      if (property.type === 'TemplateLiteral') {
        let type = loopProperty(path)
        newNode.object = type === 'CallExpression' ? createSetupState() : t.identifier(options.dataName)
        return true;
      }
    }
    const dataReactive = () => {
      if (dataRender && dataRender?.hasReactiveKey(name)) {
        newNode.object = t.identifier(options.dataName);
        return true;
      }
    }
    const mixinReactive = () => {
      if (mixinRender && mixinRender.reactiveMap.has(name)) {
        newNode.object = t.identifier(mixinRender.reactiveMap.get(name))
        return true;
      }
    }
    const mixinCompute = () => {
      if (mixinRender && mixinRender.computeMap.has(name)) {
        return computedReplace()
      }
    }
    const dataCompute = () => {
      if (computedRender && computedRender?.hasComputedKey(name)) {
        return computedReplace()
      }
    }
    const dataProps = () => {
      if (propsRender && propsRender?.hasPropsKey(name)) {
        newNode.object = t.identifier('props')
        return true;
      }
    }
    const end = () => {
      newNode = newNode.property;
      return true
    }
    let callback = [templateLiteral, dataReactive, mixinReactive, mixinCompute, dataCompute, dataProps, end]
    for (let index = 0; index < callback.length; index++) {
      const element = callback[index];
      if (element()) {
        break;
      }
    }
    return newNode;
  }

  const ast = parse(code, {
    sourceType: 'module'
  })

  // 转义vuex
  vuexRender = new VuexRender(ast, options);
  await vuexRender.analysisAst()

  // 转义mixin
  traverse.default(ast, {
    ImportDeclaration(path) {
      importRender.addImportGlobal(path.node)
    },
    ObjectProperty(path) {
      const properties = path.node.value.properties;
      const nodeName = path.node.key.name;
      if (OptionsApi.Mixins === nodeName) {
        const elements = path.node.value.elements.map(item => item.name)
        mixinRender = new MixinRender(elements, importRender.importGlobal, options,newAst)
      }
    }
  })
  mixinRender && await mixinRender.initMixin()

  // 收集全局变量
  importRender.collectGlobalVariable(ast)

  traverse.default(ast, {
    ObjectMethod(path) {
      const nodeName = path.node.key.name;
      if (nodeName === OptionsApi.Data) {
        dataRender = new DataRender(path.node.body.body, options, newAst)
      } else if (LifeCycleRender.isCycle(nodeName)) {
        lifeCycleRender.init(path.node)
      }
    },
    ObjectProperty(path) {
      const properties = path.node.value.properties;
      const nodeName = path.node.key.name;
      switch (nodeName) {
        case OptionsApi.Computed:
          computedRender = new ComputedRender(properties, options, newAst)
          importRender.addVueApi('computed')
          break;
        case OptionsApi.Methods:
          methodsRender = new MethodsRender(properties, options, newAst)
          break;
        case OptionsApi.Props:
          propsRender = new PropsRender(path.node.value, options, newAst)
          break;
        case OptionsApi.Watch:
          watchRender = new WatchRender(path.node.value, dataRender, options, newAst)
          break;
        default:
          break;
      }
    },
    MemberExpression(path) {
      if (path.node.object.type === 'ThisExpression') {
        const property = path.node.property;
        const name = property.name;
        let newNode = path.node;
        newNode = replaceNodeName(property, name, newNode);

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
  [importRender, mixinRender, propsRender, dataRender, computedRender, methodsRender, watchRender, lifeCycleRender
  ].forEach(item => {
    item && item.render()
  })
  let newCode = await generate.default(newAst)
  console.log(newCode.code)
  return {
    newAst,
    newCode,
    importRender,
    dataRender,
    computedRender,
    methodsRender,
    lifeCycleRender,
    propsRender,
    watchRender,
    mixinRender
  }
}

export { scriptRender }

