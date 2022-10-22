import t from '@babel/types';
import {createFnVariable } from './utils';
export default class PropsRender{
  propsNode: Array<any> = [];
  propsKey: Set<string> = new Set();
  isArrayExpression=false;
  options: any;
  newAst:t.File;
  constructor(propsNode:any,options:any,_newAst:t.File) {
    this.propsNode = propsNode;
    this.options = options;
    this.newAst = _newAst;
    this.init();
  }

  hasPropsKey(key:string): boolean {
    return this.propsKey.has(key)
  }

  init() {
    this.isArrayExpression = this.propsNode.type === 'ArrayExpression'
    if(this.isArrayExpression){
      this.propsNode.elements.forEach((node: any) => {
        this.propsKey.add(node.value)
      })
    }else{
      this.propsNode.properties.forEach((node: any) => {
        this.propsKey.add(node.key.name)
      })
    }
  }


  async render() {
    const propsNode = createFnVariable('props','defineProps',[this.propsNode])
    this.newAst.program.body.push(propsNode)
  }
}