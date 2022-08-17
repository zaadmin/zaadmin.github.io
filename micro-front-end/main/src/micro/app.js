/*
 * @Description: 需要注册的微应用
 * @Autor: zhangai
 * @Date: 2022-08-15 15:48:53
 * @LastEditTime: 2022-08-15 18:12:46
 */
const getActiveRule = (hash) => (location) => location.hash.startsWith(hash);
const apps = [
    {
        name: 'subapp-react',
        entry: '//localhost:3000',
        container: '#subapp-container',
        activeRule: getActiveRule('#/subapp-react')
    }
]
export default apps