<template>
	<div class="petDetails">
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
    <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
 	</div>
 	<div class="main" ref='wrapper'>
 		<div>
 			 <div class="petmessage">
 				<div class="petname">
 					<span>名称</span>
 				</div>
 				<div class="pet-msg">
 				<div class="petbelong">
 					<span>种类</span>
 				</div>
 				<div class="sex" >
 					<span>性别</span>
 				</div>
 				</div>
 				<div class="pet-msg">
 					<div class="height">
 					<span>身高(cm)</span>
 					</div>
 					<div class="weight">
 					<span>体重(kg)</span>
 					</div>
 				</div>
 				<div class="pet-msg">
 					<div class="birthday">
 					<span>出生日期</span>
  				</div>
 					</div>
 					<div class="haircolor"> 
 					<span>毛色</span>
 					</div>
 				</div>
 				<div class="character">
 					<span>性格</span>
 				</div>
 				<div class="binddevice">
 					<span>绑定设备</span>
 					</div>
 			</div>
 		</div>
 	</div>
	</div>
</template>
<script>
export default{
	name: "petDetails",
	data(){
		return{
			
		}
	},
	created(){
		console.log(this.$route.query.petName)
	},
	methods:{
		back(){
			this.$router.replace('/finder')
		}
	}
}
</script>
<style>
.petDetails .el-input__inner{
	padding: 0 0;
	width: 100px;
	height: 30px;
	line-height: 30px;
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.petDetails .el-input__inner:hover{
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
</style>
<style scoped>
.header span{
  width: 100%;
  text-align: center;
  background: #fff;
  color:#0CA8E3;
  height: 40px;
  line-height: 40px;
  flex: 1;
}
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
	width: 100%;
 	background: #fff;
  	color: #0ca8e3;
  	height: 40px;
  	line-height: 40px;
}
.back{
	width: 22px;
	height: 22px;
	position: absolute;
	top: 18%;
}
.main{
	position: absolute;
	top: 169px;
	bottom: 0px;
	width: 100%;
	overflow: hidden;
	touch-action: none;
}
.petname{
	position: relative;
	margin-left: 15px;
	width: 50%;
}
.petmessage span{
	font-size: 16px;
	color: #00BFFF;
}
.petmessage p{
	font-size: 14px;
}
.petbelong{
	flex: 1;
	position: relative;
	margin-left: 15px;
}
.pet-msg{
	display: flex;
	margin-bottom: 30px;
	margin-top: 30px;
}
.sex{
	flex: 1;
	position: relative;
}
.height{
	flex: 1;
	position: relative;
	margin-left: 15px;
}
.weight{
	flex: 1;
	position: relative;
}
.birthday{
	flex: 1;
	position: relative;
	margin-left: 15px;
}
.haircolor{
	margin-left: 15px;
	margin-top: 30px;
}
.binddevice{
	margin-left: 15px;
	margin-top: 30px;
}
.binddevice span{
	font-size: 16px;
	color: #00BFFF;
}
.character span{
	font-size: 16px;
	color: #00BFFF;
}
.character{
	margin-left: 15px;
	width: 50%;
	margin-top: 30px;
}
</style>