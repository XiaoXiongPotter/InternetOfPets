<template>
    	<div class="register">
		<el-container class="register-content">
			<el-header class="register-header">
			<router-link to='/login'><i class="el-icon-arrow-left"></i></router-link><p>用户注册</p>
			</el-header>
			<el-main class="main">
				<el-input
					placeholder="请输入邮箱"
  					v-model="email"
  					clearable
  					class="mailbox"
  					v-show="flag"
  					>
				</el-input>
				<el-button class="phone" type="text" @click="phone" v-show="flag">手机注册?</el-button>
				<span class="danger" v-show="flag4">邮箱格式不正确</span>
				<br/>
				<el-input v-model='phonenumber' placeholder="请输入手机号" class="input-with-select" v-show="flag1">
    			<el-select  slot="prepend" v-model="select" placeholder="+86" class="change">
      			<el-option label="+86" value="1"></el-option>
      			<el-option label="001" value="2"></el-option>
      			<el-option label="0049" value="3"></el-option>
    			</el-select>
  			</el-input>
  			<span class="danger" v-show="flag5">手机不正确</span>
  			<br />
  			<el-button v-show="flag1" class="get" @click="send" ref='banner' :disabled='forbidden'>{{msg}}</el-button>
				<el-input
					placeholder="输入验证码"
  					v-model="input4"
  					v-show="flag1"
  					clearable
  					class="yanzheng"
  				>
				</el-input>
  				<el-button class="phone" type="text" @click="phone" v-show="flag1">邮箱注册?</el-button>
  		</br>
  				<el-input
					placeholder="请输入密码"
  					v-model="password"
  					clearable
  					class="password"
  					type='password'
  				>
				</el-input>
				<span class="danger" v-show="flag2">密码少于6位</span>
		</br>
  				<el-input
					placeholder="再次输入密码"
  					v-model="repassword"
  					clearable
  					class="repassword"
  					type='password'
  					>
				</el-input>
				<span class="danger" v-show="flag3">密码不一致</span>
			</el-main>
			<el-footer>
			 <el-button type="danger" class="over" @click='finish()'>完成注册</el-button>
			</el-footer>
		</el-container>
	</div>
</template>
<script>
import {register} from '../../api/index.js'
export default {
  name: "register",
  data() {
    return {
      		email:'',
			password:'',
			repassword:'',
			phonenumber:'',
			input4:'',
			select:'',
			msg:'点击验证',
			timer:0,
			forbidden:false,
			flag:false,
			flag1:true,
			flag2:false,
			flag3:false,
			flag4:false,
			flag5:false
    }
  },
  methods: {
			phone () {
				this.flag = !this.flag
				this.flag1 = !this.flag1
			},
			finish(){ 
				if(this.phonenumber.length==0&&this.flag==false){
					alert('手机未填')
				}
			    else if(this.email.length==0&&this.flag==true){
					alert('邮箱未填')
				}
				else if(this.password.length==0){
					alert('密码未填')
				}
				else if(this.repassword.length==0){
					alert('密码未确认')
				}
				else if(this.flag2==true||this.flag3==true||this.flag4==true||this.flag5==true){
					alert('注册失败')
				}
				else{
					let params = {
					username: this.email,
					password: this.password,
					mobile: this.phonenumber
				}
				register(params).then(res => {
					console.log(res)
					if(res.code==200){
						alert('注册成功')
					}
					else {
						alert('注册失败')
					}
				}).catch(error => {
					console.log(error)
				})
				}
		},
		send () {
			let countdown = 60
			this.timer=setInterval(() => {
				if(countdown==0){
				this.msg='点击验证'
				countdown = 60
				clearInterval(this.timer)
				this.forbidden=false
			}
			else{
				countdown--
				this.msg='重新发送'+countdown+'S'
				this.forbidden=true
			}
			},1000)
		}
		},
		watch: {
			password(newval,oldval){
				if(newval.length<6&&newval.length>0){
					this.flag2 = true
				}
				else{
					this.flag2 = false
				}
			},
			repassword(newval,oldval){
				if(newval != this.password){
					this.flag3 = true
				}
				else if(newval == this.password||newval.length==0){
					this.flag3 = false
				}
			},
			email(val){
				let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
				if(reg.test(val)||val.length==0){
					this.flag4=false
				}else{
					this.flag4=true
				}
			},
			phonenumber(val){
				let reg1 = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
				if(reg1.test(val)||val.length==0){
					this.flag5=false
				}
				else{
					this.flag5=true
				}
			}
		}
};
</script>
<style scoped>
.register-header{
	text-align: center;
	background-color: #1E90FF;
	color: white;
	font-family: "微软雅黑";
	font-size: 20px;
	position: relative;
}
.register-header p{
	font-weight: bold;
	margin-top: 18px;
}
.el-icon-arrow-left{
	position: absolute;
	left: 5%;
	top: 50%;
	transform: translate(-5%,-50%);
}
.el-input{
	margin-top: 10px;
}
.over{
	margin-left: 35%;
}
.change{
	width: 80px;
}
a{
	color: white;
}
.get{
	width: 110px;
}
.yanzheng{
	width: 165px;
}
.danger{
	font-size: 10px;
	color: red;
}
</style>