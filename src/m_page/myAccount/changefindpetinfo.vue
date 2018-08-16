<template>
	<div class="changefindpetinfo">
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
    <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
 </div>
 	 	<div class="main" ref='wrapper'>
 		<div>
 		<div class="pet-img">
 		<div class="head_img">
       <img :src="imgflag?avatar:avatar1" @click.stop="uploadHeadImg"/>
     	</div>
     	<input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
 		</div>
 			 <div class="petmessage">
 			 	<div class="pet-msg">
 				<div class="petname">
 					<span>名称</span>
 					<el-input  :value='petName' @input='changepetName'></el-input>
 				</div>
 				<div class="switch">
 					<el-switch
  						v-model="value2"
  						active-color="#13ce66"
  						inactive-color="#C0C0C0"
  						@change='changeswitch'
  						>
					</el-switch>
					<span>可开启关闭</span>
 				</div>
 				</div>
 				<div class="pet-msg">
 				<div class="petbelong">
 					<span>种类</span>
 					<el-input :value='petType' @input='changepetType'></el-input>
 				</div>
 				<div class="money" >
 					<span>赏金(￥)</span>
 					<el-input :value='bounty'  @input='changebounty' ></el-input>
 				</div>
 				</div>
 					<div class="losttime">
 					<span>丢失时间</span>
 					<div class="block">
                        <el-date-picker v-model="loseTime" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期" @input='changeloseTime'>
                        </el-date-picker>
                    </div>
 					</div>
 					<div class="loseplace">
 					<span>丢失地点</span>
 					<el-input :value='lostPlace' @input='changelostPlace' ></el-input>
 					</div>
 				<div class="pet-msg">
 					<div class="content">
 					<span>简介</span>
 					<el-input :value='content' @input='changecontent' ></el-input>
  				</div>
 					</div>
 					<div class="mobile"> 
 					<span>联系电话</span>
 					<el-input :value='mobile' @input='changemobile' @change='judgemobile'></el-input>
 					 <br />
                    <span class="danger" v-show='flag'>手机号不存在</span>
 					</div>
 				</div>
 				<div class="email">
 					<span>邮箱</span>
 					<el-input :value='email' @input='changeemail' @change='judgeemail'></el-input>
 					 <br />
                    <span class="danger" v-show="flag1">邮箱不存在</span>
 				</div>
 				<div class="save-btn" style="margin:20px 0;">
 				 <el-button type="primary" round style='margin: auto;display: block;' @click='save'>保存修改</el-button>
 			</div>
 			</div>
 			</div>
 		</div>
</template>
<script>
	import IScroll from 'iscroll/build/iscroll-probe'
	import {updatePublish} from '../../ClientServerApi/index.js'
	import Qs from "qs";
	export default{
		name:'changefindpetinfo',
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
			email:'',
			publishId:'',
			avatar:'',
			avatar1:'',
			imgflag:false,
			changeflag:false,
			value2:true,
			isOpen:true,
			flag:false,
			flag1:false
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
		this.avatar1=this.$route.query.featurePhoto
		this.petName=this.$route.query.petName
		this.petType=this.$route.query.petType
		this.bounty=this.$route.query.bounty
		this.loseTime=this.$route.query.loseTime
		this.lostPlace=this.$route.query.lostPlace
		this.content=this.$route.query.content
		this.mobile=this.$route.query.mobile
		this.email=this.$route.query.email
		this.publishId=this.$route.query.publishId
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
     judgemobile(){
        	let reg1 = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
        	if(reg1.test(this.mobile)){
        		this.flag=false
        	}else{
        		this.flag=true
        	}
        },
        judgeemail(){
        	let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
        		if(reg.test(this.email)){
        		this.flag1=false
        	}else{
        		this.flag1=true
        	}
        },
		back(){
		if(this.changeflag==true){
  		this.$confirm('是否放弃修改?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
       }).then(() => {
       		this.$router.replace('/mysearch')
			sessionStorage.removeItem('base')
        }).catch(() => {          
        });
  		}else{
			this.$router.replace('/mysearch')
  		}
		},
		changeswitch(){
			this.isOpen=!this.isOpen
			console.log(this.isOpen)
		},
		save(){
          let params = Qs.stringify({
              publishId:this.publishId,
              lat:31.1882600000,
              lon:121.4368700000,
              mobile:this.$route.query.mobile,
              email:this.$route.query.email,
			  loseTime:this.loseTime,
			  lostPlace:this.$route.query.lostPlace,
			  bounty:this.$route.query.bounty,
			  featurePhoto:sessionStorage.base,
			  content:this.$route.query.content,
			  isOpen:this.isOpen
          })
          updatePublish(params).then(res => {
              console.log(res)
				if(res.data.header.status==1000){
					sessionStorage.removeItem('base')
					this.$router.replace('/mysearch')
				}
          }).catch(error => {
              console.log(error)
          })
        },
		changepetName(e){
		this.$route.query.petName=e
		console.log(this.$route.query.petName)
		this.changeflag=true
		},
		changepetType(e){
		this.$route.query.petType=e
		this.changeflag=true
		},
		changebounty(e){
		this.$route.query.bounty=e
		this.changeflag=true
		},
		changeloseTime(e){
		this.changeflag=true
		},
		changelostPlace(e){
		this.$route.query.lostPlace=e
		this.changeflag=true
		},
		changecontent(e){
		this.$route.query.content=e
		this.changeflag=true
		},
		changemobile(e){
		this.$route.query.mobile=e
		this.changeflag=true
		},
		changeemail(e){
		this.$route.query.email=e
		this.changeflag=true
		}
	}
	}
</script>
<style>
.changefindpetinfo .el-input__inner{
	padding: 0 0;
	width: 150px;
	height: 30px;
	line-height: 30px;
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.changefindpetinfo .el-input__inner:hover{
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.content .el-input__inner{
	padding: 0 0;
	width: 100%;
	height: 30px;
	line-height: 30px;
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.changefindpetinfo .el-icon-time:before{
	display: none;
}
</style>
<style scoped>
.changefindpetinfo .danger{
	font-size: 10px;
	color: red;
}
.hiddenInput{
  display: none;
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
.pet-img{
	margin-bottom: 15px;
}
.pet-img img{
	width: 100px;
	height: 100px;
	margin-left: 15px;
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
	top: 50px;
	bottom: 0px;
	width: 100%;
	overflow: hidden;
	touch-action: none;
}
.petname{
	margin-left: 15px;
	flex: 1;
}
.switch{
	flex: 1;
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
	margin-left: 15px;
}
.pet-msg{
	display: flex;
	margin-bottom: 30px;
}
.money{
	flex: 1;
}
.losttime{
	margin-left: 15px;
}
.loseplace{
	margin-left: 15px;
	margin-top: 30px;
}
.content{
	flex: 1;
	margin-left: 15px;
	margin-top: 30px;
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
