<template>
	<transition name="show">
	<div class="userInformation" v-show="showflag" ref='banner'>
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
 	<div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
 </div>
 <div class="userInformation-main">
 		<div class="head-img">
		<el-upload
  			action="https://jsonplaceholder.typicode.com/posts/"
  			:class="{disabled:showto}"
  			:limit='1'
  			list-type='picture-card'
  			:file-list="fileList"
  			:auto-upload="false"
  			:on-change='change'
  			:on-remove='remove'
  		>
  		<i class="el-icon-plus"></i>
		</el-upload>
		<p>点击头像可删除更换</p>
			</div>
		<div style="height: 40px;line-height: 40px;border-bottom: solid 1px #DCDCDC;margin-top: 10px;display: flex;">
  		<div class="msg" style="flex: 2;"><p>昵称</p></div>
  		<div class="right" style="flex: 1;"><span v-if="flag" class="username">{{list[0].user}}<img src="../../image/change.png" @click="edit"></span><el-input v-model='username' placeholder='输入昵称' v-else @blur='input' ref='inp'></el-input></div>
		</div>
		<div style="height: 40px;line-height: 40px;border-bottom: solid 1px #DCDCDC;margin-top: 10px;display: flex;">
  		<div class="msg" style="flex: 2;"><p>手机号</p></div>
  		<div class="right" style="flex: 1;"><span class="phonenumber">{{list[0].phonenumber}}</span></div>
		</div>
		<div style="height: 40px;line-height: 40px;border-bottom: solid 1px #DCDCDC;margin-top: 10px;display: flex;">
  		<div class="msg" style="flex: 2;"><p>邮箱</p></div>
  		<div class="right" style="flex: 1;"><span class="email">{{list[0].email}}</span></div>
		</div>
		<div class="btn">
		<el-button type="primary" round style='margin: auto;display: block;'>保存修改</el-button>
		</div>
 </div>
	</div>
	</transition>
</template>
<script>
	export default {
		name:'releaseSearch',
		data(){
			return{
				src:'',
				showflag:false,
				username:'',
				flag:true,
				changeflag:false,
				showto:false,
				fileList:[{'url':require('../../image/man.jpg')}],
				user:'this.list[0].user',
				time:0,
				list:[{
				'user':'尼古拉斯',
				'phonenumber':'88888888',
				'email':'88888888@163.com'	
				}
				]
			}
		},
		beforeUpdate(){
			this.$nextTick(() => {
			if(this.flag==false){
          	this.$refs.inp.focus()
         }
			if(this.fileList.length>0){
				this.showto=true
			}
			})	
		},
		methods:{
		back(){
  		if(this.changeflag==true){
  		  this.$message({
          message: '请保存修改',
          center: true,
          type:'error'
      })
  		}else{
  			this.showflag=false
  			if(this.fileList.length==0){
  				this.fileList.push({'url':require('../../image/man.jpg')})
  			}		
  		}
  		},
  		show(){
  		this.showflag=true
  		},
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
  		edit(){
  		this.flag=false
  		this.username=this.list[0].user
  		},
  		input(){
  		this.flag=true
  		if(this.username!=this.list[0].user){
  		this.list[0].user=this.username
  		this.changeflag=true
  		}
  		}
		}
	}
</script>
<style>
.right .el-input__inner{
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.right .el-input__inner:hover{
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.el-message{
min-width: 50%;
}
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
</style>
<style scoped>
.userInformation{
	position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
	width: 100%;
    z-index: 30;
    background-color: #fff;
    transition: all .2s linear;
}
.userInformation.show-enter, .userInformation.show-leave-to{
	      transform: translateX(100%);
}
.head-img p{
	font-size: 13px;
	text-align: center;
	margin-top: 10px;
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
.msg p{
	font-family: "微软雅黑";
	font-size: 16px;
	padding-left: 20px;
}
.row-bg{
	position: relative;
}
.right{
	position: relative;
}
.phonenumber{
	font-size: 15px;
	color: 	#A9A9A9;
	position: absolute;
	right: 0;	
}
.email{
	font-size: 15px;
	color: 	#A9A9A9;
	position: absolute;
	right: 0;
}
.username{
	font-size: 15px;
	color: 	#A9A9A9;
	position: absolute;
	right: 25px;
}
.right img{
position: absolute;
top: 3px;

}
.btn{
	margin-top: 30px;
}
</style>