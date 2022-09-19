import generate from "@babel/generator";

interface MethodsVariable {
  name: string;
  params: Array<any>;
  body:any
}


export default class MethodsRender{
  methodsNode: Array<any>;
  methodsKey: Set<string> = new Set();
  methodsBodyMap: Map<string, MethodsVariable> = new Map();

  constructor(methodsNode: Array<any>) {
    this.methodsNode = methodsNode;
    this.init()
  }

  init() { 
    this.methodsNode.forEach(node => {
      const nodeName = node.key.name;
      this.methodsKey.add(nodeName);
      const methodsItem = {
        name: nodeName,
        params: node.params,
        body: node.body
      }
      this.methodsBodyMap.set(nodeName,methodsItem)
    })
  }

  dealWithCode(){
    const callback = async (item) =>{
      let code = '';
      const computedItem = this.methodsBodyMap.get(item);
      const paramsCode = await computedItem?.params.map(node => generate.default(node));
      const bodyCode = await generate.default(computedItem?.body)
      code = `const ${computedItem?.name} = (${paramsCode?.map(item => item.code).join(',')}) => ${bodyCode?.code}\n`
      return code
    }

    return Promise.all(Array.from(this.methodsKey).map(callback))
  }

  async render() {
     let code = ''; 
     const methodsCode = await this.dealWithCode()
     if(methodsCode && methodsCode.length>0){
        methodsCode.forEach((codeItem:any)=>{
          if(codeItem) code+=codeItem 
        })
     }
     console.log(code)
     return code
  }

}