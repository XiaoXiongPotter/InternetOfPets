<template>
	<div class="addpet">
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
 	<div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
 </div>
 <div class="addpet-main" ref='wrapper'>
 	<div>
 		<div class="title">
 				<img :src="src" @click="change"/>
 				<p>点击头像可更换照片</p>
 			</div>
 		<div class="pet">
 			<div class="petname">
 				<span>名称</span>
 				<el-input v-model="petname" placeholder='输入名称'></el-input>
 			</div>
 				<div class="pet-msg">
 				<div class="petbelong">
 					<span>种类</span>
 					<el-input v-model='petbelong' placeholder='输入种类'></el-input>
 				</div>
 				<div class="sex">
 					<span>性别</span>
 					<el-input v-model='sex' placeholder='输入性别'></el-input>
 				</div>
 				</div>
 				<div class="pet-msg">
 				<div class="height">
 					<span>身高(cm)</span>
 					<el-input v-model='height' placeholder='输入身高'></el-input>
 				</div>
 				<div class="weight">
 					<span>体重(kg)</span>
 					<el-input v-model='weight' placeholder='输入体重'></el-input>
 				</div>
 				</div>
 				<div class="pet-msg">
 				<div class="birthday">
 					<span>出生日期</span>
 					<el-input v-model='birthday' placeholder='输入日期'></el-input>
 				</div>
 				<div class="haircolor">
 					<span>毛色</span>
 					<el-input v-model='haircolor' placeholder='输入毛色'></el-input>
 				</div>
 				</div>
 				<div class="pettype">
 				<span>主人</span>
 				<el-input v-model="pettype" placeholder='输入名字'></el-input>
 			</div>
 			<div class="save-btn" style="margin: 20px 0;">
 				 <el-button type="primary" round style='margin: auto;display: block;'>确认添加</el-button>
 			</div>
 		</div>
 	</div>
 </div>
  		 <transition name='fade'>
    	<ul v-show="listshow" class="list">
    		<li>从手机相册选择</li>
    		<li @click="cancel">取消</li>
    	</ul>
    </transition>
       <transition name="fade">
      <div class="mask" v-show="listshow"></div>
    </transition>
	</div>
</template>
<script>
	import IScroll from 'iscroll/build/iscroll-probe'
	export default {
		name:'addpet',
		data(){
			return{
				src:require('../../image/pet2.jpg'),
				listshow:false,
				petname:'',
				petbelong:'',
				sex:'',
				height:'',
				weight:'',
				birthday:'',
				haircolor:'',
				pettype:''
			}
		},
		 created(){
	 	  this.$nextTick(() => {
          this.Scroll = new IScroll(this.$refs.wrapper, {
          click: true
        })
       })     
  },
		methods:{
		back(){
  		this.$router.replace({ path: '/mypet' })
  		},
		cancel(){
			this.listshow=false
		},
		change(){
			this.listshow=true
		}
		}
	}
</script>
<style>
.pet .el-input__inner{
	padding: 0 0;
	width: 90px;
	height: 30px;
	line-height: 30px;
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.pet .el-input__inner:hover{
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
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
.addpet-main{
	position: absolute;
	top: 40px;
	bottom: 0;
	width: 100%;
	overflow: hidden;
	touch-action: none;
}
.title img{
	width: 100px;
	height: 100px;
	border-radius: 50%;
	display: block;
	margin: auto;
}
.title p{
	text-align: center;
	font-size: 14px;
	padding-top: 5px;
}
.list{
	position: absolute;
	left: 0;
	bottom: -82px;
 	z-index: 100;
 	width: 100%;
 	text-align: center;
  	transition: all .4s;
  	transform: translateY(-100%);
}
 .list.fade-enter, .list.fade-leave-to{
 	transform: translateY(0);
 }
.list li{
	height: 40px;
  	line-height: 40px;
	background-color: #f3f5f7;
	border-bottom: solid 1px #DCDCDC;
}
.mask{
	  position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(7, 17, 27, 0.6);
      z-index: 10;
      transition: all 0.4s;
}
.mask.fade-enter, .mask.fade-leave-to{
	opacity: 0;
	background-color: rgba(7, 17, 27, 0);
}
.pet{
	margin-top: 40px;
}
.petname{
	margin-left: 15px;
	width: 50%;
}
.pet span{
	font-size: 16px;
	color: #00BFFF;
}
.petbelong{
	flex: 1;
	margin-left: 15px;
	margin-top: 40px;
}
.pet-msg{
	display: flex;
}
.sex{
	flex: 1;
	margin-top: 40px;
}
.height{
	flex: 1;
	margin-left: 15px;
	margin-top: 40px;
}
.weight{
	flex: 1;
	margin-top: 40px;
}
.birthday{
	flex: 1;
	margin-left: 15px;
	margin-top: 40px;
}
.haircolor{
	flex: 1;
	margin-top: 40px;
}
.pettype{
	margin-top: 40px;
	margin-left: 15px;
	width: 50%;
}
</style>