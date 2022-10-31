
import { readFile } from 'fs/promises'
import fse from 'fs-extra'
import path from 'path'
import PiniaNode from './PiniaNode';

export default class PiniaRender {
  piniaNodeList = new Set<PiniaNode>();
  pathList = new Set<any>();
  options = {};
  fileNameList = new Array<string>();

  constructor(_options:any,_fileNameList:Array<string>) {
    this.options = _options;
    this.fileNameList = _fileNameList;
  }

  async initPinia() {
    let fileCallback = async (pathPrefix: any) => {
      if (!PiniaNode.cacheNode.has(pathPrefix)) {
          const filePath = path.join(this.options.piniaStore.pathVal, pathPrefix) + '.js' as string;
          let status = fse.existsSync(filePath);
          if (status) {
            let fileCode = await fse.readFileSync(path.resolve(filePath), { encoding: 'utf-8' })
            let fileName = pathPrefix.substr(pathPrefix.lastIndexOf('/') + 1) + 'Store';
            let options = this.options;
            let piniaNode = new PiniaNode(fileCode, filePath, fileName,pathPrefix,options);
            this.piniaNodeList.add(piniaNode);
            PiniaNode.cacheNode.set(pathPrefix, piniaNode)
            piniaNode.buildAst(); 
          } else {
            console.log("该store文件路径找不到----",filePath)
          }
      }
     
    }
    await Promise.all(this.fileNameList.map(fileCallback))
  }
}