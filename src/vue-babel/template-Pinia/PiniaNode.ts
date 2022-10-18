import parser from "@babel/parser";
import t from '@babel/types';
import traverse from "@babel/traverse";

const { parse } = parser;

export default class PinnaNode {
  astNode = {};
  oldAstNode = {};
  stateMap = new Map<string, any>();
  getters = new Map<string, any>();
  actionsMap = new Map<string, any>();
  mutationsMap = new Map<string, any>();
  fileCode = '';
  filePath = '';
  fileName = '';
  
  static cacheNode = new Map<string, PinnaNode>();

  constructor(_fileCode: string, _filePath: string, _fileName: string) {
    this.fileCode = _fileCode;
    this.filePath = _filePath;
    this.fileName = _fileName;
    this.createAst();
  }



  createAst() {
    const ast = parse(this.fileCode, {
      sourceType: 'module'
    })
    traverse.default(ast, {
      ObjectExpression(path) {
       console.log(path.node)
      },
    })
  }

}