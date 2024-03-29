import traverse from '@babel/traverse'
import parser from '@babel/parser'
import { OptionsApi, getStoreUrl, piniaModuleItem, replaceIdentifier, replaceCross, modifyCycleName, VuexFn, getPiniaName, getPiniaVariable, createMemberExpression, createCallExpression } from './utils'
import t from '@babel/types'
import fs from 'fs'
import { piniaStart } from '../template-Pinia/index'
import PiniaRender from '../template-Pinia/PiniaRender'
import { Config } from '../../config'
type Arguments = Array<
  t.Expression | t.SpreadElement | t.JSXNamespacedName | t.ArgumentPlaceholder
  >;

export default class VuexRender {
  astNode:t.File;
  options:Config;
  stateHookMap = new Map();
  mutationsExportNode = new Set();
  piniaModules = new Map<string, piniaModuleItem>();
  piniaRender:PiniaRender | undefined;
  computedModules = new Set();
  methodsModules = new Set();
  defaultStoreName = 'index'

  constructor (_astNode: t.File, _options: Config) {
    this.astNode = _astNode
    this.options = _options
  }

  isFile (path: string) {
    const filePath = `${this.options.piniaStore.pathVal}/${path}.js`
    return fs.existsSync(filePath)
  }

  createComputed (methName: string, methBody: string | t.ArrowFunctionExpression, storeName?:string) {
    let fnBody
    if (typeof methBody === 'string') {
      const methBodyArr = methBody.split('/')
      methBodyArr[0] = getPiniaVariable(methBodyArr[0])
      const memberExpression = createMemberExpression(methBodyArr.reverse())
      const returnStatement = t.returnStatement(memberExpression)
      fnBody = t.blockStatement([returnStatement])
    }
    if (t.isArrowFunctionExpression(methBody as t.ArrowFunctionExpression)) {
      let statement
      if ((methBody as any).body.body) {
        statement = (methBody as any).body.body
      } else {
        statement = t.returnStatement((methBody as any).body)
      }

      replaceIdentifier(methBody as t.ArrowFunctionExpression, 'state', getPiniaVariable(storeName as string))
      fnBody = t.blockStatement(Array.isArray(statement) ? statement : [statement])
    }
    if (t.isStringLiteral(methBody as object)) {
      // fnBody = t.blockStatement([returnStatement])
      const name = getPiniaVariable(storeName as string)
      const memberExpression = createMemberExpression([name, (methBody as any).value].reverse())
      const returnStatement = t.returnStatement(memberExpression)
      fnBody = t.blockStatement([returnStatement])
    }
    const objectMethod = t.objectMethod('method', t.identifier(methName), [], fnBody as t.BlockStatement)
    this.computedModules.add(objectMethod)
  }

  createMutations (methName: string, methBody: string) {
    const methBodyArr = methBody.split('/')
    methBodyArr[0] = getPiniaVariable(methBodyArr[0])
    const memberExpression = createMemberExpression(methBodyArr.reverse())
    const spreadElement = t.spreadElement(t.identifier('args'))
    const callExpression = t.callExpression(memberExpression, [spreadElement])
    const returnStatement = t.returnStatement(callExpression)
    const blockStatement = t.blockStatement([returnStatement])
    const restElement = t.restElement(t.identifier('args'))
    const objectMethod = t.objectMethod('method', t.identifier(methName), [restElement], blockStatement)
    this.methodsModules.add(objectMethod)
  }

