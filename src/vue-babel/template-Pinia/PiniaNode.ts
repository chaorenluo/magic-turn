import parser from "@babel/parser";
import t from "@babel/types";
import traverse from "@babel/traverse";
import generate from "@babel/generator";
import {
  modifyCycleName,
  getPiniaName,
  getPiniaVariable,
  createCallExpression as createCallExpressionTo,
  createMemberExpression,
} from "../template-script/utils";

const { parse } = parser;

enum PinnaType {
  state = "state",
  actions = "actions",
  mutations = "mutations",
  getters = "getters",
}

export default class PinnaNode {
  astNode = {};
  oldAstNode = {};
  options = {};
  importModules = new Set();
  importGlobal = new Set();
  additionalModule = new Set();
  useModules = new Map();
  stateMap = new Map<string, any>();
  gettersMap = new Map<string, any>();
  actionsMap = new Map<string, any>();
  mutationsMap = new Map<string, any>();

  fileCode = "";
  filePath = "";
  fileName = "";
  pathPrefix = "";

  static cacheNode = new Map<string, PinnaNode>();

  constructor(
    _fileCode: string,
    _filePath: string,
    _fileName: string,
    _pathPrefix: string,
    _options: any
  ) {
    this.fileCode = _fileCode;
    this.filePath = _filePath;
    this.fileName = _fileName;
    this.pathPrefix = _pathPrefix;
    this.options = _options;
    this.createAst();
  }

  addVariableDeclarator(name: string) {
    name = getPiniaVariable(name);
    let callExpression = t.callExpression(
      t.identifier(modifyCycleName(name, "use")),
      []
    );
    let declarations = t.variableDeclarator(t.identifier(name), callExpression);
    let variableDeclaration = t.variableDeclaration("const", [declarations]);
    return variableDeclaration;
  }


  getParentObjectMethod(path: any, name:string) {
    let newPath = path;
    while (newPath && newPath.type != "ObjectMethod") {
      newPath = newPath.parentPath;
    }
  
    if (newPath) {
      let pathNode = newPath.node;
      let methodName = pathNode.key.name;
      let useModuleVal = this.useModules.get(methodName);
      let createHook = () => {
        this.importModules.add(name);
        let variableDeclaration = this.addVariableDeclarator(name);
        pathNode.body.body.unshift(variableDeclaration);
      };
      if (!useModuleVal) {
        this.useModules.set(methodName, [name]);
        createHook();
      } else if (useModuleVal && !useModuleVal.includes(name)) {
        useModuleVal.push(name);
        this.useModules.set(methodName, useModuleVal);
        createHook();
      }
    }
  }

  dealWithType(properties: Array<any>, nodeName: PinnaType) {
    properties.forEach((item) => {
      let name = item.key.name;
      if (item.type === "ObjectMethod" && item.params) {
        item.params.shift();
      }
      this[`${nodeName}Map`].set(name, item);
    });
  }

  createCallExpression(arg: Array<any>) {
    let newArg = JSON.parse(JSON.stringify(arg));
    let methodName = arg[0].value;
    let memberExpression = t.memberExpression(
      t.thisExpression(),
      t.identifier(methodName)
    );
    return t.callExpression(memberExpression, newArg.splice(1));
  }

  filterExport(ast: any) {
    let body = ast.program.body;
    if (body) {
      body.forEach((item) => {
        if (!t.isExportNamedDeclaration(item)) {
          this.additionalModule.add(item);
        }
      });
    }
  }

  analysisCallExpression(path) {
    const args = path.node.arguments;
    const val = args[0].value;
    if (!val) return;
    let piniaPath = val.split("/");
    let key = piniaPath.length > 1 ? piniaPath[0] : "index";
    let keyVal = getPiniaVariable(key);
    if (piniaPath.length <= 1) {
      piniaPath.unshift(key);
    }
    if (keyVal != this.fileName) {
      this.importModules.add(key);
      this.getParentObjectMethod(path, key)
      piniaPath[0] = getPiniaVariable(piniaPath[0]);
    } else {
      piniaPath[0] = 'this';
    }

    const params = args.slice(1, args.length);
    let callExpression = createCallExpressionTo(
      createMemberExpression(piniaPath.reverse()),
      params
    );
    path.replaceWith(callExpression);
  }

