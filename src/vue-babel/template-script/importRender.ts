
import { modifyCycleName,createImport,createFnVariable,createArrayExpression,filterImport,Vmodel} from './utils';
import t from '@babel/types';
const vueApi = {
  "$emit": "emit",
  "$nextTick": "nextTick"
}

type vueApiType = keyof typeof vueApi;



const defaultVueApi = ['reactive']


const ImportRender = (newAst:t.File,options:any) => {
  return  {

    importGlobal: [],

    importDeclarationMap:new Map<string,string>(),
    
    vueApiImports: new Set<string>(defaultVueApi),

    hookMap:new Map(),
  
    globalApi: new Set<string>(),

    globalVariable: new Array<any>(),
  
    routerApi: new Set<string>(),
  
    emitKey: new Set<string>(),
  
    refKey: new Set<string>(),

    isVueApi(name: string) {
      return Object.keys(vueApi).includes(name)
    },

    collectGlobalVariable(ast:t.File){
      ast.program.body.forEach((item)=>{
          if(!t.isImportDeclaration(item) && !t.isExportDefaultDeclaration(item)){
            this.globalVariable.push(item)
          }
      })
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

      if(options.scssTurn && node.source && node.source.value){
        node.source.value = node.source.value.replace('.styl','.scss')
      }
      let value = node.source.value;
      node.specifiers.map((exportObj:t.ImportSpecifier)=>{
        const name = exportObj.local.name;
        this.importDeclarationMap.set(name,value)
      });
      this.importGlobal.push(node)
    },
  
    addVueApi(value: string) {
      this.vueApiImports.add(value)
    },
  
    addApiKey(value: string, path: any) {
      const argument = path.parent.arguments;
      if (value === vueApi.$emit && argument && argument.length > 0) {
        if (argument[0].value) {
          let emitName = argument[0].value;
          if(emitName == 'input'){
            argument[0].value = Vmodel.EMIT_NAME
          }
          this.emitKey.add(argument[0].value) 
        }
        return
      }
      this.vueApiImports.add(value)
  
    },

    addHookMap(name:string,value:string){
      if(!this.hookMap.has(name)){
        this.hookMap.set(name,{
          name,
          value
        })
      }
    },

    renderHookMap(){
      if (this.hookMap.size > 0) {
        this.hookMap.forEach(item => {
         let hookNode = createFnVariable(item.name,item.value)
         newAst.program.body.push(hookNode)
        })
      }
    },
  
    renderGlobal() {
      // 判断是nuxt还是vue3 全局变量导入的方式不一样
      // addGlobal
      if(this.globalApi.size>0){
        let globalNode = createFnVariable(Array.from(this.globalApi),'useNuxtApp')
        newAst.program.body.push(globalNode)
      }
    },
  
    renderRouter() {
      if (this.routerApi.size > 0) {
        this.routerApi.forEach(item => {
         let importNode = createFnVariable(`${item.replace('useR','r')}`,item)
         newAst.program.body.push(importNode)
        })
      }
    },


     renderGlobalVariable(){
      if(this.globalVariable.length>0){
        this.globalVariable.forEach(item=>{
          newAst.program.body.push(item)
        })
      }
    },
  
     renderImportGlobal() {
      if (this.importGlobal.length > 0) {
        this.importGlobal.forEach(item=>{
          if(filterImport(item.source.value)){
            newAst.program.body.push(item)
          }
        })
      }
    },
  
    renderImports() {
      const vueImport = createImport(Array.from(this.vueApiImports),'vue');
      let   routerImport = null;
      if (this.routerApi.size>0) {
        routerImport = createImport(Array.from(this.routerApi),'vue-router');
      }
      [vueImport,routerImport].forEach(item=>{if(item)newAst.program.body.push(item)})
    },
  
    renderEmit() {
      if (this.emitKey.size > 0) {
        const emitNode = createFnVariable('emit','defineEmits',[createArrayExpression(Array.from(this.emitKey))])
        newAst.program.body.push(emitNode)
      }
    },
  
    renderRef() {
      if (this.refKey.size > 0) {
        this.refKey.forEach(refName => {
          if(!refName) return
    
          let refNode = createFnVariable(refName,'ref',[t.nullLiteral()]);
          newAst.program.body.push(refNode)
        })
      }
    },
  
    render() {
      this.renderImports();
      this.renderImportGlobal();
      this.renderGlobal()
      this.renderHookMap();
      this.renderRouter()
      this.renderGlobalVariable()
      this.renderEmit()
      this.renderRef()
    }
  }
}
export default ImportRender
