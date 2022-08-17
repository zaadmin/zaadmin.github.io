/*
 * @Description: 
 * @Autor: zhangai
 * @Date: 2022-08-15 17:53:38
 * @LastEditTime: 2022-08-15 18:15:04
 */
console.log(window)
if (window.__POWERED_BY_QIANKUN__) {
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }