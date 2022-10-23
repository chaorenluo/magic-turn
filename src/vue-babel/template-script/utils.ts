import path from 'path';
import fs from 'fs';
import t, { Identifier } from '@babel/types';
export const modifyCycleName = (str: string, prefix = '',) => {
  return prefix+str.charAt(0).toUpperCase()+str.substring(1)
}

export const addSuffix = (str: string, suffix: string) => {
  return str + suffix
}

export const getAllDirByFilename = (dir:string,filename: string)=>{
  let dirPath = path.resolve(__dirname, dir);
  let files = fs.readdirSync(dirPath)
  let resultArr: string[] = [];

  files.forEach(file => {
    let filePath = dir + '/' + file;
    if (file === filename) {
      return resultArr.push(filePath);
    }
    if (fs.statSync(filePath).isDirectory()) {
      resultArr.push(...getAllDirByFilename(filePath,filename));
    }
  })
  return resultArr
}

export const getPiniaName = (name:string) =>{
  return modifyCycleName(name,'use')+'Store'
}

export const getPiniaVariable = (name:string) =>{
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

export const createFnVariable = (variable:Array<string> | string,fnName:string,params:any=[]) =>{
  let callExpression = t.callExpression(t.identifier(fnName),params);
  let id:t.ObjectPattern | t.Identifier
  if(Array.isArray(variable)){
    let objectPropertyArr:Array<t.ObjectProperty> = [];
    variable.forEach(item=>{
      let identifier = t.identifier(item);
      objectPropertyArr.push(t.objectProperty(identifier,identifier));
    }) 
    id =t.objectPattern(objectPropertyArr)

  }else{
    id = t.identifier(variable)
  }
  let declarations = t.variableDeclarator(id, callExpression);
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

export const createReturnStatement = (params:Array<any>|any) =>{
  let returnStatementNode:t.ReturnStatement;
  if(Array.isArray(params)){
    let objectProperty:Array<t.ObjectProperty> = []
    params.forEach(item=>{
      let identifier =  t.identifier(item)
      objectProperty.push(t.objectProperty(identifier,identifier))
    })
    returnStatementNode = t.returnStatement(t.objectExpression(objectProperty))
  }else{
    returnStatementNode =t.returnStatement(t.identifier(params))
  }
  return returnStatementNode
}

export enum OptionsApi {
  Data = 'data',
  Computed = 'computed',
  Methods = 'methods',
  Props = 'props',
  Watch = 'watch',
  Mixins = 'mixins'
}

export enum VuexFn {
  MapState = 'mapState',
  MapGetters = 'mapGetters',
  mapMutations = 'mapMutations'
}