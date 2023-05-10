
import t from '@babel/types'
import { arrowFunctionExpression, variableFunction } from './utils'
import { Config } from '../../config'
interface MethodsVariable {
  name: string;
  params: Array<any>;
  body:any,
  async:boolean
}

export default class MethodsRender {
  methodsNode: Array<t.ObjectMethod | t.ObjectProperty | t.SpreadElement>;
  methodsKey: Set<string> = new Set();
  methodsBodyMap: Map<string, MethodsVariable> = new Map();
  options: Config;
  newAst:t.File;

  constructor (methodsNode: Array<any>, options:Config, _newAst:t.File) {
    this.methodsNode = methodsNode
    this.options = options
    this.newAst = _newAst
    this.init()
  }

  init () {
    this.methodsNode.forEach((node) => {
      if (t.isObjectProperty(node)) {
        const nodeName = (node.key as any).name
        const val = node.value as any
        if (!val.callee) return
        if (val.callee.name === 'debounce') {
          val.arguments[0].params = []
        }
        this.methodsKey.add(nodeName)
        const methodsItem = {
          name: nodeName,
          value: val
        }
        this.methodsBodyMap.set(nodeName, methodsItem as any)
        return
      }
      if (!t.isObjectProperty(node) && !t.isSpreadElement(node)) {
        const nodeName = (node.key as any).name
        this.methodsKey.add(nodeName)
        const methodsItem = {
          name: nodeName,
          params: node.params,
          body: node.body,
          async: node.async
        }
        this.methodsBodyMap.set(nodeName, methodsItem)
      }
    })
  }

  async render () {
    Array.from(this.methodsKey).forEach(item => {
      const methodsItem = this.methodsBodyMap.get(item)
      if (!methodsItem) return
      let fn
      if ((methodsItem as any).value) {
        fn = (methodsItem as any).value
      } else {
        fn = arrowFunctionExpression(methodsItem.params, methodsItem.body, methodsItem.async)
      }
      this.newAst.program.body.push(variableFunction(methodsItem.name, fn))
    })
  }
}