  dealWithVuex (args: Arguments, type:number) {
    const firstItem = args[0]
    const isArrayExpression = t.isArrayExpression(firstItem)
    const isObjectExpression = t.isObjectExpression(firstItem)
    if (isArrayExpression && args.length === 1) {
      firstItem.elements.forEach((item) => {
        const key = (item as t.StringLiteral).value
        const status = this.isFile(key)
        const importName = status ? key : this.defaultStoreName
        const storeName = getPiniaVariable(importName)
        this.piniaModules.set(importName, {
          importUrl: importName,
          importName
        })
        let data = {
          prefix: '',
          value: storeName
        }
        if (!status) {
          data = {
            prefix: storeName,
            value: ''
          }
        }
        this.stateHookMap.set(key, data)
        this.mutationsExportNode.add({
          name: key,
          node: createMemberExpression([key, storeName])
        })
      })
    }
    if (isObjectExpression && args.length === 1) {
      firstItem.properties.forEach((v) => {
        const keyName = (v as any).key.name
        const value = (v as any).value.value as string
        if (!value) return
        const valueArr = value.split('/')
        const status = this.isFile(getStoreUrl(valueArr))
        let aliasKey = this.matchingName(valueArr)
        const aliasVal = valueArr[valueArr.length - 1]
        let importUrl = getStoreUrl(valueArr)
        if (!status) {
          importUrl = getStoreUrl([this.defaultStoreName])
          aliasKey = this.defaultStoreName
        }
        const storeName = getPiniaVariable(aliasKey)
        const methBody = [aliasKey, aliasVal].join('/')
        this.piniaModules.set(aliasKey, {
          importUrl,
          importName: aliasKey
        })
        if (aliasVal === keyName) {
          this.stateHookMap.set(aliasVal, {
            prefix: storeName,
            value: ''
          })
          this.mutationsExportNode.add({
            name: aliasVal,
            node: createMemberExpression([aliasVal, storeName])
          })
        } else {
          type === 1 ? this.createComputed(keyName, methBody) : this.createMutations(aliasKey, methBody)
        }
      })
    }
    if (args.length === 2 && t.isObjectExpression(args[1])) {
      let key = (args[0] as any).value
      const properties = args[1].properties
      if (key.charAt(key.length - 1) === '/') {
        key = key.substr(0, key.length - 1)
      }
      const status = this.isFile(key)
      const name = status ? key : this.defaultStoreName
      const importName = name.replaceAll('/', '')
      this.piniaModules.set(importName, {
        importUrl: name,
        importName
      })
      properties.forEach(item => {
        const keyName = (item as any).key.name
        const value = (item as any).value
        const storeName = getPiniaVariable(importName)
        if (type === 1) {
          this.createComputed(keyName, value, importName)
        } else {
          const methBody = [importName, value.value].join('/')
          this.createMutations(keyName, methBody)
        }

        this.mutationsExportNode.add({
          name: keyName,
          node: createMemberExpression([keyName, storeName])
        })
      })
    }
    if (args.length === 2 && t.isArrayExpression(args[1])) {
      let key = (args[0] as any).value
      if (key.charAt(key.length - 1) === '/') {
        key = key.substr(0, key.length - 1)
      }
      const val = args[1].elements
      val.forEach((item) => {
        const status = this.isFile(key)
        const importName = key.replaceAll('/', '')
        const storeName = getPiniaVariable(importName)
        this.piniaModules.set(importName, {
          importUrl: key,
          importName
        })
        let data = {
          prefix: storeName,
          value: ''
        }
        if (!status) {
          data = {
            prefix: storeName,
            value: ''
          }
        }

        this.stateHookMap.set((item as any).value, data)
        this.mutationsExportNode.add({
          name: (item as any).value,
          node: createMemberExpression([(item as any).value, storeName])
        })
      })
    }
    if (!this.piniaModules.get('index')) {
      this.piniaModules.set('index', {
        importUrl: 'index',
        importName: 'index',
        isFilter: true
      })
    }
  }

  matchingName (array:Array<string>) {
    let str = ''
    const length = array.length
    const count = length === 1 ? length : length - 1
    for (let index = 0; index < count; index++) {
      const element = array[index]
      str += element
    }
    return str
  }

  propertiesForEach (properties: Arguments, callback: (argument:t.CallExpression, calleeName:string)=>void) {
    properties.forEach((item, index) => {
      if (t.isSpreadElement(item)) {
        const argument = item.argument as t.CallExpression
        const calleeName = (argument.callee as any).name
        callback(argument, calleeName)
      }
    })
  }

  analysisComputed (properties: Array<any>) {
    this.propertiesForEach(properties, (argument, calleeName) => {
      if (calleeName === VuexFn.MapState || calleeName === VuexFn.MapGetters) {
        this.dealWithVuex(argument.arguments, 1)
      }
    })
  }

  analysisMethods (properties: Array<any>) {
    this.propertiesForEach(properties, (argument, calleeName) => {
      if (calleeName === VuexFn.mapMutations || calleeName === VuexFn.mapActions) {
        this.dealWithVuex(argument.arguments, 2)
      }
    })
  }

  // 处理this.$store.dispatch | commit
  analysisCallExpression (path:any) {
    const args = path.node.arguments
    const val = args[0].value
    const fnArr = []
    if (!val) return
    const piniaPath = val.split('/')
    const key = replaceCross(piniaPath.length > 1 ? this.matchingName(piniaPath) : this.defaultStoreName)
    this.piniaModules.set(key, {
      importUrl: piniaPath.length > 1 ? getStoreUrl(piniaPath) : this.defaultStoreName,
      importName: key
    })
    if (piniaPath.length <= 1) {
      piniaPath.unshift(key)
    }
    fnArr.push(getPiniaVariable(key))
    fnArr.push(piniaPath[piniaPath.length - 1])
    const params = args.slice(1, args.length)
    const callExpression = createCallExpression(createMemberExpression(fnArr.reverse()), params)
    path.replaceWith(callExpression)
  }

  createPiniaImport (importName:string, importUrl:string) {
    if (importUrl.charAt(0) === '/') {
      importUrl = importUrl.substring(1, importUrl.length)
    }
    const hookStore = t.identifier(importName)
    const importSpecifier = t.importSpecifier(hookStore, hookStore)
    const stringLiteral = t.stringLiteral(`${this.options.piniaStore.aliasPrefix}/${importUrl}`)
    const importDeclaration = t.importDeclaration([importSpecifier], stringLiteral)
    return importDeclaration
  }

