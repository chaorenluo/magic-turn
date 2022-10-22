import t from '@babel/types';
import {createFnVariable } from './utils';
export default class DataRender{
  dataNode: Array<any> = [];
  variableDeclaration: Array<any> = [];
  reactiveData: any = {};
  reactiveKey: Set<string> = new Set();
  options: any;
  newAst:t.File
  
  constructor(dataNode: Array<any>,options:any,_newAst:t.File) {
    this.dataNode = dataNode;
    this.options = options;
    this.newAst = _newAst;
    this.init();
  }


  setReactiveKey(properties: Array<any>) {
    properties.forEach((node) => {
      this.reactiveKey.add(node.key.name)
    })
  }

  hasReactiveKey(key:string) {
    return this.reactiveKey.has(key)
  }

  init() {
    this.dataNode.forEach((node) => {
      if (node.type === 'VariableDeclaration') {
        this.variableDeclaration.push(node)
      } else if (node.type === 'ReturnStatement') {
        this.setReactiveKey(node.argument.properties)
        this.reactiveData = node.argument;
      }
    })
  }

  async render() {
    if( this.variableDeclaration.length>0){
      this.newAst.program.body.push(...this.variableDeclaration)
    }
    let reactiveNode = createFnVariable(this.options.dataName,'reactive',[this.reactiveData])
    this.newAst.program.body.push(reactiveNode) 
  }
  
}