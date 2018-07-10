<template>
    <div class="sign" ref="sign">
		<div class="sign-content">
			<el-header class="sign-header">
				<p>用户登录</p>
			</el-header>
			<el-main class="sign-msg">
				<el-input
					placeholder="用户名"
  					v-model="username"
  					clearable
  					class="username">
				</el-input>
				<el-input
					placeholder="密码"
					type="password"
					v-model="password"
  					clearable
  					class="password">
				</el-input>
				<div class="ver">
					<el-input
					placeholder="请输入验证码"
  					v-model="code"
  					v-show='flag'
  					clearable
  					class="Verification">
				</el-input>
				<img v-show="flag" :src="img" class="image" @click="change" ref="banner"/>
				</div>
			<br />
				<el-checkbox class="check" v-model="checked">记住密码</el-checkbox>
				<el-button class="forget" type="text"><router-link to="/forgetpassword">忘记密码?</router-link></el-button>
				<br/>
				<div class="btn">
				<el-button class="login" type="primary" @click="login">登录</el-button>
				<el-button class="set" type="danger"><router-link to="/register">注册</router-link></el-button>
				</div>
			</el-main>
			<el-footer class="footer">
				<p class="three">第三方软件</p>
					<ul>
					<li><img src="@/image/qq.png"><p>QQ</p></li>
					<li><img src="@/image/wechat.png"><p>微信</p></li>
					<li><img src="@/image/sina.png"><p>新浪微博</p></li>
				</ul>
			</el-footer>
	</div>
	</div>
</template>
<script>
import {userLogin} from '../../api/index.js'
import {systemInit} from '../../api/index.js'
import {getimg} from '../../api/index.js'
import store from '../../store/store.js'
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      code:'',
      count:0,
      checked: false,
      flag:false,
      img:'',
      num: 1
    };
  },
  mounted() {
  		systemInit().then(res => {
		 let data = res.headers["x-auth-token"];
		 if(data!=undefined){
		 	this.$store.commit('set_token', data);
		 }        
	}).catch(error => {
		console.log(error)
	})
  	
    if(localStorage){
    	this.username=localStorage.getItem('username');
    	this.password=localStorage.getItem('password');
    }
  },
  methods: {
    login() {
      let params = {
        username: this.username,
        password: this.password,
        imageCode: this.code
      }
      userLogin(params).then(res => {
      	
//根据store中set_token方法将token保存至localStorage/sessionStorage中，data["Authentication-Token"]，获取token的value值
      	console.log(res.data)
        if(res.data.code==200){
        	alert('登录成功')
//      this.$router.replace({ path: '/register' })
}
        else{
		this.$message({
          message: res.data.msg,
          center: true,
          type:'error',
        });
        	if(res.data.code==4001){        	
			this.flag=true
			getimg().then(res => {
				this.img='data:image/jpeg;base64,'+res.data.data
			}).catch(error => {
				console.log(error)
			})
			}
				
		console.log(res)
        }
      }).catch(error => {
      	console.log(error)
      });
      if(this.checked==true){
      	localStorage.setItem('username',this.username);
      	localStorage.setItem('password',this.password);
      }
    },
    change(){
    	getimg().then(res => {
				this.img='data:image/jpeg;base64,'+res.data.data
			}).catch(error => {
				console.log(error)
			})
    }
  }
};
</script>
<style scoped>
.sign-header{
	text-align: center;
	background-color: #1E90FF;
	color: white;
	font-family: "微软雅黑";
	font-size: 20px;
}
.sign-header p{
	padding-top: 20px;
	font-weight: bold;
}
.el-input{
	margin-top: 10px;
}
.check{
	margin-top: 10px;
}
.forget{
	position: absolute;
	right: 15px;
}
.forget a{
	color: #409EFF;
}
.btn{
	width: 155px;
	height: 40px;
	position: absolute;
	left: 50%;
	margin-top: 20px;
	transform: translate(-50%);
}
.sign-msg{
	height: 300px;
}
.set a{
	color: white;
}
.Verification{
	width: 50%;
}
.three {
  	text-align: center;	
  	color: #708090;
  	position: relative;
}
.three:after{
	content: '';
	border-bottom: solid 1px #dcdcdc;
	width: 35%;
	display: block;
	position: absolute;
	top: 50%;
	right: 0;
}
.three:before{
	content: '';
	border-bottom: solid 1px #dcdcdc;
	width: 35%;
	display: block;
	position: absolute;
	top: 50%;
	left: 0;
}
.footer ul{
	display: flex;
	margin-top: 50px;
}
.footer ul li{
	flex: 1;
	position: relative;
}
.footer ul li img{
	width: 50px;
	height: 50px;
	position: absolute;
	left: 50%;
	transform: translate(-50%);
}
.footer ul li p{
	font-size: 15px;
	text-align: center;
	margin-top: 50px;
}
.ver{
	position: relative;
}
.image{
	position: absolute;
	right: 0%;
	top:70%;
	transform: translate(0%,-70%);
}
</style>