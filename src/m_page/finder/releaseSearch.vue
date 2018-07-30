<template>
  <transition name="show">
<div class="releaseSearch" v-show="showflag" ref='banner'>
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
    <span>DOGNESS</span>
 </div>
 <div class="main">
 	<p>走失宠物</p>
 	<el-input v-model="petname"></el-input>
 </div>
</div>
</transition>
</template>
<script>

	export default {
			name:'releaseSearch',
			data(){
				return{
					showflag:false,
					petname:''
				}
			},
			methods:{
  		back(){
  		this.showflag=false
  		},
  		show(){
  			this.showflag=true
  		}
  		}
		}
</script>
<style scoped>
.releaseSearch{
	position: fixed;
    left: 0;
    top: 0;
    bottom: 49px;
	width: 100%;
    z-index: 30;
    background-color: #fff;
    transition: all .2s linear;
}
.releaseSearch.show-enter, .releaseSearch.show-leave-to{
	      transform: translateX(100%);
}
.header span{
  width: 100%;
  text-align: center;
  background: #fff;
  color:#0CA8E3;
  height: 40px;
  line-height: 40px;
  flex: 1;
}
.header{
	display: flex;
	position: relative;
}
.back{
	width: 22px;
	height: 22px;
	position: absolute;
	top: 18%;
}
</style>