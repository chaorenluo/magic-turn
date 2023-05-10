import t from '@babel/types'
import parser from '@babel/parser'
import traverse from '@babel/traverse'
import ImportRender from './ImportRender'
import { GetRenderType, adaptationFolder, checkSysPath } from './utils'
import fse from 'fs-extra'
import path from 'path'
import { options } from '../../config'

const { parse } = parser

type ExampleValue = {
    src:string,
    defineExpose?:Set<string>
}

export default class ComponentsRender {
    components:Map<string, ExampleValue> = new Map()
    exampleRef:Map<string, Set<string>> = new Map()

    init (objectExpression: t.ObjectExpression, importRenders: GetRenderType<typeof ImportRender>, _filePath: string) {
      if (!objectExpression.properties) return
      // eslint-disable-next-line array-callback-return
      objectExpression.properties.map(item => {
        const key = (item as any).value.name
        const value = importRenders.importDeclarationMap.get((key as unknown) as string)
        if (key && value) {
          // 能在模板里找到导入组件的情况下，我们要检查导入的是否是vue文件如果不是则要向上寻找最终导出的vue文件地址
          const data = this.searchComponentsFile(value, key, _filePath)
          if (data) {
            this.components.set(key, {
              src: data.src
            })
          }
        }
      })
      // 检查是否有全局注册的组件
    }

    searchComponentsFile (value:string, key:string, filePath:string) {
      filePath = filePath.replaceAll('\\', '/')
      if (!value) return
      value = value.replaceAll('\\', '/')
      const valArr = value.split('/')
      const prefix = options.alias[valArr[0]]
      let src = value
      const fileSuffix = src.split('.')
      const suffix = ['.vue', '.js', '.ts']
      if (value.indexOf('../') > -1 || value.indexOf('./') > -1) {
        // 相对路径的情况
        const arr = filePath.split('/')
        src = path.resolve(arr.slice(0, arr.length - 1).join('/'), value)
      }
      if (prefix) {
        src = path.join(prefix, valArr.slice(1, valArr.length).join('/'))
      }
      if (fileSuffix.includes('vue')) {
        return {
          src
        }
      }
      src = adaptationFolder(src)
      let suffixType = ''
      let isFile = false
      for (const key in suffix) {
        suffixType = suffix[key]
        const newSrc = src + suffixType
        if (fse.existsSync(newSrc)) {
          isFile = true
          break
        }
      }
      // 后缀名等于.vue
      if (suffixType === '.vue' && isFile) {
        return {
          src: src + suffixType
        }
      }
      // 不是真正导出的vue文件地址继续向上寻找
      if (suffixType != '.vue' && isFile) {
        return this.loopLookPath(src + suffixType, key)
      }
      return false
    }

    loopLookPath (filePath:string, key:string) {
      const fileContent = fse.readFileSync(filePath, 'utf8')
      const ast = parse(fileContent, {
        sourceType: 'module',
        plugins: ['jsx']
      })
      const importDeclarationMap = new Map()
      let data = null
      const _this = this
      traverse.default(ast, {
        ImportDeclaration (path:any) {
          const node = path.node
          const value = node.source.value
          // eslint-disable-next-line array-callback-return
          node.specifiers.map((exportObj:t.ImportSpecifier) => {
            const name = exportObj.local.name
            importDeclarationMap.set(name, value)
          })
        },
        ExportDefaultDeclaration (path:any) {
          const key = path.node.declaration.name
          const value = importDeclarationMap.get(key)
          data = _this.searchComponentsFile(value, key, filePath)
        },
        ExportNamedDeclaration (path:any) {
          const specifiers = path.node.specifiers
          if (specifiers) {
            for (let index = 0; index < specifiers.length; index++) {
              const item = specifiers[index]
              const name = item.exported.name
              if (name === key) {
                const value = importDeclarationMap.get(key)
                data = _this.searchComponentsFile(value, key, filePath)
                break
              }
            }
          }
        }

      })
      return data
    }

    addExampleRef (path: any) {
      if (!path.parentPath.node.property) return
      const refName = path.parentPath.node.property.name
      const property = path.parentPath.parentPath.node.property
      if (property) {
        if (this.exampleRef.has(refName)) {
          const setArr = this.exampleRef.get(refName)
          setArr?.add(property.name)
        } else {
          this.exampleRef.set(refName, new Set([property.name]))
        }
      }
    }
}
