import path from 'path'

export const options = {
  dataName: 'state',
  alias: {
    "~": "/Users/ljm/gitroot/8591/touch/",
    "@": "/Users/ljm/gitroot/8591/touch/",
  },
  piniaStore: {
    aliasPrefix: '~/store',
    pathVal:'/Users/ljm/gitroot/8591/touch/store/'
  },
  output:   path.join(__dirname, '../newVue/'),
  entranceDir:'/Users/ljm/gitroot/8591/touch/',
  compileDir:['components','pages']
}

