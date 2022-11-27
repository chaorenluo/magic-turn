import traverse from "@babel/traverse";
import parser from "@babel/parser";
import { OptionsApi, modifyCycleName,VuexFn,getPiniaName,getPiniaVariable,createMemberExpression,createCallExpression } from "./utils";
import t from "@babel/types";
import fs from "fs";
import { piniaStart } from "../template-Pinia/index";
import PiniaRender from "../template-Pinia/PiniaRender";

type Arguments = Array<
  t.Expression | t.SpreadElement | t.JSXNamespacedName | t.ArgumentPlaceholder
  >;

  const { parse } = parser;

export default class VuexRender {
  astNode:t.File;
  options = {};
  stateHookMap = new Map();
  mutationsExportNode = new Set();
  piniaModules = new Set<string>();
  piniaRender:PiniaRender;
  gettersModules = new Set();
  mutationsModules = new Set();
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
  
  
  createComputed(methName: string, methBody: string) {
    let methBodyArr = methBody.split('/');
    let memberExpression = t.memberExpression(t.identifier(methBodyArr[0]),t.identifier(methBodyArr[1]))
    let returnStatement = t.returnStatement(memberExpression)
    let blockStatement = t.blockStatement([returnStatement])
    let objectMethod = t.objectMethod('method', t.identifier(methName), [], blockStatement)
    this.gettersModules.add(objectMethod)
  }

  createMutations(methName: string, methBody: string) { 
    let methBodyArr = methBody.split('/');

    let memberExpression =  t.memberExpression(t.thisExpression(),t.identifier(methBodyArr[1]))
    let spreadElement = t.spreadElement(t.identifier('args'));
    let callExpression = t.callExpression(memberExpression,[spreadElement])
    let returnStatement = t.returnStatement(callExpression)
    let blockStatement = t.blockStatement([returnStatement])
    let restElement = t.restElement(t.identifier('args'))
    let objectMethod = t.objectMethod('method', t.identifier(methName), [restElement], blockStatement)
    this.mutationsModules.add(objectMethod)
  }

  dealWithState(args: Arguments) {
    const firstItem = args[0];
    if (t.isArrayExpression(firstItem) && args.length === 1) {
      firstItem.elements.forEach((item) => {
        let key = (item as t.StringLiteral).value;
        let status = this.isFile(key);
        let name = status ? key : this.defaultStoreName
        this.piniaModules.add(name);
        let data = {
          prefix:'',
          value:getPiniaVariable(name)
        }
        if (!status) {
          data = {
            prefix:getPiniaVariable(name),
            value:''
          }
        }

        this.stateHookMap.set(key, data);
      });
    }
  }

  dealWithGetters(args: Arguments) {
    args.forEach((item) => {
      if ( t.isObjectExpression(item)) {
        item.properties.forEach((v) => {
          let keyName = v.key.name;
          let value = v.value.value as string;
          let gettersName = value.split('/')[0];
          let gettersFn = value.split('/')[1];
          this.piniaModules.add(gettersName);
          if(gettersFn === keyName){
            this.stateHookMap.set(gettersFn, {
              prefix:getPiniaVariable(gettersName),
              value:'',
            });
          }else{
            this.createComputed(keyName, value);
          }        
        });
      }
    });
  }
  

  dealWithMutations(args: Arguments) {
    args.forEach((item) => {
      if (t.isObjectExpression(item)) {
        item.properties.forEach((v) => {
          let value = v.value.value as string;
          let keyName = v.key.name;
          let valueArr = value.split('/');
          let mutationsName = this.defaultStoreName;
          let mutationsFn = value;
          if (valueArr.length > 1) {
             mutationsName = valueArr[0];
             mutationsFn = valueArr[1];
          }
          this.piniaModules.add(valueArr.length > 1 ? mutationsName : this.defaultStoreName);
           mutationsName = getPiniaVariable(mutationsName)
          if(mutationsFn != keyName){
            this.createMutations(keyName, value);   
          }
          this.mutationsExportNode.add({
            name: mutationsFn,
            node:createMemberExpression([mutationsFn,mutationsName])
          });
          this.stateHookMap.set(mutationsFn, {
            prefix:mutationsName,
            value:''
          });
        });
      }
    });
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
      if (calleeName === VuexFn.MapState) {
        this.dealWithState(argument.arguments);
      }
      if (calleeName === VuexFn.MapGetters) {
        this.dealWithGetters(argument.arguments);
      }
    })
  }

  analysisMethods(properties: Array<any>) {
    this.propertiesForEach(properties, (argument,calleeName) => {
      if (calleeName === VuexFn.mapMutations || calleeName === VuexFn.mapActions) { 
        this.dealWithMutations(argument.arguments)
      }
    })
  }
  // 处理this.$store.dispatch | commit 
  analysisCallExpression(path:any){
    const args = path.node.arguments
    const val = args[0].value;
    if(!val) return;
    let piniaPath = val.split('/');
    let key = piniaPath.length>1 ? piniaPath[0] : this.defaultStoreName;
    this.piniaModules.add(key);
    if(piniaPath.length<=1){
      piniaPath.unshift(key)
    }
    piniaPath[0] = getPiniaVariable(piniaPath[0]);
    const params = args.slice(1,args.length);
    let callExpression = createCallExpression(createMemberExpression(piniaPath.reverse()),params);
    path.replaceWith(callExpression)
  }

  createPiniaImport(importName:string,piniaName:string){
    let hookStore = t.identifier(importName);
    let importSpecifier = t.importSpecifier(hookStore, hookStore)
    let stringLiteral = t.stringLiteral(`${this.options.piniaStore.aliasPrefix}/${piniaName}`) 
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
      let importName = getPiniaName(item)
      let importDeclaration = this.createPiniaImport(importName,item)
      let variableDeclaration = this.createPiniaHook(item)
      imports.push(importDeclaration);
      hooks.push(variableDeclaration)
    })

    imports.concat(hooks).forEach(item=>body.splice(index,0,item));
  }
  
  addMethodStore(methodsNode: t.ObjectProperty) {
    if (methodsNode && methodsNode.node && this.mutationsModules.size > 0) {
      let properties = methodsNode.node.value.properties;
      this.mutationsModules.forEach((item) => {
        properties.splice(1,0,item)
      })
    }
  }

  async analysisAst() {
    const _this = this;
    let methodsNode;
    traverse.default(this.astNode, {
      ObjectProperty(path) {
        const properties = path.node.value.properties;
        const nodeName = path.node.key.name;
        switch (nodeName) {
          case OptionsApi.Computed:
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
    this.addMethodStore(methodsNode)
    this.insertPiniaModules(this.astNode.program)
    this.piniaRender = await piniaStart(this.options,Array.from(this.piniaModules) as Array<string>,this.code)
  }
}
