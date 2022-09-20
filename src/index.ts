// @ts-nocheck
import { readFile } from 'fs/promises'


import { vueRender } from './vue-babel'
const init = async (path: string) => {

  const pageHtml = await readFile(path, { encoding: 'utf-8' });
  // let html = parse5.parse(code)
  // let data = parse(code)
  vueRender(pageHtml)
  // let scriptCode = data.childNodes[0].childNodes[0].childNodes[2].childNodes[0].value;
  // main(scriptCode.replace("export default",'let vue ='))
  // console.log(serialize(data))

}

export default init