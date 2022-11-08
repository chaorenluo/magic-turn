import  { scriptRender } from './template-script'
import {templateRender} from './template-html'
import { Parser, DomHandler, DomUtils } from "htmlparser2";
import {render} from 'dom-serializer';


const decomposeTemp = (html:string) =>{
    let script = html.indexOf('<script>')>-1 ? html.substring(html.indexOf('<script>')+8,html.indexOf('</script>') ) :''
    return {
      script,
      newHtml:html.replace(script,'LJM')
    }
  }
 

const vueRender = async (html: any,options:any,filePath) => {
  let htmlData =  decomposeTemp(html)
  let templateMap = new Map();
  let scriptMap = new Map();
  const handler = new DomHandler();
  const parser = new Parser(handler,{
    xmlMode:true
  });
  parser.write(htmlData.newHtml);
  parser.done();
  const dom = handler.dom;
  DomUtils.findOne(elem => {
    if (!scriptMap.has('script') && elem.name === 'script') {
      elem.attribs = {setup:""}
      scriptMap.set('script',elem.children[0])
    }
    if (!templateMap.has('template') && elem.name === 'template') {
      templateMap.set('template',elem)
    }
  }, dom, true)
  let scriptNode = htmlData.script;
  let templateNode = templateMap.get("template");
  let scriptData;
 
  if (scriptNode) {
    scriptData = await scriptRender(scriptNode, options,html);
    await templateRender(templateNode, scriptData, html)
    const { newCode } = await scriptData.render()
    scriptMap.get('script').data = newCode;
  }
  const contentHtml = render(handler.dom, {
    encodeEntities:'utf8',
  });

  return {
    contentHtml,
    scriptData
  }
}

export default {
  scriptRender,
  vueRender
}