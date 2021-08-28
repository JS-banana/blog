/**
 * 站点地图生成器
 */
const SitemapGenerator = require('sitemap-generator');

// create generator
const generator = SitemapGenerator('https://ssscode.com', {
  stripQuerystring: false,
  ignore: url => {
    // 过滤？路径
    return /\/\?.*/g.test(url);
  },
});

// register event listeners
generator.on('done', () => {
  // sitemaps created
});

// start the crawler
generator.start();
