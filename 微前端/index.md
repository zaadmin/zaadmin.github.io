1. 使用
    1.1. 安装
    ```
        yarn add qiankun
    ```
    1.2. 使用
    ```
        import { loadMicroApp } from 'qiankun';

        // 加载微应用
        loadMicroApp({
            name: 'reactApp',
            entry: '//localhost:7100',
            container: '#container',
            props: {
                slogan: 'Hello Qiankun',
            },
        });
    ```
样式隔离、js沙箱、预加载