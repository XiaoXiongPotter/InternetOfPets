<template>
  <div id="app">
    <v-header></v-header>
  	<router-view></router-view>
  <v-foot></v-foot>
  </div>
</template>

<script>
import header from './components/header'
import footernav from './components/footernav'
export default {
  name: 'App',
  components: {
    'v-header':header,
   'v-foot':footernav
  }
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}
#app{
   font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
