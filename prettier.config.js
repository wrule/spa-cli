export default {
  // 在语句末尾添加分号
  semi: true,
  // 使用单引号代替双引号
  singleQuote: true,
  // 在对象或数组的最后一个元素后面添加逗号
  trailingComma: 'all',
  // 每行最大字符宽度
  printWidth: 100,
  // 指定每个缩进级别的空格数
  tabWidth: 2,
  // 使用空格而不是制表符进行缩进
  useTabs: false,
  // 在对象字面量的括号之间添加空格
  bracketSpacing: true,
  // jsx标签的'>'单独放一行
  bracketSameLine: false,
  // 箭头函数只有一个参数时添加括号
  arrowParens: 'always',
  // 文件顶部插入特殊注释标记，指定该文件不被格式化
  requirePragma: false,
  // 文件顶部插入@format标记
  insertPragma: false,
  // Markdown文本的换行方式
  proseWrap: 'preserve',
  // HTML文件中空格的处理方式
  htmlWhitespaceSensitivity: 'css',
  // Vue文件中script和style标签内的代码缩进
  vueIndentScriptAndStyle: false,
  // 行尾换行符使用lf
  endOfLine: 'lf',
  // 导入语句的排序方式
  importOrder: [
    '^react',
    '^@core/(.*)$',
    '^@server/(.*)$',
    '^@ui/(.*)$',
    '^[./]',
  ],
  // 导入语句之间是否添加空行
  importOrderSeparation: true,
  // 是否移除导入语句中未使用的导入
  removeUnusedImports: true,
  // 对HTML属性进行换行的方式
  singleAttributePerLine: true,
  // 在JSX中使用双引号而不是单引号
  jsxSingleQuote: false,
  // 对象属性是否使用引号
  quoteProps: 'as-needed',
  // 在文件末尾保留一个换行符
  endOfLine: 'lf',
  // 嵌套块的缩进样式
  embeddedLanguageFormatting: 'auto',
};
