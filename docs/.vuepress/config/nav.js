module.exports = [
  {text: '首页', link: '/'},
  {
    text: '前端',
    link: '/web/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: '前端文章', items: [
        {text: 'JavaScript', link: '/pages/8143cc480faf9a11/'}, // 注意link结尾有斜杠和没有斜杠的区别
        {text: 'Vue', link: '/pages/802a1ca6f7b71c59/'},
      ]},
      {text: '学习笔记', items:[
        {text: '《JavaScript教程》笔记', link: '/note/javascript/'},
        {text: '《JavaScript高级程序设计》笔记', link: '/note/js/'},
        {text: '《ES6 教程》笔记', link: '/note/es6/'},
        {text: '《Vue》笔记', link: '/note/vue/'},
        {text: '《TypeScript 从零实现 axios》', link: '/note/typescript-axios/'},
        {text: '小程序笔记', link: '/note/wx-miniprogram/'},
      ]}
    ]
  },
  {
    text: '页面', 
    link: '/ui/',
    items: [
      {text: 'HTML', link: '/pages/8309a5b876fc95e3/'},
      {text: 'CSS', link: '/pages/0a83b083bdf257cb/'},
    ]
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      {text: '技术文档', link: '/pages/9a7ee40fc232253e/'},
      {text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/'},
      {text: 'Nodejs', link: '/pages/117708e0af7f0bd9/'},
      {text: '博客搭建', link: '/pages/41f87d890d0a02af/'},
    ]
  },
  {
    text: '更多', 
    link: '/more/',
    items: [
      {text: '学习', link: '/pages/f2a556/'},
      {text: '面试', link: '/pages/aea6571b7a8bae86/'},
      {text: '心情杂货', link: '/pages/2d615df9a36a98ed/'},
      {text: '友情链接', link: '/friends/'},
    ]
  },
  {text: '关于', link: '/about/'},
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      {text: '网站', link: '/pages/beb6c0bd8a66cea6/'},
      {text: '资源', link: '/pages/eee83a9211a70f9d/'},
      {text: 'Vue资源', link: '/pages/12df8ace52d493f6/'},
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  }
]