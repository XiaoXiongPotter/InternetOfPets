<template>
	<transition name="show">
	<div class="nextchangepassword"  v-show="showflag">
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
 	<div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
 	</div>
 	<div class="nextchangepassword-main">
 		<div>
 			<el-input placeholder="请输入新密码"  v-model="newpassword" type='password'></el-input>
 			<p class="danger" v-show='flag'>密码不能为空</p>
 			<p class="danger" v-show="flag1">密码不能少于6位</p>
 			<el-input placeholder="确认新密码"  v-model="confirmpassword" type='password'></el-input>
 			<p class="danger" v-show="flag2">密码不一致</p>
 		</div>
 		<div class="next-btn" style="margin: 20px 0;">
 		<el-button type="primary" round style='margin: auto;display: block;' @click='finish'>确认修改</el-button>
 		</div>
 	</div>
	</div>
	</transition>
</template>
<script>
	export default {
		name:'changepassword',
		data(){
			return{
				newpassword:'',
				confirmpassword:'',
				showflag:false,
				flag:false,
				flag1:false,
				flag2:false
			}
		},
		methods:{
		back(){
  		this.showflag=false
  		},
  		show(){
  		this.showflag=true
  		},
  		finish(){
  		if(this.newpassword.length==0){
  			this.flag=true
  		}else{
  			this.flag=false
  		}
  		if(this.newpassword.length>0&&this.newpassword.length<6){
  			this.flag1=true
  		}else{
  			this.flag1=false
  		}
  		if(this.newpassword!=this.confirmpassword){
  			this.flag2=true
  		}else{
  			this.flag2=false
  		}
  		}
		}
	}
</script>
<style>
.nextchangepassword-main .el-input__inner{
	width: 90%;
	margin: auto;
	display: block;
	margin-top: 10px;
}
</style>
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
.nextchangepassword-main{
	margin-top: 40%;
}
.nextchangepassword{
	position: fixed;
    left: 0;
    top: 0;
    bottom: 0px;
	width: 100%;
    z-index: 30;
    background-color: #fff;
    transition: all .2s linear;
}
.nextchangepassword.show-enter, .nextchangepassword.show-leave-to{
	transform: translateX(100%);
}
.danger{
	font-size: 12px;
	color: red;
	margin-left: 5%;
}
</style>