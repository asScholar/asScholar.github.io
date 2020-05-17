module.exports = {
    title: '@ZHU Jin-bin',
    description: '一步一个脚印，把简单的事情做精通！',
    dest: './dist',
    port: '8080',
    head: [
        ['link', {rel: 'icon', href: '/imgs/logo.jpg'}],
        ["link", { rel: 'stylesheet', href: '/css/style.css' }]
    ],
    base: '/myBlog/',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}