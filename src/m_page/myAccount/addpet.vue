<template>
	<div class="addpet">
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
 	<div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
 </div>
  		<div class="title">
 		<el-upload
  			action="https://jsonplaceholder.typicode.com/posts/"
  			:class="{disabled:show}"
  			:limit='1'
  			list-type='picture-card'
  			:file-list="fileList"
  			:auto-upload="false"
  			:on-change='change'
  			:on-remove='remove'
  		>
  		<i class="el-icon-plus"></i>
		</el-upload>
 				
 		</div>
 <div class="addpet-main" ref='wrapper'>
 	<div>
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
 				<div class="block">
    			<el-date-picker
      				v-model="birthday"
      				type="date"
      				placeholder="选择日期">
    			</el-date-picker>
  				</div>
 				</div>
 				<div class="haircolor">
 					<span>毛色</span>
 					<el-input v-model='haircolor' placeholder='输入毛色'></el-input>
 				</div>
 				</div>
 				<div class="character">
 				<span>性格</span>
 				<el-input v-model="character" placeholder='输入性格'></el-input>
 			</div>
 			<div class="save-btn" style="margin: 20px 0;">
 				 <el-button type="primary" round style='margin: auto;display: block;' @click='add'>确认添加</el-button>
 			</div>
 		</div>
 	</div>
 </div>
	</div>
</template>
<script>
	import IScroll from 'iscroll/build/iscroll-probe'
	import {addPet} from '../../ClientServerApi/index.js'
	export default {
		name:'addpet',
		data(){
			return{
				src:'',
				petname:'',
				petbelong:'',
				sex:'',
				height:'',
				weight:'',
				birthday:'',
				haircolor:'',
				pettype:'',
				character:'',
				fileList:[],
        		show:false,
        		time:0
			}
		},
		 mounted(){
	 	  this.$nextTick(() => {
          this.Scroll = new IScroll(this.$refs.wrapper, {
          click: true,
          preventDefault: false,
		  preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/ }
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
		change(file, fileList){
    		console.log(fileList)
    		if(fileList.length==1){
    			clearInterval(this.time)
    				this.show=true  			
    		}
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
    		if(fileList.length==0){
    			this.time=setInterval(()=>{
    				this.show=false
    			},500)
    		}
    	},
		add(){
			let params = {
				name:this.petname,
				height:this.height,
				weight:this.weight,
				birthTime:this.birthday,
				petType:this.petbelong,
				color:this.haircolor,
				gender:this.sex,
				portrait:this.src,
				character:this.character
			}
			addPet(params).then(res => {
				console.log(res)
			}).catch(error => {
				console.log(error)
			})
		}
		}
	}
</script>
<style>
.pet .el-date-editor.el-input, .el-date-editor.el-input__inner{
	width: 90px;
}
.pet .el-input__icon{
	display: none;
}
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
</style>
<style scoped>
.addpet{
	width: 100%;
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
	top: 150px;
	bottom: 0;
	width: 100%;
	max-width: 720px;
	overflow: hidden;
	touch-action: none;
}
.petname{
	margin-left: 15px;
	width: 50%;
}
.pet{
	width: 100%;
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
.character{
	margin-top: 40px;
	margin-left: 15px;
	width: 50%;
}
</style>