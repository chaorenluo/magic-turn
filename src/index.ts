// @ts-nocheck
import { readFile } from 'fs/promises'
import path from 'path'
import fs from 'fs'
import fse from 'fs-extra'
import t from '@babel/types'
import babelRender from './vue-babel'
import { options } from './config'
import ProgressBar from '@jyeontu/progress-bar'
import traverse from '@babel/traverse'
import { createCallExpression, createObjectExpression } from './vue-babel/template-script/utils'

const { vueRender } = babelRender

const isVue = (fileName: string) => {
  return /\.vue$/.test(fileName)
}

const fileMap = new Map()
const piniaMap = new Map()
const mixinMap = new Map()
const exposeMap = new Map()

const getAllDirByFilename = (dir: string, compileDir: Array<string>) => {
  const dirPath = path.resolve(__dirname, dir)
  const files = fs.readdirSync(dirPath)
  const resultArr: string[] = []

  files.forEach(file => {
    if (!compileDir || compileDir.includes(file)) {
      const filePath = dir + '/' + file
      resultArr.push(filePath)
      if (fs.statSync(filePath).isDirectory()) {
        resultArr.push(...getAllDirByFilename(filePath))
      }
    }
  })
  return resultArr
}

const compatiblePath = (str) => {
  if (!str || typeof str !== 'string') return str
  return str.replaceAll('\\', '/')
}

const collectPinia = (piniaRender) => {
  if (!piniaRender || !piniaRender.piniaNodeList) return
  piniaRender.piniaNodeList.forEach((item) => {
    if (piniaMap.has(item.filePath)) return
    const filePath = compatiblePath(item.filePath).replace(compatiblePath(options.entranceDir), options.output)
    piniaMap.set(filePath, { piniaNode: item })
  })
}

const collectMixins = (mixinRender) => {
  if (!mixinRender) return
  mixinRender.nodeList.forEach((item) => {
    if (mixinMap.has(item.filePath)) return
    const filePath = compatiblePath(item.filePath).replace(compatiblePath(options.entranceDir), options.output)
    mixinMap.set(filePath, { mixinCode: item.newCode })
  })
}

const collectDefineExpose = (scriptData) => {
  const componentsRender = scriptData?.componentsRender
  if (!componentsRender || !componentsRender.components) return
  for (const iterator of componentsRender.components) {
    const key = iterator[0]
    const value = iterator[1]
    if (exposeMap.has(value.src)) {
      const exposeItem = exposeMap.get(value.src)
      if (value.defineExpose && value.defineExpose.size > 0) {
        value.defineExpose.forEach(v => exposeItem.defineExpose.add(v))
      }
    } else {
      if (value.defineExpose && value.defineExpose.size > 0) {
        exposeMap.set(value.src, {
          parent: scriptData,
          defineExpose: new Set(value.defineExpose)
        })
      }
    }
  }
}

const defineExposeFilterType = (scriptData, exposeItem) => {
  const { mixinRender, computedRender, dataRender } = scriptData
  const exposeType = new Map()
  exposeItem.forEach(item => {
    if (mixinRender && mixinRender.reactiveMap.has(item)) {
      const data = mixinRender.reactiveMap.get(item)
      exposeType.set(item, { name: data.name, isMixinReactive: 1 })
    } else if (mixinRender && mixinRender.computeMap.has(item)) {
      exposeType.set(item, { name: item, isComputed: 1 })
    } else if (dataRender && dataRender?.hasReactiveKey(item)) {
      exposeType.set(item, { name: dataRender.options.dataName, isReactive: 1 })
    } else if (computedRender && computedRender?.hasComputedKey(item)) {
      exposeType.set(item, { name: item, isComputed: 1 })
    } else {
      exposeType.set(item, { name: item, isMethods: 1 })
    }
  })
  return exposeType
}

