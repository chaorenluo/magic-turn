import t from '@babel/types'
import traverse from '@babel/traverse'
import { createRunFunction, createCallExpression, arrowFunctionExpression, createObjectExpression, createFnVariable, GetRenderType } from '../template-script/utils'
import ImportRender from '../template-script/ImportRender'

type ImportRenderType = GetRenderType<typeof ImportRender>
export default class NuxtRender {
    astNode:t.File;
    options = {};
    pageMetaMap = new Map();
    importRender:ImportRenderType;
    nuxtHookNode = new Set();
    nuxtContext = new Set(['req', 'env', 'params', 'query', 'error', 'redirect', 'res']);

    constructor (_ast:t.File, _options:any, _importRender:ImportRenderType) {
      this.astNode = _ast
      this.options = _options
      this.importRender = _importRender
      this.init()
    }

    addProgramBody (statement:t.ExpressionStatement | t.VariableDeclaration) {
      const body = this.astNode.program.body
      const index = body.length - 1
      body.splice(index, 0, statement)
    }

    createDefaultValue (hookName:string, attributeName:string, paramsName:string) {
      const headers = createCallExpression(t.identifier(hookName), [])
      const objectExpression = t.objectExpression([t.objectProperty(t.identifier(attributeName), headers)])
      return t.assignmentPattern(t.identifier(paramsName), objectExpression)
    }

    createContextNode (element:t.ObjectProperty, contextName:string) {
      if (contextName === 'req') {
        if (!this.nuxtHookNode.has(contextName)) {
          element.value = this.createDefaultValue('useRequestHeaders', 'headers', 'req')
          this.nuxtHookNode.add(contextName)
        }
      }
    }

    updateAsyncData (objectMethod:t.ObjectMethod) {
      const file = t.file(t.program([t.exportDefaultDeclaration(t.objectExpression([objectMethod]))]))
      const _this = this
      traverse.default(file, {
        ObjectPattern (path:any) {
          if (path.parent.key && path.parent.key.name === 'asyncData') {
            path.node.properties.forEach((element: any) => {
              if (!element.key) {
                return
              }
              const paramsName = element.key.name
              if (_this.nuxtContext.has(paramsName)) {
                _this.createContextNode(element, paramsName)
              }
            })
          }
        }
      })
    }

    init () {
      const exportDefaultDeclaration = this.astNode.program.body.filter(item => t.isExportDefaultDeclaration(item))
      if (exportDefaultDeclaration.length === 0) return
      const properties = (exportDefaultDeclaration[0] as any).declaration.properties
      if (!properties) return
      for (let index = 0; index < properties.length; index++) {
        const element = properties[index]
        const name = element.key.name
        if (t.isObjectMethod(element) && name === 'head') {
          this.renderHead(element.body)
        }
        if (t.isObjectProperty(element) && name === 'middleware') {
          this.pageMetaMap.set('middleware', element.value)
        }
        if (t.isObjectMethod(element) && (name === 'asyncData' || name === 'fetch')) {
          this.updateAsyncData(element)
          this.renderAsyncData(element)
        }
      }
      // if(asyncDataNode.node ){
      //     properties[asyncDataNode.key].body.body.unshift(createFnVariable('req','useRequestHeaders',[]))
      //     // this.updateAsyncData(asyncDataNode)
      //     this.renderAsyncData(asyncDataNode.node)
      // }
      this.renderPageMeta()
    }

    renderAsyncData (objectMethod:t.ObjectMethod) {
      const functionExpression = arrowFunctionExpression(objectMethod.params, objectMethod.body, objectMethod.async)
      const statement = createFnVariable('asyncData', 'useAsyncData', [functionExpression], true)
      this.addProgramBody(statement)
    }

    renderPageMeta () {
      const objectExpression: Array<any> = []
      if (this.pageMetaMap.size > 0) {
        this.pageMetaMap.forEach((value, key) => {
          objectExpression.push({
            name: key,
            node: value
          })
        })
        const statement = createRunFunction('definePageMeta', [createObjectExpression(objectExpression)])
        this.addProgramBody(statement)
      }
    }

    renderHead (body:t.BlockStatement) {
      const callExpressio = createCallExpression(arrowFunctionExpression([], body), [])
      const statement = createRunFunction('useHead', [callExpressio])
      this.addProgramBody(statement)
    }
}
