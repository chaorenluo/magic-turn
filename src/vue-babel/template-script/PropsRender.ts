import generate from "@babel/generator";

export default class PropsRender{
  propsNode: Array<any> = [];
  propsKey: Set<string> = new Set();
  isArrayExpression=false;
  options: any;
  constructor(propsNode:any) {
    this.propsNode = propsNode;
    this.options = options;
    this.init();
  }

  hasPropsKey(key:string): boolean {
    return this.propsKey.has(key)
  }

  init() {
    this.isArrayExpression = this.propsNode.type === 'ArrayExpression'
    if(this.isArrayExpression){
      this.propsNode.elements.forEach((node: any) => {
        this.propsKey.add(node.value)
      })
    }else{
      this.propsNode.properties.forEach((node: any) => {
        this.propsKey.add(node.key.name)
      })
    }
  }


  async render() {
    let propsCode = await generate.default(this.propsNode)
    const code = `const props = defineProps(${propsCode.code});\n`
    return code
  }
}