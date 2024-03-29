import fse from 'fs-extra'
import path from 'path'
import generate from '@babel/generator'
import t from '@babel/types'
import { scriptRender } from './index'
import { arrowFunctionExpression, variableFunction, createReturnStatement, createFnVariable, modifyCycleName, filterImport } from './utils'
import { Config } from '../../config'
export default class MixinRender {
  options: Config;
  mixinList: Array<string> = [];
  filesList: Array<any> = [];
  codeList: Array<any> = [];
  nodeList: Array<any> = [];
  reactiveMap:Map<string, any> = new Map();
  computeMap: Map<string, any> = new Map();
  methodsMap: Map<string, any> = new Map();
  refMap:Map<string, any> = new Map();
  newAst:t.File;
  importMixin = new Set<t.VariableDeclaration>();
  useAttribute = new Map<string, any>();
  filePath ='';
  static recordMixin:Map<string, any> = new Map();

  constructor (_mixinList:Array<string>, importGlobal:any, _options:Config, _newAst:t.File, _filePath:string) {
    this.options = _options
    this.newAst = _newAst
    this.mixinList = _mixinList
    this.filePath = _filePath
    importGlobal.forEach((item: { specifiers: any[]; source: { value: any } }) => {
      item.specifiers.forEach(specifier => {
        const name = specifier.local.name
        if (this.mixinList.includes(name)) {
          const sourceVal = item.source.value
          const file = this.getFilePath(sourceVal)
          const indexFile = this.getFilePath(sourceVal + '/index')
          const fileStatus = fse.existsSync(file)
          const indexFileStatus = fse.existsSync(indexFile)
          if (fileStatus || indexFileStatus) {
            this.filesList.push({
              path: fileStatus ? file : indexFile,
              name
            })
          } else {
            console.log('该mixin文件路径找不到----', file)
          }
        }
      })
    })
  }

  getFilePath (sourceVal:string) {
    const { alias } = this.options
    const pathVal = sourceVal.split('/')
    const filePathVal = this.filePath.split('/')
    const aliasItem = pathVal[0]
    const aliasPath = alias[pathVal[0]]
    let fileVal = sourceVal
    if (aliasPath) {
      fileVal = sourceVal.replace(aliasItem, aliasPath)
    } else {
      fileVal = path.join(filePathVal.slice(0, filePathVal.length - 1).join('/'), sourceVal)
    }
    const file = fileVal.replace('.js', '') + '.js' as string
    return file
  }

  async addMixinCode (filesList: Array<any>, nodeList: Array<any>) {
    const callback = async (item:any, key:any) => {
      const nodeItem = nodeList[key]
      const { methodsRender, computedRender, dataRender, vuexRender, initialization, importRender } = nodeItem
      const { newAst } = await initialization()

      const methodsKey = methodsRender ? Array.from(methodsRender.methodsKey) : []
      const computedKey = computedRender ? Array.from(computedRender.computedKey) : []
      const reactiveKey = dataRender ? [dataRender.options.dataName] : []
      const refKeys = importRender ? Array.from(importRender.refKey) : []
      const mutationsExportNode = vuexRender ? Array.from(Array.from(vuexRender.mutationsExportNode)) : []
      const hookValue = reactiveKey.concat(computedKey).concat(refKeys).concat(methodsKey).concat(mutationsExportNode)
      const mixinName = item.name
      const mixinHookName = modifyCycleName(mixinName, 'use')
      // 存储mixin的data变量
      if (dataRender && dataRender.reactiveKey.size > 0) {
        dataRender.reactiveKey.forEach((key: string) => this.reactiveMap.set(key, { name: dataRender.options.dataName, mixinName }))
      }
      // 存储mixin的computed变量
      if (computedKey && computedKey.length > 0) {
        computedKey.forEach(key => this.computeMap.set(key as string, { name: computedRender.options.dataName, mixinName }))
      }
      // 存储mixin的方法变量
      if (methodsKey && methodsKey.length > 0) {
        methodsKey.forEach(key => this.methodsMap.set(key as string, { ame: methodsRender ? methodsRender.options.dataName : (this.options.dataName as any).dataName, mixinName }))
      }
      // 存储mixin中ref变量
      if (refKeys && refKeys.length > 0) {
        refKeys.forEach(key => this.refMap.set(key as string, { name: key, mixinName }))
      }
      // vuex中的方法变量
      if (vuexRender && vuexRender.mutationsExportNode) {
        vuexRender.mutationsExportNode.forEach((item: { name: string }) => {
          this.methodsMap.set(item.name, { name: methodsRender ? methodsRender.options.dataName : this.options.dataName, mixinName })
        })
      }
      const importDeclaration:Array<t.ImportDeclaration> = []
      const methodBody:Array<any> = []
      newAst.program.body.forEach((item: object | null | undefined) => {
        if (t.isImportDeclaration(item)) {
          filterImport(item.source.value) && importDeclaration.push(item)
        } else {
          methodBody.push(item)
        }
      })
      const exportDefaultDeclaration = t.exportDefaultDeclaration(t.identifier(mixinHookName))
      const returnStatement = createReturnStatement(hookValue)
      const blockStatement = t.blockStatement([...methodBody, returnStatement])
      const arrowFn = arrowFunctionExpression([], blockStatement)
      const variableFn = variableFunction(mixinHookName, arrowFn)
      const program = t.program([...importDeclaration, variableFn, exportDefaultDeclaration])
      const file = t.file(program)
      nodeItem.newAst = file
      nodeItem.newCode = await generate.default(file).code
    }
    await Promise.all(filesList.map(callback))
  }

