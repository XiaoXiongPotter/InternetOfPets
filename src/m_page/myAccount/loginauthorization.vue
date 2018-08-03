<template>
	<div class="loginauthorization">
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
    <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
	</div>
	<div class="loginauthorization-main">
		<ul>
			<li>
				<div class="img">
					<img src="../../image/wechat.png"/>
					<span>微信</span>
				</div>
				<div class="msg">
					<span>{{msg}}</span>
					<img src="../../image/right.png" v-show="flag"/>
				</div>
			</li>
			<li>
				<div class="img">
					<img src='../../image/qq.png'/>
					<span>QQ</span>
				</div>
				<div class="msg">
					<span>{{msg1}}</span>
					<img src="../../image/right.png"  v-show="flag1"/>
				</div>
			</li>
			<li>
				<div class="img">
					<img src="../../image/facebook.png"/>
					<span>facebook</span>
				</div>
				<div class="msg">
					<span>{{msg2}}</span>
					<img src="../../image/right.png"  v-show="flag2"/>
				</div>
			</li>
			<li>
				<div class="img">
					<img src="../../image/twitter.png"/>
					<span>twitter</span>
				</div>
				<div class="msg">
					<span>{{msg3}}</span>
					<img src="../../image/right.png"  v-show="flag3"/>
				</div>
			</li>
		</ul>
	</div>
	</div>
</template>
<script>
	export default {
  	name: "mypet",
  	data(){
  	return{
  		msg:'未绑定',
  		msg1:'未绑定',
  		msg2:'未绑定',
  		msg3:'未绑定',
  		flag:true,
  		flag1:true,
  		flag2:true,
  		flag3:true
  		}
  	},
  	methods:{
  		back(){
  		this.$router.replace({ path: '/myAccount' })
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
	position: relative;
	border-bottom: solid 1px #DCDCDC;
	width: 100%;
 	background: #fff;
  	height: 40px;
  	line-height: 40px;
}
.back{
	width: 22px;
	height: 22px;
	position: absolute;
	top: 18%;
}
.loginauthorization-main ul li{
	height: 40px;
	line-height: 40px;
	display: flex;
	border-bottom: solid 1px #DCDCDC;
}
.img{
	flex: 1;
	position: relative;
	margin-left: 10px;
}
.msg{
	flex: 0 75px;
	position: relative;
}
.img img{
	width: 30px;
	height: 30px;
	position: absolute;
	top: 10%;
}
.img span{
	font-size: 15px;
	margin-left: 45px;
}
.msg span{
	font-size: 15px;
	color: 	#C0C0C0;
}
.msg img{
	width: 16px;
	height: 16px;
	position: absolute;
	top: 28%;
	right: 10px;
}
</style>