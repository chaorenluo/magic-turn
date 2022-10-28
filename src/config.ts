import path from 'path'

export const options = {
  dataName: 'state',
  isMixin: false,
  mixinAliasKey: "_MIX_",
  mixinAliasVal: '/Users/ljm/gitroot/hk8591/mobi/mixin/' ,  //path.join(__dirname, '../mixin'),
  piniaAliasKey: '@store',
  piniaAliasVal:   '/Users/ljm/gitroot/hk8591/mobi/store/',   //path.join(__dirname, '../store'),
  output:         path.join(__dirname, '../newVue/'),
  entranceDir:'/Users/ljm/gitroot/hk8591/mobi/',
  compileDir:['components','pages']
}

