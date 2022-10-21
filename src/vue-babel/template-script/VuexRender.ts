import traverse from "@babel/traverse";
import parser from "@babel/parser";
import { OptionsApi, modifyCycleName, addSuffix,VuexFn } from "./utils";
import t from "@babel/types";
import fs from "fs";
import { piniaStart } from "../template-Pinia/index";
import PiniaRender from "../template-Pinia/PiniaRender";

type Arguments = Array<
  t.Expression | t.SpreadElement | t.JSXNamespacedName | t.ArgumentPlaceholder
  >;

  const { parse } = parser;

export default class VuexRender {
  astNode = {};
  options = {};
  importModules = new Set();
  hookModules = new Set();
  stateHookMap = new Map();
  piniaModules = new Set();
  piniaRender:PiniaRender;
  gettersModules = new Set();
  mutationsModules = new Set();
  deleteModules = new Set<Function>();

  constructor(_astNode: any, _options: any) {
    this.astNode = _astNode;
    this.options = _options;
  }

  updateName() {}

  isFile(path: string) {
    let filePath = `${this.options.piniaAliasVal}/${path}.js`;
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
    let memberExpression = t.memberExpression(t.identifier(methBodyArr[0]), t.identifier(methBodyArr[1]))
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
        let name = status ? key : "index";
        this.piniaModules.add(name);
        this.stateHookMap.set(key, addSuffix(name, "Store"));
      });
    }
  }

  dealWithGetters(args: Arguments) {
    args.forEach((item) => {
      if (item.type === 'ObjectExpression') {
        item.properties.forEach((v) => {
          let value = v.value.value as string;
          let gettersName = value.split('/')[0];
          this.piniaModules.add(gettersName);
          this.stateHookMap.set(gettersName, addSuffix(gettersName, "Store"));
          this.createComputed(v.key.name, value);
        });
      }
    });
  }

  dealWithMutations(args: Arguments) {
    args.forEach((item) => {
      if (item.type === 'ObjectExpression') {
        item.properties.forEach((v) => {
          let value = v.value.value as string;
          let mutationsName = value.split('/')[0];
          this.piniaModules.add(mutationsName);
          this.stateHookMap.set(mutationsName, addSuffix(mutationsName, "Store"));
          this.createComputed(v.key.name, value);
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
        this.deleteModules.add(() => {
          properties.splice(index,1)
        })
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
      if (calleeName === VuexFn.mapMutations) { 
        console.log(properties)
        this.dealWithMutations(argument.arguments)
      }
    })
  }

  async analysisAst() {
    const _this = this;
    traverse.default(this.astNode, {
      ObjectProperty(path) {
        const properties = path.node.value.properties;
        const nodeName = path.node.key.name;
        switch (nodeName) {
          case OptionsApi.Computed:
            _this.analysisComputed(properties);
            break;
          case OptionsApi.Methods:
              _this.analysisMethods(properties)
            break;
          default:
            break;
        }
      },
    });
    this.deleteModules.forEach(item=>item())
    this.piniaRender = await piniaStart(this.options,Array.from(this.piniaModules) as Array<string>)
  }
}
