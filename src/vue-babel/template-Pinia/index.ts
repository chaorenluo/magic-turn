import PiniaRender from './PiniaRender'

export const piniaStart = async (options: any, fileNameList: Array<string>): PiniaRender => {
  let piniaRender = new PiniaRender(options, fileNameList)
  await piniaRender.initPinia()
  return piniaRender
}