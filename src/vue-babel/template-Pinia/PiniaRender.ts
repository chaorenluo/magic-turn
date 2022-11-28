
import { readFile } from 'fs/promises'
import fse from 'fs-extra'
import path from 'path'
import PiniaNode from './PiniaNode';
import {piniaModuleItem} from '../template-script/utils'

export default class PiniaRender {
  piniaNodeList = new Set<PiniaNode>();
  pathList = new Set<any>();
  options = {};
  fileNameList:Map<string,piniaModuleItem> = new Map();

  constructor(_options:any,_fileNameList:Map<string,piniaModuleItem>) {
    this.options = _options;
    this.fileNameList = _fileNameList;
  }

  async initPinia() {
    let fileCallback = async (key: string) => {
      let piniaModuleItem =  this.fileNameList.get(key) as piniaModuleItem;
      if (!PiniaNode.cacheNode.has(piniaModuleItem?.importName)) {
        console.log(piniaModuleItem?.importUrl)
          const filePath = path.join(this.options.piniaStore.pathVal, piniaModuleItem?.importUrl) + '.js' as string;
          let status = fse.existsSync(filePath);
          if (status) {
            let fileCode = await fse.readFileSync(path.resolve(filePath), { encoding: 'utf-8' })
            let fileName = piniaModuleItem.importName.substr(piniaModuleItem.importName.lastIndexOf('/') + 1) + 'Store';
            let options = this.options;
            let piniaNode = new PiniaNode(fileCode, filePath, fileName,piniaModuleItem.importName,options);
            this.piniaNodeList.add(piniaNode);
            PiniaNode.cacheNode.set(piniaModuleItem.importName, piniaNode)
            piniaNode.buildAst(); 
          } else {
            console.log("该store文件路径找不到----",filePath)
          }
      }
     
    }
    await Promise.all( Array.from(this.fileNameList.keys()).map(fileCallback))
  }
}