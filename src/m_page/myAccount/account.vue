<template>
	<div class="account" ref='banner'>
	<div class="header">
      <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
  	</div>
	<div class="main-header">
		<span>My Account</span>
	</div>
	<div class="head-img">
		<el-upload
		action="https://jsonplaceholder.typicode.com/posts/"
		:class="{disabled:showto}"
		:limit='1'
		list-type='picture-card'
		:file-list="fileList"
		:auto-upload="false"
		:on-change='change'
		:on-remove='remove'
		:before-remove='beforeremove'
		>
  		<i class="el-icon-plus"></i>
		</el-upload>
	</div>
	<div class="main-headportrait" v-for="(item,index) in message" :key='index'>
		<div class="user"><span v-if="flag">{{item.username}}<img src="../../image/change.png" @click="edit"></span><el-input v-model='user' placeholder='输入昵称' v-else @blur='input' ref='inp'></el-input></div>
		<p>{{item.mobile}}</p>
	</div>
  <div ref="wrapper" class='main'>
  	<div>
		<div class="main-content">
			<div @click="mypet">
			<el-row type="flex" class="row-bg" style="height: 50px;line-height: 50px;border-bottom: solid 1px #DCDCDC;">
  		<el-col :span="21"><div class="msg"><img src="../../image/pet.png"><p>我的宠物</p></div></el-col>
  		<el-col :span="3"><div class="right"><img src="../../image/right.png"></div></el-col>
			</el-row>
			</div>
			<div @click="mysearch">
			<el-row type="flex" class="row-bg" style="height: 50px;line-height: 50px;border-bottom: solid 1px #DCDCDC;">
  		<el-col :span="21"><div class="msg"><img src="../../image/search.png"><p>我的协寻</p></div></el-col>
  		<el-col :span="3"><div class="right"><img src="../../image/right.png"></div></el-col>
			</el-row>
			</div>
			<div @click="changepassword">
			<el-row type="flex" class="row-bg" style="height: 50px;line-height: 50px;border-bottom: solid 1px #DCDCDC;">
  		<el-col :span="21"><div class="msg"><img src="../../image/changepassword.png"><p>修改密码</p></div></el-col>
  		<el-col :span="3"><div class="right"><img src="../../image/right.png"></div></el-col>
			</el-row>
			</div>
			<a href="../../../static/page/userchat.html?username=111">
			<el-row type="flex" class="row-bg" style="height: 50px;line-height: 50px;border-bottom: solid 1px #DCDCDC;">
  		<el-col :span="21"><div class="msg"><img src="../../image/Customer.png"><p>在线客服</p></div></el-col>
  		<el-col :span="3"><div class="right"><img src="../../image/right.png"></div></el-col>
			</el-row>
			</a>	
			<div @click="commonproblem">
			<el-row type="flex" class="row-bg" style="height: 50px;line-height: 50px;border-bottom: solid 1px #DCDCDC;">
  		<el-col :span="21"><div class="msg"><img src="../../image/help.png"><p>常见问题</p></div></el-col>
  		<el-col :span="3"><div class="right"><img src="../../image/right.png"></div></el-col>
			</el-row>
			</div>
			<div @click="loginauthorization">
			<el-row type="flex" class="row-bg" style="height: 50px;line-height: 50px;border-bottom: solid 1px #DCDCDC;">
  		<el-col :span="21"><div class="msg"><img src="../../image/authorization.png"><p>登录授权</p></div></el-col>
  		<el-col :span="3"><div class="right"><img src="../../image/right.png"></div></el-col>
			</el-row>
			</div>
		</div>
		<div class="out-btn">
			<el-button type="danger" plain style='margin:15px auto; display: block;' @click='out'>退出登录</el-button>
		</div>
		  <div>
  </div>
</div>
  </div>
  <v-foot :loginsuccess='loginsuccess' :loginshowflag='loginshowflag'></v-foot>
