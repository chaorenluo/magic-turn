import path from 'path';
import fse from 'fs-extra';
import os from 'os';
import t, { Identifier } from '@babel/types';
import traverse from "@babel/traverse";
import { options } from '../../config';
export const modifyCycleName = (str: string, prefix = '',) => {
  return prefix+str.charAt(0).toUpperCase()+str.substring(1)
}

export const addSuffix = (str: string, suffix: string) => {
  return str + suffix
}

export const checkSysPath = () =>{
  const os = require('os');
  if (os.type() == 'Windows_NT') {
    return '\\'
  }
  return '/'
}

export const adaptationFolder = (value:string)=>{
  if(!value) return value;
  let arr = value.split('.');
  let suffix = '.'+arr[arr.length]
  if(options.fileExtension.includes(suffix)){
    return value
  }
  return (fse.existsSync(value) ? value+'/index' : value).replaceAll('\\','/');
}


 export const humpToUnderline = (str: string): string => {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
 }


 export const underlineToHump = (str:string) => {
  if (!str) return ''
  return str.replace(/-(\w)/g, (_, letter: string) => {
    return letter.toUpperCase()
   })
 }

export const getAllDirByFilename = (dir:string,filename: string)=>{
  let dirPath = path.resolve(__dirname, dir);
  let files = fse.readdirSync(dirPath)
  let resultArr: string[] = [];

  files.forEach(file => {
    let filePath = dir + '/' + file;
    if (file === filename) {
      return resultArr.push(filePath);
    }
    if (fse.statSync(filePath).isDirectory()) {
      resultArr.push(...getAllDirByFilename(filePath,filename));
    }
  })
  return resultArr
}

export const getPiniaName = (name:string) =>{
  return modifyCycleName(name,'use')+'Store'
}

export const getPiniaVariable = (name:string) =>{
  if(name.indexOf('Store')>-1) return name
  return name +'Store'
}

export const createImport = (specifiers:Array<string>,source:string) =>{
  let importSpecifierArray:Array<t.ImportSpecifier> = [];
  specifiers.forEach(importName=>{
    let specifiersName = t.identifier(importName);
    let importSpecifier = t.importSpecifier(specifiersName, specifiersName)
    importSpecifierArray.push(importSpecifier)
  })
  let stringLiteral = t.stringLiteral(source) 
  let importDeclaration = t.importDeclaration(importSpecifierArray, stringLiteral);
  return importDeclaration
}

export const createFnVariable = (variable:Array<string> | string,fnName:string,params:any=[],isAwait = false) =>{
  let callExpression = t.callExpression(t.identifier(fnName),params);
  let id:t.ObjectPattern | t.Identifier
  if(Array.isArray(variable)){
    let objectPropertyArr:Array<t.ObjectProperty> = [];
    variable.forEach(item=>{
      let identifier = t.identifier(item);
      objectPropertyArr.push(t.objectProperty(identifier,identifier,false,true));
    }) 
    id =t.objectPattern(objectPropertyArr)

  }else{
    id = t.identifier(variable)
  }
  let declarations;
  if(isAwait){
    declarations = t.variableDeclarator(id,t.awaitExpression(callExpression));
  }else{
    declarations = t.variableDeclarator(id,callExpression);
  }
  let variableDeclaration = t.variableDeclaration('const', [declarations]);
  return variableDeclaration
}


export const arrowFunctionExpression = (params: (t.Identifier | t.RestElement | t.Pattern)[],body:t.BlockStatement | t.Expression,async=false) =>{
  let arrowFunctionExpression = t.arrowFunctionExpression(params,body,async)
 return arrowFunctionExpression
}

export const variableFunction = (variable:string,fn: t.ArrowFunctionExpression) =>{
  const id = t.identifier(variable);
  let declarations = t.variableDeclarator(id, fn);
  let variableDeclaration = t.variableDeclaration('const', [declarations]);
  return variableDeclaration
}

export const createArrayExpression = (arr:Array<string>) =>{
  let stringLiteralArr:Array<t.StringLiteral> = [];
  arr.forEach(item=>stringLiteralArr.push(t.stringLiteral(item)))
  return t.arrayExpression(stringLiteralArr)
}

export const createRunFunction = (calleeName:string,params:Array<any>=[]) =>{
  let callee = t.identifier(calleeName)
  const callExpression = t.callExpression(callee,params)
 return  t.expressionStatement(callExpression)
}

export const createObjectExpression = (params:Array<any>|any)=>{
  if(Array.isArray(params)){
    let objectProperty:Array<t.ObjectProperty> = []
    params.forEach(item => {
      if (typeof item === 'string') {
        let identifier =  t.identifier(item)
        objectProperty.push(t.objectProperty(identifier,identifier,false,true)) 
      } else if (item.name && item.node) {
        let identifier =  t.identifier(item.name)
        objectProperty.push(t.objectProperty(identifier,item.node)) 
      }
    })
    return t.objectExpression(objectProperty)
  }else{
    return t.identifier(params)
  }
}

export const createReturnStatement = (params:Array<any>|any) =>{
  return t.returnStatement(createObjectExpression(params))
}

export const isString = (value:any) =>{
 return Object.prototype.toString.call(value) === "[object String]";
}

export const createMemberExpression = (arr:Array<any>):t.MemberExpression  | t.Identifier =>{
  if(arr.length <=1){
   return  t.identifier(arr[0])
  }
  let val = arr.splice(0,1)
  return t.memberExpression(createMemberExpression(arr),t.identifier(val[0]));
}

export const createCallExpression = (callee:t.MemberExpression | t.Identifier | t.Expression,params:any):t.CallExpression =>{
  return t.callExpression(callee,params);
}

export const getRefName = (name: string) => {
  if(!name || name.indexOf('_ref')>-1) return name;
  return name+'_ref';
}

export const filterImport = (name:string) =>{
  let fillterName = ['vuex'];
  let status  = true;
  for (let index = 0; index < fillterName.length; index++) {
    const element = fillterName[index];
    if(name.indexOf(element) >-1){
      status=false;
      break;
    }
  }
  return status
}

export const getCompoentEl = () =>{
  return  'el_ref'
}

export const replaceCross = (str: string) => {
  return str.replaceAll('-', '_');
};
export const getStoreUrl= (arr:Array<string>):string =>{
  if(!Array.isArray(arr)) return '';
  let endCount = arr.length === 1 ? 1 : arr.length-1;
  return arr.slice(0, endCount).join('/')
}

export const replaceIdentifier = (ast,oldName,newName) =>{
  let statement = t.expressionStatement(ast)
  let program = t.program([statement])
  const file = t.file(program)
  traverse.default(file, {
    Identifier(path){
      let name = path.node.name;
      if(name === oldName){
        path.node.name = newName;
      }
    }
  })
}

export enum OptionsApi {
  Data = 'data',
  Computed = 'computed',
  Methods = 'methods',
  Props = 'props',
  Watch = 'watch',
  Mixins = 'mixins',
  Components = 'components'
}

export type piniaModuleItem = {
  importUrl:string,
  importName:string,
  isFilter?:boolean
}


export enum VuexFn {
  MapState = 'mapState',
  MapGetters = 'mapGetters',
  mapMutations = 'mapMutations',
  mapActions = 'mapActions'
}

export enum Vmodel {
  EMIT_NAME = 'update:modelValue',
  NAME = 'modelValue'
}

export type GetRenderType<T> = T extends (...args:any)=> infer Y ? Y :string;