
import { readFile } from 'fs/promises'
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
    let fileCallback = async (fileName: any) => {
      try { 
        const filePath = path.join(this.options.piniaAliasVal, fileName) + '.js' as string;
        let fileCode = await readFile(path.resolve(filePath), { encoding: 'utf-8' })
        let piniaNode = new PiniaNode(fileCode, filePath, fileName);
        this.piniaNodeList.add(piniaNode);
        PiniaNode.cacheNode.set(fileName,piniaNode)
      } catch (e) {
        throw new Error('请检查store别名路径是否正确')
      }
    }
    await Promise.all(this.fileNameList.map(fileCallback))
  }
}