<template>
	<transition name="show">
	<div class="userInformation" v-show="showflag" ref='banner'>
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
 	<div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
 </div>
 <div class="userInformation-main">
 		<div class="head-img">
				<img :src="img" @click="change"/>
				<p>点击头像可更换照片</p>
			</div>
		<div style="height: 40px;line-height: 40px;border-bottom: solid 1px #DCDCDC;margin-top: 10px;display: flex;">
  		<div class="msg" style="flex: 2;"><p>昵称</p></div>
  		<div class="right" style="flex: 1;"><span v-if="flag" class="username">{{list[0].user}}<img src="../../image/change.png" @click="edit"></span><el-input v-model='username' placeholder='输入昵称' v-else @blur='input' ref='inp'></el-input></div>
		</div>
		<div style="height: 40px;line-height: 40px;border-bottom: solid 1px #DCDCDC;margin-top: 10px;display: flex;">
  		<div class="msg" style="flex: 2;"><p>手机号</p></div>
  		<div class="right" style="flex: 1;"><span class="phonenumber">{{list[0].phonenumber}}</span></div>
		</div>
		<div style="height: 40px;line-height: 40px;border-bottom: solid 1px #DCDCDC;margin-top: 10px;display: flex;">
  		<div class="msg" style="flex: 2;"><p>邮箱</p></div>
  		<div class="right" style="flex: 1;"><span class="email">{{list[0].email}}</span></div>
		</div>
		<div class="btn">
		<el-button type="primary" round style='margin: auto;display: block;'>保存修改</el-button>
		</div>
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
				username:'',
				flag:true,
				changeflag:false,
				user:'this.list[0].user',
				list:[{
				'user':'尼古拉斯',
				'phonenumber':'88888888',
				'email':'88888888@163.com'	
				}
				]
			}
		},
		beforeUpdate(){
			this.$nextTick(() => {
			if(this.flag==false){
          	this.$refs.inp.focus()
          }
			})	
		},
		methods:{
		back(){
  		if(this.changeflag==true){
  		  this.$message({
          message: '请保存修改',
          center: true,
          type:'error'
      })
  		}else{
  			this.showflag=false
  		}
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
  		edit(){
  		this.flag=false
  		this.username=this.list[0].user
  		},
  		input(){
  		this.flag=true
  		if(this.username!=this.list[0].user){
  		this.list[0].user=this.username
  		this.changeflag=true
  		}
  		}
		}
	}
</script>
<style>
.right .el-input__inner{
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.right .el-input__inner:hover{
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.el-message{
min-width: 50%;
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
  	color: #0ca8e3;
  	height: 40px;
  	line-height: 40px;
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
.right{
	position: relative;
}
.phonenumber{
	font-size: 15px;
	color: 	#A9A9A9;
	position: absolute;
	right: 0;	
}
.email{
	font-size: 15px;
	color: 	#A9A9A9;
	position: absolute;
	right: 0;
}
.username{
	font-size: 15px;
	color: 	#A9A9A9;
	position: absolute;
	right: 25px;
}
.right img{
position: absolute;
top: 3px;

}
.btn{
	margin-top: 30px;
}
</style>