import PiniaRender from './PiniaRender'
import { piniaModuleItem } from '../template-script/utils'
export const piniaStart = async (options: any, fileNameList: Map<string, piniaModuleItem>): Promise<PiniaRender> => {
  const piniaRender = new PiniaRender(options, fileNameList)
  await piniaRender.initPinia()
  return piniaRender
}
