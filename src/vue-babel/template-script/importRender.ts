import generate from "@babel/generator";
import { modifyCycleName } from './utils'
const vueApi = {
  "$emit": "emit",
  "$nextTick": "nextTick"
}

type vueApiType = keyof typeof vueApi;

const importRender = {

  importGlobal: [],
  
  vueApiImports: new Set<string>(),

  globalApi: new Set<string>(),

  routerApi: new Set<string>(),

  emitKey: new Set<string>(),

  refKey: new Set<string>(),

  isVueApi(name: string) {
    return Object.keys(vueApi).includes(name)
  },

  conversionApi(value: vueApiType) {
    return vueApi[value]
  },

  addGlobal(name: string) {
    this.globalApi.add(name)
  },

  addRouter(name: string) {
    let api = `use${ modifyCycleName(name)}`;
    this.routerApi.add(api)
  },

  addRefKey(name: string) {
    this.refKey.add(name)
  },

  addImportGlobal(node:any) {
    this.importGlobal.push(node)
  },

  addVueApi(value: string) {
    this.vueApiImports.add(value)
  },

  addApiKey(value: string, path: any) {
    const argument = path.parent.arguments;
    if (value === vueApi.$emit && argument && argument.length > 0) {
      this.emitKey.add(argument[0].value)
      return
    }
    this.vueApiImports.add(value)

  },

  renderGlobal() {
    // 判断是nuxt还是vue3 全局变量导入的方式不一样
    return '';
  },

  renderRouter() {
    let code = '';
    if (this.routerApi.size > 0) {
      this.routerApi.forEach(item => {
        code+=`\nconst ${item.replace('useR','r')} = ${item}() `
      })
    }
    return code;
  },

  async renderImportGlobal() {
    let code = '';
    if (this.importGlobal.length > 0) {
      const data = await Promise.all(this.importGlobal.map(item => generate.default(item).code+'\n'))
      code = '\n'+data.join('');
    }
    return code;
  },

  renderImports() {
    let code = `\nimport {${Array.from(this.vueApiImports).join(',')}} from "vue";\n`
    if (this.routerApi.size>0) {
      code+=`import {${Array.from(this.routerApi).join(',')}} from "vue-router";` 
    }
    return code;
  },

  renderEmit() {
    let code = '';
    if (this.emitKey.size > 0) {
      code = `const emit = defineEmits([${Array.from(this.emitKey).map(item => `"${item.toString()}"`)}]);`;
    }
    return code
  },

  renderRef() {
    let code = '';
    if (this.refKey.size > 0) {
      code += '\n'
      this.refKey.forEach(refName => {
        code += `const ${refName} = ref(null);\n`
      })
    }
    return code
  },

  async render() {
    return  this.renderImports()+(await this.renderImportGlobal())+this.renderRouter()+this.renderEmit()+this.renderRef()
  }


}
export default importRender
