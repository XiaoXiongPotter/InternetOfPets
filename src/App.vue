<template >
  <div id="app">
    
  	<router-view></router-view>
  <v-foot></v-foot>
  </div>
</template>

<script>
import Pheader from './components/header'
import footernav from './components/footernav'
export default {
  name: 'App',
  components: {
    'v-header':Pheader,
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
    max-width: 720px;
    display: block;
    margin: 0 auto;
}

</style>
