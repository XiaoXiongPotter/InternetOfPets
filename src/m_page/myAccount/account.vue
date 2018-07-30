<template>
	<div class="account" ref='banner'>
	<v-header></v-header>
  <div ref="wrapper" class='main'>
  	<div>
  	<div class="main-header">
			<span>My Account</span>
		</div>
			<div class="head-img">
				<img :src="img" @click="changeimg"/>
			</div>
		<div class="main-headportrait" v-for="(item,index) in message" :key='index'>
			<p>{{item.user}}</p>
			<p>{{item.username}}</p>
		</div>
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
			<el-row type="flex" class="row-bg" style="height: 50px;line-height: 50px;border-bottom: solid 1px #DCDCDC;">
  		<el-col :span="21"><div class="msg"><img src="../../image/changepassword.png"><p>修改密码</p></div></el-col>
  		<el-col :span="3"><div class="right"><img src="../../image/right.png"></div></el-col>
			</el-row>
			<el-row type="flex" class="row-bg" style="height: 50px;line-height: 50px;border-bottom: solid 1px #DCDCDC;">
  		<el-col :span="21"><div class="msg"><img src="../../image/Customer.png"><p>在线客服</p></div></el-col>
  		<el-col :span="3"><div class="right"><img src="../../image/right.png"></div></el-col>
			</el-row>
			<el-row type="flex" class="row-bg" style="height: 50px;line-height: 50px;border-bottom: solid 1px #DCDCDC;">
  		<el-col :span="21"><div class="msg"><img src="../../image/help.png"><p>常见问题</p></div></el-col>
  		<el-col :span="3"><div class="right"><img src="../../image/right.png"></div></el-col>
			</el-row>
				<el-row type="flex" class="row-bg" style="height: 50px;line-height: 50px;border-bottom: solid 1px #DCDCDC;">
  		<el-col :span="21"><div class="msg"><img src="../../image/authorization.png"><p>登录授权</p></div></el-col>
  		<el-col :span="3"><div class="right"><img src="../../image/right.png"></div></el-col>
			</el-row>
		</div>
		  <div>
  </div>
</div>
  </div>
  <v-foot></v-foot>
  <userInformation ref='user'></userInformation>
</div>
</template>
<script>
import header from '../../components/header'
import footernav from '../../components/footernav'
import userInformation from '../myAccount/userInformation'
export default {
  name: "account",
  data(){
  	return{
  		'img':require('../../image/man.jpg'),
  		message:[{
  			'user':'尼古拉斯',
  			'username':'88888888'
  		}],
  		listshow:false
  	}
  },
  methods:{
  	mypet(){
  		this.$router.replace({ path: '/mypet' })
  	},
  	mysearch(){
  		this.$router.replace({ path: '/mysearch' })
  	},
  	changeimg(){
  		this.$refs.user.show()
  	}
  },
   components: {
   'v-header':header,
   'v-foot':footernav,
   userInformation
  }
};
</script>
<style scoped>
.main{
	overflow: hidden;
	position: absolute;
	bottom: 49px;
	top: 40px;
	width: 100%;
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
.head-img img{
	width: 100px;
	height: 100px;
	border-radius: 50%;
	display: block;
	margin: auto;
	margin-top: 20px;
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