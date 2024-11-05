export default {
  printWidth: 100, // 每行代码长度
  tabWidth: 2, // 每个缩进的空格数
  useTabs: false, // 使用空格而不是tab缩进
  semi: true, // 句末使用分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 对象的key仅在必要时用引号
  jsxSingleQuote: false, // jsx中使用双引号
  trailingComma: 'es5', // 多行使用拖尾逗号
  bracketSpacing: true, // 对象字面量的大括号间使用空格
  bracketSameLine: false, // 将>放在最后一行的末尾，而不是单独放一行
  arrowParens: 'always', // 箭头函数，只有一个参数的时候，也需要括号
  rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
  rangeEnd: Infinity,
  parser: undefined, // 格式化的解析器，默认是babylon
  requirePragma: false, // 不需要写文件开头的 @prettier
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  proseWrap: 'preserve', // 使用默认的折行标准
  htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行
  vueIndentScriptAndStyle: false, // vue文件中的script和style内不用缩进
  endOfLine: 'lf', // 换行符使用 lf
  embeddedLanguageFormatting: 'auto', // 格式化嵌入的内容
  singleAttributePerLine: false, // HTML、Vue和JSX中的属性不强制每行只显示一个
  plugins: [], // 需要的插件列表
  overrides: [ // 针对特定文件的配置
    {
      files: '*.md',
      options: {
        tabWidth: 2,
        proseWrap: 'always',
      },
    },
  ],
};
