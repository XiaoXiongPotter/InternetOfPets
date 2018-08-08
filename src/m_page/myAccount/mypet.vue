<template>
<div class="mypet">
 <div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
    <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
    <img src="../../image/add.png" class="add" @click="addpet"/>
    <i v-show="showflag"></i>
    <p v-show="showflag" @click="addpetto">添加宠物</p>
 </div>
 <div class="main" ref='wrapper'>
 	<ul>
 	<li v-for="(item,index) in petlist" :key='index' class="petlist" @click="petinfos(index)">
 		<div class="petimg"><img :src="item.img"/></div>
 		<div class="petmsg">
 		<p class="petname">{{item.petname}}</p>
 		<p class="petdevice">绑定设备:{{item.binddevice}}</p>
 		</div>
 	</li>
 	</ul>
 </div>
 <petinfo ref='banner' :list='petlist[index]' :index='index' @remove='remove'></petinfo>
  </div>
</template>
<script>
import IScroll from 'iscroll/build/iscroll-probe'
import petinfo from '../myAccount/petinfo'
export default {
  name: "mypet",
  data(){
  	return{
  		petlist:[{
  			'img':require('../../image/pet2.jpg'),
  			'petname':'蝴蝶',
  			'binddevice':'蓝牙计步器',
  			'petbelong':'蝴蝶犬',
  			'sex':'女',
  			'height':'30',
  			'weight':'20',
  			'birthday':'2018-02-28',
  			'haircolor':'白色',
  			'pettype':'尼古拉斯'
  		},
  		{
  			'img':require('../../image/pet1.jpg'),
  			'petname':'二哈',
  			'binddevice':'蓝牙计步器',
  			'petbelong':'哈士奇',
  			'sex':'男',
  			'height':'40',
  			'weight':'30',
  			'birthday':'2018-11-28',
  			'haircolor':'黑白',
  			'pettype':'尼古拉斯'
  		}],
  		index:'',
  		showflag:false
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
  	},
  	petinfos(index){
  		this.index=index
		this.$refs.banner.show()
  	},
  	addpet(){
		this.showflag=!this.showflag
  	},
  	addpetto(){
        this.$router.replace({ path: '/addpet' })
  	},
  	remove(index){
  		this.petlist.splice(index,1)
  	}
  },
  	components: {
   		petinfo
  	}
};
</script>
<style scoped>
.header .imgBox {
  width: 100px;
  margin: 0 auto;
}
.imgBox img {
  width: 100%;
  vertical-align: middle;
}
.header{
	display: flex;
	position: relative;
	border-bottom: solid 1px #DCDCDC;
	width: 100%;
 	background: #fff;
  	height: 40px;
  	line-height: 40px;
}
.header i{
	width: 0;
    height: 0;
    border-bottom: 20px solid black;
    border-left: 20px solid transparent;
    position: absolute;
    z-index: 10;
    top: 33px;
    right: 15px;
    
}
.header p{
	z-index: 10;
	background-color: black;
	color: white;
	font-size: 13px;
	line-height: 30px;
	width: 80px;
	text-align: center;
	height: 30px;
	position: absolute;
	top: 42px;
	right: 5px;
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
	max-width: 720px;
	top: 41px;
	bottom: 0px;
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