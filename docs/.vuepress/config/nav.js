module.exports = [
    { text: "首页", link: "/" },
    {
        text: "前端",
        link: "/web/", //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            { text: "React", link: "/pages/e01e5d/" },
            { text: "Vue", link: "/pages/026512/" },
        ],
    },
    {
        text: "学习",
        link: "/study/",
        items: [{ text: "面试", link: "/pages/802a1ca6f7b71c59/" }],
    },
    {
        text: "技术",
        link: "/technology/",
        items: [
            { text: "Git", link: "/pages/04df1e/" },
            { text: "Github", link: "/pages/329e44/" },
            { text: "Linux", link: "/pages/87a1a5/" },
            { text: "Nginx", link: "/pages/5cd35f/" },
        ],
    },
    { text: "关于", link: "/about/" }, //about
    {
        text: "收藏",
        link: "/pages/beb6c0bd8a66cea6/",
        items: [
            { text: "网站", link: "/pages/beb6c0bd8a66cea6/" },
            { text: "资源", link: "/pages/eee83a9211a70f9d/" },
            { text: "Vue资源", link: "/pages/12df8ace52d493f6/" },
            { text: "优秀技术文章", link: "/pages/f9569f/" },
        ],
    },
    {
        text: "索引",
        link: "/archives/",
        items: [
            { text: "分类", link: "/categories/" },
            { text: "标签", link: "/tags/" },
            { text: "归档", link: "/archives/" },
        ],
    },
]
