import generate from "@babel/generator";

interface CycleVariable {
  name: string;
  params: Array<any>;
  body:any
}


const cycleTypeV3 = {
  beforeCreate: "beforeCreate",
  created:"created",
  beforeMount: "beforeMount",
  mounted: "mounted",
  beforeUpdate: "beforeUpdate",
  updated: "updated",
  beforeDestroy: 'beforeUnmount',
  destroyed: 'unmounted',
}

const ruleOuType = ['onBeforeCreate', 'onCreated'];


type CycleTypeV3Type = keyof typeof cycleTypeV3

export default class LifeCycleAnalysis {

  cycleKey: Set<string> = new Set<string>();
  cycleBodyMap: Map<string, CycleVariable> = new Map();


  static isCycle(nodeName:CycleTypeV3Type): boolean {
    return !!cycleTypeV3[nodeName]
  }

  modifyCycleName(str:string) {
    return "on"+str.charAt(0).toUpperCase()+str.substring(1)
  }

  init(cycleNode:any) {
    
    let nodeName  = this.modifyCycleName(cycleTypeV3[cycleNode.key.name as CycleTypeV3Type]);
    this.cycleKey.add(nodeName);
    const cycleItem = {
      name: nodeName,
      params: cycleNode.params,
      body:cycleNode.body
    }
    this.cycleBodyMap.set(nodeName, cycleItem);
  }

  dealWithCode(){
    const callback = async(item) =>{
      let code = '';
      const computedItem = this.cycleBodyMap.get(item);
      if (computedItem && ruleOuType.includes(computedItem?.name)) {
        const paramsCode = await computedItem?.params.map(node => generate.default(node));
        const bodyCode = await generate.default(computedItem?.body)

        code+=`const ${computedItem?.name} = (${paramsCode?.map(item => item.code).join(',')}) => ${bodyCode?.code} \n ${computedItem?.name}();\n`
      } else {
        const paramsCode = await computedItem?.params.map(node => generate.default(node));
        const bodyCode = await generate.default(computedItem?.body)
        code = `${computedItem?.name}((${paramsCode?.map(item => item.code).join(',')}) => ${bodyCode?.code})\n` 
      }
      return code
    }

    return Promise.all(Array.from(this.cycleKey).map(callback));
  }

  async render() {
    let cycleCode = await this.dealWithCode();
    let code ='';
    if(cycleCode && cycleCode.length>0){
      cycleCode.forEach(codeItem=>{
        if(codeItem) code+=codeItem+'\n'
      })
    }
    console.log(code)
    return code
  }




}