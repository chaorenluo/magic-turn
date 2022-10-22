
import t from '@babel/types';
import {arrowFunctionExpression,variableFunction } from './utils';
interface MethodsVariable {
  name: string;
  params: Array<any>;
  body:any,
  async:boolean
}


export default class MethodsRender{
  methodsNode: Array<t.ObjectMethod | t.ObjectProperty | t.SpreadElement>;
  methodsKey: Set<string> = new Set();
  methodsBodyMap: Map<string, MethodsVariable> = new Map();
  options: any;
  newAst:t.File;

  constructor(methodsNode: Array<any>,options:any,_newAst:t.File) {
    this.methodsNode = methodsNode;
    this.options = options;
    this.newAst = _newAst;
    this.init()
  }

  init() { 
    this.methodsNode.forEach(node => {
      if(node.type != 'ObjectProperty' && node.type != 'SpreadElement') {
        const nodeName = node.key.name;
        this.methodsKey.add(nodeName);
        const methodsItem = {
          name: nodeName,
          params: node.params,
          body: node.body,
          async:node.async
        }
        this.methodsBodyMap.set(nodeName,methodsItem)
      }
    })
  }

  async render() {
    Array.from(this.methodsKey).forEach(item=>{
      const methodsItem = this.methodsBodyMap.get(item);
      if(!methodsItem)return;
      let fn = arrowFunctionExpression(methodsItem.params,methodsItem.body,methodsItem.async);
      this.newAst.program.body.push(variableFunction(methodsItem.name,fn))
    })
  }

}