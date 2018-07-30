<template>
<div class="mypet">
 <div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
    <span>DOGNESS</span>
    <img src="../../image/add.png" class="add"/>
 </div>
 <div class="main" ref='wrapper'>
 	<ul>
 	<li v-for="(item,index) in petlist" :key='index' class="petlist">
 		<div class="petimg"><img :src="item.img"/></div>
 		<div class="petmsg">
 		<p class="petname">{{item.petname}}</p>
 		<p class="petdevice">绑定设备:{{item.binddevice}}</p>
 		</div>
 	</li>
 	</ul>
 </div>
  <v-foot></v-foot>
  </div>
</template>
<script>
import IScroll from 'iscroll/build/iscroll-probe'
import footernav from '../../components/footernav'
export default {
  name: "mypet",
  data(){
  	return{
  		petlist:[{
  			'img':require('../../image/pet2.jpg'),
  			'petname':'蝴蝶',
  			'binddevice':'蓝牙计步器'
  		},
  		{
  			'img':require('../../image/pet2.jpg'),
  			'petname':'蝴蝶',
  			'binddevice':'蓝牙计步器'
  		}]
  	}
  },
  created(){
  	 this.$nextTick(() => {
          this.Scroll = new IScroll(this.$refs.wrapper, {
          click: true
        })
       })
  },
  methods:{
  	back(){
  		this.$router.replace({ path: '/myAccount' })
  	}
  },
   components: {
   'v-foot':footernav
  }
};
</script>
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
	border-bottom: solid 1px #DCDCDC;
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
.main{
	position: absolute;
	overflow: hidden;
	width: 100%;
	top: 41px;
	bottom: 49px;
	touch-action: none;
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
.petdevice{
	padding-top: 30px;
	font-family: "微软雅黑";
	font-size: 14px;
}
</style>