  createPiniaHook (name:string) {
    name = getPiniaVariable(name)
    const callExpression = t.callExpression(t.identifier(modifyCycleName(name, 'use')), [])
    const declarations = t.variableDeclarator(t.identifier(name), callExpression)
    const variableDeclaration = t.variableDeclaration('const', [declarations])
    return variableDeclaration
  }

  insertPiniaModules (program:t.Program) {
    const body = program.body
    const index = body.length - 1
    const imports:Array<t.ImportDeclaration | t.VariableDeclaration> = []
    const hooks:Array<t.VariableDeclaration> = []
    this.piniaModules.forEach(item => {
      if (!item.isFilter) {
        const importName = getPiniaName(item.importName)
        const importDeclaration = this.createPiniaImport(importName, item.importUrl)
        const variableDeclaration = this.createPiniaHook(item.importName)
        imports.push(importDeclaration)
        hooks.push(variableDeclaration)
      }
    })

    imports.concat(hooks).forEach(item => body.splice(index, 0, item))
  }

  addMethodStore (methodsNode: t.ObjectProperty) {
    if (methodsNode && (methodsNode as any).node && this.methodsModules.size > 0) {
      const properties = (methodsNode as any).node.value.properties
      this.methodsModules.forEach((item) => {
        properties.splice(1, 0, item)
      })
    }
  }

  // computedModules
  addComputedStore (gettersNode:any) {
    if (gettersNode && gettersNode.node && this.computedModules.size > 0) {
      const properties = gettersNode.node.value.properties
      this.computedModules.forEach((item) => {
        properties.splice(1, 0, item)
      })
    }
  }

  loopJoiningPath (path:any, filePath:Array<string>) {
    const parentPath = path.parentPath
    if (!t.isMemberExpression(parentPath.node)) {
      return
    }
    if (parentPath.node && parentPath.node.property) {
      filePath.push(parentPath.node.property.name)
      this.loopJoiningPath(parentPath, filePath)
    }
    return filePath
  }

  checkPath (pathArr:Array<string>) {
    let filePath = ''
    if (pathArr.length === 0) return filePath
    for (let index = 0; index < pathArr.length; index++) {
      const path = pathArr.slice(0, pathArr.length - index)
      const url = path.join('/')
      const status = this.isFile(url)
      if (status) {
        filePath = url
        break
      }
    }
    return filePath
  }

  queryTailNode (path:any, name:string) {
    const parentPath = path.parentPath
    if (!t.isMemberExpression(parentPath.node)) {
      return
    }
    if (parentPath.node.property && parentPath.node.property.name === name) {
      return parentPath
    }
    const node:any = this.queryTailNode(path.parentPath, name)
    return node
  }

  async analysisAst () {
    const _this = this
    let methodsNode
    let gettersNode
    traverse.default(this.astNode, {
      ObjectProperty (path: { node: { value: { properties: any }; key: { name: any } } }) {
        const properties = path.node.value.properties
        const nodeName = path.node.key.name
        switch (nodeName) {
          case OptionsApi.Computed:
            gettersNode = path
            _this.analysisComputed(properties)
            break
          case OptionsApi.Methods:
            methodsNode = path
            _this.analysisMethods(properties)
            break
          default:
            break
        }
      },
      CallExpression (path: { node: { callee: { property: { name: any } } } }) {
        if (path.node.callee.property) {
          const fnName = path.node.callee.property.name
          if (['commit', 'dispatch'].includes(fnName)) {
            _this.analysisCallExpression(path)
          }
        }
      },
      Identifier (path: { parent: { property: any }; parentPath: { parentPath: { node: { property: any} } }; node: { name: string } }) {
        let property = path.parent.property
        let parentPath:any = path.parentPath
        if (path.node.name === '$store') {
          property = path.parentPath.parentPath.node.property
          parentPath = path.parentPath.parentPath
        }
        if (['store', '$store'].includes(path.node.name) && property && property.name === 'state') {
          const filePath:any = []
          _this.loopJoiningPath(parentPath, filePath)
          const fileUrl = _this.checkPath(filePath)
          const importName = fileUrl.replaceAll('/', '')
          _this.piniaModules.set(importName, {
            importUrl: fileUrl,
            importName
          })
          const urlArr = fileUrl.split('/')
          const node = _this.queryTailNode(parentPath, urlArr[urlArr.length - 1])
          node && node.replaceWith(t.identifier(getPiniaVariable(importName)))
        }
      }

    })
    this.addComputedStore(gettersNode)
    this.addMethodStore((methodsNode as unknown) as t.ObjectProperty)
    this.insertPiniaModules(this.astNode.program)
    this.piniaRender = await piniaStart(this.options, this.piniaModules)
  }
}
