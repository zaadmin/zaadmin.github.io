(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{439:function(a,e,s){"use strict";s.r(e);var t=s(2),r=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"tostring"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tostring"}},[a._v("#")]),a._v(" toString()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("将数组转换为以逗号分隔的字符串\n")])])]),e("h2",{attrs:{id:"join"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#join"}},[a._v("#")]),a._v(" join()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("将所有数组元素组合成一个字符串\n")])])]),e("blockquote",[e("p",[a._v("它类似于 toString() 方法，但在这里你可以指定分隔符而不是默认的逗号。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("  let arrJoin = arr.join('-') //js-vue-react\n\n")])])]),e("h2",{attrs:{id:"concat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#concat"}},[a._v("#")]),a._v(" concat()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("可以将两个数组组合在一起，或者向数组中添加更多的元素项，然后返回一个新数组\n")])])]),e("h2",{attrs:{id:"push"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#push"}},[a._v("#")]),a._v(" push()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("将元素项添加到数组的末尾，并修改原始数组\n")])])]),e("h2",{attrs:{id:"pop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pop"}},[a._v("#")]),a._v(" pop()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("删除数组的最后一项并返回\n")])])]),e("h2",{attrs:{id:"shift"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shift"}},[a._v("#")]),a._v(" shift()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("删除数组的第一项，并将它返回\n")])])]),e("h2",{attrs:{id:"unshift"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unshift"}},[a._v("#")]),a._v(" unshift()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("将一个项添加到数组的开头，并修改原始数组\n\n> 还可一次添加多项\n")])])]),e("h2",{attrs:{id:"splice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#splice"}},[a._v("#")]),a._v(" splice()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("通过添加、删除和插入元素来修改数组\n")])])]),e("blockquote",[e("p",[a._v("语法是：")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" array.splice(index[, deleteCount, element1, ..., elementN])\n")])])]),e("ul",[e("li",[a._v("Index  删除数组中元素的起点")]),a._v(" "),e("li",[a._v("deleteCount 要从该索引中删除的元素数")]),a._v(" "),e("li",[a._v("element1, ..., elementN 要添加的元素")])]),a._v(" "),e("h3",{attrs:{id:"删除项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除项目"}},[a._v("#")]),a._v(" * 删除项目")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("*运行**splice()*后，它返回删除项目之后的数组，并且被删除的项目将其从原始数组中删除。\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    let arrSplice = ['css','html','算法', '数据结构']\n    arrSplice.splice(0,3) \n    console.log(arrSplice) // [\"数据结构\"]\n")])])]),e("blockquote",[e("p",[a._v("注意: deleteCount 不包括范围内的最后一个索引。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("如果没有声明第二个参数，则将会从数组中删除从给定索引开始的所有元素：\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    let colors = ['green', 'yellow', 'blue', 'purple'];\n    colors.splice(3)\n    console.log(colors) // [\"green\", \"yellow\", \"blue\"]\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("从数组中删除 n 个元素，并用更多的项去替换它们\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    let schedule = ['I', 'have', 'a', 'meeting', 'tommorrow'];\n    schedule.splice(0, 4, 'we', 'are', 'going', 'to', 'swim');\n    console.log(schedule); // [\"we\", \"are\", \"going\", \"to\", \"swim\", \"tommorrow\"]\n")])])]),e("h3",{attrs:{id:"添加项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加项目"}},[a._v("#")]),a._v(" * 添加项目")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("要添加项目，我们需要将 deleteCount 设置为零\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    let meeting = ['ni', 'hao', 'a']\n    meeting.splice(3, 0, 'kai', 'shi', 'ban', 'zhuan', 'ba')\n    console.log(meeting)\n    //[\"ni\", \"hao\", \"a\", \"kai\", \"shi\", \"ban\", \"zhuan\", \"ba\"]\n")])])]),e("h2",{attrs:{id:"slice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slice"}},[a._v("#")]),a._v(" slice()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("此方法与 splice() 有点像，但是有很大不同。它返回子数组而不是子字符串。\n")])])]),e("p",[a._v("此方法复制数组的给定部分，并将复制的部分作为新数组返回。 "),e("strong",[a._v("它不会改变原始数组")]),a._v("。")]),a._v(" "),e("p",[a._v("语法：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("array.slice(start, end)\n")])])]),e("h2",{attrs:{id:"split"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#split"}},[a._v("#")]),a._v(" split()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("此方法用于字符串。它将一个字符串分成子串并将它们作为数组返回。\n")])])]),e("p",[a._v("语法：\n"),e("code",[a._v("string.split(separator, limit);")])]),a._v(" "),e("ul",[e("li",[a._v("separator 定义了如何分割字符串")]),a._v(" "),e("li",[a._v("决定了要分割成几份")])]),a._v(" "),e("blockquote",[e("p",[a._v("注意：如果我们声明一个空数组，比如 firstName.split('');，那么字符串中的每个项目将都会被分割为子字符串：")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('    let firstName = \'hello, my name is bolaji, I am a dev.\';\n    let arrSplitspace = firstName.split(\'\')\n    console.log(arrSplitspace) \n    //["h", "e", "l", "l", "o", ",", " ", "m", "y", " ", "n", "a", "m","e", " ", "i", "s", " ", "b", "o", "l", "a", "j", "i", ",", " ","I", " ", "a", "m", " ", "a", " ", "d", "e", "v", "."]\n')])])]),e("h2",{attrs:{id:"indexof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#indexof"}},[a._v("#")]),a._v(" indexOf()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("在数组中查找项目，如果它被找到就返回索引，否则返回 -1\n")])])]),e("h2",{attrs:{id:"lastindexof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lastindexof"}},[a._v("#")]),a._v(" lastIndexOf()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("这种方法的工作方式与 indexOf() 相同，只是它从右到左工作。它返回找到的最后一个索引\n")])])]),e("h2",{attrs:{id:"filter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[a._v("#")]),a._v(" filter()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("如果数组的项目符合某个条件，则此方法将会创建一个新数组。\n")])])]),e("p",[a._v("语法是：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let results = array.filter(function(item, index, array) {\n  // returns true if the item passes the filter\n});\n")])])]),e("h2",{attrs:{id:"map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[a._v("#")]),a._v(" map()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("通过操作数组中的值来创建新数组\n")])])]),e("h2",{attrs:{id:"reduce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reduce"}},[a._v("#")]),a._v(" reduce()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("适用于计算总计的值\n")])])]),e("p",[e("strong",[a._v("reduce()")]),a._v(" 用于计算数组中的单个值。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let value = array.reduce(function(previousValue, item, index, array) {\n  // ...\n}, initial);\n")])])]),e("h2",{attrs:{id:"foreach"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#foreach"}},[a._v("#")]),a._v(" forEach()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("迭代数组\n")])])]),e("h2",{attrs:{id:"every"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#every"}},[a._v("#")]),a._v(" every()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("检查数组中的所有项是否都符合指定的条件，如果符合则返回 true，否则返回 false\n")])])]),e("h2",{attrs:{id:"some"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#some"}},[a._v("#")]),a._v(" some()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("检查数组中的项（一个或多个）是否符合指定的条件，如果符合则返回true，否则返回false\n")])])]),e("h2",{attrs:{id:"include"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#include"}},[a._v("#")]),a._v(" include()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("检查数组是否包含某个项目。它类似于 .some()，但它不是要查找符合的特定条件，而是检查数组是否包含特定项")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);