/*
 * @Description: 
 * @Autor: zhangai
 * @Date: 2022-08-17 10:30:06
 * @LastEditTime: 2022-08-30 16:42:59
 */
module.exports = {
    lang: 'zh-CN',
    title: 'front-end',
    description: '前端体系',
    base:'/web-system-coding/',
    theme: 'reco',
    plugins: [
      //音乐播放器
      ['@vuepress-reco/vuepress-plugin-bgm-player',
        {
          audios: [
              {
                  name: '강남역 4번 출구',
                  artist: 'Plastic / Fallin` Dild',
                  url: 'https://assets.smallsunnyfox.com/music/2.mp3',
                  cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
              },
              {
                  name: '用胳膊当枕头',
                  artist: '최낙타',
                  url: 'https://assets.smallsunnyfox.com/music/3.mp3',
                  cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
              }
          ],
          position: {
              left: '10px',
              bottom: '10px',
              'z-index': '999999'
          },
          autoShrink: true,
          floatPosition: 'left',
          floatStyle: {
              bottom: '80px',
              'z-index': '999999'
          }
       }],
      //动态标题
      ["dynamic-title",{
          showIcon: "https://www.zpzpup.com/assets/image/favicon.ico",
          showText: "欢迎回来 O(∩_∩)O~",
          hideIcon: "https://www.zpzpup.com/assets/image/favicon.ico",
          hideText: "失联中。。。快回来~",
          recoverTime: 2000
      }]
    ],
    themeConfig: {
        displayAllHeaders:true,
        nextLinks: true, // 上/先一篇链接
        prevLinks: true,
        lastUpdated: 'Last Updated',
        nav:  [
          { text: '导航', link: '/md/nav/' },
          { text: 'HTTP', link: '/md/https/'}
        ],
        sidebar: 'auto'
        //     // '/md/HTTP/': [
        //     // {
        //     //   text: '',
        //     //   collapsible:false,
        //     //   children: [
        //     //     '/md/HTTP/http.md',
        //     //     '/md/HTTP/TCP-IP.md',
        //     //   ],
        //     // },]
        // }
    }
}