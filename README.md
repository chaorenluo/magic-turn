# MagiCode
代码转换器 可以用于把nuxt2的代码转换为nuxt3的兼容代码。

### 安装
npm i magic-turn --save-dev

### 运行
magicTurn

### 配置
在项目根目录创建 magic.config.json 文件

```javascipt 
{
  "dataName": "stateData", // 把vue2的data里面的响应式变量转化为vue3的reactive后的变量名如 stateData = reactive()
  "piniaStore":{//vuex转换为pinia的配置
    "aliasPrefix":"~/store",// 转换为pinia后导入到组件的路径别名
    "pathVal":"./store" // store目录的路径
  },
  "alias":{ //nuxt里面配置的路径别名 用于查找导入的原文件路径
    "_MIX_":"./mixin" 
  },
  "output":"../new_www", //转换好的输出路径
  "compileDir":["components","pages","layouts"] , //需要转换的文件夹
  "labelAttribs":{ //用于修改组件上的attribs
	 'van-action-sheet': {
   	 'v-model':'v-model:show'
	  },
	  'van-dialog': {
		'v-model':'v-model:show'
	  },
	}
}

```

### 贡献指南

修改代码请阅读[赞助指南](./CONTRIBUTING.md)。