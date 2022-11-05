import t from '@babel/types';
import traverse from "@babel/traverse";
import {createRunFunction,createCallExpression,arrowFunctionExpression,createObjectExpression,createFnVariable} from '../template-script/utils'

export default class NuxtRender{
    astNode:t.File;
    options = {};
    pageMetaMap = new Map();

    constructor(_ast:t.File,_options:any){
        this.astNode = _ast;
        this.options = _options;
        this.init()
    }

    addProgramBody(statement:t.ExpressionStatement | t.VariableDeclaration){
        const body =this.astNode.program.body;
        let index = body.length-1;
        body.splice(index,0,statement)
    }

    init(){
        let exportDefaultDeclaration =  this.astNode.program.body.filter(item=>t.isExportDefaultDeclaration(item))
        const properties = exportDefaultDeclaration[0].declaration.properties;
        for (let index = 0; index < properties.length; index++) {
            const element = properties[index];
            const name = element.key.name;
            if(t.isObjectMethod(element) && name === 'head'){
                this.renderHead(element.body)
            }
            if(t.isObjectProperty(element) && name === 'middleware'){
                this.pageMetaMap.set('middleware',element.value)
            }
            if(t.isObjectMethod(element) && name === 'asyncData'){
                this.renderAsyncData(element)
            }
            
        }
        this.renderPageMeta()
    }

    renderAsyncData(objectMethod:t.ObjectMethod){
        const key = t.stringLiteral('ljm');
        const functionExpression = arrowFunctionExpression(objectMethod.params,objectMethod.body,objectMethod.async);
        const statement1 = createFnVariable('asyncData','useAsyncData',[key,functionExpression])
        this.addProgramBody(statement1)
    }

    renderPageMeta(){
        let objectExpression:Array<any> = [];
        this.pageMetaMap.forEach((value,key)=>{
            objectExpression.push({
                name:key,
                node:value
            })
        })
        const statement =  createRunFunction('definePageMeta',[createObjectExpression(objectExpression)])
        this.addProgramBody(statement)
    }

    renderHead(body:t.BlockStatement){
        const callExpressio = createCallExpression(arrowFunctionExpression([],body),[])
        const statement = createRunFunction('useHead',[callExpressio])
        this.addProgramBody(statement)
    }
} 