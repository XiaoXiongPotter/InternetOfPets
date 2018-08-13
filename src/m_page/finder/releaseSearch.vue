<template>
<div class="releaseSearch" ref='banner'>
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
      <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
  </div>
   	<div class="petphoto">
 		<p>宠物照片</p>
 		<div class="head_img">
       	<img :src="imgflag?avatar:avatar1"  @click.stop="uploadHeadImg" style="margin-left:10px;margin-top: 10px;"/>
    	 </div>
     	<input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
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
					avatar:'',
					avatar1:require('../../image/addpet.png'),
					imgflag:false
				}
			},
			mounted(){
	 	  this.$nextTick(() => {
          this.Scroll = new IScroll(this.$refs.wrapper, {
          click: true,
          preventDefault: false
        })
       })     
  },
		methods:{
		  	  	    // 打开图片上传
    uploadHeadImg: function () {
       	this.$el.querySelector('.hiddenInput').click()
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
  		this.$router.replace({ path: '/mypet' })
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
</style>
<style scoped>
.head_img img{
  width:60px;
  height:60px;
}
.hiddenInput{
  display: none;
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
.main{
	position: absolute;
	top: 150px;
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