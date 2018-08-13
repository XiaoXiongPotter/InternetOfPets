<template >
  <div id="app">
  	<router-view v-if='isRouterAlive'></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  provide(){
  	return{
  		reload: this.reload
  	}
  },
  data(){
  	return{
  		isRouterAlive: true
  	}
  },
  methods:{
  	reload(){
  		this.isRouterAlive=false
  		this.$nextTick(()=>{
  			this.isRouterAlive=true
  		})
  	}
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.el-message-box{
width: 300px;
}
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  max-width: 720px;
  display: block;
  margin: 0 auto;
}
</style>
