export const modifyCycleName = (str:string,prefix='',) => {
  return prefix+str.charAt(0).toUpperCase()+str.substring(1)
}