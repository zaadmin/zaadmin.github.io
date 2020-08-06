flex是一维布局，一次只能处理一个维度上的元素布局，一行或者一列。Flex布局可以简便、完整、响应式地实现各种页面布局。

>  注：设为Flex布局后，子元素的float、clear和vertical-align属性将失效

# 基本概念
flex容器(采用flex布局的元素)存在两个轴：水平的主轴(main axis)和垂直的交叉轴(cross axis)

# 容器的属性
## flex-direction 
flex-direction 属性决定主轴的方向（即项目的排列方向）。

* row(默认值)： 主轴为水平方向，起点在左端
* row-reverse: 主轴为水平方向，起点在右端
* column： 主轴为垂直方向，起点在上沿
* column-reverse: 主轴为垂直方向，起点在下沿 

## flex-wrap
flex-wrap 决定如何换行

* nowrap(默认值) : 不换行
* wrap: 换行，第一行在上方
* wrap-reverse： 换行，第一行在下方

## flex-flow
flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap。(2 个属性组合)

> flex-flow: flex-direction || flex-wrap

## justify-content
justify-content属性定义了项目在主轴上的对齐方式。(默认是水平方向对齐方式，如水平居中等)

* flex-start(默认值)： 左对齐
* flex-end: 右对齐
* center: 居中
* space-between: 两端对齐，项目之间的间隔都相等
* space-around: 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍

## align-items
align-items属性定义项目在交叉轴上如何对齐

* flex-start：交叉轴的起点对齐
* flex-end: 交叉轴的终点对齐
* center: 交叉轴的中点对齐
* baseline: 项目的第一行文字的基线对齐
* stretch(默认值): 如果项目未设置高度或设为auto，将占满整个容器的的高度

## align-content
align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用

* flex-start: 与交叉轴的起点对齐
* flex-end: 与交叉轴的终点对齐
* center: 与交叉轴的中点对齐
* space-between: 与交叉轴两端对齐，轴线之间的间隔平均分布
* space-around: 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍
* stretch(默认值)： 轴线占满整个交叉轴

# 项目属性

6个属性值： order、flex-grow、flex-shirk、flex-basis、flex、align-self

## order
 
* 定义项目的排列顺序。数值越小，排列越靠前，默认为0

## flex-grow

* 定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大
* 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍

## flex-shirk

* 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
* 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
* 负值对该属性无效。

## flex-basis

* 定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小

> flex-basis: \<length> | auto; /* default auto */

* 它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

## flex

* flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选
> 该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)
> 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值

## align-self

* 允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch
> 该属性可能取6个值，除了auto，其他都与align-items属性完全一致。