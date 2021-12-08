const plugins = require('./config/plugins.js');
const head = require('./config/head.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  title: '小帅の技术博客',
  description:
    'web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,css3,html5,Node,git,github等技术文章。', // 描述,以 <meta> 标签渲染到页面html中
  base: '/vuepress/', // '/<github仓库名>/'， 默认'/'
  head,
  markdown: {
    lineNumbers: true, // 代码行号
  },

  // theme: "vdoing", // 使用依赖包主题
  theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  themeConfig,
  plugins,
  // configureWebpack: {
  //   //webpack别名 如![Image from alias](~@alias/image.png)
  //   resolve: {
  //     alias: {
  //       '@alias': 'path/to/some/dir'
  //     }
  //   }
  // }
};
