<template>
<div class="commonproblem">
	 <div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
    <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
   </div>
   <div class="head-nav" ref='banner' style="touch-action: none;">
   	<ul>
   		<li  :class="{active:flag5}" @click="changepage" style="font-size: 12px;">多尼斯智能宠伴机器人</li>
   		<li :class="{active:flag6}" @click="changepage1" style="font-size: 12px;">多尼斯自动饮水器</li>
   		<li :class="{active:flag7}" @click="changepage2" style="font-size: 12px;">多尼斯智能摄像逗宠器</li>
   		<li :class="{active:flag8}" @click="changepage3" style="font-size: 12px;">多尼斯智能喂食器</li>
   		<li :class="{active:flag9}" @click="changepage4" style="font-size: 12px;">多尼斯迷你逗宠机器人</li>
   	</ul>
   </div>
   <div class="commonproblem-main" ref='wrapper' v-show="flag5" style="margin-top: 10px;">
   	<div>
   	 <div class="block">
    <el-carousel trigger="click"  arrow="always" :autoplay='false' indicator-position="none">
      <el-carousel-item v-for="item in Intelligentpetrobot" :key="item">
        <img :src="item"/>
      </el-carousel-item>
    </el-carousel>
  </div>
    <div class="Productintroduction" style="text-align: center;margin-top: 10px;color: #FF8C00;">
  	<p>产品介绍</p>
  </div>
  <div class="introduction">
  	<ul>
  		<li>通过APP与萌宠互动，丰富您和爱宠生活</li>
		<li>通过手机APP，操控智能宠伴机器人360°全方位移动</li>
		<li>720P高清夜视摄像头，所拍摄的照片和视频将安全地储存在设备中，您可以随时浏览并分享</li>
 		<li>可通过镭射激光笔与爱宠互动玩耍</li>
		<li>智能宠伴机器人的头部配有15个3.5cm的小零食盒</li>
 		<li>您可以即兴进行零食奖励</li>
 		<li>长达7天的待机时间</li>
  	</ul>
  </div>
  </div>
   </div>
   	<div class="commonproblem-main" v-show="flag6" ref='wrapper1' style="margin-top: 10px;">
   		<div>
   	   	 <div class="block">
    <el-carousel trigger="click"  arrow="always" :autoplay='false' indicator-position="none">
      <el-carousel-item v-for="item in Automaticwater" :key="item">
      	<img :src="item"/>
      </el-carousel-item>
    </el-carousel>
  </div>
    <div class="Productintroduction" style="text-align: center;margin-top: 10px;color: #FF8C00;">
  	<p>产品介绍</p>
  </div>
    <div class="introduction">
  	<ul>
  		<li>涌泉式出水口，让萌宠爱上喝水</li>
		<li>活性炭及纳米滤网、双重过滤，清除异味、过滤微小杂质，保证宠物饮水健康</li>
		<li>透明水位窗，可以实时查看水位</li>
 		<li>超静音滤水泵，水流的大小可调控，内置灯光效果</li>
		<li>不含BPA， 易装易拆易洗</li>
  	</ul>
  </div>
  </div>
   	</div>
   	<div class="commonproblem-main"  v-show="flag7" ref='wrapper2' style="margin-top: 10px;">
   		<div>
   	   	 <div class="block">
    <el-carousel trigger="click"  arrow="always" :autoplay='false'  indicator-position="none">
      <el-carousel-item v-for="item in Pamper" :key="item">
			<img :src="item"/>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="Productintroduction" style="text-align: center;margin-top: 10px;color: #FF8C00;">
  	<p>产品介绍</p>
  </div>
    <div class="introduction">
  	<ul>
  		<li>零食弹射装置，通过APP操控投射距离的远近</li>
		<li>带夜视功能的160°广角HD摄像头</li>
		<li>底部四个吸盘，保证产品的稳固性</li>
 		<li>出粮口的设计，保证每一种零食的尺寸都能使用</li>
		<li>天然竹盖，更环保，盖子周边配有橡胶圈，达到更好的密封性</li>
		<li>配有WiFi状态指示灯，麦克风及扬声器设备，可实现双向语音交流</li>
		<li>USB电源通用接口</li>
  	</ul>
  </div>
  </div>
   	</div>
   	<div class="commonproblem-main" v-show="flag8" ref='wrapper3' style="margin-top: 10px;">
   		<div>
   	   	 <div class="block">
    <el-carousel trigger="click"  arrow="always" :autoplay='false'  indicator-position="none">
      <el-carousel-item v-for="item in Feeders" :key="item">
		<img :src="item"/>
      </el-carousel-item>
    </el-carousel>
  </div>
    <div class="Productintroduction" style="text-align: center;margin-top: 10px;color: #FF8C00;">
  	<p>产品介绍</p>
  </div>
    <div class="introduction">
  	<ul>
  		<li>独有外观专利设计</li>
		<li>大容量储粮桶：6L（约6.5磅干粮），食品级ABS材质</li>
		<li>APP简易设置，定时定量，不卡粮</li>
 		<li>配套大小两个可更换的转盆，适合宠物成长变化引起的胃口及大小宠物的粮食习惯</li>
		<li>自主调节喂食量和频次，为爱宠定制健康规律的喂食计划</li>
		<li>165°夜视广角摄像头，全天候关爱萌宠</li>
		<li>防虫防潮：顶部设有干燥剂盒，保持宠物粮食的干燥</li>
		<li>USB接口及内置电池，双电源保护，保障喂食计划的定时定量进行</li>
  	</ul>
  </div>
  </div>
   	</div>
   	<div class="commonproblem-main"  v-show="flag9" ref='wrapper4' style="margin-top: 10px;">
   		<div>
      <div class="block">
    <el-carousel trigger="click"  arrow="always" :autoplay='false'   indicator-position="none">
      <el-carousel-item v-for="item in Bread" :key="item">
		<img :src="item" />
      </el-carousel-item>
    </el-carousel>
    <div class="Productintroduction" style="text-align: center;margin-top: 10px;color: #FF8C00;">
  	<p>产品介绍</p>
  </div>
    <div class="introduction">
  	<ul>
  		<li>通过APP与萌宠互动，丰富您与萌宠生活</li>
		<li>通过摄像头实时监控，记录萌宠的美妙时刻，所拍摄的照片、视频都将安全
   			地储存在设备中，您可以随时浏览并分享</li>
		<li>可通过镭射激光笔与爱宠玩耍</li>
 		<li>爱宠表现良好时，给与零食奖励</li>
  	</ul>
  </div>
  	</div>
   	</div>
   	</div>
