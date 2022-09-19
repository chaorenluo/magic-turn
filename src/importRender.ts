
 const vueApi = {
  "$emit": "emit",
  "$nextTick": "nextTick"
}

type vueApiType = keyof typeof vueApi;

 const importRender = {

  vueApiImports: new Set<string>(),

  globalApi: new Set<string>(),

  emitKey: new Set<string>(),

  refKey:new Set<string>(),

  isVueApi(name: string) {
    return Object.keys(vueApi).includes(name)
  },

  conversionApi(value: vueApiType) {
    return vueApi[value]
  },

  addGlobal(name:string) {
    this.globalApi.add(name)
  },

  addRefKey(name:string){
    this.refKey.add(name)
  },

  addVueApi(value:string) {
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

  renderImports() {
    const code = `import {${Array.from(this.vueApiImports).join(',')}} from "vue"`
    console.log(code)
    return code;
  },

  renderEmit() {
    const code = `const emit = defineEmits([${Array.from(this.emitKey).map(item=>`"${item.toString()}"`)}])`;
    return code
  },

  renderRef(){
    let code = '';
    if(this.refKey.size>0){
      code+='\n'
      this.refKey.forEach(refName=>{
        code+=`const ${refName} = ref(null);\n`
      })
    }
    console.log(code)
    return code
  }


}
export default importRender
