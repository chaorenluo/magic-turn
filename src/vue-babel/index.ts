import { scriptRender } from './template-script'
import {templateRender} from './template-html'
import { Parser, DomHandler, DomUtils } from "htmlparser2";
export const vueRender = async (html: any) => {

  let templateMap = new Map();
  const handler = new DomHandler();
  const parser = new Parser(handler);
  parser.write(html);
  parser.done();
  const dom = handler.dom;
  DomUtils.findOne(elem => {
    if (elem.type === 'script') {
      elem.attribs = {setup:""}
      templateMap.set('script',elem.children[0])
    }
    console.log(elem.attribs);
  }, dom, true)

  let scriptNode = templateMap.get("script");
  let scriptData = await scriptRender(scriptNode.data);
  scriptNode.data = scriptData.newCode;

  const contentHtml = DomUtils.getOuterHTML(dom);
  console.log('contentHtml---',contentHtml)
  // traverse.default(templateMap.get('template'), {

  // })

}