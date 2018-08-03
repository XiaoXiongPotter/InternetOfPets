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
 		</div>
 		<div class="next-btn" style="margin: 20px 0;">
 		<el-button type="primary" round style='margin: auto;display: block;' @click='next'>下一步</el-button>
 		</div>
 	</div>
 	<nextchangepassword ref='nextchange'></nextchangepassword>
	</div>
</template>
<script>
	import nextchangepassword from '../myAccount/nextchangepassword'
	export default {
		name:'changepassword',
		data(){
			return{
				oldpassword:'',
				flag:false,
				flag1:false
			}
		},
		methods:{
		back(){
  		this.$router.replace({ path: '/myAccount' })
  		},
  		next(){
  			if(this.oldpassword.length==0){
  				this.flag=true
  			}else{
  				this.$refs.nextchange.show()	
  			}
  		}
		},
		components: {
   		nextchangepassword
  		}
	}
</script>
<style>
.changepassword-main .el-input__inner{
	width: 90%;
	margin: auto;
	display: block;
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
.changepassword-main{
	margin-top: 50%;
}
.danger{
	font-size: 12px;
	color: red;
	margin-left: 5%;
}
</style>