  createAst() {
    const ast = parse(this.fileCode, {
      sourceType: "module",
    });
    this.filterExport(ast);
    let _this = this;
    traverse.default(ast, {
      Identifier(path) {
        const nodeName = path.node.name;
        if (
          nodeName === PinnaType.actions ||
          nodeName === PinnaType.getters ||
          nodeName === PinnaType.mutations ||
          nodeName === PinnaType.state
        ) {
          let parent = path.parent;
          let value = parent.init || parent.value;
          if (value) {
            let properties = value.properties;
            if (nodeName === PinnaType.state && value.body) {
              properties = value.body.properties;
            }
            if (properties) _this.dealWithType(properties, nodeName);
          }
        }
      },
      ThisExpression(path) {
        const property = path.parent.property;
        const propertyName = property.name;
        if (propertyName && propertyName.charAt(0) === "$") {
          _this.importGlobal.add(propertyName);
          if(propertyName == '$axios'){
            property.name = '$fetch'
          }
          path.parentPath.replaceWith(property);
        }
      },
      MemberExpression(path) {
        let nodeName = path.node.object.name;
        const property = path.node.property;
        let newNode = path.node;
        if (nodeName === PinnaType.state) {
          newNode.object = t.thisExpression();
          path.replaceWith(newNode);
        }
        if (nodeName === "rootState") {
          _this.getParentObjectMethod(path, property.name);
          newNode = newNode.property;
          newNode.name = getPiniaVariable(newNode.name);
          path.replaceWith(newNode);
        }
      },
      CallExpression(path) {
        if (path.node.callee.property) {
          let fnName = path.node.callee.property.name;
          if (["commit", "dispatch"].includes(fnName)) {
            _this.analysisCallExpression(path);
          }
        } else {
          let fnName = path.node.callee.name;
          if (fnName === "commit" || fnName === "dispatch") {
            let callExpression = _this.createCallExpression(
              path.node.arguments
            );
            path.replaceWith(callExpression);
          }
        }
      },
    });
    this.oldAstNode = ast;
  }

  addActions(properties: Array<any>) {
    this.actionsMap.forEach((item) => {
      properties.push(item);
    });
    this.mutationsMap.forEach((item) => {
      properties.push(item);
    });
  }

  addState(properties: Array<any>) {
    this.stateMap.forEach((item) => {
      properties.push(item);
    });
  }

  addGetters(properties: Array<any>) {
    this.gettersMap.forEach((item) => {
      properties.push(item);
    });
  }

  additional(program: any) {
    program.body = Array.from(this.additionalModule).concat(program.body);
  }

  addImportPinia(program: any) {
    let defineStore = t.identifier("defineStore");
    let importSpecifier = t.importSpecifier(defineStore, defineStore);
    let stringLiteral = t.stringLiteral("pinia");
    let importDeclaration = t.importDeclaration(
      [importSpecifier],
      stringLiteral
    );
    program.body.unshift(importDeclaration);
  }

  addImportHooks(program: any) {
    this.importModules.forEach((item) => {
      let hookStore = t.identifier(getPiniaName(item));
      let importSpecifier = t.importSpecifier(hookStore, hookStore);
      let stringLiteral = t.stringLiteral(
        `${this.options.piniaStore.aliasPrefix}/${item}`
      );
      let importDeclaration = t.importDeclaration(
        [importSpecifier],
        stringLiteral
      );
      program.body.unshift(importDeclaration);
    });
  }

  async buildAst() {
    let state = this.stateMap.size > 0 ? `state: () => ({}),` : "";
    let getters = this.gettersMap.size > 0 ? `getters: {},` : "";
    let actions =
      this.actionsMap.size > 0 || this.mutationsMap.size > 0
        ? `actions: {},`
        : "";
    let piniaTemplate = `
    export const ${modifyCycleName(this.fileName, "use")} = defineStore('${
      this.fileName
    }', {
      ${state}
      ${getters}
      ${actions}
    })
    `;
    const ast = parse(piniaTemplate, {
      sourceType: "module",
    });

    this.additional(ast.program);
    this.addImportHooks(ast.program);
    this.addImportPinia(ast.program);
    let _this = this;

    traverse.default(ast, {
      ObjectProperty(path) {
        const node = path.node;
        const nodeName = node.key.name;
        if (nodeName === PinnaType.state && node.value.body) {
          let properties = node.value.body.properties;
          _this.addState(properties);
        }
        if (nodeName === PinnaType.getters) {
          let properties = node.value.properties;
          _this.addGetters(properties);
        }
        if (nodeName === PinnaType.actions) {
          let properties = node.value.properties;
          _this.addActions(properties);
        }
      },
    });
    this.astNode = ast;
  }

  async renderPinia() {
    let bodyCode = await generate.default(this.astNode);
    return bodyCode.code;
  }
}
