<template>
	<transition name="show">
	<div class="editpet" v-show="showflag">
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
    <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
 	</div>
 	 <div class="title">
    	 <div class="head_img">
       <img :src="imgflag?avatar:avatar1"  @click.stop="uploadHeadImg" style="margin: auto;display: block;"/>
     </div>
     <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
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
	import {getPetDevices} from'../../ClientServerApi/index.js'
	import {updatePet} from '../../ClientServerApi/index.js'
	import {deletepet} from '../../ClientServerApi/index.js'
	import store from "../../store/store.js";
	import Bus from '../../components/bus.js'
	import Qs from "qs";
	export default{
		name: "editpet",
		props:['list','index'],
		data(){
			return{
				showflag:false,
				changeflag:false,
				imgflag:false,
				petname:'',
				petbelong:'',
				sex:'',
				height:'',
				weight:'',
				birthday:'',
				haircolor:'',
				character:'',
				avatar:'',
				avatar1:'',
				id:'',
				device:''
			}
		},
		 beforeUpdate(){
	 	  this.$nextTick(() => {
          this.Scroll = new IScroll(this.$refs.wrapper, {
          click: true,
          preventDefault: false,
		  preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/ }
        })
          this.id=this.list[this.index].id
   		 let params = Qs.stringify({petId:this.id})
			getPetDevices(params).then(res => {
				if(res.data.header.status==1000){
					this.device=res.data.data[0].device.type
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
			this.avatar1=this.list[this.index].portrait
       })     
  },
  methods:{
  	    // 打开图片上传
    uploadHeadImg: function () {
      this.$confirm('是否修改头像?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
      }).then(() => {
       	this.$el.querySelector('.hiddenInput').click()
       }).catch(() => {         
       });
    },
    // 将头像显示
    handleFile: function (e) {
    	this.imgflag=true
      let $target = e.target || e.srcElement
      let file = $target.files[0]
    var reader = new FileReader()
    reader.readAsDataURL(file)
    this.changeflag=true
    reader.onload = (data) => { 
        let res = data.target || data.srcElement
        this.avatar = res.result
        sessionStorage.setItem('base',data.target.result.split(',')[1])
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
  		Bus.$emit('id', this.id)
  		Bus.$emit('petname', this.petname)
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

<style>
 .el-message-box{
	width: 300px;
}
.petmessage .el-input__inner{
	padding: 0 0;
	width: 100px;
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
	width: 100px;
}
.editpet .el-input__icon{
	display: none;
}
.el-message{
min-width: 50%;
}
</style>
<style scoped>
.head_img img{
  width:90px;
  height:90px;
  border-radius:50px
}
.hiddenInput{
  display: none;
}
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
