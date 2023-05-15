# Magic-turn

`magic-turn` 是一个代码转换器，可以将 Nuxt <span style="color:red">2</span> 的代码转换成与 Nuxt <span style="color:red">3</span> 兼容的代码。

### 安装

```bash
npm install magic-turn --save-dev 
```

### 使用方法
```bash
magicTurn
```

### 配置

在项目根目录下创建 magic.config.json 文件。

```json
{
  "dataName": "stateData",
  "piniaStore": {
    "aliasPrefix": "~/store",
    "pathVal": "./store"
  },
  "alias": {
    "_MIX_": "./mixin" 
  },
  "output": "../new_www",
  "compileDir": ["components", "pages", "layouts"],
  "labelAttribs": {
    "van-action-sheet": {
      "v-model": "v-model:show"
    },
    "van-dialog": {
      "v-model": "v-model:show"
    }
  }
}

```

### 贡献指南


修改代码请阅读[赞助指南](./CONTRIBUTING.md)。

