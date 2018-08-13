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
  			:on-remove='removepic'
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
 					<el-input  :value='petname' @input='change0'></el-input>
 				</div>
 				<div class="pet-msg">
 				<div class="petbelong" v-if='list'>
 					<span>种类</span>
 					<el-input :value='petbelong'  @input='change1'></el-input>
 				</div>
 				<div class="sex" v-if='list'>
 					<span>性别</span>
 					<el-input :value='sex'  @input='change2' ></el-input>
 				</div>
 				</div>
 				<div class="pet-msg">
 					<div class="height" v-if='list'>
 					<span>身高(cm)</span>
 					<el-input :value='height'  @input='change3'></el-input>
 					</div>
 					<div class="weight" v-if='list'>
 					<span>体重(kg)</span>
 					<el-input  :value='weight'  @input='change4'></el-input>
 					</div>
 				</div>
 				<div class="pet-msg">
 					<div class="birthday" v-if='list'>
 					<span>出生日期</span>
 					<div class="block">
    			<el-date-picker
      				type="date"
      				value-format="yyyy-MM-dd"
      				v-model='birthday'
      				 @input='change5'
      				>
    			</el-date-picker>
  				</div>
 					</div>
 					<div class="haircolor" v-if='list'> 
 					<span>毛色</span>
 					<el-input :value='haircolor'  @input='change6'></el-input>
 					</div>
 				</div>
 				<div class="character" v-if='list'>
 					<span>性格</span>
 					<el-input :value='character'  @input='change7'></el-input>
 				</div>
 				<div class="binddevice" v-if='list'>
 					<span>绑定设备</span>
 					<p>{{this.device}}</p>
 					</div>
 			</div>
 			<div>
 			<div class="save-btn" style="margin: 20px 0;">
 				 <el-button type="primary" round style='margin: auto;display: block;' @click='save'>保存修改</el-button>
 			</div>
 			<div class="delete-btn" style="margin: 20px 0;">
 				<el-button type="primary" round style='margin: auto;display: block;'@click='remove'>删除宠物</el-button>
 			</div>
 			<div class="search-btn" style="margin: 20px 0;">
 				<el-button type="primary" round style='margin: auto;display: block;'@click='search'>发布协寻</el-button>
 			</div>
 			</div>
 		</div>
 	</div>
	</div>
	</transition>
</template>
<script>
	import IScroll from 'iscroll/build/iscroll-probe'
	import {getPetDevices} from'../../deviceApi/index.js'
	import {updatePet} from '../../ClientServerApi/index.js'
	import {deletepet} from '../../ClientServerApi/index.js'
	import store from "../../store/store.js";
	import axios from "axios";
	import Qs from "qs";
	export default{
		name: "editpet",
		props:['list','index'],
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
				character:'',
				core:1,
				fileList:[],
				id:'',
				device:'',
				editlist:'',
				flag:true,
				time:0
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
				this.fileList.push({'url':this.list[this.index].portrait})
				this.core=0
			}
          if(this.fileList.length>0){
				this.showto=true
			}
          this.id=this.list[this.index].id
            let params = this.id
			getPetDevices(params).then(res => {
			if(res.data.header.status==1000){
				this.device=res.data.data[0].devName
				}
     		}).catch(error => {
     		console.log(error)
     		})
     		this.petname=this.list[this.index].name
			this.petbelong=this.list[this.index].petType
			this.sex=this.list[this.index].gender
			this.height=this.list[this.index].height
			this.weight=this.list[this.index].weight
			this.birthday=this.list[this.index].birthTime
			this.haircolor=this.list[this.index].color
			this.character=this.list[this.index].character
			this.fileList[0].url=this.list[this.index].portrait
       })     
  },
  methods:{
  	change(file, fileList){
  		clearInterval(this.time)
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
        sessionStorage.setItem('base',this.src)
    }
  	},
  	removepic(file, fileList){
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
  		this.$confirm('是否放弃修改?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
			this.$emit('react')
			sessionStorage.removeItem('base')
        }).catch(() => {          
        });
  		}else{
			this.showflag=false
  		}
  		
  	},
  	save(){
		var params = Qs.stringify({
        	name:this.list[this.index].name,
			petId:this.id,
			height:this.list[this.index].height,
			weight:this.list[this.index].weight,
			birthTime:this.list[this.index].birthTime,
			petType:this.list[this.index].petType,
			portrait:sessionStorage.base,
			color:this.list[this.index].color,
			gender:this.list[this.index].gender,
			character:this.list[this.index].character
    })
		updatePet(params).then(res =>{
      	console.log(res)
      	if(res.data.header.status==1000){
      	sessionStorage.removeItem('base')
      	this.changeflag=false
   		this.showflag=false
   		this.$emit('react')
      	}
      }).catch(error => {
      	console.log(error)
      })
  },
  	show(){
  		this.showflag=true
  	},
  	search(){
  		this.$router.replace({ path: '/releaseSearch' })
  	},
  	remove(){
		  this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
       var params = Qs.stringify({
			petId:this.id
      	})
	deletepet(params).then(res => {
		if(res.data.header.status==1000){
          this.showflag=false
			this.$emit('remove',this.index)
						}
		}).catch(error => {
			console.log(error)
		})
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
  	},
  	change0(e){
		this.list[this.index].name=e
  		this.changeflag=true
  	},
  	change1(e){
		this.list[this.index].petType=e
  		this.changeflag=true
  	},
  	change2(e){
		this.list[this.index].gender=e
  		this.changeflag=true
  	},
  	change3(e){
		this.list[this.index].height=e
  		this.changeflag=true
  	},
  	change4(e){
		this.list[this.index].weight=e
  		this.changeflag=true
  	},
  	change5(e){
		this.list[this.index].birthTime=e
		console.log(this.list[this.index].birthTime)
  		this.changeflag=true
  	},
  	change6(e){
		this.list[this.index].color=e
  		this.changeflag=true
  	},
  	change7(e){
		this.list[this.index].character=e
  		this.changeflag=true
  	}
	}
  }
</script>
<style scoped>
 .el-message-box{
	width: 300px;
} 
.editpet .el-upload--picture-card{
	border-radius: 50%;
	width: 100px;
	height: 100px;
	line-height: 100px;
	position: relative;
	display: block;
	margin: auto;
}
.editpet .el-upload--picture-card i{
   position: absolute;
   left: 37%;
   top: 35%;
  }
.editpet .el-upload-list--picture-card .el-upload-list__item{
	margin: auto;
	display: block;
	border: none;
	width: 100px;
	height: 100px;
}
.editpet .el-upload-list--picture-card .el-upload-list__item img{
	border-radius: 50%;
	width: 100px;
	height: 100px;
}
.editpet .disabled .el-upload--picture-card{
    display: none;
}
.editpet .el-upload-list__item.is-success .el-upload-list__item-status-label{
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
.binddevice{
	margin-left: 15px;
	margin-top: 30px;
}
.character{
	position: relative;
	margin-left: 15px;
	width: 50%;
}
</style>