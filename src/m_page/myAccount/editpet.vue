<template>
	<transition name="show">
	<div class="editpet" v-show="showflag">
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
    <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
 	</div>
 	 <div class="title">
 		<el-upload
  			action="https://jsonplaceholder.typicode.com/posts/"
  			:class="{disabled:showto}"
  			:limit='1'
  			list-type='picture-card'
  			:file-list="fileList"
  			:auto-upload="false"
  			:on-change='change'
  			:on-remove='remove'
  			v-if='list'
  		>
  		<i class="el-icon-plus"></i>
		</el-upload>
 				<p>点击头像可更换照片</p>
 			</div>
 	<div class="main" ref='wrapper'>
 		<div>
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
 					<div class="block">
    			<el-date-picker
    				@blur='input5' 
    				@focus='focus'
      				v-model="birthday"
      				type="date"
      				>
    			</el-date-picker>
  				</div>
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
				showto:false,
				changeflag:false,
				petname:'',
				petbelong:'',
				sex:'',
				height:'',
				weight:'',
				birthday:'',
				haircolor:'',
				pettype:'',
				core:1,
				fileList:[]
			}
		},
		 beforeUpdate(){
	 	  this.$nextTick(() => {
          this.Scroll = new IScroll(this.$refs.wrapper, {
          click: true,
          preventDefault: false,
		  preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/ }
        })
          if(this.core==1){
				this.fileList.push({'url':this.list.img})
				this.core=0
			}
          if(this.fileList.length>0){
				this.showto=true
			}
       })     
  },
  methods:{
  	change(file, fileList){
  			console.log(fileList)
    		if(fileList.length==1){
    		this.showto=true  			
    		}
    this.changeflag=true
    this.imageUrl = URL.createObjectURL(file.raw);
    var reader = new FileReader();
    reader.readAsDataURL(file.raw);
    reader.onload = function(e){ 
        this.result // 这个就是base64编码了
        this.imageUrl = this.result;
        this.src=this.result.split(',')[1]
    }
  	},
  	remove(file, fileList){
    		clearInterval(this.time)
    		this.fileList.splice(0,1)
    		if(fileList.length==0){
    			this.time=setInterval(()=>{
    				this.showto=false
    			},500)
    		}
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
  			this.core=1
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
	.el-upload--picture-card{
	border-radius: 50%;
	width: 100px;
	height: 100px;
	line-height: 100px;
	position: relative;
	display: block;
	margin: auto;
}
.el-upload--picture-card i{
   position: absolute;
   left: 37%;
   top: 35%;
  }
.el-upload-list--picture-card .el-upload-list__item{
	margin: auto;
	display: block;
	border: none;
	width: 100px;
	height: 100px;
}
.el-upload-list--picture-card .el-upload-list__item img{
	border-radius: 50%;
	width: 100px;
	height: 100px;
}
.disabled .el-upload--picture-card{
    display: none;
}
.el-upload-list__item.is-success .el-upload-list__item-status-label{
	display: none;
}
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
.editpet .el-date-editor.el-input, .el-date-editor.el-input__inner{
	width: 90px;
}
.editpet .el-input__icon{
	display: none;
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
	top: 169px;
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
</style>