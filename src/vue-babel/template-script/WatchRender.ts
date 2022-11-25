import parser from "@babel/parser";
import { createRunFunction, arrowFunctionExpression, OptionsApi } from './utils';
import t from '@babel/types';
import DataRender from './DataRender'
import VuexRender from './VuexRender'
import ComputedRender from './ComputedRender'
import PropsRender from './PropsRender'
import MixinRender from './MixinRender'

const { parse } = parser;

type DataContent = {
  dataRender: DataRender, vuexRender:VuexRender,computedRender:ComputedRender, propsRender:PropsRender,mixinRender:MixinRender
}
export default class WatchRender {
  watchNode: any;
  objectWatch: Array<any> = [];
  objectProperty: Array<any> = [];
  watchKey: Set<string> = new Set();
  dataRender: DataRender;
  options: any;
  newAst: t.File;
  vuexRender: VuexRender;
  computedRender: ComputedRender;
  propsRender: PropsRender;
  mixinRender:MixinRender

  constructor(watchNode: any, dataContent:DataContent, options: any, _newAst: t.File) {
    const { dataRender, vuexRender,computedRender,propsRender,mixinRender} = dataContent;
    this.watchNode = watchNode;
    this.dataRender = dataRender;
    this.options = options;
    this.newAst = _newAst;
    this.vuexRender = vuexRender;
    this.computedRender = computedRender;
    this.propsRender = propsRender;
    this.mixinRender = mixinRender;
    this.init()
  }

  init() {
    this.watchNode.properties.forEach((node) => {
      if (node.type === 'ObjectMethod') {
        this.objectWatch.push(node)
      }
      if (node.type === 'ObjectProperty') {
        this.objectProperty.push(node)
      }
    })
  }

  hasWatchKey(key: string) {
    return this.watchKey.has(key);
  }

  getPrefix(watchName: string) {
    let firstNode = watchName.split('.')[0];
    if (firstNode.indexOf('$') > -1) {
      return watchName.replace('$', '');
    }
    if (this.dataRender && this.dataRender.hasReactiveKey(firstNode)) {
      return `${this.options.dataName}.${watchName}`
    }
    if (this.propsRender && this.propsRender.hasPropsKey(firstNode)) {
      return `props.${watchName}`
    }
    if (this.computedRender && this.computedRender.hasComputedKey(firstNode)) {
      return `${watchName}.value`
    }
    if (this.mixinRender && this.mixinRender.reactiveMap.has(firstNode)) {
      const data = this.mixinRender.reactiveMap.get(firstNode)
      return `${data.name}.${watchName}`
    }
    if (this.mixinRender && this.mixinRender.computeMap.has(firstNode)) {
      return `${watchName}.value`
    }
    if (this.vuexRender && this.vuexRender.stateHookMap.has(firstNode)) {
      const { prefix, value } = this.vuexRender.stateHookMap.get(firstNode);
      if(prefix)  return `${prefix}.${watchName}`
      let arr = watchName.split('.');
      arr[0] = value;
      return arr.join('.');
    }
  }

  addPrefix(key: any) {
    try {
      let watchName = key.name ? key.name : key.value;
      let prefix = this.getPrefix(watchName)
      if (prefix) {
        watchName = prefix
      }
      return parse(watchName, {
        sourceType: 'module'
      }).program.body[0]?.expression
    } catch (error) {
      console.error('addPrefix----',key)
    }
  }

  createWatchNode(watchItem: any, watchParams:Array<any>=[]) {
    let watchNameNode = this.addPrefix(watchItem.key);
    // console.log('watchNameNode---',watchNameNode,watchItem.key)
    if (['route'].includes(watchNameNode.name)) {
      watchParams.push(t.objectProperty(t.identifier('deep'), t.booleanLiteral(true)))
    }
    let watchAttribute = arrowFunctionExpression([], watchNameNode)
    let watchFn;
    if (watchItem.params && watchItem.body) {
       watchFn = arrowFunctionExpression(watchItem.params, watchItem.body)
    } else if(watchItem.value) {
      watchFn = t.identifier(watchItem.value)
    }
    let params = [watchAttribute, watchFn];
    if (watchParams.length > 0) {
      params.push(t.objectExpression(watchParams) as any)
    }
    let fn = createRunFunction(OptionsApi.Watch, params as any)
    this.newAst.program.body.push(fn)
  }

  renderObjectMethod() {
    this.objectWatch.forEach((item) => this.createWatchNode(item))
  }

  dealWithProperty(node) {
    const value = node.value;
    if (value.properties) {
      let watchItem: any = {}
      let watchParams: any = []
      value.properties.forEach((v: any) => {
        if (v.key.name == "handler") {
          if (v.body) {
            watchItem = {
              params: v.params,
              body: v.body,
              key: node.key
            } 
          } else if (v.value && t.isStringLiteral(v.value)) {
            watchItem = {
              params: v.params || null,
              body: v.body || null,
              key: node.key,
              value:v.value.value
            }
          }else if (v.value && t.isFunctionExpression(v.value)) {
            watchItem = {
              params: v.value.params,
              body: v.value.body,
              key: node.key,
            }
          }
        } else {
          watchParams.push(v)
        }
      })
      this.createWatchNode(watchItem, watchParams)
    } else if (value.body) {
      let watchItem = {
        params: value.params,
        body: value.body,
        key: node.key
      }
      console.log(node.key)
      this.createWatchNode(watchItem)
    }

  }

  renderObjectProperty() {
    this.objectProperty.forEach((item) => this.dealWithProperty(item))
  }

  render() {
    this.renderObjectProperty()
    this.renderObjectMethod()
  }
}