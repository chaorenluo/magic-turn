import path from 'path';
import fs from 'fs';
export const modifyCycleName = (str: string, prefix = '',) => {
  return prefix+str.charAt(0).toUpperCase()+str.substring(1)
}

export const addSuffix = (str: string, suffix: string) => {
  return str + suffix
}

export const getAllDirByFilename = (dir:string,filename: string)=>{
  let dirPath = path.resolve(__dirname, dir);
  let files = fs.readdirSync(dirPath)
  let resultArr: string[] = [];

  files.forEach(file => {
    let filePath = dir + '/' + file;
    if (file === filename) {
      return resultArr.push(filePath);
    }
    if (fs.statSync(filePath).isDirectory()) {
      resultArr.push(...getAllDirByFilename(filePath,filename));
    }
  })
  return resultArr
}

export enum OptionsApi {
  Data = 'data',
  Computed = 'computed',
  Methods = 'methods',
  Props = 'props',
  Watch = 'watch',
  Mixins = 'mixins'
}

export enum VuexFn {
  MapState = 'mapState',
  MapGetters = 'mapGetters',
  mapMutations = 'mapMutations'
}