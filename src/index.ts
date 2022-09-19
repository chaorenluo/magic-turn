import fs from 'fs'
import { readFile } from 'fs/promises'
import {parse,serialize} from "parse5";
const init = async (path: string) => {

  const code = await readFile(path, { encoding: 'utf-8' });
  // let html = parse5.parse(code)
  let data =parse(code)
    data.childNodes[0].childNodes[0].childNodes[2].childNodes[0].value = "let s1 =123";
  console.log(serialize(data))
}

export default init