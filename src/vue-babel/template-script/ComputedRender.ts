import t from '@babel/types';
import {createFnVariable,arrowFunctionExpression } from './utils';
interface FunctionVariable {
  isReadWrite: boolean;
  name: string;
  params: Array<any>;
  body:any
}

export default class ComputedRender{
  computeNode: Array<any>;
  computedKey: Set<string> = new Set();
  computeBodyMap: Map<string, FunctionVariable> = new Map();
  options: any;
  newAst:t.File;
  
  constructor(_computeNode:Array<any>,_options:any,_newAst:t.File) {
    this.computeNode = _computeNode;
    this.options = _options;
    this.newAst = _newAst;
    this.init()
  }

  init() { 
    this.computeNode.forEach(node => {
      if (node.type != 'SpreadElement') {
        const nodeName = node.key.name;
        this.computedKey.add(nodeName);
        // 判断是否是传入的get和set方法
        const isReadWrite = node.type === 'ObjectProperty'
        const computedItem = {
          isReadWrite,
          name: nodeName,
          params: node.params,
          body: isReadWrite ? node.value : node.body
        }
        this.computeBodyMap.set(nodeName,computedItem) 
      }
    })
  }

  hasComputedKey(key:string) {
    return this.computedKey.has(key)
  }

  async render() {
    this.computedKey.forEach(item=>{
      const computedItem = this.computeBodyMap.get(item);
      let computedNode:t.VariableDeclaration;
      if(!computedItem) return
      if (computedItem.isReadWrite) {
        computedNode = createFnVariable(computedItem.name,'computed',[computedItem.body])
      }else{
        let fn = arrowFunctionExpression(computedItem.params,computedItem.body)
        computedNode = createFnVariable(computedItem.name,'computed',[fn])
      }
      this.newAst.program.body.push(computedNode)
    })
  }
}