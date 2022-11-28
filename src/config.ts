// import path from 'path'

// export const options = {
//   dataName: 'state',
//   alias: {
//     "~": "D:\/gitroot\/8591\/touch\/",
//     "@": "D:\/gitroot\/8591\/touch\/",
//   },
//   piniaStore: {
//     aliasPrefix: '~/store',
//     pathVal:'D:\/gitroot\/8591\/touch\/store\/'
//   },
//   output:   path.join(__dirname, '..\/newVue\/'),
//   entranceDir:'D:\/gitroot\/8591\/touch\/',
//   compileDir:['components','pages']
// }

import path from 'path'

const labelAttribs  = {
  'van-action-sheet': {
    'v-model':'v-model:show'
  },
  'van-dialog': {
    'v-model':'v-model:show'
  },
  'van-share-sheet': {
    'v-model':'v-model:show'
  },
  'van-circle': {
    'v-model':'v-model:current-rate'
  },
  'van-list': {
    'v-model':'v-model:loading'
  },
  'van-popover': {
    'v-model':'v-model:show'
  },
  'van-tabs': {
    'v-model':'v-model:active'
  },
  'van-tree-select': {
    ':active-id.sync': 'v-model:active-id',
    ':main-active-index.sync':'v-model:main-active-index'
  }
}

export const options = {
  dataName: 'stateData',
  alias: {
    "~": "/Users/ljm/gitroot/hk8591/mobi/",
    "@": "/Users/ljm/gitroot/hk8591/mobi/",
    "_MIX_":"/Users/ljm/gitroot/hk8591/mobi/mixin",
  },
  piniaStore: {
    aliasPrefix: '~/store',
    pathVal:'/Users/ljm/gitroot/hk8591/mobi/store/'
  },
  output:   path.join(__dirname, '../newVue/'),
  entranceDir:'/Users/ljm/gitroot/hk8591/mobi/',
  compileDir: ['components', 'pages', 'layouts'],
  labelAttribs
}


