import generate from "@babel/generator";

export default class DataRender{
  dataNode: Array<any> = [];
  variableDeclaration: Array<any> = [];
  reactiveData: any = {};
  reactiveKey: Set<string> = new Set();
  
  constructor(dataNode: Array<any>) {
    this.dataNode = dataNode;
    this.init();
  }


  setReactiveKey(properties: Array<any>) {
    properties.forEach((node) => {
      this.reactiveKey.add(node.key.name)
    })
  }

  hasReactiveKey(key:string) {
    return this.reactiveKey.has(key)
  }

  init() {
    this.dataNode.forEach((node) => {
      if (node.type === 'VariableDeclaration') {
        this.variableDeclaration.push(node)
      } else if (node.type === 'ReturnStatement') {
        this.setReactiveKey(node.argument.properties)
        this.reactiveData = node.argument;
      }
    })
  }

  async render() {
    let declarationCode = await Promise.all(this.variableDeclaration.map(node => generate.default(node)))
    let reactiveCode = await generate.default(this.reactiveData)
    let code ='';
    if(declarationCode && declarationCode.length>0){
      declarationCode.forEach(codeItem=>{
          if(codeItem.code) code+=codeItem.code+"\n\n"
      })
    }
    if(reactiveCode && reactiveCode.code){
      code+=`const state = reactive(${reactiveCode.code})\n\n`
    }
    console.log(code)
    return code
  }
  
}