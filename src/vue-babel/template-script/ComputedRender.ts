import generate from "@babel/generator";

interface FunctionVariable {
  isReadWrite: boolean;
  name: string;
  params: Array<any>;
  body:any
}

export default class ComputedRender{
  computeNode: Array<any>;
  computedKey: Set<string> = new Set();
  computeBodyMap: Map<string, FunctionVariable> = new Map();
  
  constructor(computeNode:Array<any>) {
    this.computeNode = computeNode;
    this.init()
  }

  init() { 
    this.computeNode.forEach(node => {
      const nodeName = node.key.name;
      this.computedKey.add(nodeName);
      const isReadWrite = node.type === 'ObjectProperty'
      const computedItem = {
        isReadWrite,
        name: nodeName,
        params: node.params,
        body: isReadWrite ? node.value : node.body
      }
      this.computeBodyMap.set(nodeName,computedItem)
    })
  }

  hasReactiveKey(key:string) {
    return this.computedKey.has(key)
  }

  dealWithCode(){
    const callback = async (item) =>{
      let code = '';
      const computedItem = this.computeBodyMap.get(item);
      const bodyCode = await generate.default(computedItem?.body)
      if (computedItem?.isReadWrite) {

        code+=`const ${computedItem?.name} = computed(${bodyCode.code});\n`
      } else {
        const paramsCode = await computedItem?.params.map(node => generate.default(node));
        code += `const ${computedItem?.name} = computed((${paramsCode?.map(item => item.code).join(',')}) => ${bodyCode?.code})\n`
      }
      return code
    }
    return Promise.all(Array.from(this.computedKey).map(callback))
  }

  async render() {
    let code ='';
    let computedCode = await  this.dealWithCode()
    if(computedCode.length>0){
      computedCode.forEach(codeItem=>{
        if(codeItem){
          code+=codeItem
        }
      })
    }
    return code
  }
}