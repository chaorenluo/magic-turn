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