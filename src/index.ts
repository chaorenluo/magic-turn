// @ts-nocheck
import { readFile } from 'fs/promises'
import fs from 'fs';
import path from 'path'
import babelRender from './vue-babel'
import { options } from './config';

const {scriptRender,vueRender } = babelRender;

const init = async (path: string) => {
  // initMixin(path)
  const code = await readFile(path, { encoding: 'utf-8' });
  if (path.indexOf('.vue') > -1) {
    vueRender(code)
  } else {
    const scriptCode = await scriptRender(code,options);
    console.log(scriptCode)
  }
}

const  readFileList = (dir, filesList = []) => {
  const files = fs.readdirSync(dir);
  files.forEach((item, index) => {
      var fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {      
          readFileList(path.join(dir, item), filesList);  //递归读取文件
      } else {                
          filesList.push(fullPath);                     
      }        
  });
  return filesList;
}

const initMixin = async (dir) => {
  let filesList = [];
  let codeList = [];
  let nodeList = [];
  let scriptNode = new Map();
  let fileCallback = async (file) => {
    let fileCode = await readFile(path.resolve(file), { encoding: 'utf-8' })
    return fileCode
  }
  let scriptCallback = async (code) => {
    const scriptCode = await scriptRender(code);
    return scriptCode
  }
  readFileList(dir, filesList);
  codeList = await Promise.all(filesList.map(fileCallback));
  nodeList = await Promise.all(codeList.map(scriptCallback));
}


export default init