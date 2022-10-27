// @ts-nocheck
import { readFile } from 'fs/promises'
import path from 'path'
import fs from 'fs'
import fse from 'fs-extra'
import babelRender from './vue-babel'
import { options } from './config';

const { scriptRender, vueRender } = babelRender;

 const isVue = (fileName:string) => {
  return /\.vue$/.test(fileName)
 }

 

let fileMap = new Map();

const getAllDirByFilename = (dir:string)=>{
  let dirPath = path.resolve(__dirname, dir);
  let files = fs.readdirSync(dirPath)
  let resultArr: string[] = [];

  files.forEach(file => {
    let filePath = dir + '/' + file;
    resultArr.push(filePath);
    if (fs.statSync(filePath).isDirectory()) {
      resultArr.push(...getAllDirByFilename(filePath));
    }
  })
  return resultArr
}

const createFile = () => {
  fileMap.forEach((item,key) => {
    let filePath = key.replace("/Users/ljm/gitroot/8591/touch/pages", options.output)
    fse.outputFileSync(filePath, item.contentHtml);
    console.log(`${filePath}----写入成功`)
  })
}

const init = async (path: string) => {
  // let fileArr = getAllDirByFilename(path).filter(item => isVue(item))
  // let callback = async (filePath: string) => {
  //   const code = await readFile(filePath, { encoding: 'utf-8' });
  //   const fileData = await vueRender(code, options)
  //   console.log(filePath)
  //   fileMap.set(filePath,fileData)
  // }
  // Promise.all(fileArr.map(callback)).then(res => {
  //   createFile()
  // })
  const code = await readFile(path, { encoding: 'utf-8' });
  const fileData = await vueRender(code, options)
}




export default init