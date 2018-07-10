<template>
	<div class="forgetpassword">
		<el-container>
			<el-header class='forgetpassword-header'>
				<router-link to='/login'><i class="el-icon-arrow-left"></i></router-link><p>找回密码</p>
			</el-header>
			<el-main>
				<el-input v-model='phonenumber' placeholder="请输入手机号" class="input-with-select"  v-show="flag">
    			<el-select  slot="prepend" v-model="select" placeholder="+86" class="change">
      			<el-option label="+86" value="1"></el-option>
      			<el-option label="001" value="2"></el-option>
      			<el-option label="0049" value="3"></el-option>
    			</el-select>
  		</el-input>
  		<span class="danger" v-show="flag4">手机号未注册</span>
  		<br />
  				<el-button  class="get" @click="send" :disabled='forbidden' v-show="flag">{{msg}}</el-button>
				<el-input
					placeholder="输入验证码"
  					v-model="input4"
  					clearable
  					class="yanzheng"
  					v-show="flag"
  				>
				</el-input>
				<el-input
					placeholder="请输入邮箱"
  					v-model="input2"
  					clearable
  					v-show="flag5"  					
  					>
				</el-input>
				<span class="danger" v-show="flag6">邮箱格式不正确</span>
				<p class="danger" v-show="flag7">邮箱未注册</p>
				<br />
				<el-button type="text" @click="email">{{msg1}}</el-button>
				<el-input
					placeholder="重置密码"
					v-model="respect"
					clearable
					type="password"
					v-show="flag8"
					>				
				</el-input>
				<span class="danger" v-show="flag1">密码不能少于6位</span>
				<el-input
					placeholder="确认密码"
					v-model="input1"
					clearable
					type="password"
					v-show="flag8"
					>				
				</el-input>
				<span class="danger" v-show="flag2">密码不一致</span>
			</el-main>
			<el-footer>
				<el-button type="danger" class="over" @click="wan">
					{{msg2}}
				</el-button>
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	import {updatePasswordByMobile} from '../../api/index.js'
	import {Verification} from '../../api/index.js'
	import {email} from '../../api/index.js'
	import {sendreset} from '../../api/index.js'
	import store from '../../store/store.js'
	export default{
		name: "forgetpassword",
		data () {
			return{
				msg:'点击验证',
				msg1:'邮箱找回?',
				msg2:'完成',
				input2:'',
				input4:'',
				forbidden:false,
				phonenumber:'',
				select:'',
				input1:'',
				respect:'',
				countdown:60,
				flag: true,
				flag1:false,
				flag2:false,
				flag4:false,
				flag5:false,
				flag6:false,
				flag7:false,
				flag8:true,
				flag9:false
			}
		},
		mounted(){
				if(sessionStorage.getItem('time')){
  				let count1=sessionStorage.getItem('time')
    			this.timer=setInterval(() => {		
				count1--
				this.msg='重新发送'+count1+'S'
				this.forbidden=true
				this.countdown=count1
				sessionStorage.setItem('time', count1)
				if(this.countdown==0){
				this.msg='点击验证'
				this.countdown = 60
				clearInterval(this.timer)
				this.forbidden=false
				sessionStorage.removeItem('time',count1)
			}
			},1000)
	}
		},
		methods :{
			send () {
			if(this.phonenumber.length>0){
			let params = this.phonenumber
			email(params).then(res => {
				console.log(res.data)
				if(res.data.data==false){
					this.flag4=true					
				}
				else{
					this.flag4=false
				if(this.phonenumber.length>0&&this.flag4==false){				
					this.timer=setInterval(() => {
				if(this.countdown==0){
					this.msg='点击验证'
					this.countdown = 60
					clearInterval(this.timer)
					this.forbidden=false
					sessionStorage.removeItem('time',this.countdown)
			}
			else{
					this.countdown--
					this.msg='重新发送'+this.countdown+'S'
					this.forbidden=true
					sessionStorage.setItem('time', this.countdown);
			}
			},1000)
			let params = {
				mobile:this.phonenumber
			}
			Verification(params.mobile).then(res => {			
				console.log(res)
			}).catch(error => {
				console.log(error)
			})
			}
				}
			}).catch(error => {
				console.log(error)
			})
			}
			else{
				this.flag4=false
			}
		},
		wan(){
			if(this.flag==true){			
				let params = {
				mobile:this.phonenumber,
				password:this.respect,
				smsCode:this.input4
			}
			updatePasswordByMobile(params).then(res => {
				if(res.data.code==200){
					this.$router.replace({ path: '/resetsuccess' })
				}else{
					this.$message({
          				message: res.data.msg,
          				center: true,
          				type:'error'
        					});
				}
				console.log(res.data)
			}).catch(error => {
				console.log(error)
			})
			
			}
			else{
			if(this.input2.length>0){
			let params = this.input2
			email(params).then(res => {
				if(res.data.data==true){
					this.flag7=false
					if(this.flag6==false&&this.flag7==false&&this.input2.length>0){
					let params = {
						username:this.input2
					}
					sendreset(params).then(res => {
						console.log(res.data)						
						this.$message({
          				message: '请前往邮箱进行验证',
          				center: true,
          				type:'warning'
        					});
					}).catch(error => {
						console.log(error)
					})				
				}else{
					 this.$message({
          				message: '邮箱未填写',
          				center: true,
          				type:'error'
        					});
				}
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
		email(){
			this.flag=!this.flag
			if(this.flag==false){
				this.msg1='手机找回?'
				this.flag5=true
				this.flag8=false
				this.msg2='下一步'
			}else{
				this.msg1='邮箱找回?'
				this.flag5=false
				this.flag8=true
				this.msg2='完成'
			}
		}
		},
		watch: {
			respect(val){
				if(val.length<6&&val.length>0){
					this.flag1=true
				}else{
					this.flag1=false
				}
			},
			input1(val){
				if(val!=this.respect&&val.length!=0){
					this.flag2=true
				}else{
					this.flag2=false
				}
			},
			input2(val){
				let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
				if(reg.test(val)||val.length==0){
					this.flag6=false
				}else{
					this.flag6=true
				}
			}
		}
	}
</script>

<style scoped>

.forgetpassword-header{
	text-align: center;
	background-color: #1E90FF;
	color: white;
	font-family: "微软雅黑";
	font-size: 20px;
	position: relative;
}
.forgetpassword-header p{
	font-weight: bold;
	margin-top: 18px;
}
.el-icon-arrow-left{
	position: absolute;
	left: 5%;
	top: 50%;
	transform: translate(-5%,-50%);
}
a{
	color: white;
}
.yanzheng{
	width: 165px;
}
.get{
	width: 110px;
}
.change{
	width: 80px;
}
.el-input{
	margin-top: 10px;
}
.over{
	position: absolute;
	left: 50%;
	transform: translate(-50%);
}
.danger{
	font-size: 10px;
	color: red;
}
</style>