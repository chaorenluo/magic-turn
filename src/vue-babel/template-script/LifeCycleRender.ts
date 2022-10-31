
import t from '@babel/types';
import {modifyCycleName,createRunFunction, arrowFunctionExpression, variableFunction} from './utils'

interface CycleVariable {
  name: string;
  params: Array<any>;
  body:any
}


const cycleTypeV3 = {
  beforeCreate: "beforeCreate",
  created:"created",
  beforeMount: "beforeMount",
  mounted: "mounted",
  beforeUpdate: "beforeUpdate",
  updated: "updated",
  beforeDestroy: 'beforeUnmount',
  destroyed: 'unmounted',
}

const ruleOuType = ['onBeforeCreate', 'onCreated'];


type CycleTypeV3Type = keyof typeof cycleTypeV3

export default class LifeCycleAnalysis {

  cycleKey: Set<string> = new Set<string>();
  cycleBodyMap: Map<string, CycleVariable> = new Map();
  newAst:t.File;
  options: any;

  constructor(options:any,_newAst:t.File) {
    this.options = options;
    this.newAst = _newAst;
  }

  static isCycle(nodeName:CycleTypeV3Type): boolean {
    return !!cycleTypeV3[nodeName]
  }

  init(cycleNode:any) {
    
    let nodeName  = modifyCycleName(cycleTypeV3[cycleNode.key.name as CycleTypeV3Type],'on');
    this.cycleKey.add(nodeName);
    const cycleItem = {
      name: nodeName,
      params: cycleNode.params,
      body:cycleNode.body
    }
    this.cycleBodyMap.set(nodeName, cycleItem);
  }

  dealWithCode(){
    Array.from(this.cycleKey).forEach(item=>{
      const cycleItem = this.cycleBodyMap.get(item);
      let cycleNode:Array<t.ExpressionStatement | t.VariableDeclaration> = [] ;
      if(!cycleItem) return;

      if (cycleItem && ruleOuType.includes(cycleItem.name)) {
        let arrowFn = arrowFunctionExpression(cycleItem.params,cycleItem.body)
        let variableNode = variableFunction(cycleItem.name,arrowFn);
        let runNode = createRunFunction(cycleItem.name)
        cycleNode.push(...[variableNode,runNode])
      }else{
       let arrowFn = arrowFunctionExpression(cycleItem.params,cycleItem.body)
       let runNode = createRunFunction(cycleItem.name,[arrowFn])
       cycleNode.push(runNode)
      }
      this.newAst.program.body.push(...cycleNode)
    })
  }

  async render() {
    this.dealWithCode();
  }




}