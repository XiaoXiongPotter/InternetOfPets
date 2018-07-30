<template>
	<div class="mysearch">
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
    <span>DOGNESS</span>
    <img src="../../image/add.png" class="add" @click="jump"/>
 </div>
 <div class="main">
 	<el-tabs v-model="activeName"  @tab-click="handleClick">
    <el-tab-pane label="找寻中" name="first">
    	<ul>
 	<li v-for="(item,index) in petlist" :key='index' class="petlist">
 		<div class="petimg"><img :src="item.img"/></div>
 		<div class="petmsg">
 		<p class="petname">{{item.petname}}</p>
 		<p class="pettime">走失:{{item.pettime}}天</p>
 		</div>
 	</li>
 	</ul>
    </el-tab-pane>
    <el-tab-pane label="已找到" name="second">已找到</el-tab-pane>
    <el-tab-pane label="已关闭" name="third">已关闭</el-tab-pane>
  </el-tabs>
 </div>
 <v-foot></v-foot>
 		 <releaseSearch ref='release'></releaseSearch>
	</div>
</template>
<script>
	import footernav from '../../components/footernav'
	import releaseSearch from '../finder/releaseSearch'
	export default {
		 name: "mysearch",
		 data() {
      return {
        activeName: 'first',
        petlist:[{
        	'img':require('../../image/pet2.jpg'),
        	'petname':'蝴蝶',
        	'pettime':'5'
        }]
      };
   		 },
		  methods:{
  		back(){
  		this.$router.replace({ path: '/myAccount' })
  		},
  		jump(){
		this.$refs.release.show()
  		},
  		handleClick(tab, event) {
        console.log(tab, event);
      	}
  		},
		 components: {
   		'v-foot':footernav,
   		releaseSearch
  			}
	}
</script>
<style>
.el-tabs__nav{
	width: 100%;
	display: flex;
}
.el-tabs__active-bar{
	height: 1px;
	width: 40px;
}
#tab-first{
	flex: 1;
	text-align: center;
}
#tab-second{
	flex: 1;
	text-align: center;
}
#tab-third{
	flex: 1;
	text-align: center;
}
</style>
<style scoped>
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
.add{
	width: 22px;
	height: 22px;
	position: absolute;
	top: 18%;
	right: 0;
}
.petlist{
	display: flex;
	border-bottom: solid 1px #DCDCDC;
}
.petimg{
	flex: 1;
}
.petimg img{
	width: 70px;
	height: 70px;
	padding: 15px 10px;
}
.petmsg{
	flex: 2;
	padding: 15px 0px;
}
.petname{
	font-family: "微软雅黑";
	font-size: 20px;
	font-weight: bold;
	color: #4169E1;
}
.pettime{
	padding-top: 30px;
	font-family: "微软雅黑";
	font-size: 14px;
}
</style>
