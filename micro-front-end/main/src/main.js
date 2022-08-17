/*
 * @Description: 
 * @Autor: zhangai
 * @Date: 2022-08-15 15:29:43
 * @LastEditTime: 2022-08-15 18:20:53
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { start } from 'qiankun'
// import { initMicroApps } from '@/micro'

// const initMainApp = () => {
//     const app = createApp(App)
//     setupStore(app)
//     setupRouter(app)
//     app.use(store).use(router).mount("#app")
// }

// initMainApp()
const instance = createApp(App).use(store).use(router).mount("#app");
instance.$nextTick(() => {
    start()
})
// initMicroApps()
