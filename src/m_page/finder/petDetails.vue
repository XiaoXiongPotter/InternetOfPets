<template>
	<div class="petDetails">
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
    <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
 	</div>
 	<div class="main" ref='wrapper'>
 		<div>
 			<div class="pet-img">
 				<img :src="featurePhoto"/>
 			</div>
 			 <div class="petmessage">
 				<div class="petname">
 					<span>名称</span>
 					<p>{{petName}}</p>
 				</div>
 				<div class="pet-msg">
 				<div class="petbelong">
 					<span>种类</span>
 					<p>{{petType}}</p>
 				</div>
 				<div class="money" >
 					<span>赏金(￥)</span>
 					<p>{{bounty}}</p>
 				</div>
 				</div>
 				<div class="pet-msg">
 					<div class="losttime">
 					<span>丢失时间</span>
 					<p>{{loseTime}}</p>
 					</div>
 					<div class="loseplace">
 					<span>丢失地点</span>
 					<p>{{lostPlace}}</p>
 					</div>
 				</div>
 				<div class="pet-msg">
 					<div class="content">
 					<span>简介</span>
 					<p>{{content}}</p>
  				</div>
 					</div>
 					<div class="mobile"> 
 					<span>联系电话</span>
 					<p>{{mobile}}</p>
 					</div>
 				</div>
 				<div class="email">
 					<span>邮箱</span>
 					<p>{{email}}</p>
 				</div>
 			</div>
 		</div>
 	</div>
	</div>
</template>
<script>
	import IScroll from 'iscroll/build/iscroll-probe'
export default{
	name: "petDetails",
	data(){
		return{
			featurePhoto:'',
			petName:'',
			petType:'',
			bounty:'',
			loseTime:'',
			lostPlace:'',
			content:'',
			mobile:'',
			email:''
		}
	},
	mounted(){
		  this.$nextTick(() => {
          this.Scroll = new IScroll(this.$refs.wrapper, {
          click: true
        })
        })
	},
	created(){
		this.featurePhoto=this.$route.query.featurePhoto
		this.petName=this.$route.query.petName
		this.petType=this.$route.query.petType
		this.bounty=this.$route.query.bounty
		this.loseTime=this.$route.query.loseTime
		this.lostPlace=this.$route.query.lostPlace
		this.content=this.$route.query.content
		this.mobile=this.$route.query.mobile
		this.email=this.$route.query.email
	},
	methods:{
		back(){
			this.$router.replace('/finder')
		}
	}
}
</script>
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
.pet-img img{
	width: 100px;
	height: 100px;
	margin-left: 15px;
	margin-bottom: 15px;
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
	top: 49px;
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
.money{
	flex: 1;
	position: relative;
}
.losttime{
	flex: 1;
	position: relative;
	margin-left: 15px;
}
.loseplace{
	flex: 1;
	position: relative;
}
.content{
	flex: 1;
	position: relative;
	margin-left: 15px;
}
.mobile{
	margin-left: 15px;
	margin-top: 30px;
}
.email span{
	font-size: 16px;
	color: #00BFFF;
}
.email{
	margin-left: 15px;
	width: 50%;
	margin-top: 30px;
}
</style>