</div>
</template>
<script>
import IScroll from 'iscroll/build/iscroll-probe'
import footernav from '../../components/footernav'
import userInformation from '../myAccount/userInformation'
import {logout} from '../../api/index.js'
import {updateUserInfo} from '../../api/index.js'
import {getLoginUser} from '../../api/index.js'
import Qs from "qs";
export default {
  name: "account",
  data(){
  	return{
  		message:[{
  			'username':'',
  			'mobile':''
  		}],
  		listshow:false,
  		loginsuccess:false,
  		loginshowflag:true,
  		flag:true,
  		user:'',
  		showto:false,
  		fileList:[],
  		deleteflag:true
  	}
  },
    beforeUpdate(){
	 this.$nextTick(() => {
          this.Scroll = new IScroll(this.$refs.wrapper, {
          click: true
        })
          if(sessionStorage.getItem('login')){
          	this.loginsuccess=true
          	this.loginshowflag=false
          }
          if(this.fileList.length>0){
				this.showto=true
			}
       })
	 
  },
  mounted(){
  	     getLoginUser().then(res => {
          	console.log(res.data)
          	this.message[0].username=res.data.username
          	this.message[0].mobile=res.data.mobile
          	this.fileList.push({'url':res.data.photoUrl})
          }).catch(error => {
          	console.log(error)
          })
  },
  methods:{
  	change(file, fileList){
  		clearInterval(this.time)
    		if(fileList.length==1){
    			this.showto=true
    		}
    this.imageUrl = URL.createObjectURL(file.raw);
    var reader = new FileReader();
    reader.readAsDataURL(file.raw);
    reader.onload = function(e){ 
        this.result // 这个就是base64编码了
        this.imageUrl = this.result;
        this.src=this.result.split(',')[1]
        sessionStorage.setItem('base',this.src)
    }
    let params = Qs.stringify({picImg:sessionStorage.base})
    updateUserInfo(params).then(res => {
    	if(res.data.header.status==1000){
    		sessionStorage.removeItem('base')
    	}
    	console.log(res)
    }).catch(error=>{
    	console.log(error)
    })
  		},
		beforeremove(file, fileList){
		},
  		remove(file, fileList){
        	clearInterval(this.time)
			this.fileList.splice(0,1)
    		if(fileList.length==0){
    			this.time=setInterval(()=>{
    				this.showto=false
    			},500)
    		} 	   	
    	},
  	edit(){
  		this.flag=false
  		this.user=this.message[0].username
  	},
  	input(){
  		this.flag=true
  		if(this.user!=this.message[0].user){
  			this.message[0].username=this.user
  			 let params = Qs.stringify({nickname:this.message[0].username})
   		 	updateUserInfo(params).then(res => {
    		console.log(res)
    		}).catch(error=>{
    		console.log(error)
    		})
  		}
  		},
  	mypet(){
  		this.$router.replace({ path: '/mypet' })
  	},
  	mysearch(){
  		this.$router.replace({ path: '/mysearch' })
  	},
  	changepassword(){
  		this.$router.replace({ path: '/changepassword' })
  	},
  	commonproblem(){
  		this.$router.replace({ path: '/commonproblem' })
  	},
  	loginauthorization(){
  		this.$router.replace({ path: '/loginauthorization' })
  	},
  	out(){
  		this.$router.replace({ path: '/login' })
  		sessionStorage.removeItem('login')
  		let params = sessionStorage.getItem('token')
  		logout().then(res => {
  			console.log(res)
  		}).catch(error => {
		console.log(error)
	   })
  	}
  },
   components: {
   'v-foot':footernav,
   userInformation
  }
};
</script>
<style>
.account .el-message-box{
	width: 300px;
}
.account .el-input__inner{
	padding: 0 0;
	width: 90px;
	height: 30px;
	line-height: 30px;
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.account .el-input__inner:hover{
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.account .el-upload--picture-card{
	border-radius: 50%;
	width: 100px;
	height: 100px;
	line-height: 100px;
	position: relative;
	display: block;
	margin: auto;
}
.account .el-upload--picture-card i{
   position: absolute;
   left: 37%;
   top: 35%;
  }
.account .el-upload-list--picture-card .el-upload-list__item{
	margin: auto;
	display: block;
	border: none;
	width: 100px;
	height: 100px;
}
.account .el-upload-list--picture-card .el-upload-list__item img{
	border-radius: 50%;
	width: 100px;
	height: 100px;
}
.account .disabled .el-upload--picture-card{
    display: none;
}
.account .el-upload-list__item.is-success .el-upload-list__item-status-label{
	display: none;
}
</style>
<style scoped>
	a{
		color: black;
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
	width: 100%;
  	background: #fff;
  	color: #0ca8e3;
  	height: 40px;
  	line-height: 40px;
	position: relative;
}
.user{
	line-height: 30px;
	height: 30px;
	text-align: center;
	position: relative;
}
.user span{
	font-size: 15px;
	
}
.user img{
	position: absolute;
	width: 28px;
	height: 28px;
}
.main{
	overflow: hidden;
	position: absolute;
	bottom: 49px;
	top: 210px;
	width: 100%;
	max-width: 720px;
	touch-action: none;
}
.main-header{
 	text-align: center;
 	font-size: 15px;
 	color: #00BFFF;
 	position: relative;
 	width: 120px;
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
.main-headportrait p{
	text-align: center;
	padding: 5px 0px;
	color: 	#808080;
	font-family: "微软雅黑";
	font-size: 15px;
}
.msg p{
	font-family: "微软雅黑";
	font-size: 16px;
	padding-left: 40px;
}
.row-bg{
	position: relative;
}
.msg img{
	width: 25px;
	height: 25px;
	position: absolute;
	top: 25%;
	left: 10px;
}
.right img{
	width: 18px;
	height: 18px;
	position: absolute;
	top: 30%;
	right: 10px;
}
</style>

