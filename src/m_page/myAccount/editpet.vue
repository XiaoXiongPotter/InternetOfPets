<template>
	<transition name="show">
	<div class="editpet" v-show="showflag">
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
    <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
 	</div>
 	<div class="main" ref='wrapper'>
 		<div>
 			<div class="title">
 				<img :src="list.img" v-if='list'@click="change"/>
 				<p>点击头像可更换照片</p>
 			</div>
 			<div class="petmessage">
 				<div class="petname" v-if='list'>
 					<span>名称</span>
 					<el-input v-model='petname' @blur='input' @focus='focus' /></el-input>
 				</div>
 				<div class="pet-msg">
 				<div class="petbelong" v-if='list'>
 					<span>种类</span>
 					<el-input v-model='petbelong'  @blur='input1' @focus='focus'  ></el-input>
 				</div>
 				<div class="sex" v-if='list'>
 					<span>性别</span>
 					<el-input v-model='sex'  @blur='input2' @focus='focus'></el-input>
 				</div>
 				</div>
 				<div class="pet-msg">
 					<div class="height" v-if='list'>
 					<span>身高(cm)</span>
 					<el-input v-model='height'   @blur='input3' @focus='focus'></el-input>
 					</div>
 					<div class="weight" v-if='list'>
 					<span>体重(kg)</span>
 					<el-input v-model='weight'  @blur='input4'  @focus='focus'></el-input>
 					</div>
 				</div>
 				<div class="pet-msg">
 					<div class="birthday" v-if='list'>
 					<span>出生日期</span>
 					<el-input v-model='birthday'  @blur='input5' @focus='focus' ></el-input>
 					</div>
 					<div class="haircolor" v-if='list'> 
 					<span>毛色</span>
 					<el-input v-model='haircolor'  @blur='input6' @focus='focus'></el-input>
 					</div>
 				</div>
 				<div class="pettype" v-if='list'>
 					<span>主人</span>
 					<el-input v-model='pettype'   @blur='input7' @focus='focus'></el-input>
 				</div>
 				<div class="binddevice" v-if='list'>
 					<span>绑定设备</span>
 					<p>{{list.binddevice}}</p>
 					</div>
 			</div>
 			<div>
 			<div class="save-btn" style="margin: 20px 0;">
 				 <el-button type="primary" round style='margin: auto;display: block;'>保存修改</el-button>
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
	</transition>
</template>
<script>
	import IScroll from 'iscroll/build/iscroll-probe'
	export default{
		name: "editpet",
		props:['list'],
		data(){
			return{
				showflag:false,
				listshow:false,
				changeflag:false,
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
		 beforeUpdate(){
	 	  this.$nextTick(() => {
          this.Scroll = new IScroll(this.$refs.wrapper, {
          click: true
        })
       })     
  },
  methods:{
  	change(){
  		this.listshow=true
  	},
  	cancel(){
  		this.listshow=false
  	},
  	back(){
  		if(this.changeflag==true){
  		  this.$message({
          message: '请保存修改',
          center: true,
          type:'error'
      })
  		}else{
  			this.showflag=false
  		}
  		
  	},
  	focus(){
  		this.petname=this.list.petname
  		this.petbelong=this.list.petbelong
  		this.sex=this.list.sex
  		this.height=this.list.height
  		this.weight=this.list.weight
  		this.birthday=this.list.birthday
  		this.haircolor=this.list.haircolor
  		this.pettype=this.list.pettype
  	},
  	show(){
  		this.showflag=true
  	},
  	input(){
  		if(this.petname!=this.list.petname){
		this.list.petname=this.petname
  		this.changeflag=true
  		}
  	},
  	input1(){
  		if(this.petbelong!=this.list.petbelong){
  		this.list.petbelong=this.petbelong
  		this.changeflag=true
  		}
  	},
  	input2(){
  		if(this.sex!=this.list.sex){
  		this.list.sex=this.sex
  		this.changeflag=true
  		}
  	},
  	input3(){
  		if(this.height!=this.list.height){
  			this.list.height=this.height
  		this.changeflag=true
  		}
  	},
  	input4(){
  		if(this.weight!=this.list.weight){
  			this.list.weight=this.weight
  		this.changeflag=true
  		}
  	},
  	input5(){
  		if(this.birthday!=this.list.birthday){
  			this.list.birthday=this.birthday
  		this.changeflag=true
  		}
  	},
  	input6(){
  		if(this.haircolor!=this.list.haircolor){
  		this.list.haircolor=this.haircolor
  		this.changeflag=true
  		}
  	},
  	input7(){
  		if(this.pettype!=this.list.pettype){
  		this.list.pettype=this.pettype
  		this.changeflag=true
  		}
  	}
	}
  }
</script>
<style>
	.petmessage .el-input__inner{
	padding: 0 0;
	width: 90px;
	height: 30px;
	line-height: 30px;
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
	.petmessage .el-input__inner:hover{
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.el-message{
min-width: 50%;
}
</style>
<style scoped>
.editpet{
	position: fixed;
    left: 0;
    top: 0;
    bottom: 0px;
	width: 100%;
    z-index: 30;
    background-color: #fff;
    transition: all .2s linear;
}
.editpet.show-enter, .editpet.show-leave-to{
	transform: translateX(100%);
}
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
	top: 40px;
	bottom: 0px;
	width: 100%;
	overflow: hidden;
	touch-action: none;
}
.title p{
	text-align: center;
	font-size: 14px;
	padding-top: 5px;
}
.title img{
	width: 100px;
	height: 100px;
	border-radius: 50%;
	display: block;
	margin: auto;
}
.petmessage{
	margin-top: 30px;
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
	flex: 1;
	position: relative;
}
.pettype{
	position: relative;
	margin-left: 15px;
	margin-top: 30px;
	width: 50%;
}
.binddevice{
	margin-left: 15px;
	margin-top: 30px;
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
</style>