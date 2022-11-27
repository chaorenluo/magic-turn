import traverse from "@babel/traverse";
import parser from "@babel/parser";
import { OptionsApi,getStoreUrl,piniaModuleItem,replaceIdentifier, modifyCycleName,VuexFn,getPiniaName,getPiniaVariable,createMemberExpression,createCallExpression } from "./utils";
import t from "@babel/types";
import fs from "fs";
import { piniaStart } from "../template-Pinia/index";
import PiniaRender from "../template-Pinia/PiniaRender";

type Arguments = Array<
  t.Expression | t.SpreadElement | t.JSXNamespacedName | t.ArgumentPlaceholder
  >;


export default class VuexRender {
  astNode:t.File;
  options = {};
  stateHookMap = new Map();
  mutationsExportNode = new Set();
  piniaModules = new Map<string,piniaModuleItem>();
  piniaRender:PiniaRender;
  computedModules = new Set();
  methodsModules = new Set();
  defaultStoreName = "index"
  html = ''

  constructor(_astNode: t.File, _options: any,_this) {
    this.astNode = _astNode;
    this.options = _options;
    this.html = _this;
  }

  isFile(path: string) {
    let filePath = `${this.options.piniaStore.pathVal}/${path}.js`;
    return fs.existsSync(filePath);
  }

  
  createComputed(methName: string, methBody: string | t.ArrowFunctionExpression,storeName?:string) {
    let fnBody;
    if(typeof methBody === 'string'){
      console.log('methBody---',methBody)
      let methBodyArr = methBody.split('/');
      methBodyArr[0] =  getPiniaVariable(methBodyArr[0])
      let memberExpression = createMemberExpression(methBodyArr.reverse())
      let returnStatement = t.returnStatement(memberExpression)
      fnBody = t.blockStatement([returnStatement])
    }
    if(t.isArrowFunctionExpression(methBody)){
      let statement;
      if(methBody.body.body){
        statement = methBody.body.body;
      }else{
        statement = t.returnStatement(methBody.body)
      }
      replaceIdentifier(methBody,'state',getPiniaVariable(storeName))
      fnBody = t.blockStatement(Array.isArray(statement) ? statement : [statement])
    }

    let objectMethod = t.objectMethod('method', t.identifier(methName), [], fnBody)
    this.computedModules.add(objectMethod)
  }

  createMutations(methName: string, methBody: string) { 
    let methBodyArr = methBody.split('/');
    methBodyArr[0] = getPiniaVariable(methBodyArr[0])
    let memberExpression =  createMemberExpression(methBodyArr.reverse())
    let spreadElement = t.spreadElement(t.identifier('args'));
    let callExpression = t.callExpression(memberExpression,[spreadElement])
    let returnStatement = t.returnStatement(callExpression)
    let blockStatement = t.blockStatement([returnStatement])
    let restElement = t.restElement(t.identifier('args'))
    let objectMethod = t.objectMethod('method', t.identifier(methName), [restElement], blockStatement)
    this.methodsModules.add(objectMethod)
  }

