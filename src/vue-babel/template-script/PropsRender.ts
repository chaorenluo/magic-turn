import t from '@babel/types'
import { createFnVariable, Vmodel } from './utils'
import traverse from '@babel/traverse'
export default class PropsRender {
  propsNode: any = [];
  propsKey: Set<string> = new Set();
  isArrayExpression=false;
  options: any;
  newAst: t.File;
  oldAst: t.File;
  constructor (propsNode:any, options:any, _newAst:t.File, ast:t.File) {
    this.propsNode = propsNode
    this.options = options
    this.newAst = _newAst
    this.oldAst = ast
    this.init()
  }

  hasPropsKey (key:string): boolean {
    return this.propsKey.has(key)
  }

  init () {
    this.isArrayExpression = this.propsNode.type === 'ArrayExpression'
    if (this.isArrayExpression) {
      this.propsNode.elements.forEach((node: any) => {
        if (node.value == 'value') {
          node.value = Vmodel.NAME
        }
        this.propsKey.add(node.value)
      })
    } else {
      const _this = this
      this.propsNode.properties.forEach((node: any) => {
        if (t.isSpreadElement(node)) {
          traverse.default(this.oldAst, {
            Identifier (path: { node: { name: any; }; parent: any | null | undefined; }) {
              if ((node.argument as any).name === path.node.name && !t.isSpreadElement(path.parent)) {
                path.parent.init.properties.forEach((v: { key: { name: string; }; }) => {
                  if (v.key) {
                    if (v.key.name == 'value') {
                      v.key.name = Vmodel.NAME
                    }
                    _this.propsKey.add(v.key.name)
                  }
                })
              }
            }
          })
        } else {
          if (node.key.name == 'value') {
            node.key.name = Vmodel.NAME
          }
          this.propsKey.add(node.key.name)
        }
      })
    }
  }

  async render () {
    const propsNode = createFnVariable('props', 'defineProps', [this.propsNode])
    this.newAst.program.body.push(propsNode)
  }
}
