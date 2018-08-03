<template>
	<div class="mysearch">
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
    <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
 </div>
 <div class="mysearch-main">
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
    <el-tab-pane label="已找到" name="second">
    <ul>
 		<li v-for="(item,index) in petlist1" :key='index' class="petlist">
 		<div class="petimg"><img :src="item.img"/></div>
 		<div class="petmsg">
 		<p class="petname">{{item.petname}}</p>
 		<p class="pettime">走失:{{item.pettime}}天</p>
 		</div>
 	</li>
 	</ul>
    </el-tab-pane>
    <el-tab-pane label="已关闭" name="third">
    <ul>
 		<li v-for="(item,index) in petlist1" :key='index' class="petlist">
 		<div class="petimg"><img :src="item.img"/></div>
 		<div class="petmsg">
 		<p class="petname">{{item.petname}}</p>
 		<p class="pettime">走失:{{item.pettime}}天</p>
 		</div>
 	</li>
 	</ul>
    </el-tab-pane>
  </el-tabs>
 </div>
	</div>
</template>
<script>
	export default {
		 name: "mysearch",
		 data() {
      return {
        activeName: 'first',
        petlist:[{
        	'img':require('../../image/pet2.jpg'),
        	'petname':'蝴蝶',
        	'pettime':'5'
        }],
          petlist1:[{
        	'img':require('../../image/pet1.jpg'),
        	'petname':'二哈',
        	'pettime':'3'
        }]
      };
   		 },
		  methods:{
  		back(){
  		this.$router.replace({ path: '/myAccount' })
  		},
  		handleClick(tab, event) {
//      console.log(tab, event);
      	}
  		}
	}
</script>
<style>
.mysearch-main .el-tabs__nav{
	width: 100%;
	display: flex;
}
.mysearch-main .el-tabs__active-bar{
	height: 1px;
	width: 40px;
}
.mysearch-main #tab-first{
	flex: 1;
	text-align: center;
}
.mysearch-main #tab-second{
	flex: 1;
	text-align: center;
}
.mysearch-main #tab-third{
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
	width: 100%;
  	background: #fff;
  	color: #0ca8e3;
  	height: 40px;
  	line-height: 40px;
}
.header .imgBox {
  width: 100px;
  margin: 0 auto;
}
.imgBox img {
  width: 100%;
  vertical-align: middle;
}
.back{
	width: 22px;
	height: 22px;
	position: absolute;
	top: 18%;
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
