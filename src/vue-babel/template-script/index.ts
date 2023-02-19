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
import ComponentsRender from './ComponentsRender'
import VuexRender from './VuexRender'
import NuxtRender from "../template-nuxt";
import { OptionsApi,getCompoentEl,getRefName,replaceCross, createCallExpression,Vmodel} from './utils'
const { parse } = parser;




const scriptRender = async (code: string, options,filePath) => {
  let newAst = parse('', {
    sourceType: 'module'
  })

  let dataRender: DataRender;
  let computedRender: ComputedRender;
  let methodsRender: MethodsRender;
  let propsRender: PropsRender;
  let watchRender: WatchRender;
  let mixinRender: MixinRender;
  let vuexRender: VuexRender;
  let nuxtRender:NuxtRender;
  let componentsRender:ComponentsRender = new ComponentsRender()
  let importRender = ImportRender(newAst,options);
  let lifeCycleRender: LifeCycleRender = new LifeCycleRender(options, newAst,importRender)
  let ruleGlobal = ['$route','$router','$axios','$el']
  const loopProperty = (path) => {
    if (!path.node.property) {
      return path.node.type
    }
    return loopProperty(path.context.parentPath)
  }
  // 创建全局对象获取值
  const createSetupState = () => {
    return t.identifier(options.dataName);
  }

  const replaceNodeName = (property, name, newNode, path) => {
    // 提取页面中使用了mixin的变量
    mixinRender && mixinRender.mixinAdvance(name)
    const computedReplace = () => {
      newNode.object = newNode.property;
      newNode.property = t.identifier('value')
      return true;
    }
    const templateLiteral = () => {

      if (property.type === 'TemplateLiteral') {
        // let type = loopProperty(path)
        newNode.object = t.identifier(options.dataName);
        return true;
      }
    }
    const mixinReactive = () => {
      if (mixinRender && mixinRender.reactiveMap.has(name)) {
        const data = mixinRender.reactiveMap.get(name)
        newNode.object = t.identifier(data.name)
        return true;
      }
    }
    const mixinCompute = () => {
      if (mixinRender && mixinRender.computeMap.has(name)) {
        return computedReplace()
      }
    }
    const mixinRef = () => {
      const newName = getRefName(name);
      if (mixinRender && mixinRender.refMap.has(newName)) {
        newNode.property.name = newName;
        return computedReplace()
      }
    }
    const dataReactive = () => {
      if (dataRender && dataRender?.hasReactiveKey(name)) {
        newNode.object = t.identifier(options.dataName);
        return true;
      }
    }
    const dataCompute = () => {
      if (computedRender && computedRender?.hasComputedKey(name)) {
        return computedReplace()
      }
    }
    const vuexStore = () => {
      if (vuexRender && vuexRender.stateHookMap.has(name)) {
        const store = vuexRender.stateHookMap.get(name)
        const { prefix, value } = store;
        if(prefix){
          newNode.object = t.identifier(prefix)
        } else if(value) {
          newNode = newNode.property;
          newNode.name = value;
          newNode.loc.name = value;
        }
        return true;
      }
    }
    const dataProps = () => {
      // 兼容vue3 v-model写法
      if(name === 'value'){
        property.name = Vmodel.NAME
      }
      if (propsRender && propsRender?.hasPropsKey(property.name)) {
        newNode.object = t.identifier('props')
        return true;
      }
    }
    const virtualKey = () => {
      if (newNode.computed) {
        newNode.object = t.identifier(options.dataName)
        return true 
      }
    }
    const end = () => {
      newNode = newNode.property;
      return true
    }
    let callback = [templateLiteral,  mixinReactive, mixinCompute,mixinRef,dataReactive, dataCompute,vuexStore, dataProps,virtualKey, end]
    for (let index = 0; index < callback.length; index++) {
      const element = callback[index];
      if (element()) {
        break;
      }
    }
    return newNode;
  }

  let ast = parse(code, {
    sourceType: 'module'
  })

  const isExportIdentifier =  () =>{
    let body = ast.program.body;
    let keyName = '';
    let exportObj;
    for (let index = 0; index < body.length; index++) {
      const item = body[index];
      if(t.isExportDefaultDeclaration(item)){
        if(t.isIdentifier(item.declaration)){
          keyName = item.declaration.name
          break;
        }
      }
    }
    traverse.default(ast,{
      Identifier(path){
        if(path.node.name === keyName && t.isObjectExpression(path.parent.init)){
          exportObj  = path.parent.init
        
        }
      }
    })
    if(exportObj){
      let astArr = []
      body.forEach(item=>{
        if(t.isVariableDeclaration(item) && !t.isExportDefaultDeclaration(item)){
          let status = true;
          item.declarations.forEach(item=>{
              if(item.id.name == keyName){
                status=false;
              }
          })
          if(status){
            astArr.push(item)
          }
        }
      })
      astArr.push(t.exportDefaultDeclaration(exportObj))
      let file = t.file(t.program(astArr))
      ast = file;
    }
  }
  // 检测是否export default 的变量
 isExportIdentifier()
  
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
        mixinRender = new MixinRender(elements, importRender.importGlobal, options,newAst,filePath)
      }
    }
  })
  mixinRender && await mixinRender.initMixin()

    // 转义nuxt语法
  nuxtRender = new NuxtRender(ast, options,importRender)

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
          propsRender = new PropsRender(path.node.value, options, newAst,ast)
          break;
        case OptionsApi.Watch:
          watchRender = new WatchRender(path.node.value, {dataRender, vuexRender,computedRender,propsRender,mixinRender},options, newAst)
          break;
        case OptionsApi.Components:
          componentsRender.init(path.node.value,importRender,filePath)
        default:
          break;
      }
    },
    MemberExpression(path) { 
      if (path.node.object.type === 'ThisExpression' || path.node.object.name === '_this') {
        const property = path.node.property;
        const name = property.name;
        let newNode = path.node;
        newNode = replaceNodeName(property, name, newNode,path);

        if (name && name.indexOf('$') > -1) {
          // 处理refs语句
          if (name === '$refs') {
            importRender.addVueApi('ref');
            componentsRender.addExampleRef(path)
            if(!t.isMemberExpression(path.parent)) return
            if(path.parent.computed){
              path.parent.object =t.memberExpression(createCallExpression(t.identifier('getCurrentInstance'),[]),t.identifier('refs'))
              importRender.addVueApi('getCurrentInstance')
            }else{
              if (t.isStringLiteral(path.parent.property)) {
                path.parent.object = t.identifier(replaceCross(path.parent.property.value));
              }else {
                path.parent.object = path.parent.property
              }
    
              path.parent.object.name = getRefName(path.parent.object.name);
              path.parent.property = t.identifier('value')
            }
            // mixin里面存在的ref就不用创建了
            if(mixinRender && mixinRender.refMap.has(path.parent.object.name)){
              return
            }
            importRender.addRefKey(path.parent.object.name) 
            return
          }
          // 处理router
          if (name === "$router" || name === "$route") {
            newNode.name = name.replace('$', '')
            importRender.addRouter(newNode.name)
          }
          if(name === '$slots'){
            let name = 'slots';
            let value = 'useSlots';
            newNode.name = name.replace('$', '')
            importRender.addVueApi(value);
            importRender.addHookMap(name,value)
            if(t.isMemberExpression(path.parent) &&  path.parent.property.name === 'default'){
              path.parentPath.replaceWith(newNode)
            }
            return
          }
          if(name === '$el'){
            importRender.addVueApi('ref');
            let el = t.memberExpression(t.identifier('el_ref'),t.identifier('value'))
            importRender.addHookMap(getCompoentEl(),'ref')
            path.replaceWith(el);
            return
          }
          if(name === '$axios'){
            newNode.name = '$fetch'
          }
          if (importRender.isVueApi(name)) {
            newNode.name = importRender.conversionApi(name);
            importRender.addApiKey(newNode.name, path)
          } else if(!ruleGlobal.includes(name)) {
            importRender.addGlobal(name)
          }
        }
        path.replaceWith(newNode)
      }
    },
    VariableDeclarator(path){
      const node =path.node;
      if(t.isThisExpression(node.init)){
        node.init = createSetupState();
      }
    },
    CallExpression(path){
      path.node.arguments.forEach((arg,key)=>{
        if(t.isThisExpression(arg)){
          delete path.node.arguments[0]
        }
      })
    }

  });


  const initialization = () => {
     [importRender, mixinRender, propsRender, dataRender, computedRender, methodsRender, watchRender, lifeCycleRender
    ].forEach(item => {
      item &&  item.render()
    })
    return {
      newAst
    }
  }

  const render = async() =>{
    let newCode =  await generate.default(newAst).code;
    return {
      newCode,
      newAst
    }
  }

  return {
    initialization,
    render,
    newAst,
    importRender,
    vuexRender,
    dataRender,
    computedRender,
    methodsRender,
    lifeCycleRender,
    propsRender,
    watchRender,
    mixinRender,
    componentsRender
  }
}

export { scriptRender }

