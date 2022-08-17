<!--
 * @Descripttion: 
 * @Author: zhangai
 * @Date: 2022-08-06 12:19:08
-->
模块化
1.commonJS
    一个规范，node中对commonJS进行了支持和实现，在node中可以进行模块化开发：
    1）node中每一个js文件都是一个单独的模块
    2）每个模块中都包含commonJS规范的核心变量： exports、module.exports、require
    3) 方便模块化开发
1.1 exports和module.exports是对模块中内容进行导出；
1.2 require函数是导入其他模块（自定义模块、系统模块、第三方库模块）中的内容
注：在node中的使用主要引用的本质是对象的赋值