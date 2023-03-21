import t, { isForOfStatement } from '@babel/types';
import parser from "@babel/parser";
import traverse from "@babel/traverse";
import ImportRender from './ImportRender'
import {GetRenderType,adaptationFolder,checkSysPath} from './utils';
import fse from 'fs-extra';
import path from 'path';
import { options } from '../../config';

const { parse } = parser;

type ExampleValue = {
    src:string,
    defineExpose?:Set<string>
}



export default class ComponentsRender {

    components:Map<string,ExampleValue> = new Map()
    exampleRef:Map<string,Set<string>> = new Map()

  init(objectExpression: t.ObjectExpression, importRenders: GetRenderType<typeof ImportRender>, _filePath: string) {
      if(!objectExpression.properties)return
        objectExpression.properties.map(item=>{
           let key =  item.value.name
           let value = importRenders.importDeclarationMap.get((key as unknown) as string);  
           if(key && value){
            // 能在模板里找到导入组件的情况下，我们要检查导入的是否是vue文件如果不是则要向上寻找最终导出的vue文件地址
            let data =  this.searchComponentsFile(value,key,_filePath)
             if (data) {
                this.components.set(key,{
                    src:data.src
                })
            }
           }
        })
        // 检查是否有全局注册的组件
        
    }

    searchComponentsFile(value:string,key:string,filePath:string){
      filePath = filePath.replaceAll('\\', '/');
      if(!value) return
        value = value.replaceAll('\\','/');
        let valArr = value.split('/');
        let prefix = options.alias[valArr[0]]
        let src =  value;
        let fileSuffix = src.split('.')
        let suffix = ['.vue','.js','.ts'];
        if(value.indexOf('../')>-1 || value.indexOf('./')>-1 ){
           //相对路径的情况
           let arr = filePath.split('/')
           src = path.resolve(arr.slice(0,arr.length-1).join('/'),value)
        }
        if(prefix){
          src = path.join(prefix, valArr.slice(1, valArr.length).join('/'));
        }
        if(fileSuffix.includes('vue')){
         return{
            src
         }
        }
        src = adaptationFolder(src);
        let suffixType = '';
        let isFile = false;
        for (const key in suffix) {
         suffixType = suffix[key]
         let newSrc = src+suffixType
         if(fse.existsSync(newSrc)){
           isFile = true;
             break;
         }else{
          
         }
        }
        //后缀名等于.vue    
        if(suffixType === '.vue' && isFile){
         return {
            src:src+suffixType
         }
        }
         //不是真正导出的vue文件地址继续向上寻找    
        if(suffixType != '.vue' && isFile){
          return this.loopLookPath(src+suffixType,key);
        }
        return false;
    }

    loopLookPath(filePath:string,key:string){
       let fileContent = fse.readFileSync(filePath, 'utf8');
       let ast = parse(fileContent, {
         sourceType: 'module',
         plugins:['jsx']
      })
      let importDeclarationMap = new Map();
      let data = null;
      const _this = this;
      traverse.default(ast,{
        ImportDeclaration(path) {
            let node = path.node;
            let value = node.source.value;
            node.specifiers.map((exportObj:t.ImportSpecifier)=>{
              const name = exportObj.local.name;
              importDeclarationMap.set(name,value)
            });
        },
        ExportDefaultDeclaration(path){
           let key = path.node.declaration.name;
           let value = importDeclarationMap.get(key)
            data = _this.searchComponentsFile(value,key,filePath)
        },
        ExportNamedDeclaration(path){
           let specifiers =  path.node.specifiers;
           if(specifiers){
            for (let index = 0; index < specifiers.length; index++) {
                const item = specifiers[index];
                let name = item.exported.name
                if(name === key){
                    let value = importDeclarationMap.get(key)
                    data = _this.searchComponentsFile(value,key,filePath)
                   break
                }
            }
           }
        },  

      })
      return data
    }

  addExampleRef(path: any) {
    if (!path.parentPath.node.property) return;
        let refName = path.parentPath.node.property.name;
        let property = path.parentPath.parentPath.node.property
        if(property){
          if(this.exampleRef.has(refName)){
            let setArr = this.exampleRef.get(refName);
            setArr?.add(property.name)
          }else{
            this.exampleRef.set(refName,new Set([property.name]))
          }
        }
    }

}