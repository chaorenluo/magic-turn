import PiniaRender from './PiniaRender'

export const conversionVuex = (options: any, fileNameList: Array<string>) => {
  let piniaRender = new PiniaRender(options, fileNameList)
  piniaRender.initPinia()
}