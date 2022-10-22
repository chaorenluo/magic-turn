import parser from "@babel/parser";
import { createRunFunction, arrowFunctionExpression, OptionsApi } from './utils';
import t from '@babel/types';
import DataAnalysis from './DataRender'

const { parse } = parser;

export default class WatchRender {
  watchNode: any;
  objectWatch: Array<any> = [];
  objectProperty: Array<any> = [];
  watchKey: Set<string> = new Set();
  dataAnalysis: DataAnalysis;
  options: any;
  newAst: t.File;

  constructor(watchNode: any, dataAnalysis: DataAnalysis, options: any, _newAst: t.File) {
    this.watchNode = watchNode;
    this.dataAnalysis = dataAnalysis;
    this.options = options;
    this.newAst = _newAst;
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

  addPrefix(key: any) {
    let watchName = key.name ? key.name : key.value;
    if (this.dataAnalysis.hasReactiveKey(watchName.split('.')[0])) {
      watchName = `state.${watchName}`
    }
    return parse(watchName, {
      sourceType: 'module'
    }).program.body[0]?.expression
  }

  createWatchNode(watchItem: any, watchParams?: any) {
    let watchNameNode = this.addPrefix(watchItem.key);
    let watchAttribute = arrowFunctionExpression([], watchNameNode)
    let watchFn = arrowFunctionExpression(watchItem.params, watchItem.body)
    let params = [watchAttribute, watchFn];
    if (watchParams) {
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
          watchItem = {
            params: v.value.params,
            body: v.value.body,
            key: node.key
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