(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{598:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"网络协议概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络协议概述"}},[t._v("#")]),t._v(" 网络协议概述")]),t._v(" "),a("h3",{attrs:{id:"http、https、http-1-x、http-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http、https、http-1-x、http-2-0"}},[t._v("#")]),t._v(" HTTP、HTTPS、HTTP/1.x、HTTP/2.0")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://juejin.im/post/6844903991411736590",target:"_blank",rel:"noopener noreferrer"}},[t._v("「进击的前端工程师」HTTP的世界观(附HTTP/3中文翻译)"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"http是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http是什么"}},[t._v("#")]),t._v(" HTTP是什么")]),t._v(" "),a("ul",[a("li",[t._v("HTTP是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范。")])]),t._v(" "),a("p",[t._v("HTTP通常跑在"),a("code",[t._v("TCP/IP协议栈")]),t._v("之上，依靠"),a("code",[t._v("IP协议实现寻址和路由、TCP协议实现可靠数据传输、DNS协议实现域名查找、SSL/TLS协议实现安全通信")]),t._v("。当然，WebSocket、HTTPDNS依赖于HTTP。")]),t._v(" "),a("h4",{attrs:{id:"http-1-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-1-0"}},[t._v("#")]),t._v(" HTTP/1.0")]),t._v(" "),a("ul",[a("li",[t._v("引入了"),a("strong",[t._v("请求头")]),t._v("、"),a("strong",[t._v("响应头")]),t._v("、"),a("strong",[t._v("状态码")]),t._v("：为了满足人们对浏览器的需求(不光是HTML，还有CSS、JS、图片、音视频等)，文件格式不再局限于ASCII编码。")]),t._v(" "),a("li",[t._v("提供了"),a("strong",[t._v("Cache机制")]),t._v("：为了减轻服务器的压力。")]),t._v(" "),a("li",[t._v("加入了"),a("strong",[t._v("用户代理字段")]),t._v("：服务器需要统计客户端的基础信息(Windows 和 macOS)。")])]),t._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("text/html")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("accept-encoding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("gzip, deflate, br")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("accept-Charset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("ISO-8859-1,utf-8")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("accept-language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("zh-CN,zh")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h4",{attrs:{id:"http-1-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1"}},[t._v("#")]),t._v(" HTTP/1.1")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("改进持久连接")]),t._v(" "),a("ul",[a("li",[t._v("一个TCP连接上可以传输多个HTTP请求，只要浏览器或者服务器没有断开连接，该TCP会一直保持。")])])]),t._v(" "),a("li",[a("p",[t._v("增加对虚拟主机的支持")]),t._v(" "),a("ul",[a("li",[t._v("请求头中也增加了Host字段，表示当前的域名地址，服务器可根据不同的Host值做不同的处理。")])])])]),t._v(" "),a("h4",{attrs:{id:"http-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-2-0"}},[t._v("#")]),t._v(" HTTP/2.0")]),t._v(" "),a("ul",[a("li",[t._v("多路复用：能够让多个请求使用同一个 TCP 链接，极大的加快了网页的加载速度")]),t._v(" "),a("li",[t._v("Header压缩")]),t._v(" "),a("li",[t._v("二进制传输")])]),t._v(" "),a("h3",{attrs:{id:"tcp-ip，tcp，udp，ip，socket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip，tcp，udp，ip，socket"}},[t._v("#")]),t._v(" TCP/IP，TCP，UDP，IP，Socket")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://blog.csdn.net/freekiteyu/article/details/72236734",target:"_blank",rel:"noopener noreferrer"}},[t._v("一篇文章看明白 TCP/IP，TCP，UDP，IP，Socket 之间的关系"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[t._v("#")]),t._v(" 跨域")]),t._v(" "),a("h3",{attrs:{id:"同源策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同源策略"}},[t._v("#")]),t._v(" 同源策略")]),t._v(" "),a("ul",[a("li",[t._v("为求安全："),a("code",[t._v("XmlHttpRequest")]),t._v("只允许请求当前源（"),a("strong",[t._v("域名")]),t._v("、"),a("strong",[t._v("协议")]),t._v("、"),a("strong",[t._v("端口")]),t._v("）的资源")])]),t._v(" "),a("h3",{attrs:{id:"如何解决跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何解决跨域"}},[t._v("#")]),t._v(" 如何解决跨域")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("JSONP")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("缩写："),a("code",[t._v("json+padding")]),t._v("（内填充），顾名思义，就是把"),a("code",[t._v("JSON")]),t._v("填充到一个盒子里")])]),t._v(" "),a("li",[a("p",[t._v("原理：")]),t._v(" "),a("ul",[a("li",[t._v("动态插入"),a("code",[t._v("script")]),t._v("标签，通过"),a("code",[t._v("script")]),t._v("标签引入一个"),a("code",[t._v("js")]),t._v("文件，这个"),a("code",[t._v("js")]),t._v("文件载入成功后会执行我们在"),a("code",[t._v("url")]),t._v("参数中指定的函数，并且会把我们需要的"),a("code",[t._v("json")]),t._v("数据作为参数传入")]),t._v(" "),a("li",[t._v("然后在服务端输出"),a("code",[t._v("JSON")]),t._v("数据并执行回调函数")])])]),t._v(" "),a("li",[a("p",[t._v("优点：")]),t._v(" "),a("ul",[a("li",[t._v("兼容性好，简单易用，支持浏览器与服务器双向通信")])])]),t._v(" "),a("li",[a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[t._v("只支持GET请求")])])]),t._v(" "),a("li",[a("p",[t._v("代码：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createJs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("sUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" oScript "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    oScript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/javascript'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    oScript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'head'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oScript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createJs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jsonp.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//jsonp.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("CORS")])]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN：跨源资源共享（CORS）"),a("OutboundLink")],1)])]),t._v(" "),a("ul",[a("li",[t._v("需要服务器端开启 "),a("code",[t._v("Access-Control-Allow-Origin")]),t._v(" 进行支持")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("iframe、document.domain、window.name、window.postMessage")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("websocket")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("服务器端设置代理请求：服务器端不受同源策略限制")])])])]),t._v(" "),a("h2",{attrs:{id:"ajax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ajax"}},[t._v("#")]),t._v(" Ajax")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("缩写："),a("code",[t._v("Asynchronous Javascript And XML")]),t._v("，异步 "),a("code",[t._v("JavaScript")]),t._v(" + "),a("code",[t._v("XML")]),t._v(" 在后台与服务器进行异步数据交换，不用重载整个网页，实现局部刷新。")])]),t._v(" "),a("li",[a("p",[t._v("创建Ajax步骤：")]),t._v(" "),a("ul",[a("li",[t._v("创建XMLHttpRequest对象")]),t._v(" "),a("li",[t._v("创建一个新的HTTP请求，并指定该HTTP请求的类型、验证信息")]),t._v(" "),a("li",[t._v("设置响应HTTP请求状态变化的回调函数")]),t._v(" "),a("li",[t._v("发送HTTP请求")]),t._v(" "),a("li",[t._v("获取异步调用返回的数据")]),t._v(" "),a("li",[t._v("使用JavaScript和DOM实现局部刷新")])])]),t._v(" "),a("li",[a("p",[t._v("代码：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xhr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"POST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRequestHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/x-www-form-urlencoded"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("304")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"get、post"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get、post"}},[t._v("#")]),t._v(" GET、POST")])])}),[],!1,null,null,null);s.default=e.exports}}]);