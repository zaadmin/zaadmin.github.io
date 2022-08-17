/*
 * @Descripttion: 
 * @Author: zhangai
 * @Date: 2022-07-24 12:17:29
 */
setTimeout(() => {
    console.log('setTimeout')
}, 1000)

setInterval(() => {
    console.log('setInterval')
}, 1000)

setImmediate(() => {
    console.log('setImmediate')
})

process.nextTick(() =>{
    console.log('process.nextTick')
})