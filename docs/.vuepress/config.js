/*
 * @Description: 
 * @Autor: zhangai
 * @Date: 2022-08-17 10:30:06
 * @LastEditTime: 2022-08-17 16:58:26
 */
module.exports = {
    lang: 'zh-CN',
    title: 'front-end',
    description: '前端体系',
    base:'/web-system-coding/',
    // head: [['link', { rel: 'icon', href: '/node-learning-ebook/favicon.ico' }]],
    theme: '@vuepress/theme-default',
    themeConfig: {
        displayAllHeaders:true,
        navbar:  [
            { text: '首页', link: '/' },
            { text: '小结', link: '/md/HTTP/http'}
        ],
        sidebar: {
            '/md/HTTP/': [
            {
              text: '',
              collapsible:false,
              children: [
                '/md/HTTP/http.md',
                '/md/HTTP/TCP-IP.md',
              ],
            },]
        }
    }
}