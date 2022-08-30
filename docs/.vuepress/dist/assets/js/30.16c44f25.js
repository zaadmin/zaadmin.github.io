(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{436:function(e,t,n){"use strict";n.r(t);var a=n(2),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"深拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝"}},[e._v("#")]),e._v(" 深拷贝")]),e._v(" "),t("h2",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[e._v("#")]),e._v(" 概念")]),e._v(" "),t("p",[e._v("复制变量值，对于引用数据，则递归至基本类型后，再复制。深拷贝后的对象"),t("strong",[e._v("与原来的对象完全隔离")]),e._v("，互不影响，对一个对象的修改并不会影响另一个对象。")]),e._v(" "),t("h2",{attrs:{id:"实现深拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现深拷贝"}},[e._v("#")]),e._v(" 实现深拷贝")]),e._v(" "),t("ol",[t("li",[e._v("JSON.parse(JSON.stringify())")])]),e._v(" "),t("p",[e._v("原理: 把一个对象序列化成为一个JSON字符串，将对象的内容转换成字符串的形式再保存在磁盘上，再用JSON.parse() 反序列化将JSON字符串变成一个新的对象")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  let init = { username: 'admin', role: {manager: 'zhangsan', user: 'lisi'}}\n  let cloneData = JSON.parse(JSON.stringify(init))\n  cloneData.username  = 'admintion'\n  cloneData.role.manager = 'Jone'\n  console.log(\"原始数据: \" + init.username) //admin\n  console.log(\"深拷贝后数据: \" + cloneData.username) //admintion\n  console.log(\"原始数据: \" + init.role.manager) //zhangsan\n  console.log(\"深拷贝后数据: \" + cloneData.role.manager) //Jone\n")])])]),t("blockquote",[t("p",[e._v("JSON.stringify()使用注意：")])]),e._v(" "),t("ul",[t("li",[e._v("拷贝的对象的值中如果有函数， undefined ， symbol 则经过 JSON.stringify() `序列化后的JSON字符串中这个键值对会消失；")]),e._v(" "),t("li",[e._v("无法拷贝不可枚举的属性，无法拷贝对象的原型链；")]),e._v(" "),t("li",[e._v("拷贝 Date 引用类型会变成字符串；")]),e._v(" "),t("li",[e._v("拷贝 RegExp 引用类型会变成空对象；")]),e._v(" "),t("li",[e._v("对象中含有 NaN 、 Infinity 和 -Infinity ，则序列化的结果会变成 null ；")]),e._v(" "),t("li",[e._v("无法拷贝对象的循环应用(即 obj[key] = obj )")])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("第三方库")])]),e._v(" "),t("p",[e._v("如： Lodash （https://www.lodashjs.com/）")]),e._v(" "),t("h2",{attrs:{id:"手写简单深拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手写简单深拷贝"}},[e._v("#")]),e._v(" 手写简单深拷贝")]),e._v(" "),t("p",[e._v("思路："),t("strong",[e._v("递归")]),e._v("，遍历对象、数组直到里面都是基本数据类型，然后再去复制，就是深度拷贝。")]),e._v(" "),t("p",[e._v("代码：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  /**\n  * 1.判断源数据是否是对象，如果不是对象，直接返回,如果是对象进入下一步\n  * 2.判断源数据是数组还是对象，拷贝后的数据类型相对应；\n  * 2.遍历源数据，判断该对象的每个属性是否是自有属性，如果是，判断该属性的值否对象，如果不是对象，\n  *   把改属性的值赋值给拷贝后属性，如果是对象，将进行递归运算，知道属性值为基数据时，结束。\n  */\n  const isObject = obj => typeof obj === 'object' && obj !== null\n  function deepClone (source) {\n    if(!isObject(source)) return source\n    const target = Array.isArray(source) ? [] : {}\n    for (let key in source) {\n      if(Object.prototype.hasOwnProperty.call((source, key))){\n        if (isObject(source[key])) {\n          target[key] = deepClone(source[key])\n        }else {\n          target[key] = source[key]\n        }\n      }\n    }\n    return target;\n  }\n")])])]),t("blockquote",[t("p",[e._v("该方法缺陷： 遇到循环引用，会陷入一个循环的递归过程，从而导致爆栈")])]),e._v(" "),t("blockquote",[t("p",[e._v("https://juejin.im/post/6844903929705136141")])]),e._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),t("p",[e._v("复制变量值，对于引用数据，则递归至基本类型后，再复制。深拷贝后的对象与原来的对象完全隔离，互不影响，对一个对象的修改并不会影响另一个对象。")]),e._v(" "),t("blockquote",[t("p",[e._v("深拷贝是层层拷贝")])])])}),[],!1,null,null,null);t.default=s.exports}}]);