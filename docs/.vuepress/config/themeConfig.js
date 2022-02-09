const nav = require('./themeConfig/nav.js');

module.exports = {
  // 主题配置
  nav,
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/photo_nobg.png', // 导航栏logo
  repo: 'JS-banana/vuepress', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
  docsDir: 'docs', // 编辑的文件夹
  editLinks: true, // 启用编辑
  editLinkText: '编辑',

  // 以下配置是Vdoing主题改动和新增的配置
  // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
  // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
  // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
  // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

  bodyBgImg: 'https://cdn.jsdelivr.net/gh/JS-banana/images/vuepress/bg-black-8.jpg',
  // [
  // 'https://cdn.jsdelivr.net/gh/JS-banana/images/vuepress/bg-black-1.jpg',
  // 'https://cdn.jsdelivr.net/gh/JS-banana/images/vuepress/bg-black-2.jpg',
  // 'https://cdn.jsdelivr.net/gh/JS-banana/images/vuepress/bg-black-3.jpg',
  // 'https://cdn.jsdelivr.net/gh/JS-banana/images/vuepress/bg-black-4.jpg',
  // 'https://cdn.jsdelivr.net/gh/JS-banana/images/vuepress/bg-black-5.jpg',
  // 'https://cdn.jsdelivr.net/gh/JS-banana/images/vuepress/bg-black-6.jpg',
  // 'https://cdn.jsdelivr.net/gh/JS-banana/images/vuepress/bg-black-7.jpg',
  // 'https://cdn.jsdelivr.net/gh/JS-banana/images/vuepress/bg-black-8.jpg',
  // 'https://cdn.jsdelivr.net/gh/JS-banana/images/vuepress/bg-black-9.jpg',
  // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
  bodyBgImgOpacity: 1, // body背景图透明度，选值 0 ~ 1.0, 默认0.5

  // titleBadge: false, // 文章标题前的图标是否显示，默认true
  // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
  //   '图标地址1',
  //   '图标地址2'
  // ],
  // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

  // updateBar: { // 最近更新栏
  //   showToArticle: true, // 显示到文章页底部，默认true
  //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
  // },
  // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true

  sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

  author: {
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    name: 'sunss', // 必需
    link: 'https://github.com/JS-banana', // 可选的
  },
  blogger: {
    // 博主信息，显示在首页侧边栏
    avatar: 'https://cdn.jsdelivr.net/gh/JS-banana/images/vuepress/photo.jpg',
    // avatar: '/img/photo.jpg',
    name: '前端小帅',
    slogan: '学而不思则罔，思而不学则殆',
  },
  // friends: [
  //   { name: '小帅の生活', link: 'http://me.ssscode.com/' },
  //   { name: '刘小旗的技术人生', link: 'http://www.echo1024.com/' },
  // ],
  social: {
    // 社交图标，显示于博主信息栏和页脚栏
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: 'icon-youjian',
        title: '发邮件',
        link: 'mailto:213018@163.com',
      },
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/JS-banana',
      },
      {
        iconClass: 'icon-juejin',
        title: '掘金',
        link: 'https://juejin.cn/user/1204720476890477',
      },
    ],
  },
  footer: {
    // 页脚信息
    copyright: 'sunss',
    createYear: '2020.08', // 博客创建年份
    copyrightInfo: '<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2022002957号-1</a>', // 博客版权信息，支持a标签
  },
};
