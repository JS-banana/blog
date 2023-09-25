/**
 * Feed、RSS、ATOM、sitemap 生成器
 * https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap?hl=zh-cn
 */
const fs = require("fs")
const path = require("path")
const dayjs = require("dayjs")
const matter = require("gray-matter") // FrontMatter解析器 https://github.com/jonschlinkert/gray-matter
const readFileList = require("./modules/readFileList")

const DATA_FORMATE = "YYYY-MM-DD HH:mm:ss"
// const BASE_URL = "https://ssscode.com"
const BASE_URL = "https://js-banana.github.io/blog"

main()

/**
 * 主体函数
 * 处理数据源
 */
function main() {
  const files = readFileList() // 读取所有md文件数据
  const matterFiles = files.map((file) => {
    const matterData = matter(fs.readFileSync(file.filePath, "utf8"))
    // 获取文件创建日期
    const stat = fs.statSync(file.filePath)
    matterData.date = dateFormat(getBirthtime(stat))
    return matterData
  })
  // 过滤掉非文章内容
  const list = matterFiles
    .map((n) => ({
      ...n.data,
      date: dayjs(n.data.date).subtract(8, "hour").format(DATA_FORMATE), // 处理UTC时间
      lastUpdated: dayjs(n.date).format(DATA_FORMATE),
    }))
    .filter((m) => {
      if (m.date && m.permalink.indexOf("/pages/") > -1) {
        const keys = Object.keys(m)
        if (!keys.includes("article") || (keys.includes("article") && m.article)) {
          return m
        }
      }
    })

  const sortList = sortPostsByDate(list)

  // console.log(sortList, sortList.length);
  try {
    atomGenerator(sortList)
    siteMapGenerator(sortList)
  } catch (error) {
    console.log("feed-generator：发生错误！！！")
    console.log(error)
  }
}

// 生成 atom.xml
// 注：xml语法 & 符号需要替换为 &amp;
function atomGenerator(posts) {
  const feed = `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>小帅の技术博客</title>
    <link href="${BASE_URL}/atom.xml" rel="self"/>
    <link href="${BASE_URL}/"/>
    <updated>${dayjs().format(DATA_FORMATE)}</updated>
    <id>${BASE_URL}/</id>
    <author>
      <name>JS-banana</name>
      <email>sss213018@163.com</email>
    </author>
    ${posts
      .map((item) => {
        return `<entry>
          <title>${item.title.replace(/(&)/g, "&amp;")}</title>
          <link href="${BASE_URL}${item.permalink}" />
          <id>${BASE_URL}${item.permalink}</id>
          <published>${item.date.slice(0, 10)}</published>
          <update>${item.date}</update>
        </entry>`
      })
      .join("")}
  </feed>`

  fs.writeFile(path.resolve(process.cwd(), "./atom.xml"), feed, function (err) {
    if (err) return console.log(err)
    console.log("atom.xml 写入成功！")
  })
}

// 生成站点地图
function siteMapGenerator(posts) {
  const siteMap = `<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${posts
      .map((item) => {
        return `<url>
          <loc>${BASE_URL}${item.permalink}</loc>
          <lastmod>${item.date.slice(0, 10)}</lastmod>
        </url>`
      })
      .join("")}
    </urlset>`

  fs.writeFile(path.resolve(process.cwd(), "./sitemap.xml"), siteMap, function (err) {
    if (err) return console.log(err)
    console.log("sitemap.xml 写入成功！")
  })
}

// 获取文件创建时间
function getBirthtime(stat) {
  // 在一些系统下无法获取birthtime属性的正确时间，使用atime代替
  return stat.birthtime.getFullYear() != 1970 ? stat.birthtime : stat.atime
}

// 日期的格式
function dateFormat(date) {
  return `${date.getFullYear()}-${zero(date.getMonth() + 1)}-${zero(date.getDate())} ${zero(
    date.getHours()
  )}:${zero(date.getMinutes())}:${zero(date.getSeconds())}`
}

// 小于10补0
function zero(d) {
  return d.toString().padStart(2, "0")
}

// 按时间排序
function sortPostsByDate(posts) {
  posts.sort((prev, next) => {
    return compareDate(prev, next)
  })
  return posts
}

// 比对时间
function compareDate(a, b) {
  return getTimeNum(b) - getTimeNum(a)
}

// 获取时间的时间戳
function getTimeNum(post) {
  let dateStr = post.date || post.lastUpdated
  let date = new Date(dateStr)
  if (date == "Invalid Date") {
    // 修复new Date()在Safari下出现Invalid Date的问题
    date = new Date(dateStr.replace(/-/g, "/"))
  }
  return date.getTime()
}
