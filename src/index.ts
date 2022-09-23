// @ts-nocheck
import { readFile } from 'fs/promises'
import { vueRender } from './vue-babel'

const init = async (path: string) => {

  const pageHtml = await readFile(path, { encoding: 'utf-8' });
  vueRender(pageHtml)

}

export default init