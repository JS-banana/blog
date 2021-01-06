module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content:
        '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,css3,html5,Node,git,github,markdown',
    },
  ],
  ['meta', { name: 'baidu-site-verification', content: 'cewstn11l3' }], // 百度统计的站点拥有者验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  // ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'}], // 移动端阻止页面缩放
  // 网站关联Google AdSense 与 html格式广告支持
  //   [
  //     'script',
  //     {
  //       'data-ad-client': 'ca-pub-7828333725993554',
  //       async: 'async',
  //       src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  //     },
  //   ],
];
