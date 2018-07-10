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
				<span class="danger" v-show="flag4">邮箱格式不正确</span>
				<p class="danger" v-show="flag7">邮箱已被注册</p>
				<el-input v-model='phonenumber' placeholder="请输入手机号" class="input-with-select" v-show="flag1">
    			<el-select  slot="prepend" v-model="select" placeholder="中国" class="change" @change="choice">
      			<el-option  v-for="item in cities"
      			:key="item.value"
      			:label="item.label"
      			:value="item.value">
      			<span style="float: left">{{ item.label }}</span>
      			<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span></el-option>
    			</el-select>
  			</el-input>
  			<span class="danger" v-show="flag5">手机不正确</span>
  			<br />
  			<p class="danger" v-show="flag6">手机已被注册</p>
  			
  			<el-button v-show="flag1" class="get" @click="send" ref='banner' :disabled='forbidden'>{{msg}}</el-button>
				<el-input
					placeholder="输入验证码"
  					v-model="input4"
  					v-show="flag1"
  					clearable
  					class="yanzheng"
  				>
				</el-input>
				<br />
  				<el-button class="phone" type="text" @click="phone">{{msg1}}</el-button>
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
import {Verification} from '../../api/index.js'
import {registerByMobile} from '../../api/index.js'
import {registerSendEmail} from '../../api/index.js'
import {email} from '../../api/index.js'
import store from '../../store/store.js'
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
			msg1:'邮箱注册?',
			timer:0,
			count:60,
			forbidden:false,
			flag:false,
			flag1:true,
			flag2:false,
			flag3:false,
			flag4:false,
			flag5:false,
			flag6:false,
			flag7:false,
			flag8:false,
			cities: [{
          value: '86',
          label: '中国'
        }, {
          value: '001',
          label: '美国'
        }, {
          value: '0082',
          label: '韩国'
        }, {
          value: '007',
          label: '俄罗斯'
        }, {
          value: '0081',
          label: '日本'
        }, {
          value: '44',
          label: '英国'
        }]
    }
  },
  mounted(){
	if(sessionStorage.getItem('time')){
  		let count1=sessionStorage.getItem('time')
    	this.timer=setInterval(() => {		
				count1--
				this.msg='重新发送'+count1+'S'
				this.forbidden=true
				this.count=count1
				sessionStorage.setItem('time', count1)
				if(this.count==0){
				this.msg='点击验证'
				this.count = 60
				clearInterval(this.timer)
				this.forbidden=false
				sessionStorage.removeItem('time',count1)
			}
			},1000)
	}
    
  },
  methods: {
			phone () {
				this.flag1 = !this.flag1
				if(this.flag1==true){
					this.msg1='邮箱注册?'
					this.flag=false
				}else{
					this.flag=true
					this.msg1='手机注册?'
				}
			},
			finish(){ 
				if(this.flag1==true){					
					let params = {
					mobile: this.phonenumber,
					password: this.password,
					smsCode: this.input4
				}
				registerByMobile(params).then(res => {
					console.log(res.data)
					if(res.data.code==200){
						//成功后跳转页面
						this.$router.replace({ path: '/complete' })
					}
					else {						
						this.$message({
          				message: res.data.msg,
          				center: true,
          				type:'error'
        					});
        					
					}
				}).catch(error => {
					console.log(error)
				})
				}else{
					if(this.email.length>0){
			let params = this.email
			email(params).then(res => {
				console.log(res.data)
				if(res.data.data==false){
					this.flag7=false					
					let params = {
						email:this.email,
						password: this.password
					}
				registerSendEmail(params).then(res => {
					console.log(res.data)
					if(res.data.code==200){
						this.$message({
          				message: '请前往注册邮箱点击激活',
          				center: true,
          				type:'warning'
        				});	
					}else{
						this.$message({
          				message: res.data.msg,
          				center: true,
          				type:'error'
        				});					
					}
				}).catch(error => {
					console.log(error)
				})
				
				}else{
					this.flag7=true
				}				
			}).catch(error => {
				console.log(error)
			})
			}else{
				this.flag7=false
			}
				}
		},
		send () {
			
			let params = this.phonenumber
			email(params).then(res => {
				console.log(res.data)
				if(res.data.data==false){
				this.flag6=false
				this.timer=setInterval(() => {
				if(this.count==0){
				this.msg='点击验证'
				this.count = 60
				clearInterval(this.timer)
				this.forbidden=false
				sessionStorage.removeItem('time',this.count)
			}
			else{
				this.count--
				this.msg='重新发送'+this.count+'S'
				this.forbidden=true
				sessionStorage.setItem('time', this.count);
			}
			},1000)
			let params = {
				mobile:this.phonenumber+'&nativeCode='+this.select
			}
			Verification(params.mobile).then(res => {
				console.log(res)
			}).catch(error => {
				console.log(error)
			})
				}else{
					this.flag6=true
				}				
			}).catch(error => {
				console.log(error)
			})		
		},
		choice(){
			
			console.log(this.select)
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
				if(newval != this.password&&newval.length!=0){
					this.flag3 = true
				}
				else{
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
	width: 100px;
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