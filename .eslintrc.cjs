module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', 
  env: {
    node: true,//;
    es6: true
  },
  parserOptions: {
    sourceType: 'module' 
  },
  extends: [ 
    'eslint-config-standard',
    'plugin:@typescript-eslint/recommended',
  ],

  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": 'off',//;
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-unused-vars":"off",//;,//
    "eqeqeq":"off"
  }
}
