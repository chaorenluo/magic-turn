import path from 'path'

export const options = {
  dataName: 'state',
  isMixin: false,
  mixinAliasKey: "~",
  mixinAliasVal: path.join(__dirname, '../mixin'),
  piniaAliasKey: '@store',
  piniaAliasVal: path.join(__dirname, '../store'),
}

