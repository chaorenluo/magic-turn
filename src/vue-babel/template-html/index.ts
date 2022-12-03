import traverse from "@babel/traverse";
import parser from "@babel/parser";
import generate from "@babel/generator";
import t from '@babel/types';
import { render } from 'dom-serializer';
import { DomUtils, parseDocument, ElementType } from "htmlparser2";

import { getRefName, getCompoentEl,replaceCross } from '../template-script/utils'




const { parse } = parser;
let adapterVariable = 'let interpolation = '

export const templateRender = async (dom: any, scriptData: any, filePath: string,options:any) => {

  const RenderCallbacks: Array<Function> = [];

  const { dataRender, mixinRender, vuexRender, importRender } = scriptData;

  const addPrefixIdentifier = (path: any, replaceData: { prefix: string, value: string }) => {
    const { prefix, value } = replaceData;
    if (prefix) {
      const identifierNode = path.node;
      if (!t.isIdentifier(identifierNode)) return
      let node = t.memberExpression(t.identifier(prefix), identifierNode)
      try {
        if (t.isObjectProperty(path.parent)) {
          path.parent.value = node;
        } else {
          path.replaceWith(node)
        }
      } catch (error) {
        console.log(filePath, path.node.name)
      }
    } else {

      let node = t.identifier(value)
      path.replaceWith(node)
    }
  }


  const removeAdapterVal = (code) => {
    let newCode = code.replaceAll(adapterVariable, '')
    if (newCode.charAt(newCode.length - 1) == ';') {
      newCode = newCode.substring(0, newCode.length - 1);
    }
    return newCode;
  }

  const dealWithRoute = (path:any) => {
    let node = path.node;
    if (node.name === '$route' || node.name === '$router') {
        node.name = node.name.replace('$', '')
       importRender.addRouter(node.name)
    }
  }

  const loopInterpolation = (elem: any) => {
    let str = elem.data;
    let interpolationList: Array<any> = [];
    let pattern = /\{\{([\s\S]+?)\}\}/g;
    let strItem;
    while (strItem = pattern.exec(str)) {
      let ast = parse(strItem[1])
      let data = {
        oldValue: strItem[1],
      }
      traverse.default(ast, {
        Identifier(path: any) {
          if (!path.parent.property || path.key === 'object' || (path.key === 'property' && path.parent.computed)) {
            dealWithRoute(path)
            let name = path.node.name;
            mixinRender && mixinRender.mixinAdvance(name)
            if (mixinRender && mixinRender.reactiveMap.has(name)) {
              interpolationList.push({
                ...data,
                ast,
                path,
                replaceData: { value: '', prefix: mixinRender.reactiveMap.get(name).name }
              })
            }
            if (dataRender && dataRender.hasReactiveKey(name)) {
              interpolationList.push({
                ...data,
                ast,
                path,
                replaceData: { value: '', prefix: dataRender.options.dataName }
              })
            }
            if (vuexRender && vuexRender.stateHookMap.has(name)) {
              interpolationList.push({
                ...data,
                ast,
                path,
                replaceData: vuexRender.stateHookMap.get(name)
              })
            }
          }
        }
      })
    }

    interpolationList.forEach((value) => {
      addPrefixIdentifier(value.path, value.replaceData)
    })
    RenderCallbacks.push(async () => {
      const callback = async (item: any) => {
        let value = await generate.default(item.ast);
        let code = removeAdapterVal(value.code)
        elem.data = elem.data.replaceAll(item.oldValue, code);
      }
      await Promise.all(interpolationList.map(callback))
    })
  }

  const replaceAttribsVal = (attribs: any, key: string) => {
    let code = attribs[key];
    if (!code) return
    if (code.indexOf('$slots') > -1) {
      importRender.addVueApi('useSlots');
      importRender.addHookMap('slots', 'useSlots')
      code = code.replace('$slots', 'slots')
    }
    let ast = null;
    if (code.charAt(0) === '{' && code.charAt(code.length - 1) === '}') {
      code = `${adapterVariable}${code}`
    }
    ast = parse(code)
    const nodeIdentifier: Array<any> = [];
    traverse.default(ast, {
      Identifier(path: any) {
        if (!path.parent.property || path.key === 'object' || (path.key === 'property' && path.parent.computed)) {
          dealWithRoute(path);
          let name = path.node.name;
          mixinRender && mixinRender.mixinAdvance(name)
          if (dataRender && dataRender.hasReactiveKey(name)) {
            nodeIdentifier.push({
              path,
              replaceData: { value: '', prefix: dataRender.options.dataName }
            })
          }
          if (mixinRender && mixinRender.reactiveMap.has(name)) {
            nodeIdentifier.push({
              path,
              replaceData: { value: '', prefix: mixinRender.reactiveMap.get(name).name }
            })
          }
          if (vuexRender && vuexRender.stateHookMap.has(name)) {
            nodeIdentifier.push({
              path,
              replaceData: vuexRender.stateHookMap.get(name)
            })
          }
        }
      }
    })
    nodeIdentifier.forEach(pathItem => {
      addPrefixIdentifier(pathItem.path, pathItem.replaceData)
    })
    RenderCallbacks.push(async () => {
      let attribsCode = await generate.default(ast);

      attribs[key] = removeAdapterVal(attribsCode.code);
    })
  }

  const replaceInterpolation = (elem: any) => {
    if (elem.type === 'text') {
      loopInterpolation(elem)
    }
  }

  const updateRefName = (attribs: any, key: string) => {
    if (key === 'ref') {
      attribs[key] = getRefName(replaceCross(attribs[key]))
      mixinRender && mixinRender.mixinAdvance(attribs[key])
    }
  }

  const updateKey = (elem: any) => {
    const attribs = elem.attribs;
    if (attribs && attribs[':key']) {
      if (!attribs['v-for']) {
        delete attribs[':key'];
      }
    }
  }

  const addForKey = (elem: any) => {
    const attribs = elem.attribs;
    if (attribs && attribs['v-for']) {
      if (!attribs[':key']) {
        let data = attribs['v-for'];
        let arr = data.substring(data.indexOf('(') + 1, data.indexOf(')')).split(',');
        if (arr.length === 2) elem.attribs[':Key'] = arr[1]
      }
    }
  }
  const getTemplateParent = (elem: any) => {
    if (elem.name != 'template') {
        return elem
    }
   return getTemplateParent(elem)
  }

  const findChildSlot = (elem: any, slotTemplate:Set<any>,lostName: string) => {
    if(!elem) return slotTemplate
    for (let i = 0; i < elem.length; i++) { 
      const childrenItem = elem[i];
      const itemAttribs = childrenItem.attribs || {};
      let itemSlotName = itemAttribs['slot'] || itemAttribs['v-slot']
      if (itemSlotName === lostName) {
        childrenItem.attribs['collect-slot'] = '1';
        slotTemplate.add(childrenItem)
      }
    }
    return slotTemplate
  }

  const findRepeatSlot = (elem: any) => {
    let slotTemplate = new Set()
    if (elem.attribs['collect-slot']) {
      return slotTemplate
    }
    let slotName = elem.attribs['slot'] || elem.attribs['v-slot']
    // 找同级是否有重复的slot
    if (elem.parent && elem.parent.children) {
      const children = elem.parent.children;
      for (let i = 0; i < children.length; i++) {
        const itemAttribs = children[i].attribs || {};
        let itemSlotName = itemAttribs['slot'] || itemAttribs['v-slot']

        if (slotName === itemSlotName) {
          children[i].attribs['collect-slot'] = '1';
          slotTemplate.add(children[i])
        }
      }
    }
    // 如果父级是template那就要往上再找父级
    if (elem.parent && elem.parent.name === 'template') {
      const children = elem.parent.parent.children;
      for (let i = 0; i < children.length; i++) {
        const childrenItem = children[i];
        if (childrenItem.name === 'template') {
          findChildSlot(childrenItem.children,slotTemplate,slotName)
        }
        const itemAttribs = childrenItem.attribs || {};
        let itemSlotName = itemAttribs['slot'] || itemAttribs['v-slot']

        if (slotName === itemSlotName) {
          slotTemplate.add(children[i])
        }
      }
    }
    return slotTemplate
  }

  const updateSlot = (elem: any,slotArr:Array<Set<any>>) => {
    const attribs = elem.attribs;
    if (attribs && attribs['collect-slot']) {
      return
    }
    if (attribs && (attribs['slot'] || attribs['v-slot'])) {
      let slotList = findRepeatSlot(elem) 
      if (slotList.size >= 2) {
        slotArr.push(slotList)
        return
      }
    }
    if (attribs && (attribs['slot'] || attribs['v-slot']) && elem.name != 'template') {
      let slotName = attribs['slot'] || attribs['v-slot']
      delete attribs['slot']
      delete attribs['v-slot']
      delete attribs['v-else']
      let code = render(elem, {
        encodeEntities: 'utf8',
      })
      let newElement = parseDocument(`<template #${slotName}>${code}</template>`);
      DomUtils.replaceElement(elem, newElement)
    }
  }

  const restructuringSlot = (slotArr: Array<any>) => {
    if (slotArr.length === 0) return;
    slotArr.forEach(item => {
      let arr = Array.from(item);
      let code = '';
      let lastSlot = arr[arr.length - 1];
      let slotName = lastSlot.attribs['slot'] || lastSlot.attribs['v-slot']
  
      arr.forEach(v => {
        delete v.attribs['slot']
        delete  v.attribs['collect-slot']
        DomUtils.removeElement(v)
        if (v.parent.name === 'template') {
          v.attribs = { ...v.parent.attribs, ...v.attribs };
        }
        code += render(v, {
          encodeEntities: 'utf8',
        })
      })
      let slotCOde = `<template #${slotName}>${code}</template>`
      if (lastSlot.parent.name === 'template') {
        DomUtils.append(lastSlot.parent,parseDocument(slotCOde))
      } else {
        DomUtils.appendChild(lastSlot.parent,parseDocument(slotCOde))
      }
    })
  }

  const attribsUpdate = (elem:any) => {
    if (!options.labelAttribs) return;
    let labelData = options.labelAttribs[elem.name]
    if (labelData) {
      let attribs = elem.attribs;
      Object.keys(attribs).map(key => { 
        if (labelData[key]) {
          let val = attribs[key]; 
          let id = labelData[key]; 
          attribs[id] = val;
          delete attribs[key]
        }
      })
    }
  }

  const dealWithAttribs = async (attribs: any) => {
    Object.keys(attribs).map(key => {
      updateRefName(attribs, key)
      let firstChar = key.charAt(0);
      if (key.indexOf('v-') > -1 || firstChar === ':' || firstChar === '@') replaceAttribsVal(attribs, key);
    })
  }

  const setRootEl = (dom) => {
    const elName = getCompoentEl();
    if (importRender.hookMap.has(elName)) {
      dom.children.forEach(item => {
        if (item.type != 'text') {
          item.attribs['ref'] = elName;
        }
      });
    }
  }

  if (scriptData && dom) {
    setRootEl(dom)
    DomUtils.filter((elem: any) => {
      updateKey(elem)
      addForKey(elem)
      attribsUpdate(elem)
      const attribs = elem.attribs;
      attribs && dealWithAttribs(attribs)
      replaceInterpolation(elem)
    }, dom, true)
    await Promise.all(RenderCallbacks.map(callback => callback()))
    // 扫描Slot
    let slotArr:Array<Set<any>> = [];
    DomUtils.filter((elem: any) => {
      updateSlot(elem,slotArr)
    }, dom, true);
    restructuringSlot(slotArr)

  }
}