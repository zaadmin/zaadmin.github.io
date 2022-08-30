<!--
 * @Description: 
 * @Autor: zhangai
 * @Date: 2022-08-17 09:37:16
 * @LastEditTime: 2022-08-30 16:08:15
-->
## http状态码
### 状态码分类
    1XX服务器收到请求
    2XX请求成功，如：200
    3XX重定向，如：302,304
    4XX客户端错误，如：404
    5XX服务端错误，如：500
### 常见状态码
    200 成功
    301 永久重定向（配合location，浏览器自动处理）
    302 临时重定向（配合location，浏览器自动处理）
    304 资源未被修改
    404 资源未找到
    403 无权限
    500 服务器错误
    504 网关超时

## http methods
    get 获取数据
    post 新建数据
    patch/put 更新数据
    delete 删除数据
* 传统API和Restful API
    - 传统API设计： 把每个url当做一个功能
        
        注：用url传参（/api/list?page=2）；

        用method表示操作类型（/api/create-article, /api/update-article?id=20， /api/get-article?id=2）
    - Restful API设计：把每个url当做一个唯一的资源 

        注：不使用url做参数(/api/list/2)；

        用method表示操作类型(post  /api/list; patch(put) /api/list/10; get /api/list/10;)
## http headers
* 常见的Request Headers

    Accept 浏览器可接收的数据格式
    Accept-Encoding 浏览器可接收的压缩算法，如 gzip
    Accept-Language 浏览器可接收的语言，如zh-CN
    Connection keep-alive 一次TCP链接重复使用
    cookie
    Host 访问网址
    User-Agent(UA) 浏览器信息
    Content-type 发送数据的格式，如application/json
    自定义header -> 前端在发送请求时添加： 譬如X-client-Id: 2222
* 常见的Response Headers
    Content-type: 返回数据的格式，如application/json
    Content-length: 返回数据的大小，多少字节
    Content-Encoding 返回数据的压缩算法，如 gzip
    Set-Cookie 服务端修改cookie

* 缓存相关的headers
    Cache-Control  Expires
    Last-Modified  If-Modified-Since
    Etag           If-None-Match
## http缓存机制（*）
* 什么是缓存
> 浏览器会将网络请求到的资源存储到本地不同的位置，下次请求时直接从存储的位置取用，不需要再次从网络中获取，缩短网页显示时间，减少带宽，降低网络负荷
* 缓存产生的原因
    
* 可以被缓存的资源
    静态资源（js、css、img）
* 强制缓存

* 协商缓存

## 缓存过程总结

## 刷新操作
