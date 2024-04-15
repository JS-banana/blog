(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{591:function(t,a,s){"use strict";s.r(a);var e=s(43),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[s("a",{attrs:{href:"https://juejin.im/post/6844903639115366408",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端性能优化"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://juejin.im/post/6844903503601598477",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端性能优化常用总结"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"浏览器缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[t._v("#")]),t._v(" 浏览器缓存")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://juejin.im/post/6844903801778864136#heading-6",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解HTTP缓存机制及原理"),s("OutboundLink")],1)])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("强制缓存")]),t._v("：服务器通知浏览器一个缓存时间，在缓存时间内，下次请求，直接用缓存，不在时间内，执行比较缓存策略。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("对比缓存/协商缓存")]),t._v("：将缓存信息中的Etag（资源的唯一标识符）和Last-Modified（最近修改时间）通过请求发送给服务器，由服务器校验，返回304状态码时，浏览器直接使用缓存。")])])]),t._v(" "),s("h2",{attrs:{id:"预加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预加载"}},[t._v("#")]),t._v(" 预加载")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("预加载其实是声明式的 "),s("code",[t._v("fetch")]),t._v(" ，强制浏览器请求资源，并且不会阻塞 "),s("code",[t._v("onload")]),t._v(" 事件。")])]),t._v(" "),s("li",[s("p",[t._v("预加载可以一定程度上降低首屏的加载时间，因为可以将一些不影响首屏但重要的文件延后加载，唯一缺点就是兼容性不好。")])]),t._v(" "),s("li",[s("p",[t._v("启用方式")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://example.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("h2",{attrs:{id:"预渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预渲染"}},[t._v("#")]),t._v(" 预渲染")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("可以通过预渲染将下载的文件预先在后台渲染。")])]),t._v(" "),s("li",[s("p",[t._v("预渲染虽然可以提高页面的加载速度，但是要确保该页面百分百会被用户在之后打开，否则就白白浪费资源去渲染。")])]),t._v(" "),s("li",[s("p",[t._v("启用方式")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("prerender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://example.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("h2",{attrs:{id:"懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[t._v("#")]),t._v(" 懒加载")]),t._v(" "),s("ul",[s("li",[t._v("将不关键的资源延后加载。")]),t._v(" "),s("li",[t._v("懒加载不仅可以用于图片，也可以使用在别的资源上。比如进入可视区域才开始播放视频等。")]),t._v(" "),s("li",[t._v("原理：\n"),s("ul",[s("li",[t._v("懒加载的原理就是只加载自定义区域（通常是可视区域，但也可以是即将进入可视区域）内需要加载的东西。")]),t._v(" "),s("li",[t._v("对于图片来说，先设置图片标签的 src 属性为一张占位图，将真实的图片资源放入一个自定义属性中，当进入自定义区域时，就将自定义属性替换为 src 属性，这样图片就会去下载资源，实现了图片懒加载。")])])])]),t._v(" "),s("h2",{attrs:{id:"懒执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒执行"}},[t._v("#")]),t._v(" 懒执行")]),t._v(" "),s("ul",[s("li",[t._v("将某些逻辑延迟到使用时再计算。")]),t._v(" "),s("li",[t._v("懒执行需要唤醒，一般可以通过定时器或者事件的调用来唤醒。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);