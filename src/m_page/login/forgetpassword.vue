<template>
	<div class="forgetpassword">
		<el-container>
			<el-header class='forgetpassword-header'>
				<router-link to='/login'><i class="el-icon-arrow-left"></i></router-link><p>找回密码</p>
			</el-header>
			<el-main>
				<el-input v-model='phonenumber' placeholder="请输入手机号" class="input-with-select">
    			<el-select  slot="prepend" v-model="select" placeholder="+86" class="change">
      			<el-option label="+86" value="1"></el-option>
      			<el-option label="001" value="2"></el-option>
      			<el-option label="0049" value="3"></el-option>
    			</el-select>
  		</el-input>
  				<el-button  class="get" @click="send" :disabled='forbidden'>{{msg}}</el-button>
				<el-input
					placeholder="输入验证码"
  					v-model="input4"
  					clearable
  					class="yanzheng"
  				>
				</el-input>
				<el-input
					placeholder="重置密码"
					v-model="respect"
					clearable
					type="password"
					>				
				</el-input>
				<el-input
					placeholder="确认密码"
					v-model="input1"
					clearable
					type="password"
					>				
				</el-input>
			</el-main>
			<el-footer>
				<el-button type="danger" class="over" @click="wan">
					完成
				</el-button>
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	import {forget} from '../../api/index.js'
	export default{
		name: "forgetpassword",
		data () {
			return{
				msg:'点击验证',
				input4:'',
				forbidden:false,
				phonenumber:'',
				select:'',
				input1:'',
				respect:''
			}
		},
		methods :{
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
		},
		wan(){
			let params = {
				id:'1',
				password:this.respect,
				smsCode:this.input4
			}
			forget(params).then(res => {
				console.log(res)
			}).catch(error => {
				console.log(error)
			})
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
</style>