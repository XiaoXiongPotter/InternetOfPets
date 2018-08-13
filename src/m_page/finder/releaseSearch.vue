<template>
<div class="releaseSearch" ref='banner'>
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
      <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
  </div>
   	<div class="petphoto">
 		<p>宠物照片</p>
 		 <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              :limit='1'
              list-type='picture-card'
              :file-list="fileList"
              :auto-upload="false"
              :on-change='change'
          >
          <i class="el-icon-plus"></i>
        </el-upload>
 	</div>
 <div class="main" ref='wrapper'>
 	<div>
 	<div class="losepet">
 	<p>走失宠物</p>
 	<el-input v-model="petname"></el-input>
 	</div>
 	<div class="getmoney">
 	<p>赏金(￥)</p>
 	<el-input v-model="money"></el-input>
 	</div>
 	<div class="synopsis">
 		<p>协寻简介</p>
 		<el-input v-model="introduction" placeholder="宝贝走丢了总该说点什么吧..."></el-input>
 	</div>
 	 	<div class="losttime">
 		<p>走失时间</p>
 		   <div class="block">
                <el-date-picker
                      v-model="losttime"
                      type="date"
                      value-format="yyyy-MM-dd"
                      placeholder="选择日期">
                </el-date-picker>
          </div>
 	</div>
 	 	<div class="place">
 		<p>走失地点</p>
 		<el-input v-model="losttime" placeholder="宝贝在哪里走丢的呢?"></el-input>
 	</div>
 	<div class="release-btn">
 		 	<el-button type="primary" round style="margin: auto;display: block;margin-top: 15px;">确认发布</el-button>
 	</div>
 	</div>
 </div>
</div>
</template>
<script>
import IScroll from 'iscroll/build/iscroll-probe'
	export default {
			name:'releaseSearch',
			data(){
				return{
					showflag:false,
					petname:'',
					money:'',
					introduction:'',
					losttime:'',
					fileList:[],
					show:false
				}
			},
			mounted(){
	 	  this.$nextTick(() => {
          this.Scroll = new IScroll(this.$refs.wrapper, {
          click: true,
          preventDefault: false,
          tap:true,
          preventDefaultException: {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/}
        })
       })     
  },
		methods:{
  		back(){
  		this.$router.replace({ path: '/mypet' })
  		},
 		change(file, fileList){
            console.log(fileList)
//          if(fileList.length==1){
//              clearInterval(this.time)
//                  this.show=true              
//          }
        var reader = new FileReader();
        reader.readAsDataURL(file.raw);    
        reader.onload = function(e){ 
        this.result // 这个就是base64编码了
        this.src=this.result.split(',')[1]
        sessionStorage.setItem('base',this.src)
  		}
        }
  		}
		}
</script>
<style>
.losepet .el-input__inner{
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.losepet .el-input__inner:hover{
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.getmoney .el-input__inner{
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.getmoney .el-input__inner:hover{
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.losttime .el-input__inner{
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.losttime .el-input__inner:hover{
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.place .el-input__inner{
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.place .el-input__inner:hover{
	border-top-color: white;
	border-right-color: white;
	border-left-color: white;
}
.synopsis .el-input__inner{
	height: 80px;
}
.el-upload--picture-card{
    width: 100px;
    height: 100px;
    line-height: 100px;
    position: relative;
    display: block;
	margin-left: 10px;
}
.el-upload--picture-card i{
   position: absolute;
   left: 37%;
   top: 35%;
  }
  .el-upload-list--picture-card .el-upload-list__item{
    display: block;
    border: none;
    width: 100px;
    height: 100px;
    margin-left: 10px;
}
.el-upload-list--picture-card .el-upload-list__item img{
    width: 100px;
    height: 100px;
}
.disabled .el-upload--picture-card{
    display: none;
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
.main{
	position: absolute;
	top: 170px;
	bottom: 0;
	width: 100%;
	overflow: hidden;
	touch-action: none;
}
.main p{
	padding-left: 10px;
	font-size: 13px;
}
.getmoney{
	margin-top: 15px;
}
.synopsis{
	margin-top: 15px;
}
.synopsis p{
	padding: 10px 10px;
}
.losttime{
	margin-top: 15px;
}
.petphoto{
	margin-top: 15px;
}
.petphoto p{
	padding-left: 10px;
	font-size: 13px;
}
.place{
	margin-top: 15px;
}
</style>