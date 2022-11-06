import path from 'path'

export const options = {
  dataName: 'state',
  alias: {
    "~": "D:\/gitroot\/8591\/touch\/",
    "@": "D:\/gitroot\/8591\/touch\/",
  },
  piniaStore: {
    aliasPrefix: '~/store',
    pathVal:'D:\/gitroot\/8591\/touch\/store\/'
  },
  output:   path.join(__dirname, '..\/newVue\/'),
  entranceDir:'D:\/gitroot\/8591\/touch\/',
  compileDir:['components','pages']
}

