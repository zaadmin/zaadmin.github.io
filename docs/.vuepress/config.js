/*
 * @Description: 
 * @Autor: zhangai
 * @Date: 2022-08-17 10:30:06
 * @LastEditTime: 2022-09-02 11:44:39
 */
module.exports = {
    lang: 'zh-CN',
    title: "xiaoA's blog",
    description: '记载web前端学习成长，千里之堤，溃于蚁穴',
    base:'/web-system-coding/',
    theme: 'vdoing',
    themeConfig: {
        nav:  [
          { text: '首页', link: '/' },
          {
            text: '前端',
            link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
            items: [
                {
                    text: '学习笔记',
                    items: [
                      { text: '《JavaScript教程》', link: '/note/javascript/' },
                      { text: '《ES6 教程》', link: '/note/es6/' },
                      { text: '《Vue》', link: '/note/vue/' },
                      { text: '《React》', link: '/note/react/' },
                      {
                        text: '《TypeScript》',
                        link: '/note/typescript/',
                      },
                      {
                        text: '《Git》',
                        link: '/note/git/',
                      },
                      {
                        text: 'JS设计模式总结',
                        link: '/note/4643cd/',
                      },
                    ],
                  },
            ]
          },
          {
            text: '网络',
            link: '/network/',
            items:[
              {text: 'http', link: '/pages/a7779c/'},
              {text: '导航', link: '/pages/964955/'}
            ]
          }
        ],
        sidebar: 'structuring',
        sidebarDepth: 2,
        // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
        author: {
          name: 'ai.zhang', // 必需
          link: 'https://github.com/zaadmin', // 可选的
        },
        // 页脚信息
        footer: {
          createYear: 2019, // 博客创建年份
          copyrightInfo:
            'xiaoA', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
        },
    }
}