  async initMixin () {
    const fileCallback = async (item: any) => {
      const filePath = path.resolve(item.path)
      const fileCode = fse.readFileSync(filePath, { encoding: 'utf-8' })
      return { fileCode, name: item.name, filePath }
    }
    const scriptCallback = async (codeItem: any) => {
      const mixinOptions = { ...this.options, dataName: `${this.options.dataName}_${codeItem.name}` }
      const scriptCode = await scriptRender(codeItem.fileCode, mixinOptions, this.filePath)
      return { ...scriptCode, filePath: codeItem.filePath }
    }
    this.codeList = await Promise.all(this.filesList.map(fileCallback))
    this.nodeList = await Promise.all(this.codeList.map(scriptCallback))
    await this.addMixinCode(this.filesList, this.nodeList)
  }

  addUeAttribute (data: any) {
    const { name, mixinName } = data
    if (!this.useAttribute.has(mixinName)) {
      this.useAttribute.set(mixinName, new Set([name]))
    } else {
      const arr = this.useAttribute.get(mixinName)
      arr.add(name)
    }
  }

  mixinAdvance = (name: string) => {
    let data
    if (this.computeMap.has(name)) {
      data = this.computeMap.get(name)
    }
    if (this.methodsMap.has(name)) {
      data = this.methodsMap.get(name)
    }
    if (this.reactiveMap.has(name)) {
      data = this.reactiveMap.get(name)
      name = data.name
    }
    if (this.refMap.has(name)) {
      data = this.refMap.get(name)
      name = data.name
    }
    if (data) {
      this.addUeAttribute({ name, mixinName: data.mixinName })
    }
  }

  updateImportName (importName: string, type = 1) {
    const body = this.newAst.program.body
    for (let index = 0; index < body.length; index++) {
      const item = body[index]
      if (t.isImportDeclaration(item) && item.specifiers.length === 1) {
        const importNode = item.specifiers[0]
        const local = importNode.local
        if (local.name === importName) {
          if (type === 1) {
            local.name = modifyCycleName(importName, 'use')
          } else if (type === 2) {
            delete body[index]
          }
          break
        }
      }
    }
  }

  getDeleteMixin = () => {
    const setArr = new Set<string>()
    this.filesList.forEach(res => {
      setArr.add(res.name)
    })
    return setArr
  }

  render () {
    const delMixinSet = this.getDeleteMixin()
    this.useAttribute.forEach((item, key) => {
      delMixinSet.delete(key)
      this.updateImportName(key, 1)
      this.importMixin.add(createFnVariable(Array.from(item), modifyCycleName(key, 'use')))
    })
    // 删除没有使用的mixin
    delMixinSet.forEach(item => {
      this.updateImportName(item, 2)
    })
    this.importMixin.forEach(item => {
      this.newAst.program.body.push(item)
    })
  }
}
