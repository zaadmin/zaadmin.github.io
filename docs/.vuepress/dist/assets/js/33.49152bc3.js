(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{440:function(a,t,s){"use strict";s.r(t);var e=s(2),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[a._v("#")]),a._v(" 继承")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("A对象通过继承B对象，就能直接拥有B对象的所有属性和方法\n")])])]),t("h3",{attrs:{id:"继承的六种方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#继承的六种方式"}},[a._v("#")]),a._v(" 继承的六种方式")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("原型链继承")]),a._v(" "),t("p",[a._v("该方法实现的本质是通过将子类的原型指向了父类的实例，所以"),t("strong",[a._v("子类的实例就可以通过_proto_访问到Child.prototype也就是Parent的实例，这样就可以访问到父类的私有方法，然后再通过_proto_指向父类的prototype就可以获取到父类原型的方法")])]),a._v(" "),t("p",[a._v("子类继承父类的属性和方法是将父类的私有属性和共有方法都作为自己的公有属性和方法")]),a._v(" "),t("p",[a._v("在子类中添加新的方法或是重写父类方法时，切记要放在替换原型之后")]),a._v(" "),t("h3",{attrs:{id:"特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[a._v("#")]),a._v(" 特点：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v(" * 父类新增原型方法/原型属性，子类都能访问\n * 简单，易于实现\n")])])]),t("h3",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[a._v("#")]),a._v(" 缺点：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v(" *  无法实现多继承\n *  来自原型对象的所有属性被所有实例共享\n *  创建子类实例时，无法向父类构造函数传参\n *  要想为子类新增属性和方法，必须要在Child.prototype = new Parent()之后执   行，能放到构造器中 \n")])])])]),a._v(" "),t("li",[t("p",[a._v("借用构造函数继承")]),a._v(" "),t("p",[a._v("在子类型构造函数中通过call()调用父类构造函数")]),a._v(" "),t("h3",{attrs:{id:"特点-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特点-2"}},[a._v("#")]),a._v(" 特点：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v(" * 解决了原型链继承中，子类实例共享父类引用属性的问题\n * 创建子类实例时，可以向父类传递参数\n * 可以实现多继承（call多个父类对象）\n")])])]),t("h3",{attrs:{id:"缺点-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点-2"}},[a._v("#")]),a._v(" 缺点：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v(" * 实例并不是父类的实例，只是子类的实例\n * 只能继承父类的实例属性和方法，不能继承父类原型属性和方法\n * 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能\n")])])])]),a._v(" "),t("li",[t("p",[a._v("原型链+借用构造函数的组合继承")]),a._v(" "),t("p",[a._v("通过调用父类构造 ，继承父类的属性并保留传参的特点，然后通过将父类实例作为子类原型，实现函数复用")]),a._v(" "),t("h3",{attrs:{id:"特点-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特点-3"}},[a._v("#")]),a._v(" 特点：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("  * 可以继承实例的属性/方法，也可以继承原型属性/方法\n  * 不存在引用属性共享问题\n  * 可传参\n  * 函数可复用\n")])])]),t("h3",{attrs:{id:"缺点-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点-3"}},[a._v("#")]),a._v(" 缺点")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("  * 调用了两次父类构造函数，生成了两份实例\n")])])])]),a._v(" "),t("li",[t("p",[a._v("组合继承优化1")]),a._v(" "),t("p",[a._v("通过父类原型和子类原型指向同一对象，子类可以继承到父类的公有方法当做自己的公有方法，而且不会初始化两次实例方法/属性，避免了组合继承的缺点")]),a._v(" "),t("h3",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[a._v("#")]),a._v(" 优点:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("  * 不会初始化两次实例方法/属性,避免了组合继承的特点\n")])])]),t("h3",{attrs:{id:"缺点-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点-4"}},[a._v("#")]),a._v(" 缺点：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("  * 没办法辨别实例是子类还是父类创造的，子类和父类的构造函数指向同一个\n")])])])]),a._v(" "),t("li",[t("p",[a._v("组合继承优化2")]),a._v(" "),t("p",[a._v("借助原型可以基于已有的对象来创建对象，let b = Object.create(a)以a对象为原型，生成了b对象。b对象继承了a 的所有属性和方法。")]),a._v(" "),t("blockquote",[t("p",[a._v("子类继承了所有父类原型对象的属性和方法。 目前来说，最完美的继承方法")])])]),a._v(" "),t("li",[t("p",[a._v("ES6中的class 继承")]),a._v(" "),t("p",[a._v("继承机制：\n先将父类实例对象的属性和方法，加到this上面（必须先调用super方法）,然后再用子类的构造函数修改this")]),a._v(" "),t("blockquote",[t("p",[a._v("class关键字只是原型的语法糖，Javascript继承仍然是基于原型实现的")])]),a._v(" "),t("h3",{attrs:{id:"优点-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点-2"}},[a._v("#")]),a._v(" 优点：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("  * 语法简单易懂，操作更方便\n")])])]),t("h3",{attrs:{id:"缺点-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点-5"}},[a._v("#")]),a._v(" 缺点：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("  * 并不是所有的浏览器都支持class关键字\n")])])])])]),a._v(" "),t("p",[a._v("链接： https://segmentfault.com/a/1190000016708006")])])}),[],!1,null,null,null);t.default=r.exports}}]);