  dealWithVuex(args: Arguments,type:number) {
    const firstItem = args[0];
    let isArrayExpression = t.isArrayExpression(firstItem) ;
    let isObjectExpression = t.isObjectExpression(firstItem) ;
    if (isArrayExpression && args.length === 1) {
      firstItem.elements.forEach((item) => {
        let key = (item as t.StringLiteral).value;
        let status = this.isFile(key);
        let importName = status ? key : this.defaultStoreName
        let storeName = getPiniaVariable(importName);
        this.piniaModules.set(importName,{
          importUrl:importName,
          importName
        });
        let data = {
          prefix:'',
          value:storeName
        }
        if (!status) {
          data = {
            prefix:storeName,
            value:''
          }
        }
        this.stateHookMap.set(key, data);
        this.mutationsExportNode.add({
          name: key,
          node:createMemberExpression([key,storeName])
        }); 
      });
    }
    if (isObjectExpression && args.length === 1) {
      firstItem.properties.forEach(v=>{
        let keyName = v.key.name;
        let value = v.value.value as string;
        let valueArr = value.split('/');
        let status = this.isFile(getStoreUrl(valueArr));
        let aliasKey = this.matchingName(valueArr);
        let aliasVal = valueArr[valueArr.length-1];
        let importUrl = getStoreUrl(valueArr);
        if(!status){
          importUrl = getStoreUrl([this.defaultStoreName]);
          aliasKey =this.defaultStoreName;
        }
        let storeName = getPiniaVariable(aliasKey);
        let methBody = [aliasKey,aliasVal].join('/');
        this.piniaModules.set(aliasKey,{
          importUrl,
          importName:aliasKey
        })
        if(aliasVal === keyName){
          this.stateHookMap.set(aliasVal, {
            prefix:storeName,
            value:'',
          });
          this.mutationsExportNode.add({
            name: aliasVal,
            node:createMemberExpression([aliasVal,storeName])
          });  
        }else{
          type ===1 ?  this.createComputed(keyName, methBody) : this.createMutations(aliasKey, methBody);
        }   
      })
    }
    if(args.length === 2 && t.isObjectExpression(args[1])){
      let key = args[0].value;
      let properties = args[1].properties;
      if(key.charAt(key.length-1) === '/'){
        key = key.substr(0,key.length-1)
      }
      let status = this.isFile(key);
      let name = status ? key : this.defaultStoreName;
      let importName = name.replaceAll('/','');
      this.piniaModules.set(name,{
        importUrl:name,
        importName
      });
      properties.forEach(item => {
        let keyName = item.key.name;
        let value = item.value;
        let storeName = getPiniaVariable(importName);
        type ===1 ?  this.createComputed(keyName, value,importName) : this.createMutations(keyName, value);
        this.mutationsExportNode.add({
          name: keyName,
          node:createMemberExpression([keyName,storeName])
        }); 
      }); 
    }
    if(args.length === 2  && t.isArrayExpression(args[1])){
      let key = args[0].value;
      if(key.charAt(key.length-1) === '/'){
        key = key.substr(0,key.length-1)
      }
      let val = args[1].elements;
      val.forEach((item) => {
        let status = this.isFile(key);
        let importName = key.replaceAll('/','');
        let storeName = getPiniaVariable(importName);
        this.piniaModules.set(key,{
          importUrl:key,
          importName
        });
        let data = {
          prefix:storeName,
          value:''
        }
        if (!status) {
          data = {
            prefix:storeName,
            value:''
          }
        }

        this.stateHookMap.set(item.value, data);
        this.mutationsExportNode.add({
          name: item.value,
          node:createMemberExpression([item.value,storeName])
        }); 
      });
    }
    
  }

  matchingName(array:Array<string>){
    let str ='';
    let length = array.length;
    let count = length === 1 ? length : length-1;
    for (let index = 0; index < count; index++) {
      const element = array[index];
      str+=element
    }
    return str
  }


  propertiesForEach(properties: Arguments,callback: (argument:t.CallExpression,calleeName:string)=>void) {
    properties.forEach((item,index) => {
      if (t.isSpreadElement(item)) {
        const argument = item.argument as t.CallExpression;
        const calleeName = argument.callee.name;
        callback(argument, calleeName)
      }
    });
  }

  analysisComputed(properties: Array<any>) {
    this.propertiesForEach(properties, (argument,calleeName) => {
      if (calleeName === VuexFn.MapState || calleeName === VuexFn.MapGetters) { 
        this.dealWithVuex(argument.arguments,1);
      }
    })
  }

