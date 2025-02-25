import {NavItem} from "vuepress/config";

export default [
    {
        text: "其他",
        items: [
            {text: "常用网址",link: "/其他/常用网址.md"},
            {text: "常用命令",link: "/其他/常用命令.md"},
            {text: "常用快捷键",link: "/其他/常用快捷键.md"},
        ]
    },
    {
        text: "前端",
        items: [
            {text: "知识库",link: "/知识库/index.md"},
            {text: "面试题",link: "/面试题/index.md"},
        ]
    },
] as NavItem[];
