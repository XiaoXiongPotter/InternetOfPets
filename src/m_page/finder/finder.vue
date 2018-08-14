<template>
	<div class="finder">
		<div class="header">
      <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
  	</div>
	<el-main style="padding: 0;">
		<div class="main-header">
			<span>Finder</span>
		</div>
		<div class="main-nav">
			<div class="main-nav-left" 	@click="distance"><span>距离</span><img :src="src1"/></div>
			<div class="main-nav-right" @click="time"><span>时间</span><img :src="src2"/></div>
		</div>
		<div class="main-content" ref="wrapper">
			<ul>
				<li v-for="(item,index) in list" :key='index'>
					<img :src='item.img'>
					<div class="message">
						<p class="petname">{{item.petname}}</p>
						<span>{{item.petvariety}}</span>,<span>{{item.time}}</span>
						<p class="place">{{item.place}}</p>
					</div>
					<div class="reward">
						<div class="reward-title"><span>赏金</span></div>
						<p>{{item.money}}</p>
						<div class="reward-btn"><el-button size="mini" style="color: #FF8C00;padding: 3px 3px;position: absolute;left: 15%;">联系主人</el-button></div>
					</div>
				</li>
			</ul>
		</div>
	</el-main>
	<v-foot :loginsuccess='loginsuccess' :loginshowflag='loginshowflag'></v-foot>
	</div>
</template>
<script>
	import IScroll from 'iscroll/build/iscroll-probe'
	import footernav from '../../components/footernav'
	export default{
		name: "finder",
		data(){
			return{
				list:[
				{
				 'img':require('../../image/pet1.jpg'),
				 'petname':'二哈',
				 'petvariety':'哈士奇',
				 'time':'2018-06-03',
				 'place':'东莞市南城汽车站附近走失',
				 'money':'￥500'
				},
				{
				 'img':require('../../image/pet2.jpg'),
				 'petname':'蝴蝶',
				 'petvariety':'蝴蝶犬',
				 'time':'2018-06-10',
				 'place':'东莞市南城汽车站附近走失',
				 'money':'￥500'
				}
				],
				src1:require('../../image/icon-up.png'),
				srcchange1:false,
				src2:require('../../image/icon-up.png'),
				srcchange2:false,
				loginsuccess:false,
				loginshowflag:true
			}
		},
  created(){
	 this.$nextTick(() => {
          this.Scroll = new IScroll(this.$refs.wrapper, {
          click: true
        })
       if(sessionStorage.getItem('login')){
          	this.loginsuccess=true
          	this.loginshowflag=false
         }
       })  
  },
		methods:{
			distance(){
				this.srcchange=!this.srcchange
				if(this.srcchange==true){
					this.src1=require('../../image/icon-down.png')
				}else{
					this.src1=require('../../image/icon-up.png')
				}
			},
				time(){
				this.srcchange2=!this.srcchange2
				if(this.srcchange2==true){
					this.src2=require('../../image/icon-down.png')
				}else{
					this.src2=require('../../image/icon-up.png')
				}
			},
			getPosition () {
  			return new Promise((resolve, reject) => {
    		if (navigator.geolocation) {
      		navigator.geolocation.getCurrentPosition(function (position) {
        		let latitude = position.coords.latitude
        		let longitude = position.coords.longitude
        		let data = {
          		latitude: latitude,
          		longitude: longitude
        		}
        		resolve(data)
      		}, function () {
        	reject(arguments)
      		})
   		 } else {
      		reject('你的浏览器不支持当前地理位置信息获取')
    		}
  			})
		}
		},
		 components: {
   			'v-foot':footernav
  		}
	}
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
	width: 100%;
  	background: #fff;
  	color: #0ca8e3;
  	height: 40px;
  	line-height: 40px;
	position: relative;
}
.main-header{
 	text-align: center;
 	font-size: 15px;
 	color: #00BFFF;
 	position: relative;
 	width: 100px;
 	left: 50%;
 	transform: translate(-50%);
}
.main-header span::before{
	content: '';
	border-top:solid 1px #0000FF;
	width: 15px;
	display: block;
	position: absolute;
	top: 50%;
	left: 0;
}
.main-header span::after{
	content: '';
	border-top:solid 1px #0000FF;
	width: 15px;
	display: block;
	position: absolute;
	top: 50%;
	right: 0;
}
.main-nav{
	display: flex;
	border-bottom: solid 1px #C0C0C0;
	position: relative;
}
.main-nav-left{
	flex: 1;
	height: 50px;
	line-height: 50px;
	text-align: center;
	color: #696969;
}
.main-nav-left::after{
	border-right: solid 1px #C0C0C0;
	content: '';
	display: block;
	position: absolute;
	top: 40%;
	left: 50%;
	height: 15px;
}
.main-nav-right{
	flex: 1;
	height: 50px;
	line-height: 50px;
	text-align: center;
	color: #696969;
}
.main-nav-left img{
	vertical-align: middle;
}
.main-nav-right img{
	vertical-align: middle;
}
.main-content{
	position: absolute;
	top: 106px;
	bottom: 49px;
	width: 100%;
	overflow: hidden;
	touch-action: none;
	max-width: 720px;
}
.main-content ul li{
	display: flex;
	border-bottom: solid 1px #C0C0C0;
}
.main-content ul li img{
	width: 70px;
	height: 70px;
	padding: 15px 10px;
}
.message{
	flex: 1;
	padding: 15px 0px;
}
.message span{
	font-size: 13px;
}
.place{
	font-size: 13px;
	padding-top: 10px;
}
.petname{
	font-weight: bold;
	font-size: 20px;
	color: #4169E1;
	padding-bottom: 10px;
} 
.reward{
	width: 70px;
	padding: 15px 0px;
}
.reward p{
	color: #FF8C00;
	text-align: center;
	padding: 12px 0px;
}

.reward-title{
	font-size: 10px;
	text-align: center;
}
.reward-btn{
	position: relative;
}

</style>
