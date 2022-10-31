import fse from 'fs-extra'
import { readFile } from 'fs/promises'
import path from 'path'
import generate from "@babel/generator";
import t from '@babel/types';
import  { scriptRender } from './index'
import {arrowFunctionExpression,variableFunction,createReturnStatement,createFnVariable } from './utils';

export default class MixinRender{
  options: any;
  mixinList: Array<string> = [];
  filesList: Array<any> = [];
  codeList: Array<any> = [];
  nodeList: Array<any> = [];
  reactiveMap:Map<string, any> = new Map();
  computeMap: Map<string, any> = new Map();
  newAst:t.File;
  importMixin = new Set<t.VariableDeclaration>()
  static recordMixin:Map<string,any> = new Map();
  
  
  constructor(_mixinList:Array<string>,importGlobal:any,_options:any,_newAst:t.File) {
    this.options = _options;
    this.newAst = _newAst;
    const {alias } = this.options;
    this.mixinList = _mixinList;
    importGlobal.forEach(item => {
      item.specifiers.forEach(specifier => {
        const name = specifier.local.name;
        if (this.mixinList.includes(name)) {
          const sourceVal = item.source.value;
          const pathVal = sourceVal.split("/")
          const aliasItem = pathVal[0];
          const aliasPath = alias[pathVal[0]]
          let fileVal = sourceVal;
          if (aliasPath) {
            fileVal = sourceVal.replace(aliasItem, aliasPath);
          }
          const file = fileVal.replace('.js', '') + '.js' as string;
          let status = fse.existsSync(file)
          if (status) {
            this.filesList.push({
              path: file,
              name
            }) 
          } else {
            console.log("该mixin文件路径找不到----",file)
          }
        }
      })
    })
  }
   async addMixinCode (filesList: Array<any>, nodeList: Array<any>){
    const callback = async (item:any, key:any) => {
      const nodeItem = nodeList[key];
      const {methodsRender,computedRender,dataRender,importRender,newAst } = nodeItem
      const methodsKey = methodsRender ? Array.from(methodsRender.methodsKey) : [];
      const computedKey = computedRender ? Array.from(computedRender.computedKey) : [];
      const reactiveKey = dataRender ? [dataRender.options.dataName] : [];
      const hookValue = reactiveKey.concat(computedKey).concat(methodsKey);
      const mixinName = item.name
      // 存储mixin的data变量
      if (dataRender && dataRender.reactiveKey.size > 0) {
        dataRender.reactiveKey.forEach(key =>this.reactiveMap.set(key,dataRender.options.dataName))
      }
      // 存储mixin的computed变量
      if (computedKey && computedKey.length > 0) {
        computedKey.forEach(key =>this.computeMap.set(key,computedRender.options.dataName))
      }
      let importDeclaration:Array<t.ImportDeclaration> = []
      let methodBody:Array<any> = []
      newAst.program.body.forEach(item=>{
        if(t.isImportDeclaration(item)){
          importDeclaration.push(item);
        }else{
          methodBody.push(item);
        }
      })
      let exportDefaultDeclaration = t.exportDefaultDeclaration(t.identifier(mixinName))
      let returnStatement = createReturnStatement(hookValue)
      const blockStatement  = t.blockStatement([...methodBody,returnStatement])
      const arrowFn =  arrowFunctionExpression([],blockStatement)
      let variableFn = variableFunction(mixinName,arrowFn)
      let program = t.program([...importDeclaration,variableFn,exportDefaultDeclaration])
      const file = t.file(program)
      nodeItem.newAst = file;
      nodeItem.newCode =  await generate.default(file).code
      this.importMixin.add(createFnVariable(hookValue,mixinName));
    }
    await Promise.all(filesList.map(callback))

  }

  async initMixin() {
    let fileCallback = async (item: any) => {
      let filePath = path.resolve(item.path);
      let fileCode =  fse.readFileSync(filePath, { encoding: 'utf-8' })
      return {fileCode,name:item.name,filePath}
    }
    let scriptCallback = async (codeItem: any) => {
      let mixinOptions = { ...this.options, dataName: `${this.options.dataName}_${codeItem.name}` }
      const scriptCode = await scriptRender(codeItem.fileCode, mixinOptions);
      return {...scriptCode,filePath:codeItem.filePath}
    }
    this.codeList = await Promise.all(this.filesList.map(fileCallback));
    this.nodeList = await Promise.all(this.codeList.map(scriptCallback));
    await this.addMixinCode(this.filesList,this.nodeList)
  }

  render() {
    this.importMixin.forEach(item=>{
      this.newAst.program.body.push(item)
    })
  }
}