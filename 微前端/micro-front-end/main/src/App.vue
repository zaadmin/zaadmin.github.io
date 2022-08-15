<!--
 * @Description: 
 * @Autor: zhangai
 * @Date: 2022-08-15 15:29:43
 * @LastEditTime: 2022-08-15 18:11:53
-->
<template>
  <div id="nav">
    <span>主应用</span>
    <router-link to="/about">About</router-link>
  </div>
  <div id="sub-container"></div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