</div>
</template>
<script>
	import IScroll from 'iscroll/build/iscroll-probe'
	export default {
		name:'commonproblem',
		data(){
			return{
				flag5:true,
				flag6:false,
				flag7:false,
				flag8:false,
				flag9:false,
				Intelligentpetrobot:[
					require('../../image/petrobot1.jpg'),
					require('../../image/petrobot2.jpg'),
					require('../../image/petrobot3.jpg'),
					require('../../image/petrobot4.jpg'),
					require('../../image/petrobot5.jpg'),
					require('../../image/petrobot6.jpg'),
					require('../../image/petrobot7.jpg'),
					require('../../image/petrobot8.jpg')
				],
				Automaticwater:[
					require('../../image/Waterdispenser1.jpg'),
					require('../../image/Waterdispenser2.jpg'),
					require('../../image/Waterdispenser3.jpg'),
					require('../../image/Waterdispenser4.jpg')
				],
				Pamper:[
					require('../../image/pamper1.jpg'),
					require('../../image/pamper2.jpg'),
					require('../../image/pamper3.jpg'),
					require('../../image/pamper4.jpg'),
					require('../../image/pamper5.jpg'),
					require('../../image/pamper6.jpg'),
					require('../../image/pamper7.jpg'),
					require('../../image/pamper8.jpg')
				],
				Feeders:[
					require('../../image/Feeders1.jpg'),
					require('../../image/Feeders2.jpg'),
					require('../../image/Feeders3.jpg'),
					require('../../image/Feeders4.jpg'),
					require('../../image/Feeders5.jpg'),
					require('../../image/Feeders6.jpg'),
					require('../../image/Feeders7.jpg'),
					require('../../image/Feeders8.jpg')
				],
				Bread:[
					require('../../image/breadinfo1.jpg'),
					require('../../image/breadinfo2.jpg'),
					require('../../image/breadinfo3.jpg'),
					require('../../image/breadinfo4.jpg'),
					require('../../image/breadinfo5.jpg'),
					require('../../image/breadinfo6.jpg'),
					require('../../image/breadinfo7.jpg'),
					require('../../image/breadinfo8.jpg')
				]
			}
		},
  	created(){
  	 this.$nextTick(() => {
         this.newScroll = new IScroll(this.$refs.banner, {
          click: true,
          scrollX:true,
          scrollY:false
        })
        this.Scroll = new IScroll(this.$refs.wrapper, {
          click: true
        })
       })
  	},
  	beforeUpdate(){
  		this.$nextTick(() => {
         this.Scroll1 = new IScroll(this.$refs.wrapper1, {
          click: true
        })
         this.Scroll2 = new IScroll(this.$refs.wrapper2, {
          click: true
        })
         this.Scroll3 = new IScroll(this.$refs.wrapper3, {
          click: true
        })
         this.Scroll4 = new IScroll(this.$refs.wrapper4, {
          click: true
        })
  		})
  	},
		methods:{
			back(){
				this.$router.replace({ path: '/myAccount' })
			},
			changepage(){
				this.flag5=true
				this.flag6=false
				this.flag7=false
				this.flag8=false
				this.flag9=false
			},
			changepage1(){
				this.flag6=true
				this.flag5=false
				this.flag7=false
				this.flag8=false
				this.flag9=false
			},
			changepage2(){
				this.flag7=true
				this.flag5=false
				this.flag6=false
				this.flag8=false
				this.flag9=false
			},
			changepage3(){
				this.flag8=true
				this.flag5=false
				this.flag7=false
				this.flag6=false
				this.flag9=false
			},
			changepage4(){
				this.flag9=true
				this.flag5=false
				this.flag7=false
				this.flag8=false
				this.flag6=false
			}
		}
	}
