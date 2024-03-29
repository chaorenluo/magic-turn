
import t from '@babel/types'
import importRender from './ImportRender'
import { modifyCycleName, createRunFunction, arrowFunctionExpression, variableFunction, GetRenderType } from './utils'
import { Config } from '../../config'
interface CycleVariable {
  name: string;
  params: Array<any>;
  body: any,
  async?:boolean
}

type ImportRenderType = GetRenderType<typeof importRender>

const cycleTypeV3 = {
  beforeCreate: 'beforeCreate',
  created: 'created',
  beforeMount: 'beforeMount',
  mounted: 'mounted',
  beforeUpdate: 'beforeUpdate',
  updated: 'updated',
  beforeDestroy: 'beforeUnmount',
  destroyed: 'unmounted'
}

const ruleOuType = ['onBeforeCreate', 'onCreated']

type CycleTypeV3Type = keyof typeof cycleTypeV3

export default class LifeCycleAnalysis {
  cycleKey: Set<string> = new Set<string>();
  cycleBodyMap: Map<string, CycleVariable> = new Map();
  newAst:t.File;
  options: Config;
  importRender:ImportRenderType;

  constructor (options:Config, _newAst:t.File, _importRender:ImportRenderType) {
    this.options = options
    this.newAst = _newAst
    this.importRender = _importRender
  }

  static isCycle (nodeName:CycleTypeV3Type): boolean {
    return !!cycleTypeV3[nodeName]
  }

  init (cycleNode:any) {
    const nodeName = modifyCycleName(cycleTypeV3[cycleNode.key.name as CycleTypeV3Type], 'on')
    this.importRender.addVueApi(nodeName)
    this.cycleKey.add(nodeName)
    const cycleItem = {
      name: nodeName,
      params: cycleNode.params,
      body: cycleNode.body,
      async: cycleNode.async
    }
    this.cycleBodyMap.set(nodeName, cycleItem)
  }

  dealWithCode () {
    Array.from(this.cycleKey).forEach(item => {
      const cycleItem = this.cycleBodyMap.get(item)
      const cycleNode:Array<t.ExpressionStatement | t.VariableDeclaration> = []
      if (!cycleItem) return

      if (cycleItem && ruleOuType.includes(cycleItem.name)) {
        const arrowFn = arrowFunctionExpression(cycleItem.params, cycleItem.body, cycleItem.async)
        const variableNode = variableFunction(cycleItem.name, arrowFn)
        const runNode = createRunFunction(cycleItem.name)
        cycleNode.push(...[variableNode, runNode])
      } else {
        const arrowFn = arrowFunctionExpression(cycleItem.params, cycleItem.body, cycleItem.async)
        const runNode = createRunFunction(cycleItem.name, [arrowFn])
        cycleNode.push(runNode)
      }
      this.newAst.program.body.push(...cycleNode)
    })
  }

  async render () {
    this.dealWithCode()
  }
}
