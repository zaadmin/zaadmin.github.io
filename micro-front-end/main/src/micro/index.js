/*
 * @Description: 注册微应用
 * @Autor: zhangai
 * @Date: 2022-08-15 16:57:57
 * @LastEditTime: 2022-08-15 18:24:21
 */
import {
    registerMicroApps,
    addGlobalUncaughtErrorHandler,
    initGlobalState,
} from "qiankun";
import apps from './app'

const LifeCyclesObj = { // 全局的微应用生命周期钩子(可选)
    beforeLoad: (app) => {
        console.log('before load', app.name)
        return Promise.resolve()
    },
    afterMount: app => {
        console.log("after mount", app.name);
        return Promise.resolve()
    }
}

addGlobalUncaughtErrorHandler((event) => {
    console.error(event, 'event');
    const { message: msg } = event
    if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
        console.error("微应用加载失败，请检查应用是否可运行");
    }
});

const initMicroState = () => {
    const { onGlobalStateChange, setGlobalState } = initGlobalState({
        routes: [],
    })
    onGlobalStateChange((value) => {
        // const cachedRouteMap = LS.get('SUBAPP_CACHED_ROUTE_MAP') || {}
        if (value && value.routes.length) {
            const subappRoute = value.routes.find(
                (item) => item.children && item.children.length
            )
            if (subappRoute) {
                subappRoute.children.forEach((route) => {
                    if (route.path && route.meta && route.meta.title) {
                        cachedRouteMap[route.path] = route.meta.title
                    } else {
                        route.path && delete cachedRouteMap[route.path]
                    }
                })
                console.log(cachedRouteMap)
                LS.put('SUBAPP_CACHED_ROUTE_MAP', cachedRouteMap)
            }
        }
    })
    setGlobalState({
        routes: [],
    })
}

export const initMicroApps = () => {
    // const filterApps =
    //     location.host.indexOf('localhost') !== -1
    //         ? apps.filter((item) => location.href.indexOf(item.name) !== -1)
    //         : apps
    registerMicroApps(apps, LifeCyclesObj)
    prefetchApps(apps)
    initMicroState()
}