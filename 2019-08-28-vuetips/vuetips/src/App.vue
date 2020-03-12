<template>
  <div id="app">
    <!-- 传值分为两种形式，一种是直接固定写法，不需要使用冒号，另一种是采用冒号绑定变量的形式  -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <NavBar v-if="false" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./views/NavBar/NavBar";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    NavBar
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
}
body .el-table th.gutter {
  display: table-cell !important;
}
</style>
