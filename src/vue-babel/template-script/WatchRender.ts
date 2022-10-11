import generate from "@babel/generator";
import DataAnalysis from './DataRender'
export default class WatchRender {
  watchNode: any;
  objectMethod: Array<any> = [];
  objectProperty: Array<any> = [];
  watchKey: Set<string> = new Set();
  dataAnalysis: DataAnalysis;
  options: any;

  constructor(watchNode: any, dataAnalysis: DataAnalysis,options:any) {
    this.watchNode = watchNode;
    this.dataAnalysis = dataAnalysis;
    this.options = options;
    this.init()
  }

  init() {
    this.watchNode.properties.forEach((node) => {
      if (node.type === 'ObjectMethod') {
        this.objectMethod.push(node)
      }
      if (node.type === 'ObjectProperty') {
        this.objectProperty.push(node)
      }
    })
  }

  hasWatchKey(key: string) {
    return this.watchKey.has(key);
  }

  addPrefix(key: any) {
    let watchName = key.name ? key.name : key.value;
    if (this.dataAnalysis.hasReactiveKey(watchName.split('.')[0])) {
      watchName = `state.${watchName}`
    }
    return watchName
  }

  renderObjectMethod() {
    return Promise.all(this.objectMethod.map(this.dealWithMethod.bind(this)))
  }

  async dealWithMethod(node) {
    let code = '';
    let watchName = this.addPrefix(node.key);
    const paramsCode = await node.params.map(node => generate.default(node));
    const bodyCode = await generate.default(node.body)
    code += `watch(()=>${watchName},(${paramsCode.map(item => item.code).join(',')})=>${bodyCode.code});\n`;
    return code
  }

  async dealWithProperty(node) {
      let code = ''
      let watchName = this.addPrefix(node.key);
      const value = node.value;
      if (value.properties) {
        let watchItem = {}
        let watchParams: any = []
        value.properties.forEach((v: any) => {
          if (v.key.name == "handler") {

            watchItem = {
              params: v.value.params,
              body: v.value.body
            }
          } else {
            watchParams.push(v)
          }
        })
        let body = await generate.default(watchItem.body)
        const paramsCode = await watchItem.params.map(node => generate.default(node));
        const watchApi = await watchParams.map(node => generate.default(node));
        code += `\nwatch(()=>${watchName},(${paramsCode?.map(item => item.code).join(',')})=>${body.code}${watchParams.length > 0 ? `,{${watchApi?.map(item => `${item.code}`).join(',')}}` : ''
          }) \n`
      } else if (value.body) {
        let watchItem = {
          params: value.params,
          body: value.body
        }
        let body = await generate.default(watchItem.body)
        const paramsCode = await watchItem.params.map(node => generate.default(node));
        code += `\nwatch(()=>${watchName},(${paramsCode?.map(item => item.code).join(',')})=>${body.code});\n`
      }
      return code

  }

  async renderObjectProperty() {

    return Promise.all(this.objectProperty.map(this.dealWithProperty.bind(this)))
  
  }

  async render() {
    const propertyCode = await this.renderObjectProperty()
    const methodCode = await this.renderObjectMethod()
    let code = '';
    [...methodCode, ...propertyCode].forEach(item => {
      code+=item
    })
    return code;
  }



}