"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@babel/types/lib/utils/shallowEqual.js
var require_shallowEqual = __commonJS({
  "node_modules/@babel/types/lib/utils/shallowEqual.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = shallowEqual;
    function shallowEqual(actual, expected) {
      const keys = Object.keys(expected);
      for (const key of keys) {
        if (actual[key] !== expected[key]) {
          return false;
        }
      }
      return true;
    }
  }
});

// node_modules/@babel/types/lib/validators/generated/index.js
var require_generated = __commonJS({
  "node_modules/@babel/types/lib/validators/generated/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isAccessor = isAccessor;
    exports.isAnyTypeAnnotation = isAnyTypeAnnotation;
    exports.isArgumentPlaceholder = isArgumentPlaceholder;
    exports.isArrayExpression = isArrayExpression;
    exports.isArrayPattern = isArrayPattern;
    exports.isArrayTypeAnnotation = isArrayTypeAnnotation;
    exports.isArrowFunctionExpression = isArrowFunctionExpression;
    exports.isAssignmentExpression = isAssignmentExpression;
    exports.isAssignmentPattern = isAssignmentPattern;
    exports.isAwaitExpression = isAwaitExpression;
    exports.isBigIntLiteral = isBigIntLiteral;
    exports.isBinary = isBinary;
    exports.isBinaryExpression = isBinaryExpression;
    exports.isBindExpression = isBindExpression;
    exports.isBlock = isBlock;
    exports.isBlockParent = isBlockParent;
    exports.isBlockStatement = isBlockStatement;
    exports.isBooleanLiteral = isBooleanLiteral;
    exports.isBooleanLiteralTypeAnnotation = isBooleanLiteralTypeAnnotation;
    exports.isBooleanTypeAnnotation = isBooleanTypeAnnotation;
    exports.isBreakStatement = isBreakStatement;
    exports.isCallExpression = isCallExpression;
    exports.isCatchClause = isCatchClause;
    exports.isClass = isClass;
    exports.isClassAccessorProperty = isClassAccessorProperty;
    exports.isClassBody = isClassBody;
    exports.isClassDeclaration = isClassDeclaration;
    exports.isClassExpression = isClassExpression;
    exports.isClassImplements = isClassImplements;
    exports.isClassMethod = isClassMethod;
    exports.isClassPrivateMethod = isClassPrivateMethod;
    exports.isClassPrivateProperty = isClassPrivateProperty;
    exports.isClassProperty = isClassProperty;
    exports.isCompletionStatement = isCompletionStatement;
    exports.isConditional = isConditional;
    exports.isConditionalExpression = isConditionalExpression;
    exports.isContinueStatement = isContinueStatement;
    exports.isDebuggerStatement = isDebuggerStatement;
    exports.isDecimalLiteral = isDecimalLiteral;
    exports.isDeclaration = isDeclaration;
    exports.isDeclareClass = isDeclareClass;
    exports.isDeclareExportAllDeclaration = isDeclareExportAllDeclaration;
    exports.isDeclareExportDeclaration = isDeclareExportDeclaration;
    exports.isDeclareFunction = isDeclareFunction;
    exports.isDeclareInterface = isDeclareInterface;
    exports.isDeclareModule = isDeclareModule;
    exports.isDeclareModuleExports = isDeclareModuleExports;
    exports.isDeclareOpaqueType = isDeclareOpaqueType;
    exports.isDeclareTypeAlias = isDeclareTypeAlias;
    exports.isDeclareVariable = isDeclareVariable;
    exports.isDeclaredPredicate = isDeclaredPredicate;
    exports.isDecorator = isDecorator;
    exports.isDirective = isDirective;
    exports.isDirectiveLiteral = isDirectiveLiteral;
    exports.isDoExpression = isDoExpression;
    exports.isDoWhileStatement = isDoWhileStatement;
    exports.isEmptyStatement = isEmptyStatement;
    exports.isEmptyTypeAnnotation = isEmptyTypeAnnotation;
    exports.isEnumBody = isEnumBody;
    exports.isEnumBooleanBody = isEnumBooleanBody;
    exports.isEnumBooleanMember = isEnumBooleanMember;
    exports.isEnumDeclaration = isEnumDeclaration;
    exports.isEnumDefaultedMember = isEnumDefaultedMember;
    exports.isEnumMember = isEnumMember;
    exports.isEnumNumberBody = isEnumNumberBody;
    exports.isEnumNumberMember = isEnumNumberMember;
    exports.isEnumStringBody = isEnumStringBody;
    exports.isEnumStringMember = isEnumStringMember;
    exports.isEnumSymbolBody = isEnumSymbolBody;
    exports.isExistsTypeAnnotation = isExistsTypeAnnotation;
    exports.isExportAllDeclaration = isExportAllDeclaration;
    exports.isExportDeclaration = isExportDeclaration;
    exports.isExportDefaultDeclaration = isExportDefaultDeclaration;
    exports.isExportDefaultSpecifier = isExportDefaultSpecifier;
    exports.isExportNamedDeclaration = isExportNamedDeclaration;
    exports.isExportNamespaceSpecifier = isExportNamespaceSpecifier;
    exports.isExportSpecifier = isExportSpecifier;
    exports.isExpression = isExpression;
    exports.isExpressionStatement = isExpressionStatement;
    exports.isExpressionWrapper = isExpressionWrapper;
    exports.isFile = isFile;
    exports.isFlow = isFlow;
    exports.isFlowBaseAnnotation = isFlowBaseAnnotation;
    exports.isFlowDeclaration = isFlowDeclaration;
    exports.isFlowPredicate = isFlowPredicate;
    exports.isFlowType = isFlowType;
    exports.isFor = isFor;
    exports.isForInStatement = isForInStatement;
    exports.isForOfStatement = isForOfStatement;
    exports.isForStatement = isForStatement;
    exports.isForXStatement = isForXStatement;
    exports.isFunction = isFunction;
    exports.isFunctionDeclaration = isFunctionDeclaration;
    exports.isFunctionExpression = isFunctionExpression;
    exports.isFunctionParent = isFunctionParent;
    exports.isFunctionTypeAnnotation = isFunctionTypeAnnotation;
    exports.isFunctionTypeParam = isFunctionTypeParam;
    exports.isGenericTypeAnnotation = isGenericTypeAnnotation;
    exports.isIdentifier = isIdentifier;
    exports.isIfStatement = isIfStatement;
    exports.isImmutable = isImmutable;
    exports.isImport = isImport;
    exports.isImportAttribute = isImportAttribute;
    exports.isImportDeclaration = isImportDeclaration;
    exports.isImportDefaultSpecifier = isImportDefaultSpecifier;
    exports.isImportNamespaceSpecifier = isImportNamespaceSpecifier;
    exports.isImportSpecifier = isImportSpecifier;
    exports.isIndexedAccessType = isIndexedAccessType;
    exports.isInferredPredicate = isInferredPredicate;
    exports.isInterfaceDeclaration = isInterfaceDeclaration;
    exports.isInterfaceExtends = isInterfaceExtends;
    exports.isInterfaceTypeAnnotation = isInterfaceTypeAnnotation;
    exports.isInterpreterDirective = isInterpreterDirective;
    exports.isIntersectionTypeAnnotation = isIntersectionTypeAnnotation;
    exports.isJSX = isJSX;
    exports.isJSXAttribute = isJSXAttribute;
    exports.isJSXClosingElement = isJSXClosingElement;
    exports.isJSXClosingFragment = isJSXClosingFragment;
    exports.isJSXElement = isJSXElement;
    exports.isJSXEmptyExpression = isJSXEmptyExpression;
    exports.isJSXExpressionContainer = isJSXExpressionContainer;
    exports.isJSXFragment = isJSXFragment;
    exports.isJSXIdentifier = isJSXIdentifier;
    exports.isJSXMemberExpression = isJSXMemberExpression;
    exports.isJSXNamespacedName = isJSXNamespacedName;
    exports.isJSXOpeningElement = isJSXOpeningElement;
    exports.isJSXOpeningFragment = isJSXOpeningFragment;
    exports.isJSXSpreadAttribute = isJSXSpreadAttribute;
    exports.isJSXSpreadChild = isJSXSpreadChild;
    exports.isJSXText = isJSXText;
    exports.isLVal = isLVal;
    exports.isLabeledStatement = isLabeledStatement;
    exports.isLiteral = isLiteral;
    exports.isLogicalExpression = isLogicalExpression;
    exports.isLoop = isLoop;
    exports.isMemberExpression = isMemberExpression;
    exports.isMetaProperty = isMetaProperty;
    exports.isMethod = isMethod;
    exports.isMiscellaneous = isMiscellaneous;
    exports.isMixedTypeAnnotation = isMixedTypeAnnotation;
    exports.isModuleDeclaration = isModuleDeclaration;
    exports.isModuleExpression = isModuleExpression;
    exports.isModuleSpecifier = isModuleSpecifier;
    exports.isNewExpression = isNewExpression;
    exports.isNoop = isNoop;
    exports.isNullLiteral = isNullLiteral;
    exports.isNullLiteralTypeAnnotation = isNullLiteralTypeAnnotation;
    exports.isNullableTypeAnnotation = isNullableTypeAnnotation;
    exports.isNumberLiteral = isNumberLiteral;
    exports.isNumberLiteralTypeAnnotation = isNumberLiteralTypeAnnotation;
    exports.isNumberTypeAnnotation = isNumberTypeAnnotation;
    exports.isNumericLiteral = isNumericLiteral;
    exports.isObjectExpression = isObjectExpression;
    exports.isObjectMember = isObjectMember;
    exports.isObjectMethod = isObjectMethod;
    exports.isObjectPattern = isObjectPattern;
    exports.isObjectProperty = isObjectProperty;
    exports.isObjectTypeAnnotation = isObjectTypeAnnotation;
    exports.isObjectTypeCallProperty = isObjectTypeCallProperty;
    exports.isObjectTypeIndexer = isObjectTypeIndexer;
    exports.isObjectTypeInternalSlot = isObjectTypeInternalSlot;
    exports.isObjectTypeProperty = isObjectTypeProperty;
    exports.isObjectTypeSpreadProperty = isObjectTypeSpreadProperty;
    exports.isOpaqueType = isOpaqueType;
    exports.isOptionalCallExpression = isOptionalCallExpression;
    exports.isOptionalIndexedAccessType = isOptionalIndexedAccessType;
    exports.isOptionalMemberExpression = isOptionalMemberExpression;
    exports.isParenthesizedExpression = isParenthesizedExpression;
    exports.isPattern = isPattern;
    exports.isPatternLike = isPatternLike;
    exports.isPipelineBareFunction = isPipelineBareFunction;
    exports.isPipelinePrimaryTopicReference = isPipelinePrimaryTopicReference;
    exports.isPipelineTopicExpression = isPipelineTopicExpression;
    exports.isPlaceholder = isPlaceholder;
    exports.isPrivate = isPrivate;
    exports.isPrivateName = isPrivateName;
    exports.isProgram = isProgram;
    exports.isProperty = isProperty;
    exports.isPureish = isPureish;
    exports.isQualifiedTypeIdentifier = isQualifiedTypeIdentifier;
    exports.isRecordExpression = isRecordExpression;
    exports.isRegExpLiteral = isRegExpLiteral;
    exports.isRegexLiteral = isRegexLiteral;
    exports.isRestElement = isRestElement;
    exports.isRestProperty = isRestProperty;
    exports.isReturnStatement = isReturnStatement;
    exports.isScopable = isScopable;
    exports.isSequenceExpression = isSequenceExpression;
    exports.isSpreadElement = isSpreadElement;
    exports.isSpreadProperty = isSpreadProperty;
    exports.isStandardized = isStandardized;
    exports.isStatement = isStatement;
    exports.isStaticBlock = isStaticBlock;
    exports.isStringLiteral = isStringLiteral;
    exports.isStringLiteralTypeAnnotation = isStringLiteralTypeAnnotation;
    exports.isStringTypeAnnotation = isStringTypeAnnotation;
    exports.isSuper = isSuper;
    exports.isSwitchCase = isSwitchCase;
    exports.isSwitchStatement = isSwitchStatement;
    exports.isSymbolTypeAnnotation = isSymbolTypeAnnotation;
    exports.isTSAnyKeyword = isTSAnyKeyword;
    exports.isTSArrayType = isTSArrayType;
    exports.isTSAsExpression = isTSAsExpression;
    exports.isTSBaseType = isTSBaseType;
    exports.isTSBigIntKeyword = isTSBigIntKeyword;
    exports.isTSBooleanKeyword = isTSBooleanKeyword;
    exports.isTSCallSignatureDeclaration = isTSCallSignatureDeclaration;
    exports.isTSConditionalType = isTSConditionalType;
    exports.isTSConstructSignatureDeclaration = isTSConstructSignatureDeclaration;
    exports.isTSConstructorType = isTSConstructorType;
    exports.isTSDeclareFunction = isTSDeclareFunction;
    exports.isTSDeclareMethod = isTSDeclareMethod;
    exports.isTSEntityName = isTSEntityName;
    exports.isTSEnumDeclaration = isTSEnumDeclaration;
    exports.isTSEnumMember = isTSEnumMember;
    exports.isTSExportAssignment = isTSExportAssignment;
    exports.isTSExpressionWithTypeArguments = isTSExpressionWithTypeArguments;
    exports.isTSExternalModuleReference = isTSExternalModuleReference;
    exports.isTSFunctionType = isTSFunctionType;
    exports.isTSImportEqualsDeclaration = isTSImportEqualsDeclaration;
    exports.isTSImportType = isTSImportType;
    exports.isTSIndexSignature = isTSIndexSignature;
    exports.isTSIndexedAccessType = isTSIndexedAccessType;
    exports.isTSInferType = isTSInferType;
    exports.isTSInstantiationExpression = isTSInstantiationExpression;
    exports.isTSInterfaceBody = isTSInterfaceBody;
    exports.isTSInterfaceDeclaration = isTSInterfaceDeclaration;
    exports.isTSIntersectionType = isTSIntersectionType;
    exports.isTSIntrinsicKeyword = isTSIntrinsicKeyword;
    exports.isTSLiteralType = isTSLiteralType;
    exports.isTSMappedType = isTSMappedType;
    exports.isTSMethodSignature = isTSMethodSignature;
    exports.isTSModuleBlock = isTSModuleBlock;
    exports.isTSModuleDeclaration = isTSModuleDeclaration;
    exports.isTSNamedTupleMember = isTSNamedTupleMember;
    exports.isTSNamespaceExportDeclaration = isTSNamespaceExportDeclaration;
    exports.isTSNeverKeyword = isTSNeverKeyword;
    exports.isTSNonNullExpression = isTSNonNullExpression;
    exports.isTSNullKeyword = isTSNullKeyword;
    exports.isTSNumberKeyword = isTSNumberKeyword;
    exports.isTSObjectKeyword = isTSObjectKeyword;
    exports.isTSOptionalType = isTSOptionalType;
    exports.isTSParameterProperty = isTSParameterProperty;
    exports.isTSParenthesizedType = isTSParenthesizedType;
    exports.isTSPropertySignature = isTSPropertySignature;
    exports.isTSQualifiedName = isTSQualifiedName;
    exports.isTSRestType = isTSRestType;
    exports.isTSStringKeyword = isTSStringKeyword;
    exports.isTSSymbolKeyword = isTSSymbolKeyword;
    exports.isTSThisType = isTSThisType;
    exports.isTSTupleType = isTSTupleType;
    exports.isTSType = isTSType;
    exports.isTSTypeAliasDeclaration = isTSTypeAliasDeclaration;
    exports.isTSTypeAnnotation = isTSTypeAnnotation;
    exports.isTSTypeAssertion = isTSTypeAssertion;
    exports.isTSTypeElement = isTSTypeElement;
    exports.isTSTypeLiteral = isTSTypeLiteral;
    exports.isTSTypeOperator = isTSTypeOperator;
    exports.isTSTypeParameter = isTSTypeParameter;
    exports.isTSTypeParameterDeclaration = isTSTypeParameterDeclaration;
    exports.isTSTypeParameterInstantiation = isTSTypeParameterInstantiation;
    exports.isTSTypePredicate = isTSTypePredicate;
    exports.isTSTypeQuery = isTSTypeQuery;
    exports.isTSTypeReference = isTSTypeReference;
    exports.isTSUndefinedKeyword = isTSUndefinedKeyword;
    exports.isTSUnionType = isTSUnionType;
    exports.isTSUnknownKeyword = isTSUnknownKeyword;
    exports.isTSVoidKeyword = isTSVoidKeyword;
    exports.isTaggedTemplateExpression = isTaggedTemplateExpression;
    exports.isTemplateElement = isTemplateElement;
    exports.isTemplateLiteral = isTemplateLiteral;
    exports.isTerminatorless = isTerminatorless;
    exports.isThisExpression = isThisExpression;
    exports.isThisTypeAnnotation = isThisTypeAnnotation;
    exports.isThrowStatement = isThrowStatement;
    exports.isTopicReference = isTopicReference;
    exports.isTryStatement = isTryStatement;
    exports.isTupleExpression = isTupleExpression;
    exports.isTupleTypeAnnotation = isTupleTypeAnnotation;
    exports.isTypeAlias = isTypeAlias;
    exports.isTypeAnnotation = isTypeAnnotation;
    exports.isTypeCastExpression = isTypeCastExpression;
    exports.isTypeParameter = isTypeParameter;
    exports.isTypeParameterDeclaration = isTypeParameterDeclaration;
    exports.isTypeParameterInstantiation = isTypeParameterInstantiation;
    exports.isTypeScript = isTypeScript;
    exports.isTypeofTypeAnnotation = isTypeofTypeAnnotation;
    exports.isUnaryExpression = isUnaryExpression;
    exports.isUnaryLike = isUnaryLike;
    exports.isUnionTypeAnnotation = isUnionTypeAnnotation;
    exports.isUpdateExpression = isUpdateExpression;
    exports.isUserWhitespacable = isUserWhitespacable;
    exports.isV8IntrinsicIdentifier = isV8IntrinsicIdentifier;
    exports.isVariableDeclaration = isVariableDeclaration;
    exports.isVariableDeclarator = isVariableDeclarator;
    exports.isVariance = isVariance;
    exports.isVoidTypeAnnotation = isVoidTypeAnnotation;
    exports.isWhile = isWhile;
    exports.isWhileStatement = isWhileStatement;
    exports.isWithStatement = isWithStatement;
    exports.isYieldExpression = isYieldExpression;
    var _shallowEqual = require_shallowEqual();
    function isArrayExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ArrayExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isAssignmentExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "AssignmentExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isBinaryExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "BinaryExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isInterpreterDirective(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "InterpreterDirective") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isDirective(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "Directive") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isDirectiveLiteral(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "DirectiveLiteral") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isBlockStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "BlockStatement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isBreakStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "BreakStatement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isCallExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "CallExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isCatchClause(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "CatchClause") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isConditionalExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ConditionalExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isContinueStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ContinueStatement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isDebuggerStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "DebuggerStatement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isDoWhileStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "DoWhileStatement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isEmptyStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "EmptyStatement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isExpressionStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ExpressionStatement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isFile(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "File") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isForInStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ForInStatement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isForStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ForStatement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isFunctionDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "FunctionDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isFunctionExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "FunctionExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isIdentifier(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "Identifier") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isIfStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "IfStatement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isLabeledStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "LabeledStatement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isStringLiteral(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "StringLiteral") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isNumericLiteral(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "NumericLiteral") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isNullLiteral(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "NullLiteral") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isBooleanLiteral(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "BooleanLiteral") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isRegExpLiteral(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "RegExpLiteral") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isLogicalExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "LogicalExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isMemberExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "MemberExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isNewExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "NewExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isProgram(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "Program") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isObjectExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ObjectExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isObjectMethod(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ObjectMethod") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isObjectProperty(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ObjectProperty") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isRestElement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "RestElement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isReturnStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ReturnStatement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isSequenceExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "SequenceExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isParenthesizedExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ParenthesizedExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isSwitchCase(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "SwitchCase") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isSwitchStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "SwitchStatement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isThisExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ThisExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isThrowStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ThrowStatement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTryStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TryStatement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isUnaryExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "UnaryExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isUpdateExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "UpdateExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isVariableDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "VariableDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isVariableDeclarator(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "VariableDeclarator") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isWhileStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "WhileStatement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isWithStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "WithStatement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isAssignmentPattern(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "AssignmentPattern") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isArrayPattern(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ArrayPattern") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isArrowFunctionExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ArrowFunctionExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isClassBody(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ClassBody") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isClassExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ClassExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isClassDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ClassDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isExportAllDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ExportAllDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isExportDefaultDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ExportDefaultDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isExportNamedDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ExportNamedDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isExportSpecifier(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ExportSpecifier") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isForOfStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ForOfStatement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isImportDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ImportDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isImportDefaultSpecifier(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ImportDefaultSpecifier") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isImportNamespaceSpecifier(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ImportNamespaceSpecifier") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isImportSpecifier(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ImportSpecifier") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isMetaProperty(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "MetaProperty") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isClassMethod(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ClassMethod") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isObjectPattern(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ObjectPattern") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isSpreadElement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "SpreadElement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isSuper(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "Super") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTaggedTemplateExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TaggedTemplateExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTemplateElement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TemplateElement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTemplateLiteral(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TemplateLiteral") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isYieldExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "YieldExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isAwaitExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "AwaitExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isImport(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "Import") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isBigIntLiteral(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "BigIntLiteral") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isExportNamespaceSpecifier(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ExportNamespaceSpecifier") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isOptionalMemberExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "OptionalMemberExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isOptionalCallExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "OptionalCallExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isClassProperty(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ClassProperty") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isClassAccessorProperty(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ClassAccessorProperty") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isClassPrivateProperty(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ClassPrivateProperty") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isClassPrivateMethod(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ClassPrivateMethod") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isPrivateName(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "PrivateName") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isStaticBlock(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "StaticBlock") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isAnyTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "AnyTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isArrayTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ArrayTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isBooleanTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "BooleanTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isBooleanLiteralTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "BooleanLiteralTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isNullLiteralTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "NullLiteralTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isClassImplements(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ClassImplements") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isDeclareClass(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "DeclareClass") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isDeclareFunction(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "DeclareFunction") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isDeclareInterface(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "DeclareInterface") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isDeclareModule(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "DeclareModule") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isDeclareModuleExports(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "DeclareModuleExports") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isDeclareTypeAlias(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "DeclareTypeAlias") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isDeclareOpaqueType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "DeclareOpaqueType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isDeclareVariable(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "DeclareVariable") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isDeclareExportDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "DeclareExportDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isDeclareExportAllDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "DeclareExportAllDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isDeclaredPredicate(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "DeclaredPredicate") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isExistsTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ExistsTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isFunctionTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "FunctionTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isFunctionTypeParam(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "FunctionTypeParam") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isGenericTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "GenericTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isInferredPredicate(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "InferredPredicate") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isInterfaceExtends(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "InterfaceExtends") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isInterfaceDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "InterfaceDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isInterfaceTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "InterfaceTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isIntersectionTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "IntersectionTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isMixedTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "MixedTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isEmptyTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "EmptyTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isNullableTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "NullableTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isNumberLiteralTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "NumberLiteralTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isNumberTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "NumberTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isObjectTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ObjectTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isObjectTypeInternalSlot(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ObjectTypeInternalSlot") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isObjectTypeCallProperty(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ObjectTypeCallProperty") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isObjectTypeIndexer(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ObjectTypeIndexer") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isObjectTypeProperty(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ObjectTypeProperty") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isObjectTypeSpreadProperty(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ObjectTypeSpreadProperty") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isOpaqueType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "OpaqueType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isQualifiedTypeIdentifier(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "QualifiedTypeIdentifier") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isStringLiteralTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "StringLiteralTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isStringTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "StringTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isSymbolTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "SymbolTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isThisTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ThisTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTupleTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TupleTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTypeofTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TypeofTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTypeAlias(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TypeAlias") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTypeCastExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TypeCastExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTypeParameter(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TypeParameter") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTypeParameterDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TypeParameterDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTypeParameterInstantiation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TypeParameterInstantiation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isUnionTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "UnionTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isVariance(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "Variance") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isVoidTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "VoidTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isEnumDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "EnumDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isEnumBooleanBody(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "EnumBooleanBody") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isEnumNumberBody(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "EnumNumberBody") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isEnumStringBody(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "EnumStringBody") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isEnumSymbolBody(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "EnumSymbolBody") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isEnumBooleanMember(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "EnumBooleanMember") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isEnumNumberMember(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "EnumNumberMember") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isEnumStringMember(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "EnumStringMember") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isEnumDefaultedMember(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "EnumDefaultedMember") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isIndexedAccessType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "IndexedAccessType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isOptionalIndexedAccessType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "OptionalIndexedAccessType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isJSXAttribute(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "JSXAttribute") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isJSXClosingElement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "JSXClosingElement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isJSXElement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "JSXElement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isJSXEmptyExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "JSXEmptyExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isJSXExpressionContainer(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "JSXExpressionContainer") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isJSXSpreadChild(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "JSXSpreadChild") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isJSXIdentifier(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "JSXIdentifier") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isJSXMemberExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "JSXMemberExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isJSXNamespacedName(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "JSXNamespacedName") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isJSXOpeningElement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "JSXOpeningElement") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isJSXSpreadAttribute(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "JSXSpreadAttribute") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isJSXText(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "JSXText") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isJSXFragment(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "JSXFragment") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isJSXOpeningFragment(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "JSXOpeningFragment") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isJSXClosingFragment(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "JSXClosingFragment") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isNoop(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "Noop") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isPlaceholder(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "Placeholder") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isV8IntrinsicIdentifier(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "V8IntrinsicIdentifier") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isArgumentPlaceholder(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ArgumentPlaceholder") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isBindExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "BindExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isImportAttribute(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ImportAttribute") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isDecorator(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "Decorator") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isDoExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "DoExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isExportDefaultSpecifier(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ExportDefaultSpecifier") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isRecordExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "RecordExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTupleExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TupleExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isDecimalLiteral(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "DecimalLiteral") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isModuleExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "ModuleExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTopicReference(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TopicReference") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isPipelineTopicExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "PipelineTopicExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isPipelineBareFunction(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "PipelineBareFunction") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isPipelinePrimaryTopicReference(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "PipelinePrimaryTopicReference") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSParameterProperty(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSParameterProperty") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSDeclareFunction(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSDeclareFunction") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSDeclareMethod(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSDeclareMethod") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSQualifiedName(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSQualifiedName") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSCallSignatureDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSCallSignatureDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSConstructSignatureDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSConstructSignatureDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSPropertySignature(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSPropertySignature") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSMethodSignature(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSMethodSignature") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSIndexSignature(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSIndexSignature") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSAnyKeyword(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSAnyKeyword") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSBooleanKeyword(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSBooleanKeyword") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSBigIntKeyword(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSBigIntKeyword") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSIntrinsicKeyword(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSIntrinsicKeyword") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSNeverKeyword(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSNeverKeyword") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSNullKeyword(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSNullKeyword") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSNumberKeyword(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSNumberKeyword") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSObjectKeyword(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSObjectKeyword") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSStringKeyword(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSStringKeyword") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSSymbolKeyword(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSSymbolKeyword") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSUndefinedKeyword(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSUndefinedKeyword") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSUnknownKeyword(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSUnknownKeyword") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSVoidKeyword(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSVoidKeyword") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSThisType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSThisType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSFunctionType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSFunctionType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSConstructorType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSConstructorType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSTypeReference(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSTypeReference") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSTypePredicate(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSTypePredicate") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSTypeQuery(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSTypeQuery") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSTypeLiteral(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSTypeLiteral") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSArrayType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSArrayType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSTupleType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSTupleType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSOptionalType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSOptionalType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSRestType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSRestType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSNamedTupleMember(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSNamedTupleMember") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSUnionType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSUnionType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSIntersectionType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSIntersectionType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSConditionalType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSConditionalType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSInferType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSInferType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSParenthesizedType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSParenthesizedType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSTypeOperator(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSTypeOperator") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSIndexedAccessType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSIndexedAccessType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSMappedType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSMappedType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSLiteralType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSLiteralType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSExpressionWithTypeArguments(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSExpressionWithTypeArguments") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSInterfaceDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSInterfaceDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSInterfaceBody(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSInterfaceBody") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSTypeAliasDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSTypeAliasDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSInstantiationExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSInstantiationExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSAsExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSAsExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSTypeAssertion(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSTypeAssertion") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSEnumDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSEnumDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSEnumMember(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSEnumMember") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSModuleDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSModuleDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSModuleBlock(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSModuleBlock") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSImportType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSImportType") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSImportEqualsDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSImportEqualsDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSExternalModuleReference(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSExternalModuleReference") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSNonNullExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSNonNullExpression") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSExportAssignment(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSExportAssignment") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSNamespaceExportDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSNamespaceExportDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSTypeAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSTypeAnnotation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSTypeParameterInstantiation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSTypeParameterInstantiation") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSTypeParameterDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSTypeParameterDeclaration") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSTypeParameter(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "TSTypeParameter") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isStandardized(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("ArrayExpression" === nodeType || "AssignmentExpression" === nodeType || "BinaryExpression" === nodeType || "InterpreterDirective" === nodeType || "Directive" === nodeType || "DirectiveLiteral" === nodeType || "BlockStatement" === nodeType || "BreakStatement" === nodeType || "CallExpression" === nodeType || "CatchClause" === nodeType || "ConditionalExpression" === nodeType || "ContinueStatement" === nodeType || "DebuggerStatement" === nodeType || "DoWhileStatement" === nodeType || "EmptyStatement" === nodeType || "ExpressionStatement" === nodeType || "File" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "Identifier" === nodeType || "IfStatement" === nodeType || "LabeledStatement" === nodeType || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "LogicalExpression" === nodeType || "MemberExpression" === nodeType || "NewExpression" === nodeType || "Program" === nodeType || "ObjectExpression" === nodeType || "ObjectMethod" === nodeType || "ObjectProperty" === nodeType || "RestElement" === nodeType || "ReturnStatement" === nodeType || "SequenceExpression" === nodeType || "ParenthesizedExpression" === nodeType || "SwitchCase" === nodeType || "SwitchStatement" === nodeType || "ThisExpression" === nodeType || "ThrowStatement" === nodeType || "TryStatement" === nodeType || "UnaryExpression" === nodeType || "UpdateExpression" === nodeType || "VariableDeclaration" === nodeType || "VariableDeclarator" === nodeType || "WhileStatement" === nodeType || "WithStatement" === nodeType || "AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassBody" === nodeType || "ClassExpression" === nodeType || "ClassDeclaration" === nodeType || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ExportSpecifier" === nodeType || "ForOfStatement" === nodeType || "ImportDeclaration" === nodeType || "ImportDefaultSpecifier" === nodeType || "ImportNamespaceSpecifier" === nodeType || "ImportSpecifier" === nodeType || "MetaProperty" === nodeType || "ClassMethod" === nodeType || "ObjectPattern" === nodeType || "SpreadElement" === nodeType || "Super" === nodeType || "TaggedTemplateExpression" === nodeType || "TemplateElement" === nodeType || "TemplateLiteral" === nodeType || "YieldExpression" === nodeType || "AwaitExpression" === nodeType || "Import" === nodeType || "BigIntLiteral" === nodeType || "ExportNamespaceSpecifier" === nodeType || "OptionalMemberExpression" === nodeType || "OptionalCallExpression" === nodeType || "ClassProperty" === nodeType || "ClassAccessorProperty" === nodeType || "ClassPrivateProperty" === nodeType || "ClassPrivateMethod" === nodeType || "PrivateName" === nodeType || "StaticBlock" === nodeType || nodeType === "Placeholder" && ("Identifier" === node.expectedNode || "StringLiteral" === node.expectedNode || "BlockStatement" === node.expectedNode || "ClassBody" === node.expectedNode)) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isExpression(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("ArrayExpression" === nodeType || "AssignmentExpression" === nodeType || "BinaryExpression" === nodeType || "CallExpression" === nodeType || "ConditionalExpression" === nodeType || "FunctionExpression" === nodeType || "Identifier" === nodeType || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "LogicalExpression" === nodeType || "MemberExpression" === nodeType || "NewExpression" === nodeType || "ObjectExpression" === nodeType || "SequenceExpression" === nodeType || "ParenthesizedExpression" === nodeType || "ThisExpression" === nodeType || "UnaryExpression" === nodeType || "UpdateExpression" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassExpression" === nodeType || "MetaProperty" === nodeType || "Super" === nodeType || "TaggedTemplateExpression" === nodeType || "TemplateLiteral" === nodeType || "YieldExpression" === nodeType || "AwaitExpression" === nodeType || "Import" === nodeType || "BigIntLiteral" === nodeType || "OptionalMemberExpression" === nodeType || "OptionalCallExpression" === nodeType || "TypeCastExpression" === nodeType || "JSXElement" === nodeType || "JSXFragment" === nodeType || "BindExpression" === nodeType || "DoExpression" === nodeType || "RecordExpression" === nodeType || "TupleExpression" === nodeType || "DecimalLiteral" === nodeType || "ModuleExpression" === nodeType || "TopicReference" === nodeType || "PipelineTopicExpression" === nodeType || "PipelineBareFunction" === nodeType || "PipelinePrimaryTopicReference" === nodeType || "TSInstantiationExpression" === nodeType || "TSAsExpression" === nodeType || "TSTypeAssertion" === nodeType || "TSNonNullExpression" === nodeType || nodeType === "Placeholder" && ("Expression" === node.expectedNode || "Identifier" === node.expectedNode || "StringLiteral" === node.expectedNode)) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isBinary(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("BinaryExpression" === nodeType || "LogicalExpression" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isScopable(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("BlockStatement" === nodeType || "CatchClause" === nodeType || "DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "Program" === nodeType || "ObjectMethod" === nodeType || "SwitchStatement" === nodeType || "WhileStatement" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassExpression" === nodeType || "ClassDeclaration" === nodeType || "ForOfStatement" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType || "StaticBlock" === nodeType || "TSModuleBlock" === nodeType || nodeType === "Placeholder" && "BlockStatement" === node.expectedNode) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isBlockParent(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("BlockStatement" === nodeType || "CatchClause" === nodeType || "DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "Program" === nodeType || "ObjectMethod" === nodeType || "SwitchStatement" === nodeType || "WhileStatement" === nodeType || "ArrowFunctionExpression" === nodeType || "ForOfStatement" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType || "StaticBlock" === nodeType || "TSModuleBlock" === nodeType || nodeType === "Placeholder" && "BlockStatement" === node.expectedNode) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isBlock(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("BlockStatement" === nodeType || "Program" === nodeType || "TSModuleBlock" === nodeType || nodeType === "Placeholder" && "BlockStatement" === node.expectedNode) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("BlockStatement" === nodeType || "BreakStatement" === nodeType || "ContinueStatement" === nodeType || "DebuggerStatement" === nodeType || "DoWhileStatement" === nodeType || "EmptyStatement" === nodeType || "ExpressionStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "IfStatement" === nodeType || "LabeledStatement" === nodeType || "ReturnStatement" === nodeType || "SwitchStatement" === nodeType || "ThrowStatement" === nodeType || "TryStatement" === nodeType || "VariableDeclaration" === nodeType || "WhileStatement" === nodeType || "WithStatement" === nodeType || "ClassDeclaration" === nodeType || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ForOfStatement" === nodeType || "ImportDeclaration" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType || "EnumDeclaration" === nodeType || "TSDeclareFunction" === nodeType || "TSInterfaceDeclaration" === nodeType || "TSTypeAliasDeclaration" === nodeType || "TSEnumDeclaration" === nodeType || "TSModuleDeclaration" === nodeType || "TSImportEqualsDeclaration" === nodeType || "TSExportAssignment" === nodeType || "TSNamespaceExportDeclaration" === nodeType || nodeType === "Placeholder" && ("Statement" === node.expectedNode || "Declaration" === node.expectedNode || "BlockStatement" === node.expectedNode)) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTerminatorless(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("BreakStatement" === nodeType || "ContinueStatement" === nodeType || "ReturnStatement" === nodeType || "ThrowStatement" === nodeType || "YieldExpression" === nodeType || "AwaitExpression" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isCompletionStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("BreakStatement" === nodeType || "ContinueStatement" === nodeType || "ReturnStatement" === nodeType || "ThrowStatement" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isConditional(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("ConditionalExpression" === nodeType || "IfStatement" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isLoop(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "WhileStatement" === nodeType || "ForOfStatement" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isWhile(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("DoWhileStatement" === nodeType || "WhileStatement" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isExpressionWrapper(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("ExpressionStatement" === nodeType || "ParenthesizedExpression" === nodeType || "TypeCastExpression" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isFor(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("ForInStatement" === nodeType || "ForStatement" === nodeType || "ForOfStatement" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isForXStatement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("ForInStatement" === nodeType || "ForOfStatement" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isFunction(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "ObjectMethod" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isFunctionParent(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "ObjectMethod" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType || "StaticBlock" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isPureish(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "ArrowFunctionExpression" === nodeType || "BigIntLiteral" === nodeType || "DecimalLiteral" === nodeType || nodeType === "Placeholder" && "StringLiteral" === node.expectedNode) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("FunctionDeclaration" === nodeType || "VariableDeclaration" === nodeType || "ClassDeclaration" === nodeType || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ImportDeclaration" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType || "EnumDeclaration" === nodeType || "TSDeclareFunction" === nodeType || "TSInterfaceDeclaration" === nodeType || "TSTypeAliasDeclaration" === nodeType || "TSEnumDeclaration" === nodeType || "TSModuleDeclaration" === nodeType || nodeType === "Placeholder" && "Declaration" === node.expectedNode) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isPatternLike(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("Identifier" === nodeType || "RestElement" === nodeType || "AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType || "TSAsExpression" === nodeType || "TSTypeAssertion" === nodeType || "TSNonNullExpression" === nodeType || nodeType === "Placeholder" && ("Pattern" === node.expectedNode || "Identifier" === node.expectedNode)) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isLVal(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("Identifier" === nodeType || "MemberExpression" === nodeType || "RestElement" === nodeType || "AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType || "TSParameterProperty" === nodeType || "TSAsExpression" === nodeType || "TSTypeAssertion" === nodeType || "TSNonNullExpression" === nodeType || nodeType === "Placeholder" && ("Pattern" === node.expectedNode || "Identifier" === node.expectedNode)) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSEntityName(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("Identifier" === nodeType || "TSQualifiedName" === nodeType || nodeType === "Placeholder" && "Identifier" === node.expectedNode) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isLiteral(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "TemplateLiteral" === nodeType || "BigIntLiteral" === nodeType || "DecimalLiteral" === nodeType || nodeType === "Placeholder" && "StringLiteral" === node.expectedNode) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isImmutable(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "BigIntLiteral" === nodeType || "JSXAttribute" === nodeType || "JSXClosingElement" === nodeType || "JSXElement" === nodeType || "JSXExpressionContainer" === nodeType || "JSXSpreadChild" === nodeType || "JSXOpeningElement" === nodeType || "JSXText" === nodeType || "JSXFragment" === nodeType || "JSXOpeningFragment" === nodeType || "JSXClosingFragment" === nodeType || "DecimalLiteral" === nodeType || nodeType === "Placeholder" && "StringLiteral" === node.expectedNode) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isUserWhitespacable(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("ObjectMethod" === nodeType || "ObjectProperty" === nodeType || "ObjectTypeInternalSlot" === nodeType || "ObjectTypeCallProperty" === nodeType || "ObjectTypeIndexer" === nodeType || "ObjectTypeProperty" === nodeType || "ObjectTypeSpreadProperty" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isMethod(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("ObjectMethod" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isObjectMember(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("ObjectMethod" === nodeType || "ObjectProperty" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isProperty(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("ObjectProperty" === nodeType || "ClassProperty" === nodeType || "ClassAccessorProperty" === nodeType || "ClassPrivateProperty" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isUnaryLike(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("UnaryExpression" === nodeType || "SpreadElement" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isPattern(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType || nodeType === "Placeholder" && "Pattern" === node.expectedNode) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isClass(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("ClassExpression" === nodeType || "ClassDeclaration" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isModuleDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ImportDeclaration" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isExportDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isModuleSpecifier(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("ExportSpecifier" === nodeType || "ImportDefaultSpecifier" === nodeType || "ImportNamespaceSpecifier" === nodeType || "ImportSpecifier" === nodeType || "ExportNamespaceSpecifier" === nodeType || "ExportDefaultSpecifier" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isAccessor(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("ClassAccessorProperty" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isPrivate(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("ClassPrivateProperty" === nodeType || "ClassPrivateMethod" === nodeType || "PrivateName" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isFlow(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("AnyTypeAnnotation" === nodeType || "ArrayTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "BooleanLiteralTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "ClassImplements" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "DeclaredPredicate" === nodeType || "ExistsTypeAnnotation" === nodeType || "FunctionTypeAnnotation" === nodeType || "FunctionTypeParam" === nodeType || "GenericTypeAnnotation" === nodeType || "InferredPredicate" === nodeType || "InterfaceExtends" === nodeType || "InterfaceDeclaration" === nodeType || "InterfaceTypeAnnotation" === nodeType || "IntersectionTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NullableTypeAnnotation" === nodeType || "NumberLiteralTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "ObjectTypeAnnotation" === nodeType || "ObjectTypeInternalSlot" === nodeType || "ObjectTypeCallProperty" === nodeType || "ObjectTypeIndexer" === nodeType || "ObjectTypeProperty" === nodeType || "ObjectTypeSpreadProperty" === nodeType || "OpaqueType" === nodeType || "QualifiedTypeIdentifier" === nodeType || "StringLiteralTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "SymbolTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "TupleTypeAnnotation" === nodeType || "TypeofTypeAnnotation" === nodeType || "TypeAlias" === nodeType || "TypeAnnotation" === nodeType || "TypeCastExpression" === nodeType || "TypeParameter" === nodeType || "TypeParameterDeclaration" === nodeType || "TypeParameterInstantiation" === nodeType || "UnionTypeAnnotation" === nodeType || "Variance" === nodeType || "VoidTypeAnnotation" === nodeType || "EnumDeclaration" === nodeType || "EnumBooleanBody" === nodeType || "EnumNumberBody" === nodeType || "EnumStringBody" === nodeType || "EnumSymbolBody" === nodeType || "EnumBooleanMember" === nodeType || "EnumNumberMember" === nodeType || "EnumStringMember" === nodeType || "EnumDefaultedMember" === nodeType || "IndexedAccessType" === nodeType || "OptionalIndexedAccessType" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isFlowType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("AnyTypeAnnotation" === nodeType || "ArrayTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "BooleanLiteralTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "ExistsTypeAnnotation" === nodeType || "FunctionTypeAnnotation" === nodeType || "GenericTypeAnnotation" === nodeType || "InterfaceTypeAnnotation" === nodeType || "IntersectionTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NullableTypeAnnotation" === nodeType || "NumberLiteralTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "ObjectTypeAnnotation" === nodeType || "StringLiteralTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "SymbolTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "TupleTypeAnnotation" === nodeType || "TypeofTypeAnnotation" === nodeType || "UnionTypeAnnotation" === nodeType || "VoidTypeAnnotation" === nodeType || "IndexedAccessType" === nodeType || "OptionalIndexedAccessType" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isFlowBaseAnnotation(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("AnyTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "SymbolTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "VoidTypeAnnotation" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isFlowDeclaration(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isFlowPredicate(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("DeclaredPredicate" === nodeType || "InferredPredicate" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isEnumBody(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("EnumBooleanBody" === nodeType || "EnumNumberBody" === nodeType || "EnumStringBody" === nodeType || "EnumSymbolBody" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isEnumMember(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("EnumBooleanMember" === nodeType || "EnumNumberMember" === nodeType || "EnumStringMember" === nodeType || "EnumDefaultedMember" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isJSX(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("JSXAttribute" === nodeType || "JSXClosingElement" === nodeType || "JSXElement" === nodeType || "JSXEmptyExpression" === nodeType || "JSXExpressionContainer" === nodeType || "JSXSpreadChild" === nodeType || "JSXIdentifier" === nodeType || "JSXMemberExpression" === nodeType || "JSXNamespacedName" === nodeType || "JSXOpeningElement" === nodeType || "JSXSpreadAttribute" === nodeType || "JSXText" === nodeType || "JSXFragment" === nodeType || "JSXOpeningFragment" === nodeType || "JSXClosingFragment" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isMiscellaneous(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("Noop" === nodeType || "Placeholder" === nodeType || "V8IntrinsicIdentifier" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTypeScript(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("TSParameterProperty" === nodeType || "TSDeclareFunction" === nodeType || "TSDeclareMethod" === nodeType || "TSQualifiedName" === nodeType || "TSCallSignatureDeclaration" === nodeType || "TSConstructSignatureDeclaration" === nodeType || "TSPropertySignature" === nodeType || "TSMethodSignature" === nodeType || "TSIndexSignature" === nodeType || "TSAnyKeyword" === nodeType || "TSBooleanKeyword" === nodeType || "TSBigIntKeyword" === nodeType || "TSIntrinsicKeyword" === nodeType || "TSNeverKeyword" === nodeType || "TSNullKeyword" === nodeType || "TSNumberKeyword" === nodeType || "TSObjectKeyword" === nodeType || "TSStringKeyword" === nodeType || "TSSymbolKeyword" === nodeType || "TSUndefinedKeyword" === nodeType || "TSUnknownKeyword" === nodeType || "TSVoidKeyword" === nodeType || "TSThisType" === nodeType || "TSFunctionType" === nodeType || "TSConstructorType" === nodeType || "TSTypeReference" === nodeType || "TSTypePredicate" === nodeType || "TSTypeQuery" === nodeType || "TSTypeLiteral" === nodeType || "TSArrayType" === nodeType || "TSTupleType" === nodeType || "TSOptionalType" === nodeType || "TSRestType" === nodeType || "TSNamedTupleMember" === nodeType || "TSUnionType" === nodeType || "TSIntersectionType" === nodeType || "TSConditionalType" === nodeType || "TSInferType" === nodeType || "TSParenthesizedType" === nodeType || "TSTypeOperator" === nodeType || "TSIndexedAccessType" === nodeType || "TSMappedType" === nodeType || "TSLiteralType" === nodeType || "TSExpressionWithTypeArguments" === nodeType || "TSInterfaceDeclaration" === nodeType || "TSInterfaceBody" === nodeType || "TSTypeAliasDeclaration" === nodeType || "TSInstantiationExpression" === nodeType || "TSAsExpression" === nodeType || "TSTypeAssertion" === nodeType || "TSEnumDeclaration" === nodeType || "TSEnumMember" === nodeType || "TSModuleDeclaration" === nodeType || "TSModuleBlock" === nodeType || "TSImportType" === nodeType || "TSImportEqualsDeclaration" === nodeType || "TSExternalModuleReference" === nodeType || "TSNonNullExpression" === nodeType || "TSExportAssignment" === nodeType || "TSNamespaceExportDeclaration" === nodeType || "TSTypeAnnotation" === nodeType || "TSTypeParameterInstantiation" === nodeType || "TSTypeParameterDeclaration" === nodeType || "TSTypeParameter" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSTypeElement(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("TSCallSignatureDeclaration" === nodeType || "TSConstructSignatureDeclaration" === nodeType || "TSPropertySignature" === nodeType || "TSMethodSignature" === nodeType || "TSIndexSignature" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("TSAnyKeyword" === nodeType || "TSBooleanKeyword" === nodeType || "TSBigIntKeyword" === nodeType || "TSIntrinsicKeyword" === nodeType || "TSNeverKeyword" === nodeType || "TSNullKeyword" === nodeType || "TSNumberKeyword" === nodeType || "TSObjectKeyword" === nodeType || "TSStringKeyword" === nodeType || "TSSymbolKeyword" === nodeType || "TSUndefinedKeyword" === nodeType || "TSUnknownKeyword" === nodeType || "TSVoidKeyword" === nodeType || "TSThisType" === nodeType || "TSFunctionType" === nodeType || "TSConstructorType" === nodeType || "TSTypeReference" === nodeType || "TSTypePredicate" === nodeType || "TSTypeQuery" === nodeType || "TSTypeLiteral" === nodeType || "TSArrayType" === nodeType || "TSTupleType" === nodeType || "TSOptionalType" === nodeType || "TSRestType" === nodeType || "TSUnionType" === nodeType || "TSIntersectionType" === nodeType || "TSConditionalType" === nodeType || "TSInferType" === nodeType || "TSParenthesizedType" === nodeType || "TSTypeOperator" === nodeType || "TSIndexedAccessType" === nodeType || "TSMappedType" === nodeType || "TSLiteralType" === nodeType || "TSExpressionWithTypeArguments" === nodeType || "TSImportType" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isTSBaseType(node, opts) {
      if (!node)
        return false;
      const nodeType = node.type;
      if ("TSAnyKeyword" === nodeType || "TSBooleanKeyword" === nodeType || "TSBigIntKeyword" === nodeType || "TSIntrinsicKeyword" === nodeType || "TSNeverKeyword" === nodeType || "TSNullKeyword" === nodeType || "TSNumberKeyword" === nodeType || "TSObjectKeyword" === nodeType || "TSStringKeyword" === nodeType || "TSSymbolKeyword" === nodeType || "TSUndefinedKeyword" === nodeType || "TSUnknownKeyword" === nodeType || "TSVoidKeyword" === nodeType || "TSThisType" === nodeType || "TSLiteralType" === nodeType) {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isNumberLiteral(node, opts) {
      console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "NumberLiteral") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isRegexLiteral(node, opts) {
      console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "RegexLiteral") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isRestProperty(node, opts) {
      console.trace("The node type RestProperty has been renamed to RestElement");
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "RestProperty") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
    function isSpreadProperty(node, opts) {
      console.trace("The node type SpreadProperty has been renamed to SpreadElement");
      if (!node)
        return false;
      const nodeType = node.type;
      if (nodeType === "SpreadProperty") {
        if (typeof opts === "undefined") {
          return true;
        } else {
          return (0, _shallowEqual.default)(node, opts);
        }
      }
      return false;
    }
  }
});

// node_modules/@babel/types/lib/validators/matchesPattern.js
var require_matchesPattern = __commonJS({
  "node_modules/@babel/types/lib/validators/matchesPattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = matchesPattern;
    var _generated = require_generated();
    function matchesPattern(member, match, allowPartial) {
      if (!(0, _generated.isMemberExpression)(member))
        return false;
      const parts = Array.isArray(match) ? match : match.split(".");
      const nodes = [];
      let node;
      for (node = member; (0, _generated.isMemberExpression)(node); node = node.object) {
        nodes.push(node.property);
      }
      nodes.push(node);
      if (nodes.length < parts.length)
        return false;
      if (!allowPartial && nodes.length > parts.length)
        return false;
      for (let i = 0, j = nodes.length - 1; i < parts.length; i++, j--) {
        const node2 = nodes[j];
        let value;
        if ((0, _generated.isIdentifier)(node2)) {
          value = node2.name;
        } else if ((0, _generated.isStringLiteral)(node2)) {
          value = node2.value;
        } else if ((0, _generated.isThisExpression)(node2)) {
          value = "this";
        } else {
          return false;
        }
        if (parts[i] !== value)
          return false;
      }
      return true;
    }
  }
});

// node_modules/@babel/types/lib/validators/buildMatchMemberExpression.js
var require_buildMatchMemberExpression = __commonJS({
  "node_modules/@babel/types/lib/validators/buildMatchMemberExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = buildMatchMemberExpression;
    var _matchesPattern = require_matchesPattern();
    function buildMatchMemberExpression(match, allowPartial) {
      const parts = match.split(".");
      return (member) => (0, _matchesPattern.default)(member, parts, allowPartial);
    }
  }
});

// node_modules/@babel/types/lib/validators/react/isReactComponent.js
var require_isReactComponent = __commonJS({
  "node_modules/@babel/types/lib/validators/react/isReactComponent.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _buildMatchMemberExpression = require_buildMatchMemberExpression();
    var isReactComponent = (0, _buildMatchMemberExpression.default)("React.Component");
    var _default = isReactComponent;
    exports.default = _default;
  }
});

// node_modules/@babel/types/lib/validators/react/isCompatTag.js
var require_isCompatTag = __commonJS({
  "node_modules/@babel/types/lib/validators/react/isCompatTag.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isCompatTag;
    function isCompatTag(tagName) {
      return !!tagName && /^[a-z]/.test(tagName);
    }
  }
});

// node_modules/to-fast-properties/index.js
var require_to_fast_properties = __commonJS({
  "node_modules/to-fast-properties/index.js"(exports, module2) {
    "use strict";
    var fastProto = null;
    function FastObject(o) {
      if (fastProto !== null && typeof fastProto.property) {
        const result = fastProto;
        fastProto = FastObject.prototype = null;
        return result;
      }
      fastProto = FastObject.prototype = o == null ? /* @__PURE__ */ Object.create(null) : o;
      return new FastObject();
    }
    FastObject();
    module2.exports = function toFastproperties(o) {
      return FastObject(o);
    };
  }
});

// node_modules/@babel/types/lib/validators/isType.js
var require_isType = __commonJS({
  "node_modules/@babel/types/lib/validators/isType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isType;
    var _definitions = require_definitions();
    function isType(nodeType, targetType) {
      if (nodeType === targetType)
        return true;
      if (_definitions.ALIAS_KEYS[targetType])
        return false;
      const aliases = _definitions.FLIPPED_ALIAS_KEYS[targetType];
      if (aliases) {
        if (aliases[0] === nodeType)
          return true;
        for (const alias of aliases) {
          if (nodeType === alias)
            return true;
        }
      }
      return false;
    }
  }
});

// node_modules/@babel/types/lib/validators/isPlaceholderType.js
var require_isPlaceholderType = __commonJS({
  "node_modules/@babel/types/lib/validators/isPlaceholderType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isPlaceholderType;
    var _definitions = require_definitions();
    function isPlaceholderType(placeholderType, targetType) {
      if (placeholderType === targetType)
        return true;
      const aliases = _definitions.PLACEHOLDERS_ALIAS[placeholderType];
      if (aliases) {
        for (const alias of aliases) {
          if (targetType === alias)
            return true;
        }
      }
      return false;
    }
  }
});

// node_modules/@babel/types/lib/validators/is.js
var require_is = __commonJS({
  "node_modules/@babel/types/lib/validators/is.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = is;
    var _shallowEqual = require_shallowEqual();
    var _isType = require_isType();
    var _isPlaceholderType = require_isPlaceholderType();
    var _definitions = require_definitions();
    function is(type, node, opts) {
      if (!node)
        return false;
      const matches = (0, _isType.default)(node.type, type);
      if (!matches) {
        if (!opts && node.type === "Placeholder" && type in _definitions.FLIPPED_ALIAS_KEYS) {
          return (0, _isPlaceholderType.default)(node.expectedNode, type);
        }
        return false;
      }
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, _shallowEqual.default)(node, opts);
      }
    }
  }
});

// node_modules/@babel/helper-validator-identifier/lib/identifier.js
var require_identifier = __commonJS({
  "node_modules/@babel/helper-validator-identifier/lib/identifier.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isIdentifierChar = isIdentifierChar;
    exports.isIdentifierName = isIdentifierName;
    exports.isIdentifierStart = isIdentifierStart;
    var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
    var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
    var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
    var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
    nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
    var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938, 6, 4191];
    var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
    function isInAstralSet(code, set) {
      let pos = 65536;
      for (let i = 0, length = set.length; i < length; i += 2) {
        pos += set[i];
        if (pos > code)
          return false;
        pos += set[i + 1];
        if (pos >= code)
          return true;
      }
      return false;
    }
    function isIdentifierStart(code) {
      if (code < 65)
        return code === 36;
      if (code <= 90)
        return true;
      if (code < 97)
        return code === 95;
      if (code <= 122)
        return true;
      if (code <= 65535) {
        return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
      }
      return isInAstralSet(code, astralIdentifierStartCodes);
    }
    function isIdentifierChar(code) {
      if (code < 48)
        return code === 36;
      if (code < 58)
        return true;
      if (code < 65)
        return false;
      if (code <= 90)
        return true;
      if (code < 97)
        return code === 95;
      if (code <= 122)
        return true;
      if (code <= 65535) {
        return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
      }
      return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
    }
    function isIdentifierName(name) {
      let isFirst = true;
      for (let i = 0; i < name.length; i++) {
        let cp = name.charCodeAt(i);
        if ((cp & 64512) === 55296 && i + 1 < name.length) {
          const trail = name.charCodeAt(++i);
          if ((trail & 64512) === 56320) {
            cp = 65536 + ((cp & 1023) << 10) + (trail & 1023);
          }
        }
        if (isFirst) {
          isFirst = false;
          if (!isIdentifierStart(cp)) {
            return false;
          }
        } else if (!isIdentifierChar(cp)) {
          return false;
        }
      }
      return !isFirst;
    }
  }
});

// node_modules/@babel/helper-validator-identifier/lib/keyword.js
var require_keyword = __commonJS({
  "node_modules/@babel/helper-validator-identifier/lib/keyword.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isKeyword = isKeyword;
    exports.isReservedWord = isReservedWord;
    exports.isStrictBindOnlyReservedWord = isStrictBindOnlyReservedWord;
    exports.isStrictBindReservedWord = isStrictBindReservedWord;
    exports.isStrictReservedWord = isStrictReservedWord;
    var reservedWords = {
      keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
      strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
      strictBind: ["eval", "arguments"]
    };
    var keywords = new Set(reservedWords.keyword);
    var reservedWordsStrictSet = new Set(reservedWords.strict);
    var reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
    function isReservedWord(word, inModule) {
      return inModule && word === "await" || word === "enum";
    }
    function isStrictReservedWord(word, inModule) {
      return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
    }
    function isStrictBindOnlyReservedWord(word) {
      return reservedWordsStrictBindSet.has(word);
    }
    function isStrictBindReservedWord(word, inModule) {
      return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
    }
    function isKeyword(word) {
      return keywords.has(word);
    }
  }
});

// node_modules/@babel/helper-validator-identifier/lib/index.js
var require_lib = __commonJS({
  "node_modules/@babel/helper-validator-identifier/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "isIdentifierChar", {
      enumerable: true,
      get: function() {
        return _identifier.isIdentifierChar;
      }
    });
    Object.defineProperty(exports, "isIdentifierName", {
      enumerable: true,
      get: function() {
        return _identifier.isIdentifierName;
      }
    });
    Object.defineProperty(exports, "isIdentifierStart", {
      enumerable: true,
      get: function() {
        return _identifier.isIdentifierStart;
      }
    });
    Object.defineProperty(exports, "isKeyword", {
      enumerable: true,
      get: function() {
        return _keyword.isKeyword;
      }
    });
    Object.defineProperty(exports, "isReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isReservedWord;
      }
    });
    Object.defineProperty(exports, "isStrictBindOnlyReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isStrictBindOnlyReservedWord;
      }
    });
    Object.defineProperty(exports, "isStrictBindReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isStrictBindReservedWord;
      }
    });
    Object.defineProperty(exports, "isStrictReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isStrictReservedWord;
      }
    });
    var _identifier = require_identifier();
    var _keyword = require_keyword();
  }
});

// node_modules/@babel/types/lib/validators/isValidIdentifier.js
var require_isValidIdentifier = __commonJS({
  "node_modules/@babel/types/lib/validators/isValidIdentifier.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isValidIdentifier;
    var _helperValidatorIdentifier = require_lib();
    function isValidIdentifier(name, reserved = true) {
      if (typeof name !== "string")
        return false;
      if (reserved) {
        if ((0, _helperValidatorIdentifier.isKeyword)(name) || (0, _helperValidatorIdentifier.isStrictReservedWord)(name, true)) {
          return false;
        }
      }
      return (0, _helperValidatorIdentifier.isIdentifierName)(name);
    }
  }
});

// node_modules/@babel/helper-string-parser/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/@babel/helper-string-parser/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.readCodePoint = readCodePoint;
    exports.readInt = readInt;
    exports.readStringContents = readStringContents;
    var _isDigit = function isDigit(code) {
      return code >= 48 && code <= 57;
    };
    var forbiddenNumericSeparatorSiblings = {
      decBinOct: /* @__PURE__ */ new Set([46, 66, 69, 79, 95, 98, 101, 111]),
      hex: /* @__PURE__ */ new Set([46, 88, 95, 120])
    };
    var isAllowedNumericSeparatorSibling = {
      bin: (ch) => ch === 48 || ch === 49,
      oct: (ch) => ch >= 48 && ch <= 55,
      dec: (ch) => ch >= 48 && ch <= 57,
      hex: (ch) => ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102
    };
    function readStringContents(type, input, pos, lineStart, curLine, errors) {
      const initialPos = pos;
      const initialLineStart = lineStart;
      const initialCurLine = curLine;
      let out = "";
      let firstInvalidLoc = null;
      let chunkStart = pos;
      const {
        length
      } = input;
      for (; ; ) {
        if (pos >= length) {
          errors.unterminated(initialPos, initialLineStart, initialCurLine);
          out += input.slice(chunkStart, pos);
          break;
        }
        const ch = input.charCodeAt(pos);
        if (isStringEnd(type, ch, input, pos)) {
          out += input.slice(chunkStart, pos);
          break;
        }
        if (ch === 92) {
          out += input.slice(chunkStart, pos);
          const res = readEscapedChar(input, pos, lineStart, curLine, type === "template", errors);
          if (res.ch === null && !firstInvalidLoc) {
            firstInvalidLoc = {
              pos,
              lineStart,
              curLine
            };
          } else {
            out += res.ch;
          }
          ({
            pos,
            lineStart,
            curLine
          } = res);
          chunkStart = pos;
        } else if (ch === 8232 || ch === 8233) {
          ++pos;
          ++curLine;
          lineStart = pos;
        } else if (ch === 10 || ch === 13) {
          if (type === "template") {
            out += input.slice(chunkStart, pos) + "\n";
            ++pos;
            if (ch === 13 && input.charCodeAt(pos) === 10) {
              ++pos;
            }
            ++curLine;
            chunkStart = lineStart = pos;
          } else {
            errors.unterminated(initialPos, initialLineStart, initialCurLine);
          }
        } else {
          ++pos;
        }
      }
      return {
        pos,
        str: out,
        firstInvalidLoc,
        lineStart,
        curLine,
        containsInvalid: !!firstInvalidLoc
      };
    }
    function isStringEnd(type, ch, input, pos) {
      if (type === "template") {
        return ch === 96 || ch === 36 && input.charCodeAt(pos + 1) === 123;
      }
      return ch === (type === "double" ? 34 : 39);
    }
    function readEscapedChar(input, pos, lineStart, curLine, inTemplate, errors) {
      const throwOnInvalid = !inTemplate;
      pos++;
      const res = (ch2) => ({
        pos,
        ch: ch2,
        lineStart,
        curLine
      });
      const ch = input.charCodeAt(pos++);
      switch (ch) {
        case 110:
          return res("\n");
        case 114:
          return res("\r");
        case 120: {
          let code;
          ({
            code,
            pos
          } = readHexChar(input, pos, lineStart, curLine, 2, false, throwOnInvalid, errors));
          return res(code === null ? null : String.fromCharCode(code));
        }
        case 117: {
          let code;
          ({
            code,
            pos
          } = readCodePoint(input, pos, lineStart, curLine, throwOnInvalid, errors));
          return res(code === null ? null : String.fromCodePoint(code));
        }
        case 116:
          return res("	");
        case 98:
          return res("\b");
        case 118:
          return res("\v");
        case 102:
          return res("\f");
        case 13:
          if (input.charCodeAt(pos) === 10) {
            ++pos;
          }
        case 10:
          lineStart = pos;
          ++curLine;
        case 8232:
        case 8233:
          return res("");
        case 56:
        case 57:
          if (inTemplate) {
            return res(null);
          } else {
            errors.strictNumericEscape(pos - 1, lineStart, curLine);
          }
        default:
          if (ch >= 48 && ch <= 55) {
            const startPos = pos - 1;
            const match = input.slice(startPos, pos + 2).match(/^[0-7]+/);
            let octalStr = match[0];
            let octal = parseInt(octalStr, 8);
            if (octal > 255) {
              octalStr = octalStr.slice(0, -1);
              octal = parseInt(octalStr, 8);
            }
            pos += octalStr.length - 1;
            const next = input.charCodeAt(pos);
            if (octalStr !== "0" || next === 56 || next === 57) {
              if (inTemplate) {
                return res(null);
              } else {
                errors.strictNumericEscape(startPos, lineStart, curLine);
              }
            }
            return res(String.fromCharCode(octal));
          }
          return res(String.fromCharCode(ch));
      }
    }
    function readHexChar(input, pos, lineStart, curLine, len, forceLen, throwOnInvalid, errors) {
      const initialPos = pos;
      let n;
      ({
        n,
        pos
      } = readInt(input, pos, lineStart, curLine, 16, len, forceLen, false, errors, !throwOnInvalid));
      if (n === null) {
        if (throwOnInvalid) {
          errors.invalidEscapeSequence(initialPos, lineStart, curLine);
        } else {
          pos = initialPos - 1;
        }
      }
      return {
        code: n,
        pos
      };
    }
    function readInt(input, pos, lineStart, curLine, radix, len, forceLen, allowNumSeparator, errors, bailOnError) {
      const start = pos;
      const forbiddenSiblings = radix === 16 ? forbiddenNumericSeparatorSiblings.hex : forbiddenNumericSeparatorSiblings.decBinOct;
      const isAllowedSibling = radix === 16 ? isAllowedNumericSeparatorSibling.hex : radix === 10 ? isAllowedNumericSeparatorSibling.dec : radix === 8 ? isAllowedNumericSeparatorSibling.oct : isAllowedNumericSeparatorSibling.bin;
      let invalid = false;
      let total = 0;
      for (let i = 0, e = len == null ? Infinity : len; i < e; ++i) {
        const code = input.charCodeAt(pos);
        let val;
        if (code === 95 && allowNumSeparator !== "bail") {
          const prev = input.charCodeAt(pos - 1);
          const next = input.charCodeAt(pos + 1);
          if (!allowNumSeparator) {
            if (bailOnError)
              return {
                n: null,
                pos
              };
            errors.numericSeparatorInEscapeSequence(pos, lineStart, curLine);
          } else if (Number.isNaN(next) || !isAllowedSibling(next) || forbiddenSiblings.has(prev) || forbiddenSiblings.has(next)) {
            if (bailOnError)
              return {
                n: null,
                pos
              };
            errors.unexpectedNumericSeparator(pos, lineStart, curLine);
          }
          ++pos;
          continue;
        }
        if (code >= 97) {
          val = code - 97 + 10;
        } else if (code >= 65) {
          val = code - 65 + 10;
        } else if (_isDigit(code)) {
          val = code - 48;
        } else {
          val = Infinity;
        }
        if (val >= radix) {
          if (val <= 9 && bailOnError) {
            return {
              n: null,
              pos
            };
          } else if (val <= 9 && errors.invalidDigit(pos, lineStart, curLine, radix)) {
            val = 0;
          } else if (forceLen) {
            val = 0;
            invalid = true;
          } else {
            break;
          }
        }
        ++pos;
        total = total * radix + val;
      }
      if (pos === start || len != null && pos - start !== len || invalid) {
        return {
          n: null,
          pos
        };
      }
      return {
        n: total,
        pos
      };
    }
    function readCodePoint(input, pos, lineStart, curLine, throwOnInvalid, errors) {
      const ch = input.charCodeAt(pos);
      let code;
      if (ch === 123) {
        ++pos;
        ({
          code,
          pos
        } = readHexChar(input, pos, lineStart, curLine, input.indexOf("}", pos) - pos, true, throwOnInvalid, errors));
        ++pos;
        if (code !== null && code > 1114111) {
          if (throwOnInvalid) {
            errors.invalidCodePoint(pos, lineStart, curLine);
          } else {
            return {
              code: null,
              pos
            };
          }
        }
      } else {
        ({
          code,
          pos
        } = readHexChar(input, pos, lineStart, curLine, 4, false, throwOnInvalid, errors));
      }
      return {
        code,
        pos
      };
    }
  }
});

// node_modules/@babel/types/lib/constants/index.js
var require_constants = __commonJS({
  "node_modules/@babel/types/lib/constants/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UPDATE_OPERATORS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.STATEMENT_OR_BLOCK_KEYS = exports.NUMBER_UNARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.NOT_LOCAL_BINDING = exports.LOGICAL_OPERATORS = exports.INHERIT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.EQUALITY_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.COMMENT_KEYS = exports.BOOLEAN_UNARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.BLOCK_SCOPED_SYMBOL = exports.BINARY_OPERATORS = exports.ASSIGNMENT_OPERATORS = void 0;
    var STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
    exports.STATEMENT_OR_BLOCK_KEYS = STATEMENT_OR_BLOCK_KEYS;
    var FLATTENABLE_KEYS = ["body", "expressions"];
    exports.FLATTENABLE_KEYS = FLATTENABLE_KEYS;
    var FOR_INIT_KEYS = ["left", "init"];
    exports.FOR_INIT_KEYS = FOR_INIT_KEYS;
    var COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
    exports.COMMENT_KEYS = COMMENT_KEYS;
    var LOGICAL_OPERATORS = ["||", "&&", "??"];
    exports.LOGICAL_OPERATORS = LOGICAL_OPERATORS;
    var UPDATE_OPERATORS = ["++", "--"];
    exports.UPDATE_OPERATORS = UPDATE_OPERATORS;
    var BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
    exports.BOOLEAN_NUMBER_BINARY_OPERATORS = BOOLEAN_NUMBER_BINARY_OPERATORS;
    var EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
    exports.EQUALITY_BINARY_OPERATORS = EQUALITY_BINARY_OPERATORS;
    var COMPARISON_BINARY_OPERATORS = [...EQUALITY_BINARY_OPERATORS, "in", "instanceof"];
    exports.COMPARISON_BINARY_OPERATORS = COMPARISON_BINARY_OPERATORS;
    var BOOLEAN_BINARY_OPERATORS = [...COMPARISON_BINARY_OPERATORS, ...BOOLEAN_NUMBER_BINARY_OPERATORS];
    exports.BOOLEAN_BINARY_OPERATORS = BOOLEAN_BINARY_OPERATORS;
    var NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
    exports.NUMBER_BINARY_OPERATORS = NUMBER_BINARY_OPERATORS;
    var BINARY_OPERATORS = ["+", ...NUMBER_BINARY_OPERATORS, ...BOOLEAN_BINARY_OPERATORS, "|>"];
    exports.BINARY_OPERATORS = BINARY_OPERATORS;
    var ASSIGNMENT_OPERATORS = ["=", "+=", ...NUMBER_BINARY_OPERATORS.map((op) => op + "="), ...LOGICAL_OPERATORS.map((op) => op + "=")];
    exports.ASSIGNMENT_OPERATORS = ASSIGNMENT_OPERATORS;
    var BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
    exports.BOOLEAN_UNARY_OPERATORS = BOOLEAN_UNARY_OPERATORS;
    var NUMBER_UNARY_OPERATORS = ["+", "-", "~"];
    exports.NUMBER_UNARY_OPERATORS = NUMBER_UNARY_OPERATORS;
    var STRING_UNARY_OPERATORS = ["typeof"];
    exports.STRING_UNARY_OPERATORS = STRING_UNARY_OPERATORS;
    var UNARY_OPERATORS = ["void", "throw", ...BOOLEAN_UNARY_OPERATORS, ...NUMBER_UNARY_OPERATORS, ...STRING_UNARY_OPERATORS];
    exports.UNARY_OPERATORS = UNARY_OPERATORS;
    var INHERIT_KEYS = {
      optional: ["typeAnnotation", "typeParameters", "returnType"],
      force: ["start", "loc", "end"]
    };
    exports.INHERIT_KEYS = INHERIT_KEYS;
    var BLOCK_SCOPED_SYMBOL = Symbol.for("var used to be block scoped");
    exports.BLOCK_SCOPED_SYMBOL = BLOCK_SCOPED_SYMBOL;
    var NOT_LOCAL_BINDING = Symbol.for("should not be considered a local binding");
    exports.NOT_LOCAL_BINDING = NOT_LOCAL_BINDING;
  }
});

// node_modules/@babel/types/lib/definitions/utils.js
var require_utils = __commonJS({
  "node_modules/@babel/types/lib/definitions/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.VISITOR_KEYS = exports.NODE_PARENT_VALIDATIONS = exports.NODE_FIELDS = exports.FLIPPED_ALIAS_KEYS = exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.ALIAS_KEYS = void 0;
    exports.arrayOf = arrayOf;
    exports.arrayOfType = arrayOfType;
    exports.assertEach = assertEach;
    exports.assertNodeOrValueType = assertNodeOrValueType;
    exports.assertNodeType = assertNodeType;
    exports.assertOneOf = assertOneOf;
    exports.assertOptionalChainStart = assertOptionalChainStart;
    exports.assertShape = assertShape;
    exports.assertValueType = assertValueType;
    exports.chain = chain;
    exports.default = defineType;
    exports.defineAliasedType = defineAliasedType;
    exports.typeIs = typeIs;
    exports.validate = validate;
    exports.validateArrayOfType = validateArrayOfType;
    exports.validateOptional = validateOptional;
    exports.validateOptionalType = validateOptionalType;
    exports.validateType = validateType;
    var _is = require_is();
    var _validate = require_validate();
    var VISITOR_KEYS = {};
    exports.VISITOR_KEYS = VISITOR_KEYS;
    var ALIAS_KEYS = {};
    exports.ALIAS_KEYS = ALIAS_KEYS;
    var FLIPPED_ALIAS_KEYS = {};
    exports.FLIPPED_ALIAS_KEYS = FLIPPED_ALIAS_KEYS;
    var NODE_FIELDS = {};
    exports.NODE_FIELDS = NODE_FIELDS;
    var BUILDER_KEYS = {};
    exports.BUILDER_KEYS = BUILDER_KEYS;
    var DEPRECATED_KEYS = {};
    exports.DEPRECATED_KEYS = DEPRECATED_KEYS;
    var NODE_PARENT_VALIDATIONS = {};
    exports.NODE_PARENT_VALIDATIONS = NODE_PARENT_VALIDATIONS;
    function getType(val) {
      if (Array.isArray(val)) {
        return "array";
      } else if (val === null) {
        return "null";
      } else {
        return typeof val;
      }
    }
    function validate(validate2) {
      return {
        validate: validate2
      };
    }
    function typeIs(typeName) {
      return typeof typeName === "string" ? assertNodeType(typeName) : assertNodeType(...typeName);
    }
    function validateType(typeName) {
      return validate(typeIs(typeName));
    }
    function validateOptional(validate2) {
      return {
        validate: validate2,
        optional: true
      };
    }
    function validateOptionalType(typeName) {
      return {
        validate: typeIs(typeName),
        optional: true
      };
    }
    function arrayOf(elementType) {
      return chain(assertValueType("array"), assertEach(elementType));
    }
    function arrayOfType(typeName) {
      return arrayOf(typeIs(typeName));
    }
    function validateArrayOfType(typeName) {
      return validate(arrayOfType(typeName));
    }
    function assertEach(callback) {
      function validator(node, key, val) {
        if (!Array.isArray(val))
          return;
        for (let i = 0; i < val.length; i++) {
          const subkey = `${key}[${i}]`;
          const v = val[i];
          callback(node, subkey, v);
          if (process.env.BABEL_TYPES_8_BREAKING)
            (0, _validate.validateChild)(node, subkey, v);
        }
      }
      validator.each = callback;
      return validator;
    }
    function assertOneOf(...values) {
      function validate2(node, key, val) {
        if (values.indexOf(val) < 0) {
          throw new TypeError(`Property ${key} expected value to be one of ${JSON.stringify(values)} but got ${JSON.stringify(val)}`);
        }
      }
      validate2.oneOf = values;
      return validate2;
    }
    function assertNodeType(...types) {
      function validate2(node, key, val) {
        for (const type of types) {
          if ((0, _is.default)(type, val)) {
            (0, _validate.validateChild)(node, key, val);
            return;
          }
        }
        throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(val == null ? void 0 : val.type)}`);
      }
      validate2.oneOfNodeTypes = types;
      return validate2;
    }
    function assertNodeOrValueType(...types) {
      function validate2(node, key, val) {
        for (const type of types) {
          if (getType(val) === type || (0, _is.default)(type, val)) {
            (0, _validate.validateChild)(node, key, val);
            return;
          }
        }
        throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(val == null ? void 0 : val.type)}`);
      }
      validate2.oneOfNodeOrValueTypes = types;
      return validate2;
    }
    function assertValueType(type) {
      function validate2(node, key, val) {
        const valid = getType(val) === type;
        if (!valid) {
          throw new TypeError(`Property ${key} expected type of ${type} but got ${getType(val)}`);
        }
      }
      validate2.type = type;
      return validate2;
    }
    function assertShape(shape) {
      function validate2(node, key, val) {
        const errors = [];
        for (const property of Object.keys(shape)) {
          try {
            (0, _validate.validateField)(node, property, val[property], shape[property]);
          } catch (error) {
            if (error instanceof TypeError) {
              errors.push(error.message);
              continue;
            }
            throw error;
          }
        }
        if (errors.length) {
          throw new TypeError(`Property ${key} of ${node.type} expected to have the following:
${errors.join("\n")}`);
        }
      }
      validate2.shapeOf = shape;
      return validate2;
    }
    function assertOptionalChainStart() {
      function validate2(node) {
        var _current;
        let current = node;
        while (node) {
          const {
            type
          } = current;
          if (type === "OptionalCallExpression") {
            if (current.optional)
              return;
            current = current.callee;
            continue;
          }
          if (type === "OptionalMemberExpression") {
            if (current.optional)
              return;
            current = current.object;
            continue;
          }
          break;
        }
        throw new TypeError(`Non-optional ${node.type} must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from ${(_current = current) == null ? void 0 : _current.type}`);
      }
      return validate2;
    }
    function chain(...fns) {
      function validate2(...args) {
        for (const fn of fns) {
          fn(...args);
        }
      }
      validate2.chainOf = fns;
      if (fns.length >= 2 && "type" in fns[0] && fns[0].type === "array" && !("each" in fns[1])) {
        throw new Error(`An assertValueType("array") validator can only be followed by an assertEach(...) validator.`);
      }
      return validate2;
    }
    var validTypeOpts = ["aliases", "builder", "deprecatedAlias", "fields", "inherits", "visitor", "validate"];
    var validFieldKeys = ["default", "optional", "validate"];
    function defineAliasedType(...aliases) {
      return (type, opts = {}) => {
        let defined = opts.aliases;
        if (!defined) {
          var _store$opts$inherits$, _defined;
          if (opts.inherits)
            defined = (_store$opts$inherits$ = store[opts.inherits].aliases) == null ? void 0 : _store$opts$inherits$.slice();
          (_defined = defined) != null ? _defined : defined = [];
          opts.aliases = defined;
        }
        const additional = aliases.filter((a) => !defined.includes(a));
        defined.unshift(...additional);
        return defineType(type, opts);
      };
    }
    function defineType(type, opts = {}) {
      const inherits = opts.inherits && store[opts.inherits] || {};
      let fields = opts.fields;
      if (!fields) {
        fields = {};
        if (inherits.fields) {
          const keys = Object.getOwnPropertyNames(inherits.fields);
          for (const key of keys) {
            const field = inherits.fields[key];
            const def = field.default;
            if (Array.isArray(def) ? def.length > 0 : def && typeof def === "object") {
              throw new Error("field defaults can only be primitives or empty arrays currently");
            }
            fields[key] = {
              default: Array.isArray(def) ? [] : def,
              optional: field.optional,
              validate: field.validate
            };
          }
        }
      }
      const visitor = opts.visitor || inherits.visitor || [];
      const aliases = opts.aliases || inherits.aliases || [];
      const builder = opts.builder || inherits.builder || opts.visitor || [];
      for (const k of Object.keys(opts)) {
        if (validTypeOpts.indexOf(k) === -1) {
          throw new Error(`Unknown type option "${k}" on ${type}`);
        }
      }
      if (opts.deprecatedAlias) {
        DEPRECATED_KEYS[opts.deprecatedAlias] = type;
      }
      for (const key of visitor.concat(builder)) {
        fields[key] = fields[key] || {};
      }
      for (const key of Object.keys(fields)) {
        const field = fields[key];
        if (field.default !== void 0 && builder.indexOf(key) === -1) {
          field.optional = true;
        }
        if (field.default === void 0) {
          field.default = null;
        } else if (!field.validate && field.default != null) {
          field.validate = assertValueType(getType(field.default));
        }
        for (const k of Object.keys(field)) {
          if (validFieldKeys.indexOf(k) === -1) {
            throw new Error(`Unknown field key "${k}" on ${type}.${key}`);
          }
        }
      }
      VISITOR_KEYS[type] = opts.visitor = visitor;
      BUILDER_KEYS[type] = opts.builder = builder;
      NODE_FIELDS[type] = opts.fields = fields;
      ALIAS_KEYS[type] = opts.aliases = aliases;
      aliases.forEach((alias) => {
        FLIPPED_ALIAS_KEYS[alias] = FLIPPED_ALIAS_KEYS[alias] || [];
        FLIPPED_ALIAS_KEYS[alias].push(type);
      });
      if (opts.validate) {
        NODE_PARENT_VALIDATIONS[type] = opts.validate;
      }
      store[type] = opts;
    }
    var store = {};
  }
});

// node_modules/@babel/types/lib/definitions/core.js
var require_core = __commonJS({
  "node_modules/@babel/types/lib/definitions/core.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.patternLikeCommon = exports.functionTypeAnnotationCommon = exports.functionDeclarationCommon = exports.functionCommon = exports.classMethodOrPropertyCommon = exports.classMethodOrDeclareMethodCommon = void 0;
    var _is = require_is();
    var _isValidIdentifier = require_isValidIdentifier();
    var _helperValidatorIdentifier = require_lib();
    var _helperStringParser = require_lib2();
    var _constants = require_constants();
    var _utils = require_utils();
    var defineType = (0, _utils.defineAliasedType)("Standardized");
    defineType("ArrayExpression", {
      fields: {
        elements: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
          default: !process.env.BABEL_TYPES_8_BREAKING ? [] : void 0
        }
      },
      visitor: ["elements"],
      aliases: ["Expression"]
    });
    defineType("AssignmentExpression", {
      fields: {
        operator: {
          validate: function() {
            if (!process.env.BABEL_TYPES_8_BREAKING) {
              return (0, _utils.assertValueType)("string");
            }
            const identifier = (0, _utils.assertOneOf)(..._constants.ASSIGNMENT_OPERATORS);
            const pattern = (0, _utils.assertOneOf)("=");
            return function(node, key, val) {
              const validator = (0, _is.default)("Pattern", node.left) ? pattern : identifier;
              validator(node, key, val);
            };
          }()
        },
        left: {
          validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("LVal") : (0, _utils.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSTypeAssertion", "TSNonNullExpression")
        },
        right: {
          validate: (0, _utils.assertNodeType)("Expression")
        }
      },
      builder: ["operator", "left", "right"],
      visitor: ["left", "right"],
      aliases: ["Expression"]
    });
    defineType("BinaryExpression", {
      builder: ["operator", "left", "right"],
      fields: {
        operator: {
          validate: (0, _utils.assertOneOf)(..._constants.BINARY_OPERATORS)
        },
        left: {
          validate: function() {
            const expression = (0, _utils.assertNodeType)("Expression");
            const inOp = (0, _utils.assertNodeType)("Expression", "PrivateName");
            const validator = Object.assign(function(node, key, val) {
              const validator2 = node.operator === "in" ? inOp : expression;
              validator2(node, key, val);
            }, {
              oneOfNodeTypes: ["Expression", "PrivateName"]
            });
            return validator;
          }()
        },
        right: {
          validate: (0, _utils.assertNodeType)("Expression")
        }
      },
      visitor: ["left", "right"],
      aliases: ["Binary", "Expression"]
    });
    defineType("InterpreterDirective", {
      builder: ["value"],
      fields: {
        value: {
          validate: (0, _utils.assertValueType)("string")
        }
      }
    });
    defineType("Directive", {
      visitor: ["value"],
      fields: {
        value: {
          validate: (0, _utils.assertNodeType)("DirectiveLiteral")
        }
      }
    });
    defineType("DirectiveLiteral", {
      builder: ["value"],
      fields: {
        value: {
          validate: (0, _utils.assertValueType)("string")
        }
      }
    });
    defineType("BlockStatement", {
      builder: ["body", "directives"],
      visitor: ["directives", "body"],
      fields: {
        directives: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Directive"))),
          default: []
        },
        body: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
        }
      },
      aliases: ["Scopable", "BlockParent", "Block", "Statement"]
    });
    defineType("BreakStatement", {
      visitor: ["label"],
      fields: {
        label: {
          validate: (0, _utils.assertNodeType)("Identifier"),
          optional: true
        }
      },
      aliases: ["Statement", "Terminatorless", "CompletionStatement"]
    });
    defineType("CallExpression", {
      visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
      builder: ["callee", "arguments"],
      aliases: ["Expression"],
      fields: Object.assign({
        callee: {
          validate: (0, _utils.assertNodeType)("Expression", "Super", "V8IntrinsicIdentifier")
        },
        arguments: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
        }
      }, !process.env.BABEL_TYPES_8_BREAKING ? {
        optional: {
          validate: (0, _utils.assertOneOf)(true, false),
          optional: true
        }
      } : {}, {
        typeArguments: {
          validate: (0, _utils.assertNodeType)("TypeParameterInstantiation"),
          optional: true
        },
        typeParameters: {
          validate: (0, _utils.assertNodeType)("TSTypeParameterInstantiation"),
          optional: true
        }
      })
    });
    defineType("CatchClause", {
      visitor: ["param", "body"],
      fields: {
        param: {
          validate: (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern"),
          optional: true
        },
        body: {
          validate: (0, _utils.assertNodeType)("BlockStatement")
        }
      },
      aliases: ["Scopable", "BlockParent"]
    });
    defineType("ConditionalExpression", {
      visitor: ["test", "consequent", "alternate"],
      fields: {
        test: {
          validate: (0, _utils.assertNodeType)("Expression")
        },
        consequent: {
          validate: (0, _utils.assertNodeType)("Expression")
        },
        alternate: {
          validate: (0, _utils.assertNodeType)("Expression")
        }
      },
      aliases: ["Expression", "Conditional"]
    });
    defineType("ContinueStatement", {
      visitor: ["label"],
      fields: {
        label: {
          validate: (0, _utils.assertNodeType)("Identifier"),
          optional: true
        }
      },
      aliases: ["Statement", "Terminatorless", "CompletionStatement"]
    });
    defineType("DebuggerStatement", {
      aliases: ["Statement"]
    });
    defineType("DoWhileStatement", {
      visitor: ["test", "body"],
      fields: {
        test: {
          validate: (0, _utils.assertNodeType)("Expression")
        },
        body: {
          validate: (0, _utils.assertNodeType)("Statement")
        }
      },
      aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
    });
    defineType("EmptyStatement", {
      aliases: ["Statement"]
    });
    defineType("ExpressionStatement", {
      visitor: ["expression"],
      fields: {
        expression: {
          validate: (0, _utils.assertNodeType)("Expression")
        }
      },
      aliases: ["Statement", "ExpressionWrapper"]
    });
    defineType("File", {
      builder: ["program", "comments", "tokens"],
      visitor: ["program"],
      fields: {
        program: {
          validate: (0, _utils.assertNodeType)("Program")
        },
        comments: {
          validate: !process.env.BABEL_TYPES_8_BREAKING ? Object.assign(() => {
          }, {
            each: {
              oneOfNodeTypes: ["CommentBlock", "CommentLine"]
            }
          }) : (0, _utils.assertEach)((0, _utils.assertNodeType)("CommentBlock", "CommentLine")),
          optional: true
        },
        tokens: {
          validate: (0, _utils.assertEach)(Object.assign(() => {
          }, {
            type: "any"
          })),
          optional: true
        }
      }
    });
    defineType("ForInStatement", {
      visitor: ["left", "right", "body"],
      aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
      fields: {
        left: {
          validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("VariableDeclaration", "LVal") : (0, _utils.assertNodeType)("VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSTypeAssertion", "TSNonNullExpression")
        },
        right: {
          validate: (0, _utils.assertNodeType)("Expression")
        },
        body: {
          validate: (0, _utils.assertNodeType)("Statement")
        }
      }
    });
    defineType("ForStatement", {
      visitor: ["init", "test", "update", "body"],
      aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
      fields: {
        init: {
          validate: (0, _utils.assertNodeType)("VariableDeclaration", "Expression"),
          optional: true
        },
        test: {
          validate: (0, _utils.assertNodeType)("Expression"),
          optional: true
        },
        update: {
          validate: (0, _utils.assertNodeType)("Expression"),
          optional: true
        },
        body: {
          validate: (0, _utils.assertNodeType)("Statement")
        }
      }
    });
    var functionCommon = () => ({
      params: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Identifier", "Pattern", "RestElement")))
      },
      generator: {
        default: false
      },
      async: {
        default: false
      }
    });
    exports.functionCommon = functionCommon;
    var functionTypeAnnotationCommon = () => ({
      returnType: {
        validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: true
      },
      typeParameters: {
        validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
        optional: true
      }
    });
    exports.functionTypeAnnotationCommon = functionTypeAnnotationCommon;
    var functionDeclarationCommon = () => Object.assign({}, functionCommon(), {
      declare: {
        validate: (0, _utils.assertValueType)("boolean"),
        optional: true
      },
      id: {
        validate: (0, _utils.assertNodeType)("Identifier"),
        optional: true
      }
    });
    exports.functionDeclarationCommon = functionDeclarationCommon;
    defineType("FunctionDeclaration", {
      builder: ["id", "params", "body", "generator", "async"],
      visitor: ["id", "params", "body", "returnType", "typeParameters"],
      fields: Object.assign({}, functionDeclarationCommon(), functionTypeAnnotationCommon(), {
        body: {
          validate: (0, _utils.assertNodeType)("BlockStatement")
        },
        predicate: {
          validate: (0, _utils.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
          optional: true
        }
      }),
      aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"],
      validate: function() {
        if (!process.env.BABEL_TYPES_8_BREAKING)
          return () => {
          };
        const identifier = (0, _utils.assertNodeType)("Identifier");
        return function(parent, key, node) {
          if (!(0, _is.default)("ExportDefaultDeclaration", parent)) {
            identifier(node, "id", node.id);
          }
        };
      }()
    });
    defineType("FunctionExpression", {
      inherits: "FunctionDeclaration",
      aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
      fields: Object.assign({}, functionCommon(), functionTypeAnnotationCommon(), {
        id: {
          validate: (0, _utils.assertNodeType)("Identifier"),
          optional: true
        },
        body: {
          validate: (0, _utils.assertNodeType)("BlockStatement")
        },
        predicate: {
          validate: (0, _utils.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
          optional: true
        }
      })
    });
    var patternLikeCommon = () => ({
      typeAnnotation: {
        validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: true
      },
      decorators: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
        optional: true
      }
    });
    exports.patternLikeCommon = patternLikeCommon;
    defineType("Identifier", {
      builder: ["name"],
      visitor: ["typeAnnotation", "decorators"],
      aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
      fields: Object.assign({}, patternLikeCommon(), {
        name: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), Object.assign(function(node, key, val) {
            if (!process.env.BABEL_TYPES_8_BREAKING)
              return;
            if (!(0, _isValidIdentifier.default)(val, false)) {
              throw new TypeError(`"${val}" is not a valid identifier name`);
            }
          }, {
            type: "string"
          }))
        },
        optional: {
          validate: (0, _utils.assertValueType)("boolean"),
          optional: true
        }
      }),
      validate(parent, key, node) {
        if (!process.env.BABEL_TYPES_8_BREAKING)
          return;
        const match = /\.(\w+)$/.exec(key);
        if (!match)
          return;
        const [, parentKey] = match;
        const nonComp = {
          computed: false
        };
        if (parentKey === "property") {
          if ((0, _is.default)("MemberExpression", parent, nonComp))
            return;
          if ((0, _is.default)("OptionalMemberExpression", parent, nonComp))
            return;
        } else if (parentKey === "key") {
          if ((0, _is.default)("Property", parent, nonComp))
            return;
          if ((0, _is.default)("Method", parent, nonComp))
            return;
        } else if (parentKey === "exported") {
          if ((0, _is.default)("ExportSpecifier", parent))
            return;
        } else if (parentKey === "imported") {
          if ((0, _is.default)("ImportSpecifier", parent, {
            imported: node
          }))
            return;
        } else if (parentKey === "meta") {
          if ((0, _is.default)("MetaProperty", parent, {
            meta: node
          }))
            return;
        }
        if (((0, _helperValidatorIdentifier.isKeyword)(node.name) || (0, _helperValidatorIdentifier.isReservedWord)(node.name, false)) && node.name !== "this") {
          throw new TypeError(`"${node.name}" is not a valid identifier`);
        }
      }
    });
    defineType("IfStatement", {
      visitor: ["test", "consequent", "alternate"],
      aliases: ["Statement", "Conditional"],
      fields: {
        test: {
          validate: (0, _utils.assertNodeType)("Expression")
        },
        consequent: {
          validate: (0, _utils.assertNodeType)("Statement")
        },
        alternate: {
          optional: true,
          validate: (0, _utils.assertNodeType)("Statement")
        }
      }
    });
    defineType("LabeledStatement", {
      visitor: ["label", "body"],
      aliases: ["Statement"],
      fields: {
        label: {
          validate: (0, _utils.assertNodeType)("Identifier")
        },
        body: {
          validate: (0, _utils.assertNodeType)("Statement")
        }
      }
    });
    defineType("StringLiteral", {
      builder: ["value"],
      fields: {
        value: {
          validate: (0, _utils.assertValueType)("string")
        }
      },
      aliases: ["Expression", "Pureish", "Literal", "Immutable"]
    });
    defineType("NumericLiteral", {
      builder: ["value"],
      deprecatedAlias: "NumberLiteral",
      fields: {
        value: {
          validate: (0, _utils.assertValueType)("number")
        }
      },
      aliases: ["Expression", "Pureish", "Literal", "Immutable"]
    });
    defineType("NullLiteral", {
      aliases: ["Expression", "Pureish", "Literal", "Immutable"]
    });
    defineType("BooleanLiteral", {
      builder: ["value"],
      fields: {
        value: {
          validate: (0, _utils.assertValueType)("boolean")
        }
      },
      aliases: ["Expression", "Pureish", "Literal", "Immutable"]
    });
    defineType("RegExpLiteral", {
      builder: ["pattern", "flags"],
      deprecatedAlias: "RegexLiteral",
      aliases: ["Expression", "Pureish", "Literal"],
      fields: {
        pattern: {
          validate: (0, _utils.assertValueType)("string")
        },
        flags: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), Object.assign(function(node, key, val) {
            if (!process.env.BABEL_TYPES_8_BREAKING)
              return;
            const invalid = /[^gimsuy]/.exec(val);
            if (invalid) {
              throw new TypeError(`"${invalid[0]}" is not a valid RegExp flag`);
            }
          }, {
            type: "string"
          })),
          default: ""
        }
      }
    });
    defineType("LogicalExpression", {
      builder: ["operator", "left", "right"],
      visitor: ["left", "right"],
      aliases: ["Binary", "Expression"],
      fields: {
        operator: {
          validate: (0, _utils.assertOneOf)(..._constants.LOGICAL_OPERATORS)
        },
        left: {
          validate: (0, _utils.assertNodeType)("Expression")
        },
        right: {
          validate: (0, _utils.assertNodeType)("Expression")
        }
      }
    });
    defineType("MemberExpression", {
      builder: ["object", "property", "computed", ...!process.env.BABEL_TYPES_8_BREAKING ? ["optional"] : []],
      visitor: ["object", "property"],
      aliases: ["Expression", "LVal"],
      fields: Object.assign({
        object: {
          validate: (0, _utils.assertNodeType)("Expression", "Super")
        },
        property: {
          validate: function() {
            const normal = (0, _utils.assertNodeType)("Identifier", "PrivateName");
            const computed = (0, _utils.assertNodeType)("Expression");
            const validator = function(node, key, val) {
              const validator2 = node.computed ? computed : normal;
              validator2(node, key, val);
            };
            validator.oneOfNodeTypes = ["Expression", "Identifier", "PrivateName"];
            return validator;
          }()
        },
        computed: {
          default: false
        }
      }, !process.env.BABEL_TYPES_8_BREAKING ? {
        optional: {
          validate: (0, _utils.assertOneOf)(true, false),
          optional: true
        }
      } : {})
    });
    defineType("NewExpression", {
      inherits: "CallExpression"
    });
    defineType("Program", {
      visitor: ["directives", "body"],
      builder: ["body", "directives", "sourceType", "interpreter"],
      fields: {
        sourceFile: {
          validate: (0, _utils.assertValueType)("string")
        },
        sourceType: {
          validate: (0, _utils.assertOneOf)("script", "module"),
          default: "script"
        },
        interpreter: {
          validate: (0, _utils.assertNodeType)("InterpreterDirective"),
          default: null,
          optional: true
        },
        directives: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Directive"))),
          default: []
        },
        body: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
        }
      },
      aliases: ["Scopable", "BlockParent", "Block"]
    });
    defineType("ObjectExpression", {
      visitor: ["properties"],
      aliases: ["Expression"],
      fields: {
        properties: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadElement")))
        }
      }
    });
    defineType("ObjectMethod", {
      builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
      fields: Object.assign({}, functionCommon(), functionTypeAnnotationCommon(), {
        kind: Object.assign({
          validate: (0, _utils.assertOneOf)("method", "get", "set")
        }, !process.env.BABEL_TYPES_8_BREAKING ? {
          default: "method"
        } : {}),
        computed: {
          default: false
        },
        key: {
          validate: function() {
            const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral");
            const computed = (0, _utils.assertNodeType)("Expression");
            const validator = function(node, key, val) {
              const validator2 = node.computed ? computed : normal;
              validator2(node, key, val);
            };
            validator.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral"];
            return validator;
          }()
        },
        decorators: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
          optional: true
        },
        body: {
          validate: (0, _utils.assertNodeType)("BlockStatement")
        }
      }),
      visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
      aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
    });
    defineType("ObjectProperty", {
      builder: ["key", "value", "computed", "shorthand", ...!process.env.BABEL_TYPES_8_BREAKING ? ["decorators"] : []],
      fields: {
        computed: {
          default: false
        },
        key: {
          validate: function() {
            const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName");
            const computed = (0, _utils.assertNodeType)("Expression");
            const validator = Object.assign(function(node, key, val) {
              const validator2 = node.computed ? computed : normal;
              validator2(node, key, val);
            }, {
              oneOfNodeTypes: ["Expression", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName"]
            });
            return validator;
          }()
        },
        value: {
          validate: (0, _utils.assertNodeType)("Expression", "PatternLike")
        },
        shorthand: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("boolean"), Object.assign(function(node, key, val) {
            if (!process.env.BABEL_TYPES_8_BREAKING)
              return;
            if (val && node.computed) {
              throw new TypeError("Property shorthand of ObjectProperty cannot be true if computed is true");
            }
          }, {
            type: "boolean"
          }), function(node, key, val) {
            if (!process.env.BABEL_TYPES_8_BREAKING)
              return;
            if (val && !(0, _is.default)("Identifier", node.key)) {
              throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier");
            }
          }),
          default: false
        },
        decorators: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
          optional: true
        }
      },
      visitor: ["key", "value", "decorators"],
      aliases: ["UserWhitespacable", "Property", "ObjectMember"],
      validate: function() {
        const pattern = (0, _utils.assertNodeType)("Identifier", "Pattern", "TSAsExpression", "TSNonNullExpression", "TSTypeAssertion");
        const expression = (0, _utils.assertNodeType)("Expression");
        return function(parent, key, node) {
          if (!process.env.BABEL_TYPES_8_BREAKING)
            return;
          const validator = (0, _is.default)("ObjectPattern", parent) ? pattern : expression;
          validator(node, "value", node.value);
        };
      }()
    });
    defineType("RestElement", {
      visitor: ["argument", "typeAnnotation"],
      builder: ["argument"],
      aliases: ["LVal", "PatternLike"],
      deprecatedAlias: "RestProperty",
      fields: Object.assign({}, patternLikeCommon(), {
        argument: {
          validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("LVal") : (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "MemberExpression", "TSAsExpression", "TSTypeAssertion", "TSNonNullExpression")
        },
        optional: {
          validate: (0, _utils.assertValueType)("boolean"),
          optional: true
        }
      }),
      validate(parent, key) {
        if (!process.env.BABEL_TYPES_8_BREAKING)
          return;
        const match = /(\w+)\[(\d+)\]/.exec(key);
        if (!match)
          throw new Error("Internal Babel error: malformed key.");
        const [, listKey, index] = match;
        if (parent[listKey].length > +index + 1) {
          throw new TypeError(`RestElement must be last element of ${listKey}`);
        }
      }
    });
    defineType("ReturnStatement", {
      visitor: ["argument"],
      aliases: ["Statement", "Terminatorless", "CompletionStatement"],
      fields: {
        argument: {
          validate: (0, _utils.assertNodeType)("Expression"),
          optional: true
        }
      }
    });
    defineType("SequenceExpression", {
      visitor: ["expressions"],
      fields: {
        expressions: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression")))
        }
      },
      aliases: ["Expression"]
    });
    defineType("ParenthesizedExpression", {
      visitor: ["expression"],
      aliases: ["Expression", "ExpressionWrapper"],
      fields: {
        expression: {
          validate: (0, _utils.assertNodeType)("Expression")
        }
      }
    });
    defineType("SwitchCase", {
      visitor: ["test", "consequent"],
      fields: {
        test: {
          validate: (0, _utils.assertNodeType)("Expression"),
          optional: true
        },
        consequent: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
        }
      }
    });
    defineType("SwitchStatement", {
      visitor: ["discriminant", "cases"],
      aliases: ["Statement", "BlockParent", "Scopable"],
      fields: {
        discriminant: {
          validate: (0, _utils.assertNodeType)("Expression")
        },
        cases: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("SwitchCase")))
        }
      }
    });
    defineType("ThisExpression", {
      aliases: ["Expression"]
    });
    defineType("ThrowStatement", {
      visitor: ["argument"],
      aliases: ["Statement", "Terminatorless", "CompletionStatement"],
      fields: {
        argument: {
          validate: (0, _utils.assertNodeType)("Expression")
        }
      }
    });
    defineType("TryStatement", {
      visitor: ["block", "handler", "finalizer"],
      aliases: ["Statement"],
      fields: {
        block: {
          validate: (0, _utils.chain)((0, _utils.assertNodeType)("BlockStatement"), Object.assign(function(node) {
            if (!process.env.BABEL_TYPES_8_BREAKING)
              return;
            if (!node.handler && !node.finalizer) {
              throw new TypeError("TryStatement expects either a handler or finalizer, or both");
            }
          }, {
            oneOfNodeTypes: ["BlockStatement"]
          }))
        },
        handler: {
          optional: true,
          validate: (0, _utils.assertNodeType)("CatchClause")
        },
        finalizer: {
          optional: true,
          validate: (0, _utils.assertNodeType)("BlockStatement")
        }
      }
    });
    defineType("UnaryExpression", {
      builder: ["operator", "argument", "prefix"],
      fields: {
        prefix: {
          default: true
        },
        argument: {
          validate: (0, _utils.assertNodeType)("Expression")
        },
        operator: {
          validate: (0, _utils.assertOneOf)(..._constants.UNARY_OPERATORS)
        }
      },
      visitor: ["argument"],
      aliases: ["UnaryLike", "Expression"]
    });
    defineType("UpdateExpression", {
      builder: ["operator", "argument", "prefix"],
      fields: {
        prefix: {
          default: false
        },
        argument: {
          validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("Expression") : (0, _utils.assertNodeType)("Identifier", "MemberExpression")
        },
        operator: {
          validate: (0, _utils.assertOneOf)(..._constants.UPDATE_OPERATORS)
        }
      },
      visitor: ["argument"],
      aliases: ["Expression"]
    });
    defineType("VariableDeclaration", {
      builder: ["kind", "declarations"],
      visitor: ["declarations"],
      aliases: ["Statement", "Declaration"],
      fields: {
        declare: {
          validate: (0, _utils.assertValueType)("boolean"),
          optional: true
        },
        kind: {
          validate: (0, _utils.assertOneOf)("var", "let", "const")
        },
        declarations: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("VariableDeclarator")))
        }
      },
      validate(parent, key, node) {
        if (!process.env.BABEL_TYPES_8_BREAKING)
          return;
        if (!(0, _is.default)("ForXStatement", parent, {
          left: node
        }))
          return;
        if (node.declarations.length !== 1) {
          throw new TypeError(`Exactly one VariableDeclarator is required in the VariableDeclaration of a ${parent.type}`);
        }
      }
    });
    defineType("VariableDeclarator", {
      visitor: ["id", "init"],
      fields: {
        id: {
          validate: function() {
            if (!process.env.BABEL_TYPES_8_BREAKING) {
              return (0, _utils.assertNodeType)("LVal");
            }
            const normal = (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern");
            const without = (0, _utils.assertNodeType)("Identifier");
            return function(node, key, val) {
              const validator = node.init ? normal : without;
              validator(node, key, val);
            };
          }()
        },
        definite: {
          optional: true,
          validate: (0, _utils.assertValueType)("boolean")
        },
        init: {
          optional: true,
          validate: (0, _utils.assertNodeType)("Expression")
        }
      }
    });
    defineType("WhileStatement", {
      visitor: ["test", "body"],
      aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
      fields: {
        test: {
          validate: (0, _utils.assertNodeType)("Expression")
        },
        body: {
          validate: (0, _utils.assertNodeType)("Statement")
        }
      }
    });
    defineType("WithStatement", {
      visitor: ["object", "body"],
      aliases: ["Statement"],
      fields: {
        object: {
          validate: (0, _utils.assertNodeType)("Expression")
        },
        body: {
          validate: (0, _utils.assertNodeType)("Statement")
        }
      }
    });
    defineType("AssignmentPattern", {
      visitor: ["left", "right", "decorators"],
      builder: ["left", "right"],
      aliases: ["Pattern", "PatternLike", "LVal"],
      fields: Object.assign({}, patternLikeCommon(), {
        left: {
          validate: (0, _utils.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression", "TSAsExpression", "TSTypeAssertion", "TSNonNullExpression")
        },
        right: {
          validate: (0, _utils.assertNodeType)("Expression")
        },
        decorators: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
          optional: true
        }
      })
    });
    defineType("ArrayPattern", {
      visitor: ["elements", "typeAnnotation"],
      builder: ["elements"],
      aliases: ["Pattern", "PatternLike", "LVal"],
      fields: Object.assign({}, patternLikeCommon(), {
        elements: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeOrValueType)("null", "PatternLike", "LVal")))
        },
        decorators: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
          optional: true
        },
        optional: {
          validate: (0, _utils.assertValueType)("boolean"),
          optional: true
        }
      })
    });
    defineType("ArrowFunctionExpression", {
      builder: ["params", "body", "async"],
      visitor: ["params", "body", "returnType", "typeParameters"],
      aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
      fields: Object.assign({}, functionCommon(), functionTypeAnnotationCommon(), {
        expression: {
          validate: (0, _utils.assertValueType)("boolean")
        },
        body: {
          validate: (0, _utils.assertNodeType)("BlockStatement", "Expression")
        },
        predicate: {
          validate: (0, _utils.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
          optional: true
        }
      })
    });
    defineType("ClassBody", {
      visitor: ["body"],
      fields: {
        body: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "ClassAccessorProperty", "TSDeclareMethod", "TSIndexSignature", "StaticBlock")))
        }
      }
    });
    defineType("ClassExpression", {
      builder: ["id", "superClass", "body", "decorators"],
      visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
      aliases: ["Scopable", "Class", "Expression"],
      fields: {
        id: {
          validate: (0, _utils.assertNodeType)("Identifier"),
          optional: true
        },
        typeParameters: {
          validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
          optional: true
        },
        body: {
          validate: (0, _utils.assertNodeType)("ClassBody")
        },
        superClass: {
          optional: true,
          validate: (0, _utils.assertNodeType)("Expression")
        },
        superTypeParameters: {
          validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
          optional: true
        },
        implements: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
          optional: true
        },
        decorators: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
          optional: true
        },
        mixins: {
          validate: (0, _utils.assertNodeType)("InterfaceExtends"),
          optional: true
        }
      }
    });
    defineType("ClassDeclaration", {
      inherits: "ClassExpression",
      aliases: ["Scopable", "Class", "Statement", "Declaration"],
      fields: {
        id: {
          validate: (0, _utils.assertNodeType)("Identifier")
        },
        typeParameters: {
          validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
          optional: true
        },
        body: {
          validate: (0, _utils.assertNodeType)("ClassBody")
        },
        superClass: {
          optional: true,
          validate: (0, _utils.assertNodeType)("Expression")
        },
        superTypeParameters: {
          validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
          optional: true
        },
        implements: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
          optional: true
        },
        decorators: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
          optional: true
        },
        mixins: {
          validate: (0, _utils.assertNodeType)("InterfaceExtends"),
          optional: true
        },
        declare: {
          validate: (0, _utils.assertValueType)("boolean"),
          optional: true
        },
        abstract: {
          validate: (0, _utils.assertValueType)("boolean"),
          optional: true
        }
      },
      validate: function() {
        const identifier = (0, _utils.assertNodeType)("Identifier");
        return function(parent, key, node) {
          if (!process.env.BABEL_TYPES_8_BREAKING)
            return;
          if (!(0, _is.default)("ExportDefaultDeclaration", parent)) {
            identifier(node, "id", node.id);
          }
        };
      }()
    });
    defineType("ExportAllDeclaration", {
      visitor: ["source"],
      aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
      fields: {
        source: {
          validate: (0, _utils.assertNodeType)("StringLiteral")
        },
        exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("type", "value")),
        assertions: {
          optional: true,
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ImportAttribute")))
        }
      }
    });
    defineType("ExportDefaultDeclaration", {
      visitor: ["declaration"],
      aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
      fields: {
        declaration: {
          validate: (0, _utils.assertNodeType)("TSDeclareFunction", "FunctionDeclaration", "ClassDeclaration", "Expression")
        },
        exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("value"))
      }
    });
    defineType("ExportNamedDeclaration", {
      visitor: ["declaration", "specifiers", "source"],
      aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
      fields: {
        declaration: {
          optional: true,
          validate: (0, _utils.chain)((0, _utils.assertNodeType)("Declaration"), Object.assign(function(node, key, val) {
            if (!process.env.BABEL_TYPES_8_BREAKING)
              return;
            if (val && node.specifiers.length) {
              throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration");
            }
          }, {
            oneOfNodeTypes: ["Declaration"]
          }), function(node, key, val) {
            if (!process.env.BABEL_TYPES_8_BREAKING)
              return;
            if (val && node.source) {
              throw new TypeError("Cannot export a declaration from a source");
            }
          })
        },
        assertions: {
          optional: true,
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ImportAttribute")))
        },
        specifiers: {
          default: [],
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)(function() {
            const sourced = (0, _utils.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier");
            const sourceless = (0, _utils.assertNodeType)("ExportSpecifier");
            if (!process.env.BABEL_TYPES_8_BREAKING)
              return sourced;
            return function(node, key, val) {
              const validator = node.source ? sourced : sourceless;
              validator(node, key, val);
            };
          }()))
        },
        source: {
          validate: (0, _utils.assertNodeType)("StringLiteral"),
          optional: true
        },
        exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("type", "value"))
      }
    });
    defineType("ExportSpecifier", {
      visitor: ["local", "exported"],
      aliases: ["ModuleSpecifier"],
      fields: {
        local: {
          validate: (0, _utils.assertNodeType)("Identifier")
        },
        exported: {
          validate: (0, _utils.assertNodeType)("Identifier", "StringLiteral")
        },
        exportKind: {
          validate: (0, _utils.assertOneOf)("type", "value"),
          optional: true
        }
      }
    });
    defineType("ForOfStatement", {
      visitor: ["left", "right", "body"],
      builder: ["left", "right", "body", "await"],
      aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
      fields: {
        left: {
          validate: function() {
            if (!process.env.BABEL_TYPES_8_BREAKING) {
              return (0, _utils.assertNodeType)("VariableDeclaration", "LVal");
            }
            const declaration = (0, _utils.assertNodeType)("VariableDeclaration");
            const lval = (0, _utils.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSTypeAssertion", "TSNonNullExpression");
            return function(node, key, val) {
              if ((0, _is.default)("VariableDeclaration", val)) {
                declaration(node, key, val);
              } else {
                lval(node, key, val);
              }
            };
          }()
        },
        right: {
          validate: (0, _utils.assertNodeType)("Expression")
        },
        body: {
          validate: (0, _utils.assertNodeType)("Statement")
        },
        await: {
          default: false
        }
      }
    });
    defineType("ImportDeclaration", {
      visitor: ["specifiers", "source"],
      aliases: ["Statement", "Declaration", "ModuleDeclaration"],
      fields: {
        assertions: {
          optional: true,
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ImportAttribute")))
        },
        specifiers: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
        },
        source: {
          validate: (0, _utils.assertNodeType)("StringLiteral")
        },
        importKind: {
          validate: (0, _utils.assertOneOf)("type", "typeof", "value"),
          optional: true
        }
      }
    });
    defineType("ImportDefaultSpecifier", {
      visitor: ["local"],
      aliases: ["ModuleSpecifier"],
      fields: {
        local: {
          validate: (0, _utils.assertNodeType)("Identifier")
        }
      }
    });
    defineType("ImportNamespaceSpecifier", {
      visitor: ["local"],
      aliases: ["ModuleSpecifier"],
      fields: {
        local: {
          validate: (0, _utils.assertNodeType)("Identifier")
        }
      }
    });
    defineType("ImportSpecifier", {
      visitor: ["local", "imported"],
      aliases: ["ModuleSpecifier"],
      fields: {
        local: {
          validate: (0, _utils.assertNodeType)("Identifier")
        },
        imported: {
          validate: (0, _utils.assertNodeType)("Identifier", "StringLiteral")
        },
        importKind: {
          validate: (0, _utils.assertOneOf)("type", "typeof", "value"),
          optional: true
        }
      }
    });
    defineType("MetaProperty", {
      visitor: ["meta", "property"],
      aliases: ["Expression"],
      fields: {
        meta: {
          validate: (0, _utils.chain)((0, _utils.assertNodeType)("Identifier"), Object.assign(function(node, key, val) {
            if (!process.env.BABEL_TYPES_8_BREAKING)
              return;
            let property;
            switch (val.name) {
              case "function":
                property = "sent";
                break;
              case "new":
                property = "target";
                break;
              case "import":
                property = "meta";
                break;
            }
            if (!(0, _is.default)("Identifier", node.property, {
              name: property
            })) {
              throw new TypeError("Unrecognised MetaProperty");
            }
          }, {
            oneOfNodeTypes: ["Identifier"]
          }))
        },
        property: {
          validate: (0, _utils.assertNodeType)("Identifier")
        }
      }
    });
    var classMethodOrPropertyCommon = () => ({
      abstract: {
        validate: (0, _utils.assertValueType)("boolean"),
        optional: true
      },
      accessibility: {
        validate: (0, _utils.assertOneOf)("public", "private", "protected"),
        optional: true
      },
      static: {
        default: false
      },
      override: {
        default: false
      },
      computed: {
        default: false
      },
      optional: {
        validate: (0, _utils.assertValueType)("boolean"),
        optional: true
      },
      key: {
        validate: (0, _utils.chain)(function() {
          const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
          const computed = (0, _utils.assertNodeType)("Expression");
          return function(node, key, val) {
            const validator = node.computed ? computed : normal;
            validator(node, key, val);
          };
        }(), (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression"))
      }
    });
    exports.classMethodOrPropertyCommon = classMethodOrPropertyCommon;
    var classMethodOrDeclareMethodCommon = () => Object.assign({}, functionCommon(), classMethodOrPropertyCommon(), {
      params: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Identifier", "Pattern", "RestElement", "TSParameterProperty")))
      },
      kind: {
        validate: (0, _utils.assertOneOf)("get", "set", "method", "constructor"),
        default: "method"
      },
      access: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), (0, _utils.assertOneOf)("public", "private", "protected")),
        optional: true
      },
      decorators: {
        validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
        optional: true
      }
    });
    exports.classMethodOrDeclareMethodCommon = classMethodOrDeclareMethodCommon;
    defineType("ClassMethod", {
      aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
      builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
      visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
      fields: Object.assign({}, classMethodOrDeclareMethodCommon(), functionTypeAnnotationCommon(), {
        body: {
          validate: (0, _utils.assertNodeType)("BlockStatement")
        }
      })
    });
    defineType("ObjectPattern", {
      visitor: ["properties", "typeAnnotation", "decorators"],
      builder: ["properties"],
      aliases: ["Pattern", "PatternLike", "LVal"],
      fields: Object.assign({}, patternLikeCommon(), {
        properties: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("RestElement", "ObjectProperty")))
        }
      })
    });
    defineType("SpreadElement", {
      visitor: ["argument"],
      aliases: ["UnaryLike"],
      deprecatedAlias: "SpreadProperty",
      fields: {
        argument: {
          validate: (0, _utils.assertNodeType)("Expression")
        }
      }
    });
    defineType("Super", {
      aliases: ["Expression"]
    });
    defineType("TaggedTemplateExpression", {
      visitor: ["tag", "quasi", "typeParameters"],
      builder: ["tag", "quasi"],
      aliases: ["Expression"],
      fields: {
        tag: {
          validate: (0, _utils.assertNodeType)("Expression")
        },
        quasi: {
          validate: (0, _utils.assertNodeType)("TemplateLiteral")
        },
        typeParameters: {
          validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
          optional: true
        }
      }
    });
    defineType("TemplateElement", {
      builder: ["value", "tail"],
      fields: {
        value: {
          validate: (0, _utils.chain)((0, _utils.assertShape)({
            raw: {
              validate: (0, _utils.assertValueType)("string")
            },
            cooked: {
              validate: (0, _utils.assertValueType)("string"),
              optional: true
            }
          }), function templateElementCookedValidator(node) {
            const raw = node.value.raw;
            let str, containsInvalid, unterminatedCalled = false;
            try {
              const error = () => {
                throw new Error();
              };
              ({
                str,
                containsInvalid
              } = (0, _helperStringParser.readStringContents)("template", raw, 0, 0, 0, {
                unterminated() {
                  unterminatedCalled = true;
                },
                strictNumericEscape: error,
                invalidEscapeSequence: error,
                numericSeparatorInEscapeSequence: error,
                unexpectedNumericSeparator: error,
                invalidDigit: error,
                invalidCodePoint: error
              }));
            } catch (_unused) {
              unterminatedCalled = true;
              containsInvalid = true;
            }
            if (!unterminatedCalled)
              throw new Error("Invalid raw");
            node.value.cooked = containsInvalid ? null : str;
          })
        },
        tail: {
          default: false
        }
      }
    });
    defineType("TemplateLiteral", {
      visitor: ["quasis", "expressions"],
      aliases: ["Expression", "Literal"],
      fields: {
        quasis: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TemplateElement")))
        },
        expressions: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "TSType")), function(node, key, val) {
            if (node.quasis.length !== val.length + 1) {
              throw new TypeError(`Number of ${node.type} quasis should be exactly one more than the number of expressions.
Expected ${val.length + 1} quasis but got ${node.quasis.length}`);
            }
          })
        }
      }
    });
    defineType("YieldExpression", {
      builder: ["argument", "delegate"],
      visitor: ["argument"],
      aliases: ["Expression", "Terminatorless"],
      fields: {
        delegate: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("boolean"), Object.assign(function(node, key, val) {
            if (!process.env.BABEL_TYPES_8_BREAKING)
              return;
            if (val && !node.argument) {
              throw new TypeError("Property delegate of YieldExpression cannot be true if there is no argument");
            }
          }, {
            type: "boolean"
          })),
          default: false
        },
        argument: {
          optional: true,
          validate: (0, _utils.assertNodeType)("Expression")
        }
      }
    });
    defineType("AwaitExpression", {
      builder: ["argument"],
      visitor: ["argument"],
      aliases: ["Expression", "Terminatorless"],
      fields: {
        argument: {
          validate: (0, _utils.assertNodeType)("Expression")
        }
      }
    });
    defineType("Import", {
      aliases: ["Expression"]
    });
    defineType("BigIntLiteral", {
      builder: ["value"],
      fields: {
        value: {
          validate: (0, _utils.assertValueType)("string")
        }
      },
      aliases: ["Expression", "Pureish", "Literal", "Immutable"]
    });
    defineType("ExportNamespaceSpecifier", {
      visitor: ["exported"],
      aliases: ["ModuleSpecifier"],
      fields: {
        exported: {
          validate: (0, _utils.assertNodeType)("Identifier")
        }
      }
    });
    defineType("OptionalMemberExpression", {
      builder: ["object", "property", "computed", "optional"],
      visitor: ["object", "property"],
      aliases: ["Expression"],
      fields: {
        object: {
          validate: (0, _utils.assertNodeType)("Expression")
        },
        property: {
          validate: function() {
            const normal = (0, _utils.assertNodeType)("Identifier");
            const computed = (0, _utils.assertNodeType)("Expression");
            const validator = Object.assign(function(node, key, val) {
              const validator2 = node.computed ? computed : normal;
              validator2(node, key, val);
            }, {
              oneOfNodeTypes: ["Expression", "Identifier"]
            });
            return validator;
          }()
        },
        computed: {
          default: false
        },
        optional: {
          validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertValueType)("boolean") : (0, _utils.chain)((0, _utils.assertValueType)("boolean"), (0, _utils.assertOptionalChainStart)())
        }
      }
    });
    defineType("OptionalCallExpression", {
      visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
      builder: ["callee", "arguments", "optional"],
      aliases: ["Expression"],
      fields: {
        callee: {
          validate: (0, _utils.assertNodeType)("Expression")
        },
        arguments: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
        },
        optional: {
          validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertValueType)("boolean") : (0, _utils.chain)((0, _utils.assertValueType)("boolean"), (0, _utils.assertOptionalChainStart)())
        },
        typeArguments: {
          validate: (0, _utils.assertNodeType)("TypeParameterInstantiation"),
          optional: true
        },
        typeParameters: {
          validate: (0, _utils.assertNodeType)("TSTypeParameterInstantiation"),
          optional: true
        }
      }
    });
    defineType("ClassProperty", {
      visitor: ["key", "value", "typeAnnotation", "decorators"],
      builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
      aliases: ["Property"],
      fields: Object.assign({}, classMethodOrPropertyCommon(), {
        value: {
          validate: (0, _utils.assertNodeType)("Expression"),
          optional: true
        },
        definite: {
          validate: (0, _utils.assertValueType)("boolean"),
          optional: true
        },
        typeAnnotation: {
          validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
          optional: true
        },
        decorators: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
          optional: true
        },
        readonly: {
          validate: (0, _utils.assertValueType)("boolean"),
          optional: true
        },
        declare: {
          validate: (0, _utils.assertValueType)("boolean"),
          optional: true
        },
        variance: {
          validate: (0, _utils.assertNodeType)("Variance"),
          optional: true
        }
      })
    });
    defineType("ClassAccessorProperty", {
      visitor: ["key", "value", "typeAnnotation", "decorators"],
      builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
      aliases: ["Property", "Accessor"],
      fields: Object.assign({}, classMethodOrPropertyCommon(), {
        key: {
          validate: (0, _utils.chain)(function() {
            const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "PrivateName");
            const computed = (0, _utils.assertNodeType)("Expression");
            return function(node, key, val) {
              const validator = node.computed ? computed : normal;
              validator(node, key, val);
            };
          }(), (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression", "PrivateName"))
        },
        value: {
          validate: (0, _utils.assertNodeType)("Expression"),
          optional: true
        },
        definite: {
          validate: (0, _utils.assertValueType)("boolean"),
          optional: true
        },
        typeAnnotation: {
          validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
          optional: true
        },
        decorators: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
          optional: true
        },
        readonly: {
          validate: (0, _utils.assertValueType)("boolean"),
          optional: true
        },
        declare: {
          validate: (0, _utils.assertValueType)("boolean"),
          optional: true
        },
        variance: {
          validate: (0, _utils.assertNodeType)("Variance"),
          optional: true
        }
      })
    });
    defineType("ClassPrivateProperty", {
      visitor: ["key", "value", "decorators", "typeAnnotation"],
      builder: ["key", "value", "decorators", "static"],
      aliases: ["Property", "Private"],
      fields: {
        key: {
          validate: (0, _utils.assertNodeType)("PrivateName")
        },
        value: {
          validate: (0, _utils.assertNodeType)("Expression"),
          optional: true
        },
        typeAnnotation: {
          validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
          optional: true
        },
        decorators: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
          optional: true
        },
        static: {
          validate: (0, _utils.assertValueType)("boolean"),
          default: false
        },
        readonly: {
          validate: (0, _utils.assertValueType)("boolean"),
          optional: true
        },
        definite: {
          validate: (0, _utils.assertValueType)("boolean"),
          optional: true
        },
        variance: {
          validate: (0, _utils.assertNodeType)("Variance"),
          optional: true
        }
      }
    });
    defineType("ClassPrivateMethod", {
      builder: ["kind", "key", "params", "body", "static"],
      visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
      aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
      fields: Object.assign({}, classMethodOrDeclareMethodCommon(), functionTypeAnnotationCommon(), {
        kind: {
          validate: (0, _utils.assertOneOf)("get", "set", "method"),
          default: "method"
        },
        key: {
          validate: (0, _utils.assertNodeType)("PrivateName")
        },
        body: {
          validate: (0, _utils.assertNodeType)("BlockStatement")
        }
      })
    });
    defineType("PrivateName", {
      visitor: ["id"],
      aliases: ["Private"],
      fields: {
        id: {
          validate: (0, _utils.assertNodeType)("Identifier")
        }
      }
    });
    defineType("StaticBlock", {
      visitor: ["body"],
      fields: {
        body: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
        }
      },
      aliases: ["Scopable", "BlockParent", "FunctionParent"]
    });
  }
});

// node_modules/@babel/types/lib/definitions/flow.js
var require_flow = __commonJS({
  "node_modules/@babel/types/lib/definitions/flow.js"() {
    "use strict";
    var _utils = require_utils();
    var defineType = (0, _utils.defineAliasedType)("Flow");
    var defineInterfaceishType = (name) => {
      defineType(name, {
        builder: ["id", "typeParameters", "extends", "body"],
        visitor: ["id", "typeParameters", "extends", "mixins", "implements", "body"],
        aliases: ["FlowDeclaration", "Statement", "Declaration"],
        fields: {
          id: (0, _utils.validateType)("Identifier"),
          typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
          extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends")),
          mixins: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends")),
          implements: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ClassImplements")),
          body: (0, _utils.validateType)("ObjectTypeAnnotation")
        }
      });
    };
    defineType("AnyTypeAnnotation", {
      aliases: ["FlowType", "FlowBaseAnnotation"]
    });
    defineType("ArrayTypeAnnotation", {
      visitor: ["elementType"],
      aliases: ["FlowType"],
      fields: {
        elementType: (0, _utils.validateType)("FlowType")
      }
    });
    defineType("BooleanTypeAnnotation", {
      aliases: ["FlowType", "FlowBaseAnnotation"]
    });
    defineType("BooleanLiteralTypeAnnotation", {
      builder: ["value"],
      aliases: ["FlowType"],
      fields: {
        value: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
      }
    });
    defineType("NullLiteralTypeAnnotation", {
      aliases: ["FlowType", "FlowBaseAnnotation"]
    });
    defineType("ClassImplements", {
      visitor: ["id", "typeParameters"],
      fields: {
        id: (0, _utils.validateType)("Identifier"),
        typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
      }
    });
    defineInterfaceishType("DeclareClass");
    defineType("DeclareFunction", {
      visitor: ["id"],
      aliases: ["FlowDeclaration", "Statement", "Declaration"],
      fields: {
        id: (0, _utils.validateType)("Identifier"),
        predicate: (0, _utils.validateOptionalType)("DeclaredPredicate")
      }
    });
    defineInterfaceishType("DeclareInterface");
    defineType("DeclareModule", {
      builder: ["id", "body", "kind"],
      visitor: ["id", "body"],
      aliases: ["FlowDeclaration", "Statement", "Declaration"],
      fields: {
        id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
        body: (0, _utils.validateType)("BlockStatement"),
        kind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("CommonJS", "ES"))
      }
    });
    defineType("DeclareModuleExports", {
      visitor: ["typeAnnotation"],
      aliases: ["FlowDeclaration", "Statement", "Declaration"],
      fields: {
        typeAnnotation: (0, _utils.validateType)("TypeAnnotation")
      }
    });
    defineType("DeclareTypeAlias", {
      visitor: ["id", "typeParameters", "right"],
      aliases: ["FlowDeclaration", "Statement", "Declaration"],
      fields: {
        id: (0, _utils.validateType)("Identifier"),
        typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
        right: (0, _utils.validateType)("FlowType")
      }
    });
    defineType("DeclareOpaqueType", {
      visitor: ["id", "typeParameters", "supertype"],
      aliases: ["FlowDeclaration", "Statement", "Declaration"],
      fields: {
        id: (0, _utils.validateType)("Identifier"),
        typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
        supertype: (0, _utils.validateOptionalType)("FlowType"),
        impltype: (0, _utils.validateOptionalType)("FlowType")
      }
    });
    defineType("DeclareVariable", {
      visitor: ["id"],
      aliases: ["FlowDeclaration", "Statement", "Declaration"],
      fields: {
        id: (0, _utils.validateType)("Identifier")
      }
    });
    defineType("DeclareExportDeclaration", {
      visitor: ["declaration", "specifiers", "source"],
      aliases: ["FlowDeclaration", "Statement", "Declaration"],
      fields: {
        declaration: (0, _utils.validateOptionalType)("Flow"),
        specifiers: (0, _utils.validateOptional)((0, _utils.arrayOfType)(["ExportSpecifier", "ExportNamespaceSpecifier"])),
        source: (0, _utils.validateOptionalType)("StringLiteral"),
        default: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
      }
    });
    defineType("DeclareExportAllDeclaration", {
      visitor: ["source"],
      aliases: ["FlowDeclaration", "Statement", "Declaration"],
      fields: {
        source: (0, _utils.validateType)("StringLiteral"),
        exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("type", "value"))
      }
    });
    defineType("DeclaredPredicate", {
      visitor: ["value"],
      aliases: ["FlowPredicate"],
      fields: {
        value: (0, _utils.validateType)("Flow")
      }
    });
    defineType("ExistsTypeAnnotation", {
      aliases: ["FlowType"]
    });
    defineType("FunctionTypeAnnotation", {
      visitor: ["typeParameters", "params", "rest", "returnType"],
      aliases: ["FlowType"],
      fields: {
        typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
        params: (0, _utils.validate)((0, _utils.arrayOfType)("FunctionTypeParam")),
        rest: (0, _utils.validateOptionalType)("FunctionTypeParam"),
        this: (0, _utils.validateOptionalType)("FunctionTypeParam"),
        returnType: (0, _utils.validateType)("FlowType")
      }
    });
    defineType("FunctionTypeParam", {
      visitor: ["name", "typeAnnotation"],
      fields: {
        name: (0, _utils.validateOptionalType)("Identifier"),
        typeAnnotation: (0, _utils.validateType)("FlowType"),
        optional: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
      }
    });
    defineType("GenericTypeAnnotation", {
      visitor: ["id", "typeParameters"],
      aliases: ["FlowType"],
      fields: {
        id: (0, _utils.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
        typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
      }
    });
    defineType("InferredPredicate", {
      aliases: ["FlowPredicate"]
    });
    defineType("InterfaceExtends", {
      visitor: ["id", "typeParameters"],
      fields: {
        id: (0, _utils.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
        typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
      }
    });
    defineInterfaceishType("InterfaceDeclaration");
    defineType("InterfaceTypeAnnotation", {
      visitor: ["extends", "body"],
      aliases: ["FlowType"],
      fields: {
        extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends")),
        body: (0, _utils.validateType)("ObjectTypeAnnotation")
      }
    });
    defineType("IntersectionTypeAnnotation", {
      visitor: ["types"],
      aliases: ["FlowType"],
      fields: {
        types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
      }
    });
    defineType("MixedTypeAnnotation", {
      aliases: ["FlowType", "FlowBaseAnnotation"]
    });
    defineType("EmptyTypeAnnotation", {
      aliases: ["FlowType", "FlowBaseAnnotation"]
    });
    defineType("NullableTypeAnnotation", {
      visitor: ["typeAnnotation"],
      aliases: ["FlowType"],
      fields: {
        typeAnnotation: (0, _utils.validateType)("FlowType")
      }
    });
    defineType("NumberLiteralTypeAnnotation", {
      builder: ["value"],
      aliases: ["FlowType"],
      fields: {
        value: (0, _utils.validate)((0, _utils.assertValueType)("number"))
      }
    });
    defineType("NumberTypeAnnotation", {
      aliases: ["FlowType", "FlowBaseAnnotation"]
    });
    defineType("ObjectTypeAnnotation", {
      visitor: ["properties", "indexers", "callProperties", "internalSlots"],
      aliases: ["FlowType"],
      builder: ["properties", "indexers", "callProperties", "internalSlots", "exact"],
      fields: {
        properties: (0, _utils.validate)((0, _utils.arrayOfType)(["ObjectTypeProperty", "ObjectTypeSpreadProperty"])),
        indexers: {
          validate: (0, _utils.arrayOfType)("ObjectTypeIndexer"),
          optional: true,
          default: []
        },
        callProperties: {
          validate: (0, _utils.arrayOfType)("ObjectTypeCallProperty"),
          optional: true,
          default: []
        },
        internalSlots: {
          validate: (0, _utils.arrayOfType)("ObjectTypeInternalSlot"),
          optional: true,
          default: []
        },
        exact: {
          validate: (0, _utils.assertValueType)("boolean"),
          default: false
        },
        inexact: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
      }
    });
    defineType("ObjectTypeInternalSlot", {
      visitor: ["id", "value", "optional", "static", "method"],
      aliases: ["UserWhitespacable"],
      fields: {
        id: (0, _utils.validateType)("Identifier"),
        value: (0, _utils.validateType)("FlowType"),
        optional: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
        static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
        method: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
      }
    });
    defineType("ObjectTypeCallProperty", {
      visitor: ["value"],
      aliases: ["UserWhitespacable"],
      fields: {
        value: (0, _utils.validateType)("FlowType"),
        static: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
      }
    });
    defineType("ObjectTypeIndexer", {
      visitor: ["id", "key", "value", "variance"],
      aliases: ["UserWhitespacable"],
      fields: {
        id: (0, _utils.validateOptionalType)("Identifier"),
        key: (0, _utils.validateType)("FlowType"),
        value: (0, _utils.validateType)("FlowType"),
        static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
        variance: (0, _utils.validateOptionalType)("Variance")
      }
    });
    defineType("ObjectTypeProperty", {
      visitor: ["key", "value", "variance"],
      aliases: ["UserWhitespacable"],
      fields: {
        key: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
        value: (0, _utils.validateType)("FlowType"),
        kind: (0, _utils.validate)((0, _utils.assertOneOf)("init", "get", "set")),
        static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
        proto: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
        optional: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
        variance: (0, _utils.validateOptionalType)("Variance"),
        method: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
      }
    });
    defineType("ObjectTypeSpreadProperty", {
      visitor: ["argument"],
      aliases: ["UserWhitespacable"],
      fields: {
        argument: (0, _utils.validateType)("FlowType")
      }
    });
    defineType("OpaqueType", {
      visitor: ["id", "typeParameters", "supertype", "impltype"],
      aliases: ["FlowDeclaration", "Statement", "Declaration"],
      fields: {
        id: (0, _utils.validateType)("Identifier"),
        typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
        supertype: (0, _utils.validateOptionalType)("FlowType"),
        impltype: (0, _utils.validateType)("FlowType")
      }
    });
    defineType("QualifiedTypeIdentifier", {
      visitor: ["id", "qualification"],
      fields: {
        id: (0, _utils.validateType)("Identifier"),
        qualification: (0, _utils.validateType)(["Identifier", "QualifiedTypeIdentifier"])
      }
    });
    defineType("StringLiteralTypeAnnotation", {
      builder: ["value"],
      aliases: ["FlowType"],
      fields: {
        value: (0, _utils.validate)((0, _utils.assertValueType)("string"))
      }
    });
    defineType("StringTypeAnnotation", {
      aliases: ["FlowType", "FlowBaseAnnotation"]
    });
    defineType("SymbolTypeAnnotation", {
      aliases: ["FlowType", "FlowBaseAnnotation"]
    });
    defineType("ThisTypeAnnotation", {
      aliases: ["FlowType", "FlowBaseAnnotation"]
    });
    defineType("TupleTypeAnnotation", {
      visitor: ["types"],
      aliases: ["FlowType"],
      fields: {
        types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
      }
    });
    defineType("TypeofTypeAnnotation", {
      visitor: ["argument"],
      aliases: ["FlowType"],
      fields: {
        argument: (0, _utils.validateType)("FlowType")
      }
    });
    defineType("TypeAlias", {
      visitor: ["id", "typeParameters", "right"],
      aliases: ["FlowDeclaration", "Statement", "Declaration"],
      fields: {
        id: (0, _utils.validateType)("Identifier"),
        typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
        right: (0, _utils.validateType)("FlowType")
      }
    });
    defineType("TypeAnnotation", {
      visitor: ["typeAnnotation"],
      fields: {
        typeAnnotation: (0, _utils.validateType)("FlowType")
      }
    });
    defineType("TypeCastExpression", {
      visitor: ["expression", "typeAnnotation"],
      aliases: ["ExpressionWrapper", "Expression"],
      fields: {
        expression: (0, _utils.validateType)("Expression"),
        typeAnnotation: (0, _utils.validateType)("TypeAnnotation")
      }
    });
    defineType("TypeParameter", {
      visitor: ["bound", "default", "variance"],
      fields: {
        name: (0, _utils.validate)((0, _utils.assertValueType)("string")),
        bound: (0, _utils.validateOptionalType)("TypeAnnotation"),
        default: (0, _utils.validateOptionalType)("FlowType"),
        variance: (0, _utils.validateOptionalType)("Variance")
      }
    });
    defineType("TypeParameterDeclaration", {
      visitor: ["params"],
      fields: {
        params: (0, _utils.validate)((0, _utils.arrayOfType)("TypeParameter"))
      }
    });
    defineType("TypeParameterInstantiation", {
      visitor: ["params"],
      fields: {
        params: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
      }
    });
    defineType("UnionTypeAnnotation", {
      visitor: ["types"],
      aliases: ["FlowType"],
      fields: {
        types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
      }
    });
    defineType("Variance", {
      builder: ["kind"],
      fields: {
        kind: (0, _utils.validate)((0, _utils.assertOneOf)("minus", "plus"))
      }
    });
    defineType("VoidTypeAnnotation", {
      aliases: ["FlowType", "FlowBaseAnnotation"]
    });
    defineType("EnumDeclaration", {
      aliases: ["Statement", "Declaration"],
      visitor: ["id", "body"],
      fields: {
        id: (0, _utils.validateType)("Identifier"),
        body: (0, _utils.validateType)(["EnumBooleanBody", "EnumNumberBody", "EnumStringBody", "EnumSymbolBody"])
      }
    });
    defineType("EnumBooleanBody", {
      aliases: ["EnumBody"],
      visitor: ["members"],
      fields: {
        explicitType: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
        members: (0, _utils.validateArrayOfType)("EnumBooleanMember"),
        hasUnknownMembers: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
      }
    });
    defineType("EnumNumberBody", {
      aliases: ["EnumBody"],
      visitor: ["members"],
      fields: {
        explicitType: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
        members: (0, _utils.validateArrayOfType)("EnumNumberMember"),
        hasUnknownMembers: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
      }
    });
    defineType("EnumStringBody", {
      aliases: ["EnumBody"],
      visitor: ["members"],
      fields: {
        explicitType: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
        members: (0, _utils.validateArrayOfType)(["EnumStringMember", "EnumDefaultedMember"]),
        hasUnknownMembers: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
      }
    });
    defineType("EnumSymbolBody", {
      aliases: ["EnumBody"],
      visitor: ["members"],
      fields: {
        members: (0, _utils.validateArrayOfType)("EnumDefaultedMember"),
        hasUnknownMembers: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
      }
    });
    defineType("EnumBooleanMember", {
      aliases: ["EnumMember"],
      visitor: ["id"],
      fields: {
        id: (0, _utils.validateType)("Identifier"),
        init: (0, _utils.validateType)("BooleanLiteral")
      }
    });
    defineType("EnumNumberMember", {
      aliases: ["EnumMember"],
      visitor: ["id", "init"],
      fields: {
        id: (0, _utils.validateType)("Identifier"),
        init: (0, _utils.validateType)("NumericLiteral")
      }
    });
    defineType("EnumStringMember", {
      aliases: ["EnumMember"],
      visitor: ["id", "init"],
      fields: {
        id: (0, _utils.validateType)("Identifier"),
        init: (0, _utils.validateType)("StringLiteral")
      }
    });
    defineType("EnumDefaultedMember", {
      aliases: ["EnumMember"],
      visitor: ["id"],
      fields: {
        id: (0, _utils.validateType)("Identifier")
      }
    });
    defineType("IndexedAccessType", {
      visitor: ["objectType", "indexType"],
      aliases: ["FlowType"],
      fields: {
        objectType: (0, _utils.validateType)("FlowType"),
        indexType: (0, _utils.validateType)("FlowType")
      }
    });
    defineType("OptionalIndexedAccessType", {
      visitor: ["objectType", "indexType"],
      aliases: ["FlowType"],
      fields: {
        objectType: (0, _utils.validateType)("FlowType"),
        indexType: (0, _utils.validateType)("FlowType"),
        optional: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
      }
    });
  }
});

// node_modules/@babel/types/lib/definitions/jsx.js
var require_jsx = __commonJS({
  "node_modules/@babel/types/lib/definitions/jsx.js"() {
    "use strict";
    var _utils = require_utils();
    var defineType = (0, _utils.defineAliasedType)("JSX");
    defineType("JSXAttribute", {
      visitor: ["name", "value"],
      aliases: ["Immutable"],
      fields: {
        name: {
          validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
        },
        value: {
          optional: true,
          validate: (0, _utils.assertNodeType)("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
        }
      }
    });
    defineType("JSXClosingElement", {
      visitor: ["name"],
      aliases: ["Immutable"],
      fields: {
        name: {
          validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
        }
      }
    });
    defineType("JSXElement", {
      builder: ["openingElement", "closingElement", "children", "selfClosing"],
      visitor: ["openingElement", "children", "closingElement"],
      aliases: ["Immutable", "Expression"],
      fields: Object.assign({
        openingElement: {
          validate: (0, _utils.assertNodeType)("JSXOpeningElement")
        },
        closingElement: {
          optional: true,
          validate: (0, _utils.assertNodeType)("JSXClosingElement")
        },
        children: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
        }
      }, {
        selfClosing: {
          validate: (0, _utils.assertValueType)("boolean"),
          optional: true
        }
      })
    });
    defineType("JSXEmptyExpression", {});
    defineType("JSXExpressionContainer", {
      visitor: ["expression"],
      aliases: ["Immutable"],
      fields: {
        expression: {
          validate: (0, _utils.assertNodeType)("Expression", "JSXEmptyExpression")
        }
      }
    });
    defineType("JSXSpreadChild", {
      visitor: ["expression"],
      aliases: ["Immutable"],
      fields: {
        expression: {
          validate: (0, _utils.assertNodeType)("Expression")
        }
      }
    });
    defineType("JSXIdentifier", {
      builder: ["name"],
      fields: {
        name: {
          validate: (0, _utils.assertValueType)("string")
        }
      }
    });
    defineType("JSXMemberExpression", {
      visitor: ["object", "property"],
      fields: {
        object: {
          validate: (0, _utils.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
        },
        property: {
          validate: (0, _utils.assertNodeType)("JSXIdentifier")
        }
      }
    });
    defineType("JSXNamespacedName", {
      visitor: ["namespace", "name"],
      fields: {
        namespace: {
          validate: (0, _utils.assertNodeType)("JSXIdentifier")
        },
        name: {
          validate: (0, _utils.assertNodeType)("JSXIdentifier")
        }
      }
    });
    defineType("JSXOpeningElement", {
      builder: ["name", "attributes", "selfClosing"],
      visitor: ["name", "attributes"],
      aliases: ["Immutable"],
      fields: {
        name: {
          validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
        },
        selfClosing: {
          default: false
        },
        attributes: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
        },
        typeParameters: {
          validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
          optional: true
        }
      }
    });
    defineType("JSXSpreadAttribute", {
      visitor: ["argument"],
      fields: {
        argument: {
          validate: (0, _utils.assertNodeType)("Expression")
        }
      }
    });
    defineType("JSXText", {
      aliases: ["Immutable"],
      builder: ["value"],
      fields: {
        value: {
          validate: (0, _utils.assertValueType)("string")
        }
      }
    });
    defineType("JSXFragment", {
      builder: ["openingFragment", "closingFragment", "children"],
      visitor: ["openingFragment", "children", "closingFragment"],
      aliases: ["Immutable", "Expression"],
      fields: {
        openingFragment: {
          validate: (0, _utils.assertNodeType)("JSXOpeningFragment")
        },
        closingFragment: {
          validate: (0, _utils.assertNodeType)("JSXClosingFragment")
        },
        children: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
        }
      }
    });
    defineType("JSXOpeningFragment", {
      aliases: ["Immutable"]
    });
    defineType("JSXClosingFragment", {
      aliases: ["Immutable"]
    });
  }
});

// node_modules/@babel/types/lib/definitions/placeholders.js
var require_placeholders = __commonJS({
  "node_modules/@babel/types/lib/definitions/placeholders.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PLACEHOLDERS_FLIPPED_ALIAS = exports.PLACEHOLDERS_ALIAS = exports.PLACEHOLDERS = void 0;
    var _utils = require_utils();
    var PLACEHOLDERS = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
    exports.PLACEHOLDERS = PLACEHOLDERS;
    var PLACEHOLDERS_ALIAS = {
      Declaration: ["Statement"],
      Pattern: ["PatternLike", "LVal"]
    };
    exports.PLACEHOLDERS_ALIAS = PLACEHOLDERS_ALIAS;
    for (const type of PLACEHOLDERS) {
      const alias = _utils.ALIAS_KEYS[type];
      if (alias != null && alias.length)
        PLACEHOLDERS_ALIAS[type] = alias;
    }
    var PLACEHOLDERS_FLIPPED_ALIAS = {};
    exports.PLACEHOLDERS_FLIPPED_ALIAS = PLACEHOLDERS_FLIPPED_ALIAS;
    Object.keys(PLACEHOLDERS_ALIAS).forEach((type) => {
      PLACEHOLDERS_ALIAS[type].forEach((alias) => {
        if (!Object.hasOwnProperty.call(PLACEHOLDERS_FLIPPED_ALIAS, alias)) {
          PLACEHOLDERS_FLIPPED_ALIAS[alias] = [];
        }
        PLACEHOLDERS_FLIPPED_ALIAS[alias].push(type);
      });
    });
  }
});

// node_modules/@babel/types/lib/definitions/misc.js
var require_misc = __commonJS({
  "node_modules/@babel/types/lib/definitions/misc.js"() {
    "use strict";
    var _utils = require_utils();
    var _placeholders = require_placeholders();
    var defineType = (0, _utils.defineAliasedType)("Miscellaneous");
    {
      defineType("Noop", {
        visitor: []
      });
    }
    defineType("Placeholder", {
      visitor: [],
      builder: ["expectedNode", "name"],
      fields: {
        name: {
          validate: (0, _utils.assertNodeType)("Identifier")
        },
        expectedNode: {
          validate: (0, _utils.assertOneOf)(..._placeholders.PLACEHOLDERS)
        }
      }
    });
    defineType("V8IntrinsicIdentifier", {
      builder: ["name"],
      fields: {
        name: {
          validate: (0, _utils.assertValueType)("string")
        }
      }
    });
  }
});

// node_modules/@babel/types/lib/definitions/experimental.js
var require_experimental = __commonJS({
  "node_modules/@babel/types/lib/definitions/experimental.js"() {
    "use strict";
    var _utils = require_utils();
    (0, _utils.default)("ArgumentPlaceholder", {});
    (0, _utils.default)("BindExpression", {
      visitor: ["object", "callee"],
      aliases: ["Expression"],
      fields: !process.env.BABEL_TYPES_8_BREAKING ? {
        object: {
          validate: Object.assign(() => {
          }, {
            oneOfNodeTypes: ["Expression"]
          })
        },
        callee: {
          validate: Object.assign(() => {
          }, {
            oneOfNodeTypes: ["Expression"]
          })
        }
      } : {
        object: {
          validate: (0, _utils.assertNodeType)("Expression")
        },
        callee: {
          validate: (0, _utils.assertNodeType)("Expression")
        }
      }
    });
    (0, _utils.default)("ImportAttribute", {
      visitor: ["key", "value"],
      fields: {
        key: {
          validate: (0, _utils.assertNodeType)("Identifier", "StringLiteral")
        },
        value: {
          validate: (0, _utils.assertNodeType)("StringLiteral")
        }
      }
    });
    (0, _utils.default)("Decorator", {
      visitor: ["expression"],
      fields: {
        expression: {
          validate: (0, _utils.assertNodeType)("Expression")
        }
      }
    });
    (0, _utils.default)("DoExpression", {
      visitor: ["body"],
      builder: ["body", "async"],
      aliases: ["Expression"],
      fields: {
        body: {
          validate: (0, _utils.assertNodeType)("BlockStatement")
        },
        async: {
          validate: (0, _utils.assertValueType)("boolean"),
          default: false
        }
      }
    });
    (0, _utils.default)("ExportDefaultSpecifier", {
      visitor: ["exported"],
      aliases: ["ModuleSpecifier"],
      fields: {
        exported: {
          validate: (0, _utils.assertNodeType)("Identifier")
        }
      }
    });
    (0, _utils.default)("RecordExpression", {
      visitor: ["properties"],
      aliases: ["Expression"],
      fields: {
        properties: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ObjectProperty", "SpreadElement")))
        }
      }
    });
    (0, _utils.default)("TupleExpression", {
      fields: {
        elements: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "SpreadElement"))),
          default: []
        }
      },
      visitor: ["elements"],
      aliases: ["Expression"]
    });
    (0, _utils.default)("DecimalLiteral", {
      builder: ["value"],
      fields: {
        value: {
          validate: (0, _utils.assertValueType)("string")
        }
      },
      aliases: ["Expression", "Pureish", "Literal", "Immutable"]
    });
    (0, _utils.default)("ModuleExpression", {
      visitor: ["body"],
      fields: {
        body: {
          validate: (0, _utils.assertNodeType)("Program")
        }
      },
      aliases: ["Expression"]
    });
    (0, _utils.default)("TopicReference", {
      aliases: ["Expression"]
    });
    (0, _utils.default)("PipelineTopicExpression", {
      builder: ["expression"],
      visitor: ["expression"],
      fields: {
        expression: {
          validate: (0, _utils.assertNodeType)("Expression")
        }
      },
      aliases: ["Expression"]
    });
    (0, _utils.default)("PipelineBareFunction", {
      builder: ["callee"],
      visitor: ["callee"],
      fields: {
        callee: {
          validate: (0, _utils.assertNodeType)("Expression")
        }
      },
      aliases: ["Expression"]
    });
    (0, _utils.default)("PipelinePrimaryTopicReference", {
      aliases: ["Expression"]
    });
  }
});

// node_modules/@babel/types/lib/definitions/typescript.js
var require_typescript = __commonJS({
  "node_modules/@babel/types/lib/definitions/typescript.js"() {
    "use strict";
    var _utils = require_utils();
    var _core = require_core();
    var _is = require_is();
    var defineType = (0, _utils.defineAliasedType)("TypeScript");
    var bool = (0, _utils.assertValueType)("boolean");
    var tSFunctionTypeAnnotationCommon = () => ({
      returnType: {
        validate: (0, _utils.assertNodeType)("TSTypeAnnotation", "Noop"),
        optional: true
      },
      typeParameters: {
        validate: (0, _utils.assertNodeType)("TSTypeParameterDeclaration", "Noop"),
        optional: true
      }
    });
    defineType("TSParameterProperty", {
      aliases: ["LVal"],
      visitor: ["parameter"],
      fields: {
        accessibility: {
          validate: (0, _utils.assertOneOf)("public", "private", "protected"),
          optional: true
        },
        readonly: {
          validate: (0, _utils.assertValueType)("boolean"),
          optional: true
        },
        parameter: {
          validate: (0, _utils.assertNodeType)("Identifier", "AssignmentPattern")
        },
        override: {
          validate: (0, _utils.assertValueType)("boolean"),
          optional: true
        },
        decorators: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
          optional: true
        }
      }
    });
    defineType("TSDeclareFunction", {
      aliases: ["Statement", "Declaration"],
      visitor: ["id", "typeParameters", "params", "returnType"],
      fields: Object.assign({}, (0, _core.functionDeclarationCommon)(), tSFunctionTypeAnnotationCommon())
    });
    defineType("TSDeclareMethod", {
      visitor: ["decorators", "key", "typeParameters", "params", "returnType"],
      fields: Object.assign({}, (0, _core.classMethodOrDeclareMethodCommon)(), tSFunctionTypeAnnotationCommon())
    });
    defineType("TSQualifiedName", {
      aliases: ["TSEntityName"],
      visitor: ["left", "right"],
      fields: {
        left: (0, _utils.validateType)("TSEntityName"),
        right: (0, _utils.validateType)("Identifier")
      }
    });
    var signatureDeclarationCommon = () => ({
      typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
      ["parameters"]: (0, _utils.validateArrayOfType)(["Identifier", "RestElement"]),
      ["typeAnnotation"]: (0, _utils.validateOptionalType)("TSTypeAnnotation")
    });
    var callConstructSignatureDeclaration = {
      aliases: ["TSTypeElement"],
      visitor: ["typeParameters", "parameters", "typeAnnotation"],
      fields: signatureDeclarationCommon()
    };
    defineType("TSCallSignatureDeclaration", callConstructSignatureDeclaration);
    defineType("TSConstructSignatureDeclaration", callConstructSignatureDeclaration);
    var namedTypeElementCommon = () => ({
      key: (0, _utils.validateType)("Expression"),
      computed: {
        default: false
      },
      optional: (0, _utils.validateOptional)(bool)
    });
    defineType("TSPropertySignature", {
      aliases: ["TSTypeElement"],
      visitor: ["key", "typeAnnotation", "initializer"],
      fields: Object.assign({}, namedTypeElementCommon(), {
        readonly: (0, _utils.validateOptional)(bool),
        typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation"),
        initializer: (0, _utils.validateOptionalType)("Expression"),
        kind: {
          validate: (0, _utils.assertOneOf)("get", "set")
        }
      })
    });
    defineType("TSMethodSignature", {
      aliases: ["TSTypeElement"],
      visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
      fields: Object.assign({}, signatureDeclarationCommon(), namedTypeElementCommon(), {
        kind: {
          validate: (0, _utils.assertOneOf)("method", "get", "set")
        }
      })
    });
    defineType("TSIndexSignature", {
      aliases: ["TSTypeElement"],
      visitor: ["parameters", "typeAnnotation"],
      fields: {
        readonly: (0, _utils.validateOptional)(bool),
        static: (0, _utils.validateOptional)(bool),
        parameters: (0, _utils.validateArrayOfType)("Identifier"),
        typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation")
      }
    });
    var tsKeywordTypes = ["TSAnyKeyword", "TSBooleanKeyword", "TSBigIntKeyword", "TSIntrinsicKeyword", "TSNeverKeyword", "TSNullKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSUndefinedKeyword", "TSUnknownKeyword", "TSVoidKeyword"];
    for (const type of tsKeywordTypes) {
      defineType(type, {
        aliases: ["TSType", "TSBaseType"],
        visitor: [],
        fields: {}
      });
    }
    defineType("TSThisType", {
      aliases: ["TSType", "TSBaseType"],
      visitor: [],
      fields: {}
    });
    var fnOrCtrBase = {
      aliases: ["TSType"],
      visitor: ["typeParameters", "parameters", "typeAnnotation"]
    };
    defineType("TSFunctionType", Object.assign({}, fnOrCtrBase, {
      fields: signatureDeclarationCommon()
    }));
    defineType("TSConstructorType", Object.assign({}, fnOrCtrBase, {
      fields: Object.assign({}, signatureDeclarationCommon(), {
        abstract: (0, _utils.validateOptional)(bool)
      })
    }));
    defineType("TSTypeReference", {
      aliases: ["TSType"],
      visitor: ["typeName", "typeParameters"],
      fields: {
        typeName: (0, _utils.validateType)("TSEntityName"),
        typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
      }
    });
    defineType("TSTypePredicate", {
      aliases: ["TSType"],
      visitor: ["parameterName", "typeAnnotation"],
      builder: ["parameterName", "typeAnnotation", "asserts"],
      fields: {
        parameterName: (0, _utils.validateType)(["Identifier", "TSThisType"]),
        typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation"),
        asserts: (0, _utils.validateOptional)(bool)
      }
    });
    defineType("TSTypeQuery", {
      aliases: ["TSType"],
      visitor: ["exprName", "typeParameters"],
      fields: {
        exprName: (0, _utils.validateType)(["TSEntityName", "TSImportType"]),
        typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
      }
    });
    defineType("TSTypeLiteral", {
      aliases: ["TSType"],
      visitor: ["members"],
      fields: {
        members: (0, _utils.validateArrayOfType)("TSTypeElement")
      }
    });
    defineType("TSArrayType", {
      aliases: ["TSType"],
      visitor: ["elementType"],
      fields: {
        elementType: (0, _utils.validateType)("TSType")
      }
    });
    defineType("TSTupleType", {
      aliases: ["TSType"],
      visitor: ["elementTypes"],
      fields: {
        elementTypes: (0, _utils.validateArrayOfType)(["TSType", "TSNamedTupleMember"])
      }
    });
    defineType("TSOptionalType", {
      aliases: ["TSType"],
      visitor: ["typeAnnotation"],
      fields: {
        typeAnnotation: (0, _utils.validateType)("TSType")
      }
    });
    defineType("TSRestType", {
      aliases: ["TSType"],
      visitor: ["typeAnnotation"],
      fields: {
        typeAnnotation: (0, _utils.validateType)("TSType")
      }
    });
    defineType("TSNamedTupleMember", {
      visitor: ["label", "elementType"],
      builder: ["label", "elementType", "optional"],
      fields: {
        label: (0, _utils.validateType)("Identifier"),
        optional: {
          validate: bool,
          default: false
        },
        elementType: (0, _utils.validateType)("TSType")
      }
    });
    var unionOrIntersection = {
      aliases: ["TSType"],
      visitor: ["types"],
      fields: {
        types: (0, _utils.validateArrayOfType)("TSType")
      }
    };
    defineType("TSUnionType", unionOrIntersection);
    defineType("TSIntersectionType", unionOrIntersection);
    defineType("TSConditionalType", {
      aliases: ["TSType"],
      visitor: ["checkType", "extendsType", "trueType", "falseType"],
      fields: {
        checkType: (0, _utils.validateType)("TSType"),
        extendsType: (0, _utils.validateType)("TSType"),
        trueType: (0, _utils.validateType)("TSType"),
        falseType: (0, _utils.validateType)("TSType")
      }
    });
    defineType("TSInferType", {
      aliases: ["TSType"],
      visitor: ["typeParameter"],
      fields: {
        typeParameter: (0, _utils.validateType)("TSTypeParameter")
      }
    });
    defineType("TSParenthesizedType", {
      aliases: ["TSType"],
      visitor: ["typeAnnotation"],
      fields: {
        typeAnnotation: (0, _utils.validateType)("TSType")
      }
    });
    defineType("TSTypeOperator", {
      aliases: ["TSType"],
      visitor: ["typeAnnotation"],
      fields: {
        operator: (0, _utils.validate)((0, _utils.assertValueType)("string")),
        typeAnnotation: (0, _utils.validateType)("TSType")
      }
    });
    defineType("TSIndexedAccessType", {
      aliases: ["TSType"],
      visitor: ["objectType", "indexType"],
      fields: {
        objectType: (0, _utils.validateType)("TSType"),
        indexType: (0, _utils.validateType)("TSType")
      }
    });
    defineType("TSMappedType", {
      aliases: ["TSType"],
      visitor: ["typeParameter", "typeAnnotation", "nameType"],
      fields: {
        readonly: (0, _utils.validateOptional)((0, _utils.assertOneOf)(true, false, "+", "-")),
        typeParameter: (0, _utils.validateType)("TSTypeParameter"),
        optional: (0, _utils.validateOptional)((0, _utils.assertOneOf)(true, false, "+", "-")),
        typeAnnotation: (0, _utils.validateOptionalType)("TSType"),
        nameType: (0, _utils.validateOptionalType)("TSType")
      }
    });
    defineType("TSLiteralType", {
      aliases: ["TSType", "TSBaseType"],
      visitor: ["literal"],
      fields: {
        literal: {
          validate: function() {
            const unaryExpression = (0, _utils.assertNodeType)("NumericLiteral", "BigIntLiteral");
            const unaryOperator = (0, _utils.assertOneOf)("-");
            const literal = (0, _utils.assertNodeType)("NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "TemplateLiteral");
            function validator(parent, key, node) {
              if ((0, _is.default)("UnaryExpression", node)) {
                unaryOperator(node, "operator", node.operator);
                unaryExpression(node, "argument", node.argument);
              } else {
                literal(parent, key, node);
              }
            }
            validator.oneOfNodeTypes = ["NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "TemplateLiteral", "UnaryExpression"];
            return validator;
          }()
        }
      }
    });
    defineType("TSExpressionWithTypeArguments", {
      aliases: ["TSType"],
      visitor: ["expression", "typeParameters"],
      fields: {
        expression: (0, _utils.validateType)("TSEntityName"),
        typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
      }
    });
    defineType("TSInterfaceDeclaration", {
      aliases: ["Statement", "Declaration"],
      visitor: ["id", "typeParameters", "extends", "body"],
      fields: {
        declare: (0, _utils.validateOptional)(bool),
        id: (0, _utils.validateType)("Identifier"),
        typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
        extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("TSExpressionWithTypeArguments")),
        body: (0, _utils.validateType)("TSInterfaceBody")
      }
    });
    defineType("TSInterfaceBody", {
      visitor: ["body"],
      fields: {
        body: (0, _utils.validateArrayOfType)("TSTypeElement")
      }
    });
    defineType("TSTypeAliasDeclaration", {
      aliases: ["Statement", "Declaration"],
      visitor: ["id", "typeParameters", "typeAnnotation"],
      fields: {
        declare: (0, _utils.validateOptional)(bool),
        id: (0, _utils.validateType)("Identifier"),
        typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
        typeAnnotation: (0, _utils.validateType)("TSType")
      }
    });
    defineType("TSInstantiationExpression", {
      aliases: ["Expression"],
      visitor: ["expression", "typeParameters"],
      fields: {
        expression: (0, _utils.validateType)("Expression"),
        typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
      }
    });
    defineType("TSAsExpression", {
      aliases: ["Expression", "LVal", "PatternLike"],
      visitor: ["expression", "typeAnnotation"],
      fields: {
        expression: (0, _utils.validateType)("Expression"),
        typeAnnotation: (0, _utils.validateType)("TSType")
      }
    });
    defineType("TSTypeAssertion", {
      aliases: ["Expression", "LVal", "PatternLike"],
      visitor: ["typeAnnotation", "expression"],
      fields: {
        typeAnnotation: (0, _utils.validateType)("TSType"),
        expression: (0, _utils.validateType)("Expression")
      }
    });
    defineType("TSEnumDeclaration", {
      aliases: ["Statement", "Declaration"],
      visitor: ["id", "members"],
      fields: {
        declare: (0, _utils.validateOptional)(bool),
        const: (0, _utils.validateOptional)(bool),
        id: (0, _utils.validateType)("Identifier"),
        members: (0, _utils.validateArrayOfType)("TSEnumMember"),
        initializer: (0, _utils.validateOptionalType)("Expression")
      }
    });
    defineType("TSEnumMember", {
      visitor: ["id", "initializer"],
      fields: {
        id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
        initializer: (0, _utils.validateOptionalType)("Expression")
      }
    });
    defineType("TSModuleDeclaration", {
      aliases: ["Statement", "Declaration"],
      visitor: ["id", "body"],
      fields: {
        declare: (0, _utils.validateOptional)(bool),
        global: (0, _utils.validateOptional)(bool),
        id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
        body: (0, _utils.validateType)(["TSModuleBlock", "TSModuleDeclaration"])
      }
    });
    defineType("TSModuleBlock", {
      aliases: ["Scopable", "Block", "BlockParent"],
      visitor: ["body"],
      fields: {
        body: (0, _utils.validateArrayOfType)("Statement")
      }
    });
    defineType("TSImportType", {
      aliases: ["TSType"],
      visitor: ["argument", "qualifier", "typeParameters"],
      fields: {
        argument: (0, _utils.validateType)("StringLiteral"),
        qualifier: (0, _utils.validateOptionalType)("TSEntityName"),
        typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
      }
    });
    defineType("TSImportEqualsDeclaration", {
      aliases: ["Statement"],
      visitor: ["id", "moduleReference"],
      fields: {
        isExport: (0, _utils.validate)(bool),
        id: (0, _utils.validateType)("Identifier"),
        moduleReference: (0, _utils.validateType)(["TSEntityName", "TSExternalModuleReference"]),
        importKind: {
          validate: (0, _utils.assertOneOf)("type", "value"),
          optional: true
        }
      }
    });
    defineType("TSExternalModuleReference", {
      visitor: ["expression"],
      fields: {
        expression: (0, _utils.validateType)("StringLiteral")
      }
    });
    defineType("TSNonNullExpression", {
      aliases: ["Expression", "LVal", "PatternLike"],
      visitor: ["expression"],
      fields: {
        expression: (0, _utils.validateType)("Expression")
      }
    });
    defineType("TSExportAssignment", {
      aliases: ["Statement"],
      visitor: ["expression"],
      fields: {
        expression: (0, _utils.validateType)("Expression")
      }
    });
    defineType("TSNamespaceExportDeclaration", {
      aliases: ["Statement"],
      visitor: ["id"],
      fields: {
        id: (0, _utils.validateType)("Identifier")
      }
    });
    defineType("TSTypeAnnotation", {
      visitor: ["typeAnnotation"],
      fields: {
        typeAnnotation: {
          validate: (0, _utils.assertNodeType)("TSType")
        }
      }
    });
    defineType("TSTypeParameterInstantiation", {
      visitor: ["params"],
      fields: {
        params: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSType")))
        }
      }
    });
    defineType("TSTypeParameterDeclaration", {
      visitor: ["params"],
      fields: {
        params: {
          validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSTypeParameter")))
        }
      }
    });
    defineType("TSTypeParameter", {
      builder: ["constraint", "default", "name"],
      visitor: ["constraint", "default"],
      fields: {
        name: {
          validate: (0, _utils.assertValueType)("string")
        },
        in: {
          validate: (0, _utils.assertValueType)("boolean"),
          optional: true
        },
        out: {
          validate: (0, _utils.assertValueType)("boolean"),
          optional: true
        },
        constraint: {
          validate: (0, _utils.assertNodeType)("TSType"),
          optional: true
        },
        default: {
          validate: (0, _utils.assertNodeType)("TSType"),
          optional: true
        }
      }
    });
  }
});

// node_modules/@babel/types/lib/definitions/index.js
var require_definitions = __commonJS({
  "node_modules/@babel/types/lib/definitions/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "ALIAS_KEYS", {
      enumerable: true,
      get: function() {
        return _utils.ALIAS_KEYS;
      }
    });
    Object.defineProperty(exports, "BUILDER_KEYS", {
      enumerable: true,
      get: function() {
        return _utils.BUILDER_KEYS;
      }
    });
    Object.defineProperty(exports, "DEPRECATED_KEYS", {
      enumerable: true,
      get: function() {
        return _utils.DEPRECATED_KEYS;
      }
    });
    Object.defineProperty(exports, "FLIPPED_ALIAS_KEYS", {
      enumerable: true,
      get: function() {
        return _utils.FLIPPED_ALIAS_KEYS;
      }
    });
    Object.defineProperty(exports, "NODE_FIELDS", {
      enumerable: true,
      get: function() {
        return _utils.NODE_FIELDS;
      }
    });
    Object.defineProperty(exports, "NODE_PARENT_VALIDATIONS", {
      enumerable: true,
      get: function() {
        return _utils.NODE_PARENT_VALIDATIONS;
      }
    });
    Object.defineProperty(exports, "PLACEHOLDERS", {
      enumerable: true,
      get: function() {
        return _placeholders.PLACEHOLDERS;
      }
    });
    Object.defineProperty(exports, "PLACEHOLDERS_ALIAS", {
      enumerable: true,
      get: function() {
        return _placeholders.PLACEHOLDERS_ALIAS;
      }
    });
    Object.defineProperty(exports, "PLACEHOLDERS_FLIPPED_ALIAS", {
      enumerable: true,
      get: function() {
        return _placeholders.PLACEHOLDERS_FLIPPED_ALIAS;
      }
    });
    exports.TYPES = void 0;
    Object.defineProperty(exports, "VISITOR_KEYS", {
      enumerable: true,
      get: function() {
        return _utils.VISITOR_KEYS;
      }
    });
    var _toFastProperties = require_to_fast_properties();
    require_core();
    require_flow();
    require_jsx();
    require_misc();
    require_experimental();
    require_typescript();
    var _utils = require_utils();
    var _placeholders = require_placeholders();
    _toFastProperties(_utils.VISITOR_KEYS);
    _toFastProperties(_utils.ALIAS_KEYS);
    _toFastProperties(_utils.FLIPPED_ALIAS_KEYS);
    _toFastProperties(_utils.NODE_FIELDS);
    _toFastProperties(_utils.BUILDER_KEYS);
    _toFastProperties(_utils.DEPRECATED_KEYS);
    _toFastProperties(_placeholders.PLACEHOLDERS_ALIAS);
    _toFastProperties(_placeholders.PLACEHOLDERS_FLIPPED_ALIAS);
    var TYPES = [].concat(Object.keys(_utils.VISITOR_KEYS), Object.keys(_utils.FLIPPED_ALIAS_KEYS), Object.keys(_utils.DEPRECATED_KEYS));
    exports.TYPES = TYPES;
  }
});

// node_modules/@babel/types/lib/validators/validate.js
var require_validate = __commonJS({
  "node_modules/@babel/types/lib/validators/validate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = validate;
    exports.validateChild = validateChild;
    exports.validateField = validateField;
    var _definitions = require_definitions();
    function validate(node, key, val) {
      if (!node)
        return;
      const fields = _definitions.NODE_FIELDS[node.type];
      if (!fields)
        return;
      const field = fields[key];
      validateField(node, key, val, field);
      validateChild(node, key, val);
    }
    function validateField(node, key, val, field) {
      if (!(field != null && field.validate))
        return;
      if (field.optional && val == null)
        return;
      field.validate(node, key, val);
    }
    function validateChild(node, key, val) {
      if (val == null)
        return;
      const validate2 = _definitions.NODE_PARENT_VALIDATIONS[val.type];
      if (!validate2)
        return;
      validate2(node, key, val);
    }
  }
});

// node_modules/@babel/types/lib/builders/validateNode.js
var require_validateNode = __commonJS({
  "node_modules/@babel/types/lib/builders/validateNode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = validateNode;
    var _validate = require_validate();
    var _ = require_lib3();
    function validateNode(node) {
      const keys = _.BUILDER_KEYS[node.type];
      for (const key of keys) {
        (0, _validate.default)(node, key, node[key]);
      }
      return node;
    }
  }
});

// node_modules/@babel/types/lib/builders/generated/index.js
var require_generated2 = __commonJS({
  "node_modules/@babel/types/lib/builders/generated/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.anyTypeAnnotation = anyTypeAnnotation;
    exports.argumentPlaceholder = argumentPlaceholder;
    exports.arrayExpression = arrayExpression;
    exports.arrayPattern = arrayPattern;
    exports.arrayTypeAnnotation = arrayTypeAnnotation;
    exports.arrowFunctionExpression = arrowFunctionExpression2;
    exports.assignmentExpression = assignmentExpression;
    exports.assignmentPattern = assignmentPattern;
    exports.awaitExpression = awaitExpression;
    exports.bigIntLiteral = bigIntLiteral;
    exports.binaryExpression = binaryExpression;
    exports.bindExpression = bindExpression;
    exports.blockStatement = blockStatement;
    exports.booleanLiteral = booleanLiteral;
    exports.booleanLiteralTypeAnnotation = booleanLiteralTypeAnnotation;
    exports.booleanTypeAnnotation = booleanTypeAnnotation;
    exports.breakStatement = breakStatement;
    exports.callExpression = callExpression;
    exports.catchClause = catchClause;
    exports.classAccessorProperty = classAccessorProperty;
    exports.classBody = classBody;
    exports.classDeclaration = classDeclaration;
    exports.classExpression = classExpression;
    exports.classImplements = classImplements;
    exports.classMethod = classMethod;
    exports.classPrivateMethod = classPrivateMethod;
    exports.classPrivateProperty = classPrivateProperty;
    exports.classProperty = classProperty;
    exports.conditionalExpression = conditionalExpression;
    exports.continueStatement = continueStatement;
    exports.debuggerStatement = debuggerStatement;
    exports.decimalLiteral = decimalLiteral;
    exports.declareClass = declareClass;
    exports.declareExportAllDeclaration = declareExportAllDeclaration;
    exports.declareExportDeclaration = declareExportDeclaration;
    exports.declareFunction = declareFunction;
    exports.declareInterface = declareInterface;
    exports.declareModule = declareModule;
    exports.declareModuleExports = declareModuleExports;
    exports.declareOpaqueType = declareOpaqueType;
    exports.declareTypeAlias = declareTypeAlias;
    exports.declareVariable = declareVariable;
    exports.declaredPredicate = declaredPredicate;
    exports.decorator = decorator;
    exports.directive = directive;
    exports.directiveLiteral = directiveLiteral;
    exports.doExpression = doExpression;
    exports.doWhileStatement = doWhileStatement;
    exports.emptyStatement = emptyStatement;
    exports.emptyTypeAnnotation = emptyTypeAnnotation;
    exports.enumBooleanBody = enumBooleanBody;
    exports.enumBooleanMember = enumBooleanMember;
    exports.enumDeclaration = enumDeclaration;
    exports.enumDefaultedMember = enumDefaultedMember;
    exports.enumNumberBody = enumNumberBody;
    exports.enumNumberMember = enumNumberMember;
    exports.enumStringBody = enumStringBody;
    exports.enumStringMember = enumStringMember;
    exports.enumSymbolBody = enumSymbolBody;
    exports.existsTypeAnnotation = existsTypeAnnotation;
    exports.exportAllDeclaration = exportAllDeclaration;
    exports.exportDefaultDeclaration = exportDefaultDeclaration;
    exports.exportDefaultSpecifier = exportDefaultSpecifier;
    exports.exportNamedDeclaration = exportNamedDeclaration;
    exports.exportNamespaceSpecifier = exportNamespaceSpecifier;
    exports.exportSpecifier = exportSpecifier;
    exports.expressionStatement = expressionStatement;
    exports.file = file;
    exports.forInStatement = forInStatement;
    exports.forOfStatement = forOfStatement;
    exports.forStatement = forStatement;
    exports.functionDeclaration = functionDeclaration;
    exports.functionExpression = functionExpression;
    exports.functionTypeAnnotation = functionTypeAnnotation;
    exports.functionTypeParam = functionTypeParam;
    exports.genericTypeAnnotation = genericTypeAnnotation;
    exports.identifier = identifier;
    exports.ifStatement = ifStatement;
    exports.import = _import;
    exports.importAttribute = importAttribute;
    exports.importDeclaration = importDeclaration;
    exports.importDefaultSpecifier = importDefaultSpecifier;
    exports.importNamespaceSpecifier = importNamespaceSpecifier;
    exports.importSpecifier = importSpecifier;
    exports.indexedAccessType = indexedAccessType;
    exports.inferredPredicate = inferredPredicate;
    exports.interfaceDeclaration = interfaceDeclaration;
    exports.interfaceExtends = interfaceExtends;
    exports.interfaceTypeAnnotation = interfaceTypeAnnotation;
    exports.interpreterDirective = interpreterDirective;
    exports.intersectionTypeAnnotation = intersectionTypeAnnotation;
    exports.jSXAttribute = exports.jsxAttribute = jsxAttribute;
    exports.jSXClosingElement = exports.jsxClosingElement = jsxClosingElement;
    exports.jSXClosingFragment = exports.jsxClosingFragment = jsxClosingFragment;
    exports.jSXElement = exports.jsxElement = jsxElement;
    exports.jSXEmptyExpression = exports.jsxEmptyExpression = jsxEmptyExpression;
    exports.jSXExpressionContainer = exports.jsxExpressionContainer = jsxExpressionContainer;
    exports.jSXFragment = exports.jsxFragment = jsxFragment;
    exports.jSXIdentifier = exports.jsxIdentifier = jsxIdentifier;
    exports.jSXMemberExpression = exports.jsxMemberExpression = jsxMemberExpression;
    exports.jSXNamespacedName = exports.jsxNamespacedName = jsxNamespacedName;
    exports.jSXOpeningElement = exports.jsxOpeningElement = jsxOpeningElement;
    exports.jSXOpeningFragment = exports.jsxOpeningFragment = jsxOpeningFragment;
    exports.jSXSpreadAttribute = exports.jsxSpreadAttribute = jsxSpreadAttribute;
    exports.jSXSpreadChild = exports.jsxSpreadChild = jsxSpreadChild;
    exports.jSXText = exports.jsxText = jsxText;
    exports.labeledStatement = labeledStatement;
    exports.logicalExpression = logicalExpression;
    exports.memberExpression = memberExpression;
    exports.metaProperty = metaProperty;
    exports.mixedTypeAnnotation = mixedTypeAnnotation;
    exports.moduleExpression = moduleExpression;
    exports.newExpression = newExpression;
    exports.noop = noop;
    exports.nullLiteral = nullLiteral;
    exports.nullLiteralTypeAnnotation = nullLiteralTypeAnnotation;
    exports.nullableTypeAnnotation = nullableTypeAnnotation;
    exports.numberLiteral = NumberLiteral;
    exports.numberLiteralTypeAnnotation = numberLiteralTypeAnnotation;
    exports.numberTypeAnnotation = numberTypeAnnotation;
    exports.numericLiteral = numericLiteral;
    exports.objectExpression = objectExpression;
    exports.objectMethod = objectMethod;
    exports.objectPattern = objectPattern;
    exports.objectProperty = objectProperty;
    exports.objectTypeAnnotation = objectTypeAnnotation;
    exports.objectTypeCallProperty = objectTypeCallProperty;
    exports.objectTypeIndexer = objectTypeIndexer;
    exports.objectTypeInternalSlot = objectTypeInternalSlot;
    exports.objectTypeProperty = objectTypeProperty;
    exports.objectTypeSpreadProperty = objectTypeSpreadProperty;
    exports.opaqueType = opaqueType;
    exports.optionalCallExpression = optionalCallExpression;
    exports.optionalIndexedAccessType = optionalIndexedAccessType;
    exports.optionalMemberExpression = optionalMemberExpression;
    exports.parenthesizedExpression = parenthesizedExpression;
    exports.pipelineBareFunction = pipelineBareFunction;
    exports.pipelinePrimaryTopicReference = pipelinePrimaryTopicReference;
    exports.pipelineTopicExpression = pipelineTopicExpression;
    exports.placeholder = placeholder;
    exports.privateName = privateName;
    exports.program = program;
    exports.qualifiedTypeIdentifier = qualifiedTypeIdentifier;
    exports.recordExpression = recordExpression;
    exports.regExpLiteral = regExpLiteral;
    exports.regexLiteral = RegexLiteral;
    exports.restElement = restElement;
    exports.restProperty = RestProperty;
    exports.returnStatement = returnStatement;
    exports.sequenceExpression = sequenceExpression;
    exports.spreadElement = spreadElement;
    exports.spreadProperty = SpreadProperty;
    exports.staticBlock = staticBlock;
    exports.stringLiteral = stringLiteral;
    exports.stringLiteralTypeAnnotation = stringLiteralTypeAnnotation;
    exports.stringTypeAnnotation = stringTypeAnnotation;
    exports.super = _super;
    exports.switchCase = switchCase;
    exports.switchStatement = switchStatement;
    exports.symbolTypeAnnotation = symbolTypeAnnotation;
    exports.taggedTemplateExpression = taggedTemplateExpression;
    exports.templateElement = templateElement;
    exports.templateLiteral = templateLiteral;
    exports.thisExpression = thisExpression;
    exports.thisTypeAnnotation = thisTypeAnnotation;
    exports.throwStatement = throwStatement;
    exports.topicReference = topicReference;
    exports.tryStatement = tryStatement;
    exports.tSAnyKeyword = exports.tsAnyKeyword = tsAnyKeyword;
    exports.tSArrayType = exports.tsArrayType = tsArrayType;
    exports.tSAsExpression = exports.tsAsExpression = tsAsExpression;
    exports.tSBigIntKeyword = exports.tsBigIntKeyword = tsBigIntKeyword;
    exports.tSBooleanKeyword = exports.tsBooleanKeyword = tsBooleanKeyword;
    exports.tSCallSignatureDeclaration = exports.tsCallSignatureDeclaration = tsCallSignatureDeclaration;
    exports.tSConditionalType = exports.tsConditionalType = tsConditionalType;
    exports.tSConstructSignatureDeclaration = exports.tsConstructSignatureDeclaration = tsConstructSignatureDeclaration;
    exports.tSConstructorType = exports.tsConstructorType = tsConstructorType;
    exports.tSDeclareFunction = exports.tsDeclareFunction = tsDeclareFunction;
    exports.tSDeclareMethod = exports.tsDeclareMethod = tsDeclareMethod;
    exports.tSEnumDeclaration = exports.tsEnumDeclaration = tsEnumDeclaration;
    exports.tSEnumMember = exports.tsEnumMember = tsEnumMember;
    exports.tSExportAssignment = exports.tsExportAssignment = tsExportAssignment;
    exports.tSExpressionWithTypeArguments = exports.tsExpressionWithTypeArguments = tsExpressionWithTypeArguments;
    exports.tSExternalModuleReference = exports.tsExternalModuleReference = tsExternalModuleReference;
    exports.tSFunctionType = exports.tsFunctionType = tsFunctionType;
    exports.tSImportEqualsDeclaration = exports.tsImportEqualsDeclaration = tsImportEqualsDeclaration;
    exports.tSImportType = exports.tsImportType = tsImportType;
    exports.tSIndexSignature = exports.tsIndexSignature = tsIndexSignature;
    exports.tSIndexedAccessType = exports.tsIndexedAccessType = tsIndexedAccessType;
    exports.tSInferType = exports.tsInferType = tsInferType;
    exports.tSInstantiationExpression = exports.tsInstantiationExpression = tsInstantiationExpression;
    exports.tSInterfaceBody = exports.tsInterfaceBody = tsInterfaceBody;
    exports.tSInterfaceDeclaration = exports.tsInterfaceDeclaration = tsInterfaceDeclaration;
    exports.tSIntersectionType = exports.tsIntersectionType = tsIntersectionType;
    exports.tSIntrinsicKeyword = exports.tsIntrinsicKeyword = tsIntrinsicKeyword;
    exports.tSLiteralType = exports.tsLiteralType = tsLiteralType;
    exports.tSMappedType = exports.tsMappedType = tsMappedType;
    exports.tSMethodSignature = exports.tsMethodSignature = tsMethodSignature;
    exports.tSModuleBlock = exports.tsModuleBlock = tsModuleBlock;
    exports.tSModuleDeclaration = exports.tsModuleDeclaration = tsModuleDeclaration;
    exports.tSNamedTupleMember = exports.tsNamedTupleMember = tsNamedTupleMember;
    exports.tSNamespaceExportDeclaration = exports.tsNamespaceExportDeclaration = tsNamespaceExportDeclaration;
    exports.tSNeverKeyword = exports.tsNeverKeyword = tsNeverKeyword;
    exports.tSNonNullExpression = exports.tsNonNullExpression = tsNonNullExpression;
    exports.tSNullKeyword = exports.tsNullKeyword = tsNullKeyword;
    exports.tSNumberKeyword = exports.tsNumberKeyword = tsNumberKeyword;
    exports.tSObjectKeyword = exports.tsObjectKeyword = tsObjectKeyword;
    exports.tSOptionalType = exports.tsOptionalType = tsOptionalType;
    exports.tSParameterProperty = exports.tsParameterProperty = tsParameterProperty;
    exports.tSParenthesizedType = exports.tsParenthesizedType = tsParenthesizedType;
    exports.tSPropertySignature = exports.tsPropertySignature = tsPropertySignature;
    exports.tSQualifiedName = exports.tsQualifiedName = tsQualifiedName;
    exports.tSRestType = exports.tsRestType = tsRestType;
    exports.tSStringKeyword = exports.tsStringKeyword = tsStringKeyword;
    exports.tSSymbolKeyword = exports.tsSymbolKeyword = tsSymbolKeyword;
    exports.tSThisType = exports.tsThisType = tsThisType;
    exports.tSTupleType = exports.tsTupleType = tsTupleType;
    exports.tSTypeAliasDeclaration = exports.tsTypeAliasDeclaration = tsTypeAliasDeclaration;
    exports.tSTypeAnnotation = exports.tsTypeAnnotation = tsTypeAnnotation;
    exports.tSTypeAssertion = exports.tsTypeAssertion = tsTypeAssertion;
    exports.tSTypeLiteral = exports.tsTypeLiteral = tsTypeLiteral;
    exports.tSTypeOperator = exports.tsTypeOperator = tsTypeOperator;
    exports.tSTypeParameter = exports.tsTypeParameter = tsTypeParameter;
    exports.tSTypeParameterDeclaration = exports.tsTypeParameterDeclaration = tsTypeParameterDeclaration;
    exports.tSTypeParameterInstantiation = exports.tsTypeParameterInstantiation = tsTypeParameterInstantiation;
    exports.tSTypePredicate = exports.tsTypePredicate = tsTypePredicate;
    exports.tSTypeQuery = exports.tsTypeQuery = tsTypeQuery;
    exports.tSTypeReference = exports.tsTypeReference = tsTypeReference;
    exports.tSUndefinedKeyword = exports.tsUndefinedKeyword = tsUndefinedKeyword;
    exports.tSUnionType = exports.tsUnionType = tsUnionType;
    exports.tSUnknownKeyword = exports.tsUnknownKeyword = tsUnknownKeyword;
    exports.tSVoidKeyword = exports.tsVoidKeyword = tsVoidKeyword;
    exports.tupleExpression = tupleExpression;
    exports.tupleTypeAnnotation = tupleTypeAnnotation;
    exports.typeAlias = typeAlias;
    exports.typeAnnotation = typeAnnotation;
    exports.typeCastExpression = typeCastExpression;
    exports.typeParameter = typeParameter;
    exports.typeParameterDeclaration = typeParameterDeclaration;
    exports.typeParameterInstantiation = typeParameterInstantiation;
    exports.typeofTypeAnnotation = typeofTypeAnnotation;
    exports.unaryExpression = unaryExpression;
    exports.unionTypeAnnotation = unionTypeAnnotation;
    exports.updateExpression = updateExpression;
    exports.v8IntrinsicIdentifier = v8IntrinsicIdentifier;
    exports.variableDeclaration = variableDeclaration;
    exports.variableDeclarator = variableDeclarator;
    exports.variance = variance;
    exports.voidTypeAnnotation = voidTypeAnnotation;
    exports.whileStatement = whileStatement;
    exports.withStatement = withStatement;
    exports.yieldExpression = yieldExpression;
    var _validateNode = require_validateNode();
    function arrayExpression(elements = []) {
      return (0, _validateNode.default)({
        type: "ArrayExpression",
        elements
      });
    }
    function assignmentExpression(operator, left, right) {
      return (0, _validateNode.default)({
        type: "AssignmentExpression",
        operator,
        left,
        right
      });
    }
    function binaryExpression(operator, left, right) {
      return (0, _validateNode.default)({
        type: "BinaryExpression",
        operator,
        left,
        right
      });
    }
    function interpreterDirective(value) {
      return (0, _validateNode.default)({
        type: "InterpreterDirective",
        value
      });
    }
    function directive(value) {
      return (0, _validateNode.default)({
        type: "Directive",
        value
      });
    }
    function directiveLiteral(value) {
      return (0, _validateNode.default)({
        type: "DirectiveLiteral",
        value
      });
    }
    function blockStatement(body, directives = []) {
      return (0, _validateNode.default)({
        type: "BlockStatement",
        body,
        directives
      });
    }
    function breakStatement(label = null) {
      return (0, _validateNode.default)({
        type: "BreakStatement",
        label
      });
    }
    function callExpression(callee, _arguments) {
      return (0, _validateNode.default)({
        type: "CallExpression",
        callee,
        arguments: _arguments
      });
    }
    function catchClause(param = null, body) {
      return (0, _validateNode.default)({
        type: "CatchClause",
        param,
        body
      });
    }
    function conditionalExpression(test, consequent, alternate) {
      return (0, _validateNode.default)({
        type: "ConditionalExpression",
        test,
        consequent,
        alternate
      });
    }
    function continueStatement(label = null) {
      return (0, _validateNode.default)({
        type: "ContinueStatement",
        label
      });
    }
    function debuggerStatement() {
      return {
        type: "DebuggerStatement"
      };
    }
    function doWhileStatement(test, body) {
      return (0, _validateNode.default)({
        type: "DoWhileStatement",
        test,
        body
      });
    }
    function emptyStatement() {
      return {
        type: "EmptyStatement"
      };
    }
    function expressionStatement(expression) {
      return (0, _validateNode.default)({
        type: "ExpressionStatement",
        expression
      });
    }
    function file(program2, comments = null, tokens = null) {
      return (0, _validateNode.default)({
        type: "File",
        program: program2,
        comments,
        tokens
      });
    }
    function forInStatement(left, right, body) {
      return (0, _validateNode.default)({
        type: "ForInStatement",
        left,
        right,
        body
      });
    }
    function forStatement(init2 = null, test = null, update = null, body) {
      return (0, _validateNode.default)({
        type: "ForStatement",
        init: init2,
        test,
        update,
        body
      });
    }
    function functionDeclaration(id = null, params, body, generator = false, async = false) {
      return (0, _validateNode.default)({
        type: "FunctionDeclaration",
        id,
        params,
        body,
        generator,
        async
      });
    }
    function functionExpression(id = null, params, body, generator = false, async = false) {
      return (0, _validateNode.default)({
        type: "FunctionExpression",
        id,
        params,
        body,
        generator,
        async
      });
    }
    function identifier(name) {
      return (0, _validateNode.default)({
        type: "Identifier",
        name
      });
    }
    function ifStatement(test, consequent, alternate = null) {
      return (0, _validateNode.default)({
        type: "IfStatement",
        test,
        consequent,
        alternate
      });
    }
    function labeledStatement(label, body) {
      return (0, _validateNode.default)({
        type: "LabeledStatement",
        label,
        body
      });
    }
    function stringLiteral(value) {
      return (0, _validateNode.default)({
        type: "StringLiteral",
        value
      });
    }
    function numericLiteral(value) {
      return (0, _validateNode.default)({
        type: "NumericLiteral",
        value
      });
    }
    function nullLiteral() {
      return {
        type: "NullLiteral"
      };
    }
    function booleanLiteral(value) {
      return (0, _validateNode.default)({
        type: "BooleanLiteral",
        value
      });
    }
    function regExpLiteral(pattern, flags = "") {
      return (0, _validateNode.default)({
        type: "RegExpLiteral",
        pattern,
        flags
      });
    }
    function logicalExpression(operator, left, right) {
      return (0, _validateNode.default)({
        type: "LogicalExpression",
        operator,
        left,
        right
      });
    }
    function memberExpression(object, property, computed = false, optional = null) {
      return (0, _validateNode.default)({
        type: "MemberExpression",
        object,
        property,
        computed,
        optional
      });
    }
    function newExpression(callee, _arguments) {
      return (0, _validateNode.default)({
        type: "NewExpression",
        callee,
        arguments: _arguments
      });
    }
    function program(body, directives = [], sourceType = "script", interpreter = null) {
      return (0, _validateNode.default)({
        type: "Program",
        body,
        directives,
        sourceType,
        interpreter,
        sourceFile: null
      });
    }
    function objectExpression(properties) {
      return (0, _validateNode.default)({
        type: "ObjectExpression",
        properties
      });
    }
    function objectMethod(kind = "method", key, params, body, computed = false, generator = false, async = false) {
      return (0, _validateNode.default)({
        type: "ObjectMethod",
        kind,
        key,
        params,
        body,
        computed,
        generator,
        async
      });
    }
    function objectProperty(key, value, computed = false, shorthand = false, decorators = null) {
      return (0, _validateNode.default)({
        type: "ObjectProperty",
        key,
        value,
        computed,
        shorthand,
        decorators
      });
    }
    function restElement(argument) {
      return (0, _validateNode.default)({
        type: "RestElement",
        argument
      });
    }
    function returnStatement(argument = null) {
      return (0, _validateNode.default)({
        type: "ReturnStatement",
        argument
      });
    }
    function sequenceExpression(expressions) {
      return (0, _validateNode.default)({
        type: "SequenceExpression",
        expressions
      });
    }
    function parenthesizedExpression(expression) {
      return (0, _validateNode.default)({
        type: "ParenthesizedExpression",
        expression
      });
    }
    function switchCase(test = null, consequent) {
      return (0, _validateNode.default)({
        type: "SwitchCase",
        test,
        consequent
      });
    }
    function switchStatement(discriminant, cases) {
      return (0, _validateNode.default)({
        type: "SwitchStatement",
        discriminant,
        cases
      });
    }
    function thisExpression() {
      return {
        type: "ThisExpression"
      };
    }
    function throwStatement(argument) {
      return (0, _validateNode.default)({
        type: "ThrowStatement",
        argument
      });
    }
    function tryStatement(block, handler = null, finalizer = null) {
      return (0, _validateNode.default)({
        type: "TryStatement",
        block,
        handler,
        finalizer
      });
    }
    function unaryExpression(operator, argument, prefix = true) {
      return (0, _validateNode.default)({
        type: "UnaryExpression",
        operator,
        argument,
        prefix
      });
    }
    function updateExpression(operator, argument, prefix = false) {
      return (0, _validateNode.default)({
        type: "UpdateExpression",
        operator,
        argument,
        prefix
      });
    }
    function variableDeclaration(kind, declarations) {
      return (0, _validateNode.default)({
        type: "VariableDeclaration",
        kind,
        declarations
      });
    }
    function variableDeclarator(id, init2 = null) {
      return (0, _validateNode.default)({
        type: "VariableDeclarator",
        id,
        init: init2
      });
    }
    function whileStatement(test, body) {
      return (0, _validateNode.default)({
        type: "WhileStatement",
        test,
        body
      });
    }
    function withStatement(object, body) {
      return (0, _validateNode.default)({
        type: "WithStatement",
        object,
        body
      });
    }
    function assignmentPattern(left, right) {
      return (0, _validateNode.default)({
        type: "AssignmentPattern",
        left,
        right
      });
    }
    function arrayPattern(elements) {
      return (0, _validateNode.default)({
        type: "ArrayPattern",
        elements
      });
    }
    function arrowFunctionExpression2(params, body, async = false) {
      return (0, _validateNode.default)({
        type: "ArrowFunctionExpression",
        params,
        body,
        async,
        expression: null
      });
    }
    function classBody(body) {
      return (0, _validateNode.default)({
        type: "ClassBody",
        body
      });
    }
    function classExpression(id = null, superClass = null, body, decorators = null) {
      return (0, _validateNode.default)({
        type: "ClassExpression",
        id,
        superClass,
        body,
        decorators
      });
    }
    function classDeclaration(id, superClass = null, body, decorators = null) {
      return (0, _validateNode.default)({
        type: "ClassDeclaration",
        id,
        superClass,
        body,
        decorators
      });
    }
    function exportAllDeclaration(source) {
      return (0, _validateNode.default)({
        type: "ExportAllDeclaration",
        source
      });
    }
    function exportDefaultDeclaration(declaration) {
      return (0, _validateNode.default)({
        type: "ExportDefaultDeclaration",
        declaration
      });
    }
    function exportNamedDeclaration(declaration = null, specifiers = [], source = null) {
      return (0, _validateNode.default)({
        type: "ExportNamedDeclaration",
        declaration,
        specifiers,
        source
      });
    }
    function exportSpecifier(local, exported) {
      return (0, _validateNode.default)({
        type: "ExportSpecifier",
        local,
        exported
      });
    }
    function forOfStatement(left, right, body, _await = false) {
      return (0, _validateNode.default)({
        type: "ForOfStatement",
        left,
        right,
        body,
        await: _await
      });
    }
    function importDeclaration(specifiers, source) {
      return (0, _validateNode.default)({
        type: "ImportDeclaration",
        specifiers,
        source
      });
    }
    function importDefaultSpecifier(local) {
      return (0, _validateNode.default)({
        type: "ImportDefaultSpecifier",
        local
      });
    }
    function importNamespaceSpecifier(local) {
      return (0, _validateNode.default)({
        type: "ImportNamespaceSpecifier",
        local
      });
    }
    function importSpecifier(local, imported) {
      return (0, _validateNode.default)({
        type: "ImportSpecifier",
        local,
        imported
      });
    }
    function metaProperty(meta, property) {
      return (0, _validateNode.default)({
        type: "MetaProperty",
        meta,
        property
      });
    }
    function classMethod(kind = "method", key, params, body, computed = false, _static = false, generator = false, async = false) {
      return (0, _validateNode.default)({
        type: "ClassMethod",
        kind,
        key,
        params,
        body,
        computed,
        static: _static,
        generator,
        async
      });
    }
    function objectPattern(properties) {
      return (0, _validateNode.default)({
        type: "ObjectPattern",
        properties
      });
    }
    function spreadElement(argument) {
      return (0, _validateNode.default)({
        type: "SpreadElement",
        argument
      });
    }
    function _super() {
      return {
        type: "Super"
      };
    }
    function taggedTemplateExpression(tag, quasi) {
      return (0, _validateNode.default)({
        type: "TaggedTemplateExpression",
        tag,
        quasi
      });
    }
    function templateElement(value, tail = false) {
      return (0, _validateNode.default)({
        type: "TemplateElement",
        value,
        tail
      });
    }
    function templateLiteral(quasis, expressions) {
      return (0, _validateNode.default)({
        type: "TemplateLiteral",
        quasis,
        expressions
      });
    }
    function yieldExpression(argument = null, delegate = false) {
      return (0, _validateNode.default)({
        type: "YieldExpression",
        argument,
        delegate
      });
    }
    function awaitExpression(argument) {
      return (0, _validateNode.default)({
        type: "AwaitExpression",
        argument
      });
    }
    function _import() {
      return {
        type: "Import"
      };
    }
    function bigIntLiteral(value) {
      return (0, _validateNode.default)({
        type: "BigIntLiteral",
        value
      });
    }
    function exportNamespaceSpecifier(exported) {
      return (0, _validateNode.default)({
        type: "ExportNamespaceSpecifier",
        exported
      });
    }
    function optionalMemberExpression(object, property, computed = false, optional) {
      return (0, _validateNode.default)({
        type: "OptionalMemberExpression",
        object,
        property,
        computed,
        optional
      });
    }
    function optionalCallExpression(callee, _arguments, optional) {
      return (0, _validateNode.default)({
        type: "OptionalCallExpression",
        callee,
        arguments: _arguments,
        optional
      });
    }
    function classProperty(key, value = null, typeAnnotation2 = null, decorators = null, computed = false, _static = false) {
      return (0, _validateNode.default)({
        type: "ClassProperty",
        key,
        value,
        typeAnnotation: typeAnnotation2,
        decorators,
        computed,
        static: _static
      });
    }
    function classAccessorProperty(key, value = null, typeAnnotation2 = null, decorators = null, computed = false, _static = false) {
      return (0, _validateNode.default)({
        type: "ClassAccessorProperty",
        key,
        value,
        typeAnnotation: typeAnnotation2,
        decorators,
        computed,
        static: _static
      });
    }
    function classPrivateProperty(key, value = null, decorators = null, _static = false) {
      return (0, _validateNode.default)({
        type: "ClassPrivateProperty",
        key,
        value,
        decorators,
        static: _static
      });
    }
    function classPrivateMethod(kind = "method", key, params, body, _static = false) {
      return (0, _validateNode.default)({
        type: "ClassPrivateMethod",
        kind,
        key,
        params,
        body,
        static: _static
      });
    }
    function privateName(id) {
      return (0, _validateNode.default)({
        type: "PrivateName",
        id
      });
    }
    function staticBlock(body) {
      return (0, _validateNode.default)({
        type: "StaticBlock",
        body
      });
    }
    function anyTypeAnnotation() {
      return {
        type: "AnyTypeAnnotation"
      };
    }
    function arrayTypeAnnotation(elementType) {
      return (0, _validateNode.default)({
        type: "ArrayTypeAnnotation",
        elementType
      });
    }
    function booleanTypeAnnotation() {
      return {
        type: "BooleanTypeAnnotation"
      };
    }
    function booleanLiteralTypeAnnotation(value) {
      return (0, _validateNode.default)({
        type: "BooleanLiteralTypeAnnotation",
        value
      });
    }
    function nullLiteralTypeAnnotation() {
      return {
        type: "NullLiteralTypeAnnotation"
      };
    }
    function classImplements(id, typeParameters = null) {
      return (0, _validateNode.default)({
        type: "ClassImplements",
        id,
        typeParameters
      });
    }
    function declareClass(id, typeParameters = null, _extends = null, body) {
      return (0, _validateNode.default)({
        type: "DeclareClass",
        id,
        typeParameters,
        extends: _extends,
        body
      });
    }
    function declareFunction(id) {
      return (0, _validateNode.default)({
        type: "DeclareFunction",
        id
      });
    }
    function declareInterface(id, typeParameters = null, _extends = null, body) {
      return (0, _validateNode.default)({
        type: "DeclareInterface",
        id,
        typeParameters,
        extends: _extends,
        body
      });
    }
    function declareModule(id, body, kind = null) {
      return (0, _validateNode.default)({
        type: "DeclareModule",
        id,
        body,
        kind
      });
    }
    function declareModuleExports(typeAnnotation2) {
      return (0, _validateNode.default)({
        type: "DeclareModuleExports",
        typeAnnotation: typeAnnotation2
      });
    }
    function declareTypeAlias(id, typeParameters = null, right) {
      return (0, _validateNode.default)({
        type: "DeclareTypeAlias",
        id,
        typeParameters,
        right
      });
    }
    function declareOpaqueType(id, typeParameters = null, supertype = null) {
      return (0, _validateNode.default)({
        type: "DeclareOpaqueType",
        id,
        typeParameters,
        supertype
      });
    }
    function declareVariable(id) {
      return (0, _validateNode.default)({
        type: "DeclareVariable",
        id
      });
    }
    function declareExportDeclaration(declaration = null, specifiers = null, source = null) {
      return (0, _validateNode.default)({
        type: "DeclareExportDeclaration",
        declaration,
        specifiers,
        source
      });
    }
    function declareExportAllDeclaration(source) {
      return (0, _validateNode.default)({
        type: "DeclareExportAllDeclaration",
        source
      });
    }
    function declaredPredicate(value) {
      return (0, _validateNode.default)({
        type: "DeclaredPredicate",
        value
      });
    }
    function existsTypeAnnotation() {
      return {
        type: "ExistsTypeAnnotation"
      };
    }
    function functionTypeAnnotation(typeParameters = null, params, rest = null, returnType) {
      return (0, _validateNode.default)({
        type: "FunctionTypeAnnotation",
        typeParameters,
        params,
        rest,
        returnType
      });
    }
    function functionTypeParam(name = null, typeAnnotation2) {
      return (0, _validateNode.default)({
        type: "FunctionTypeParam",
        name,
        typeAnnotation: typeAnnotation2
      });
    }
    function genericTypeAnnotation(id, typeParameters = null) {
      return (0, _validateNode.default)({
        type: "GenericTypeAnnotation",
        id,
        typeParameters
      });
    }
    function inferredPredicate() {
      return {
        type: "InferredPredicate"
      };
    }
    function interfaceExtends(id, typeParameters = null) {
      return (0, _validateNode.default)({
        type: "InterfaceExtends",
        id,
        typeParameters
      });
    }
    function interfaceDeclaration(id, typeParameters = null, _extends = null, body) {
      return (0, _validateNode.default)({
        type: "InterfaceDeclaration",
        id,
        typeParameters,
        extends: _extends,
        body
      });
    }
    function interfaceTypeAnnotation(_extends = null, body) {
      return (0, _validateNode.default)({
        type: "InterfaceTypeAnnotation",
        extends: _extends,
        body
      });
    }
    function intersectionTypeAnnotation(types) {
      return (0, _validateNode.default)({
        type: "IntersectionTypeAnnotation",
        types
      });
    }
    function mixedTypeAnnotation() {
      return {
        type: "MixedTypeAnnotation"
      };
    }
    function emptyTypeAnnotation() {
      return {
        type: "EmptyTypeAnnotation"
      };
    }
    function nullableTypeAnnotation(typeAnnotation2) {
      return (0, _validateNode.default)({
        type: "NullableTypeAnnotation",
        typeAnnotation: typeAnnotation2
      });
    }
    function numberLiteralTypeAnnotation(value) {
      return (0, _validateNode.default)({
        type: "NumberLiteralTypeAnnotation",
        value
      });
    }
    function numberTypeAnnotation() {
      return {
        type: "NumberTypeAnnotation"
      };
    }
    function objectTypeAnnotation(properties, indexers = [], callProperties = [], internalSlots = [], exact = false) {
      return (0, _validateNode.default)({
        type: "ObjectTypeAnnotation",
        properties,
        indexers,
        callProperties,
        internalSlots,
        exact
      });
    }
    function objectTypeInternalSlot(id, value, optional, _static, method) {
      return (0, _validateNode.default)({
        type: "ObjectTypeInternalSlot",
        id,
        value,
        optional,
        static: _static,
        method
      });
    }
    function objectTypeCallProperty(value) {
      return (0, _validateNode.default)({
        type: "ObjectTypeCallProperty",
        value,
        static: null
      });
    }
    function objectTypeIndexer(id = null, key, value, variance2 = null) {
      return (0, _validateNode.default)({
        type: "ObjectTypeIndexer",
        id,
        key,
        value,
        variance: variance2,
        static: null
      });
    }
    function objectTypeProperty(key, value, variance2 = null) {
      return (0, _validateNode.default)({
        type: "ObjectTypeProperty",
        key,
        value,
        variance: variance2,
        kind: null,
        method: null,
        optional: null,
        proto: null,
        static: null
      });
    }
    function objectTypeSpreadProperty(argument) {
      return (0, _validateNode.default)({
        type: "ObjectTypeSpreadProperty",
        argument
      });
    }
    function opaqueType(id, typeParameters = null, supertype = null, impltype) {
      return (0, _validateNode.default)({
        type: "OpaqueType",
        id,
        typeParameters,
        supertype,
        impltype
      });
    }
    function qualifiedTypeIdentifier(id, qualification) {
      return (0, _validateNode.default)({
        type: "QualifiedTypeIdentifier",
        id,
        qualification
      });
    }
    function stringLiteralTypeAnnotation(value) {
      return (0, _validateNode.default)({
        type: "StringLiteralTypeAnnotation",
        value
      });
    }
    function stringTypeAnnotation() {
      return {
        type: "StringTypeAnnotation"
      };
    }
    function symbolTypeAnnotation() {
      return {
        type: "SymbolTypeAnnotation"
      };
    }
    function thisTypeAnnotation() {
      return {
        type: "ThisTypeAnnotation"
      };
    }
    function tupleTypeAnnotation(types) {
      return (0, _validateNode.default)({
        type: "TupleTypeAnnotation",
        types
      });
    }
    function typeofTypeAnnotation(argument) {
      return (0, _validateNode.default)({
        type: "TypeofTypeAnnotation",
        argument
      });
    }
    function typeAlias(id, typeParameters = null, right) {
      return (0, _validateNode.default)({
        type: "TypeAlias",
        id,
        typeParameters,
        right
      });
    }
    function typeAnnotation(typeAnnotation2) {
      return (0, _validateNode.default)({
        type: "TypeAnnotation",
        typeAnnotation: typeAnnotation2
      });
    }
    function typeCastExpression(expression, typeAnnotation2) {
      return (0, _validateNode.default)({
        type: "TypeCastExpression",
        expression,
        typeAnnotation: typeAnnotation2
      });
    }
    function typeParameter(bound = null, _default = null, variance2 = null) {
      return (0, _validateNode.default)({
        type: "TypeParameter",
        bound,
        default: _default,
        variance: variance2,
        name: null
      });
    }
    function typeParameterDeclaration(params) {
      return (0, _validateNode.default)({
        type: "TypeParameterDeclaration",
        params
      });
    }
    function typeParameterInstantiation(params) {
      return (0, _validateNode.default)({
        type: "TypeParameterInstantiation",
        params
      });
    }
    function unionTypeAnnotation(types) {
      return (0, _validateNode.default)({
        type: "UnionTypeAnnotation",
        types
      });
    }
    function variance(kind) {
      return (0, _validateNode.default)({
        type: "Variance",
        kind
      });
    }
    function voidTypeAnnotation() {
      return {
        type: "VoidTypeAnnotation"
      };
    }
    function enumDeclaration(id, body) {
      return (0, _validateNode.default)({
        type: "EnumDeclaration",
        id,
        body
      });
    }
    function enumBooleanBody(members) {
      return (0, _validateNode.default)({
        type: "EnumBooleanBody",
        members,
        explicitType: null,
        hasUnknownMembers: null
      });
    }
    function enumNumberBody(members) {
      return (0, _validateNode.default)({
        type: "EnumNumberBody",
        members,
        explicitType: null,
        hasUnknownMembers: null
      });
    }
    function enumStringBody(members) {
      return (0, _validateNode.default)({
        type: "EnumStringBody",
        members,
        explicitType: null,
        hasUnknownMembers: null
      });
    }
    function enumSymbolBody(members) {
      return (0, _validateNode.default)({
        type: "EnumSymbolBody",
        members,
        hasUnknownMembers: null
      });
    }
    function enumBooleanMember(id) {
      return (0, _validateNode.default)({
        type: "EnumBooleanMember",
        id,
        init: null
      });
    }
    function enumNumberMember(id, init2) {
      return (0, _validateNode.default)({
        type: "EnumNumberMember",
        id,
        init: init2
      });
    }
    function enumStringMember(id, init2) {
      return (0, _validateNode.default)({
        type: "EnumStringMember",
        id,
        init: init2
      });
    }
    function enumDefaultedMember(id) {
      return (0, _validateNode.default)({
        type: "EnumDefaultedMember",
        id
      });
    }
    function indexedAccessType(objectType, indexType) {
      return (0, _validateNode.default)({
        type: "IndexedAccessType",
        objectType,
        indexType
      });
    }
    function optionalIndexedAccessType(objectType, indexType) {
      return (0, _validateNode.default)({
        type: "OptionalIndexedAccessType",
        objectType,
        indexType,
        optional: null
      });
    }
    function jsxAttribute(name, value = null) {
      return (0, _validateNode.default)({
        type: "JSXAttribute",
        name,
        value
      });
    }
    function jsxClosingElement(name) {
      return (0, _validateNode.default)({
        type: "JSXClosingElement",
        name
      });
    }
    function jsxElement(openingElement, closingElement = null, children, selfClosing = null) {
      return (0, _validateNode.default)({
        type: "JSXElement",
        openingElement,
        closingElement,
        children,
        selfClosing
      });
    }
    function jsxEmptyExpression() {
      return {
        type: "JSXEmptyExpression"
      };
    }
    function jsxExpressionContainer(expression) {
      return (0, _validateNode.default)({
        type: "JSXExpressionContainer",
        expression
      });
    }
    function jsxSpreadChild(expression) {
      return (0, _validateNode.default)({
        type: "JSXSpreadChild",
        expression
      });
    }
    function jsxIdentifier(name) {
      return (0, _validateNode.default)({
        type: "JSXIdentifier",
        name
      });
    }
    function jsxMemberExpression(object, property) {
      return (0, _validateNode.default)({
        type: "JSXMemberExpression",
        object,
        property
      });
    }
    function jsxNamespacedName(namespace, name) {
      return (0, _validateNode.default)({
        type: "JSXNamespacedName",
        namespace,
        name
      });
    }
    function jsxOpeningElement(name, attributes, selfClosing = false) {
      return (0, _validateNode.default)({
        type: "JSXOpeningElement",
        name,
        attributes,
        selfClosing
      });
    }
    function jsxSpreadAttribute(argument) {
      return (0, _validateNode.default)({
        type: "JSXSpreadAttribute",
        argument
      });
    }
    function jsxText(value) {
      return (0, _validateNode.default)({
        type: "JSXText",
        value
      });
    }
    function jsxFragment(openingFragment, closingFragment, children) {
      return (0, _validateNode.default)({
        type: "JSXFragment",
        openingFragment,
        closingFragment,
        children
      });
    }
    function jsxOpeningFragment() {
      return {
        type: "JSXOpeningFragment"
      };
    }
    function jsxClosingFragment() {
      return {
        type: "JSXClosingFragment"
      };
    }
    function noop() {
      return {
        type: "Noop"
      };
    }
    function placeholder(expectedNode, name) {
      return (0, _validateNode.default)({
        type: "Placeholder",
        expectedNode,
        name
      });
    }
    function v8IntrinsicIdentifier(name) {
      return (0, _validateNode.default)({
        type: "V8IntrinsicIdentifier",
        name
      });
    }
    function argumentPlaceholder() {
      return {
        type: "ArgumentPlaceholder"
      };
    }
    function bindExpression(object, callee) {
      return (0, _validateNode.default)({
        type: "BindExpression",
        object,
        callee
      });
    }
    function importAttribute(key, value) {
      return (0, _validateNode.default)({
        type: "ImportAttribute",
        key,
        value
      });
    }
    function decorator(expression) {
      return (0, _validateNode.default)({
        type: "Decorator",
        expression
      });
    }
    function doExpression(body, async = false) {
      return (0, _validateNode.default)({
        type: "DoExpression",
        body,
        async
      });
    }
    function exportDefaultSpecifier(exported) {
      return (0, _validateNode.default)({
        type: "ExportDefaultSpecifier",
        exported
      });
    }
    function recordExpression(properties) {
      return (0, _validateNode.default)({
        type: "RecordExpression",
        properties
      });
    }
    function tupleExpression(elements = []) {
      return (0, _validateNode.default)({
        type: "TupleExpression",
        elements
      });
    }
    function decimalLiteral(value) {
      return (0, _validateNode.default)({
        type: "DecimalLiteral",
        value
      });
    }
    function moduleExpression(body) {
      return (0, _validateNode.default)({
        type: "ModuleExpression",
        body
      });
    }
    function topicReference() {
      return {
        type: "TopicReference"
      };
    }
    function pipelineTopicExpression(expression) {
      return (0, _validateNode.default)({
        type: "PipelineTopicExpression",
        expression
      });
    }
    function pipelineBareFunction(callee) {
      return (0, _validateNode.default)({
        type: "PipelineBareFunction",
        callee
      });
    }
    function pipelinePrimaryTopicReference() {
      return {
        type: "PipelinePrimaryTopicReference"
      };
    }
    function tsParameterProperty(parameter) {
      return (0, _validateNode.default)({
        type: "TSParameterProperty",
        parameter
      });
    }
    function tsDeclareFunction(id = null, typeParameters = null, params, returnType = null) {
      return (0, _validateNode.default)({
        type: "TSDeclareFunction",
        id,
        typeParameters,
        params,
        returnType
      });
    }
    function tsDeclareMethod(decorators = null, key, typeParameters = null, params, returnType = null) {
      return (0, _validateNode.default)({
        type: "TSDeclareMethod",
        decorators,
        key,
        typeParameters,
        params,
        returnType
      });
    }
    function tsQualifiedName(left, right) {
      return (0, _validateNode.default)({
        type: "TSQualifiedName",
        left,
        right
      });
    }
    function tsCallSignatureDeclaration(typeParameters = null, parameters, typeAnnotation2 = null) {
      return (0, _validateNode.default)({
        type: "TSCallSignatureDeclaration",
        typeParameters,
        parameters,
        typeAnnotation: typeAnnotation2
      });
    }
    function tsConstructSignatureDeclaration(typeParameters = null, parameters, typeAnnotation2 = null) {
      return (0, _validateNode.default)({
        type: "TSConstructSignatureDeclaration",
        typeParameters,
        parameters,
        typeAnnotation: typeAnnotation2
      });
    }
    function tsPropertySignature(key, typeAnnotation2 = null, initializer = null) {
      return (0, _validateNode.default)({
        type: "TSPropertySignature",
        key,
        typeAnnotation: typeAnnotation2,
        initializer,
        kind: null
      });
    }
    function tsMethodSignature(key, typeParameters = null, parameters, typeAnnotation2 = null) {
      return (0, _validateNode.default)({
        type: "TSMethodSignature",
        key,
        typeParameters,
        parameters,
        typeAnnotation: typeAnnotation2,
        kind: null
      });
    }
    function tsIndexSignature(parameters, typeAnnotation2 = null) {
      return (0, _validateNode.default)({
        type: "TSIndexSignature",
        parameters,
        typeAnnotation: typeAnnotation2
      });
    }
    function tsAnyKeyword() {
      return {
        type: "TSAnyKeyword"
      };
    }
    function tsBooleanKeyword() {
      return {
        type: "TSBooleanKeyword"
      };
    }
    function tsBigIntKeyword() {
      return {
        type: "TSBigIntKeyword"
      };
    }
    function tsIntrinsicKeyword() {
      return {
        type: "TSIntrinsicKeyword"
      };
    }
    function tsNeverKeyword() {
      return {
        type: "TSNeverKeyword"
      };
    }
    function tsNullKeyword() {
      return {
        type: "TSNullKeyword"
      };
    }
    function tsNumberKeyword() {
      return {
        type: "TSNumberKeyword"
      };
    }
    function tsObjectKeyword() {
      return {
        type: "TSObjectKeyword"
      };
    }
    function tsStringKeyword() {
      return {
        type: "TSStringKeyword"
      };
    }
    function tsSymbolKeyword() {
      return {
        type: "TSSymbolKeyword"
      };
    }
    function tsUndefinedKeyword() {
      return {
        type: "TSUndefinedKeyword"
      };
    }
    function tsUnknownKeyword() {
      return {
        type: "TSUnknownKeyword"
      };
    }
    function tsVoidKeyword() {
      return {
        type: "TSVoidKeyword"
      };
    }
    function tsThisType() {
      return {
        type: "TSThisType"
      };
    }
    function tsFunctionType(typeParameters = null, parameters, typeAnnotation2 = null) {
      return (0, _validateNode.default)({
        type: "TSFunctionType",
        typeParameters,
        parameters,
        typeAnnotation: typeAnnotation2
      });
    }
    function tsConstructorType(typeParameters = null, parameters, typeAnnotation2 = null) {
      return (0, _validateNode.default)({
        type: "TSConstructorType",
        typeParameters,
        parameters,
        typeAnnotation: typeAnnotation2
      });
    }
    function tsTypeReference(typeName, typeParameters = null) {
      return (0, _validateNode.default)({
        type: "TSTypeReference",
        typeName,
        typeParameters
      });
    }
    function tsTypePredicate(parameterName, typeAnnotation2 = null, asserts = null) {
      return (0, _validateNode.default)({
        type: "TSTypePredicate",
        parameterName,
        typeAnnotation: typeAnnotation2,
        asserts
      });
    }
    function tsTypeQuery(exprName, typeParameters = null) {
      return (0, _validateNode.default)({
        type: "TSTypeQuery",
        exprName,
        typeParameters
      });
    }
    function tsTypeLiteral(members) {
      return (0, _validateNode.default)({
        type: "TSTypeLiteral",
        members
      });
    }
    function tsArrayType(elementType) {
      return (0, _validateNode.default)({
        type: "TSArrayType",
        elementType
      });
    }
    function tsTupleType(elementTypes) {
      return (0, _validateNode.default)({
        type: "TSTupleType",
        elementTypes
      });
    }
    function tsOptionalType(typeAnnotation2) {
      return (0, _validateNode.default)({
        type: "TSOptionalType",
        typeAnnotation: typeAnnotation2
      });
    }
    function tsRestType(typeAnnotation2) {
      return (0, _validateNode.default)({
        type: "TSRestType",
        typeAnnotation: typeAnnotation2
      });
    }
    function tsNamedTupleMember(label, elementType, optional = false) {
      return (0, _validateNode.default)({
        type: "TSNamedTupleMember",
        label,
        elementType,
        optional
      });
    }
    function tsUnionType(types) {
      return (0, _validateNode.default)({
        type: "TSUnionType",
        types
      });
    }
    function tsIntersectionType(types) {
      return (0, _validateNode.default)({
        type: "TSIntersectionType",
        types
      });
    }
    function tsConditionalType(checkType, extendsType, trueType, falseType) {
      return (0, _validateNode.default)({
        type: "TSConditionalType",
        checkType,
        extendsType,
        trueType,
        falseType
      });
    }
    function tsInferType(typeParameter2) {
      return (0, _validateNode.default)({
        type: "TSInferType",
        typeParameter: typeParameter2
      });
    }
    function tsParenthesizedType(typeAnnotation2) {
      return (0, _validateNode.default)({
        type: "TSParenthesizedType",
        typeAnnotation: typeAnnotation2
      });
    }
    function tsTypeOperator(typeAnnotation2) {
      return (0, _validateNode.default)({
        type: "TSTypeOperator",
        typeAnnotation: typeAnnotation2,
        operator: null
      });
    }
    function tsIndexedAccessType(objectType, indexType) {
      return (0, _validateNode.default)({
        type: "TSIndexedAccessType",
        objectType,
        indexType
      });
    }
    function tsMappedType(typeParameter2, typeAnnotation2 = null, nameType = null) {
      return (0, _validateNode.default)({
        type: "TSMappedType",
        typeParameter: typeParameter2,
        typeAnnotation: typeAnnotation2,
        nameType
      });
    }
    function tsLiteralType(literal) {
      return (0, _validateNode.default)({
        type: "TSLiteralType",
        literal
      });
    }
    function tsExpressionWithTypeArguments(expression, typeParameters = null) {
      return (0, _validateNode.default)({
        type: "TSExpressionWithTypeArguments",
        expression,
        typeParameters
      });
    }
    function tsInterfaceDeclaration(id, typeParameters = null, _extends = null, body) {
      return (0, _validateNode.default)({
        type: "TSInterfaceDeclaration",
        id,
        typeParameters,
        extends: _extends,
        body
      });
    }
    function tsInterfaceBody(body) {
      return (0, _validateNode.default)({
        type: "TSInterfaceBody",
        body
      });
    }
    function tsTypeAliasDeclaration(id, typeParameters = null, typeAnnotation2) {
      return (0, _validateNode.default)({
        type: "TSTypeAliasDeclaration",
        id,
        typeParameters,
        typeAnnotation: typeAnnotation2
      });
    }
    function tsInstantiationExpression(expression, typeParameters = null) {
      return (0, _validateNode.default)({
        type: "TSInstantiationExpression",
        expression,
        typeParameters
      });
    }
    function tsAsExpression(expression, typeAnnotation2) {
      return (0, _validateNode.default)({
        type: "TSAsExpression",
        expression,
        typeAnnotation: typeAnnotation2
      });
    }
    function tsTypeAssertion(typeAnnotation2, expression) {
      return (0, _validateNode.default)({
        type: "TSTypeAssertion",
        typeAnnotation: typeAnnotation2,
        expression
      });
    }
    function tsEnumDeclaration(id, members) {
      return (0, _validateNode.default)({
        type: "TSEnumDeclaration",
        id,
        members
      });
    }
    function tsEnumMember(id, initializer = null) {
      return (0, _validateNode.default)({
        type: "TSEnumMember",
        id,
        initializer
      });
    }
    function tsModuleDeclaration(id, body) {
      return (0, _validateNode.default)({
        type: "TSModuleDeclaration",
        id,
        body
      });
    }
    function tsModuleBlock(body) {
      return (0, _validateNode.default)({
        type: "TSModuleBlock",
        body
      });
    }
    function tsImportType(argument, qualifier = null, typeParameters = null) {
      return (0, _validateNode.default)({
        type: "TSImportType",
        argument,
        qualifier,
        typeParameters
      });
    }
    function tsImportEqualsDeclaration(id, moduleReference) {
      return (0, _validateNode.default)({
        type: "TSImportEqualsDeclaration",
        id,
        moduleReference,
        isExport: null
      });
    }
    function tsExternalModuleReference(expression) {
      return (0, _validateNode.default)({
        type: "TSExternalModuleReference",
        expression
      });
    }
    function tsNonNullExpression(expression) {
      return (0, _validateNode.default)({
        type: "TSNonNullExpression",
        expression
      });
    }
    function tsExportAssignment(expression) {
      return (0, _validateNode.default)({
        type: "TSExportAssignment",
        expression
      });
    }
    function tsNamespaceExportDeclaration(id) {
      return (0, _validateNode.default)({
        type: "TSNamespaceExportDeclaration",
        id
      });
    }
    function tsTypeAnnotation(typeAnnotation2) {
      return (0, _validateNode.default)({
        type: "TSTypeAnnotation",
        typeAnnotation: typeAnnotation2
      });
    }
    function tsTypeParameterInstantiation(params) {
      return (0, _validateNode.default)({
        type: "TSTypeParameterInstantiation",
        params
      });
    }
    function tsTypeParameterDeclaration(params) {
      return (0, _validateNode.default)({
        type: "TSTypeParameterDeclaration",
        params
      });
    }
    function tsTypeParameter(constraint = null, _default = null, name) {
      return (0, _validateNode.default)({
        type: "TSTypeParameter",
        constraint,
        default: _default,
        name
      });
    }
    function NumberLiteral(value) {
      console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
      return numericLiteral(value);
    }
    function RegexLiteral(pattern, flags = "") {
      console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
      return regExpLiteral(pattern, flags);
    }
    function RestProperty(argument) {
      console.trace("The node type RestProperty has been renamed to RestElement");
      return restElement(argument);
    }
    function SpreadProperty(argument) {
      console.trace("The node type SpreadProperty has been renamed to SpreadElement");
      return spreadElement(argument);
    }
  }
});

// node_modules/@babel/types/lib/utils/react/cleanJSXElementLiteralChild.js
var require_cleanJSXElementLiteralChild = __commonJS({
  "node_modules/@babel/types/lib/utils/react/cleanJSXElementLiteralChild.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = cleanJSXElementLiteralChild;
    var _generated = require_generated2();
    function cleanJSXElementLiteralChild(child, args) {
      const lines = child.value.split(/\r\n|\n|\r/);
      let lastNonEmptyLine = 0;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].match(/[^ \t]/)) {
          lastNonEmptyLine = i;
        }
      }
      let str = "";
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const isFirstLine = i === 0;
        const isLastLine = i === lines.length - 1;
        const isLastNonEmptyLine = i === lastNonEmptyLine;
        let trimmedLine = line.replace(/\t/g, " ");
        if (!isFirstLine) {
          trimmedLine = trimmedLine.replace(/^[ ]+/, "");
        }
        if (!isLastLine) {
          trimmedLine = trimmedLine.replace(/[ ]+$/, "");
        }
        if (trimmedLine) {
          if (!isLastNonEmptyLine) {
            trimmedLine += " ";
          }
          str += trimmedLine;
        }
      }
      if (str)
        args.push((0, _generated.stringLiteral)(str));
    }
  }
});

// node_modules/@babel/types/lib/builders/react/buildChildren.js
var require_buildChildren = __commonJS({
  "node_modules/@babel/types/lib/builders/react/buildChildren.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = buildChildren;
    var _generated = require_generated();
    var _cleanJSXElementLiteralChild = require_cleanJSXElementLiteralChild();
    function buildChildren(node) {
      const elements = [];
      for (let i = 0; i < node.children.length; i++) {
        let child = node.children[i];
        if ((0, _generated.isJSXText)(child)) {
          (0, _cleanJSXElementLiteralChild.default)(child, elements);
          continue;
        }
        if ((0, _generated.isJSXExpressionContainer)(child))
          child = child.expression;
        if ((0, _generated.isJSXEmptyExpression)(child))
          continue;
        elements.push(child);
      }
      return elements;
    }
  }
});

// node_modules/@babel/types/lib/validators/isNode.js
var require_isNode = __commonJS({
  "node_modules/@babel/types/lib/validators/isNode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isNode;
    var _definitions = require_definitions();
    function isNode(node) {
      return !!(node && _definitions.VISITOR_KEYS[node.type]);
    }
  }
});

// node_modules/@babel/types/lib/asserts/assertNode.js
var require_assertNode = __commonJS({
  "node_modules/@babel/types/lib/asserts/assertNode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = assertNode;
    var _isNode = require_isNode();
    function assertNode(node) {
      if (!(0, _isNode.default)(node)) {
        var _node$type;
        const type = (_node$type = node == null ? void 0 : node.type) != null ? _node$type : JSON.stringify(node);
        throw new TypeError(`Not a valid node of type "${type}"`);
      }
    }
  }
});

// node_modules/@babel/types/lib/asserts/generated/index.js
var require_generated3 = __commonJS({
  "node_modules/@babel/types/lib/asserts/generated/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.assertAccessor = assertAccessor;
    exports.assertAnyTypeAnnotation = assertAnyTypeAnnotation;
    exports.assertArgumentPlaceholder = assertArgumentPlaceholder;
    exports.assertArrayExpression = assertArrayExpression;
    exports.assertArrayPattern = assertArrayPattern;
    exports.assertArrayTypeAnnotation = assertArrayTypeAnnotation;
    exports.assertArrowFunctionExpression = assertArrowFunctionExpression;
    exports.assertAssignmentExpression = assertAssignmentExpression;
    exports.assertAssignmentPattern = assertAssignmentPattern;
    exports.assertAwaitExpression = assertAwaitExpression;
    exports.assertBigIntLiteral = assertBigIntLiteral;
    exports.assertBinary = assertBinary;
    exports.assertBinaryExpression = assertBinaryExpression;
    exports.assertBindExpression = assertBindExpression;
    exports.assertBlock = assertBlock;
    exports.assertBlockParent = assertBlockParent;
    exports.assertBlockStatement = assertBlockStatement;
    exports.assertBooleanLiteral = assertBooleanLiteral;
    exports.assertBooleanLiteralTypeAnnotation = assertBooleanLiteralTypeAnnotation;
    exports.assertBooleanTypeAnnotation = assertBooleanTypeAnnotation;
    exports.assertBreakStatement = assertBreakStatement;
    exports.assertCallExpression = assertCallExpression;
    exports.assertCatchClause = assertCatchClause;
    exports.assertClass = assertClass;
    exports.assertClassAccessorProperty = assertClassAccessorProperty;
    exports.assertClassBody = assertClassBody;
    exports.assertClassDeclaration = assertClassDeclaration;
    exports.assertClassExpression = assertClassExpression;
    exports.assertClassImplements = assertClassImplements;
    exports.assertClassMethod = assertClassMethod;
    exports.assertClassPrivateMethod = assertClassPrivateMethod;
    exports.assertClassPrivateProperty = assertClassPrivateProperty;
    exports.assertClassProperty = assertClassProperty;
    exports.assertCompletionStatement = assertCompletionStatement;
    exports.assertConditional = assertConditional;
    exports.assertConditionalExpression = assertConditionalExpression;
    exports.assertContinueStatement = assertContinueStatement;
    exports.assertDebuggerStatement = assertDebuggerStatement;
    exports.assertDecimalLiteral = assertDecimalLiteral;
    exports.assertDeclaration = assertDeclaration;
    exports.assertDeclareClass = assertDeclareClass;
    exports.assertDeclareExportAllDeclaration = assertDeclareExportAllDeclaration;
    exports.assertDeclareExportDeclaration = assertDeclareExportDeclaration;
    exports.assertDeclareFunction = assertDeclareFunction;
    exports.assertDeclareInterface = assertDeclareInterface;
    exports.assertDeclareModule = assertDeclareModule;
    exports.assertDeclareModuleExports = assertDeclareModuleExports;
    exports.assertDeclareOpaqueType = assertDeclareOpaqueType;
    exports.assertDeclareTypeAlias = assertDeclareTypeAlias;
    exports.assertDeclareVariable = assertDeclareVariable;
    exports.assertDeclaredPredicate = assertDeclaredPredicate;
    exports.assertDecorator = assertDecorator;
    exports.assertDirective = assertDirective;
    exports.assertDirectiveLiteral = assertDirectiveLiteral;
    exports.assertDoExpression = assertDoExpression;
    exports.assertDoWhileStatement = assertDoWhileStatement;
    exports.assertEmptyStatement = assertEmptyStatement;
    exports.assertEmptyTypeAnnotation = assertEmptyTypeAnnotation;
    exports.assertEnumBody = assertEnumBody;
    exports.assertEnumBooleanBody = assertEnumBooleanBody;
    exports.assertEnumBooleanMember = assertEnumBooleanMember;
    exports.assertEnumDeclaration = assertEnumDeclaration;
    exports.assertEnumDefaultedMember = assertEnumDefaultedMember;
    exports.assertEnumMember = assertEnumMember;
    exports.assertEnumNumberBody = assertEnumNumberBody;
    exports.assertEnumNumberMember = assertEnumNumberMember;
    exports.assertEnumStringBody = assertEnumStringBody;
    exports.assertEnumStringMember = assertEnumStringMember;
    exports.assertEnumSymbolBody = assertEnumSymbolBody;
    exports.assertExistsTypeAnnotation = assertExistsTypeAnnotation;
    exports.assertExportAllDeclaration = assertExportAllDeclaration;
    exports.assertExportDeclaration = assertExportDeclaration;
    exports.assertExportDefaultDeclaration = assertExportDefaultDeclaration;
    exports.assertExportDefaultSpecifier = assertExportDefaultSpecifier;
    exports.assertExportNamedDeclaration = assertExportNamedDeclaration;
    exports.assertExportNamespaceSpecifier = assertExportNamespaceSpecifier;
    exports.assertExportSpecifier = assertExportSpecifier;
    exports.assertExpression = assertExpression;
    exports.assertExpressionStatement = assertExpressionStatement;
    exports.assertExpressionWrapper = assertExpressionWrapper;
    exports.assertFile = assertFile;
    exports.assertFlow = assertFlow;
    exports.assertFlowBaseAnnotation = assertFlowBaseAnnotation;
    exports.assertFlowDeclaration = assertFlowDeclaration;
    exports.assertFlowPredicate = assertFlowPredicate;
    exports.assertFlowType = assertFlowType;
    exports.assertFor = assertFor;
    exports.assertForInStatement = assertForInStatement;
    exports.assertForOfStatement = assertForOfStatement;
    exports.assertForStatement = assertForStatement;
    exports.assertForXStatement = assertForXStatement;
    exports.assertFunction = assertFunction;
    exports.assertFunctionDeclaration = assertFunctionDeclaration;
    exports.assertFunctionExpression = assertFunctionExpression;
    exports.assertFunctionParent = assertFunctionParent;
    exports.assertFunctionTypeAnnotation = assertFunctionTypeAnnotation;
    exports.assertFunctionTypeParam = assertFunctionTypeParam;
    exports.assertGenericTypeAnnotation = assertGenericTypeAnnotation;
    exports.assertIdentifier = assertIdentifier;
    exports.assertIfStatement = assertIfStatement;
    exports.assertImmutable = assertImmutable;
    exports.assertImport = assertImport;
    exports.assertImportAttribute = assertImportAttribute;
    exports.assertImportDeclaration = assertImportDeclaration;
    exports.assertImportDefaultSpecifier = assertImportDefaultSpecifier;
    exports.assertImportNamespaceSpecifier = assertImportNamespaceSpecifier;
    exports.assertImportSpecifier = assertImportSpecifier;
    exports.assertIndexedAccessType = assertIndexedAccessType;
    exports.assertInferredPredicate = assertInferredPredicate;
    exports.assertInterfaceDeclaration = assertInterfaceDeclaration;
    exports.assertInterfaceExtends = assertInterfaceExtends;
    exports.assertInterfaceTypeAnnotation = assertInterfaceTypeAnnotation;
    exports.assertInterpreterDirective = assertInterpreterDirective;
    exports.assertIntersectionTypeAnnotation = assertIntersectionTypeAnnotation;
    exports.assertJSX = assertJSX;
    exports.assertJSXAttribute = assertJSXAttribute;
    exports.assertJSXClosingElement = assertJSXClosingElement;
    exports.assertJSXClosingFragment = assertJSXClosingFragment;
    exports.assertJSXElement = assertJSXElement;
    exports.assertJSXEmptyExpression = assertJSXEmptyExpression;
    exports.assertJSXExpressionContainer = assertJSXExpressionContainer;
    exports.assertJSXFragment = assertJSXFragment;
    exports.assertJSXIdentifier = assertJSXIdentifier;
    exports.assertJSXMemberExpression = assertJSXMemberExpression;
    exports.assertJSXNamespacedName = assertJSXNamespacedName;
    exports.assertJSXOpeningElement = assertJSXOpeningElement;
    exports.assertJSXOpeningFragment = assertJSXOpeningFragment;
    exports.assertJSXSpreadAttribute = assertJSXSpreadAttribute;
    exports.assertJSXSpreadChild = assertJSXSpreadChild;
    exports.assertJSXText = assertJSXText;
    exports.assertLVal = assertLVal;
    exports.assertLabeledStatement = assertLabeledStatement;
    exports.assertLiteral = assertLiteral;
    exports.assertLogicalExpression = assertLogicalExpression;
    exports.assertLoop = assertLoop;
    exports.assertMemberExpression = assertMemberExpression;
    exports.assertMetaProperty = assertMetaProperty;
    exports.assertMethod = assertMethod;
    exports.assertMiscellaneous = assertMiscellaneous;
    exports.assertMixedTypeAnnotation = assertMixedTypeAnnotation;
    exports.assertModuleDeclaration = assertModuleDeclaration;
    exports.assertModuleExpression = assertModuleExpression;
    exports.assertModuleSpecifier = assertModuleSpecifier;
    exports.assertNewExpression = assertNewExpression;
    exports.assertNoop = assertNoop;
    exports.assertNullLiteral = assertNullLiteral;
    exports.assertNullLiteralTypeAnnotation = assertNullLiteralTypeAnnotation;
    exports.assertNullableTypeAnnotation = assertNullableTypeAnnotation;
    exports.assertNumberLiteral = assertNumberLiteral;
    exports.assertNumberLiteralTypeAnnotation = assertNumberLiteralTypeAnnotation;
    exports.assertNumberTypeAnnotation = assertNumberTypeAnnotation;
    exports.assertNumericLiteral = assertNumericLiteral;
    exports.assertObjectExpression = assertObjectExpression;
    exports.assertObjectMember = assertObjectMember;
    exports.assertObjectMethod = assertObjectMethod;
    exports.assertObjectPattern = assertObjectPattern;
    exports.assertObjectProperty = assertObjectProperty;
    exports.assertObjectTypeAnnotation = assertObjectTypeAnnotation;
    exports.assertObjectTypeCallProperty = assertObjectTypeCallProperty;
    exports.assertObjectTypeIndexer = assertObjectTypeIndexer;
    exports.assertObjectTypeInternalSlot = assertObjectTypeInternalSlot;
    exports.assertObjectTypeProperty = assertObjectTypeProperty;
    exports.assertObjectTypeSpreadProperty = assertObjectTypeSpreadProperty;
    exports.assertOpaqueType = assertOpaqueType;
    exports.assertOptionalCallExpression = assertOptionalCallExpression;
    exports.assertOptionalIndexedAccessType = assertOptionalIndexedAccessType;
    exports.assertOptionalMemberExpression = assertOptionalMemberExpression;
    exports.assertParenthesizedExpression = assertParenthesizedExpression;
    exports.assertPattern = assertPattern;
    exports.assertPatternLike = assertPatternLike;
    exports.assertPipelineBareFunction = assertPipelineBareFunction;
    exports.assertPipelinePrimaryTopicReference = assertPipelinePrimaryTopicReference;
    exports.assertPipelineTopicExpression = assertPipelineTopicExpression;
    exports.assertPlaceholder = assertPlaceholder;
    exports.assertPrivate = assertPrivate;
    exports.assertPrivateName = assertPrivateName;
    exports.assertProgram = assertProgram;
    exports.assertProperty = assertProperty;
    exports.assertPureish = assertPureish;
    exports.assertQualifiedTypeIdentifier = assertQualifiedTypeIdentifier;
    exports.assertRecordExpression = assertRecordExpression;
    exports.assertRegExpLiteral = assertRegExpLiteral;
    exports.assertRegexLiteral = assertRegexLiteral;
    exports.assertRestElement = assertRestElement;
    exports.assertRestProperty = assertRestProperty;
    exports.assertReturnStatement = assertReturnStatement;
    exports.assertScopable = assertScopable;
    exports.assertSequenceExpression = assertSequenceExpression;
    exports.assertSpreadElement = assertSpreadElement;
    exports.assertSpreadProperty = assertSpreadProperty;
    exports.assertStandardized = assertStandardized;
    exports.assertStatement = assertStatement;
    exports.assertStaticBlock = assertStaticBlock;
    exports.assertStringLiteral = assertStringLiteral;
    exports.assertStringLiteralTypeAnnotation = assertStringLiteralTypeAnnotation;
    exports.assertStringTypeAnnotation = assertStringTypeAnnotation;
    exports.assertSuper = assertSuper;
    exports.assertSwitchCase = assertSwitchCase;
    exports.assertSwitchStatement = assertSwitchStatement;
    exports.assertSymbolTypeAnnotation = assertSymbolTypeAnnotation;
    exports.assertTSAnyKeyword = assertTSAnyKeyword;
    exports.assertTSArrayType = assertTSArrayType;
    exports.assertTSAsExpression = assertTSAsExpression;
    exports.assertTSBaseType = assertTSBaseType;
    exports.assertTSBigIntKeyword = assertTSBigIntKeyword;
    exports.assertTSBooleanKeyword = assertTSBooleanKeyword;
    exports.assertTSCallSignatureDeclaration = assertTSCallSignatureDeclaration;
    exports.assertTSConditionalType = assertTSConditionalType;
    exports.assertTSConstructSignatureDeclaration = assertTSConstructSignatureDeclaration;
    exports.assertTSConstructorType = assertTSConstructorType;
    exports.assertTSDeclareFunction = assertTSDeclareFunction;
    exports.assertTSDeclareMethod = assertTSDeclareMethod;
    exports.assertTSEntityName = assertTSEntityName;
    exports.assertTSEnumDeclaration = assertTSEnumDeclaration;
    exports.assertTSEnumMember = assertTSEnumMember;
    exports.assertTSExportAssignment = assertTSExportAssignment;
    exports.assertTSExpressionWithTypeArguments = assertTSExpressionWithTypeArguments;
    exports.assertTSExternalModuleReference = assertTSExternalModuleReference;
    exports.assertTSFunctionType = assertTSFunctionType;
    exports.assertTSImportEqualsDeclaration = assertTSImportEqualsDeclaration;
    exports.assertTSImportType = assertTSImportType;
    exports.assertTSIndexSignature = assertTSIndexSignature;
    exports.assertTSIndexedAccessType = assertTSIndexedAccessType;
    exports.assertTSInferType = assertTSInferType;
    exports.assertTSInstantiationExpression = assertTSInstantiationExpression;
    exports.assertTSInterfaceBody = assertTSInterfaceBody;
    exports.assertTSInterfaceDeclaration = assertTSInterfaceDeclaration;
    exports.assertTSIntersectionType = assertTSIntersectionType;
    exports.assertTSIntrinsicKeyword = assertTSIntrinsicKeyword;
    exports.assertTSLiteralType = assertTSLiteralType;
    exports.assertTSMappedType = assertTSMappedType;
    exports.assertTSMethodSignature = assertTSMethodSignature;
    exports.assertTSModuleBlock = assertTSModuleBlock;
    exports.assertTSModuleDeclaration = assertTSModuleDeclaration;
    exports.assertTSNamedTupleMember = assertTSNamedTupleMember;
    exports.assertTSNamespaceExportDeclaration = assertTSNamespaceExportDeclaration;
    exports.assertTSNeverKeyword = assertTSNeverKeyword;
    exports.assertTSNonNullExpression = assertTSNonNullExpression;
    exports.assertTSNullKeyword = assertTSNullKeyword;
    exports.assertTSNumberKeyword = assertTSNumberKeyword;
    exports.assertTSObjectKeyword = assertTSObjectKeyword;
    exports.assertTSOptionalType = assertTSOptionalType;
    exports.assertTSParameterProperty = assertTSParameterProperty;
    exports.assertTSParenthesizedType = assertTSParenthesizedType;
    exports.assertTSPropertySignature = assertTSPropertySignature;
    exports.assertTSQualifiedName = assertTSQualifiedName;
    exports.assertTSRestType = assertTSRestType;
    exports.assertTSStringKeyword = assertTSStringKeyword;
    exports.assertTSSymbolKeyword = assertTSSymbolKeyword;
    exports.assertTSThisType = assertTSThisType;
    exports.assertTSTupleType = assertTSTupleType;
    exports.assertTSType = assertTSType;
    exports.assertTSTypeAliasDeclaration = assertTSTypeAliasDeclaration;
    exports.assertTSTypeAnnotation = assertTSTypeAnnotation;
    exports.assertTSTypeAssertion = assertTSTypeAssertion;
    exports.assertTSTypeElement = assertTSTypeElement;
    exports.assertTSTypeLiteral = assertTSTypeLiteral;
    exports.assertTSTypeOperator = assertTSTypeOperator;
    exports.assertTSTypeParameter = assertTSTypeParameter;
    exports.assertTSTypeParameterDeclaration = assertTSTypeParameterDeclaration;
    exports.assertTSTypeParameterInstantiation = assertTSTypeParameterInstantiation;
    exports.assertTSTypePredicate = assertTSTypePredicate;
    exports.assertTSTypeQuery = assertTSTypeQuery;
    exports.assertTSTypeReference = assertTSTypeReference;
    exports.assertTSUndefinedKeyword = assertTSUndefinedKeyword;
    exports.assertTSUnionType = assertTSUnionType;
    exports.assertTSUnknownKeyword = assertTSUnknownKeyword;
    exports.assertTSVoidKeyword = assertTSVoidKeyword;
    exports.assertTaggedTemplateExpression = assertTaggedTemplateExpression;
    exports.assertTemplateElement = assertTemplateElement;
    exports.assertTemplateLiteral = assertTemplateLiteral;
    exports.assertTerminatorless = assertTerminatorless;
    exports.assertThisExpression = assertThisExpression;
    exports.assertThisTypeAnnotation = assertThisTypeAnnotation;
    exports.assertThrowStatement = assertThrowStatement;
    exports.assertTopicReference = assertTopicReference;
    exports.assertTryStatement = assertTryStatement;
    exports.assertTupleExpression = assertTupleExpression;
    exports.assertTupleTypeAnnotation = assertTupleTypeAnnotation;
    exports.assertTypeAlias = assertTypeAlias;
    exports.assertTypeAnnotation = assertTypeAnnotation;
    exports.assertTypeCastExpression = assertTypeCastExpression;
    exports.assertTypeParameter = assertTypeParameter;
    exports.assertTypeParameterDeclaration = assertTypeParameterDeclaration;
    exports.assertTypeParameterInstantiation = assertTypeParameterInstantiation;
    exports.assertTypeScript = assertTypeScript;
    exports.assertTypeofTypeAnnotation = assertTypeofTypeAnnotation;
    exports.assertUnaryExpression = assertUnaryExpression;
    exports.assertUnaryLike = assertUnaryLike;
    exports.assertUnionTypeAnnotation = assertUnionTypeAnnotation;
    exports.assertUpdateExpression = assertUpdateExpression;
    exports.assertUserWhitespacable = assertUserWhitespacable;
    exports.assertV8IntrinsicIdentifier = assertV8IntrinsicIdentifier;
    exports.assertVariableDeclaration = assertVariableDeclaration;
    exports.assertVariableDeclarator = assertVariableDeclarator;
    exports.assertVariance = assertVariance;
    exports.assertVoidTypeAnnotation = assertVoidTypeAnnotation;
    exports.assertWhile = assertWhile;
    exports.assertWhileStatement = assertWhileStatement;
    exports.assertWithStatement = assertWithStatement;
    exports.assertYieldExpression = assertYieldExpression;
    var _is = require_is();
    function assert(type, node, opts) {
      if (!(0, _is.default)(type, node, opts)) {
        throw new Error(`Expected type "${type}" with option ${JSON.stringify(opts)}, but instead got "${node.type}".`);
      }
    }
    function assertArrayExpression(node, opts) {
      assert("ArrayExpression", node, opts);
    }
    function assertAssignmentExpression(node, opts) {
      assert("AssignmentExpression", node, opts);
    }
    function assertBinaryExpression(node, opts) {
      assert("BinaryExpression", node, opts);
    }
    function assertInterpreterDirective(node, opts) {
      assert("InterpreterDirective", node, opts);
    }
    function assertDirective(node, opts) {
      assert("Directive", node, opts);
    }
    function assertDirectiveLiteral(node, opts) {
      assert("DirectiveLiteral", node, opts);
    }
    function assertBlockStatement(node, opts) {
      assert("BlockStatement", node, opts);
    }
    function assertBreakStatement(node, opts) {
      assert("BreakStatement", node, opts);
    }
    function assertCallExpression(node, opts) {
      assert("CallExpression", node, opts);
    }
    function assertCatchClause(node, opts) {
      assert("CatchClause", node, opts);
    }
    function assertConditionalExpression(node, opts) {
      assert("ConditionalExpression", node, opts);
    }
    function assertContinueStatement(node, opts) {
      assert("ContinueStatement", node, opts);
    }
    function assertDebuggerStatement(node, opts) {
      assert("DebuggerStatement", node, opts);
    }
    function assertDoWhileStatement(node, opts) {
      assert("DoWhileStatement", node, opts);
    }
    function assertEmptyStatement(node, opts) {
      assert("EmptyStatement", node, opts);
    }
    function assertExpressionStatement(node, opts) {
      assert("ExpressionStatement", node, opts);
    }
    function assertFile(node, opts) {
      assert("File", node, opts);
    }
    function assertForInStatement(node, opts) {
      assert("ForInStatement", node, opts);
    }
    function assertForStatement(node, opts) {
      assert("ForStatement", node, opts);
    }
    function assertFunctionDeclaration(node, opts) {
      assert("FunctionDeclaration", node, opts);
    }
    function assertFunctionExpression(node, opts) {
      assert("FunctionExpression", node, opts);
    }
    function assertIdentifier(node, opts) {
      assert("Identifier", node, opts);
    }
    function assertIfStatement(node, opts) {
      assert("IfStatement", node, opts);
    }
    function assertLabeledStatement(node, opts) {
      assert("LabeledStatement", node, opts);
    }
    function assertStringLiteral(node, opts) {
      assert("StringLiteral", node, opts);
    }
    function assertNumericLiteral(node, opts) {
      assert("NumericLiteral", node, opts);
    }
    function assertNullLiteral(node, opts) {
      assert("NullLiteral", node, opts);
    }
    function assertBooleanLiteral(node, opts) {
      assert("BooleanLiteral", node, opts);
    }
    function assertRegExpLiteral(node, opts) {
      assert("RegExpLiteral", node, opts);
    }
    function assertLogicalExpression(node, opts) {
      assert("LogicalExpression", node, opts);
    }
    function assertMemberExpression(node, opts) {
      assert("MemberExpression", node, opts);
    }
    function assertNewExpression(node, opts) {
      assert("NewExpression", node, opts);
    }
    function assertProgram(node, opts) {
      assert("Program", node, opts);
    }
    function assertObjectExpression(node, opts) {
      assert("ObjectExpression", node, opts);
    }
    function assertObjectMethod(node, opts) {
      assert("ObjectMethod", node, opts);
    }
    function assertObjectProperty(node, opts) {
      assert("ObjectProperty", node, opts);
    }
    function assertRestElement(node, opts) {
      assert("RestElement", node, opts);
    }
    function assertReturnStatement(node, opts) {
      assert("ReturnStatement", node, opts);
    }
    function assertSequenceExpression(node, opts) {
      assert("SequenceExpression", node, opts);
    }
    function assertParenthesizedExpression(node, opts) {
      assert("ParenthesizedExpression", node, opts);
    }
    function assertSwitchCase(node, opts) {
      assert("SwitchCase", node, opts);
    }
    function assertSwitchStatement(node, opts) {
      assert("SwitchStatement", node, opts);
    }
    function assertThisExpression(node, opts) {
      assert("ThisExpression", node, opts);
    }
    function assertThrowStatement(node, opts) {
      assert("ThrowStatement", node, opts);
    }
    function assertTryStatement(node, opts) {
      assert("TryStatement", node, opts);
    }
    function assertUnaryExpression(node, opts) {
      assert("UnaryExpression", node, opts);
    }
    function assertUpdateExpression(node, opts) {
      assert("UpdateExpression", node, opts);
    }
    function assertVariableDeclaration(node, opts) {
      assert("VariableDeclaration", node, opts);
    }
    function assertVariableDeclarator(node, opts) {
      assert("VariableDeclarator", node, opts);
    }
    function assertWhileStatement(node, opts) {
      assert("WhileStatement", node, opts);
    }
    function assertWithStatement(node, opts) {
      assert("WithStatement", node, opts);
    }
    function assertAssignmentPattern(node, opts) {
      assert("AssignmentPattern", node, opts);
    }
    function assertArrayPattern(node, opts) {
      assert("ArrayPattern", node, opts);
    }
    function assertArrowFunctionExpression(node, opts) {
      assert("ArrowFunctionExpression", node, opts);
    }
    function assertClassBody(node, opts) {
      assert("ClassBody", node, opts);
    }
    function assertClassExpression(node, opts) {
      assert("ClassExpression", node, opts);
    }
    function assertClassDeclaration(node, opts) {
      assert("ClassDeclaration", node, opts);
    }
    function assertExportAllDeclaration(node, opts) {
      assert("ExportAllDeclaration", node, opts);
    }
    function assertExportDefaultDeclaration(node, opts) {
      assert("ExportDefaultDeclaration", node, opts);
    }
    function assertExportNamedDeclaration(node, opts) {
      assert("ExportNamedDeclaration", node, opts);
    }
    function assertExportSpecifier(node, opts) {
      assert("ExportSpecifier", node, opts);
    }
    function assertForOfStatement(node, opts) {
      assert("ForOfStatement", node, opts);
    }
    function assertImportDeclaration(node, opts) {
      assert("ImportDeclaration", node, opts);
    }
    function assertImportDefaultSpecifier(node, opts) {
      assert("ImportDefaultSpecifier", node, opts);
    }
    function assertImportNamespaceSpecifier(node, opts) {
      assert("ImportNamespaceSpecifier", node, opts);
    }
    function assertImportSpecifier(node, opts) {
      assert("ImportSpecifier", node, opts);
    }
    function assertMetaProperty(node, opts) {
      assert("MetaProperty", node, opts);
    }
    function assertClassMethod(node, opts) {
      assert("ClassMethod", node, opts);
    }
    function assertObjectPattern(node, opts) {
      assert("ObjectPattern", node, opts);
    }
    function assertSpreadElement(node, opts) {
      assert("SpreadElement", node, opts);
    }
    function assertSuper(node, opts) {
      assert("Super", node, opts);
    }
    function assertTaggedTemplateExpression(node, opts) {
      assert("TaggedTemplateExpression", node, opts);
    }
    function assertTemplateElement(node, opts) {
      assert("TemplateElement", node, opts);
    }
    function assertTemplateLiteral(node, opts) {
      assert("TemplateLiteral", node, opts);
    }
    function assertYieldExpression(node, opts) {
      assert("YieldExpression", node, opts);
    }
    function assertAwaitExpression(node, opts) {
      assert("AwaitExpression", node, opts);
    }
    function assertImport(node, opts) {
      assert("Import", node, opts);
    }
    function assertBigIntLiteral(node, opts) {
      assert("BigIntLiteral", node, opts);
    }
    function assertExportNamespaceSpecifier(node, opts) {
      assert("ExportNamespaceSpecifier", node, opts);
    }
    function assertOptionalMemberExpression(node, opts) {
      assert("OptionalMemberExpression", node, opts);
    }
    function assertOptionalCallExpression(node, opts) {
      assert("OptionalCallExpression", node, opts);
    }
    function assertClassProperty(node, opts) {
      assert("ClassProperty", node, opts);
    }
    function assertClassAccessorProperty(node, opts) {
      assert("ClassAccessorProperty", node, opts);
    }
    function assertClassPrivateProperty(node, opts) {
      assert("ClassPrivateProperty", node, opts);
    }
    function assertClassPrivateMethod(node, opts) {
      assert("ClassPrivateMethod", node, opts);
    }
    function assertPrivateName(node, opts) {
      assert("PrivateName", node, opts);
    }
    function assertStaticBlock(node, opts) {
      assert("StaticBlock", node, opts);
    }
    function assertAnyTypeAnnotation(node, opts) {
      assert("AnyTypeAnnotation", node, opts);
    }
    function assertArrayTypeAnnotation(node, opts) {
      assert("ArrayTypeAnnotation", node, opts);
    }
    function assertBooleanTypeAnnotation(node, opts) {
      assert("BooleanTypeAnnotation", node, opts);
    }
    function assertBooleanLiteralTypeAnnotation(node, opts) {
      assert("BooleanLiteralTypeAnnotation", node, opts);
    }
    function assertNullLiteralTypeAnnotation(node, opts) {
      assert("NullLiteralTypeAnnotation", node, opts);
    }
    function assertClassImplements(node, opts) {
      assert("ClassImplements", node, opts);
    }
    function assertDeclareClass(node, opts) {
      assert("DeclareClass", node, opts);
    }
    function assertDeclareFunction(node, opts) {
      assert("DeclareFunction", node, opts);
    }
    function assertDeclareInterface(node, opts) {
      assert("DeclareInterface", node, opts);
    }
    function assertDeclareModule(node, opts) {
      assert("DeclareModule", node, opts);
    }
    function assertDeclareModuleExports(node, opts) {
      assert("DeclareModuleExports", node, opts);
    }
    function assertDeclareTypeAlias(node, opts) {
      assert("DeclareTypeAlias", node, opts);
    }
    function assertDeclareOpaqueType(node, opts) {
      assert("DeclareOpaqueType", node, opts);
    }
    function assertDeclareVariable(node, opts) {
      assert("DeclareVariable", node, opts);
    }
    function assertDeclareExportDeclaration(node, opts) {
      assert("DeclareExportDeclaration", node, opts);
    }
    function assertDeclareExportAllDeclaration(node, opts) {
      assert("DeclareExportAllDeclaration", node, opts);
    }
    function assertDeclaredPredicate(node, opts) {
      assert("DeclaredPredicate", node, opts);
    }
    function assertExistsTypeAnnotation(node, opts) {
      assert("ExistsTypeAnnotation", node, opts);
    }
    function assertFunctionTypeAnnotation(node, opts) {
      assert("FunctionTypeAnnotation", node, opts);
    }
    function assertFunctionTypeParam(node, opts) {
      assert("FunctionTypeParam", node, opts);
    }
    function assertGenericTypeAnnotation(node, opts) {
      assert("GenericTypeAnnotation", node, opts);
    }
    function assertInferredPredicate(node, opts) {
      assert("InferredPredicate", node, opts);
    }
    function assertInterfaceExtends(node, opts) {
      assert("InterfaceExtends", node, opts);
    }
    function assertInterfaceDeclaration(node, opts) {
      assert("InterfaceDeclaration", node, opts);
    }
    function assertInterfaceTypeAnnotation(node, opts) {
      assert("InterfaceTypeAnnotation", node, opts);
    }
    function assertIntersectionTypeAnnotation(node, opts) {
      assert("IntersectionTypeAnnotation", node, opts);
    }
    function assertMixedTypeAnnotation(node, opts) {
      assert("MixedTypeAnnotation", node, opts);
    }
    function assertEmptyTypeAnnotation(node, opts) {
      assert("EmptyTypeAnnotation", node, opts);
    }
    function assertNullableTypeAnnotation(node, opts) {
      assert("NullableTypeAnnotation", node, opts);
    }
    function assertNumberLiteralTypeAnnotation(node, opts) {
      assert("NumberLiteralTypeAnnotation", node, opts);
    }
    function assertNumberTypeAnnotation(node, opts) {
      assert("NumberTypeAnnotation", node, opts);
    }
    function assertObjectTypeAnnotation(node, opts) {
      assert("ObjectTypeAnnotation", node, opts);
    }
    function assertObjectTypeInternalSlot(node, opts) {
      assert("ObjectTypeInternalSlot", node, opts);
    }
    function assertObjectTypeCallProperty(node, opts) {
      assert("ObjectTypeCallProperty", node, opts);
    }
    function assertObjectTypeIndexer(node, opts) {
      assert("ObjectTypeIndexer", node, opts);
    }
    function assertObjectTypeProperty(node, opts) {
      assert("ObjectTypeProperty", node, opts);
    }
    function assertObjectTypeSpreadProperty(node, opts) {
      assert("ObjectTypeSpreadProperty", node, opts);
    }
    function assertOpaqueType(node, opts) {
      assert("OpaqueType", node, opts);
    }
    function assertQualifiedTypeIdentifier(node, opts) {
      assert("QualifiedTypeIdentifier", node, opts);
    }
    function assertStringLiteralTypeAnnotation(node, opts) {
      assert("StringLiteralTypeAnnotation", node, opts);
    }
    function assertStringTypeAnnotation(node, opts) {
      assert("StringTypeAnnotation", node, opts);
    }
    function assertSymbolTypeAnnotation(node, opts) {
      assert("SymbolTypeAnnotation", node, opts);
    }
    function assertThisTypeAnnotation(node, opts) {
      assert("ThisTypeAnnotation", node, opts);
    }
    function assertTupleTypeAnnotation(node, opts) {
      assert("TupleTypeAnnotation", node, opts);
    }
    function assertTypeofTypeAnnotation(node, opts) {
      assert("TypeofTypeAnnotation", node, opts);
    }
    function assertTypeAlias(node, opts) {
      assert("TypeAlias", node, opts);
    }
    function assertTypeAnnotation(node, opts) {
      assert("TypeAnnotation", node, opts);
    }
    function assertTypeCastExpression(node, opts) {
      assert("TypeCastExpression", node, opts);
    }
    function assertTypeParameter(node, opts) {
      assert("TypeParameter", node, opts);
    }
    function assertTypeParameterDeclaration(node, opts) {
      assert("TypeParameterDeclaration", node, opts);
    }
    function assertTypeParameterInstantiation(node, opts) {
      assert("TypeParameterInstantiation", node, opts);
    }
    function assertUnionTypeAnnotation(node, opts) {
      assert("UnionTypeAnnotation", node, opts);
    }
    function assertVariance(node, opts) {
      assert("Variance", node, opts);
    }
    function assertVoidTypeAnnotation(node, opts) {
      assert("VoidTypeAnnotation", node, opts);
    }
    function assertEnumDeclaration(node, opts) {
      assert("EnumDeclaration", node, opts);
    }
    function assertEnumBooleanBody(node, opts) {
      assert("EnumBooleanBody", node, opts);
    }
    function assertEnumNumberBody(node, opts) {
      assert("EnumNumberBody", node, opts);
    }
    function assertEnumStringBody(node, opts) {
      assert("EnumStringBody", node, opts);
    }
    function assertEnumSymbolBody(node, opts) {
      assert("EnumSymbolBody", node, opts);
    }
    function assertEnumBooleanMember(node, opts) {
      assert("EnumBooleanMember", node, opts);
    }
    function assertEnumNumberMember(node, opts) {
      assert("EnumNumberMember", node, opts);
    }
    function assertEnumStringMember(node, opts) {
      assert("EnumStringMember", node, opts);
    }
    function assertEnumDefaultedMember(node, opts) {
      assert("EnumDefaultedMember", node, opts);
    }
    function assertIndexedAccessType(node, opts) {
      assert("IndexedAccessType", node, opts);
    }
    function assertOptionalIndexedAccessType(node, opts) {
      assert("OptionalIndexedAccessType", node, opts);
    }
    function assertJSXAttribute(node, opts) {
      assert("JSXAttribute", node, opts);
    }
    function assertJSXClosingElement(node, opts) {
      assert("JSXClosingElement", node, opts);
    }
    function assertJSXElement(node, opts) {
      assert("JSXElement", node, opts);
    }
    function assertJSXEmptyExpression(node, opts) {
      assert("JSXEmptyExpression", node, opts);
    }
    function assertJSXExpressionContainer(node, opts) {
      assert("JSXExpressionContainer", node, opts);
    }
    function assertJSXSpreadChild(node, opts) {
      assert("JSXSpreadChild", node, opts);
    }
    function assertJSXIdentifier(node, opts) {
      assert("JSXIdentifier", node, opts);
    }
    function assertJSXMemberExpression(node, opts) {
      assert("JSXMemberExpression", node, opts);
    }
    function assertJSXNamespacedName(node, opts) {
      assert("JSXNamespacedName", node, opts);
    }
    function assertJSXOpeningElement(node, opts) {
      assert("JSXOpeningElement", node, opts);
    }
    function assertJSXSpreadAttribute(node, opts) {
      assert("JSXSpreadAttribute", node, opts);
    }
    function assertJSXText(node, opts) {
      assert("JSXText", node, opts);
    }
    function assertJSXFragment(node, opts) {
      assert("JSXFragment", node, opts);
    }
    function assertJSXOpeningFragment(node, opts) {
      assert("JSXOpeningFragment", node, opts);
    }
    function assertJSXClosingFragment(node, opts) {
      assert("JSXClosingFragment", node, opts);
    }
    function assertNoop(node, opts) {
      assert("Noop", node, opts);
    }
    function assertPlaceholder(node, opts) {
      assert("Placeholder", node, opts);
    }
    function assertV8IntrinsicIdentifier(node, opts) {
      assert("V8IntrinsicIdentifier", node, opts);
    }
    function assertArgumentPlaceholder(node, opts) {
      assert("ArgumentPlaceholder", node, opts);
    }
    function assertBindExpression(node, opts) {
      assert("BindExpression", node, opts);
    }
    function assertImportAttribute(node, opts) {
      assert("ImportAttribute", node, opts);
    }
    function assertDecorator(node, opts) {
      assert("Decorator", node, opts);
    }
    function assertDoExpression(node, opts) {
      assert("DoExpression", node, opts);
    }
    function assertExportDefaultSpecifier(node, opts) {
      assert("ExportDefaultSpecifier", node, opts);
    }
    function assertRecordExpression(node, opts) {
      assert("RecordExpression", node, opts);
    }
    function assertTupleExpression(node, opts) {
      assert("TupleExpression", node, opts);
    }
    function assertDecimalLiteral(node, opts) {
      assert("DecimalLiteral", node, opts);
    }
    function assertModuleExpression(node, opts) {
      assert("ModuleExpression", node, opts);
    }
    function assertTopicReference(node, opts) {
      assert("TopicReference", node, opts);
    }
    function assertPipelineTopicExpression(node, opts) {
      assert("PipelineTopicExpression", node, opts);
    }
    function assertPipelineBareFunction(node, opts) {
      assert("PipelineBareFunction", node, opts);
    }
    function assertPipelinePrimaryTopicReference(node, opts) {
      assert("PipelinePrimaryTopicReference", node, opts);
    }
    function assertTSParameterProperty(node, opts) {
      assert("TSParameterProperty", node, opts);
    }
    function assertTSDeclareFunction(node, opts) {
      assert("TSDeclareFunction", node, opts);
    }
    function assertTSDeclareMethod(node, opts) {
      assert("TSDeclareMethod", node, opts);
    }
    function assertTSQualifiedName(node, opts) {
      assert("TSQualifiedName", node, opts);
    }
    function assertTSCallSignatureDeclaration(node, opts) {
      assert("TSCallSignatureDeclaration", node, opts);
    }
    function assertTSConstructSignatureDeclaration(node, opts) {
      assert("TSConstructSignatureDeclaration", node, opts);
    }
    function assertTSPropertySignature(node, opts) {
      assert("TSPropertySignature", node, opts);
    }
    function assertTSMethodSignature(node, opts) {
      assert("TSMethodSignature", node, opts);
    }
    function assertTSIndexSignature(node, opts) {
      assert("TSIndexSignature", node, opts);
    }
    function assertTSAnyKeyword(node, opts) {
      assert("TSAnyKeyword", node, opts);
    }
    function assertTSBooleanKeyword(node, opts) {
      assert("TSBooleanKeyword", node, opts);
    }
    function assertTSBigIntKeyword(node, opts) {
      assert("TSBigIntKeyword", node, opts);
    }
    function assertTSIntrinsicKeyword(node, opts) {
      assert("TSIntrinsicKeyword", node, opts);
    }
    function assertTSNeverKeyword(node, opts) {
      assert("TSNeverKeyword", node, opts);
    }
    function assertTSNullKeyword(node, opts) {
      assert("TSNullKeyword", node, opts);
    }
    function assertTSNumberKeyword(node, opts) {
      assert("TSNumberKeyword", node, opts);
    }
    function assertTSObjectKeyword(node, opts) {
      assert("TSObjectKeyword", node, opts);
    }
    function assertTSStringKeyword(node, opts) {
      assert("TSStringKeyword", node, opts);
    }
    function assertTSSymbolKeyword(node, opts) {
      assert("TSSymbolKeyword", node, opts);
    }
    function assertTSUndefinedKeyword(node, opts) {
      assert("TSUndefinedKeyword", node, opts);
    }
    function assertTSUnknownKeyword(node, opts) {
      assert("TSUnknownKeyword", node, opts);
    }
    function assertTSVoidKeyword(node, opts) {
      assert("TSVoidKeyword", node, opts);
    }
    function assertTSThisType(node, opts) {
      assert("TSThisType", node, opts);
    }
    function assertTSFunctionType(node, opts) {
      assert("TSFunctionType", node, opts);
    }
    function assertTSConstructorType(node, opts) {
      assert("TSConstructorType", node, opts);
    }
    function assertTSTypeReference(node, opts) {
      assert("TSTypeReference", node, opts);
    }
    function assertTSTypePredicate(node, opts) {
      assert("TSTypePredicate", node, opts);
    }
    function assertTSTypeQuery(node, opts) {
      assert("TSTypeQuery", node, opts);
    }
    function assertTSTypeLiteral(node, opts) {
      assert("TSTypeLiteral", node, opts);
    }
    function assertTSArrayType(node, opts) {
      assert("TSArrayType", node, opts);
    }
    function assertTSTupleType(node, opts) {
      assert("TSTupleType", node, opts);
    }
    function assertTSOptionalType(node, opts) {
      assert("TSOptionalType", node, opts);
    }
    function assertTSRestType(node, opts) {
      assert("TSRestType", node, opts);
    }
    function assertTSNamedTupleMember(node, opts) {
      assert("TSNamedTupleMember", node, opts);
    }
    function assertTSUnionType(node, opts) {
      assert("TSUnionType", node, opts);
    }
    function assertTSIntersectionType(node, opts) {
      assert("TSIntersectionType", node, opts);
    }
    function assertTSConditionalType(node, opts) {
      assert("TSConditionalType", node, opts);
    }
    function assertTSInferType(node, opts) {
      assert("TSInferType", node, opts);
    }
    function assertTSParenthesizedType(node, opts) {
      assert("TSParenthesizedType", node, opts);
    }
    function assertTSTypeOperator(node, opts) {
      assert("TSTypeOperator", node, opts);
    }
    function assertTSIndexedAccessType(node, opts) {
      assert("TSIndexedAccessType", node, opts);
    }
    function assertTSMappedType(node, opts) {
      assert("TSMappedType", node, opts);
    }
    function assertTSLiteralType(node, opts) {
      assert("TSLiteralType", node, opts);
    }
    function assertTSExpressionWithTypeArguments(node, opts) {
      assert("TSExpressionWithTypeArguments", node, opts);
    }
    function assertTSInterfaceDeclaration(node, opts) {
      assert("TSInterfaceDeclaration", node, opts);
    }
    function assertTSInterfaceBody(node, opts) {
      assert("TSInterfaceBody", node, opts);
    }
    function assertTSTypeAliasDeclaration(node, opts) {
      assert("TSTypeAliasDeclaration", node, opts);
    }
    function assertTSInstantiationExpression(node, opts) {
      assert("TSInstantiationExpression", node, opts);
    }
    function assertTSAsExpression(node, opts) {
      assert("TSAsExpression", node, opts);
    }
    function assertTSTypeAssertion(node, opts) {
      assert("TSTypeAssertion", node, opts);
    }
    function assertTSEnumDeclaration(node, opts) {
      assert("TSEnumDeclaration", node, opts);
    }
    function assertTSEnumMember(node, opts) {
      assert("TSEnumMember", node, opts);
    }
    function assertTSModuleDeclaration(node, opts) {
      assert("TSModuleDeclaration", node, opts);
    }
    function assertTSModuleBlock(node, opts) {
      assert("TSModuleBlock", node, opts);
    }
    function assertTSImportType(node, opts) {
      assert("TSImportType", node, opts);
    }
    function assertTSImportEqualsDeclaration(node, opts) {
      assert("TSImportEqualsDeclaration", node, opts);
    }
    function assertTSExternalModuleReference(node, opts) {
      assert("TSExternalModuleReference", node, opts);
    }
    function assertTSNonNullExpression(node, opts) {
      assert("TSNonNullExpression", node, opts);
    }
    function assertTSExportAssignment(node, opts) {
      assert("TSExportAssignment", node, opts);
    }
    function assertTSNamespaceExportDeclaration(node, opts) {
      assert("TSNamespaceExportDeclaration", node, opts);
    }
    function assertTSTypeAnnotation(node, opts) {
      assert("TSTypeAnnotation", node, opts);
    }
    function assertTSTypeParameterInstantiation(node, opts) {
      assert("TSTypeParameterInstantiation", node, opts);
    }
    function assertTSTypeParameterDeclaration(node, opts) {
      assert("TSTypeParameterDeclaration", node, opts);
    }
    function assertTSTypeParameter(node, opts) {
      assert("TSTypeParameter", node, opts);
    }
    function assertStandardized(node, opts) {
      assert("Standardized", node, opts);
    }
    function assertExpression(node, opts) {
      assert("Expression", node, opts);
    }
    function assertBinary(node, opts) {
      assert("Binary", node, opts);
    }
    function assertScopable(node, opts) {
      assert("Scopable", node, opts);
    }
    function assertBlockParent(node, opts) {
      assert("BlockParent", node, opts);
    }
    function assertBlock(node, opts) {
      assert("Block", node, opts);
    }
    function assertStatement(node, opts) {
      assert("Statement", node, opts);
    }
    function assertTerminatorless(node, opts) {
      assert("Terminatorless", node, opts);
    }
    function assertCompletionStatement(node, opts) {
      assert("CompletionStatement", node, opts);
    }
    function assertConditional(node, opts) {
      assert("Conditional", node, opts);
    }
    function assertLoop(node, opts) {
      assert("Loop", node, opts);
    }
    function assertWhile(node, opts) {
      assert("While", node, opts);
    }
    function assertExpressionWrapper(node, opts) {
      assert("ExpressionWrapper", node, opts);
    }
    function assertFor(node, opts) {
      assert("For", node, opts);
    }
    function assertForXStatement(node, opts) {
      assert("ForXStatement", node, opts);
    }
    function assertFunction(node, opts) {
      assert("Function", node, opts);
    }
    function assertFunctionParent(node, opts) {
      assert("FunctionParent", node, opts);
    }
    function assertPureish(node, opts) {
      assert("Pureish", node, opts);
    }
    function assertDeclaration(node, opts) {
      assert("Declaration", node, opts);
    }
    function assertPatternLike(node, opts) {
      assert("PatternLike", node, opts);
    }
    function assertLVal(node, opts) {
      assert("LVal", node, opts);
    }
    function assertTSEntityName(node, opts) {
      assert("TSEntityName", node, opts);
    }
    function assertLiteral(node, opts) {
      assert("Literal", node, opts);
    }
    function assertImmutable(node, opts) {
      assert("Immutable", node, opts);
    }
    function assertUserWhitespacable(node, opts) {
      assert("UserWhitespacable", node, opts);
    }
    function assertMethod(node, opts) {
      assert("Method", node, opts);
    }
    function assertObjectMember(node, opts) {
      assert("ObjectMember", node, opts);
    }
    function assertProperty(node, opts) {
      assert("Property", node, opts);
    }
    function assertUnaryLike(node, opts) {
      assert("UnaryLike", node, opts);
    }
    function assertPattern(node, opts) {
      assert("Pattern", node, opts);
    }
    function assertClass(node, opts) {
      assert("Class", node, opts);
    }
    function assertModuleDeclaration(node, opts) {
      assert("ModuleDeclaration", node, opts);
    }
    function assertExportDeclaration(node, opts) {
      assert("ExportDeclaration", node, opts);
    }
    function assertModuleSpecifier(node, opts) {
      assert("ModuleSpecifier", node, opts);
    }
    function assertAccessor(node, opts) {
      assert("Accessor", node, opts);
    }
    function assertPrivate(node, opts) {
      assert("Private", node, opts);
    }
    function assertFlow(node, opts) {
      assert("Flow", node, opts);
    }
    function assertFlowType(node, opts) {
      assert("FlowType", node, opts);
    }
    function assertFlowBaseAnnotation(node, opts) {
      assert("FlowBaseAnnotation", node, opts);
    }
    function assertFlowDeclaration(node, opts) {
      assert("FlowDeclaration", node, opts);
    }
    function assertFlowPredicate(node, opts) {
      assert("FlowPredicate", node, opts);
    }
    function assertEnumBody(node, opts) {
      assert("EnumBody", node, opts);
    }
    function assertEnumMember(node, opts) {
      assert("EnumMember", node, opts);
    }
    function assertJSX(node, opts) {
      assert("JSX", node, opts);
    }
    function assertMiscellaneous(node, opts) {
      assert("Miscellaneous", node, opts);
    }
    function assertTypeScript(node, opts) {
      assert("TypeScript", node, opts);
    }
    function assertTSTypeElement(node, opts) {
      assert("TSTypeElement", node, opts);
    }
    function assertTSType(node, opts) {
      assert("TSType", node, opts);
    }
    function assertTSBaseType(node, opts) {
      assert("TSBaseType", node, opts);
    }
    function assertNumberLiteral(node, opts) {
      console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
      assert("NumberLiteral", node, opts);
    }
    function assertRegexLiteral(node, opts) {
      console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
      assert("RegexLiteral", node, opts);
    }
    function assertRestProperty(node, opts) {
      console.trace("The node type RestProperty has been renamed to RestElement");
      assert("RestProperty", node, opts);
    }
    function assertSpreadProperty(node, opts) {
      console.trace("The node type SpreadProperty has been renamed to SpreadElement");
      assert("SpreadProperty", node, opts);
    }
  }
});

// node_modules/@babel/types/lib/builders/flow/createTypeAnnotationBasedOnTypeof.js
var require_createTypeAnnotationBasedOnTypeof = __commonJS({
  "node_modules/@babel/types/lib/builders/flow/createTypeAnnotationBasedOnTypeof.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _generated = require_generated2();
    var _default = createTypeAnnotationBasedOnTypeof;
    exports.default = _default;
    function createTypeAnnotationBasedOnTypeof(type) {
      switch (type) {
        case "string":
          return (0, _generated.stringTypeAnnotation)();
        case "number":
          return (0, _generated.numberTypeAnnotation)();
        case "undefined":
          return (0, _generated.voidTypeAnnotation)();
        case "boolean":
          return (0, _generated.booleanTypeAnnotation)();
        case "function":
          return (0, _generated.genericTypeAnnotation)((0, _generated.identifier)("Function"));
        case "object":
          return (0, _generated.genericTypeAnnotation)((0, _generated.identifier)("Object"));
        case "symbol":
          return (0, _generated.genericTypeAnnotation)((0, _generated.identifier)("Symbol"));
        case "bigint":
          return (0, _generated.anyTypeAnnotation)();
      }
      throw new Error("Invalid typeof value: " + type);
    }
  }
});

// node_modules/@babel/types/lib/modifications/flow/removeTypeDuplicates.js
var require_removeTypeDuplicates = __commonJS({
  "node_modules/@babel/types/lib/modifications/flow/removeTypeDuplicates.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = removeTypeDuplicates;
    var _generated = require_generated();
    function getQualifiedName(node) {
      return (0, _generated.isIdentifier)(node) ? node.name : `${node.id.name}.${getQualifiedName(node.qualification)}`;
    }
    function removeTypeDuplicates(nodes) {
      const generics = /* @__PURE__ */ new Map();
      const bases = /* @__PURE__ */ new Map();
      const typeGroups = /* @__PURE__ */ new Set();
      const types = [];
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (!node)
          continue;
        if (types.indexOf(node) >= 0) {
          continue;
        }
        if ((0, _generated.isAnyTypeAnnotation)(node)) {
          return [node];
        }
        if ((0, _generated.isFlowBaseAnnotation)(node)) {
          bases.set(node.type, node);
          continue;
        }
        if ((0, _generated.isUnionTypeAnnotation)(node)) {
          if (!typeGroups.has(node.types)) {
            nodes = nodes.concat(node.types);
            typeGroups.add(node.types);
          }
          continue;
        }
        if ((0, _generated.isGenericTypeAnnotation)(node)) {
          const name = getQualifiedName(node.id);
          if (generics.has(name)) {
            let existing = generics.get(name);
            if (existing.typeParameters) {
              if (node.typeParameters) {
                existing.typeParameters.params = removeTypeDuplicates(existing.typeParameters.params.concat(node.typeParameters.params));
              }
            } else {
              existing = node.typeParameters;
            }
          } else {
            generics.set(name, node);
          }
          continue;
        }
        types.push(node);
      }
      for (const [, baseType] of bases) {
        types.push(baseType);
      }
      for (const [, genericName] of generics) {
        types.push(genericName);
      }
      return types;
    }
  }
});

// node_modules/@babel/types/lib/builders/flow/createFlowUnionType.js
var require_createFlowUnionType = __commonJS({
  "node_modules/@babel/types/lib/builders/flow/createFlowUnionType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = createFlowUnionType;
    var _generated = require_generated2();
    var _removeTypeDuplicates = require_removeTypeDuplicates();
    function createFlowUnionType(types) {
      const flattened = (0, _removeTypeDuplicates.default)(types);
      if (flattened.length === 1) {
        return flattened[0];
      } else {
        return (0, _generated.unionTypeAnnotation)(flattened);
      }
    }
  }
});

// node_modules/@babel/types/lib/modifications/typescript/removeTypeDuplicates.js
var require_removeTypeDuplicates2 = __commonJS({
  "node_modules/@babel/types/lib/modifications/typescript/removeTypeDuplicates.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = removeTypeDuplicates;
    var _generated = require_generated();
    function getQualifiedName(node) {
      return (0, _generated.isIdentifier)(node) ? node.name : `${node.right.name}.${getQualifiedName(node.left)}`;
    }
    function removeTypeDuplicates(nodes) {
      const generics = /* @__PURE__ */ new Map();
      const bases = /* @__PURE__ */ new Map();
      const typeGroups = /* @__PURE__ */ new Set();
      const types = [];
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (!node)
          continue;
        if (types.indexOf(node) >= 0) {
          continue;
        }
        if ((0, _generated.isTSAnyKeyword)(node)) {
          return [node];
        }
        if ((0, _generated.isTSBaseType)(node)) {
          bases.set(node.type, node);
          continue;
        }
        if ((0, _generated.isTSUnionType)(node)) {
          if (!typeGroups.has(node.types)) {
            nodes.push(...node.types);
            typeGroups.add(node.types);
          }
          continue;
        }
        if ((0, _generated.isTSTypeReference)(node) && node.typeParameters) {
          const name = getQualifiedName(node.typeName);
          if (generics.has(name)) {
            let existing = generics.get(name);
            if (existing.typeParameters) {
              if (node.typeParameters) {
                existing.typeParameters.params = removeTypeDuplicates(existing.typeParameters.params.concat(node.typeParameters.params));
              }
            } else {
              existing = node.typeParameters;
            }
          } else {
            generics.set(name, node);
          }
          continue;
        }
        types.push(node);
      }
      for (const [, baseType] of bases) {
        types.push(baseType);
      }
      for (const [, genericName] of generics) {
        types.push(genericName);
      }
      return types;
    }
  }
});

// node_modules/@babel/types/lib/builders/typescript/createTSUnionType.js
var require_createTSUnionType = __commonJS({
  "node_modules/@babel/types/lib/builders/typescript/createTSUnionType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = createTSUnionType;
    var _generated = require_generated2();
    var _removeTypeDuplicates = require_removeTypeDuplicates2();
    var _index = require_generated();
    function createTSUnionType(typeAnnotations) {
      const types = typeAnnotations.map((type) => {
        return (0, _index.isTSTypeAnnotation)(type) ? type.typeAnnotation : type;
      });
      const flattened = (0, _removeTypeDuplicates.default)(types);
      if (flattened.length === 1) {
        return flattened[0];
      } else {
        return (0, _generated.tsUnionType)(flattened);
      }
    }
  }
});

// node_modules/@babel/types/lib/builders/generated/uppercase.js
var require_uppercase = __commonJS({
  "node_modules/@babel/types/lib/builders/generated/uppercase.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "AnyTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.anyTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "ArgumentPlaceholder", {
      enumerable: true,
      get: function() {
        return _index.argumentPlaceholder;
      }
    });
    Object.defineProperty(exports, "ArrayExpression", {
      enumerable: true,
      get: function() {
        return _index.arrayExpression;
      }
    });
    Object.defineProperty(exports, "ArrayPattern", {
      enumerable: true,
      get: function() {
        return _index.arrayPattern;
      }
    });
    Object.defineProperty(exports, "ArrayTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.arrayTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "ArrowFunctionExpression", {
      enumerable: true,
      get: function() {
        return _index.arrowFunctionExpression;
      }
    });
    Object.defineProperty(exports, "AssignmentExpression", {
      enumerable: true,
      get: function() {
        return _index.assignmentExpression;
      }
    });
    Object.defineProperty(exports, "AssignmentPattern", {
      enumerable: true,
      get: function() {
        return _index.assignmentPattern;
      }
    });
    Object.defineProperty(exports, "AwaitExpression", {
      enumerable: true,
      get: function() {
        return _index.awaitExpression;
      }
    });
    Object.defineProperty(exports, "BigIntLiteral", {
      enumerable: true,
      get: function() {
        return _index.bigIntLiteral;
      }
    });
    Object.defineProperty(exports, "BinaryExpression", {
      enumerable: true,
      get: function() {
        return _index.binaryExpression;
      }
    });
    Object.defineProperty(exports, "BindExpression", {
      enumerable: true,
      get: function() {
        return _index.bindExpression;
      }
    });
    Object.defineProperty(exports, "BlockStatement", {
      enumerable: true,
      get: function() {
        return _index.blockStatement;
      }
    });
    Object.defineProperty(exports, "BooleanLiteral", {
      enumerable: true,
      get: function() {
        return _index.booleanLiteral;
      }
    });
    Object.defineProperty(exports, "BooleanLiteralTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.booleanLiteralTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "BooleanTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.booleanTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "BreakStatement", {
      enumerable: true,
      get: function() {
        return _index.breakStatement;
      }
    });
    Object.defineProperty(exports, "CallExpression", {
      enumerable: true,
      get: function() {
        return _index.callExpression;
      }
    });
    Object.defineProperty(exports, "CatchClause", {
      enumerable: true,
      get: function() {
        return _index.catchClause;
      }
    });
    Object.defineProperty(exports, "ClassAccessorProperty", {
      enumerable: true,
      get: function() {
        return _index.classAccessorProperty;
      }
    });
    Object.defineProperty(exports, "ClassBody", {
      enumerable: true,
      get: function() {
        return _index.classBody;
      }
    });
    Object.defineProperty(exports, "ClassDeclaration", {
      enumerable: true,
      get: function() {
        return _index.classDeclaration;
      }
    });
    Object.defineProperty(exports, "ClassExpression", {
      enumerable: true,
      get: function() {
        return _index.classExpression;
      }
    });
    Object.defineProperty(exports, "ClassImplements", {
      enumerable: true,
      get: function() {
        return _index.classImplements;
      }
    });
    Object.defineProperty(exports, "ClassMethod", {
      enumerable: true,
      get: function() {
        return _index.classMethod;
      }
    });
    Object.defineProperty(exports, "ClassPrivateMethod", {
      enumerable: true,
      get: function() {
        return _index.classPrivateMethod;
      }
    });
    Object.defineProperty(exports, "ClassPrivateProperty", {
      enumerable: true,
      get: function() {
        return _index.classPrivateProperty;
      }
    });
    Object.defineProperty(exports, "ClassProperty", {
      enumerable: true,
      get: function() {
        return _index.classProperty;
      }
    });
    Object.defineProperty(exports, "ConditionalExpression", {
      enumerable: true,
      get: function() {
        return _index.conditionalExpression;
      }
    });
    Object.defineProperty(exports, "ContinueStatement", {
      enumerable: true,
      get: function() {
        return _index.continueStatement;
      }
    });
    Object.defineProperty(exports, "DebuggerStatement", {
      enumerable: true,
      get: function() {
        return _index.debuggerStatement;
      }
    });
    Object.defineProperty(exports, "DecimalLiteral", {
      enumerable: true,
      get: function() {
        return _index.decimalLiteral;
      }
    });
    Object.defineProperty(exports, "DeclareClass", {
      enumerable: true,
      get: function() {
        return _index.declareClass;
      }
    });
    Object.defineProperty(exports, "DeclareExportAllDeclaration", {
      enumerable: true,
      get: function() {
        return _index.declareExportAllDeclaration;
      }
    });
    Object.defineProperty(exports, "DeclareExportDeclaration", {
      enumerable: true,
      get: function() {
        return _index.declareExportDeclaration;
      }
    });
    Object.defineProperty(exports, "DeclareFunction", {
      enumerable: true,
      get: function() {
        return _index.declareFunction;
      }
    });
    Object.defineProperty(exports, "DeclareInterface", {
      enumerable: true,
      get: function() {
        return _index.declareInterface;
      }
    });
    Object.defineProperty(exports, "DeclareModule", {
      enumerable: true,
      get: function() {
        return _index.declareModule;
      }
    });
    Object.defineProperty(exports, "DeclareModuleExports", {
      enumerable: true,
      get: function() {
        return _index.declareModuleExports;
      }
    });
    Object.defineProperty(exports, "DeclareOpaqueType", {
      enumerable: true,
      get: function() {
        return _index.declareOpaqueType;
      }
    });
    Object.defineProperty(exports, "DeclareTypeAlias", {
      enumerable: true,
      get: function() {
        return _index.declareTypeAlias;
      }
    });
    Object.defineProperty(exports, "DeclareVariable", {
      enumerable: true,
      get: function() {
        return _index.declareVariable;
      }
    });
    Object.defineProperty(exports, "DeclaredPredicate", {
      enumerable: true,
      get: function() {
        return _index.declaredPredicate;
      }
    });
    Object.defineProperty(exports, "Decorator", {
      enumerable: true,
      get: function() {
        return _index.decorator;
      }
    });
    Object.defineProperty(exports, "Directive", {
      enumerable: true,
      get: function() {
        return _index.directive;
      }
    });
    Object.defineProperty(exports, "DirectiveLiteral", {
      enumerable: true,
      get: function() {
        return _index.directiveLiteral;
      }
    });
    Object.defineProperty(exports, "DoExpression", {
      enumerable: true,
      get: function() {
        return _index.doExpression;
      }
    });
    Object.defineProperty(exports, "DoWhileStatement", {
      enumerable: true,
      get: function() {
        return _index.doWhileStatement;
      }
    });
    Object.defineProperty(exports, "EmptyStatement", {
      enumerable: true,
      get: function() {
        return _index.emptyStatement;
      }
    });
    Object.defineProperty(exports, "EmptyTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.emptyTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "EnumBooleanBody", {
      enumerable: true,
      get: function() {
        return _index.enumBooleanBody;
      }
    });
    Object.defineProperty(exports, "EnumBooleanMember", {
      enumerable: true,
      get: function() {
        return _index.enumBooleanMember;
      }
    });
    Object.defineProperty(exports, "EnumDeclaration", {
      enumerable: true,
      get: function() {
        return _index.enumDeclaration;
      }
    });
    Object.defineProperty(exports, "EnumDefaultedMember", {
      enumerable: true,
      get: function() {
        return _index.enumDefaultedMember;
      }
    });
    Object.defineProperty(exports, "EnumNumberBody", {
      enumerable: true,
      get: function() {
        return _index.enumNumberBody;
      }
    });
    Object.defineProperty(exports, "EnumNumberMember", {
      enumerable: true,
      get: function() {
        return _index.enumNumberMember;
      }
    });
    Object.defineProperty(exports, "EnumStringBody", {
      enumerable: true,
      get: function() {
        return _index.enumStringBody;
      }
    });
    Object.defineProperty(exports, "EnumStringMember", {
      enumerable: true,
      get: function() {
        return _index.enumStringMember;
      }
    });
    Object.defineProperty(exports, "EnumSymbolBody", {
      enumerable: true,
      get: function() {
        return _index.enumSymbolBody;
      }
    });
    Object.defineProperty(exports, "ExistsTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.existsTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "ExportAllDeclaration", {
      enumerable: true,
      get: function() {
        return _index.exportAllDeclaration;
      }
    });
    Object.defineProperty(exports, "ExportDefaultDeclaration", {
      enumerable: true,
      get: function() {
        return _index.exportDefaultDeclaration;
      }
    });
    Object.defineProperty(exports, "ExportDefaultSpecifier", {
      enumerable: true,
      get: function() {
        return _index.exportDefaultSpecifier;
      }
    });
    Object.defineProperty(exports, "ExportNamedDeclaration", {
      enumerable: true,
      get: function() {
        return _index.exportNamedDeclaration;
      }
    });
    Object.defineProperty(exports, "ExportNamespaceSpecifier", {
      enumerable: true,
      get: function() {
        return _index.exportNamespaceSpecifier;
      }
    });
    Object.defineProperty(exports, "ExportSpecifier", {
      enumerable: true,
      get: function() {
        return _index.exportSpecifier;
      }
    });
    Object.defineProperty(exports, "ExpressionStatement", {
      enumerable: true,
      get: function() {
        return _index.expressionStatement;
      }
    });
    Object.defineProperty(exports, "File", {
      enumerable: true,
      get: function() {
        return _index.file;
      }
    });
    Object.defineProperty(exports, "ForInStatement", {
      enumerable: true,
      get: function() {
        return _index.forInStatement;
      }
    });
    Object.defineProperty(exports, "ForOfStatement", {
      enumerable: true,
      get: function() {
        return _index.forOfStatement;
      }
    });
    Object.defineProperty(exports, "ForStatement", {
      enumerable: true,
      get: function() {
        return _index.forStatement;
      }
    });
    Object.defineProperty(exports, "FunctionDeclaration", {
      enumerable: true,
      get: function() {
        return _index.functionDeclaration;
      }
    });
    Object.defineProperty(exports, "FunctionExpression", {
      enumerable: true,
      get: function() {
        return _index.functionExpression;
      }
    });
    Object.defineProperty(exports, "FunctionTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.functionTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "FunctionTypeParam", {
      enumerable: true,
      get: function() {
        return _index.functionTypeParam;
      }
    });
    Object.defineProperty(exports, "GenericTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.genericTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "Identifier", {
      enumerable: true,
      get: function() {
        return _index.identifier;
      }
    });
    Object.defineProperty(exports, "IfStatement", {
      enumerable: true,
      get: function() {
        return _index.ifStatement;
      }
    });
    Object.defineProperty(exports, "Import", {
      enumerable: true,
      get: function() {
        return _index.import;
      }
    });
    Object.defineProperty(exports, "ImportAttribute", {
      enumerable: true,
      get: function() {
        return _index.importAttribute;
      }
    });
    Object.defineProperty(exports, "ImportDeclaration", {
      enumerable: true,
      get: function() {
        return _index.importDeclaration;
      }
    });
    Object.defineProperty(exports, "ImportDefaultSpecifier", {
      enumerable: true,
      get: function() {
        return _index.importDefaultSpecifier;
      }
    });
    Object.defineProperty(exports, "ImportNamespaceSpecifier", {
      enumerable: true,
      get: function() {
        return _index.importNamespaceSpecifier;
      }
    });
    Object.defineProperty(exports, "ImportSpecifier", {
      enumerable: true,
      get: function() {
        return _index.importSpecifier;
      }
    });
    Object.defineProperty(exports, "IndexedAccessType", {
      enumerable: true,
      get: function() {
        return _index.indexedAccessType;
      }
    });
    Object.defineProperty(exports, "InferredPredicate", {
      enumerable: true,
      get: function() {
        return _index.inferredPredicate;
      }
    });
    Object.defineProperty(exports, "InterfaceDeclaration", {
      enumerable: true,
      get: function() {
        return _index.interfaceDeclaration;
      }
    });
    Object.defineProperty(exports, "InterfaceExtends", {
      enumerable: true,
      get: function() {
        return _index.interfaceExtends;
      }
    });
    Object.defineProperty(exports, "InterfaceTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.interfaceTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "InterpreterDirective", {
      enumerable: true,
      get: function() {
        return _index.interpreterDirective;
      }
    });
    Object.defineProperty(exports, "IntersectionTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.intersectionTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "JSXAttribute", {
      enumerable: true,
      get: function() {
        return _index.jsxAttribute;
      }
    });
    Object.defineProperty(exports, "JSXClosingElement", {
      enumerable: true,
      get: function() {
        return _index.jsxClosingElement;
      }
    });
    Object.defineProperty(exports, "JSXClosingFragment", {
      enumerable: true,
      get: function() {
        return _index.jsxClosingFragment;
      }
    });
    Object.defineProperty(exports, "JSXElement", {
      enumerable: true,
      get: function() {
        return _index.jsxElement;
      }
    });
    Object.defineProperty(exports, "JSXEmptyExpression", {
      enumerable: true,
      get: function() {
        return _index.jsxEmptyExpression;
      }
    });
    Object.defineProperty(exports, "JSXExpressionContainer", {
      enumerable: true,
      get: function() {
        return _index.jsxExpressionContainer;
      }
    });
    Object.defineProperty(exports, "JSXFragment", {
      enumerable: true,
      get: function() {
        return _index.jsxFragment;
      }
    });
    Object.defineProperty(exports, "JSXIdentifier", {
      enumerable: true,
      get: function() {
        return _index.jsxIdentifier;
      }
    });
    Object.defineProperty(exports, "JSXMemberExpression", {
      enumerable: true,
      get: function() {
        return _index.jsxMemberExpression;
      }
    });
    Object.defineProperty(exports, "JSXNamespacedName", {
      enumerable: true,
      get: function() {
        return _index.jsxNamespacedName;
      }
    });
    Object.defineProperty(exports, "JSXOpeningElement", {
      enumerable: true,
      get: function() {
        return _index.jsxOpeningElement;
      }
    });
    Object.defineProperty(exports, "JSXOpeningFragment", {
      enumerable: true,
      get: function() {
        return _index.jsxOpeningFragment;
      }
    });
    Object.defineProperty(exports, "JSXSpreadAttribute", {
      enumerable: true,
      get: function() {
        return _index.jsxSpreadAttribute;
      }
    });
    Object.defineProperty(exports, "JSXSpreadChild", {
      enumerable: true,
      get: function() {
        return _index.jsxSpreadChild;
      }
    });
    Object.defineProperty(exports, "JSXText", {
      enumerable: true,
      get: function() {
        return _index.jsxText;
      }
    });
    Object.defineProperty(exports, "LabeledStatement", {
      enumerable: true,
      get: function() {
        return _index.labeledStatement;
      }
    });
    Object.defineProperty(exports, "LogicalExpression", {
      enumerable: true,
      get: function() {
        return _index.logicalExpression;
      }
    });
    Object.defineProperty(exports, "MemberExpression", {
      enumerable: true,
      get: function() {
        return _index.memberExpression;
      }
    });
    Object.defineProperty(exports, "MetaProperty", {
      enumerable: true,
      get: function() {
        return _index.metaProperty;
      }
    });
    Object.defineProperty(exports, "MixedTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.mixedTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "ModuleExpression", {
      enumerable: true,
      get: function() {
        return _index.moduleExpression;
      }
    });
    Object.defineProperty(exports, "NewExpression", {
      enumerable: true,
      get: function() {
        return _index.newExpression;
      }
    });
    Object.defineProperty(exports, "Noop", {
      enumerable: true,
      get: function() {
        return _index.noop;
      }
    });
    Object.defineProperty(exports, "NullLiteral", {
      enumerable: true,
      get: function() {
        return _index.nullLiteral;
      }
    });
    Object.defineProperty(exports, "NullLiteralTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.nullLiteralTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "NullableTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.nullableTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "NumberLiteral", {
      enumerable: true,
      get: function() {
        return _index.numberLiteral;
      }
    });
    Object.defineProperty(exports, "NumberLiteralTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.numberLiteralTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "NumberTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.numberTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "NumericLiteral", {
      enumerable: true,
      get: function() {
        return _index.numericLiteral;
      }
    });
    Object.defineProperty(exports, "ObjectExpression", {
      enumerable: true,
      get: function() {
        return _index.objectExpression;
      }
    });
    Object.defineProperty(exports, "ObjectMethod", {
      enumerable: true,
      get: function() {
        return _index.objectMethod;
      }
    });
    Object.defineProperty(exports, "ObjectPattern", {
      enumerable: true,
      get: function() {
        return _index.objectPattern;
      }
    });
    Object.defineProperty(exports, "ObjectProperty", {
      enumerable: true,
      get: function() {
        return _index.objectProperty;
      }
    });
    Object.defineProperty(exports, "ObjectTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.objectTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "ObjectTypeCallProperty", {
      enumerable: true,
      get: function() {
        return _index.objectTypeCallProperty;
      }
    });
    Object.defineProperty(exports, "ObjectTypeIndexer", {
      enumerable: true,
      get: function() {
        return _index.objectTypeIndexer;
      }
    });
    Object.defineProperty(exports, "ObjectTypeInternalSlot", {
      enumerable: true,
      get: function() {
        return _index.objectTypeInternalSlot;
      }
    });
    Object.defineProperty(exports, "ObjectTypeProperty", {
      enumerable: true,
      get: function() {
        return _index.objectTypeProperty;
      }
    });
    Object.defineProperty(exports, "ObjectTypeSpreadProperty", {
      enumerable: true,
      get: function() {
        return _index.objectTypeSpreadProperty;
      }
    });
    Object.defineProperty(exports, "OpaqueType", {
      enumerable: true,
      get: function() {
        return _index.opaqueType;
      }
    });
    Object.defineProperty(exports, "OptionalCallExpression", {
      enumerable: true,
      get: function() {
        return _index.optionalCallExpression;
      }
    });
    Object.defineProperty(exports, "OptionalIndexedAccessType", {
      enumerable: true,
      get: function() {
        return _index.optionalIndexedAccessType;
      }
    });
    Object.defineProperty(exports, "OptionalMemberExpression", {
      enumerable: true,
      get: function() {
        return _index.optionalMemberExpression;
      }
    });
    Object.defineProperty(exports, "ParenthesizedExpression", {
      enumerable: true,
      get: function() {
        return _index.parenthesizedExpression;
      }
    });
    Object.defineProperty(exports, "PipelineBareFunction", {
      enumerable: true,
      get: function() {
        return _index.pipelineBareFunction;
      }
    });
    Object.defineProperty(exports, "PipelinePrimaryTopicReference", {
      enumerable: true,
      get: function() {
        return _index.pipelinePrimaryTopicReference;
      }
    });
    Object.defineProperty(exports, "PipelineTopicExpression", {
      enumerable: true,
      get: function() {
        return _index.pipelineTopicExpression;
      }
    });
    Object.defineProperty(exports, "Placeholder", {
      enumerable: true,
      get: function() {
        return _index.placeholder;
      }
    });
    Object.defineProperty(exports, "PrivateName", {
      enumerable: true,
      get: function() {
        return _index.privateName;
      }
    });
    Object.defineProperty(exports, "Program", {
      enumerable: true,
      get: function() {
        return _index.program;
      }
    });
    Object.defineProperty(exports, "QualifiedTypeIdentifier", {
      enumerable: true,
      get: function() {
        return _index.qualifiedTypeIdentifier;
      }
    });
    Object.defineProperty(exports, "RecordExpression", {
      enumerable: true,
      get: function() {
        return _index.recordExpression;
      }
    });
    Object.defineProperty(exports, "RegExpLiteral", {
      enumerable: true,
      get: function() {
        return _index.regExpLiteral;
      }
    });
    Object.defineProperty(exports, "RegexLiteral", {
      enumerable: true,
      get: function() {
        return _index.regexLiteral;
      }
    });
    Object.defineProperty(exports, "RestElement", {
      enumerable: true,
      get: function() {
        return _index.restElement;
      }
    });
    Object.defineProperty(exports, "RestProperty", {
      enumerable: true,
      get: function() {
        return _index.restProperty;
      }
    });
    Object.defineProperty(exports, "ReturnStatement", {
      enumerable: true,
      get: function() {
        return _index.returnStatement;
      }
    });
    Object.defineProperty(exports, "SequenceExpression", {
      enumerable: true,
      get: function() {
        return _index.sequenceExpression;
      }
    });
    Object.defineProperty(exports, "SpreadElement", {
      enumerable: true,
      get: function() {
        return _index.spreadElement;
      }
    });
    Object.defineProperty(exports, "SpreadProperty", {
      enumerable: true,
      get: function() {
        return _index.spreadProperty;
      }
    });
    Object.defineProperty(exports, "StaticBlock", {
      enumerable: true,
      get: function() {
        return _index.staticBlock;
      }
    });
    Object.defineProperty(exports, "StringLiteral", {
      enumerable: true,
      get: function() {
        return _index.stringLiteral;
      }
    });
    Object.defineProperty(exports, "StringLiteralTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.stringLiteralTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "StringTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.stringTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "Super", {
      enumerable: true,
      get: function() {
        return _index.super;
      }
    });
    Object.defineProperty(exports, "SwitchCase", {
      enumerable: true,
      get: function() {
        return _index.switchCase;
      }
    });
    Object.defineProperty(exports, "SwitchStatement", {
      enumerable: true,
      get: function() {
        return _index.switchStatement;
      }
    });
    Object.defineProperty(exports, "SymbolTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.symbolTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "TSAnyKeyword", {
      enumerable: true,
      get: function() {
        return _index.tsAnyKeyword;
      }
    });
    Object.defineProperty(exports, "TSArrayType", {
      enumerable: true,
      get: function() {
        return _index.tsArrayType;
      }
    });
    Object.defineProperty(exports, "TSAsExpression", {
      enumerable: true,
      get: function() {
        return _index.tsAsExpression;
      }
    });
    Object.defineProperty(exports, "TSBigIntKeyword", {
      enumerable: true,
      get: function() {
        return _index.tsBigIntKeyword;
      }
    });
    Object.defineProperty(exports, "TSBooleanKeyword", {
      enumerable: true,
      get: function() {
        return _index.tsBooleanKeyword;
      }
    });
    Object.defineProperty(exports, "TSCallSignatureDeclaration", {
      enumerable: true,
      get: function() {
        return _index.tsCallSignatureDeclaration;
      }
    });
    Object.defineProperty(exports, "TSConditionalType", {
      enumerable: true,
      get: function() {
        return _index.tsConditionalType;
      }
    });
    Object.defineProperty(exports, "TSConstructSignatureDeclaration", {
      enumerable: true,
      get: function() {
        return _index.tsConstructSignatureDeclaration;
      }
    });
    Object.defineProperty(exports, "TSConstructorType", {
      enumerable: true,
      get: function() {
        return _index.tsConstructorType;
      }
    });
    Object.defineProperty(exports, "TSDeclareFunction", {
      enumerable: true,
      get: function() {
        return _index.tsDeclareFunction;
      }
    });
    Object.defineProperty(exports, "TSDeclareMethod", {
      enumerable: true,
      get: function() {
        return _index.tsDeclareMethod;
      }
    });
    Object.defineProperty(exports, "TSEnumDeclaration", {
      enumerable: true,
      get: function() {
        return _index.tsEnumDeclaration;
      }
    });
    Object.defineProperty(exports, "TSEnumMember", {
      enumerable: true,
      get: function() {
        return _index.tsEnumMember;
      }
    });
    Object.defineProperty(exports, "TSExportAssignment", {
      enumerable: true,
      get: function() {
        return _index.tsExportAssignment;
      }
    });
    Object.defineProperty(exports, "TSExpressionWithTypeArguments", {
      enumerable: true,
      get: function() {
        return _index.tsExpressionWithTypeArguments;
      }
    });
    Object.defineProperty(exports, "TSExternalModuleReference", {
      enumerable: true,
      get: function() {
        return _index.tsExternalModuleReference;
      }
    });
    Object.defineProperty(exports, "TSFunctionType", {
      enumerable: true,
      get: function() {
        return _index.tsFunctionType;
      }
    });
    Object.defineProperty(exports, "TSImportEqualsDeclaration", {
      enumerable: true,
      get: function() {
        return _index.tsImportEqualsDeclaration;
      }
    });
    Object.defineProperty(exports, "TSImportType", {
      enumerable: true,
      get: function() {
        return _index.tsImportType;
      }
    });
    Object.defineProperty(exports, "TSIndexSignature", {
      enumerable: true,
      get: function() {
        return _index.tsIndexSignature;
      }
    });
    Object.defineProperty(exports, "TSIndexedAccessType", {
      enumerable: true,
      get: function() {
        return _index.tsIndexedAccessType;
      }
    });
    Object.defineProperty(exports, "TSInferType", {
      enumerable: true,
      get: function() {
        return _index.tsInferType;
      }
    });
    Object.defineProperty(exports, "TSInstantiationExpression", {
      enumerable: true,
      get: function() {
        return _index.tsInstantiationExpression;
      }
    });
    Object.defineProperty(exports, "TSInterfaceBody", {
      enumerable: true,
      get: function() {
        return _index.tsInterfaceBody;
      }
    });
    Object.defineProperty(exports, "TSInterfaceDeclaration", {
      enumerable: true,
      get: function() {
        return _index.tsInterfaceDeclaration;
      }
    });
    Object.defineProperty(exports, "TSIntersectionType", {
      enumerable: true,
      get: function() {
        return _index.tsIntersectionType;
      }
    });
    Object.defineProperty(exports, "TSIntrinsicKeyword", {
      enumerable: true,
      get: function() {
        return _index.tsIntrinsicKeyword;
      }
    });
    Object.defineProperty(exports, "TSLiteralType", {
      enumerable: true,
      get: function() {
        return _index.tsLiteralType;
      }
    });
    Object.defineProperty(exports, "TSMappedType", {
      enumerable: true,
      get: function() {
        return _index.tsMappedType;
      }
    });
    Object.defineProperty(exports, "TSMethodSignature", {
      enumerable: true,
      get: function() {
        return _index.tsMethodSignature;
      }
    });
    Object.defineProperty(exports, "TSModuleBlock", {
      enumerable: true,
      get: function() {
        return _index.tsModuleBlock;
      }
    });
    Object.defineProperty(exports, "TSModuleDeclaration", {
      enumerable: true,
      get: function() {
        return _index.tsModuleDeclaration;
      }
    });
    Object.defineProperty(exports, "TSNamedTupleMember", {
      enumerable: true,
      get: function() {
        return _index.tsNamedTupleMember;
      }
    });
    Object.defineProperty(exports, "TSNamespaceExportDeclaration", {
      enumerable: true,
      get: function() {
        return _index.tsNamespaceExportDeclaration;
      }
    });
    Object.defineProperty(exports, "TSNeverKeyword", {
      enumerable: true,
      get: function() {
        return _index.tsNeverKeyword;
      }
    });
    Object.defineProperty(exports, "TSNonNullExpression", {
      enumerable: true,
      get: function() {
        return _index.tsNonNullExpression;
      }
    });
    Object.defineProperty(exports, "TSNullKeyword", {
      enumerable: true,
      get: function() {
        return _index.tsNullKeyword;
      }
    });
    Object.defineProperty(exports, "TSNumberKeyword", {
      enumerable: true,
      get: function() {
        return _index.tsNumberKeyword;
      }
    });
    Object.defineProperty(exports, "TSObjectKeyword", {
      enumerable: true,
      get: function() {
        return _index.tsObjectKeyword;
      }
    });
    Object.defineProperty(exports, "TSOptionalType", {
      enumerable: true,
      get: function() {
        return _index.tsOptionalType;
      }
    });
    Object.defineProperty(exports, "TSParameterProperty", {
      enumerable: true,
      get: function() {
        return _index.tsParameterProperty;
      }
    });
    Object.defineProperty(exports, "TSParenthesizedType", {
      enumerable: true,
      get: function() {
        return _index.tsParenthesizedType;
      }
    });
    Object.defineProperty(exports, "TSPropertySignature", {
      enumerable: true,
      get: function() {
        return _index.tsPropertySignature;
      }
    });
    Object.defineProperty(exports, "TSQualifiedName", {
      enumerable: true,
      get: function() {
        return _index.tsQualifiedName;
      }
    });
    Object.defineProperty(exports, "TSRestType", {
      enumerable: true,
      get: function() {
        return _index.tsRestType;
      }
    });
    Object.defineProperty(exports, "TSStringKeyword", {
      enumerable: true,
      get: function() {
        return _index.tsStringKeyword;
      }
    });
    Object.defineProperty(exports, "TSSymbolKeyword", {
      enumerable: true,
      get: function() {
        return _index.tsSymbolKeyword;
      }
    });
    Object.defineProperty(exports, "TSThisType", {
      enumerable: true,
      get: function() {
        return _index.tsThisType;
      }
    });
    Object.defineProperty(exports, "TSTupleType", {
      enumerable: true,
      get: function() {
        return _index.tsTupleType;
      }
    });
    Object.defineProperty(exports, "TSTypeAliasDeclaration", {
      enumerable: true,
      get: function() {
        return _index.tsTypeAliasDeclaration;
      }
    });
    Object.defineProperty(exports, "TSTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.tsTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "TSTypeAssertion", {
      enumerable: true,
      get: function() {
        return _index.tsTypeAssertion;
      }
    });
    Object.defineProperty(exports, "TSTypeLiteral", {
      enumerable: true,
      get: function() {
        return _index.tsTypeLiteral;
      }
    });
    Object.defineProperty(exports, "TSTypeOperator", {
      enumerable: true,
      get: function() {
        return _index.tsTypeOperator;
      }
    });
    Object.defineProperty(exports, "TSTypeParameter", {
      enumerable: true,
      get: function() {
        return _index.tsTypeParameter;
      }
    });
    Object.defineProperty(exports, "TSTypeParameterDeclaration", {
      enumerable: true,
      get: function() {
        return _index.tsTypeParameterDeclaration;
      }
    });
    Object.defineProperty(exports, "TSTypeParameterInstantiation", {
      enumerable: true,
      get: function() {
        return _index.tsTypeParameterInstantiation;
      }
    });
    Object.defineProperty(exports, "TSTypePredicate", {
      enumerable: true,
      get: function() {
        return _index.tsTypePredicate;
      }
    });
    Object.defineProperty(exports, "TSTypeQuery", {
      enumerable: true,
      get: function() {
        return _index.tsTypeQuery;
      }
    });
    Object.defineProperty(exports, "TSTypeReference", {
      enumerable: true,
      get: function() {
        return _index.tsTypeReference;
      }
    });
    Object.defineProperty(exports, "TSUndefinedKeyword", {
      enumerable: true,
      get: function() {
        return _index.tsUndefinedKeyword;
      }
    });
    Object.defineProperty(exports, "TSUnionType", {
      enumerable: true,
      get: function() {
        return _index.tsUnionType;
      }
    });
    Object.defineProperty(exports, "TSUnknownKeyword", {
      enumerable: true,
      get: function() {
        return _index.tsUnknownKeyword;
      }
    });
    Object.defineProperty(exports, "TSVoidKeyword", {
      enumerable: true,
      get: function() {
        return _index.tsVoidKeyword;
      }
    });
    Object.defineProperty(exports, "TaggedTemplateExpression", {
      enumerable: true,
      get: function() {
        return _index.taggedTemplateExpression;
      }
    });
    Object.defineProperty(exports, "TemplateElement", {
      enumerable: true,
      get: function() {
        return _index.templateElement;
      }
    });
    Object.defineProperty(exports, "TemplateLiteral", {
      enumerable: true,
      get: function() {
        return _index.templateLiteral;
      }
    });
    Object.defineProperty(exports, "ThisExpression", {
      enumerable: true,
      get: function() {
        return _index.thisExpression;
      }
    });
    Object.defineProperty(exports, "ThisTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.thisTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "ThrowStatement", {
      enumerable: true,
      get: function() {
        return _index.throwStatement;
      }
    });
    Object.defineProperty(exports, "TopicReference", {
      enumerable: true,
      get: function() {
        return _index.topicReference;
      }
    });
    Object.defineProperty(exports, "TryStatement", {
      enumerable: true,
      get: function() {
        return _index.tryStatement;
      }
    });
    Object.defineProperty(exports, "TupleExpression", {
      enumerable: true,
      get: function() {
        return _index.tupleExpression;
      }
    });
    Object.defineProperty(exports, "TupleTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.tupleTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "TypeAlias", {
      enumerable: true,
      get: function() {
        return _index.typeAlias;
      }
    });
    Object.defineProperty(exports, "TypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.typeAnnotation;
      }
    });
    Object.defineProperty(exports, "TypeCastExpression", {
      enumerable: true,
      get: function() {
        return _index.typeCastExpression;
      }
    });
    Object.defineProperty(exports, "TypeParameter", {
      enumerable: true,
      get: function() {
        return _index.typeParameter;
      }
    });
    Object.defineProperty(exports, "TypeParameterDeclaration", {
      enumerable: true,
      get: function() {
        return _index.typeParameterDeclaration;
      }
    });
    Object.defineProperty(exports, "TypeParameterInstantiation", {
      enumerable: true,
      get: function() {
        return _index.typeParameterInstantiation;
      }
    });
    Object.defineProperty(exports, "TypeofTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.typeofTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "UnaryExpression", {
      enumerable: true,
      get: function() {
        return _index.unaryExpression;
      }
    });
    Object.defineProperty(exports, "UnionTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.unionTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "UpdateExpression", {
      enumerable: true,
      get: function() {
        return _index.updateExpression;
      }
    });
    Object.defineProperty(exports, "V8IntrinsicIdentifier", {
      enumerable: true,
      get: function() {
        return _index.v8IntrinsicIdentifier;
      }
    });
    Object.defineProperty(exports, "VariableDeclaration", {
      enumerable: true,
      get: function() {
        return _index.variableDeclaration;
      }
    });
    Object.defineProperty(exports, "VariableDeclarator", {
      enumerable: true,
      get: function() {
        return _index.variableDeclarator;
      }
    });
    Object.defineProperty(exports, "Variance", {
      enumerable: true,
      get: function() {
        return _index.variance;
      }
    });
    Object.defineProperty(exports, "VoidTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _index.voidTypeAnnotation;
      }
    });
    Object.defineProperty(exports, "WhileStatement", {
      enumerable: true,
      get: function() {
        return _index.whileStatement;
      }
    });
    Object.defineProperty(exports, "WithStatement", {
      enumerable: true,
      get: function() {
        return _index.withStatement;
      }
    });
    Object.defineProperty(exports, "YieldExpression", {
      enumerable: true,
      get: function() {
        return _index.yieldExpression;
      }
    });
    var _index = require_generated2();
  }
});

// node_modules/@babel/types/lib/clone/cloneNode.js
var require_cloneNode = __commonJS({
  "node_modules/@babel/types/lib/clone/cloneNode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = cloneNode;
    var _definitions = require_definitions();
    var _generated = require_generated();
    var has = Function.call.bind(Object.prototype.hasOwnProperty);
    function cloneIfNode(obj, deep, withoutLoc, commentsCache) {
      if (obj && typeof obj.type === "string") {
        return cloneNodeInternal(obj, deep, withoutLoc, commentsCache);
      }
      return obj;
    }
    function cloneIfNodeOrArray(obj, deep, withoutLoc, commentsCache) {
      if (Array.isArray(obj)) {
        return obj.map((node) => cloneIfNode(node, deep, withoutLoc, commentsCache));
      }
      return cloneIfNode(obj, deep, withoutLoc, commentsCache);
    }
    function cloneNode(node, deep = true, withoutLoc = false) {
      return cloneNodeInternal(node, deep, withoutLoc, /* @__PURE__ */ new Map());
    }
    function cloneNodeInternal(node, deep = true, withoutLoc = false, commentsCache) {
      if (!node)
        return node;
      const {
        type
      } = node;
      const newNode = {
        type: node.type
      };
      if ((0, _generated.isIdentifier)(node)) {
        newNode.name = node.name;
        if (has(node, "optional") && typeof node.optional === "boolean") {
          newNode.optional = node.optional;
        }
        if (has(node, "typeAnnotation")) {
          newNode.typeAnnotation = deep ? cloneIfNodeOrArray(node.typeAnnotation, true, withoutLoc, commentsCache) : node.typeAnnotation;
        }
      } else if (!has(_definitions.NODE_FIELDS, type)) {
        throw new Error(`Unknown node type: "${type}"`);
      } else {
        for (const field of Object.keys(_definitions.NODE_FIELDS[type])) {
          if (has(node, field)) {
            if (deep) {
              newNode[field] = (0, _generated.isFile)(node) && field === "comments" ? maybeCloneComments(node.comments, deep, withoutLoc, commentsCache) : cloneIfNodeOrArray(node[field], true, withoutLoc, commentsCache);
            } else {
              newNode[field] = node[field];
            }
          }
        }
      }
      if (has(node, "loc")) {
        if (withoutLoc) {
          newNode.loc = null;
        } else {
          newNode.loc = node.loc;
        }
      }
      if (has(node, "leadingComments")) {
        newNode.leadingComments = maybeCloneComments(node.leadingComments, deep, withoutLoc, commentsCache);
      }
      if (has(node, "innerComments")) {
        newNode.innerComments = maybeCloneComments(node.innerComments, deep, withoutLoc, commentsCache);
      }
      if (has(node, "trailingComments")) {
        newNode.trailingComments = maybeCloneComments(node.trailingComments, deep, withoutLoc, commentsCache);
      }
      if (has(node, "extra")) {
        newNode.extra = Object.assign({}, node.extra);
      }
      return newNode;
    }
    function maybeCloneComments(comments, deep, withoutLoc, commentsCache) {
      if (!comments || !deep) {
        return comments;
      }
      return comments.map((comment) => {
        const cache = commentsCache.get(comment);
        if (cache)
          return cache;
        const {
          type,
          value,
          loc
        } = comment;
        const ret = {
          type,
          value,
          loc
        };
        if (withoutLoc) {
          ret.loc = null;
        }
        commentsCache.set(comment, ret);
        return ret;
      });
    }
  }
});

// node_modules/@babel/types/lib/clone/clone.js
var require_clone = __commonJS({
  "node_modules/@babel/types/lib/clone/clone.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = clone;
    var _cloneNode = require_cloneNode();
    function clone(node) {
      return (0, _cloneNode.default)(node, false);
    }
  }
});

// node_modules/@babel/types/lib/clone/cloneDeep.js
var require_cloneDeep = __commonJS({
  "node_modules/@babel/types/lib/clone/cloneDeep.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = cloneDeep;
    var _cloneNode = require_cloneNode();
    function cloneDeep(node) {
      return (0, _cloneNode.default)(node);
    }
  }
});

// node_modules/@babel/types/lib/clone/cloneDeepWithoutLoc.js
var require_cloneDeepWithoutLoc = __commonJS({
  "node_modules/@babel/types/lib/clone/cloneDeepWithoutLoc.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = cloneDeepWithoutLoc;
    var _cloneNode = require_cloneNode();
    function cloneDeepWithoutLoc(node) {
      return (0, _cloneNode.default)(node, true, true);
    }
  }
});

// node_modules/@babel/types/lib/clone/cloneWithoutLoc.js
var require_cloneWithoutLoc = __commonJS({
  "node_modules/@babel/types/lib/clone/cloneWithoutLoc.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = cloneWithoutLoc;
    var _cloneNode = require_cloneNode();
    function cloneWithoutLoc(node) {
      return (0, _cloneNode.default)(node, false, true);
    }
  }
});

// node_modules/@babel/types/lib/comments/addComments.js
var require_addComments = __commonJS({
  "node_modules/@babel/types/lib/comments/addComments.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = addComments;
    function addComments(node, type, comments) {
      if (!comments || !node)
        return node;
      const key = `${type}Comments`;
      if (node[key]) {
        if (type === "leading") {
          node[key] = comments.concat(node[key]);
        } else {
          node[key].push(...comments);
        }
      } else {
        node[key] = comments;
      }
      return node;
    }
  }
});

// node_modules/@babel/types/lib/comments/addComment.js
var require_addComment = __commonJS({
  "node_modules/@babel/types/lib/comments/addComment.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = addComment;
    var _addComments = require_addComments();
    function addComment(node, type, content, line) {
      return (0, _addComments.default)(node, type, [{
        type: line ? "CommentLine" : "CommentBlock",
        value: content
      }]);
    }
  }
});

// node_modules/@babel/types/lib/utils/inherit.js
var require_inherit = __commonJS({
  "node_modules/@babel/types/lib/utils/inherit.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = inherit;
    function inherit(key, child, parent) {
      if (child && parent) {
        child[key] = Array.from(new Set([].concat(child[key], parent[key]).filter(Boolean)));
      }
    }
  }
});

// node_modules/@babel/types/lib/comments/inheritInnerComments.js
var require_inheritInnerComments = __commonJS({
  "node_modules/@babel/types/lib/comments/inheritInnerComments.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = inheritInnerComments;
    var _inherit = require_inherit();
    function inheritInnerComments(child, parent) {
      (0, _inherit.default)("innerComments", child, parent);
    }
  }
});

// node_modules/@babel/types/lib/comments/inheritLeadingComments.js
var require_inheritLeadingComments = __commonJS({
  "node_modules/@babel/types/lib/comments/inheritLeadingComments.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = inheritLeadingComments;
    var _inherit = require_inherit();
    function inheritLeadingComments(child, parent) {
      (0, _inherit.default)("leadingComments", child, parent);
    }
  }
});

// node_modules/@babel/types/lib/comments/inheritTrailingComments.js
var require_inheritTrailingComments = __commonJS({
  "node_modules/@babel/types/lib/comments/inheritTrailingComments.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = inheritTrailingComments;
    var _inherit = require_inherit();
    function inheritTrailingComments(child, parent) {
      (0, _inherit.default)("trailingComments", child, parent);
    }
  }
});

// node_modules/@babel/types/lib/comments/inheritsComments.js
var require_inheritsComments = __commonJS({
  "node_modules/@babel/types/lib/comments/inheritsComments.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = inheritsComments;
    var _inheritTrailingComments = require_inheritTrailingComments();
    var _inheritLeadingComments = require_inheritLeadingComments();
    var _inheritInnerComments = require_inheritInnerComments();
    function inheritsComments(child, parent) {
      (0, _inheritTrailingComments.default)(child, parent);
      (0, _inheritLeadingComments.default)(child, parent);
      (0, _inheritInnerComments.default)(child, parent);
      return child;
    }
  }
});

// node_modules/@babel/types/lib/comments/removeComments.js
var require_removeComments = __commonJS({
  "node_modules/@babel/types/lib/comments/removeComments.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = removeComments;
    var _constants = require_constants();
    function removeComments(node) {
      _constants.COMMENT_KEYS.forEach((key) => {
        node[key] = null;
      });
      return node;
    }
  }
});

// node_modules/@babel/types/lib/constants/generated/index.js
var require_generated4 = __commonJS({
  "node_modules/@babel/types/lib/constants/generated/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WHILE_TYPES = exports.USERWHITESPACABLE_TYPES = exports.UNARYLIKE_TYPES = exports.TYPESCRIPT_TYPES = exports.TSTYPE_TYPES = exports.TSTYPEELEMENT_TYPES = exports.TSENTITYNAME_TYPES = exports.TSBASETYPE_TYPES = exports.TERMINATORLESS_TYPES = exports.STATEMENT_TYPES = exports.STANDARDIZED_TYPES = exports.SCOPABLE_TYPES = exports.PUREISH_TYPES = exports.PROPERTY_TYPES = exports.PRIVATE_TYPES = exports.PATTERN_TYPES = exports.PATTERNLIKE_TYPES = exports.OBJECTMEMBER_TYPES = exports.MODULESPECIFIER_TYPES = exports.MODULEDECLARATION_TYPES = exports.MISCELLANEOUS_TYPES = exports.METHOD_TYPES = exports.LVAL_TYPES = exports.LOOP_TYPES = exports.LITERAL_TYPES = exports.JSX_TYPES = exports.IMMUTABLE_TYPES = exports.FUNCTION_TYPES = exports.FUNCTIONPARENT_TYPES = exports.FOR_TYPES = exports.FORXSTATEMENT_TYPES = exports.FLOW_TYPES = exports.FLOWTYPE_TYPES = exports.FLOWPREDICATE_TYPES = exports.FLOWDECLARATION_TYPES = exports.FLOWBASEANNOTATION_TYPES = exports.EXPRESSION_TYPES = exports.EXPRESSIONWRAPPER_TYPES = exports.EXPORTDECLARATION_TYPES = exports.ENUMMEMBER_TYPES = exports.ENUMBODY_TYPES = exports.DECLARATION_TYPES = exports.CONDITIONAL_TYPES = exports.COMPLETIONSTATEMENT_TYPES = exports.CLASS_TYPES = exports.BLOCK_TYPES = exports.BLOCKPARENT_TYPES = exports.BINARY_TYPES = exports.ACCESSOR_TYPES = void 0;
    var _definitions = require_definitions();
    var STANDARDIZED_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Standardized"];
    exports.STANDARDIZED_TYPES = STANDARDIZED_TYPES;
    var EXPRESSION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Expression"];
    exports.EXPRESSION_TYPES = EXPRESSION_TYPES;
    var BINARY_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Binary"];
    exports.BINARY_TYPES = BINARY_TYPES;
    var SCOPABLE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Scopable"];
    exports.SCOPABLE_TYPES = SCOPABLE_TYPES;
    var BLOCKPARENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["BlockParent"];
    exports.BLOCKPARENT_TYPES = BLOCKPARENT_TYPES;
    var BLOCK_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Block"];
    exports.BLOCK_TYPES = BLOCK_TYPES;
    var STATEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Statement"];
    exports.STATEMENT_TYPES = STATEMENT_TYPES;
    var TERMINATORLESS_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Terminatorless"];
    exports.TERMINATORLESS_TYPES = TERMINATORLESS_TYPES;
    var COMPLETIONSTATEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["CompletionStatement"];
    exports.COMPLETIONSTATEMENT_TYPES = COMPLETIONSTATEMENT_TYPES;
    var CONDITIONAL_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Conditional"];
    exports.CONDITIONAL_TYPES = CONDITIONAL_TYPES;
    var LOOP_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Loop"];
    exports.LOOP_TYPES = LOOP_TYPES;
    var WHILE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["While"];
    exports.WHILE_TYPES = WHILE_TYPES;
    var EXPRESSIONWRAPPER_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ExpressionWrapper"];
    exports.EXPRESSIONWRAPPER_TYPES = EXPRESSIONWRAPPER_TYPES;
    var FOR_TYPES = _definitions.FLIPPED_ALIAS_KEYS["For"];
    exports.FOR_TYPES = FOR_TYPES;
    var FORXSTATEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ForXStatement"];
    exports.FORXSTATEMENT_TYPES = FORXSTATEMENT_TYPES;
    var FUNCTION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Function"];
    exports.FUNCTION_TYPES = FUNCTION_TYPES;
    var FUNCTIONPARENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FunctionParent"];
    exports.FUNCTIONPARENT_TYPES = FUNCTIONPARENT_TYPES;
    var PUREISH_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Pureish"];
    exports.PUREISH_TYPES = PUREISH_TYPES;
    var DECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Declaration"];
    exports.DECLARATION_TYPES = DECLARATION_TYPES;
    var PATTERNLIKE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["PatternLike"];
    exports.PATTERNLIKE_TYPES = PATTERNLIKE_TYPES;
    var LVAL_TYPES = _definitions.FLIPPED_ALIAS_KEYS["LVal"];
    exports.LVAL_TYPES = LVAL_TYPES;
    var TSENTITYNAME_TYPES = _definitions.FLIPPED_ALIAS_KEYS["TSEntityName"];
    exports.TSENTITYNAME_TYPES = TSENTITYNAME_TYPES;
    var LITERAL_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Literal"];
    exports.LITERAL_TYPES = LITERAL_TYPES;
    var IMMUTABLE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Immutable"];
    exports.IMMUTABLE_TYPES = IMMUTABLE_TYPES;
    var USERWHITESPACABLE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["UserWhitespacable"];
    exports.USERWHITESPACABLE_TYPES = USERWHITESPACABLE_TYPES;
    var METHOD_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Method"];
    exports.METHOD_TYPES = METHOD_TYPES;
    var OBJECTMEMBER_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ObjectMember"];
    exports.OBJECTMEMBER_TYPES = OBJECTMEMBER_TYPES;
    var PROPERTY_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Property"];
    exports.PROPERTY_TYPES = PROPERTY_TYPES;
    var UNARYLIKE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["UnaryLike"];
    exports.UNARYLIKE_TYPES = UNARYLIKE_TYPES;
    var PATTERN_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Pattern"];
    exports.PATTERN_TYPES = PATTERN_TYPES;
    var CLASS_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Class"];
    exports.CLASS_TYPES = CLASS_TYPES;
    var MODULEDECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ModuleDeclaration"];
    exports.MODULEDECLARATION_TYPES = MODULEDECLARATION_TYPES;
    var EXPORTDECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ExportDeclaration"];
    exports.EXPORTDECLARATION_TYPES = EXPORTDECLARATION_TYPES;
    var MODULESPECIFIER_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ModuleSpecifier"];
    exports.MODULESPECIFIER_TYPES = MODULESPECIFIER_TYPES;
    var ACCESSOR_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Accessor"];
    exports.ACCESSOR_TYPES = ACCESSOR_TYPES;
    var PRIVATE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Private"];
    exports.PRIVATE_TYPES = PRIVATE_TYPES;
    var FLOW_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Flow"];
    exports.FLOW_TYPES = FLOW_TYPES;
    var FLOWTYPE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowType"];
    exports.FLOWTYPE_TYPES = FLOWTYPE_TYPES;
    var FLOWBASEANNOTATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowBaseAnnotation"];
    exports.FLOWBASEANNOTATION_TYPES = FLOWBASEANNOTATION_TYPES;
    var FLOWDECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowDeclaration"];
    exports.FLOWDECLARATION_TYPES = FLOWDECLARATION_TYPES;
    var FLOWPREDICATE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowPredicate"];
    exports.FLOWPREDICATE_TYPES = FLOWPREDICATE_TYPES;
    var ENUMBODY_TYPES = _definitions.FLIPPED_ALIAS_KEYS["EnumBody"];
    exports.ENUMBODY_TYPES = ENUMBODY_TYPES;
    var ENUMMEMBER_TYPES = _definitions.FLIPPED_ALIAS_KEYS["EnumMember"];
    exports.ENUMMEMBER_TYPES = ENUMMEMBER_TYPES;
    var JSX_TYPES = _definitions.FLIPPED_ALIAS_KEYS["JSX"];
    exports.JSX_TYPES = JSX_TYPES;
    var MISCELLANEOUS_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Miscellaneous"];
    exports.MISCELLANEOUS_TYPES = MISCELLANEOUS_TYPES;
    var TYPESCRIPT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["TypeScript"];
    exports.TYPESCRIPT_TYPES = TYPESCRIPT_TYPES;
    var TSTYPEELEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["TSTypeElement"];
    exports.TSTYPEELEMENT_TYPES = TSTYPEELEMENT_TYPES;
    var TSTYPE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["TSType"];
    exports.TSTYPE_TYPES = TSTYPE_TYPES;
    var TSBASETYPE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["TSBaseType"];
    exports.TSBASETYPE_TYPES = TSBASETYPE_TYPES;
  }
});

// node_modules/@babel/types/lib/converters/toBlock.js
var require_toBlock = __commonJS({
  "node_modules/@babel/types/lib/converters/toBlock.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toBlock;
    var _generated = require_generated();
    var _generated2 = require_generated2();
    function toBlock(node, parent) {
      if ((0, _generated.isBlockStatement)(node)) {
        return node;
      }
      let blockNodes = [];
      if ((0, _generated.isEmptyStatement)(node)) {
        blockNodes = [];
      } else {
        if (!(0, _generated.isStatement)(node)) {
          if ((0, _generated.isFunction)(parent)) {
            node = (0, _generated2.returnStatement)(node);
          } else {
            node = (0, _generated2.expressionStatement)(node);
          }
        }
        blockNodes = [node];
      }
      return (0, _generated2.blockStatement)(blockNodes);
    }
  }
});

// node_modules/@babel/types/lib/converters/ensureBlock.js
var require_ensureBlock = __commonJS({
  "node_modules/@babel/types/lib/converters/ensureBlock.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = ensureBlock;
    var _toBlock = require_toBlock();
    function ensureBlock(node, key = "body") {
      const result = (0, _toBlock.default)(node[key], node);
      node[key] = result;
      return result;
    }
  }
});

// node_modules/@babel/types/lib/converters/toIdentifier.js
var require_toIdentifier = __commonJS({
  "node_modules/@babel/types/lib/converters/toIdentifier.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toIdentifier;
    var _isValidIdentifier = require_isValidIdentifier();
    var _helperValidatorIdentifier = require_lib();
    function toIdentifier(input) {
      input = input + "";
      let name = "";
      for (const c of input) {
        name += (0, _helperValidatorIdentifier.isIdentifierChar)(c.codePointAt(0)) ? c : "-";
      }
      name = name.replace(/^[-0-9]+/, "");
      name = name.replace(/[-\s]+(.)?/g, function(match, c) {
        return c ? c.toUpperCase() : "";
      });
      if (!(0, _isValidIdentifier.default)(name)) {
        name = `_${name}`;
      }
      return name || "_";
    }
  }
});

// node_modules/@babel/types/lib/converters/toBindingIdentifierName.js
var require_toBindingIdentifierName = __commonJS({
  "node_modules/@babel/types/lib/converters/toBindingIdentifierName.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toBindingIdentifierName;
    var _toIdentifier = require_toIdentifier();
    function toBindingIdentifierName(name) {
      name = (0, _toIdentifier.default)(name);
      if (name === "eval" || name === "arguments")
        name = "_" + name;
      return name;
    }
  }
});

// node_modules/@babel/types/lib/converters/toComputedKey.js
var require_toComputedKey = __commonJS({
  "node_modules/@babel/types/lib/converters/toComputedKey.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toComputedKey;
    var _generated = require_generated();
    var _generated2 = require_generated2();
    function toComputedKey(node, key = node.key || node.property) {
      if (!node.computed && (0, _generated.isIdentifier)(key))
        key = (0, _generated2.stringLiteral)(key.name);
      return key;
    }
  }
});

// node_modules/@babel/types/lib/converters/toExpression.js
var require_toExpression = __commonJS({
  "node_modules/@babel/types/lib/converters/toExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _generated = require_generated();
    var _default = toExpression;
    exports.default = _default;
    function toExpression(node) {
      if ((0, _generated.isExpressionStatement)(node)) {
        node = node.expression;
      }
      if ((0, _generated.isExpression)(node)) {
        return node;
      }
      if ((0, _generated.isClass)(node)) {
        node.type = "ClassExpression";
      } else if ((0, _generated.isFunction)(node)) {
        node.type = "FunctionExpression";
      }
      if (!(0, _generated.isExpression)(node)) {
        throw new Error(`cannot turn ${node.type} to an expression`);
      }
      return node;
    }
  }
});

// node_modules/@babel/types/lib/traverse/traverseFast.js
var require_traverseFast = __commonJS({
  "node_modules/@babel/types/lib/traverse/traverseFast.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = traverseFast;
    var _definitions = require_definitions();
    function traverseFast(node, enter, opts) {
      if (!node)
        return;
      const keys = _definitions.VISITOR_KEYS[node.type];
      if (!keys)
        return;
      opts = opts || {};
      enter(node, opts);
      for (const key of keys) {
        const subNode = node[key];
        if (Array.isArray(subNode)) {
          for (const node2 of subNode) {
            traverseFast(node2, enter, opts);
          }
        } else {
          traverseFast(subNode, enter, opts);
        }
      }
    }
  }
});

// node_modules/@babel/types/lib/modifications/removeProperties.js
var require_removeProperties = __commonJS({
  "node_modules/@babel/types/lib/modifications/removeProperties.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = removeProperties;
    var _constants = require_constants();
    var CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];
    var CLEAR_KEYS_PLUS_COMMENTS = [..._constants.COMMENT_KEYS, "comments", ...CLEAR_KEYS];
    function removeProperties(node, opts = {}) {
      const map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;
      for (const key of map) {
        if (node[key] != null)
          node[key] = void 0;
      }
      for (const key of Object.keys(node)) {
        if (key[0] === "_" && node[key] != null)
          node[key] = void 0;
      }
      const symbols = Object.getOwnPropertySymbols(node);
      for (const sym of symbols) {
        node[sym] = null;
      }
    }
  }
});

// node_modules/@babel/types/lib/modifications/removePropertiesDeep.js
var require_removePropertiesDeep = __commonJS({
  "node_modules/@babel/types/lib/modifications/removePropertiesDeep.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = removePropertiesDeep;
    var _traverseFast = require_traverseFast();
    var _removeProperties = require_removeProperties();
    function removePropertiesDeep(tree, opts) {
      (0, _traverseFast.default)(tree, _removeProperties.default, opts);
      return tree;
    }
  }
});

// node_modules/@babel/types/lib/converters/toKeyAlias.js
var require_toKeyAlias = __commonJS({
  "node_modules/@babel/types/lib/converters/toKeyAlias.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toKeyAlias;
    var _generated = require_generated();
    var _cloneNode = require_cloneNode();
    var _removePropertiesDeep = require_removePropertiesDeep();
    function toKeyAlias(node, key = node.key) {
      let alias;
      if (node.kind === "method") {
        return toKeyAlias.increment() + "";
      } else if ((0, _generated.isIdentifier)(key)) {
        alias = key.name;
      } else if ((0, _generated.isStringLiteral)(key)) {
        alias = JSON.stringify(key.value);
      } else {
        alias = JSON.stringify((0, _removePropertiesDeep.default)((0, _cloneNode.default)(key)));
      }
      if (node.computed) {
        alias = `[${alias}]`;
      }
      if (node.static) {
        alias = `static:${alias}`;
      }
      return alias;
    }
    toKeyAlias.uid = 0;
    toKeyAlias.increment = function() {
      if (toKeyAlias.uid >= Number.MAX_SAFE_INTEGER) {
        return toKeyAlias.uid = 0;
      } else {
        return toKeyAlias.uid++;
      }
    };
  }
});

// node_modules/@babel/types/lib/retrievers/getBindingIdentifiers.js
var require_getBindingIdentifiers = __commonJS({
  "node_modules/@babel/types/lib/retrievers/getBindingIdentifiers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = getBindingIdentifiers;
    var _generated = require_generated();
    function getBindingIdentifiers(node, duplicates, outerOnly) {
      const search = [].concat(node);
      const ids = /* @__PURE__ */ Object.create(null);
      while (search.length) {
        const id = search.shift();
        if (!id)
          continue;
        const keys = getBindingIdentifiers.keys[id.type];
        if ((0, _generated.isIdentifier)(id)) {
          if (duplicates) {
            const _ids = ids[id.name] = ids[id.name] || [];
            _ids.push(id);
          } else {
            ids[id.name] = id;
          }
          continue;
        }
        if ((0, _generated.isExportDeclaration)(id) && !(0, _generated.isExportAllDeclaration)(id)) {
          if ((0, _generated.isDeclaration)(id.declaration)) {
            search.push(id.declaration);
          }
          continue;
        }
        if (outerOnly) {
          if ((0, _generated.isFunctionDeclaration)(id)) {
            search.push(id.id);
            continue;
          }
          if ((0, _generated.isFunctionExpression)(id)) {
            continue;
          }
        }
        if (keys) {
          for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const nodes = id[key];
            if (nodes) {
              Array.isArray(nodes) ? search.push(...nodes) : search.push(nodes);
            }
          }
        }
      }
      return ids;
    }
    getBindingIdentifiers.keys = {
      DeclareClass: ["id"],
      DeclareFunction: ["id"],
      DeclareModule: ["id"],
      DeclareVariable: ["id"],
      DeclareInterface: ["id"],
      DeclareTypeAlias: ["id"],
      DeclareOpaqueType: ["id"],
      InterfaceDeclaration: ["id"],
      TypeAlias: ["id"],
      OpaqueType: ["id"],
      CatchClause: ["param"],
      LabeledStatement: ["label"],
      UnaryExpression: ["argument"],
      AssignmentExpression: ["left"],
      ImportSpecifier: ["local"],
      ImportNamespaceSpecifier: ["local"],
      ImportDefaultSpecifier: ["local"],
      ImportDeclaration: ["specifiers"],
      ExportSpecifier: ["exported"],
      ExportNamespaceSpecifier: ["exported"],
      ExportDefaultSpecifier: ["exported"],
      FunctionDeclaration: ["id", "params"],
      FunctionExpression: ["id", "params"],
      ArrowFunctionExpression: ["params"],
      ObjectMethod: ["params"],
      ClassMethod: ["params"],
      ClassPrivateMethod: ["params"],
      ForInStatement: ["left"],
      ForOfStatement: ["left"],
      ClassDeclaration: ["id"],
      ClassExpression: ["id"],
      RestElement: ["argument"],
      UpdateExpression: ["argument"],
      ObjectProperty: ["value"],
      AssignmentPattern: ["left"],
      ArrayPattern: ["elements"],
      ObjectPattern: ["properties"],
      VariableDeclaration: ["declarations"],
      VariableDeclarator: ["id"]
    };
  }
});

// node_modules/@babel/types/lib/converters/gatherSequenceExpressions.js
var require_gatherSequenceExpressions = __commonJS({
  "node_modules/@babel/types/lib/converters/gatherSequenceExpressions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = gatherSequenceExpressions;
    var _getBindingIdentifiers = require_getBindingIdentifiers();
    var _generated = require_generated();
    var _generated2 = require_generated2();
    var _cloneNode = require_cloneNode();
    function gatherSequenceExpressions(nodes, scope, declars) {
      const exprs = [];
      let ensureLastUndefined = true;
      for (const node of nodes) {
        if (!(0, _generated.isEmptyStatement)(node)) {
          ensureLastUndefined = false;
        }
        if ((0, _generated.isExpression)(node)) {
          exprs.push(node);
        } else if ((0, _generated.isExpressionStatement)(node)) {
          exprs.push(node.expression);
        } else if ((0, _generated.isVariableDeclaration)(node)) {
          if (node.kind !== "var")
            return;
          for (const declar of node.declarations) {
            const bindings = (0, _getBindingIdentifiers.default)(declar);
            for (const key of Object.keys(bindings)) {
              declars.push({
                kind: node.kind,
                id: (0, _cloneNode.default)(bindings[key])
              });
            }
            if (declar.init) {
              exprs.push((0, _generated2.assignmentExpression)("=", declar.id, declar.init));
            }
          }
          ensureLastUndefined = true;
        } else if ((0, _generated.isIfStatement)(node)) {
          const consequent = node.consequent ? gatherSequenceExpressions([node.consequent], scope, declars) : scope.buildUndefinedNode();
          const alternate = node.alternate ? gatherSequenceExpressions([node.alternate], scope, declars) : scope.buildUndefinedNode();
          if (!consequent || !alternate)
            return;
          exprs.push((0, _generated2.conditionalExpression)(node.test, consequent, alternate));
        } else if ((0, _generated.isBlockStatement)(node)) {
          const body = gatherSequenceExpressions(node.body, scope, declars);
          if (!body)
            return;
          exprs.push(body);
        } else if ((0, _generated.isEmptyStatement)(node)) {
          if (nodes.indexOf(node) === 0) {
            ensureLastUndefined = true;
          }
        } else {
          return;
        }
      }
      if (ensureLastUndefined) {
        exprs.push(scope.buildUndefinedNode());
      }
      if (exprs.length === 1) {
        return exprs[0];
      } else {
        return (0, _generated2.sequenceExpression)(exprs);
      }
    }
  }
});

// node_modules/@babel/types/lib/converters/toSequenceExpression.js
var require_toSequenceExpression = __commonJS({
  "node_modules/@babel/types/lib/converters/toSequenceExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toSequenceExpression;
    var _gatherSequenceExpressions = require_gatherSequenceExpressions();
    function toSequenceExpression(nodes, scope) {
      if (!(nodes != null && nodes.length))
        return;
      const declars = [];
      const result = (0, _gatherSequenceExpressions.default)(nodes, scope, declars);
      if (!result)
        return;
      for (const declar of declars) {
        scope.push(declar);
      }
      return result;
    }
  }
});

// node_modules/@babel/types/lib/converters/toStatement.js
var require_toStatement = __commonJS({
  "node_modules/@babel/types/lib/converters/toStatement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _generated = require_generated();
    var _generated2 = require_generated2();
    var _default = toStatement;
    exports.default = _default;
    function toStatement(node, ignore) {
      if ((0, _generated.isStatement)(node)) {
        return node;
      }
      let mustHaveId = false;
      let newType;
      if ((0, _generated.isClass)(node)) {
        mustHaveId = true;
        newType = "ClassDeclaration";
      } else if ((0, _generated.isFunction)(node)) {
        mustHaveId = true;
        newType = "FunctionDeclaration";
      } else if ((0, _generated.isAssignmentExpression)(node)) {
        return (0, _generated2.expressionStatement)(node);
      }
      if (mustHaveId && !node.id) {
        newType = false;
      }
      if (!newType) {
        if (ignore) {
          return false;
        } else {
          throw new Error(`cannot turn ${node.type} to a statement`);
        }
      }
      node.type = newType;
      return node;
    }
  }
});

// node_modules/@babel/types/lib/converters/valueToNode.js
var require_valueToNode = __commonJS({
  "node_modules/@babel/types/lib/converters/valueToNode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _isValidIdentifier = require_isValidIdentifier();
    var _generated = require_generated2();
    var _default = valueToNode;
    exports.default = _default;
    var objectToString = Function.call.bind(Object.prototype.toString);
    function isRegExp(value) {
      return objectToString(value) === "[object RegExp]";
    }
    function isPlainObject(value) {
      if (typeof value !== "object" || value === null || Object.prototype.toString.call(value) !== "[object Object]") {
        return false;
      }
      const proto = Object.getPrototypeOf(value);
      return proto === null || Object.getPrototypeOf(proto) === null;
    }
    function valueToNode(value) {
      if (value === void 0) {
        return (0, _generated.identifier)("undefined");
      }
      if (value === true || value === false) {
        return (0, _generated.booleanLiteral)(value);
      }
      if (value === null) {
        return (0, _generated.nullLiteral)();
      }
      if (typeof value === "string") {
        return (0, _generated.stringLiteral)(value);
      }
      if (typeof value === "number") {
        let result;
        if (Number.isFinite(value)) {
          result = (0, _generated.numericLiteral)(Math.abs(value));
        } else {
          let numerator;
          if (Number.isNaN(value)) {
            numerator = (0, _generated.numericLiteral)(0);
          } else {
            numerator = (0, _generated.numericLiteral)(1);
          }
          result = (0, _generated.binaryExpression)("/", numerator, (0, _generated.numericLiteral)(0));
        }
        if (value < 0 || Object.is(value, -0)) {
          result = (0, _generated.unaryExpression)("-", result);
        }
        return result;
      }
      if (isRegExp(value)) {
        const pattern = value.source;
        const flags = value.toString().match(/\/([a-z]+|)$/)[1];
        return (0, _generated.regExpLiteral)(pattern, flags);
      }
      if (Array.isArray(value)) {
        return (0, _generated.arrayExpression)(value.map(valueToNode));
      }
      if (isPlainObject(value)) {
        const props = [];
        for (const key of Object.keys(value)) {
          let nodeKey;
          if ((0, _isValidIdentifier.default)(key)) {
            nodeKey = (0, _generated.identifier)(key);
          } else {
            nodeKey = (0, _generated.stringLiteral)(key);
          }
          props.push((0, _generated.objectProperty)(nodeKey, valueToNode(value[key])));
        }
        return (0, _generated.objectExpression)(props);
      }
      throw new Error("don't know how to turn this value into a node");
    }
  }
});

// node_modules/@babel/types/lib/modifications/appendToMemberExpression.js
var require_appendToMemberExpression = __commonJS({
  "node_modules/@babel/types/lib/modifications/appendToMemberExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = appendToMemberExpression;
    var _generated = require_generated2();
    function appendToMemberExpression(member, append, computed = false) {
      member.object = (0, _generated.memberExpression)(member.object, member.property, member.computed);
      member.property = append;
      member.computed = !!computed;
      return member;
    }
  }
});

// node_modules/@babel/types/lib/modifications/inherits.js
var require_inherits = __commonJS({
  "node_modules/@babel/types/lib/modifications/inherits.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = inherits;
    var _constants = require_constants();
    var _inheritsComments = require_inheritsComments();
    function inherits(child, parent) {
      if (!child || !parent)
        return child;
      for (const key of _constants.INHERIT_KEYS.optional) {
        if (child[key] == null) {
          child[key] = parent[key];
        }
      }
      for (const key of Object.keys(parent)) {
        if (key[0] === "_" && key !== "__clone") {
          child[key] = parent[key];
        }
      }
      for (const key of _constants.INHERIT_KEYS.force) {
        child[key] = parent[key];
      }
      (0, _inheritsComments.default)(child, parent);
      return child;
    }
  }
});

// node_modules/@babel/types/lib/modifications/prependToMemberExpression.js
var require_prependToMemberExpression = __commonJS({
  "node_modules/@babel/types/lib/modifications/prependToMemberExpression.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = prependToMemberExpression;
    var _generated = require_generated2();
    var _ = require_lib3();
    function prependToMemberExpression(member, prepend) {
      if ((0, _.isSuper)(member.object)) {
        throw new Error("Cannot prepend node to super property access (`super.foo`).");
      }
      member.object = (0, _generated.memberExpression)(prepend, member.object);
      return member;
    }
  }
});

// node_modules/@babel/types/lib/retrievers/getOuterBindingIdentifiers.js
var require_getOuterBindingIdentifiers = __commonJS({
  "node_modules/@babel/types/lib/retrievers/getOuterBindingIdentifiers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _getBindingIdentifiers = require_getBindingIdentifiers();
    var _default = getOuterBindingIdentifiers;
    exports.default = _default;
    function getOuterBindingIdentifiers(node, duplicates) {
      return (0, _getBindingIdentifiers.default)(node, duplicates, true);
    }
  }
});

// node_modules/@babel/types/lib/traverse/traverse.js
var require_traverse = __commonJS({
  "node_modules/@babel/types/lib/traverse/traverse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = traverse10;
    var _definitions = require_definitions();
    function traverse10(node, handlers, state) {
      if (typeof handlers === "function") {
        handlers = {
          enter: handlers
        };
      }
      const {
        enter,
        exit
      } = handlers;
      traverseSimpleImpl(node, enter, exit, state, []);
    }
    function traverseSimpleImpl(node, enter, exit, state, ancestors) {
      const keys = _definitions.VISITOR_KEYS[node.type];
      if (!keys)
        return;
      if (enter)
        enter(node, ancestors, state);
      for (const key of keys) {
        const subNode = node[key];
        if (Array.isArray(subNode)) {
          for (let i = 0; i < subNode.length; i++) {
            const child = subNode[i];
            if (!child)
              continue;
            ancestors.push({
              node,
              key,
              index: i
            });
            traverseSimpleImpl(child, enter, exit, state, ancestors);
            ancestors.pop();
          }
        } else if (subNode) {
          ancestors.push({
            node,
            key
          });
          traverseSimpleImpl(subNode, enter, exit, state, ancestors);
          ancestors.pop();
        }
      }
      if (exit)
        exit(node, ancestors, state);
    }
  }
});

// node_modules/@babel/types/lib/validators/isBinding.js
var require_isBinding = __commonJS({
  "node_modules/@babel/types/lib/validators/isBinding.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBinding;
    var _getBindingIdentifiers = require_getBindingIdentifiers();
    function isBinding(node, parent, grandparent) {
      if (grandparent && node.type === "Identifier" && parent.type === "ObjectProperty" && grandparent.type === "ObjectExpression") {
        return false;
      }
      const keys = _getBindingIdentifiers.default.keys[parent.type];
      if (keys) {
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const val = parent[key];
          if (Array.isArray(val)) {
            if (val.indexOf(node) >= 0)
              return true;
          } else {
            if (val === node)
              return true;
          }
        }
      }
      return false;
    }
  }
});

// node_modules/@babel/types/lib/validators/isLet.js
var require_isLet = __commonJS({
  "node_modules/@babel/types/lib/validators/isLet.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isLet;
    var _generated = require_generated();
    var _constants = require_constants();
    function isLet(node) {
      return (0, _generated.isVariableDeclaration)(node) && (node.kind !== "var" || node[_constants.BLOCK_SCOPED_SYMBOL]);
    }
  }
});

// node_modules/@babel/types/lib/validators/isBlockScoped.js
var require_isBlockScoped = __commonJS({
  "node_modules/@babel/types/lib/validators/isBlockScoped.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBlockScoped;
    var _generated = require_generated();
    var _isLet = require_isLet();
    function isBlockScoped(node) {
      return (0, _generated.isFunctionDeclaration)(node) || (0, _generated.isClassDeclaration)(node) || (0, _isLet.default)(node);
    }
  }
});

// node_modules/@babel/types/lib/validators/isImmutable.js
var require_isImmutable = __commonJS({
  "node_modules/@babel/types/lib/validators/isImmutable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isImmutable;
    var _isType = require_isType();
    var _generated = require_generated();
    function isImmutable(node) {
      if ((0, _isType.default)(node.type, "Immutable"))
        return true;
      if ((0, _generated.isIdentifier)(node)) {
        if (node.name === "undefined") {
          return true;
        } else {
          return false;
        }
      }
      return false;
    }
  }
});

// node_modules/@babel/types/lib/validators/isNodesEquivalent.js
var require_isNodesEquivalent = __commonJS({
  "node_modules/@babel/types/lib/validators/isNodesEquivalent.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isNodesEquivalent;
    var _definitions = require_definitions();
    function isNodesEquivalent(a, b) {
      if (typeof a !== "object" || typeof b !== "object" || a == null || b == null) {
        return a === b;
      }
      if (a.type !== b.type) {
        return false;
      }
      const fields = Object.keys(_definitions.NODE_FIELDS[a.type] || a.type);
      const visitorKeys = _definitions.VISITOR_KEYS[a.type];
      for (const field of fields) {
        const val_a = a[field];
        const val_b = b[field];
        if (typeof val_a !== typeof val_b) {
          return false;
        }
        if (val_a == null && val_b == null) {
          continue;
        } else if (val_a == null || val_b == null) {
          return false;
        }
        if (Array.isArray(val_a)) {
          if (!Array.isArray(val_b)) {
            return false;
          }
          if (val_a.length !== val_b.length) {
            return false;
          }
          for (let i = 0; i < val_a.length; i++) {
            if (!isNodesEquivalent(val_a[i], val_b[i])) {
              return false;
            }
          }
          continue;
        }
        if (typeof val_a === "object" && !(visitorKeys != null && visitorKeys.includes(field))) {
          for (const key of Object.keys(val_a)) {
            if (val_a[key] !== val_b[key]) {
              return false;
            }
          }
          continue;
        }
        if (!isNodesEquivalent(val_a, val_b)) {
          return false;
        }
      }
      return true;
    }
  }
});

// node_modules/@babel/types/lib/validators/isReferenced.js
var require_isReferenced = __commonJS({
  "node_modules/@babel/types/lib/validators/isReferenced.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isReferenced;
    function isReferenced(node, parent, grandparent) {
      switch (parent.type) {
        case "MemberExpression":
        case "OptionalMemberExpression":
          if (parent.property === node) {
            return !!parent.computed;
          }
          return parent.object === node;
        case "JSXMemberExpression":
          return parent.object === node;
        case "VariableDeclarator":
          return parent.init === node;
        case "ArrowFunctionExpression":
          return parent.body === node;
        case "PrivateName":
          return false;
        case "ClassMethod":
        case "ClassPrivateMethod":
        case "ObjectMethod":
          if (parent.key === node) {
            return !!parent.computed;
          }
          return false;
        case "ObjectProperty":
          if (parent.key === node) {
            return !!parent.computed;
          }
          return !grandparent || grandparent.type !== "ObjectPattern";
        case "ClassProperty":
        case "ClassAccessorProperty":
          if (parent.key === node) {
            return !!parent.computed;
          }
          return true;
        case "ClassPrivateProperty":
          return parent.key !== node;
        case "ClassDeclaration":
        case "ClassExpression":
          return parent.superClass === node;
        case "AssignmentExpression":
          return parent.right === node;
        case "AssignmentPattern":
          return parent.right === node;
        case "LabeledStatement":
          return false;
        case "CatchClause":
          return false;
        case "RestElement":
          return false;
        case "BreakStatement":
        case "ContinueStatement":
          return false;
        case "FunctionDeclaration":
        case "FunctionExpression":
          return false;
        case "ExportNamespaceSpecifier":
        case "ExportDefaultSpecifier":
          return false;
        case "ExportSpecifier":
          if (grandparent != null && grandparent.source) {
            return false;
          }
          return parent.local === node;
        case "ImportDefaultSpecifier":
        case "ImportNamespaceSpecifier":
        case "ImportSpecifier":
          return false;
        case "ImportAttribute":
          return false;
        case "JSXAttribute":
          return false;
        case "ObjectPattern":
        case "ArrayPattern":
          return false;
        case "MetaProperty":
          return false;
        case "ObjectTypeProperty":
          return parent.key !== node;
        case "TSEnumMember":
          return parent.id !== node;
        case "TSPropertySignature":
          if (parent.key === node) {
            return !!parent.computed;
          }
          return true;
      }
      return true;
    }
  }
});

// node_modules/@babel/types/lib/validators/isScope.js
var require_isScope = __commonJS({
  "node_modules/@babel/types/lib/validators/isScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isScope;
    var _generated = require_generated();
    function isScope(node, parent) {
      if ((0, _generated.isBlockStatement)(node) && ((0, _generated.isFunction)(parent) || (0, _generated.isCatchClause)(parent))) {
        return false;
      }
      if ((0, _generated.isPattern)(node) && ((0, _generated.isFunction)(parent) || (0, _generated.isCatchClause)(parent))) {
        return true;
      }
      return (0, _generated.isScopable)(node);
    }
  }
});

// node_modules/@babel/types/lib/validators/isSpecifierDefault.js
var require_isSpecifierDefault = __commonJS({
  "node_modules/@babel/types/lib/validators/isSpecifierDefault.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isSpecifierDefault;
    var _generated = require_generated();
    function isSpecifierDefault(specifier) {
      return (0, _generated.isImportDefaultSpecifier)(specifier) || (0, _generated.isIdentifier)(specifier.imported || specifier.exported, {
        name: "default"
      });
    }
  }
});

// node_modules/@babel/types/lib/validators/isValidES3Identifier.js
var require_isValidES3Identifier = __commonJS({
  "node_modules/@babel/types/lib/validators/isValidES3Identifier.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isValidES3Identifier;
    var _isValidIdentifier = require_isValidIdentifier();
    var RESERVED_WORDS_ES3_ONLY = /* @__PURE__ */ new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"]);
    function isValidES3Identifier(name) {
      return (0, _isValidIdentifier.default)(name) && !RESERVED_WORDS_ES3_ONLY.has(name);
    }
  }
});

// node_modules/@babel/types/lib/validators/isVar.js
var require_isVar = __commonJS({
  "node_modules/@babel/types/lib/validators/isVar.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isVar;
    var _generated = require_generated();
    var _constants = require_constants();
    function isVar(node) {
      return (0, _generated.isVariableDeclaration)(node, {
        kind: "var"
      }) && !node[_constants.BLOCK_SCOPED_SYMBOL];
    }
  }
});

// node_modules/@babel/types/lib/ast-types/generated/index.js
var require_generated5 = __commonJS({
  "node_modules/@babel/types/lib/ast-types/generated/index.js"() {
  }
});

// node_modules/@babel/types/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/@babel/types/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _exportNames = {
      react: true,
      assertNode: true,
      createTypeAnnotationBasedOnTypeof: true,
      createUnionTypeAnnotation: true,
      createFlowUnionType: true,
      createTSUnionType: true,
      cloneNode: true,
      clone: true,
      cloneDeep: true,
      cloneDeepWithoutLoc: true,
      cloneWithoutLoc: true,
      addComment: true,
      addComments: true,
      inheritInnerComments: true,
      inheritLeadingComments: true,
      inheritsComments: true,
      inheritTrailingComments: true,
      removeComments: true,
      ensureBlock: true,
      toBindingIdentifierName: true,
      toBlock: true,
      toComputedKey: true,
      toExpression: true,
      toIdentifier: true,
      toKeyAlias: true,
      toSequenceExpression: true,
      toStatement: true,
      valueToNode: true,
      appendToMemberExpression: true,
      inherits: true,
      prependToMemberExpression: true,
      removeProperties: true,
      removePropertiesDeep: true,
      removeTypeDuplicates: true,
      getBindingIdentifiers: true,
      getOuterBindingIdentifiers: true,
      traverse: true,
      traverseFast: true,
      shallowEqual: true,
      is: true,
      isBinding: true,
      isBlockScoped: true,
      isImmutable: true,
      isLet: true,
      isNode: true,
      isNodesEquivalent: true,
      isPlaceholderType: true,
      isReferenced: true,
      isScope: true,
      isSpecifierDefault: true,
      isType: true,
      isValidES3Identifier: true,
      isValidIdentifier: true,
      isVar: true,
      matchesPattern: true,
      validate: true,
      buildMatchMemberExpression: true
    };
    Object.defineProperty(exports, "addComment", {
      enumerable: true,
      get: function() {
        return _addComment.default;
      }
    });
    Object.defineProperty(exports, "addComments", {
      enumerable: true,
      get: function() {
        return _addComments.default;
      }
    });
    Object.defineProperty(exports, "appendToMemberExpression", {
      enumerable: true,
      get: function() {
        return _appendToMemberExpression.default;
      }
    });
    Object.defineProperty(exports, "assertNode", {
      enumerable: true,
      get: function() {
        return _assertNode.default;
      }
    });
    Object.defineProperty(exports, "buildMatchMemberExpression", {
      enumerable: true,
      get: function() {
        return _buildMatchMemberExpression.default;
      }
    });
    Object.defineProperty(exports, "clone", {
      enumerable: true,
      get: function() {
        return _clone.default;
      }
    });
    Object.defineProperty(exports, "cloneDeep", {
      enumerable: true,
      get: function() {
        return _cloneDeep.default;
      }
    });
    Object.defineProperty(exports, "cloneDeepWithoutLoc", {
      enumerable: true,
      get: function() {
        return _cloneDeepWithoutLoc.default;
      }
    });
    Object.defineProperty(exports, "cloneNode", {
      enumerable: true,
      get: function() {
        return _cloneNode.default;
      }
    });
    Object.defineProperty(exports, "cloneWithoutLoc", {
      enumerable: true,
      get: function() {
        return _cloneWithoutLoc.default;
      }
    });
    Object.defineProperty(exports, "createFlowUnionType", {
      enumerable: true,
      get: function() {
        return _createFlowUnionType.default;
      }
    });
    Object.defineProperty(exports, "createTSUnionType", {
      enumerable: true,
      get: function() {
        return _createTSUnionType.default;
      }
    });
    Object.defineProperty(exports, "createTypeAnnotationBasedOnTypeof", {
      enumerable: true,
      get: function() {
        return _createTypeAnnotationBasedOnTypeof.default;
      }
    });
    Object.defineProperty(exports, "createUnionTypeAnnotation", {
      enumerable: true,
      get: function() {
        return _createFlowUnionType.default;
      }
    });
    Object.defineProperty(exports, "ensureBlock", {
      enumerable: true,
      get: function() {
        return _ensureBlock.default;
      }
    });
    Object.defineProperty(exports, "getBindingIdentifiers", {
      enumerable: true,
      get: function() {
        return _getBindingIdentifiers.default;
      }
    });
    Object.defineProperty(exports, "getOuterBindingIdentifiers", {
      enumerable: true,
      get: function() {
        return _getOuterBindingIdentifiers.default;
      }
    });
    Object.defineProperty(exports, "inheritInnerComments", {
      enumerable: true,
      get: function() {
        return _inheritInnerComments.default;
      }
    });
    Object.defineProperty(exports, "inheritLeadingComments", {
      enumerable: true,
      get: function() {
        return _inheritLeadingComments.default;
      }
    });
    Object.defineProperty(exports, "inheritTrailingComments", {
      enumerable: true,
      get: function() {
        return _inheritTrailingComments.default;
      }
    });
    Object.defineProperty(exports, "inherits", {
      enumerable: true,
      get: function() {
        return _inherits.default;
      }
    });
    Object.defineProperty(exports, "inheritsComments", {
      enumerable: true,
      get: function() {
        return _inheritsComments.default;
      }
    });
    Object.defineProperty(exports, "is", {
      enumerable: true,
      get: function() {
        return _is.default;
      }
    });
    Object.defineProperty(exports, "isBinding", {
      enumerable: true,
      get: function() {
        return _isBinding.default;
      }
    });
    Object.defineProperty(exports, "isBlockScoped", {
      enumerable: true,
      get: function() {
        return _isBlockScoped.default;
      }
    });
    Object.defineProperty(exports, "isImmutable", {
      enumerable: true,
      get: function() {
        return _isImmutable.default;
      }
    });
    Object.defineProperty(exports, "isLet", {
      enumerable: true,
      get: function() {
        return _isLet.default;
      }
    });
    Object.defineProperty(exports, "isNode", {
      enumerable: true,
      get: function() {
        return _isNode.default;
      }
    });
    Object.defineProperty(exports, "isNodesEquivalent", {
      enumerable: true,
      get: function() {
        return _isNodesEquivalent.default;
      }
    });
    Object.defineProperty(exports, "isPlaceholderType", {
      enumerable: true,
      get: function() {
        return _isPlaceholderType.default;
      }
    });
    Object.defineProperty(exports, "isReferenced", {
      enumerable: true,
      get: function() {
        return _isReferenced.default;
      }
    });
    Object.defineProperty(exports, "isScope", {
      enumerable: true,
      get: function() {
        return _isScope.default;
      }
    });
    Object.defineProperty(exports, "isSpecifierDefault", {
      enumerable: true,
      get: function() {
        return _isSpecifierDefault.default;
      }
    });
    Object.defineProperty(exports, "isType", {
      enumerable: true,
      get: function() {
        return _isType.default;
      }
    });
    Object.defineProperty(exports, "isValidES3Identifier", {
      enumerable: true,
      get: function() {
        return _isValidES3Identifier.default;
      }
    });
    Object.defineProperty(exports, "isValidIdentifier", {
      enumerable: true,
      get: function() {
        return _isValidIdentifier.default;
      }
    });
    Object.defineProperty(exports, "isVar", {
      enumerable: true,
      get: function() {
        return _isVar.default;
      }
    });
    Object.defineProperty(exports, "matchesPattern", {
      enumerable: true,
      get: function() {
        return _matchesPattern.default;
      }
    });
    Object.defineProperty(exports, "prependToMemberExpression", {
      enumerable: true,
      get: function() {
        return _prependToMemberExpression.default;
      }
    });
    exports.react = void 0;
    Object.defineProperty(exports, "removeComments", {
      enumerable: true,
      get: function() {
        return _removeComments.default;
      }
    });
    Object.defineProperty(exports, "removeProperties", {
      enumerable: true,
      get: function() {
        return _removeProperties.default;
      }
    });
    Object.defineProperty(exports, "removePropertiesDeep", {
      enumerable: true,
      get: function() {
        return _removePropertiesDeep.default;
      }
    });
    Object.defineProperty(exports, "removeTypeDuplicates", {
      enumerable: true,
      get: function() {
        return _removeTypeDuplicates.default;
      }
    });
    Object.defineProperty(exports, "shallowEqual", {
      enumerable: true,
      get: function() {
        return _shallowEqual.default;
      }
    });
    Object.defineProperty(exports, "toBindingIdentifierName", {
      enumerable: true,
      get: function() {
        return _toBindingIdentifierName.default;
      }
    });
    Object.defineProperty(exports, "toBlock", {
      enumerable: true,
      get: function() {
        return _toBlock.default;
      }
    });
    Object.defineProperty(exports, "toComputedKey", {
      enumerable: true,
      get: function() {
        return _toComputedKey.default;
      }
    });
    Object.defineProperty(exports, "toExpression", {
      enumerable: true,
      get: function() {
        return _toExpression.default;
      }
    });
    Object.defineProperty(exports, "toIdentifier", {
      enumerable: true,
      get: function() {
        return _toIdentifier.default;
      }
    });
    Object.defineProperty(exports, "toKeyAlias", {
      enumerable: true,
      get: function() {
        return _toKeyAlias.default;
      }
    });
    Object.defineProperty(exports, "toSequenceExpression", {
      enumerable: true,
      get: function() {
        return _toSequenceExpression.default;
      }
    });
    Object.defineProperty(exports, "toStatement", {
      enumerable: true,
      get: function() {
        return _toStatement.default;
      }
    });
    Object.defineProperty(exports, "traverse", {
      enumerable: true,
      get: function() {
        return _traverse.default;
      }
    });
    Object.defineProperty(exports, "traverseFast", {
      enumerable: true,
      get: function() {
        return _traverseFast.default;
      }
    });
    Object.defineProperty(exports, "validate", {
      enumerable: true,
      get: function() {
        return _validate.default;
      }
    });
    Object.defineProperty(exports, "valueToNode", {
      enumerable: true,
      get: function() {
        return _valueToNode.default;
      }
    });
    var _isReactComponent = require_isReactComponent();
    var _isCompatTag = require_isCompatTag();
    var _buildChildren = require_buildChildren();
    var _assertNode = require_assertNode();
    var _generated = require_generated3();
    Object.keys(_generated).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _generated[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _generated[key];
        }
      });
    });
    var _createTypeAnnotationBasedOnTypeof = require_createTypeAnnotationBasedOnTypeof();
    var _createFlowUnionType = require_createFlowUnionType();
    var _createTSUnionType = require_createTSUnionType();
    var _generated2 = require_generated2();
    Object.keys(_generated2).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _generated2[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _generated2[key];
        }
      });
    });
    var _uppercase = require_uppercase();
    Object.keys(_uppercase).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _uppercase[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _uppercase[key];
        }
      });
    });
    var _cloneNode = require_cloneNode();
    var _clone = require_clone();
    var _cloneDeep = require_cloneDeep();
    var _cloneDeepWithoutLoc = require_cloneDeepWithoutLoc();
    var _cloneWithoutLoc = require_cloneWithoutLoc();
    var _addComment = require_addComment();
    var _addComments = require_addComments();
    var _inheritInnerComments = require_inheritInnerComments();
    var _inheritLeadingComments = require_inheritLeadingComments();
    var _inheritsComments = require_inheritsComments();
    var _inheritTrailingComments = require_inheritTrailingComments();
    var _removeComments = require_removeComments();
    var _generated3 = require_generated4();
    Object.keys(_generated3).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _generated3[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _generated3[key];
        }
      });
    });
    var _constants = require_constants();
    Object.keys(_constants).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _constants[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _constants[key];
        }
      });
    });
    var _ensureBlock = require_ensureBlock();
    var _toBindingIdentifierName = require_toBindingIdentifierName();
    var _toBlock = require_toBlock();
    var _toComputedKey = require_toComputedKey();
    var _toExpression = require_toExpression();
    var _toIdentifier = require_toIdentifier();
    var _toKeyAlias = require_toKeyAlias();
    var _toSequenceExpression = require_toSequenceExpression();
    var _toStatement = require_toStatement();
    var _valueToNode = require_valueToNode();
    var _definitions = require_definitions();
    Object.keys(_definitions).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _definitions[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _definitions[key];
        }
      });
    });
    var _appendToMemberExpression = require_appendToMemberExpression();
    var _inherits = require_inherits();
    var _prependToMemberExpression = require_prependToMemberExpression();
    var _removeProperties = require_removeProperties();
    var _removePropertiesDeep = require_removePropertiesDeep();
    var _removeTypeDuplicates = require_removeTypeDuplicates();
    var _getBindingIdentifiers = require_getBindingIdentifiers();
    var _getOuterBindingIdentifiers = require_getOuterBindingIdentifiers();
    var _traverse = require_traverse();
    Object.keys(_traverse).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _traverse[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _traverse[key];
        }
      });
    });
    var _traverseFast = require_traverseFast();
    var _shallowEqual = require_shallowEqual();
    var _is = require_is();
    var _isBinding = require_isBinding();
    var _isBlockScoped = require_isBlockScoped();
    var _isImmutable = require_isImmutable();
    var _isLet = require_isLet();
    var _isNode = require_isNode();
    var _isNodesEquivalent = require_isNodesEquivalent();
    var _isPlaceholderType = require_isPlaceholderType();
    var _isReferenced = require_isReferenced();
    var _isScope = require_isScope();
    var _isSpecifierDefault = require_isSpecifierDefault();
    var _isType = require_isType();
    var _isValidES3Identifier = require_isValidES3Identifier();
    var _isValidIdentifier = require_isValidIdentifier();
    var _isVar = require_isVar();
    var _matchesPattern = require_matchesPattern();
    var _validate = require_validate();
    var _buildMatchMemberExpression = require_buildMatchMemberExpression();
    var _generated4 = require_generated();
    Object.keys(_generated4).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _generated4[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _generated4[key];
        }
      });
    });
    var _generated5 = require_generated5();
    Object.keys(_generated5).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _generated5[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _generated5[key];
        }
      });
    });
    var react = {
      isReactComponent: _isReactComponent.default,
      isCompatTag: _isCompatTag.default,
      buildChildren: _buildChildren.default
    };
    exports.react = react;
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_promises = require("fs/promises");
var import_path5 = __toESM(require("path"), 1);
var import_fs2 = __toESM(require("fs"), 1);
var import_fs_extra6 = __toESM(require("fs-extra"), 1);
var import_types12 = __toESM(require_lib3(), 1);

// src/vue-babel/template-script/index.ts
var import_parser4 = __toESM(require("@babel/parser"), 1);
var import_types10 = __toESM(require_lib3(), 1);
var import_generator3 = __toESM(require("@babel/generator"), 1);
var import_traverse7 = __toESM(require("@babel/traverse"), 1);

// src/vue-babel/template-script/utils.ts
var import_fs_extra2 = __toESM(require("fs-extra"), 1);
var import_types = __toESM(require_lib3(), 1);
var import_traverse = __toESM(require("@babel/traverse"), 1);

// src/config.ts
var import_path = __toESM(require("path"), 1);
var import_fs_extra = __toESM(require("fs-extra"), 1);
var labelAttribs = {
  "van-action-sheet": {
    "v-model": "v-model:show"
  },
  "van-dialog": {
    "v-model": "v-model:show"
  },
  "van-share-sheet": {
    "v-model": "v-model:show"
  },
  "van-circle": {
    "v-model": "v-model:current-rate"
  },
  "van-list": {
    "v-model": "v-model:loading"
  },
  "van-popover": {
    "v-model": "v-model:show"
  },
  "van-tabs": {
    "v-model": "v-model:active"
  },
  "van-tree-select": {
    ":active-id.sync": "v-model:active-id",
    ":main-active-index.sync": "v-model:main-active-index",
    ":active-id": "v-model:active-id",
    ":main-active-index": "v-model:main-active-index"
  }
};
var updateAlias = (value) => {
  Object.keys(value).forEach((key) => {
    const src = value[key];
    if (src.indexOf("./") > -1 || src.indexOf("../") > -1) {
      value[key] = import_path.default.join(rootPath, value[key]);
    }
  });
  return value;
};
var rootPath = process.cwd();
var configUrl = import_path.default.join(rootPath, "magic.config.json");
var status = import_fs_extra.default.existsSync(configUrl);
var options = {
  dataName: "stateData",
  rootPath,
  alias: {
    "~": rootPath,
    "@": rootPath
  },
  piniaStore: {
    aliasPrefix: "~/store",
    pathVal: import_path.default.join(rootPath, "./store")
  },
  output: import_path.default.join(rootPath, "../newVue/"),
  entranceDir: rootPath,
  compileDir: ["components", "pages", "layouts"],
  scssTurn: false,
  labelAttribs,
  fileExtension: [".vue", ".js", ".ts"]
};
var _a, _b, _c, _d;
if (status) {
  const config = JSON.parse(import_fs_extra.default.readFileSync(configUrl));
  config.output && (options.output = import_path.default.join(rootPath, config.output));
  config.compileDir && (options.compileDir = config.compileDir);
  config.dataName && (options.dataName = config.dataName);
  if (config.piniaStore) {
    ((_a = config.piniaStore) == null ? void 0 : _a.aliasPrefix) && (options.piniaStore.aliasPrefix = (_b = config.piniaStore) == null ? void 0 : _b.aliasPrefix);
    ((_c = config.piniaStore) == null ? void 0 : _c.pathVal) && (options.piniaStore.pathVal = import_path.default.join(rootPath, (_d = config.piniaStore) == null ? void 0 : _d.pathVal));
    config.scssTurn && (options.scssTurn = config.scssTurn);
    (config == null ? void 0 : config.alias) && (options.alias = { ...options.alias, ...updateAlias(config == null ? void 0 : config.alias) });
    config.labelAttribs && (options.labelAttribs = { ...options.labelAttribs, ...config.labelAttribs });
  }
}

// src/vue-babel/template-script/utils.ts
var modifyCycleName = (str, prefix = "") => {
  return prefix + str.charAt(0).toUpperCase() + str.substring(1);
};
var adaptationFolder = (value) => {
  if (!value)
    return value;
  const arr = value.split(".");
  const suffix = "." + arr[arr.length];
  if (options.fileExtension.includes(suffix)) {
    return value;
  }
  return (import_fs_extra2.default.existsSync(value) ? value + "/index" : value).replaceAll("\\", "/");
};
var underlineToHump = (str) => {
  if (!str)
    return "";
  return str.replace(/-(\w)/g, (_, letter) => {
    return letter.toUpperCase();
  });
};
var getPiniaName = (name) => {
  return modifyCycleName(name, "use") + "Store";
};
var getPiniaVariable = (name) => {
  if (name.indexOf("Store") > -1)
    return name;
  return name + "Store";
};
var createImport = (specifiers, source) => {
  const importSpecifierArray = [];
  specifiers.forEach((importName) => {
    const specifiersName = import_types.default.identifier(importName);
    const importSpecifier = import_types.default.importSpecifier(specifiersName, specifiersName);
    importSpecifierArray.push(importSpecifier);
  });
  const stringLiteral = import_types.default.stringLiteral(source);
  const importDeclaration = import_types.default.importDeclaration(importSpecifierArray, stringLiteral);
  return importDeclaration;
};
var createFnVariable = (variable, fnName, params = [], isAwait = false) => {
  const callExpression = import_types.default.callExpression(import_types.default.identifier(fnName), params);
  let id;
  if (Array.isArray(variable)) {
    const objectPropertyArr = [];
    variable.forEach((item) => {
      const identifier = import_types.default.identifier(item);
      objectPropertyArr.push(import_types.default.objectProperty(identifier, identifier, false, true));
    });
    id = import_types.default.objectPattern(objectPropertyArr);
  } else {
    id = import_types.default.identifier(variable);
  }
  let declarations;
  if (isAwait) {
    declarations = import_types.default.variableDeclarator(id, import_types.default.awaitExpression(callExpression));
  } else {
    declarations = import_types.default.variableDeclarator(id, callExpression);
  }
  const variableDeclaration = import_types.default.variableDeclaration("const", [declarations]);
  return variableDeclaration;
};
var arrowFunctionExpression = (params, body, async = false) => {
  const arrowFunctionExpression2 = import_types.default.arrowFunctionExpression(params, body, async);
  return arrowFunctionExpression2;
};
var variableFunction = (variable, fn) => {
  const id = import_types.default.identifier(variable);
  const declarations = import_types.default.variableDeclarator(id, fn);
  const variableDeclaration = import_types.default.variableDeclaration("const", [declarations]);
  return variableDeclaration;
};
var createArrayExpression = (arr) => {
  const stringLiteralArr = [];
  arr.forEach((item) => stringLiteralArr.push(import_types.default.stringLiteral(item)));
  return import_types.default.arrayExpression(stringLiteralArr);
};
var createRunFunction = (calleeName, params = []) => {
  const callee = import_types.default.identifier(calleeName);
  const callExpression = import_types.default.callExpression(callee, params);
  return import_types.default.expressionStatement(callExpression);
};
var createObjectExpression = (params) => {
  if (Array.isArray(params)) {
    const objectProperty = [];
    params.forEach((item) => {
      if (typeof item === "string") {
        const identifier = import_types.default.identifier(item);
        objectProperty.push(import_types.default.objectProperty(identifier, identifier, false, true));
      } else if (item.name && item.node) {
        const identifier = import_types.default.identifier(item.name);
        objectProperty.push(import_types.default.objectProperty(identifier, item.node));
      }
    });
    return import_types.default.objectExpression(objectProperty);
  } else {
    return import_types.default.identifier(params);
  }
};
var createReturnStatement = (params) => {
  return import_types.default.returnStatement(createObjectExpression(params));
};
var createMemberExpression = (arr) => {
  if (arr.length <= 1) {
    return import_types.default.identifier(arr[0]);
  }
  const val = arr.splice(0, 1);
  return import_types.default.memberExpression(createMemberExpression(arr), import_types.default.identifier(val[0]));
};
var createCallExpression = (callee, params) => {
  return import_types.default.callExpression(callee, params);
};
var getRefName = (name) => {
  if (!name || name.indexOf("_ref") > -1)
    return name;
  return name + "_ref";
};
var filterImport = (name) => {
  const fillterName = ["vuex"];
  let status2 = true;
  for (let index = 0; index < fillterName.length; index++) {
    const element = fillterName[index];
    if (name.indexOf(element) > -1) {
      status2 = false;
      break;
    }
  }
  return status2;
};
var getCompoentEl = () => {
  return "el_ref";
};
var replaceCross = (str) => {
  return str.replaceAll("-", "_");
};
var getStoreUrl = (arr) => {
  if (!Array.isArray(arr))
    return "";
  const endCount = arr.length === 1 ? 1 : arr.length - 1;
  return arr.slice(0, endCount).join("/");
};
var replaceIdentifier = (ast, oldName, newName) => {
  const statement = import_types.default.expressionStatement(ast);
  const program = import_types.default.program([statement]);
  const file = import_types.default.file(program);
  import_traverse.default.default(file, {
    Identifier(path6) {
      const name = path6.node.name;
      if (name === oldName) {
        path6.node.name = newName;
      }
    }
  });
};

// src/vue-babel/template-script/DataRender.ts
var DataRender = class {
  constructor(dataNode, options2, _newAst) {
    this.dataNode = [];
    this.variableDeclaration = [];
    this.reactiveData = {};
    this.reactiveKey = /* @__PURE__ */ new Set();
    this.dataNode = dataNode;
    this.options = options2;
    this.newAst = _newAst;
    this.init();
  }
  setReactiveKey(properties) {
    properties.forEach((node) => {
      this.reactiveKey.add(node.key.name);
    });
  }
  hasReactiveKey(key) {
    return this.reactiveKey.has(key);
  }
  init() {
    this.dataNode.forEach((node) => {
      if (node.type === "VariableDeclaration") {
        this.variableDeclaration.push(node);
      } else if (node.type === "ReturnStatement") {
        this.setReactiveKey(node.argument.properties);
        this.reactiveData = node.argument;
      }
    });
  }
  async render() {
    if (this.variableDeclaration.length > 0) {
      this.newAst.program.body.push(...this.variableDeclaration);
    }
    const reactiveNode = createFnVariable(this.options.dataName, "reactive", [this.reactiveData]);
    this.newAst.program.body.push(reactiveNode);
  }
};

// src/vue-babel/template-script/ComputedRender.ts
var ComputedRender = class {
  constructor(_computeNode, _options, _newAst) {
    this.computedKey = /* @__PURE__ */ new Set();
    this.computeBodyMap = /* @__PURE__ */ new Map();
    this.computeNode = _computeNode;
    this.options = _options;
    this.newAst = _newAst;
    this.init();
  }
  init() {
    this.computeNode.forEach((node) => {
      if (node.type != "SpreadElement") {
        const nodeName = node.key.name;
        this.computedKey.add(nodeName);
        const isReadWrite = node.type === "ObjectProperty";
        const computedItem = {
          isReadWrite,
          name: nodeName,
          params: node.params,
          body: isReadWrite ? node.value : node.body
        };
        this.computeBodyMap.set(nodeName, computedItem);
      }
    });
  }
  hasComputedKey(key) {
    return this.computedKey.has(key);
  }
  render() {
    this.computedKey.forEach((item) => {
      const computedItem = this.computeBodyMap.get(item);
      let computedNode;
      if (!computedItem)
        return;
      if (computedItem.isReadWrite) {
        computedNode = createFnVariable(computedItem.name, "computed", [computedItem.body]);
      } else {
        const fn = arrowFunctionExpression(computedItem.params, computedItem.body);
        computedNode = createFnVariable(computedItem.name, "computed", [fn]);
      }
      this.newAst.program.body.push(computedNode);
    });
  }
};

// src/vue-babel/template-script/MethodsRender.ts
var import_types2 = __toESM(require_lib3(), 1);
var MethodsRender = class {
  constructor(methodsNode, options2, _newAst) {
    this.methodsKey = /* @__PURE__ */ new Set();
    this.methodsBodyMap = /* @__PURE__ */ new Map();
    this.methodsNode = methodsNode;
    this.options = options2;
    this.newAst = _newAst;
    this.init();
  }
  init() {
    this.methodsNode.forEach((node) => {
      if (import_types2.default.isObjectProperty(node)) {
        const nodeName = node.key.name;
        const val = node.value;
        if (!val.callee)
          return;
        if (val.callee.name === "debounce") {
          val.arguments[0].params = [];
        }
        this.methodsKey.add(nodeName);
        const methodsItem = {
          name: nodeName,
          value: val
        };
        this.methodsBodyMap.set(nodeName, methodsItem);
        return;
      }
      if (!import_types2.default.isObjectProperty(node) && !import_types2.default.isSpreadElement(node)) {
        const nodeName = node.key.name;
        this.methodsKey.add(nodeName);
        const methodsItem = {
          name: nodeName,
          params: node.params,
          body: node.body,
          async: node.async
        };
        this.methodsBodyMap.set(nodeName, methodsItem);
      }
    });
  }
  async render() {
    Array.from(this.methodsKey).forEach((item) => {
      const methodsItem = this.methodsBodyMap.get(item);
      if (!methodsItem)
        return;
      let fn;
      if (methodsItem.value) {
        fn = methodsItem.value;
      } else {
        fn = arrowFunctionExpression(methodsItem.params, methodsItem.body, methodsItem.async);
      }
      this.newAst.program.body.push(variableFunction(methodsItem.name, fn));
    });
  }
};

// src/vue-babel/template-script/LifeCycleRender.ts
var cycleTypeV3 = {
  beforeCreate: "beforeCreate",
  created: "created",
  beforeMount: "beforeMount",
  mounted: "mounted",
  beforeUpdate: "beforeUpdate",
  updated: "updated",
  beforeDestroy: "beforeUnmount",
  destroyed: "unmounted"
};
var ruleOuType = ["onBeforeCreate", "onCreated"];
var LifeCycleAnalysis = class {
  constructor(options2, _newAst, _importRender) {
    this.cycleKey = /* @__PURE__ */ new Set();
    this.cycleBodyMap = /* @__PURE__ */ new Map();
    this.options = options2;
    this.newAst = _newAst;
    this.importRender = _importRender;
  }
  static isCycle(nodeName) {
    return !!cycleTypeV3[nodeName];
  }
  init(cycleNode) {
    const nodeName = modifyCycleName(cycleTypeV3[cycleNode.key.name], "on");
    this.importRender.addVueApi(nodeName);
    this.cycleKey.add(nodeName);
    const cycleItem = {
      name: nodeName,
      params: cycleNode.params,
      body: cycleNode.body,
      async: cycleNode.async
    };
    this.cycleBodyMap.set(nodeName, cycleItem);
  }
  dealWithCode() {
    Array.from(this.cycleKey).forEach((item) => {
      const cycleItem = this.cycleBodyMap.get(item);
      const cycleNode = [];
      if (!cycleItem)
        return;
      if (cycleItem && ruleOuType.includes(cycleItem.name)) {
        const arrowFn = arrowFunctionExpression(cycleItem.params, cycleItem.body, cycleItem.async);
        const variableNode = variableFunction(cycleItem.name, arrowFn);
        const runNode = createRunFunction(cycleItem.name);
        cycleNode.push(...[variableNode, runNode]);
      } else {
        const arrowFn = arrowFunctionExpression(cycleItem.params, cycleItem.body, cycleItem.async);
        const runNode = createRunFunction(cycleItem.name, [arrowFn]);
        cycleNode.push(runNode);
      }
      this.newAst.program.body.push(...cycleNode);
    });
  }
  async render() {
    this.dealWithCode();
  }
};

// src/vue-babel/template-script/PropsRender.ts
var import_types3 = __toESM(require_lib3(), 1);
var import_traverse2 = __toESM(require("@babel/traverse"), 1);
var PropsRender = class {
  constructor(propsNode, options2, _newAst, ast) {
    this.propsNode = [];
    this.propsKey = /* @__PURE__ */ new Set();
    this.isArrayExpression = false;
    this.propsNode = propsNode;
    this.options = options2;
    this.newAst = _newAst;
    this.oldAst = ast;
    this.init();
  }
  hasPropsKey(key) {
    return this.propsKey.has(key);
  }
  init() {
    this.isArrayExpression = this.propsNode.type === "ArrayExpression";
    if (this.isArrayExpression) {
      this.propsNode.elements.forEach((node) => {
        if (node.value == "value") {
          node.value = "modelValue" /* NAME */;
        }
        this.propsKey.add(node.value);
      });
    } else {
      const _this = this;
      this.propsNode.properties.forEach((node) => {
        if (import_types3.default.isSpreadElement(node)) {
          import_traverse2.default.default(this.oldAst, {
            Identifier(path6) {
              if (node.argument.name === path6.node.name && !import_types3.default.isSpreadElement(path6.parent)) {
                path6.parent.init.properties.forEach((v) => {
                  if (v.key) {
                    if (v.key.name == "value") {
                      v.key.name = "modelValue" /* NAME */;
                    }
                    _this.propsKey.add(v.key.name);
                  }
                });
              }
            }
          });
        } else {
          if (node.key.name == "value") {
            node.key.name = "modelValue" /* NAME */;
          }
          this.propsKey.add(node.key.name);
        }
      });
    }
  }
  async render() {
    const propsNode = createFnVariable("props", "defineProps", [this.propsNode]);
    this.newAst.program.body.push(propsNode);
  }
};

// src/vue-babel/template-script/ImportRender.ts
var import_types4 = __toESM(require_lib3(), 1);
var vueApi = {
  $emit: "emit",
  $nextTick: "nextTick"
};
var defaultVueApi = ["reactive"];
var ImportRender = (newAst, options2) => {
  return {
    importGlobal: [],
    importDeclarationMap: /* @__PURE__ */ new Map(),
    vueApiImports: new Set(defaultVueApi),
    hookMap: /* @__PURE__ */ new Map(),
    globalApi: /* @__PURE__ */ new Set(),
    globalVariable: new Array(),
    routerApi: /* @__PURE__ */ new Set(),
    emitKey: /* @__PURE__ */ new Set(),
    refKey: /* @__PURE__ */ new Set(),
    isVueApi(name) {
      return Object.keys(vueApi).includes(name);
    },
    collectGlobalVariable(ast) {
      ast.program.body.forEach((item) => {
        if (!import_types4.default.isImportDeclaration(item) && !import_types4.default.isExportDefaultDeclaration(item)) {
          this.globalVariable.push(item);
        }
      });
    },
    conversionApi(value) {
      return vueApi[value];
    },
    addGlobal(name) {
      this.globalApi.add(name);
    },
    addRouter(name) {
      const api = `use${modifyCycleName(name)}`;
      this.routerApi.add(api);
    },
    addRefKey(name) {
      this.refKey.add(name);
    },
    addImportGlobal(node) {
      if (options2.scssTurn && node.source && node.source.value) {
        node.source.value = node.source.value.replace(".styl", ".scss");
      }
      const value = node.source.value;
      node.specifiers.map((exportObj) => {
        const name = exportObj.local.name;
        this.importDeclarationMap.set(name, value);
      });
      this.importGlobal.push(node);
    },
    addVueApi(value) {
      this.vueApiImports.add(value);
    },
    addApiKey(value, path6) {
      const argument = path6.parent.arguments;
      if (value === vueApi.$emit && argument && argument.length > 0) {
        if (argument[0].value) {
          const emitName = argument[0].value;
          if (emitName == "input") {
            argument[0].value = "update:modelValue" /* EMIT_NAME */;
          }
          this.emitKey.add(argument[0].value);
        }
        return;
      }
      this.vueApiImports.add(value);
    },
    addHookMap(name, value) {
      if (!this.hookMap.has(name)) {
        this.hookMap.set(name, {
          name,
          value
        });
      }
    },
    renderHookMap() {
      if (this.hookMap.size > 0) {
        this.hookMap.forEach((item) => {
          const hookNode = createFnVariable(item.name, item.value);
          newAst.program.body.push(hookNode);
        });
      }
    },
    renderGlobal() {
      if (this.globalApi.size > 0) {
        const globalNode = createFnVariable(Array.from(this.globalApi), "useNuxtApp");
        newAst.program.body.push(globalNode);
      }
    },
    renderRouter() {
      if (this.routerApi.size > 0) {
        this.routerApi.forEach((item) => {
          const importNode = createFnVariable(`${item.replace("useR", "r")}`, item);
          newAst.program.body.push(importNode);
        });
      }
    },
    renderGlobalVariable() {
      if (this.globalVariable.length > 0) {
        this.globalVariable.forEach((item) => {
          newAst.program.body.push(item);
        });
      }
    },
    renderImportGlobal() {
      if (this.importGlobal.length > 0) {
        this.importGlobal.forEach((item) => {
          if (filterImport(item.source.value)) {
            newAst.program.body.push(item);
          }
        });
      }
    },
    renderImports() {
      const vueImport = createImport(Array.from(this.vueApiImports), "vue");
      let routerImport = null;
      if (this.routerApi.size > 0) {
        routerImport = createImport(Array.from(this.routerApi), "vue-router");
      }
      [vueImport, routerImport].forEach((item) => {
        if (item)
          newAst.program.body.push(item);
      });
    },
    renderEmit() {
      if (this.emitKey.size > 0) {
        const emitNode = createFnVariable("emit", "defineEmits", [createArrayExpression(Array.from(this.emitKey))]);
        newAst.program.body.push(emitNode);
      }
    },
    renderRef() {
      if (this.refKey.size > 0) {
        this.refKey.forEach((refName) => {
          if (!refName)
            return;
          const refNode = createFnVariable(refName, "ref", [import_types4.default.nullLiteral()]);
          newAst.program.body.push(refNode);
        });
      }
    },
    render() {
      this.renderImports();
      this.renderImportGlobal();
      this.renderGlobal();
      this.renderHookMap();
      this.renderRouter();
      this.renderGlobalVariable();
      this.renderEmit();
      this.renderRef();
    }
  };
};
var ImportRender_default = ImportRender;

// src/vue-babel/template-script/WatchRender.ts
var import_parser = __toESM(require("@babel/parser"), 1);
var import_types5 = __toESM(require_lib3(), 1);
var { parse } = import_parser.default;
var WatchRender = class {
  constructor(watchNode, dataContent, options2, _newAst) {
    this.objectWatch = [];
    this.objectProperty = [];
    this.watchKey = /* @__PURE__ */ new Set();
    const { dataRender, vuexRender, computedRender, propsRender, mixinRender } = dataContent;
    this.watchNode = watchNode;
    this.dataRender = dataRender;
    this.options = options2;
    this.newAst = _newAst;
    this.vuexRender = vuexRender;
    this.computedRender = computedRender;
    this.propsRender = propsRender;
    this.mixinRender = mixinRender;
    this.init();
  }
  init() {
    this.watchNode.properties.forEach((node) => {
      if (node.type === "ObjectMethod") {
        this.objectWatch.push(node);
      }
      if (node.type === "ObjectProperty") {
        this.objectProperty.push(node);
      }
    });
  }
  hasWatchKey(key) {
    return this.watchKey.has(key);
  }
  getPrefix(watchName) {
    const firstNode = watchName.split(".")[0];
    if (firstNode.indexOf("$") > -1) {
      return watchName.replace("$", "");
    }
    if (this.dataRender && this.dataRender.hasReactiveKey(firstNode)) {
      return `${this.options.dataName}.${watchName}`;
    }
    if (this.propsRender && this.propsRender.hasPropsKey(firstNode)) {
      return `props.${watchName}`;
    }
    if (this.computedRender && this.computedRender.hasComputedKey(firstNode)) {
      return `${watchName}.value`;
    }
    if (this.mixinRender && this.mixinRender.reactiveMap.has(firstNode)) {
      const data = this.mixinRender.reactiveMap.get(firstNode);
      return `${data.name}.${watchName}`;
    }
    if (this.mixinRender && this.mixinRender.computeMap.has(firstNode)) {
      return `${watchName}.value`;
    }
    if (this.vuexRender && this.vuexRender.stateHookMap.has(firstNode)) {
      const { prefix, value } = this.vuexRender.stateHookMap.get(firstNode);
      if (prefix)
        return `${prefix}.${watchName}`;
      const arr = watchName.split(".");
      arr[0] = value;
      return arr.join(".");
    }
  }
  addPrefix(key) {
    var _a2;
    try {
      let watchName = key.name ? key.name : key.value;
      const prefix = this.getPrefix(watchName);
      if (prefix) {
        watchName = prefix;
      }
      return (_a2 = parse(watchName, {
        sourceType: "module",
        plugins: ["jsx"]
      }).program.body[0]) == null ? void 0 : _a2.expression;
    } catch (error) {
      console.error("addPrefix----", key);
    }
  }
  createWatchNode(watchItem, watchParams = []) {
    const watchNameNode = this.addPrefix(watchItem.key);
    if (["route"].includes(watchNameNode.name)) {
      watchParams.push(import_types5.default.objectProperty(import_types5.default.identifier("deep"), import_types5.default.booleanLiteral(true)));
    }
    const watchAttribute = arrowFunctionExpression([], watchNameNode);
    let watchFn;
    if (watchItem.params && watchItem.body) {
      watchFn = arrowFunctionExpression(watchItem.params, watchItem.body);
    } else if (watchItem.value) {
      watchFn = import_types5.default.identifier(watchItem.value);
    }
    const params = [watchAttribute, watchFn];
    if (watchParams.length > 0) {
      params.push(import_types5.default.objectExpression(watchParams));
    }
    const fn = createRunFunction("watch" /* Watch */, params);
    this.newAst.program.body.push(fn);
  }
  renderObjectMethod() {
    this.objectWatch.forEach((item) => this.createWatchNode(item));
  }
  dealWithProperty(node) {
    const value = node.value;
    if (value.properties) {
      let watchItem = {};
      const watchParams = [];
      value.properties.forEach((v) => {
        if (v.key.name == "handler") {
          if (v.body) {
            watchItem = {
              params: v.params,
              body: v.body,
              key: node.key
            };
          } else if (v.value && import_types5.default.isStringLiteral(v.value)) {
            watchItem = {
              params: v.params || null,
              body: v.body || null,
              key: node.key,
              value: v.value.value
            };
          } else if (v.value && import_types5.default.isFunctionExpression(v.value)) {
            watchItem = {
              params: v.value.params,
              body: v.value.body,
              key: node.key
            };
          }
        } else {
          watchParams.push(v);
        }
      });
      this.createWatchNode(watchItem, watchParams);
    } else if (value.body) {
      const watchItem = {
        params: value.params,
        body: value.body,
        key: node.key
      };
      this.createWatchNode(watchItem);
    }
  }
  renderObjectProperty() {
    this.objectProperty.forEach((item) => this.dealWithProperty(item));
  }
  render() {
    this.renderObjectProperty();
    this.renderObjectMethod();
  }
};

// src/vue-babel/template-script/MixinRender.ts
var import_fs_extra3 = __toESM(require("fs-extra"), 1);
var import_path2 = __toESM(require("path"), 1);
var import_generator = __toESM(require("@babel/generator"), 1);
var import_types6 = __toESM(require_lib3(), 1);
var MixinRender = class {
  constructor(_mixinList, importGlobal, _options, _newAst, _filePath) {
    this.mixinList = [];
    this.filesList = [];
    this.codeList = [];
    this.nodeList = [];
    this.reactiveMap = /* @__PURE__ */ new Map();
    this.computeMap = /* @__PURE__ */ new Map();
    this.methodsMap = /* @__PURE__ */ new Map();
    this.refMap = /* @__PURE__ */ new Map();
    this.importMixin = /* @__PURE__ */ new Set();
    this.useAttribute = /* @__PURE__ */ new Map();
    this.filePath = "";
    this.mixinAdvance = (name) => {
      let data;
      if (this.computeMap.has(name)) {
        data = this.computeMap.get(name);
      }
      if (this.methodsMap.has(name)) {
        data = this.methodsMap.get(name);
      }
      if (this.reactiveMap.has(name)) {
        data = this.reactiveMap.get(name);
        name = data.name;
      }
      if (this.refMap.has(name)) {
        data = this.refMap.get(name);
        name = data.name;
      }
      if (data) {
        this.addUeAttribute({ name, mixinName: data.mixinName });
      }
    };
    this.getDeleteMixin = () => {
      const setArr = /* @__PURE__ */ new Set();
      this.filesList.forEach((res) => {
        setArr.add(res.name);
      });
      return setArr;
    };
    this.options = _options;
    this.newAst = _newAst;
    this.mixinList = _mixinList;
    this.filePath = _filePath;
    importGlobal.forEach((item) => {
      item.specifiers.forEach((specifier) => {
        const name = specifier.local.name;
        if (this.mixinList.includes(name)) {
          const sourceVal = item.source.value;
          const file = this.getFilePath(sourceVal);
          const indexFile = this.getFilePath(sourceVal + "/index");
          const fileStatus = import_fs_extra3.default.existsSync(file);
          const indexFileStatus = import_fs_extra3.default.existsSync(indexFile);
          if (fileStatus || indexFileStatus) {
            this.filesList.push({
              path: fileStatus ? file : indexFile,
              name
            });
          } else {
            console.log("\u8BE5mixin\u6587\u4EF6\u8DEF\u5F84\u627E\u4E0D\u5230----", file);
          }
        }
      });
    });
  }
  getFilePath(sourceVal) {
    const { alias } = this.options;
    const pathVal = sourceVal.split("/");
    const filePathVal = this.filePath.split("/");
    const aliasItem = pathVal[0];
    const aliasPath = alias[pathVal[0]];
    let fileVal = sourceVal;
    if (aliasPath) {
      fileVal = sourceVal.replace(aliasItem, aliasPath);
    } else {
      fileVal = import_path2.default.join(filePathVal.slice(0, filePathVal.length - 1).join("/"), sourceVal);
    }
    const file = fileVal.replace(".js", "") + ".js";
    return file;
  }
  async addMixinCode(filesList, nodeList) {
    const callback = async (item, key) => {
      const nodeItem = nodeList[key];
      const { methodsRender, computedRender, dataRender, vuexRender, initialization, importRender } = nodeItem;
      const { newAst } = await initialization();
      const methodsKey = methodsRender ? Array.from(methodsRender.methodsKey) : [];
      const computedKey = computedRender ? Array.from(computedRender.computedKey) : [];
      const reactiveKey = dataRender ? [dataRender.options.dataName] : [];
      const refKeys = importRender ? Array.from(importRender.refKey) : [];
      const mutationsExportNode = vuexRender ? Array.from(Array.from(vuexRender.mutationsExportNode)) : [];
      const hookValue = reactiveKey.concat(computedKey).concat(refKeys).concat(methodsKey).concat(mutationsExportNode);
      const mixinName = item.name;
      const mixinHookName = modifyCycleName(mixinName, "use");
      if (dataRender && dataRender.reactiveKey.size > 0) {
        dataRender.reactiveKey.forEach((key2) => this.reactiveMap.set(key2, { name: dataRender.options.dataName, mixinName }));
      }
      if (computedKey && computedKey.length > 0) {
        computedKey.forEach((key2) => this.computeMap.set(key2, { name: computedRender.options.dataName, mixinName }));
      }
      if (methodsKey && methodsKey.length > 0) {
        methodsKey.forEach((key2) => this.methodsMap.set(key2, { ame: methodsRender ? methodsRender.options.dataName : this.options.dataName.dataName, mixinName }));
      }
      if (refKeys && refKeys.length > 0) {
        refKeys.forEach((key2) => this.refMap.set(key2, { name: key2, mixinName }));
      }
      if (vuexRender && vuexRender.mutationsExportNode) {
        vuexRender.mutationsExportNode.forEach((item2) => {
          this.methodsMap.set(item2.name, { name: methodsRender ? methodsRender.options.dataName : this.options.dataName, mixinName });
        });
      }
      const importDeclaration = [];
      const methodBody = [];
      newAst.program.body.forEach((item2) => {
        if (import_types6.default.isImportDeclaration(item2)) {
          filterImport(item2.source.value) && importDeclaration.push(item2);
        } else {
          methodBody.push(item2);
        }
      });
      const exportDefaultDeclaration = import_types6.default.exportDefaultDeclaration(import_types6.default.identifier(mixinHookName));
      const returnStatement = createReturnStatement(hookValue);
      const blockStatement = import_types6.default.blockStatement([...methodBody, returnStatement]);
      const arrowFn = arrowFunctionExpression([], blockStatement);
      const variableFn = variableFunction(mixinHookName, arrowFn);
      const program = import_types6.default.program([...importDeclaration, variableFn, exportDefaultDeclaration]);
      const file = import_types6.default.file(program);
      nodeItem.newAst = file;
      nodeItem.newCode = await import_generator.default.default(file).code;
    };
    await Promise.all(filesList.map(callback));
  }
  async initMixin() {
    const fileCallback = async (item) => {
      const filePath = import_path2.default.resolve(item.path);
      const fileCode = import_fs_extra3.default.readFileSync(filePath, { encoding: "utf-8" });
      return { fileCode, name: item.name, filePath };
    };
    const scriptCallback = async (codeItem) => {
      const mixinOptions = { ...this.options, dataName: `${this.options.dataName}_${codeItem.name}` };
      const scriptCode = await scriptRender(codeItem.fileCode, mixinOptions, this.filePath);
      return { ...scriptCode, filePath: codeItem.filePath };
    };
    this.codeList = await Promise.all(this.filesList.map(fileCallback));
    this.nodeList = await Promise.all(this.codeList.map(scriptCallback));
    await this.addMixinCode(this.filesList, this.nodeList);
  }
  addUeAttribute(data) {
    const { name, mixinName } = data;
    if (!this.useAttribute.has(mixinName)) {
      this.useAttribute.set(mixinName, /* @__PURE__ */ new Set([name]));
    } else {
      const arr = this.useAttribute.get(mixinName);
      arr.add(name);
    }
  }
  updateImportName(importName, type = 1) {
    const body = this.newAst.program.body;
    for (let index = 0; index < body.length; index++) {
      const item = body[index];
      if (import_types6.default.isImportDeclaration(item) && item.specifiers.length === 1) {
        const importNode = item.specifiers[0];
        const local = importNode.local;
        if (local.name === importName) {
          if (type === 1) {
            local.name = modifyCycleName(importName, "use");
          } else if (type === 2) {
            delete body[index];
          }
          break;
        }
      }
    }
  }
  render() {
    const delMixinSet = this.getDeleteMixin();
    this.useAttribute.forEach((item, key) => {
      delMixinSet.delete(key);
      this.updateImportName(key, 1);
      this.importMixin.add(createFnVariable(Array.from(item), modifyCycleName(key, "use")));
    });
    delMixinSet.forEach((item) => {
      this.updateImportName(item, 2);
    });
    this.importMixin.forEach((item) => {
      this.newAst.program.body.push(item);
    });
  }
};
MixinRender.recordMixin = /* @__PURE__ */ new Map();

// src/vue-babel/template-script/ComponentsRender.ts
var import_parser2 = __toESM(require("@babel/parser"), 1);
var import_traverse3 = __toESM(require("@babel/traverse"), 1);
var import_fs_extra4 = __toESM(require("fs-extra"), 1);
var import_path3 = __toESM(require("path"), 1);
var { parse: parse2 } = import_parser2.default;
var ComponentsRender = class {
  constructor() {
    this.components = /* @__PURE__ */ new Map();
    this.exampleRef = /* @__PURE__ */ new Map();
  }
  init(objectExpression, importRenders, _filePath) {
    if (!objectExpression.properties)
      return;
    objectExpression.properties.map((item) => {
      const key = item.value.name;
      const value = importRenders.importDeclarationMap.get(key);
      if (key && value) {
        const data = this.searchComponentsFile(value, key, _filePath);
        if (data) {
          this.components.set(key, {
            src: data.src
          });
        }
      }
    });
  }
  searchComponentsFile(value, key, filePath) {
    filePath = filePath.replaceAll("\\", "/");
    if (!value)
      return;
    value = value.replaceAll("\\", "/");
    const valArr = value.split("/");
    const prefix = options.alias[valArr[0]];
    let src = value;
    const fileSuffix = src.split(".");
    const suffix = [".vue", ".js", ".ts"];
    if (value.indexOf("../") > -1 || value.indexOf("./") > -1) {
      const arr = filePath.split("/");
      src = import_path3.default.resolve(arr.slice(0, arr.length - 1).join("/"), value);
    }
    if (prefix) {
      src = import_path3.default.join(prefix, valArr.slice(1, valArr.length).join("/"));
    }
    if (fileSuffix.includes("vue")) {
      return {
        src
      };
    }
    src = adaptationFolder(src);
    let suffixType = "";
    let isFile = false;
    for (const key2 in suffix) {
      suffixType = suffix[key2];
      const newSrc = src + suffixType;
      if (import_fs_extra4.default.existsSync(newSrc)) {
        isFile = true;
        break;
      }
    }
    if (suffixType === ".vue" && isFile) {
      return {
        src: src + suffixType
      };
    }
    if (suffixType != ".vue" && isFile) {
      return this.loopLookPath(src + suffixType, key);
    }
    return false;
  }
  loopLookPath(filePath, key) {
    const fileContent = import_fs_extra4.default.readFileSync(filePath, "utf8");
    const ast = parse2(fileContent, {
      sourceType: "module",
      plugins: ["jsx"]
    });
    const importDeclarationMap = /* @__PURE__ */ new Map();
    let data = null;
    const _this = this;
    import_traverse3.default.default(ast, {
      ImportDeclaration(path6) {
        const node = path6.node;
        const value = node.source.value;
        node.specifiers.map((exportObj) => {
          const name = exportObj.local.name;
          importDeclarationMap.set(name, value);
        });
      },
      ExportDefaultDeclaration(path6) {
        const key2 = path6.node.declaration.name;
        const value = importDeclarationMap.get(key2);
        data = _this.searchComponentsFile(value, key2, filePath);
      },
      ExportNamedDeclaration(path6) {
        const specifiers = path6.node.specifiers;
        if (specifiers) {
          for (let index = 0; index < specifiers.length; index++) {
            const item = specifiers[index];
            const name = item.exported.name;
            if (name === key) {
              const value = importDeclarationMap.get(key);
              data = _this.searchComponentsFile(value, key, filePath);
              break;
            }
          }
        }
      }
    });
    return data;
  }
  addExampleRef(path6) {
    if (!path6.parentPath.node.property)
      return;
    const refName = path6.parentPath.node.property.name;
    const property = path6.parentPath.parentPath.node.property;
    if (property) {
      if (this.exampleRef.has(refName)) {
        const setArr = this.exampleRef.get(refName);
        setArr == null ? void 0 : setArr.add(property.name);
      } else {
        this.exampleRef.set(refName, /* @__PURE__ */ new Set([property.name]));
      }
    }
  }
};

// src/vue-babel/template-script/VuexRender.ts
var import_traverse5 = __toESM(require("@babel/traverse"), 1);
var import_types8 = __toESM(require_lib3(), 1);
var import_fs = __toESM(require("fs"), 1);

// src/vue-babel/template-Pinia/PiniaRender.ts
var import_fs_extra5 = __toESM(require("fs-extra"), 1);
var import_path4 = __toESM(require("path"), 1);

// src/vue-babel/template-Pinia/PiniaNode.ts
var import_parser3 = __toESM(require("@babel/parser"), 1);
var import_types7 = __toESM(require_lib3(), 1);
var import_traverse4 = __toESM(require("@babel/traverse"), 1);
var import_generator2 = __toESM(require("@babel/generator"), 1);
var { parse: parse3 } = import_parser3.default;
var PinnaNode = class {
  constructor(_fileCode, _filePath, _fileName, _pathPrefix, _options) {
    this.astNode = {};
    this.oldAstNode = {};
    this.importModules = /* @__PURE__ */ new Set();
    this.importGlobal = /* @__PURE__ */ new Set();
    this.additionalModule = /* @__PURE__ */ new Set();
    this.useModules = /* @__PURE__ */ new Map();
    this.stateMap = /* @__PURE__ */ new Map();
    this.gettersMap = /* @__PURE__ */ new Map();
    this.actionsMap = /* @__PURE__ */ new Map();
    this.mutationsMap = /* @__PURE__ */ new Map();
    this.fileCode = "";
    this.filePath = "";
    this.fileName = "";
    this.pathPrefix = "";
    this.fileCode = _fileCode;
    this.filePath = _filePath;
    this.fileName = _fileName;
    this.pathPrefix = _pathPrefix;
    this.options = _options;
    this.createAst();
  }
  addVariableDeclarator(name) {
    name = getPiniaVariable(name);
    const callExpression = import_types7.default.callExpression(
      import_types7.default.identifier(modifyCycleName(name, "use")),
      []
    );
    const declarations = import_types7.default.variableDeclarator(import_types7.default.identifier(name), callExpression);
    const variableDeclaration = import_types7.default.variableDeclaration("const", [declarations]);
    return variableDeclaration;
  }
  getParentObjectMethod(path6, name) {
    let newPath = path6;
    while (newPath && newPath.type != "ObjectMethod") {
      newPath = newPath.parentPath;
    }
    if (newPath) {
      const pathNode = newPath.node;
      const methodName = pathNode.key.name;
      const useModuleVal = this.useModules.get(methodName);
      const createHook = () => {
        this.importModules.add(name);
        const variableDeclaration = this.addVariableDeclarator(name);
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
  dealWithType(properties, nodeName) {
    properties.forEach((item) => {
      const name = item.key.name;
      if (item.type === "ObjectMethod" && item.params) {
        item.params.shift();
      }
      this[`${nodeName}Map`].set(name, item);
    });
  }
  createCallExpression(arg) {
    const newArg = JSON.parse(JSON.stringify(arg));
    const methodName = arg[0].value;
    const memberExpression = import_types7.default.memberExpression(
      import_types7.default.thisExpression(),
      import_types7.default.identifier(methodName)
    );
    return import_types7.default.callExpression(memberExpression, newArg.splice(1));
  }
  filterExport(ast) {
    const body = ast.program.body;
    if (body) {
      body.forEach((item) => {
        if (!import_types7.default.isExportNamedDeclaration(item)) {
          this.additionalModule.add(item);
        }
      });
    }
  }
  analysisCallExpression(path6) {
    const args = path6.node.arguments;
    const val = args[0].value;
    if (!val)
      return;
    const piniaPath = val.split("/");
    const key = piniaPath.length > 1 ? piniaPath[0] : "index";
    const keyVal = getPiniaVariable(key);
    if (piniaPath.length <= 1) {
      piniaPath.unshift(key);
    }
    if (keyVal != this.fileName) {
      this.importModules.add(key);
      this.getParentObjectMethod(path6, key);
      piniaPath[0] = getPiniaVariable(piniaPath[0]);
    } else {
      piniaPath[0] = "this";
    }
    const params = args.slice(1, args.length);
    const callExpression = createCallExpression(
      createMemberExpression(piniaPath.reverse()),
      params
    );
    path6.replaceWith(callExpression);
  }
  createAst() {
    const ast = parse3(this.fileCode, {
      sourceType: "module",
      plugins: ["jsx"]
    });
    this.filterExport(ast);
    const _this = this;
    import_traverse4.default.default(ast, {
      Identifier(path6) {
        const nodeName = path6.node.name;
        if (nodeName === "actions" /* actions */ || nodeName === "getters" /* getters */ || nodeName === "mutations" /* mutations */ || nodeName === "state" /* state */) {
          const parent = path6.parent;
          const value = parent.init || parent.value;
          if (parent.id && import_types7.default.isObjectPattern(parent.id)) {
            path6.replaceWith(import_types7.default.thisExpression());
            return;
          }
          if (value) {
            let properties = value.properties;
            if (nodeName === "state" /* state */ && value.body) {
              properties = value.body.properties;
            }
            if (properties)
              _this.dealWithType(properties, nodeName);
          }
        }
      },
      ThisExpression(path6) {
        const property = path6.parent.property;
        if (!property)
          return;
        const propertyName = property.name;
        if (propertyName && propertyName.charAt(0) === "$") {
          _this.importGlobal.add(propertyName);
          if (propertyName == "$axios") {
            property.name = "$fetch";
          }
          path6.parentPath.replaceWith(property);
        }
      },
      MemberExpression(path6) {
        const nodeName = path6.node.object.name;
        const property = path6.node.property;
        let newNode = path6.node;
        if (nodeName === "state" /* state */) {
          newNode.object = import_types7.default.thisExpression();
          path6.replaceWith(newNode);
        }
        if (nodeName === "rootState") {
          _this.getParentObjectMethod(path6, property.name);
          newNode = newNode.property;
          newNode.name = getPiniaVariable(newNode.name);
          path6.replaceWith(newNode);
        }
      },
      CallExpression(path6) {
        if (path6.node.callee.property) {
          const fnName = path6.node.callee.property.name;
          if (["commit", "dispatch"].includes(fnName)) {
            _this.analysisCallExpression(path6);
          }
        } else {
          const fnName = path6.node.callee.name;
          if (["commit", "dispatch"].includes(fnName)) {
            const size = path6.node.arguments[0].value.split("/").length;
            if (size > 1) {
              _this.analysisCallExpression(path6);
              return;
            }
            const callExpression = _this.createCallExpression(
              path6.node.arguments
            );
            path6.replaceWith(callExpression);
          }
        }
      }
    });
    this.oldAstNode = ast;
  }
  addActions(properties) {
    this.actionsMap.forEach((item) => {
      properties.push(item);
    });
    this.mutationsMap.forEach((item) => {
      properties.push(item);
    });
  }
  addState(properties) {
    this.stateMap.forEach((item) => {
      properties.push(item);
    });
  }
  addGetters(properties) {
    this.gettersMap.forEach((item) => {
      properties.push(item);
    });
  }
  additional(program) {
    program.body = Array.from(this.additionalModule).concat(program.body);
  }
  addImportPinia(program) {
    const defineStore = import_types7.default.identifier("defineStore");
    const importSpecifier = import_types7.default.importSpecifier(defineStore, defineStore);
    const stringLiteral = import_types7.default.stringLiteral("pinia");
    const importDeclaration = import_types7.default.importDeclaration(
      [importSpecifier],
      stringLiteral
    );
    program.body.unshift(importDeclaration);
  }
  addImportHooks(program) {
    this.importModules.forEach((item) => {
      const hookStore = import_types7.default.identifier(getPiniaName(item));
      const importSpecifier = import_types7.default.importSpecifier(hookStore, hookStore);
      const stringLiteral = import_types7.default.stringLiteral(
        `${this.options.piniaStore.aliasPrefix}/${item}`
      );
      const importDeclaration = import_types7.default.importDeclaration(
        [importSpecifier],
        stringLiteral
      );
      program.body.unshift(importDeclaration);
    });
  }
  async buildAst() {
    const state = this.stateMap.size > 0 ? "state: () => ({})," : "";
    const getters = this.gettersMap.size > 0 ? "getters: {}," : "";
    const actions = this.actionsMap.size > 0 || this.mutationsMap.size > 0 ? "actions: {}," : "";
    const piniaTemplate = `
    export const ${modifyCycleName(this.fileName, "use")} = defineStore('${this.fileName}', {
      ${state}
      ${getters}
      ${actions}
    })
    `;
    const ast = parse3(piniaTemplate, {
      sourceType: "module",
      plugins: ["jsx"]
    });
    this.additional(ast.program);
    this.addImportHooks(ast.program);
    this.addImportPinia(ast.program);
    const _this = this;
    import_traverse4.default.default(ast, {
      ObjectProperty(path6) {
        const node = path6.node;
        const nodeName = node.key.name;
        if (nodeName === "state" /* state */ && node.value.body) {
          const properties = node.value.body.properties;
          _this.addState(properties);
        }
        if (nodeName === "getters" /* getters */) {
          const properties = node.value.properties;
          _this.addGetters(properties);
        }
        if (nodeName === "actions" /* actions */) {
          const properties = node.value.properties;
          _this.addActions(properties);
        }
      }
    });
    this.astNode = ast;
  }
  async renderPinia() {
    const bodyCode = await import_generator2.default.default(this.astNode);
    return bodyCode.code;
  }
};
PinnaNode.cacheNode = /* @__PURE__ */ new Map();

// src/vue-babel/template-Pinia/PiniaRender.ts
var PiniaRender = class {
  constructor(_options, _fileNameList) {
    this.piniaNodeList = /* @__PURE__ */ new Set();
    this.pathList = /* @__PURE__ */ new Set();
    this.fileNameList = /* @__PURE__ */ new Map();
    this.options = _options || {};
    this.fileNameList = _fileNameList;
  }
  async initPinia() {
    const fileCallback = async (key) => {
      const piniaModuleItem2 = this.fileNameList.get(key);
      if (!PinnaNode.cacheNode.has(piniaModuleItem2 == null ? void 0 : piniaModuleItem2.importName)) {
        const filePath = import_path4.default.join(this.options.piniaStore.pathVal, piniaModuleItem2 == null ? void 0 : piniaModuleItem2.importUrl) + ".js";
        const status2 = import_fs_extra5.default.existsSync(filePath);
        if (status2) {
          const fileCode = await import_fs_extra5.default.readFileSync(import_path4.default.resolve(filePath), { encoding: "utf-8" });
          const fileName = piniaModuleItem2.importName.substr(piniaModuleItem2.importName.lastIndexOf("/") + 1) + "Store";
          const options2 = this.options;
          const piniaNode = new PinnaNode(fileCode, filePath, fileName, piniaModuleItem2.importName, options2);
          this.piniaNodeList.add(piniaNode);
          PinnaNode.cacheNode.set(piniaModuleItem2.importName, piniaNode);
          piniaNode.buildAst();
        } else {
          console.log("\u8BE5store\u6587\u4EF6\u8DEF\u5F84\u627E\u4E0D\u5230----", filePath);
        }
      }
    };
    await Promise.all(Array.from(this.fileNameList.keys()).map(fileCallback));
  }
};

// src/vue-babel/template-Pinia/index.ts
var piniaStart = async (options2, fileNameList) => {
  const piniaRender = new PiniaRender(options2, fileNameList);
  await piniaRender.initPinia();
  return piniaRender;
};

// src/vue-babel/template-script/VuexRender.ts
var VuexRender = class {
  constructor(_astNode, _options) {
    this.stateHookMap = /* @__PURE__ */ new Map();
    this.mutationsExportNode = /* @__PURE__ */ new Set();
    this.piniaModules = /* @__PURE__ */ new Map();
    this.computedModules = /* @__PURE__ */ new Set();
    this.methodsModules = /* @__PURE__ */ new Set();
    this.defaultStoreName = "index";
    this.astNode = _astNode;
    this.options = _options;
  }
  isFile(path6) {
    const filePath = `${this.options.piniaStore.pathVal}/${path6}.js`;
    return import_fs.default.existsSync(filePath);
  }
  createComputed(methName, methBody, storeName) {
    let fnBody;
    if (typeof methBody === "string") {
      const methBodyArr = methBody.split("/");
      methBodyArr[0] = getPiniaVariable(methBodyArr[0]);
      const memberExpression = createMemberExpression(methBodyArr.reverse());
      const returnStatement = import_types8.default.returnStatement(memberExpression);
      fnBody = import_types8.default.blockStatement([returnStatement]);
    }
    if (import_types8.default.isArrowFunctionExpression(methBody)) {
      let statement;
      if (methBody.body.body) {
        statement = methBody.body.body;
      } else {
        statement = import_types8.default.returnStatement(methBody.body);
      }
      replaceIdentifier(methBody, "state", getPiniaVariable(storeName));
      fnBody = import_types8.default.blockStatement(Array.isArray(statement) ? statement : [statement]);
    }
    if (import_types8.default.isStringLiteral(methBody)) {
      const name = getPiniaVariable(storeName);
      const memberExpression = createMemberExpression([name, methBody.value].reverse());
      const returnStatement = import_types8.default.returnStatement(memberExpression);
      fnBody = import_types8.default.blockStatement([returnStatement]);
    }
    const objectMethod = import_types8.default.objectMethod("method", import_types8.default.identifier(methName), [], fnBody);
    this.computedModules.add(objectMethod);
  }
  createMutations(methName, methBody) {
    const methBodyArr = methBody.split("/");
    methBodyArr[0] = getPiniaVariable(methBodyArr[0]);
    const memberExpression = createMemberExpression(methBodyArr.reverse());
    const spreadElement = import_types8.default.spreadElement(import_types8.default.identifier("args"));
    const callExpression = import_types8.default.callExpression(memberExpression, [spreadElement]);
    const returnStatement = import_types8.default.returnStatement(callExpression);
    const blockStatement = import_types8.default.blockStatement([returnStatement]);
    const restElement = import_types8.default.restElement(import_types8.default.identifier("args"));
    const objectMethod = import_types8.default.objectMethod("method", import_types8.default.identifier(methName), [restElement], blockStatement);
    this.methodsModules.add(objectMethod);
  }
  dealWithVuex(args, type) {
    const firstItem = args[0];
    const isArrayExpression = import_types8.default.isArrayExpression(firstItem);
    const isObjectExpression = import_types8.default.isObjectExpression(firstItem);
    if (isArrayExpression && args.length === 1) {
      firstItem.elements.forEach((item) => {
        const key = item.value;
        const status2 = this.isFile(key);
        const importName = status2 ? key : this.defaultStoreName;
        const storeName = getPiniaVariable(importName);
        this.piniaModules.set(importName, {
          importUrl: importName,
          importName
        });
        let data = {
          prefix: "",
          value: storeName
        };
        if (!status2) {
          data = {
            prefix: storeName,
            value: ""
          };
        }
        this.stateHookMap.set(key, data);
        this.mutationsExportNode.add({
          name: key,
          node: createMemberExpression([key, storeName])
        });
      });
    }
    if (isObjectExpression && args.length === 1) {
      firstItem.properties.forEach((v) => {
        const keyName = v.key.name;
        const value = v.value.value;
        if (!value)
          return;
        const valueArr = value.split("/");
        const status2 = this.isFile(getStoreUrl(valueArr));
        let aliasKey = this.matchingName(valueArr);
        const aliasVal = valueArr[valueArr.length - 1];
        let importUrl = getStoreUrl(valueArr);
        if (!status2) {
          importUrl = getStoreUrl([this.defaultStoreName]);
          aliasKey = this.defaultStoreName;
        }
        const storeName = getPiniaVariable(aliasKey);
        const methBody = [aliasKey, aliasVal].join("/");
        this.piniaModules.set(aliasKey, {
          importUrl,
          importName: aliasKey
        });
        if (aliasVal === keyName) {
          this.stateHookMap.set(aliasVal, {
            prefix: storeName,
            value: ""
          });
          this.mutationsExportNode.add({
            name: aliasVal,
            node: createMemberExpression([aliasVal, storeName])
          });
        } else {
          type === 1 ? this.createComputed(keyName, methBody) : this.createMutations(aliasKey, methBody);
        }
      });
    }
    if (args.length === 2 && import_types8.default.isObjectExpression(args[1])) {
      let key = args[0].value;
      const properties = args[1].properties;
      if (key.charAt(key.length - 1) === "/") {
        key = key.substr(0, key.length - 1);
      }
      const status2 = this.isFile(key);
      const name = status2 ? key : this.defaultStoreName;
      const importName = name.replaceAll("/", "");
      this.piniaModules.set(importName, {
        importUrl: name,
        importName
      });
      properties.forEach((item) => {
        const keyName = item.key.name;
        const value = item.value;
        const storeName = getPiniaVariable(importName);
        if (type === 1) {
          this.createComputed(keyName, value, importName);
        } else {
          const methBody = [importName, value.value].join("/");
          this.createMutations(keyName, methBody);
        }
        this.mutationsExportNode.add({
          name: keyName,
          node: createMemberExpression([keyName, storeName])
        });
      });
    }
    if (args.length === 2 && import_types8.default.isArrayExpression(args[1])) {
      let key = args[0].value;
      if (key.charAt(key.length - 1) === "/") {
        key = key.substr(0, key.length - 1);
      }
      const val = args[1].elements;
      val.forEach((item) => {
        const status2 = this.isFile(key);
        const importName = key.replaceAll("/", "");
        const storeName = getPiniaVariable(importName);
        this.piniaModules.set(importName, {
          importUrl: key,
          importName
        });
        let data = {
          prefix: storeName,
          value: ""
        };
        if (!status2) {
          data = {
            prefix: storeName,
            value: ""
          };
        }
        this.stateHookMap.set(item.value, data);
        this.mutationsExportNode.add({
          name: item.value,
          node: createMemberExpression([item.value, storeName])
        });
      });
    }
    if (!this.piniaModules.get("index")) {
      this.piniaModules.set("index", {
        importUrl: "index",
        importName: "index",
        isFilter: true
      });
    }
  }
  matchingName(array) {
    let str = "";
    const length = array.length;
    const count = length === 1 ? length : length - 1;
    for (let index = 0; index < count; index++) {
      const element = array[index];
      str += element;
    }
    return str;
  }
  propertiesForEach(properties, callback) {
    properties.forEach((item, index) => {
      if (import_types8.default.isSpreadElement(item)) {
        const argument = item.argument;
        const calleeName = argument.callee.name;
        callback(argument, calleeName);
      }
    });
  }
  analysisComputed(properties) {
    this.propertiesForEach(properties, (argument, calleeName) => {
      if (calleeName === "mapState" /* MapState */ || calleeName === "mapGetters" /* MapGetters */) {
        this.dealWithVuex(argument.arguments, 1);
      }
    });
  }
  analysisMethods(properties) {
    this.propertiesForEach(properties, (argument, calleeName) => {
      if (calleeName === "mapMutations" /* mapMutations */ || calleeName === "mapActions" /* mapActions */) {
        this.dealWithVuex(argument.arguments, 2);
      }
    });
  }
  analysisCallExpression(path6) {
    const args = path6.node.arguments;
    const val = args[0].value;
    const fnArr = [];
    if (!val)
      return;
    const piniaPath = val.split("/");
    const key = replaceCross(piniaPath.length > 1 ? this.matchingName(piniaPath) : this.defaultStoreName);
    this.piniaModules.set(key, {
      importUrl: piniaPath.length > 1 ? getStoreUrl(piniaPath) : this.defaultStoreName,
      importName: key
    });
    if (piniaPath.length <= 1) {
      piniaPath.unshift(key);
    }
    fnArr.push(getPiniaVariable(key));
    fnArr.push(piniaPath[piniaPath.length - 1]);
    const params = args.slice(1, args.length);
    const callExpression = createCallExpression(createMemberExpression(fnArr.reverse()), params);
    path6.replaceWith(callExpression);
  }
  createPiniaImport(importName, importUrl) {
    if (importUrl.charAt(0) === "/") {
      importUrl = importUrl.substring(1, importUrl.length);
    }
    const hookStore = import_types8.default.identifier(importName);
    const importSpecifier = import_types8.default.importSpecifier(hookStore, hookStore);
    const stringLiteral = import_types8.default.stringLiteral(`${this.options.piniaStore.aliasPrefix}/${importUrl}`);
    const importDeclaration = import_types8.default.importDeclaration([importSpecifier], stringLiteral);
    return importDeclaration;
  }
  createPiniaHook(name) {
    name = getPiniaVariable(name);
    const callExpression = import_types8.default.callExpression(import_types8.default.identifier(modifyCycleName(name, "use")), []);
    const declarations = import_types8.default.variableDeclarator(import_types8.default.identifier(name), callExpression);
    const variableDeclaration = import_types8.default.variableDeclaration("const", [declarations]);
    return variableDeclaration;
  }
  insertPiniaModules(program) {
    const body = program.body;
    const index = body.length - 1;
    const imports = [];
    const hooks = [];
    this.piniaModules.forEach((item) => {
      if (!item.isFilter) {
        const importName = getPiniaName(item.importName);
        const importDeclaration = this.createPiniaImport(importName, item.importUrl);
        const variableDeclaration = this.createPiniaHook(item.importName);
        imports.push(importDeclaration);
        hooks.push(variableDeclaration);
      }
    });
    imports.concat(hooks).forEach((item) => body.splice(index, 0, item));
  }
  addMethodStore(methodsNode) {
    if (methodsNode && methodsNode.node && this.methodsModules.size > 0) {
      const properties = methodsNode.node.value.properties;
      this.methodsModules.forEach((item) => {
        properties.splice(1, 0, item);
      });
    }
  }
  addComputedStore(gettersNode) {
    if (gettersNode && gettersNode.node && this.computedModules.size > 0) {
      const properties = gettersNode.node.value.properties;
      this.computedModules.forEach((item) => {
        properties.splice(1, 0, item);
      });
    }
  }
  loopJoiningPath(path6, filePath) {
    const parentPath = path6.parentPath;
    if (!import_types8.default.isMemberExpression(parentPath.node)) {
      return;
    }
    if (parentPath.node && parentPath.node.property) {
      filePath.push(parentPath.node.property.name);
      this.loopJoiningPath(parentPath, filePath);
    }
    return filePath;
  }
  checkPath(pathArr) {
    let filePath = "";
    if (pathArr.length === 0)
      return filePath;
    for (let index = 0; index < pathArr.length; index++) {
      const path6 = pathArr.slice(0, pathArr.length - index);
      const url = path6.join("/");
      const status2 = this.isFile(url);
      if (status2) {
        filePath = url;
        break;
      }
    }
    return filePath;
  }
  queryTailNode(path6, name) {
    const parentPath = path6.parentPath;
    if (!import_types8.default.isMemberExpression(parentPath.node)) {
      return;
    }
    if (parentPath.node.property && parentPath.node.property.name === name) {
      return parentPath;
    }
    const node = this.queryTailNode(path6.parentPath, name);
    return node;
  }
  async analysisAst() {
    const _this = this;
    let methodsNode;
    let gettersNode;
    import_traverse5.default.default(this.astNode, {
      ObjectProperty(path6) {
        const properties = path6.node.value.properties;
        const nodeName = path6.node.key.name;
        switch (nodeName) {
          case "computed" /* Computed */:
            gettersNode = path6;
            _this.analysisComputed(properties);
            break;
          case "methods" /* Methods */:
            methodsNode = path6;
            _this.analysisMethods(properties);
            break;
          default:
            break;
        }
      },
      CallExpression(path6) {
        if (path6.node.callee.property) {
          const fnName = path6.node.callee.property.name;
          if (["commit", "dispatch"].includes(fnName)) {
            _this.analysisCallExpression(path6);
          }
        }
      },
      Identifier(path6) {
        let property = path6.parent.property;
        let parentPath = path6.parentPath;
        if (path6.node.name === "$store") {
          property = path6.parentPath.parentPath.node.property;
          parentPath = path6.parentPath.parentPath;
        }
        if (["store", "$store"].includes(path6.node.name) && property && property.name === "state") {
          const filePath = [];
          _this.loopJoiningPath(parentPath, filePath);
          const fileUrl = _this.checkPath(filePath);
          const importName = fileUrl.replaceAll("/", "");
          _this.piniaModules.set(importName, {
            importUrl: fileUrl,
            importName
          });
          const urlArr = fileUrl.split("/");
          const node = _this.queryTailNode(parentPath, urlArr[urlArr.length - 1]);
          node && node.replaceWith(import_types8.default.identifier(getPiniaVariable(importName)));
        }
      }
    });
    this.addComputedStore(gettersNode);
    this.addMethodStore(methodsNode);
    this.insertPiniaModules(this.astNode.program);
    this.piniaRender = await piniaStart(this.options, this.piniaModules);
  }
};

// src/vue-babel/template-nuxt/index.ts
var import_types9 = __toESM(require_lib3(), 1);
var import_traverse6 = __toESM(require("@babel/traverse"), 1);
var NuxtRender = class {
  constructor(_ast, _options, _importRender) {
    this.options = {};
    this.pageMetaMap = /* @__PURE__ */ new Map();
    this.nuxtHookNode = /* @__PURE__ */ new Set();
    this.nuxtContext = /* @__PURE__ */ new Set(["req", "env", "params", "query", "error", "redirect", "res"]);
    this.astNode = _ast;
    this.options = _options;
    this.importRender = _importRender;
    this.init();
  }
  addProgramBody(statement) {
    const body = this.astNode.program.body;
    const index = body.length - 1;
    body.splice(index, 0, statement);
  }
  createDefaultValue(hookName, attributeName, paramsName) {
    const headers = createCallExpression(import_types9.default.identifier(hookName), []);
    const objectExpression = import_types9.default.objectExpression([import_types9.default.objectProperty(import_types9.default.identifier(attributeName), headers)]);
    return import_types9.default.assignmentPattern(import_types9.default.identifier(paramsName), objectExpression);
  }
  createContextNode(element, contextName) {
    if (contextName === "req") {
      if (!this.nuxtHookNode.has(contextName)) {
        element.value = this.createDefaultValue("useRequestHeaders", "headers", "req");
        this.nuxtHookNode.add(contextName);
      }
    }
  }
  updateAsyncData(objectMethod) {
    const file = import_types9.default.file(import_types9.default.program([import_types9.default.exportDefaultDeclaration(import_types9.default.objectExpression([objectMethod]))]));
    const _this = this;
    import_traverse6.default.default(file, {
      ObjectPattern(path6) {
        if (path6.parent.key && path6.parent.key.name === "asyncData") {
          path6.node.properties.forEach((element) => {
            if (!element.key) {
              return;
            }
            const paramsName = element.key.name;
            if (_this.nuxtContext.has(paramsName)) {
              _this.createContextNode(element, paramsName);
            }
          });
        }
      }
    });
  }
  init() {
    const exportDefaultDeclaration = this.astNode.program.body.filter((item) => import_types9.default.isExportDefaultDeclaration(item));
    if (exportDefaultDeclaration.length === 0)
      return;
    const properties = exportDefaultDeclaration[0].declaration.properties;
    if (!properties)
      return;
    for (let index = 0; index < properties.length; index++) {
      const element = properties[index];
      const name = element.key.name;
      if (import_types9.default.isObjectMethod(element) && name === "head") {
        this.renderHead(element.body);
      }
      if (import_types9.default.isObjectProperty(element) && name === "middleware") {
        this.pageMetaMap.set("middleware", element.value);
      }
      if (import_types9.default.isObjectMethod(element) && (name === "asyncData" || name === "fetch")) {
        this.updateAsyncData(element);
        this.renderAsyncData(element);
      }
    }
    this.renderPageMeta();
  }
  renderAsyncData(objectMethod) {
    const functionExpression = arrowFunctionExpression(objectMethod.params, objectMethod.body, objectMethod.async);
    const statement = createFnVariable("asyncData", "useAsyncData", [functionExpression], true);
    this.addProgramBody(statement);
  }
  renderPageMeta() {
    const objectExpression = [];
    if (this.pageMetaMap.size > 0) {
      this.pageMetaMap.forEach((value, key) => {
        objectExpression.push({
          name: key,
          node: value
        });
      });
      const statement = createRunFunction("definePageMeta", [createObjectExpression(objectExpression)]);
      this.addProgramBody(statement);
    }
  }
  renderHead(body) {
    const callExpressio = createCallExpression(arrowFunctionExpression([], body), []);
    const statement = createRunFunction("useHead", [callExpressio]);
    this.addProgramBody(statement);
  }
};

// src/vue-babel/template-script/index.ts
var { parse: parse4 } = import_parser4.default;
var scriptRender = async (code, options2, filePath) => {
  const newAst = parse4("", {
    sourceType: "module",
    plugins: ["jsx"]
  });
  let dataRender;
  let computedRender;
  let methodsRender;
  let propsRender;
  let watchRender;
  let mixinRender;
  let vuexRender;
  let nuxtRender;
  const componentsRender = new ComponentsRender();
  const importRender = ImportRender_default(newAst, options2);
  const lifeCycleRender = new LifeCycleAnalysis(options2, newAst, importRender);
  const ruleGlobal = ["$route", "$router", "$axios", "$el"];
  const loopProperty = (path6) => {
    if (!path6.node.property) {
      return path6.node.type;
    }
    return loopProperty(path6.context.parentPath);
  };
  const createSetupState = () => {
    return import_types10.default.identifier(options2.dataName);
  };
  const replaceNodeName = (property, name, newNode, path6) => {
    mixinRender && mixinRender.mixinAdvance(name);
    const computedReplace = () => {
      newNode.object = newNode.property;
      newNode.property = import_types10.default.identifier("value");
      return true;
    };
    const templateLiteral = () => {
      if (property.type === "TemplateLiteral") {
        newNode.object = import_types10.default.identifier(options2.dataName);
        return true;
      }
    };
    const mixinReactive = () => {
      if (mixinRender && mixinRender.reactiveMap.has(name)) {
        const data = mixinRender.reactiveMap.get(name);
        newNode.object = import_types10.default.identifier(data.name);
        return true;
      }
    };
    const mixinCompute = () => {
      if (mixinRender && mixinRender.computeMap.has(name)) {
        return computedReplace();
      }
    };
    const mixinRef = () => {
      const newName = getRefName(name);
      if (mixinRender && mixinRender.refMap.has(newName)) {
        newNode.property.name = newName;
        return computedReplace();
      }
    };
    const dataReactive = () => {
      if (dataRender && (dataRender == null ? void 0 : dataRender.hasReactiveKey(name))) {
        newNode.object = import_types10.default.identifier(options2.dataName);
        return true;
      }
    };
    const dataCompute = () => {
      if (computedRender && (computedRender == null ? void 0 : computedRender.hasComputedKey(name))) {
        return computedReplace();
      }
    };
    const vuexStore = () => {
      if (vuexRender && vuexRender.stateHookMap.has(name)) {
        const store = vuexRender.stateHookMap.get(name);
        const { prefix, value } = store;
        if (prefix) {
          newNode.object = import_types10.default.identifier(prefix);
        } else if (value) {
          newNode = newNode.property;
          newNode.name = value;
          newNode.loc.name = value;
        }
        return true;
      }
    };
    const dataProps = () => {
      if (name === "value") {
        property.name = "modelValue" /* NAME */;
      }
      if (propsRender && (propsRender == null ? void 0 : propsRender.hasPropsKey(property.name))) {
        newNode.object = import_types10.default.identifier("props");
        return true;
      }
    };
    const virtualKey = () => {
      if (newNode.computed) {
        newNode.object = import_types10.default.identifier(options2.dataName);
        return true;
      }
    };
    const end = () => {
      newNode = newNode.property;
      return true;
    };
    const callback = [templateLiteral, mixinReactive, mixinCompute, mixinRef, dataReactive, dataCompute, vuexStore, dataProps, virtualKey, end];
    for (let index = 0; index < callback.length; index++) {
      const element = callback[index];
      if (element()) {
        break;
      }
    }
    return newNode;
  };
  let ast = parse4(code, {
    sourceType: "module",
    plugins: ["jsx"]
  });
  const isExportIdentifier = () => {
    const body = ast.program.body;
    let keyName = "";
    let exportObj;
    for (let index = 0; index < body.length; index++) {
      const item = body[index];
      if (import_types10.default.isExportDefaultDeclaration(item)) {
        if (import_types10.default.isIdentifier(item.declaration)) {
          keyName = item.declaration.name;
          break;
        }
      }
    }
    import_traverse7.default.default(ast, {
      Identifier(path6) {
        if (path6.node.name === keyName && import_types10.default.isObjectExpression(path6.parent.init)) {
          exportObj = path6.parent.init;
        }
      }
    });
    if (exportObj) {
      const astArr = [];
      body.forEach((item) => {
        if (import_types10.default.isVariableDeclaration(item) && !import_types10.default.isExportDefaultDeclaration(item)) {
          let status2 = true;
          item.declarations.forEach((item2) => {
            if (item2.id.name == keyName) {
              status2 = false;
            }
          });
          if (status2) {
            astArr.push(item);
          }
        }
      });
      astArr.push(import_types10.default.exportDefaultDeclaration(exportObj));
      const file = import_types10.default.file(import_types10.default.program(astArr));
      ast = file;
    }
  };
  isExportIdentifier();
  vuexRender = new VuexRender(ast, options2);
  await vuexRender.analysisAst();
  import_traverse7.default.default(ast, {
    ImportDeclaration(path6) {
      importRender.addImportGlobal(path6.node);
    },
    ObjectProperty(path6) {
      const properties = path6.node.value.properties;
      const nodeName = path6.node.key.name;
      if ("mixins" /* Mixins */ === nodeName) {
        const elements = path6.node.value.elements.map((item) => item.name);
        mixinRender = new MixinRender(elements, importRender.importGlobal, options2, newAst, filePath);
      }
    }
  });
  mixinRender && await mixinRender.initMixin();
  nuxtRender = new NuxtRender(ast, options2, importRender);
  importRender.collectGlobalVariable(ast);
  import_traverse7.default.default(ast, {
    ObjectMethod(path6) {
      const nodeName = path6.node.key.name;
      if (nodeName === "data" /* Data */) {
        dataRender = new DataRender(path6.node.body.body, options2, newAst);
      } else if (LifeCycleAnalysis.isCycle(nodeName)) {
        lifeCycleRender.init(path6.node);
      }
    },
    ObjectProperty(path6) {
      const properties = path6.node.value.properties;
      const nodeName = path6.node.key.name;
      switch (nodeName) {
        case "computed" /* Computed */:
          computedRender = new ComputedRender(properties, options2, newAst);
          importRender.addVueApi("computed");
          break;
        case "methods" /* Methods */:
          methodsRender = new MethodsRender(properties, options2, newAst);
          break;
        case "props" /* Props */:
          propsRender = new PropsRender(path6.node.value, options2, newAst, ast);
          break;
        case "watch" /* Watch */:
          watchRender = new WatchRender(path6.node.value, { dataRender, vuexRender, computedRender, propsRender, mixinRender }, options2, newAst);
          break;
        case "components" /* Components */:
          componentsRender.init(path6.node.value, importRender, filePath);
        default:
          break;
      }
    },
    MemberExpression(path6) {
      if (path6.node.object.type === "ThisExpression" || path6.node.object.name === "_this") {
        const property = path6.node.property;
        const name = property.name;
        let newNode = path6.node;
        newNode = replaceNodeName(property, name, newNode, path6);
        if (name && name.indexOf("$") > -1) {
          if (name === "$refs") {
            importRender.addVueApi("ref");
            componentsRender.addExampleRef(path6);
            if (!import_types10.default.isMemberExpression(path6.parent))
              return;
            if (path6.parent.computed) {
              path6.parent.object = import_types10.default.memberExpression(createCallExpression(import_types10.default.identifier("getCurrentInstance"), []), import_types10.default.identifier("refs"));
              importRender.addVueApi("getCurrentInstance");
            } else {
              if (import_types10.default.isStringLiteral(path6.parent.property)) {
                path6.parent.object = import_types10.default.identifier(replaceCross(path6.parent.property.value));
              } else {
                path6.parent.object = path6.parent.property;
              }
              path6.parent.object.name = getRefName(path6.parent.object.name);
              path6.parent.property = import_types10.default.identifier("value");
            }
            if (mixinRender && mixinRender.refMap.has(path6.parent.object.name)) {
              return;
            }
            importRender.addRefKey(path6.parent.object.name);
            return;
          }
          if (name === "$router" || name === "$route") {
            newNode.name = name.replace("$", "");
            importRender.addRouter(newNode.name);
          }
          if (name === "$slots") {
            const name2 = "slots";
            const value = "useSlots";
            newNode.name = name2.replace("$", "");
            importRender.addVueApi(value);
            importRender.addHookMap(name2, value);
            if (import_types10.default.isMemberExpression(path6.parent) && path6.parent.property.name === "default") {
              path6.parentPath.replaceWith(newNode);
            }
            return;
          }
          if (name === "$el") {
            importRender.addVueApi("ref");
            const el = import_types10.default.memberExpression(import_types10.default.identifier("el_ref"), import_types10.default.identifier("value"));
            importRender.addHookMap(getCompoentEl(), "ref");
            path6.replaceWith(el);
            return;
          }
          if (name === "$axios") {
            newNode.name = "$fetch";
          }
          if (importRender.isVueApi(name)) {
            newNode.name = importRender.conversionApi(name);
            importRender.addApiKey(newNode.name, path6);
          } else if (!ruleGlobal.includes(name)) {
            importRender.addGlobal(name);
          }
        }
        path6.replaceWith(newNode);
      }
    },
    VariableDeclarator(path6) {
      const node = path6.node;
      if (import_types10.default.isThisExpression(node.init)) {
        node.init = createSetupState();
      }
    },
    CallExpression(path6) {
      path6.node.arguments.forEach((arg, key) => {
        if (import_types10.default.isThisExpression(arg)) {
          delete path6.node.arguments[0];
        }
      });
    }
  });
  const initialization = () => {
    [
      importRender,
      mixinRender,
      propsRender,
      dataRender,
      computedRender,
      methodsRender,
      watchRender,
      lifeCycleRender
    ].forEach((item) => {
      item && item.render();
    });
    return {
      newAst
    };
  };
  const render3 = async () => {
    const newCode = await import_generator3.default.default(newAst).code;
    return {
      newCode,
      newAst
    };
  };
  return {
    initialization,
    render: render3,
    newAst,
    importRender,
    vuexRender,
    dataRender,
    computedRender,
    methodsRender,
    lifeCycleRender,
    propsRender,
    watchRender,
    mixinRender,
    componentsRender
  };
};

// src/vue-babel/template-html/index.ts
var import_traverse8 = __toESM(require("@babel/traverse"), 1);
var import_parser5 = __toESM(require("@babel/parser"), 1);
var import_generator4 = __toESM(require("@babel/generator"), 1);
var import_types11 = __toESM(require_lib3(), 1);
var import_dom_serializer = require("dom-serializer");
var import_htmlparser2 = require("htmlparser2");
var { parse: parse5 } = import_parser5.default;
var adapterVariable = "let interpolation = ";
var templateRender = async (dom, scriptData, filePath, options2) => {
  const RenderCallbacks = [];
  const { dataRender, mixinRender, vuexRender, importRender, componentsRender } = scriptData;
  const addPrefixIdentifier = (path6, replaceData) => {
    const { prefix, value } = replaceData;
    if (prefix) {
      const identifierNode = path6.node;
      if (!import_types11.default.isIdentifier(identifierNode))
        return;
      const node = import_types11.default.memberExpression(import_types11.default.identifier(prefix), identifierNode);
      try {
        if (import_types11.default.isObjectProperty(path6.parent)) {
          path6.parent.value = node;
        } else {
          path6.replaceWith(node);
        }
      } catch (error) {
        console.log(filePath, path6.node.name);
      }
    } else {
      const node = import_types11.default.identifier(value);
      path6.replaceWith(node);
    }
  };
  const removeAdapterVal = (code) => {
    let newCode = code.replaceAll(adapterVariable, "");
    if (newCode.charAt(newCode.length - 1) == ";") {
      newCode = newCode.substring(0, newCode.length - 1);
    }
    return newCode;
  };
  const dealWithRoute = (path6) => {
    const node = path6.node;
    if (node.name === "$route" || node.name === "$router") {
      node.name = node.name.replace("$", "");
      importRender.addRouter(node.name);
    }
  };
  const loopInterpolation = (elem) => {
    const str = elem.data;
    const interpolationList = [];
    const pattern = /\{\{([\s\S]+?)\}\}/g;
    let strItem;
    while (strItem = pattern.exec(str)) {
      const ast = parse5(strItem[1], {
        plugins: ["jsx"]
      });
      const data = {
        oldValue: strItem[1]
      };
      import_traverse8.default.default(ast, {
        Identifier(path6) {
          if (!path6.parent.property || path6.key === "object" || path6.key === "property" && path6.parent.computed) {
            dealWithRoute(path6);
            const name = path6.node.name;
            mixinRender && mixinRender.mixinAdvance(name);
            if (mixinRender && mixinRender.reactiveMap.has(name)) {
              interpolationList.push({
                ...data,
                ast,
                path: path6,
                replaceData: { value: "", prefix: mixinRender.reactiveMap.get(name).name }
              });
            }
            if (dataRender && dataRender.hasReactiveKey(name)) {
              interpolationList.push({
                ...data,
                ast,
                path: path6,
                replaceData: { value: "", prefix: dataRender.options.dataName }
              });
            }
            if (vuexRender && vuexRender.stateHookMap.has(name)) {
              interpolationList.push({
                ...data,
                ast,
                path: path6,
                replaceData: vuexRender.stateHookMap.get(name)
              });
            }
          }
        }
      });
    }
    interpolationList.forEach((value) => {
      addPrefixIdentifier(value.path, value.replaceData);
    });
    RenderCallbacks.push(async () => {
      const callback = async (item) => {
        const value = await import_generator4.default.default(item.ast);
        const code = removeAdapterVal(value.code);
        elem.data = elem.data.replaceAll(item.oldValue, code);
      };
      await Promise.all(interpolationList.map(callback));
    });
  };
  const replaceAttribsVal = (attribs, key) => {
    let code = attribs[key].trim();
    if (!code)
      return;
    if (code.indexOf("$slots") > -1) {
      importRender.addVueApi("useSlots");
      importRender.addHookMap("slots", "useSlots");
      code = code.replace("$slots", "slots");
    }
    let ast = null;
    if (code.charAt(0) === "{" && code.charAt(code.length - 1) === "}") {
      code = `${adapterVariable}${code}`;
    }
    ast = parse5(code, {
      plugins: ["jsx"]
    });
    const nodeIdentifier = [];
    import_traverse8.default.default(ast, {
      Identifier(path6) {
        if (!path6.parent.property || path6.key === "object" || path6.key === "property" && path6.parent.computed) {
          dealWithRoute(path6);
          const name = path6.node.name;
          mixinRender && mixinRender.mixinAdvance(name);
          if (dataRender && dataRender.hasReactiveKey(name)) {
            nodeIdentifier.push({
              path: path6,
              replaceData: { value: "", prefix: dataRender.options.dataName }
            });
          }
          if (mixinRender && mixinRender.reactiveMap.has(name)) {
            nodeIdentifier.push({
              path: path6,
              replaceData: { value: "", prefix: mixinRender.reactiveMap.get(name).name }
            });
          }
          if (vuexRender && vuexRender.stateHookMap.has(name)) {
            nodeIdentifier.push({
              path: path6,
              replaceData: vuexRender.stateHookMap.get(name)
            });
          }
        }
      }
    });
    nodeIdentifier.forEach((pathItem) => {
      addPrefixIdentifier(pathItem.path, pathItem.replaceData);
    });
    RenderCallbacks.push(async () => {
      const attribsCode = await import_generator4.default.default(ast);
      attribs[key] = removeAdapterVal(attribsCode.code);
    });
  };
  const replaceInterpolation = (elem) => {
    if (elem.type === "text") {
      loopInterpolation(elem);
    }
  };
  const updateRefName = (attribs, key) => {
    if (key === "ref") {
      attribs[key] = getRefName(replaceCross(attribs[key]));
      mixinRender && mixinRender.mixinAdvance(attribs[key]);
    }
  };
  const updateKey = (elem) => {
    const attribs = elem.attribs;
    if (attribs && attribs[":key"]) {
      if (!attribs["v-for"]) {
        delete attribs[":key"];
      }
    }
  };
  const addForKey = (elem) => {
    const attribs = elem.attribs;
    if (attribs && attribs["v-for"]) {
      if (!attribs[":key"]) {
        const data = attribs["v-for"];
        const arr = data.substring(data.indexOf("(") + 1, data.indexOf(")")).split(",");
        if (arr.length === 2)
          elem.attribs[":Key"] = arr[1];
      }
    }
  };
  const getTemplateParent = (elem) => {
    if (elem.name != "template") {
      return elem;
    }
    return getTemplateParent(elem);
  };
  const findChildSlot = (elem, slotTemplate, lostName) => {
    if (!elem)
      return slotTemplate;
    for (let i = 0; i < elem.length; i++) {
      const childrenItem = elem[i];
      const itemAttribs = childrenItem.attribs || {};
      const itemSlotName = itemAttribs.slot || itemAttribs["v-slot"];
      if (itemSlotName === lostName) {
        childrenItem.attribs["collect-slot"] = "1";
        slotTemplate.add(childrenItem);
      }
    }
    return slotTemplate;
  };
  const findRepeatSlot = (elem) => {
    var _a2, _b2, _c2, _d2;
    const slotTemplate = /* @__PURE__ */ new Set();
    if (elem.attribs["collect-slot"]) {
      return slotTemplate;
    }
    const slotName = elem.attribs.slot || elem.attribs["v-slot"];
    if (elem.parent && ((_a2 = elem == null ? void 0 : elem.parent) == null ? void 0 : _a2.children)) {
      const children = (_b2 = elem == null ? void 0 : elem.parent) == null ? void 0 : _b2.children;
      for (let i = 0; i < children.length; i++) {
        const itemAttribs = children[i].attribs || {};
        const itemSlotName = itemAttribs.slot || itemAttribs["v-slot"];
        if (slotName === itemSlotName) {
          children[i].attribs["collect-slot"] = "1";
          slotTemplate.add(children[i]);
        }
      }
    }
    if (elem.parent && elem.parent.name === "template") {
      const children = (_d2 = (_c2 = elem == null ? void 0 : elem.parent) == null ? void 0 : _c2.parent) == null ? void 0 : _d2.children;
      for (let i = 0; i < children.length; i++) {
        const childrenItem = children[i];
        if (childrenItem.name === "template") {
          findChildSlot(childrenItem.children, slotTemplate, slotName);
        }
        const itemAttribs = childrenItem.attribs || {};
        const itemSlotName = itemAttribs.slot || itemAttribs["v-slot"];
        if (slotName === itemSlotName) {
          slotTemplate.add(children[i]);
        }
      }
    }
    return slotTemplate;
  };
  const updateSlot = (elem, slotArr) => {
    const attribs = elem.attribs;
    if (attribs && attribs["collect-slot"]) {
      return;
    }
    if (attribs && (attribs.slot || attribs["v-slot"])) {
      const slotList = findRepeatSlot(elem);
      if (slotList.size >= 2) {
        slotArr.push(slotList);
        return;
      }
    }
    if (attribs && (attribs.slot || attribs["v-slot"]) && elem.name != "template") {
      const slotName = attribs.slot || attribs["v-slot"];
      delete attribs.slot;
      delete attribs["v-slot"];
      delete attribs["v-else"];
      delete attribs["collect-slot"];
      const code = (0, import_dom_serializer.render)(elem, {
        encodeEntities: "utf8"
      });
      const newElement = (0, import_htmlparser2.parseDocument)(`
<template #${slotName}>${code}</template>
`);
      import_htmlparser2.DomUtils.replaceElement(elem, newElement);
    } else {
      elem.attribs && delete elem.attribs["collect-slot"];
    }
  };
  const restructuringSlot = (slotArr) => {
    if (slotArr.length === 0)
      return;
    slotArr.forEach((item) => {
      var _a2;
      const arr = Array.from(item);
      let code = "";
      const lastSlot = arr[arr.length - 1];
      const slotName = lastSlot.attribs.slot || lastSlot.attribs["v-slot"];
      arr.forEach((v) => {
        var _a3;
        delete v.attribs.slot;
        delete v.attribs["collect-slot"];
        import_htmlparser2.DomUtils.removeElement(v);
        if (((_a3 = v == null ? void 0 : v.parent) == null ? void 0 : _a3.name) === "template") {
          v.attribs = { ...v.parent.attribs, ...v.attribs };
        }
        code += (0, import_dom_serializer.render)(v, {
          encodeEntities: "utf8"
        });
      });
      const slotCOde = `<template #${slotName}>${code}</template>`;
      if (((_a2 = lastSlot == null ? void 0 : lastSlot.parent) == null ? void 0 : _a2.name) === "template") {
        import_htmlparser2.DomUtils.append(lastSlot.parent, (0, import_htmlparser2.parseDocument)(slotCOde));
      } else if (lastSlot.parent) {
        console.log("lastSlot.parent-----", lastSlot);
        import_htmlparser2.DomUtils.appendChild(lastSlot.parent, (0, import_htmlparser2.parseDocument)(slotCOde));
      }
    });
  };
  const replaceSlotLabel = (elem) => {
    const attribs = elem.attribs;
    if (attribs && (attribs.slot || attribs["v-slot"])) {
      const slotName = attribs.slot || attribs["v-slot"];
      delete attribs.slot;
      delete attribs["v-slot"];
      delete attribs["v-else"];
      delete attribs["collect-slot"];
      if (elem.name != "template") {
        const code = (0, import_dom_serializer.render)(elem, {
          encodeEntities: "utf8"
        });
        const newElement = (0, import_htmlparser2.parseDocument)(`
<template #${slotName}>${code}</template>
`);
        import_htmlparser2.DomUtils.replaceElement(elem, newElement);
      } else {
        attribs[`#${slotName}`] = "";
      }
    }
  };
  const attribsUpdate = (elem) => {
    if (!options2.labelAttribs)
      return;
    const labelData = options2.labelAttribs[elem.name];
    if (labelData) {
      const attribs = elem.attribs;
      Object.keys(attribs).map((key) => {
        if (labelData[key]) {
          const val = attribs[key];
          const id = labelData[key];
          attribs[id] = val;
          delete attribs[key];
        }
      });
    }
  };
  const dealWithAttribs = async (attribs) => {
    Object.keys(attribs).map((key) => {
      updateRefName(attribs, key);
      const firstChar = key.charAt(0);
      if (key.indexOf("v-") > -1 || firstChar === ":" || firstChar === "@")
        replaceAttribsVal(attribs, key);
    });
  };
  const setRootEl = (dom2) => {
    const elName = getCompoentEl();
    if (importRender.hookMap.has(elName)) {
      dom2.children.forEach((item) => {
        if (item.type != "text") {
          item.attribs.ref = elName;
        }
      });
    }
  };
  const componentsRefVal = (elem) => {
    var _a2;
    const componentsName = underlineToHump(elem.name);
    const refName = (_a2 = elem.attribs) == null ? void 0 : _a2.ref;
    const refval = componentsRender.exampleRef.get(refName);
    if (componentsName && componentsRender.components.has(componentsName) && refName && refval) {
      const value = componentsRender.components.get(componentsName);
      if (value.defineExpose) {
        refval.forEach((val) => {
          value.defineExpose.add(val);
        });
      } else {
        value.defineExpose = new Set(refval);
      }
    }
  };
  if (scriptData && dom) {
    setRootEl(dom);
    import_htmlparser2.DomUtils.filter((elem) => {
      updateKey(elem);
      addForKey(elem);
      attribsUpdate(elem);
      componentsRefVal(elem);
      const attribs = elem.attribs;
      attribs && dealWithAttribs(attribs);
      replaceInterpolation(elem);
    }, dom, true);
    await Promise.all(RenderCallbacks.map((callback) => callback()));
    const slotArr = [];
    import_htmlparser2.DomUtils.filter((elem) => {
      updateSlot(elem, slotArr);
    }, dom, true);
    restructuringSlot(slotArr);
    import_htmlparser2.DomUtils.filter((elem) => {
      replaceSlotLabel(elem);
    }, dom, true);
  }
};

// src/vue-babel/index.ts
var import_htmlparser22 = require("htmlparser2");
var import_dom_serializer2 = require("dom-serializer");
var decomposeTemp = (html) => {
  const script = html.lastIndexOf("<script>") > -1 ? html.substring(html.indexOf("<script>") + 8, html.lastIndexOf("<\/script>")) : "";
  return {
    script,
    newHtml: html.replace(script, " ")
  };
};
var updateAlias2 = (str) => {
  if (str.indexOf("@import") == -1)
    return str;
  let startIndex = 0;
  let endIndex = 0;
  for (let i = str.indexOf("@import"); i < str.length; i++) {
    if (str[i] == "'" || str[i] == '"') {
      if (!startIndex) {
        startIndex = i;
        continue;
      }
      if (!endIndex) {
        endIndex = i + 1;
        continue;
      }
      if (startIndex && endIndex) {
        break;
      }
    }
  }
  if (startIndex && endIndex) {
    const importCssUrl = str.substring(startIndex, endIndex);
    const newImportCssUrl = importCssUrl.replaceAll("../", "");
    const firstChar = newImportCssUrl.charAt(0);
    let url = `${firstChar}~/` + newImportCssUrl.substring(1, newImportCssUrl.length);
    if (str.substring(endIndex, endIndex + 1) != ";") {
      url = url + ";";
    }
    str = str.replace(importCssUrl, url);
    return str;
  }
};
var setImportEnd = (str) => {
  str = updateAlias2(str);
  str = str.replaceAll("stylus", "scss");
  str = str.replaceAll("styl", "scss");
  return str;
};
var vueRender = async (html, options2, filePath) => {
  const htmlData = decomposeTemp(html);
  const templateMap = /* @__PURE__ */ new Map();
  const scriptMap = /* @__PURE__ */ new Map();
  const handler = new import_htmlparser22.DomHandler();
  const parser6 = new import_htmlparser22.Parser(handler, {
    xmlMode: true
  });
  parser6.write(htmlData.newHtml);
  parser6.done();
  const dom = handler.dom;
  import_htmlparser22.DomUtils.findOne((elem) => {
    if (!scriptMap.has("script") && elem.name === "script" && !elem.attribs.type) {
      elem.attribs = { setup: "" };
      scriptMap.set("script", elem.children[0]);
    }
    if (!templateMap.has("template") && elem.name === "template") {
      templateMap.set("template", elem);
    }
    if (elem.name === "style") {
      const lang = elem.attribs.lang;
      if (lang && lang === "stylus") {
        elem.attribs.lang = "stylus";
        const content = elem.children[0].data;
        elem.children[0].data = options2.scssTurn ? setImportEnd(content) : content;
      }
    }
    return false;
  }, dom, true);
  const scriptNode = htmlData.script;
  const templateNode = templateMap.get("template");
  let scriptData = null;
  if (scriptNode) {
    scriptData = await scriptRender(scriptNode, options2, filePath);
    await templateRender(templateNode, scriptData, filePath, options2);
    scriptData.initialization();
  }
  const renderVueTemplate = async () => {
    if (scriptData) {
      const { newCode } = await scriptData.render();
      scriptMap.get("script").data = "\n" + newCode + "\n";
    }
    const contentHtml = (0, import_dom_serializer2.render)(handler.dom, {
      encodeEntities: "utf8"
    });
    return contentHtml;
  };
  return {
    renderVueTemplate,
    scriptData
  };
};
var vue_babel_default = {
  scriptRender,
  vueRender
};

// src/index.ts
var import_progress_bar = __toESM(require("@jyeontu/progress-bar"), 1);
var import_traverse9 = __toESM(require("@babel/traverse"), 1);
var { vueRender: vueRender2 } = vue_babel_default;
var isVue = (fileName) => {
  return /\.vue$/.test(fileName);
};
var fileMap = /* @__PURE__ */ new Map();
var piniaMap = /* @__PURE__ */ new Map();
var mixinMap = /* @__PURE__ */ new Map();
var exposeMap = /* @__PURE__ */ new Map();
var getAllDirByFilename = (dir, compileDir) => {
  const dirPath = import_path5.default.resolve(__dirname, dir);
  const files = import_fs2.default.readdirSync(dirPath);
  const resultArr = [];
  files.forEach((file) => {
    if (!compileDir || compileDir.includes(file)) {
      const filePath = dir + "/" + file;
      resultArr.push(filePath);
      if (import_fs2.default.statSync(filePath).isDirectory()) {
        resultArr.push(...getAllDirByFilename(filePath));
      }
    }
  });
  return resultArr;
};
var compatiblePath = (str) => {
  if (!str || typeof str !== "string")
    return str;
  return str.replaceAll("\\", "/");
};
var collectPinia = (piniaRender) => {
  if (!piniaRender || !piniaRender.piniaNodeList)
    return;
  piniaRender.piniaNodeList.forEach((item) => {
    if (piniaMap.has(item.filePath))
      return;
    const filePath = compatiblePath(item.filePath).replace(compatiblePath(options.entranceDir), options.output);
    piniaMap.set(filePath, { piniaNode: item });
  });
};
var collectMixins = (mixinRender) => {
  if (!mixinRender)
    return;
  mixinRender.nodeList.forEach((item) => {
    if (mixinMap.has(item.filePath))
      return;
    const filePath = compatiblePath(item.filePath).replace(compatiblePath(options.entranceDir), options.output);
    mixinMap.set(filePath, { mixinCode: item.newCode });
  });
};
var collectDefineExpose = (scriptData) => {
  const componentsRender = scriptData == null ? void 0 : scriptData.componentsRender;
  if (!componentsRender || !componentsRender.components)
    return;
  for (const iterator of componentsRender.components) {
    const key = iterator[0];
    const value = iterator[1];
    if (exposeMap.has(value.src)) {
      const exposeItem = exposeMap.get(value.src);
      if (value.defineExpose && value.defineExpose.size > 0) {
        value.defineExpose.forEach((v) => exposeItem.defineExpose.add(v));
      }
    } else {
      if (value.defineExpose && value.defineExpose.size > 0) {
        exposeMap.set(value.src, {
          parent: scriptData,
          defineExpose: new Set(value.defineExpose)
        });
      }
    }
  }
};
var defineExposeFilterType = (scriptData, exposeItem) => {
  const { mixinRender, computedRender, dataRender } = scriptData;
  const exposeType = /* @__PURE__ */ new Map();
  exposeItem.forEach((item) => {
    if (mixinRender && mixinRender.reactiveMap.has(item)) {
      const data = mixinRender.reactiveMap.get(item);
      exposeType.set(item, { name: data.name, isMixinReactive: 1 });
    } else if (mixinRender && mixinRender.computeMap.has(item)) {
      exposeType.set(item, { name: item, isComputed: 1 });
    } else if (dataRender && (dataRender == null ? void 0 : dataRender.hasReactiveKey(item))) {
      exposeType.set(item, { name: dataRender.options.dataName, isReactive: 1 });
    } else if (computedRender && (computedRender == null ? void 0 : computedRender.hasComputedKey(item))) {
      exposeType.set(item, { name: item, isComputed: 1 });
    } else {
      exposeType.set(item, { name: item, isMethods: 1 });
    }
  });
  return exposeType;
};
var updateParentTemplate = (parent, exposeType) => {
  const { newAst, componentsRender } = parent;
  try {
    import_traverse9.default.default(newAst, {
      Identifier(path6) {
        const name = path6.node.name;
        if (componentsRender && name && name.indexOf("_ref") > -1) {
          const node = path6.parentPath.parentPath.node;
          if (node && node.property) {
            const exposeItem = exposeType.get(node.property.name);
            if (exposeItem) {
              if (exposeItem.isComputed) {
                const object = import_types12.default.memberExpression(import_types12.default.cloneNode(node.object), import_types12.default.cloneNode(node.property));
                node.object = object;
                node.property.name = "value";
              }
              if (exposeItem.isReactive) {
                const object = import_types12.default.memberExpression(import_types12.default.cloneNode(node.object.object), import_types12.default.cloneNode(node.object.property));
                node.object.object = object;
                node.object.property.name = exposeItem.name;
              }
              if (exposeItem.isMixinReactive) {
                const object = import_types12.default.memberExpression(import_types12.default.cloneNode(node.object.object), import_types12.default.cloneNode(node.object.property));
                node.object.object = object;
                node.object.property.name = exposeItem.name;
              }
            }
          }
        }
      }
    });
  } catch (error) {
    console.log("-----updateParentTemplate", error);
  }
};
var createDefineExpose = () => {
  for (const key of exposeMap.keys()) {
    const filePath = key.replace(options.entranceDir.replaceAll("\\", "/"), options.output.replaceAll("\\", "/"));
    if (fileMap.has(filePath)) {
      const scriptData = fileMap.get(filePath).scriptData;
      const { newAst } = scriptData;
      const exposeItem = exposeMap.get(key);
      const { defineExpose, parent } = exposeItem;
      const exposeType = defineExposeFilterType(scriptData, defineExpose);
      updateParentTemplate(parent, exposeType);
      const exportArr = [];
      exposeType.forEach((value, key2) => {
        exportArr.push(value.name);
      });
      newAst.program.body.push(createCallExpression(import_types12.default.identifier("defineExpose"), [createObjectExpression(exportArr)]));
    }
  }
};
var createPinia = () => {
  piniaMap.forEach(async (item, key) => {
    const piniaCode = await item.piniaNode.renderPinia();
    import_fs_extra6.default.outputFileSync(key, piniaCode);
  });
};
var createMixins = () => {
  mixinMap.forEach((item, key) => {
    import_fs_extra6.default.outputFileSync(key, item.mixinCode);
  });
};
var createFile = () => {
  const callBack = async (v) => {
    const key = v[0];
    const item = v[1];
    const contentHtml = await item.renderVueTemplate();
    import_fs_extra6.default.outputFileSync(key, contentHtml);
  };
  return Promise.all(Array.from(fileMap).map(callBack));
};
var getProgressBar = (duration) => {
  const config = {
    duration,
    current: 0,
    showNumber: true,
    tip: {
      0: "\u5F00\u59CB\u8F6C\u6362",
      50: "\u8F6C\u6362\u4E00\u534A\u5566\uFF0C\u4E0D\u8981\u7740\u6025\u2026\u2026",
      75: "\u9A6C\u4E0A\u5C31\u8F6C\u6362\u5B8C\u4E86\u2026\u2026",
      100: "\u8F6C\u6362\u5B8C\u6210\uFF0C\u6587\u4EF6\u5DF2\u751F\u6210"
    },
    color: "green"
  };
  return new import_progress_bar.default(config);
};
var init = async () => {
  const fileArr = getAllDirByFilename(options.rootPath, options.compileDir).filter((item) => isVue(item));
  const progressBar = getProgressBar(fileArr.length);
  let index = 0;
  const callback = async (filePath) => {
    var _a2;
    const code = await (0, import_promises.readFile)(filePath, { encoding: "utf-8" });
    const { renderVueTemplate, scriptData } = await vueRender2(code, options, filePath);
    let fileSrc = filePath.replace(options.entranceDir, options.output);
    fileSrc = fileSrc.replaceAll("\\", "/");
    fileMap.set(fileSrc, {
      renderVueTemplate,
      scriptData
    });
    collectDefineExpose(scriptData);
    collectPinia((_a2 = scriptData == null ? void 0 : scriptData.vuexRender) == null ? void 0 : _a2.piniaRender);
    collectMixins(scriptData == null ? void 0 : scriptData.mixinRender);
    progressBar.run(index++);
  };
  Promise.all(fileArr.map(callback)).then(async (res) => {
    createDefineExpose();
    await createFile(progressBar);
    createPinia(progressBar);
    createMixins(progressBar);
  });
};
var src_default = init;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
