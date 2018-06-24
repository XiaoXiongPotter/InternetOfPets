<template>
	<div class="register">
		<el-container class="register-content">
			<el-header class="register-header">
			<p>用户注册</p>
			</el-header>
			<el-main class="main">
				<span v-show="flag">邮箱:</span><el-input
					placeholder="请输入邮箱"
  					v-model="input10"
  					clearable
  					class="mailbox"
  					v-show="flag"
  					>
				</el-input>
				<el-button class="phone" type="text" @click="phone" v-show="flag">手机注册?</el-button>
				<span class="danger" v-show="flag4">邮箱格式不正确</span>
				<br/>
				<span v-show="flag1" class="phone-txt">手机:</span>
				<el-input v-model='input3' placeholder="请输入手机号" class="input-with-select" v-show="flag1">
    			<el-select  slot="prepend" v-model="select" placeholder="CN" class="change">
      			<el-option label="CN" value="1"></el-option>
      			<el-option label="US" value="2"></el-option>
      			<el-option label="EU" value="3"></el-option>
    			</el-select>
  			</el-input>
  			<span class="danger" v-show="flag5">手机不正确</span>
  				<el-button class="phone" type="text" @click="phone" v-show="flag1">邮箱注册?</el-button>
  			</br>
  			<span>密码:</span>
  				<el-input
					placeholder="请输入密码"
  					v-model="input1"
  					clearable
  					class="password"
  					type='password'
  				>
				</el-input>
				<span class="danger" v-show="flag2">密码少于6位</span>
			</br>
				<span>确认密码:</span>
  				<el-input
					placeholder="再次输入密码"
  					v-model="input2"
  					clearable
  					class="repassword"
  					type='password'
  					>
				</el-input>
				<span class="danger" v-show="flag3">密码不一致</span>
			</el-main>
			<el-footer>
			 <el-button type="danger" class="over" @click='finish()'>完成注册</el-button>
			</br>
			<el-button type="text"><router-link to='/sign'><<返回登录页面</router-link></el-button>
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	export default{
		name: 'register',
		data () {
			return {
			input10:'',
			input1:'',
			input2:'',
			input3:'',
			select:'',
			flag:true,
			flag1:false,
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
				if(this.input10.length==0&&this.flag==true){
					alert('邮箱未填')
				}
				else if(this.input1.length==0){
					alert('密码未填')
				}
				else if(this.input2.length==0){
					alert('密码未确认')
				}
				else if(this.input3.length==0&&this.flag==false){
					alert('手机未填')
				}
				else if(this.flag2==true||this.flag3==true||this.flag4==true||this.flag5==true){
					alert('注册失败')
				}
				else{
//					this.$http.post("http://192.168.0.136:8080/petUser",{username:this.input10},{emulateJSON:true}).then(
//          function (res) {
//              // 处理成功的结果
//              console.log(res)
//          },function (res) {
//          // 处理失败的结果
//          console.log('122')
//          }
//      )
				}
			}
		},
		watch: {
			input1(newval,oldval){
				if(newval.length<6&&newval.length>0){
					this.flag2 = true
				}
				else{
					this.flag2 = false
				}
			},
			input2(newval,oldval){
				if(newval != this.input1){
					this.flag3 = true
				}
				else if(newval == this.input1||newval.length==0){
					this.flag3 = false
				}
			},
			input10(val){
				let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
				if(reg.test(val)||val.length==0){
					this.flag4=false
				}else{
					this.flag4=true
				}
			},
			input3(val){
				let reg1 = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
				if(reg1.test(val)||val.length==0){
					this.flag5=false
				}
				else{
					this.flag5=true
				}
			}
		}
	}
</script>

<style scoped>
a{
	text-decoration: none;
	
}
.register{
	height: 950px;
	background-image: url("../image/timg2.jpg");
}
@media screen and (max-width: 768px){
	.register{
	height: 0px;
	}
}
.register-content{
	width:400px;
	height:400px;
	background-color:white;
	position: absolute;
	left:20%;
	top:50%;
	transform:translate(-20%,-50%);
	border-radius: 10px;
}
.register-header p{
	text-align: center;
	font-size: 20px;
	font-weight: bold;
	font-family: "微软雅黑";
	padding-top: 15px;
}
.mailbox{
	width: 270px;
	margin-left: 30px;
}
.phone{
	margin-left: 70px;
}
.input-with-select{
	width: 270px;
	margin-left: 30px;
}
.change{
	width: 80px;
}
.password{
	width: 270px;
	margin-left: 30px;
}
.repassword{
	margin-top: 10px;
	width: 270px;
}
.over{
	margin-left: 40%;
	margin-top: -20px;
}
.danger{
	font-size: 12px;
	color: red;
	margin-left: 70px;
}
</style>