</script>
<style>
.el-carousel__container{
	height: 280px;
}
.commonproblem .el-carousel__container{
	width: 100%;
}
.commonproblem .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
.commonproblem .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
<style scoped>
.block img{
	width: 100%;
	height: 100%;
}
.active{
	border-bottom: 1px solid #409EFF;
	color: red;
}
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
	width: 100%;
 	background: #fff;
  	height: 40px;
  	line-height: 40px;
}
.back{
	width: 22px;
	height: 22px;
	position: absolute;
	top: 18%;
}
.head-nav{
	overflow: hidden;
}
.head-nav ul{
	display: flex;
	flex-wrap: nowrap;
	width: 720px;
	text-align: center;
}
.head-nav li{
	flex: 1;
	height: 40px;
	line-height: 40px;
}
.commonproblem-main{
	position: absolute;
	overflow: hidden;
	width: 100%;
	top: 82px;
	bottom: 0px;
	touch-action: none;
}
.commonproblem-main h4{
	padding-top: 5px;
}
.commonproblem-main p{
	font-size: 13px;
	padding-top: 10px;
	text-indent: 10px;
}
.foot-page{
	position: fixed;
	width: 100%;
	bottom: 0px;
}
.introduction ul li{
	padding: 10px;
	font-size: 13px;
	color: #409EFF;
}
</style>
