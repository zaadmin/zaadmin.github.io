/*
 * @Description: 
 * @Autor: zhangai
 * @Date: 2022-08-17 10:30:06
 * @LastEditTime: 2022-08-31 10:43:44
 */
module.exports = {
    lang: 'zh-CN',
    title: 'front-end',
    description: '前端体系',
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
    }
}