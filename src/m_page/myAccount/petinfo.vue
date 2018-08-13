<template>
	<transition name="show">
	<div class="petinfo" v-show="showflag">
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
    <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
    <span @click="edit">编辑</span>
 	</div>
 	<div class="main" ref='wrapper'>
 		<div>
 			<div class="title">
 				<img :src="list[index].portrait" v-if='list[index]'/>
 			</div>
 			<div class="petmessage">
 				<div class="petname" v-if='list[index]'>
 					<span>名称</span>
 					<p>{{list[index].name}}</p>
 				</div>
 				<div class="pet-msg">
 				<div class="petbelong" v-if='list[index]'>
 					<span>种类</span>
 					<p>{{list[index].petType}}</p>
 				</div>
 				<div class="sex" v-if='list[index]'>
 					<span>性别</span>
 					<p>{{list[index].gender}}</p>
 				</div>
 				</div>
 				<div class="pet-msg">
 					<div class="height" v-if='list[index]'>
 					<span>身高(cm)</span>
 					<p>{{list[index].height}}</p>
 					</div>
 					<div class="weight" v-if='list[index]'>
 					<span>体重(kg)</span>
 					<p>{{list[index].weight}}</p>
 					</div>
 				</div>
 				<div class="pet-msg">
 					<div class="birthday" v-if='list[index]'>
 					<span>出生日期</span>
 					<p>{{list[index].birthTime}}</p>
 					</div>
 					<div class="haircolor" v-if='list[index]'> 
 					<span>毛色</span>
 					<p>{{list[index].color}}</p>
 					</div>
 				</div>
 				<div class="character" v-if='list[index]'>
 					<span>性格</span>
 					<p>{{list[index].character}}</p>
 					</div>
 				<div class="binddevice" v-if='list[index]'>
 					<span>绑定设备</span>
 					<p>{{this.device}}</p>
 					</div>
 			</div>
 			<div>
 			<div class="delete-btn" style="margin: 20px 0;">
 				<el-button type="primary" round style='margin: auto;display: block;'@click='remove'>删除宠物</el-button>
 			</div>
 			<div class="search-btn">
 				<el-button type="primary" round style='margin: auto;display: block;'@click='search'>发布协寻</el-button>
 			</div>
 			</div>
 		</div>
 	</div>
 	<editpet :list='list[index]' ref='banner'></editpet>
	</div>
	</transition>
</template>
<script>
	import IScroll from 'iscroll/build/iscroll-probe'
	import editpet from '../myAccount/editpet'
	import {getPetDevices} from'../../deviceApi/index.js'
	import axios from "axios";
	import Qs from "qs";
	export default{
		name: "petinfo",
		props:['list','index'],
		data(){
			return{
				showflag:false,
				listshow:false,
				id:'',
				device:''
			}
		},
		 beforeUpdate(){
	 	  this.$nextTick(() => {
          this.Scroll = new IScroll(this.$refs.wrapper, {
          click: true
        })
          this.id=this.list[this.index].id
           let params = this.id
			getPetDevices(params).then(res => {
			if(res.data.header.status==1000){
				this.device=res.data.data[0].devName
				}
     		}).catch(error => {
     		console.log(error)
     		})
       	})
  },
  components: {
   		editpet
  },
  methods:{
  	change(){
  		this.listshow=true
  	},
  	cancel(){
  		this.listshow=false
  	},
  	back(){
  		this.showflag=false	
  	},
  	edit(){
  		this.$refs.banner.show()
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
       var data = Qs.stringify({
			petId:this.id
      	})
		axios({
        method: "post",
        url: "/ClientServerApi/pets/info/deletePet",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        data
   }).then(res => {
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
  	}
	}
  }
</script>
<style scoped>
 .el-message-box{
	width: 300px;
} 
</style>
<style scoped>
.petinfo{
	position: fixed;
    left: 0;
    top: 0;
    bottom: 0px;
	width: 100%;
	max-width: 720px;
    z-index: 30;
    background-color: #fff;
    transition: all .2s linear;
}
.petinfo.show-enter, .petinfo.show-leave-to{
	transform: translateX(100%);
}
.header span{
	position: absolute;
	right: 10px;
	font-size: 15px;
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
	max-width: 720px;
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
.character{
	margin-left: 15px;
	margin-top: 30px;
}
</style>