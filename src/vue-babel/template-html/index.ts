import traverse from "@babel/traverse";
import parser from "@babel/parser";
import generate from "@babel/generator";
import t from '@babel/types';
import { DomUtils } from "htmlparser2";

const { parse } = parser;
const RenderCallbacks:Array<Function> = [];
let reactiveKeyMap = new Set<string>();

const addPrefixIdentifier = (path: any, name: string) => {
  const identifierNode = path.node;
  let node = t.memberExpression(t.identifier('state'), identifierNode)

  path.replaceWith(node)
}

const replaceAttribsVal = (attribs:any, key:string) => {
  let code = attribs[key];
  if (!code) return
  let ast = null;
  if (code.charAt(0) === '{' && code.charAt(code.length - 1) === '}') {
    code = `let interpolation = ${code}`
    ast = parse(code).program.body[0]
    return
  } else {
    ast = parse(code)
  }
  const nodeIdentifier:Array<any> = [];
  traverse.default(ast, {
    Identifier(path: any) {
      if (!path.parent.property || path.key === 'object') {
        if(reactiveKeyMap.has(path.node.name))
        nodeIdentifier.push(path)
      }
    }
  })
  nodeIdentifier.forEach(pathItem => {
    addPrefixIdentifier(pathItem,'state')
  })
  RenderCallbacks.push(async() => {
    let attribsCode = await generate.default(ast);
    attribs[key] = attribsCode.code;
  })
}

const  dealWithAttribs = async (attribs:any) => {
  Object.keys(attribs).map(key => { 
    if (key.charAt(0) === 'v' || key.charAt(0) === ':') replaceAttribsVal(attribs, key);
  })
}

export const templateRender = async(dom: any, scriptData: any) => {
  if (scriptData) {
    reactiveKeyMap = scriptData.dataRender.reactiveKey; 
    DomUtils.findOne((elem) => {
      const attribs = elem.attribs;
      dealWithAttribs(attribs)
      
    }, dom, true)
    await Promise.all(RenderCallbacks.map(callback=>callback()))
  }
}