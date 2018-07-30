<template>
  <transition name="show">
<div class="releaseSearch" v-show="showflag" ref='banner'>
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
    <span>DOGNESS</span>
 </div>
 <div class="main">
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
 </div>
</div>
</transition>
</template>
<script>

	export default {
			name:'releaseSearch',
			data(){
				return{
					showflag:false,
					petname:'',
					money:'',
					introduction:''
				}
			},
			methods:{
  		back(){
  		this.showflag=false
  		},
  		show(){
  			this.showflag=true
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
.synopsis .el-input__inner{
	height: 100px;
}
</style>
<style scoped>
.releaseSearch{
	position: fixed;
    left: 0;
    top: 0;
    bottom: 49px;
	width: 100%;
    z-index: 30;
    background-color: #fff;
    transition: all .2s linear;
}
.releaseSearch.show-enter, .releaseSearch.show-leave-to{
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
.header{
	display: flex;
	position: relative;
}
.back{
	width: 22px;
	height: 22px;
	position: absolute;
	top: 18%;
}
.main{
	margin-top: 20px;
}
.main p{
	padding-left: 10px;
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
</style>