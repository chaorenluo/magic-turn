import  { scriptRender } from './template-script'
import {templateRender} from './template-html'
import { Parser, DomHandler, DomUtils } from "htmlparser2";
const vueRender = async (html: any,options:any) => {

  let templateMap = new Map();
  const handler = new DomHandler();
  const parser = new Parser(handler);
  parser.write(html);
  parser.done();
  const dom = handler.dom;
  DomUtils.findOne(elem => {
    if (!templateMap.has('script') && elem.name === 'script') {
      elem.attribs = {setup:""}
      templateMap.set('script',elem.children[0])
    }
    if (!templateMap.has('template') && elem.name === 'template') {
      templateMap.set('template',elem)
    }
  }, dom, true)

  let scriptNode = templateMap.get("script");
  let templateNode = templateMap.get("template");
  let scriptData = await scriptRender(scriptNode.data,options);
  scriptNode.data = scriptData.newCode;
  await templateRender(templateNode,scriptData)
  const contentHtml = DomUtils.getOuterHTML(dom, {
    encodeEntities:'utf8'
  });
  console.log('contentHtml---',contentHtml)
}

export default {
  scriptRender,
  vueRender
}