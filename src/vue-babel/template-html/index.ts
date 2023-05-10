import traverse from '@babel/traverse'
import parser from '@babel/parser'
import generate from '@babel/generator'
import t from '@babel/types'
import { render } from 'dom-serializer'
import { DomUtils, parseDocument } from 'htmlparser2'

import { getRefName, getCompoentEl, replaceCross, underlineToHump } from '../template-script/utils'

const { parse } = parser
const adapterVariable = 'let interpolation = '

export const templateRender = async (dom: any, scriptData: any, filePath: string, options:any) => {
  const RenderCallbacks: Array<()=>void> = []

  const { dataRender, mixinRender, vuexRender, importRender, componentsRender } = scriptData

  const addPrefixIdentifier = (path: any, replaceData: { prefix: string, value: string }) => {
    const { prefix, value } = replaceData
    if (prefix) {
      const identifierNode = path.node
      if (!t.isIdentifier(identifierNode)) return
      const node = t.memberExpression(t.identifier(prefix), identifierNode)
      try {
        if (t.isObjectProperty(path.parent)) {
          path.parent.value = node
        } else {
          path.replaceWith(node)
        }
      } catch (error) {
        console.log(filePath, path.node.name)
      }
    } else {
      const node = t.identifier(value)
      path.replaceWith(node)
    }
  }

  const removeAdapterVal = (code:string) => {
    let newCode = code.replaceAll(adapterVariable, '')
    if (newCode.charAt(newCode.length - 1) == ';') {
      newCode = newCode.substring(0, newCode.length - 1)
    }
    return newCode
  }

  const dealWithRoute = (path:any) => {
    const node = path.node
    if (node.name === '$route' || node.name === '$router') {
      node.name = node.name.replace('$', '')
      importRender.addRouter(node.name)
    }
  }

  const loopInterpolation = (elem: any) => {
    const str = elem.data
    const interpolationList: Array<any> = []
    const pattern = /\{\{([\s\S]+?)\}\}/g
    let strItem
    // eslint-disable-next-line no-cond-assign
    while (strItem = pattern.exec(str)) {
      const ast = parse(strItem[1], {
        plugins: ['jsx']
      })
      const data = {
        oldValue: strItem[1]
      }
      traverse.default(ast, {
        Identifier (path: any) {
          if (!path.parent.property || path.key === 'object' || (path.key === 'property' && path.parent.computed)) {
            dealWithRoute(path)
            const name = path.node.name
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
        const value = await generate.default(item.ast)
        const code = removeAdapterVal(value.code)
        elem.data = elem.data.replaceAll(item.oldValue, code)
      }
      await Promise.all(interpolationList.map(callback))
    })
  }

  const replaceAttribsVal = (attribs: any, key: string) => {
    let code = attribs[key].trim()
    if (!code) return
    if (code.indexOf('$slots') > -1) {
      importRender.addVueApi('useSlots')
      importRender.addHookMap('slots', 'useSlots')
      code = code.replace('$slots', 'slots')
    }
    let ast:any = null
    if (code.charAt(0) === '{' && code.charAt(code.length - 1) === '}') {
      code = `${adapterVariable}${code}`
    }
    ast = parse(code, {
      plugins: ['jsx']
    })
    const nodeIdentifier: Array<any> = []
    traverse.default(ast, {
      Identifier (path: any) {
        if (!path.parent.property || path.key === 'object' || (path.key === 'property' && path.parent.computed)) {
          dealWithRoute(path)
          const name = path.node.name
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
      const attribsCode = await generate.default(ast)

      attribs[key] = removeAdapterVal(attribsCode.code)
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
    const attribs = elem.attribs
    if (attribs && attribs[':key']) {
      if (!attribs['v-for']) {
        delete attribs[':key']
      }
    }
  }

  const addForKey = (elem: any) => {
    const attribs = elem.attribs
    if (attribs && attribs['v-for']) {
      if (!attribs[':key']) {
        const data = attribs['v-for']
        const arr = data.substring(data.indexOf('(') + 1, data.indexOf(')')).split(',')
        if (arr.length === 2) elem.attribs[':Key'] = arr[1]
      }
    }
  }
  const getTemplateParent = (elem: any):any => {
    if (elem.name != 'template') {
      return elem
    }
    return getTemplateParent(elem)
  }

  const findChildSlot = (elem: any, slotTemplate:Set<any>, lostName: string) => {
    if (!elem) return slotTemplate
    for (let i = 0; i < elem.length; i++) {
      const childrenItem = elem[i]
      const itemAttribs = childrenItem.attribs || {}
      const itemSlotName = itemAttribs.slot || itemAttribs['v-slot']
      if (itemSlotName === lostName) {
        childrenItem.attribs['collect-slot'] = '1'
        slotTemplate.add(childrenItem)
      }
    }
    return slotTemplate
  }

  const findRepeatSlot = (elem: any) => {
    const slotTemplate = new Set()
    if (elem.attribs['collect-slot']) {
      return slotTemplate
    }
    const slotName = elem.attribs.slot || elem.attribs['v-slot']
    // 找同级是否有重复的slot
    if (elem.parent && elem.parent.children) {
      const children = elem.parent.children
      for (let i = 0; i < children.length; i++) {
        const itemAttribs = children[i].attribs || {}
        const itemSlotName = itemAttribs.slot || itemAttribs['v-slot']

        if (slotName === itemSlotName) {
          children[i].attribs['collect-slot'] = '1'
          slotTemplate.add(children[i])
        }
      }
    }
    // 如果父级是template那就要往上再找父级
    if (elem.parent && elem.parent.name === 'template') {
      const children = elem.parent.parent.children
      for (let i = 0; i < children.length; i++) {
        const childrenItem = children[i]
        if (childrenItem.name === 'template') {
          findChildSlot(childrenItem.children, slotTemplate, slotName)
        }
        const itemAttribs = childrenItem.attribs || {}
        const itemSlotName = itemAttribs.slot || itemAttribs['v-slot']

        if (slotName === itemSlotName) {
          slotTemplate.add(children[i])
        }
      }
    }
    return slotTemplate
  }

  const updateSlot = (elem: any, slotArr:Array<Set<any>>) => {
    const attribs = elem.attribs
    if (attribs && attribs['collect-slot']) {
      return
    }
    if (attribs && (attribs.slot || attribs['v-slot'])) {
      const slotList = findRepeatSlot(elem)
      if (slotList.size >= 2) {
        slotArr.push(slotList)
        return
      }
    }
    if (attribs && (attribs.slot || attribs['v-slot']) && elem.name != 'template') {
      const slotName = attribs.slot || attribs['v-slot']
      delete attribs.slot
      delete attribs['v-slot']
      delete attribs['v-else']
      delete attribs['collect-slot']
      const code = render(elem, {
        encodeEntities: 'utf8'
      })
      const newElement = parseDocument(`\n<template #${slotName}>${code}</template>\n`)
      DomUtils.replaceElement(elem, newElement)
    } else {
      elem.attribs && delete elem.attribs['collect-slot']
    }
  }

  const restructuringSlot = (slotArr: Array<any>) => {
    if (slotArr.length === 0) return
    slotArr.forEach(item => {
      const arr = Array.from(item)
      let code = ''
      const lastSlot:any = arr[arr.length - 1]
      const slotName = lastSlot.attribs.slot || lastSlot.attribs['v-slot']

      arr.forEach((v:any) => {
        delete v.attribs.slot
        delete v.attribs['collect-slot']
        DomUtils.removeElement(v)
        if (v.parent.name === 'template') {
          v.attribs = { ...v.parent.attribs, ...v.attribs }
        }
        code += render(v, {
          encodeEntities: 'utf8'
        })
      })

      const slotCOde = `<template #${slotName}>${code}</template>`
      if (lastSlot.parent.name === 'template') {
        DomUtils.append(lastSlot.parent, parseDocument(slotCOde))
      } else {
        DomUtils.appendChild(lastSlot.parent, parseDocument(slotCOde))
      }
    })
  }

  const replaceSlotLabel = (elem: any) => {
    const attribs = elem.attribs
    if (attribs && (attribs.slot || attribs['v-slot'])) {
      const slotName = attribs.slot || attribs['v-slot']
      delete attribs.slot
      delete attribs['v-slot']
      delete attribs['v-else']
      delete attribs['collect-slot']
      if (elem.name != 'template') {
        const code = render(elem, {
          encodeEntities: 'utf8'
        })
        const newElement = parseDocument(`\n<template #${slotName}>${code}</template>\n`)
        DomUtils.replaceElement(elem, newElement)
      } else {
        attribs[`#${slotName}`] = ''
      }
    }
  }

  const attribsUpdate = (elem:any) => {
    if (!options.labelAttribs) return
    const labelData = options.labelAttribs[elem.name]
    if (labelData) {
      const attribs = elem.attribs
      // eslint-disable-next-line array-callback-return
      Object.keys(attribs).map(key => {
        if (labelData[key]) {
          const val = attribs[key]
          const id = labelData[key]
          attribs[id] = val
          delete attribs[key]
        }
      })
    }
  }

  const dealWithAttribs = async (attribs: any) => {
    // eslint-disable-next-line array-callback-return
    Object.keys(attribs).map(key => {
      updateRefName(attribs, key)
      const firstChar = key.charAt(0)
      if (key.indexOf('v-') > -1 || firstChar === ':' || firstChar === '@') replaceAttribsVal(attribs, key)
    })
  }

  const setRootEl = (dom:any) => {
    const elName = getCompoentEl()
    if (importRender.hookMap.has(elName)) {
      dom.children.forEach((item: { type: string; attribs: { ref: string } }) => {
        if (item.type != 'text') {
          item.attribs.ref = elName
        }
      })
    }
  }

  const componentsRefVal = (elem:any) => {
    const componentsName = underlineToHump(elem.name)
    const refName = elem.attribs?.ref
    const refval = componentsRender.exampleRef.get(refName)
    if (componentsName && componentsRender.components.has(componentsName) && refName && refval) {
      const value = componentsRender.components.get(componentsName)
      if (value.defineExpose) {
        refval.forEach((val: any) => {
          value.defineExpose.add(val)
        })
      } else {
        value.defineExpose = new Set(refval)
      }
    }
  }

  if (scriptData && dom) {
    setRootEl(dom)
    // eslint-disable-next-line array-callback-return
    DomUtils.filter((elem: any):any => {
      updateKey(elem)
      addForKey(elem)
      attribsUpdate(elem)
      componentsRefVal(elem)
      const attribs = elem.attribs
      attribs && dealWithAttribs(attribs)
      replaceInterpolation(elem)
    }, dom, true)
    await Promise.all(RenderCallbacks.map(callback => callback()))
    // 扫描Slot
    const slotArr: Array<Set<any>> = []
    // eslint-disable-next-line array-callback-return
    DomUtils.filter((elem: any):any => {
      updateSlot(elem, slotArr)
    }, dom, true)
    restructuringSlot(slotArr)
    // eslint-disable-next-line array-callback-return
    DomUtils.filter((elem: any):any => {
      replaceSlotLabel(elem)
    }, dom, true)
  }
}
