import path from 'path'
import fse from 'fs-extra'


type Config = {
  dataName?:string,
  piniaStore?:{
    aliasPrefix?:string,
    pathVal?:string
  },
  output?:string,
  compileDir?:Array<string>,
  scssTurn?:boolean
}

let rootPath = process.cwd()
let configUrl = path.join(rootPath,'magic.config.json');
let status = fse.existsSync(configUrl)
const options = {
  dataName: 'stateData',
  rootPath,
  alias: {
    "~": rootPath,
    "@": rootPath,
  },
  piniaStore: {
    aliasPrefix: '~/store',
    pathVal: path.join(rootPath,'./store')
  },
  output:   path.join(rootPath, '..\/newVue\/'),
  entranceDir:rootPath,
  compileDir:['components','pages','layouts'],
  scssTurn:false
}

if(status){
 let config:Config = JSON.parse(fse.readFileSync(configUrl)) as Config;
 config.output && (options.output =  path.join(rootPath, config.output))
 config.compileDir && (options.compileDir = config.compileDir)
 config.dataName && (options.dataName = config.dataName)
 if(config.piniaStore){
  config.piniaStore?.aliasPrefix && (options.piniaStore.aliasPrefix =  config.piniaStore?.aliasPrefix );
  config.piniaStore?.pathVal && (options.piniaStore.pathVal = path.join(rootPath, config.piniaStore?.pathVal));
  config.scssTurn && (options.scssTurn = config.scssTurn);
 }
} 

export {options};


