<template>
	<transition name="show">
	<div class="userInformation" v-show="showflag" ref='banner'>
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
    <span>DOGNESS</span>
 </div>
 <div class="main">
 		<div class="head-img">
				<img :src="img" @click="change"/>
				<p>点击可修改头像</p>
			</div>
		<el-row type="flex" class="row-bg" style="height: 40px;line-height: 40px;border-bottom: solid 1px #DCDCDC;margin-top: 10px;">
  		<el-col :span="17"><div class="msg"><p>昵称</p></div></el-col>
  		<el-col :span="7"><div class="right"><span>{{user}}</span><img src="../../image/change.png" @click="changeuser"></div></el-col>
		</el-row>
		<el-row type="flex" class="row-bg" style="height: 40px;line-height: 40px;border-bottom: solid 1px #DCDCDC;margin-top: 10px;">
  		<el-col :span="18"><div class="msg"><p>手机号</p></div></el-col>
  		<el-col :span="6"><div class="right"><span>{{phonenumber}}</span></div></el-col>
		</el-row>
		<el-row type="flex" class="row-bg" style="height: 40px;line-height: 40px;border-bottom: solid 1px #DCDCDC;margin-top: 10px;">
  		<el-col :span="13"><div class="msg"><p>邮箱</p></div></el-col>
  		<el-col :span="11"><div class="right"><span>{{email}}</span></div></el-col>
		</el-row>
 </div>
	 <transition name='fade'>
    	<ul v-show="listshow" class="list">
    		<li>从手机相册选择</li>
    		<li @click="cancel">取消</li>
    	</ul>
    </transition>
       <transition name="fade">
      <div class="mask" v-show="listshow"></div>
    </transition>
	</div>
	</transition>
</template>
<script>
	export default {
		name:'releaseSearch',
		data(){
			return{
				'img':require('../../image/man.jpg'),
				showflag:false,
				listshow:false,
				user:'尼古拉斯',
				phonenumber:'88888888',
				email:'88888888@163.com'
			}
		},
		methods:{
			back(){
  		this.showflag=false
  		},
  		show(){
  			this.showflag=true
  		},
  	cancel(){
  		this.listshow=false
  	},
  	change(){
  		this.listshow=true
  	},
  	changeuser(){
  		   this.$prompt('请输入新昵称', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
        	this.user=value
        }).catch(() => {});
      }
		}
	}
</script>
<style>
.el-message-box{
	width: 90%;
	position: absolute;
	top: 30%;
	left: 5%;
}
</style>
<style scoped>
.userInformation{
	position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
	width: 100%;
    z-index: 30;
    background-color: #fff;
    transition: all .2s linear;
}
.userInformation.show-enter, .userInformation.show-leave-to{
	      transform: translateX(100%);
}
.head-img p{
	text-align: center;
	font-size: 14px;
	padding-top: 5px;
}
.head-img img{
	width: 100px;
	height: 100px;
	border-radius: 50%;
	display: block;
	margin: auto;
	margin-top: 20px;
}
.list{
	position: absolute;
	left: 0;
	bottom: -82px;
 	z-index: 100;
 	width: 100%;
 	text-align: center;
  transition: all .4s;
  transform: translateY(-100%);
}
 .list.fade-enter, .list.fade-leave-to{
 	transform: translateY(0);
 }
.list li{
	height: 40px;
  line-height: 40px;
	background-color: #f3f5f7;
	border-bottom: solid 1px #DCDCDC;
}
.mask{
	    position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(7, 17, 27, 0.6);
      z-index: 10;
      transition: all 0.4s;
}
.mask.fade-enter, .mask.fade-leave-to{
	opacity: 0;
	background-color: rgba(7, 17, 27, 0);
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
.msg p{
	font-family: "微软雅黑";
	font-size: 16px;
	padding-left: 20px;
}
.row-bg{
	position: relative;
}
.right span{
	font-size: 15px;
	color: 	#A9A9A9;
}
.right img{
	position: absolute;
	top: 10%;
	right: 3px;
}
</style>