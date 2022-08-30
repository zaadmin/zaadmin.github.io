(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{449:function(t,a,e){"use strict";e.r(a);var s=e(2),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"http状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http状态码"}},[t._v("#")]),t._v(" http状态码")]),t._v(" "),a("h3",{attrs:{id:"状态码分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态码分类"}},[t._v("#")]),t._v(" 状态码分类")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("1XX服务器收到请求\n2XX请求成功，如：200\n3XX重定向，如：302,304\n4XX客户端错误，如：404\n5XX服务端错误，如：500\n")])])]),a("h3",{attrs:{id:"常见状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见状态码"}},[t._v("#")]),t._v(" 常见状态码")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("200 成功\n301 永久重定向（配合location，浏览器自动处理）\n302 临时重定向（配合location，浏览器自动处理）\n304 资源未被修改\n404 资源未找到\n403 无权限\n500 服务器错误\n504 网关超时\n")])])]),a("h2",{attrs:{id:"http-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-methods"}},[t._v("#")]),t._v(" http methods")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("get 获取数据\npost 新建数据\npatch/put 更新数据\ndelete 删除数据\n")])])]),a("ul",[a("li",[t._v("传统API和Restful API\n"),a("ul",[a("li",[a("p",[t._v("传统API设计： 把每个url当做一个功能")]),t._v(" "),a("p",[t._v("注：用url传参（/api/list?page=2）；")]),t._v(" "),a("p",[t._v("用method表示操作类型（/api/create-article, /api/update-article?id=20， /api/get-article?id=2）")])]),t._v(" "),a("li",[a("p",[t._v("Restful API设计：把每个url当做一个唯一的资源")]),t._v(" "),a("p",[t._v("注：不使用url做参数(/api/list/2)；")]),t._v(" "),a("p",[t._v("用method表示操作类型(post  /api/list; patch(put) /api/list/10; get /api/list/10;)")])])])])]),t._v(" "),a("h2",{attrs:{id:"http-headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-headers"}},[t._v("#")]),t._v(" http headers")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("常见的Request Headers")]),t._v(" "),a("p",[t._v("Accept 浏览器可接收的数据格式\nAccept-Encoding 浏览器可接收的压缩算法，如 gzip\nAccept-Language 浏览器可接收的语言，如zh-CN\nConnection keep-alive 一次TCP链接重复使用\ncookie\nHost 访问网址\nUser-Agent(UA) 浏览器信息\nContent-type 发送数据的格式，如application/json\n自定义header -> 前端在发送请求时添加： 譬如X-client-Id: 2222")])]),t._v(" "),a("li",[a("p",[t._v("常见的Response Headers\nContent-type: 返回数据的格式，如application/json\nContent-length: 返回数据的大小，多少字节\nContent-Encoding 返回数据的压缩算法，如 gzip\nSet-Cookie 服务端修改cookie")])]),t._v(" "),a("li",[a("p",[t._v("缓存相关的headers\nCache-Control  Expires\nLast-Modified  If-Modified-Since\nEtag           If-None-Match")])])]),t._v(" "),a("h2",{attrs:{id:"http缓存机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http缓存机制"}},[t._v("#")]),t._v(" http缓存机制（*）")]),t._v(" "),a("ul",[a("li",[t._v("什么是缓存")])]),t._v(" "),a("blockquote",[a("p",[t._v("浏览器会将网络请求到的资源存储到本地不同的位置，下次请求时直接从存储的位置取用，不需要再次从网络中获取，缩短网页显示时间，减少带宽，降低网络负荷")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("缓存产生的原因")])]),t._v(" "),a("li",[a("p",[t._v("可以被缓存的资源\n静态资源（js、css、img）")])]),t._v(" "),a("li",[a("p",[t._v("强制缓存")])]),t._v(" "),a("li",[a("p",[t._v("协商缓存")])])]),t._v(" "),a("h2",{attrs:{id:"缓存过程总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存过程总结"}},[t._v("#")]),t._v(" 缓存过程总结")]),t._v(" "),a("h2",{attrs:{id:"刷新操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刷新操作"}},[t._v("#")]),t._v(" 刷新操作")])])}),[],!1,null,null,null);a.default=n.exports}}]);