const updateParentTemplate = (parent, exposeType) => {
  const { newAst, componentsRender } = parent
  try {
    traverse.default(newAst, {
      Identifier (path) {
        const name = path.node.name
        if (componentsRender && name && name.indexOf('_ref') > -1) {
          const node = path.parentPath.parentPath.node
          if (node && node.property) {
            const exposeItem = exposeType.get(node.property.name)
            if (exposeItem) {
              if (exposeItem.isComputed) {
                const object = t.memberExpression(t.cloneNode(node.object), t.cloneNode(node.property))
                node.object = object
                node.property.name = 'value'
              }
              if (exposeItem.isReactive) {
                const object = t.memberExpression(t.cloneNode(node.object.object), t.cloneNode(node.object.property))
                node.object.object = object
                node.object.property.name = exposeItem.name
              }
              if (exposeItem.isMixinReactive) {
                const object = t.memberExpression(t.cloneNode(node.object.object), t.cloneNode(node.object.property))
                node.object.object = object
                node.object.property.name = exposeItem.name
              }
            }
          }
        }
      }
    })
  } catch (error) {
    console.log('-----updateParentTemplate', error)
  }
}

const createDefineExpose = () => {
  for (const key of exposeMap.keys()) {
    const filePath = key.replace(options.entranceDir.replaceAll('\\', '/'), options.output.replaceAll('\\', '/'))
    if (fileMap.has(filePath)) {
      const scriptData = fileMap.get(filePath).scriptData
      const { newAst } = scriptData
      const exposeItem = exposeMap.get(key)
      const { defineExpose, parent } = exposeItem
      const exposeType = defineExposeFilterType(scriptData, defineExpose)
      updateParentTemplate(parent, exposeType)
      const exportArr = []
      exposeType.forEach((value, key) => {
        exportArr.push(value.name)
      })
      newAst.program.body.push(createCallExpression(t.identifier('defineExpose'), [createObjectExpression(exportArr)]))
    }
  }
}

const createPinia = () => {
  piniaMap.forEach(async (item, key) => {
    const piniaCode = await item.piniaNode.renderPinia()
    fse.outputFileSync(key, piniaCode)
  })
}

const createMixins = () => {
  mixinMap.forEach((item, key) => {
    fse.outputFileSync(key, item.mixinCode)
  })
}

const createFile = () => {
  const callBack = async (v) => {
    const key = v[0]
    const item = v[1]
    const contentHtml = await item.renderVueTemplate()
    fse.outputFileSync(key, contentHtml)
  }
  return Promise.all(Array.from(fileMap).map(callBack))
}

const getProgressBar = (duration) => {
  const config = {
    duration: duration,
    current: 0,
    showNumber: true,
    tip: {
      0: '开始转换',
      50: '转换一半啦，不要着急……',
      75: '马上就转换完了……',
      100: '转换完成，文件已生成'
    },
    color: 'green'
  }
  return new ProgressBar(config)
}

const init = async () => {
  const fileArr = getAllDirByFilename(options.rootPath, options.compileDir).filter(item => isVue(item))
  const progressBar = getProgressBar(fileArr.length)
  let index = 0
  const callback = async (filePath: string) => {
    const code = await readFile(filePath, { encoding: 'utf-8' })
    const { renderVueTemplate, scriptData } = await vueRender(code, options, filePath)
    let fileSrc = filePath.replace(options.entranceDir, options.output)
    fileSrc = fileSrc.replaceAll('\\', '/')
    fileMap.set(fileSrc, {
      renderVueTemplate, scriptData
    })
    collectDefineExpose(scriptData)
    collectPinia(scriptData?.vuexRender?.piniaRender)
    collectMixins(scriptData?.mixinRender)
    progressBar.run(index++)
  }
  Promise.all(fileArr.map(callback)).then(async (res) => {
    createDefineExpose()
    await createFile(progressBar)
    createPinia(progressBar)
    createMixins(progressBar)
  })
}

export default init
