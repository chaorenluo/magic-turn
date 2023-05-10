import path from 'path'
import fse from 'fs-extra'

type Config = {
  rootPath:string,
  entranceDir:string,
  dataName?:string,
  piniaStore:{
    aliasPrefix?:string,
    pathVal?:string
  },
  output?:string,
  compileDir?:Array<string>,
  scssTurn?:boolean,
  alias:{
    [key: string]: string;
  },
  labelAttribs?:{
    [key in string]:any
  },
  fileExtension:Array<string>
}

const labelAttribs = {
  'van-action-sheet': {
    'v-model': 'v-model:show'
  },
  'van-dialog': {
    'v-model': 'v-model:show'
  },
  'van-share-sheet': {
    'v-model': 'v-model:show'
  },
  'van-circle': {
    'v-model': 'v-model:current-rate'
  },
  'van-list': {
    'v-model': 'v-model:loading'
  },
  'van-popover': {
    'v-model': 'v-model:show'
  },
  'van-tabs': {
    'v-model': 'v-model:active'
  },
  'van-tree-select': {
    ':active-id.sync': 'v-model:active-id',
    ':main-active-index.sync': 'v-model:main-active-index',
    ':active-id': 'v-model:active-id',
    ':main-active-index': 'v-model:main-active-index'
  }
}

const updateAlias = (value: any) => {
  Object.keys(value).forEach(key => {
    const src = value[key]
    if (src.indexOf('./') > -1 || src.indexOf('../') > -1) {
      value[key] = path.join(rootPath, value[key])
    }
  })
  return value
}

const rootPath = process.cwd()
const configUrl = path.join(rootPath, 'magic.config.json')
const status = fse.existsSync(configUrl)
const options:Config = {
  dataName: 'stateData',
  rootPath,
  alias: {
    '~': rootPath,
    '@': rootPath
  },
  piniaStore: {
    aliasPrefix: '~/store',
    pathVal: path.join(rootPath, './store')
  },
  // eslint-disable-next-line no-useless-escape
  output: path.join(rootPath, '..\/newVue\/'),
  entranceDir: rootPath,
  compileDir: ['components', 'pages', 'layouts'],
  scssTurn: false,
  labelAttribs,
  fileExtension: ['.vue', '.js', '.ts']
}

if (status) {
  const config:Config = JSON.parse(fse.readFileSync(configUrl) as any) as Config
  config.output && (options.output = path.join(rootPath, config.output))
  config.compileDir && (options.compileDir = config.compileDir)
  config.dataName && (options.dataName = config.dataName)
  if (config.piniaStore) {
    config.piniaStore?.aliasPrefix && (options.piniaStore.aliasPrefix = config.piniaStore?.aliasPrefix)
    config.piniaStore?.pathVal && (options.piniaStore.pathVal = path.join(rootPath, config.piniaStore?.pathVal))
    config.scssTurn && (options.scssTurn = config.scssTurn)
    config?.alias && (options.alias = { ...options.alias, ...updateAlias(config?.alias) })
    config.labelAttribs && (options.labelAttribs = { ...options.labelAttribs, ...config.labelAttribs })
  }
}

export { options, Config }
