import traverse from "@babel/traverse";
import parser from "@babel/parser";
import generate from "@babel/generator";
import t from '@babel/types';
import { DomUtils } from "htmlparser2";

const { parse } = parser;
let adapterVariable = 'let interpolation = '

export const templateRender = async (dom: any, scriptData: any) => {

  const RenderCallbacks: Array<Function> = [];
 
  const { dataRender,mixinRender} = scriptData;

  const addPrefixIdentifier = (path: any, name: string) => {
    const identifierNode = path.node;
    let node = t.memberExpression(t.identifier(name), identifierNode)
    path.replaceWith(node) 
  }


  const removeAdapterVal = (code) => {
    return code.replace(adapterVariable,'').replace(';','');
  }

  const loopInterpolation = (elem: any) => {
    let str = elem.data;
    let interpolationList: Array<any> = [];
    let pattern = /\{{(.+?)\}}/g;
    let strItem;
    while (strItem = pattern.exec(str)) {
      let ast = parse(strItem[1])
      let data = {
        oldValue: strItem[1],
      }
      traverse.default(ast, {
        Identifier(path: any) {
          if (!path.parent.property || path.key === 'object') {
            let name = path.node.name;
  
            if (dataRender && dataRender.hasReactiveKey(name)) {
              interpolationList.push({
                ...data,
                ast,
                path,
                replaceName: dataRender.options.dataName
              })
            }
            if (mixinRender && mixinRender.reactiveMap.has(name)) {
              interpolationList.push({
                ...data,
                ast,
                path,
                replaceName: mixinRender.reactiveMap.get(name)
              })
            }
          }
        }
      })
    }
  
    interpolationList.forEach((value) => {
      addPrefixIdentifier(value.path, value.replaceName)
    })
    RenderCallbacks.push(async () => {
      const callback = async(item:any) => {
        let value = await generate.default(item.ast);
        let code = removeAdapterVal(value.code)
        elem.data = elem.data.replaceAll(item.oldValue,code)
      }
     await  Promise.all(interpolationList.map(callback))
    })
  }

  const replaceAttribsVal = (attribs: any, key: string) => {
    let code = attribs[key];
    if (!code) return
    let ast = null;
    if (code.charAt(0) === '{' && code.charAt(code.length - 1) === '}') {
      code = `${adapterVariable}${code}`
    }
    ast = parse(code)
    const nodeIdentifier: Array<any> = [];
    traverse.default(ast, {
      Identifier(path: any) {
        if (!path.parent.property || path.key === 'object') {
          let name = path.node.name;

          if (dataRender && dataRender.hasReactiveKey(name)) {
            nodeIdentifier.push({
              path,
              replaceName: dataRender.options.dataName
            })
          }
          if (mixinRender && mixinRender.reactiveMap.has(name)) {
            nodeIdentifier.push({
              path,
              replaceName: mixinRender.reactiveMap.get(name)
            })
          }
        }
      }
    })
    nodeIdentifier.forEach(pathItem => {
      addPrefixIdentifier(pathItem.path, pathItem.replaceName)
    })
    RenderCallbacks.push(async () => {
      let attribsCode = await generate.default(ast);
      attribs[key] = removeAdapterVal(attribsCode.code)
    })
  }

  const replaceInterpolation = (elem:any) => {
    if (elem.type === 'text') {
      loopInterpolation(elem)
    }
  }

  const dealWithAttribs = async (attribs: any) => {
    Object.keys(attribs).map(key => {
      let firstChar = key.charAt(0);
      if (firstChar === 'v' || firstChar === ':' || firstChar==='@') replaceAttribsVal(attribs, key);
    })
  }
  if (scriptData) {
    DomUtils.filter((elem:any) => {
      const attribs = elem.attribs;
      attribs && dealWithAttribs(attribs)
      replaceInterpolation(elem)
    }, dom, true)
    await Promise.all(RenderCallbacks.map(callback => callback()))
  }
}