  analysisMethods(properties: Array<any>) {
    this.propertiesForEach(properties, (argument,calleeName) => {
      if (calleeName === VuexFn.mapMutations || calleeName === VuexFn.mapActions) { 
        this.dealWithVuex(argument.arguments,2)
      }
    })
  }
  // 处理this.$store.dispatch | commit 
  analysisCallExpression(path:any){
    const args = path.node.arguments
    const val = args[0].value;
    let fnArr = [];
    if(!val) return;
    let piniaPath = val.split('/');
    let key = piniaPath.length>1 ? this.matchingName(piniaPath) : this.defaultStoreName;
    this.piniaModules.set(key,{
      importUrl:piniaPath.length > 1 ? getStoreUrl(piniaPath) : this.defaultStoreName,
      importName:key
    })
    if(piniaPath.length<=1){
      piniaPath.unshift(key)
    }
    fnArr.push(getPiniaVariable(key));
    fnArr.push(piniaPath[piniaPath.length-1])
    const params = args.slice(1,args.length);
    let callExpression = createCallExpression(createMemberExpression(fnArr.reverse()),params);
    path.replaceWith(callExpression)
  }

  createPiniaImport(importName:string,importUrl:string){
    if(importUrl.charAt(0) === '/'){
      importUrl = importUrl.substring(1,importUrl.length)
    }
    let hookStore = t.identifier(importName);
    let importSpecifier = t.importSpecifier(hookStore, hookStore)
    let stringLiteral = t.stringLiteral(`${this.options.piniaStore.aliasPrefix}/${importUrl}`) 
    let importDeclaration = t.importDeclaration([importSpecifier], stringLiteral);
    return importDeclaration
  }
  createPiniaHook(name:string){
    name = getPiniaVariable(name)
    let callExpression = t.callExpression(t.identifier(modifyCycleName(name,'use')),[]);
    let declarations = t.variableDeclarator(t.identifier(name), callExpression);
    let variableDeclaration = t.variableDeclaration('const', [declarations]);
    return variableDeclaration
  }


  insertPiniaModules(program:t.Program){
    let body = program.body
    let index = body.length-1;
    let imports:Array<t.ImportDeclaration> = [];
    let hooks:Array<t.VariableDeclaration> = [];
    this.piniaModules.forEach(item=>{
      let importName = getPiniaName(item.importName)
      let importDeclaration = this.createPiniaImport(importName,item.importUrl)
      let variableDeclaration = this.createPiniaHook(item.importName)
      imports.push(importDeclaration);
      hooks.push(variableDeclaration)
    })

    imports.concat(hooks).forEach(item=>body.splice(index,0,item));
  }
  
  addMethodStore(methodsNode: t.ObjectProperty) {
    if (methodsNode && methodsNode.node && this.methodsModules.size > 0) {
      let properties = methodsNode.node.value.properties;
      this.methodsModules.forEach((item) => {
        properties.splice(1,0,item)
      })
    }
  }
// computedModules
  addComputedStore(gettersNode:t.ObjectProperty){
    if (gettersNode && gettersNode.node && this.computedModules.size > 0) {
      let properties = gettersNode.node.value.properties;
      this.computedModules.forEach((item) => {
        properties.splice(1,0,item)
      })
    }
  }

  async analysisAst() {
    const _this = this;
    let methodsNode;
    let gettersNode;
    traverse.default(this.astNode, {
      ObjectProperty(path) {
        const properties = path.node.value.properties;
        const nodeName = path.node.key.name;
        switch (nodeName) {
          case OptionsApi.Computed:
            gettersNode = path;
            _this.analysisComputed(properties);
            break;
          case OptionsApi.Methods:
              methodsNode = path;
              _this.analysisMethods(properties)
            break;
          default:
            break;
        }
      },
      CallExpression(path){
        if(path.node.callee.property){
          let fnName = path.node.callee.property.name;
          if(['commit','dispatch'].includes(fnName)){
            _this.analysisCallExpression(path)
          }
        }
      }
    });
    this.addComputedStore(gettersNode);
    this.addMethodStore(methodsNode)
    this.insertPiniaModules(this.astNode.program)
    this.piniaRender = await piniaStart(this.options,this.piniaModules)
  }
}
