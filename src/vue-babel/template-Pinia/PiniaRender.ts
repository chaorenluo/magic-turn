
import fse from 'fs-extra'
import path from 'path'
import PiniaNode from './PiniaNode'
import { piniaModuleItem } from '../template-script/utils'
import { Config } from '../../config'

export default class PiniaRender {
  piniaNodeList = new Set<PiniaNode>();
  pathList = new Set<any>();
  options:Config;
  fileNameList:Map<string, piniaModuleItem> = new Map();

  constructor (_options:Config, _fileNameList:Map<string, piniaModuleItem>) {
    this.options = _options || {}
    this.fileNameList = _fileNameList
  }

  async initPinia () {
    const fileCallback = async (key: string) => {
      const piniaModuleItem = this.fileNameList.get(key) as piniaModuleItem
      if (!PiniaNode.cacheNode.has(piniaModuleItem?.importName)) {
        const filePath = path.join(this.options.piniaStore.pathVal as string, piniaModuleItem?.importUrl) + '.js' as string
        const status = fse.existsSync(filePath)
        if (status) {
          const fileCode = await fse.readFileSync(path.resolve(filePath), { encoding: 'utf-8' })
          const fileName = piniaModuleItem.importName.substr(piniaModuleItem.importName.lastIndexOf('/') + 1) + 'Store'
          const options = this.options
          const piniaNode = new PiniaNode(fileCode, filePath, fileName, piniaModuleItem.importName, options)
          this.piniaNodeList.add(piniaNode)
          PiniaNode.cacheNode.set(piniaModuleItem.importName, piniaNode)
          piniaNode.buildAst()
        } else {
          console.log('该store文件路径找不到----', filePath)
        }
      }
    }
    await Promise.all(Array.from(this.fileNameList.keys()).map(fileCallback))
  }
}
