<template>
	<div class="changepassword">
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
 	<div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
 	</div>
 	<div class="changepassword-main">
 		<div>
 			<el-input placeholder="请输入旧密码"  v-model="oldpassword" type='password'></el-input>
 			<p class="danger" v-show='flag'>密码不能为空</p>
 			<p class="danger" v-show="flag1">密码不正确</p>
 			<el-input placeholder="请输入新密码"  v-model="newpassword" type='password' style='margin: 15px auto;'></el-input>
 			<p class="danger" v-show='flag2'>密码不能为空</p>
 			<p class="danger" v-show="flag3">密码不能少于6位</p>
 			<el-input placeholder="确认新密码"  v-model="confirmpassword" type='password'></el-input>
 			<p class="danger" v-show="flag4">密码不一致</p>
 		</div>
 		<div class="next-btn" style="margin: 20px 0;">
 		<el-button type="primary" round style='margin: auto;display: block;' @click='finish'>确认修改</el-button>
 		</div>
 	</div>
	</div>
</template>
<script>
	import {updateUserInfo} from '../../api/index.js'
	import axios from "axios";
	import Qs from "qs";
	export default {
		name:'changepassword',
		data(){
			return{
				oldpassword:'',
				newpassword:'',
				confirmpassword:'',
				flag:false,
				flag1:false,
				flag2:false,
				flag3:false,
				flag4:false
			}
		},
		methods:{
		back(){
  		this.$router.replace({ path: '/myAccount' })
  		},
		finish(){
		if(this.oldpassword.length==0){
			this.flag=true
		}
  		if(this.newpassword.length==0){
  			this.flag2=true
  		}else{
  			this.flag2=false
  		}
  		if(this.newpassword.length>0&&this.newpassword.length<6){
  			this.flag3=true
  		}else{
  			this.flag3=false
  		}
  		if(this.newpassword!=this.confirmpassword){
  			this.flag4=true
  		}else{
  			this.flag4=false
  		}
		if(this.flag==false&&this.flag2==false&&this.flag3==false&&this.flag4==false){
			let params = Qs.stringify({
				oldPassword:this.oldpassword,
				newPassword:this.newpassword
			})
			updateUserInfo(params).then(res=> {
					console.log(res)
					if(res.data.header.status==1000){
						this.$router.replace({ path: '/myAccount' })
					}else{
						this.flag1=true
					}
				}
			).catch(error => {
				console.log(error)
			})
		}
  		}
		}
	}
</script>
<style scoped>
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
.back{
	width: 22px;
	height: 22px;
	position: absolute;
	top: 18%;
}
.changepassword-main{
	margin-top: 50%;
}
.danger{
	font-size: 12px;
	color: red;
	margin-left: 5%;
}
</style>