const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');
const matter = require('gray-matter'); // FrontMatter解析器 https://github.com/jonschlinkert/gray-matter
const readFileList = require('./modules/readFileList');

const DATA_FORMATE = 'YYYY-MM-DD HH:mm:ss';

main();

/**
 * 主体函数
 */
function main() {
  const files = readFileList(); // 读取所有md文件数据
  const matterFiles = files.map(file => matter(fs.readFileSync(file.filePath, 'utf8')));

  // 过滤掉非文章内容
  const list = matterFiles
    .map(n => ({ ...n.data, date: dayjs(n.date).format(DATA_FORMATE) }))
    .filter(m => {
      if (m.date && m.permalink.indexOf('/pages/') > -1) {
        // 过滤 article 字段
        if (!m.article || (typeof m.article === 'boolean' && m.article)) {
          return m;
        }
      }
    });

  const sortList = sortPostsByDate(list);

  console.log(sortList);
  toXml(sortList);
}

// 生成 xml
function toXml(posts) {
  const feed = `
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>小帅の技术博客</title>
    <link href="https://ssscode.com/atom.xml" rel="self"/>
    <link href="https://ssscode.com/"/>
    <updated>${dayjs().format(DATA_FORMATE)}</updated>
    <id>https://ssscode.com/</id>
    <author>
      <name>JS-banana</name>
      <email>sss213018@163.com</email>
    </author>
    ${posts
      .map(item => {
        return `
        <entry>
          <title>${item.title}</title>
          <link href="https://ssscode.com${item.permalink}" />
          <id>https://ssscode.com${item.permalink}</id>
          <published>${item.date}</published>
          <update>${item.date}</update>
        </entry>`;
      })
      .join('\n')}
  </feed>
  `;

  fs.writeFile(path.resolve(process.cwd(), './atom.xml'), feed, function(err) {
    if (err) console.log(err);
    console.log('文件写入成功！');
  });
}

// 按时间排序
function sortPostsByDate(posts) {
  posts.sort((prev, next) => {
    return compareDate(prev, next);
  });
  return posts;
}

// 比对时间
function compareDate(a, b) {
  return getTimeNum(b) - getTimeNum(a);
}

// 获取时间的时间戳
function getTimeNum(post) {
  let dateStr = post.date || post.lastUpdated;
  let date = new Date(dateStr);
  if (date == 'Invalid Date') {
    // 修复new Date()在Safari下出现Invalid Date的问题
    date = new Date(dateStr.replace(/-/g, '/'));
  }
  return date.getTime();
}
