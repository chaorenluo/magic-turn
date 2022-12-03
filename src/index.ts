// @ts-nocheck
import { readFile } from 'fs/promises'
import path from 'path'
import fs from 'fs'
import fse from 'fs-extra'
import babelRender from './vue-babel'
import { options } from './config';
import ProgressBar from '@jyeontu/progress-bar'


const { scriptRender, vueRender } = babelRender;

 const isVue = (fileName:string) => {
  return /\.vue$/.test(fileName)
 }


let fileMap = new Map();
let piniaMap = new Map();
let mixinMap = new Map();

const getAllDirByFilename = (dir:string,compileDir:Array<string>)=>{
  let dirPath = path.resolve(__dirname, dir);
  let files = fs.readdirSync(dirPath)
  let resultArr: string[] = [];

  files.forEach(file => {
    if (!compileDir || compileDir.includes(file)) {
      let filePath = dir + '/' + file;
      resultArr.push(filePath);
      if (fs.statSync(filePath).isDirectory()) {
        resultArr.push(...getAllDirByFilename(filePath));
      } 
    }
  })
  return resultArr
}

const collectPinia = (piniaRender) => {
  if (!piniaRender || !piniaRender.piniaNodeList) return
  piniaRender.piniaNodeList.forEach((item) => {
    if (piniaMap.has(item.filePath)) return
    let filePath = item.filePath.replaceAll('\\','/').replace(options.entranceDir, options.output)
    piniaMap.set(filePath,{piniaNode:item})
  })
}

let collectMixins = (mixinRender) => {
  if (!mixinRender) return 
  mixinRender.nodeList.forEach((item) => {
    if (mixinMap.has(item.filePath)) return
    let filePath = item.filePath.replaceAll('\\','/').replace(options.entranceDir, options.output)
    mixinMap.set(filePath,{mixinCode:item.newCode})
  })
}

const createPinia = () => {
  piniaMap.forEach(async (item, key) => {
    let piniaCode = await item.piniaNode.renderPinia()
    fse.outputFileSync(key, piniaCode)
  })
}

const createMixins = () => {
  mixinMap.forEach( (item, key) => {
    fse.outputFileSync(key, item.mixinCode)
  })
}

const createFile = () => {
  fileMap.forEach((item,key) => {
    
    let filePath = key.replace(options.entranceDir, options.output)
    fse.outputFileSync(filePath, item.contentHtml);
  })
}

const getProgressBar = (duration) =>{
    const config = {
      duration:duration,
      current: 0,
      showNumber:true,
      tip:{
          0: '开始转换',
          50:'转换一半啦，不要着急……',
          75:'马上就转换完了……',
          100:'转换完成，文件已生成'
      },
      color:'green'
  }
  var timer, i = 0;

  return new ProgressBar(config);
 
}

const init = async (path: string) => {
  let fileArr = getAllDirByFilename(path,options.compileDir).filter(item=>isVue(item))
  const progressBar = getProgressBar(fileArr.length)
  let index = 0;
  let callback = async (filePath: string) => {
    const code = await readFile(filePath, { encoding: 'utf-8' });
    const fileData = await vueRender(code, options,filePath)
    fileMap.set(filePath, fileData)
    collectPinia(fileData?.scriptData?.vuexRender?.piniaRender)
    collectMixins(fileData?.scriptData?.mixinRender)
    progressBar.run(index++);
  }
  Promise.all(fileArr.map(callback)).then(res => {
    createFile()
    createPinia()
    createMixins()
  })
  // console.log(path)
  // const code = await readFile(path, { encoding: 'utf-8' });
  // const fileData = await vueRender(code, options,path)
  // // console.log(fileData.contentHtml)
  // fse.outputFileSync('./ljm.vue',fileData.contentHtml)
}




export default init