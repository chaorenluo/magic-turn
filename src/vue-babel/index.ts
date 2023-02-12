import  { scriptRender } from './template-script'
import {templateRender} from './template-html'
import { Parser,DomHandler, DomUtils, } from "htmlparser2";



import {render} from 'dom-serializer';
import { options } from '../config';


const decomposeTemp = (html:string) =>{
  let script = html.lastIndexOf('<script>') > -1 ? html.substring(html.indexOf('<script>') + 8, html.lastIndexOf('</script>')) : ''
    return {
      script,
      newHtml:html.replace(script,'LJM')
    }
  }

  const updateAlias = (str:string) =>{
    if(str.indexOf("@import") == -1) return str;
    let startIndex = 0;
    let endIndex = 0;
    for(let i = str.indexOf("@import");i<str.length;i++){
        if(str[i] == `'` || str[i] == `"`){
          if(!startIndex) {
            startIndex =i;
            continue;
          }
          if(!endIndex) {
            endIndex =i+1; 
            continue;
          }
          if(startIndex && endIndex){
            break;
          }
        }
    }

    if(startIndex && endIndex){
      let importCssUrl = str.substring(startIndex,endIndex);
      let newImportCssUrl =  importCssUrl.replaceAll('../','');
      let firstChar = newImportCssUrl.charAt(0);
      let url = `${firstChar}~/` + newImportCssUrl.substring(1, newImportCssUrl.length)
      if (str.substring(endIndex, endIndex + 1) != ';') {
        url = url + ';';
      }
      str = str.replace(importCssUrl,url);
      return str
    }
  }
 
  const setImportEnd = (str:string) =>{
    str = updateAlias(str)
    str = str.replaceAll('stylus','scss'); 
    str = str.replaceAll('styl','scss'); 
     return str
  }

const vueRender = async (html: any, options: any, filePath: string) => {
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
    if (!scriptMap.has('script') && elem.name === 'script' && !elem.attribs['type']) {
      elem.attribs = {setup:""}
      scriptMap.set('script',elem.children[0]) 
    }
    if (!templateMap.has('template') && elem.name === 'template') {
      templateMap.set('template',elem)
    }
    if (elem.name === 'style') {
      const lang = elem.attribs['lang']
     if(lang && lang==='stylus'){
      elem.attribs['lang'] = 'stylus';
      let content = elem.children[0].data;
      elem.children[0].data = options.scssTurn ? setImportEnd(content) : content;
     }
    }
  }, dom, true)
  let scriptNode = htmlData.script;
  let templateNode = templateMap.get("template");
  let scriptData;

  if (scriptNode) {
    scriptData = await scriptRender(scriptNode, options,filePath);
    await templateRender(templateNode, scriptData,filePath,options)
    const { newCode } = await scriptData.render()
    scriptMap.get('script').data = '\n'+newCode+'\n';
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