module.exports = [
    { text: "首页", link: "/" },
    {
        text: "前端",
        link: "/web/", //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            {
                text: "前端文章",
                link: "/pages/53184c/",
            },
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
            { text: "技术文档", link: "/pages/9a7ee40fc232253e/" },
            { text: "GitHub技巧", link: "/pages/4c778760be26d8b3/" },
            { text: "Nodejs", link: "/pages/117708e0af7f0bd9/" },
            { text: "博客搭建", link: "/pages/41f87d890d0a02af/" },
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
