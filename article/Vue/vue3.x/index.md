<!--
 * @Description: 
 * @Autor: zhangai
 * @Date: 2022-08-09 17:19:24
 * @LastEditTime: 2022-08-09 17:36:14
-->
### 响应式
1. reactive
    1.1. （仅对对象类型有效（对象、数组和 Map、Set 这样的集合类型），而对 string、number 和 boolean 这样的原始类型无效）
    1.2. 因为Vue的响应式系统是通过属性访问进行追踪的，因此我们必须始终保持对该响应式对象的相同引用。这意味着我们不可以随意地“替换”一个响应式对象，因为这将导致对初始引用的响应性连接丢失：
    
    ```
    let state = reactive({a: 0})
    const { a } = state   
    // 此时a已失去相应性，对他的操作无效影响到state
    ```
2. ref （任何类型都可）
    2.1 ref解包时，顶层可以解包，如果，嵌入的深层需要解包，先让其成为顶层；
    ```
    let state = ref({name: ['q', 'r']})
    const {name} = state

    ```
    2.2 ref解包数组，对象，map时，要使用.value
    