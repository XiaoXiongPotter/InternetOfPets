<template>
<div class="qrFindError"> 
	<div class="header">
	 	<img src="../../image/back.png" class="back" @click="back"/>
	  <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
	</div>
  <div class="error_text">
  	<!--<p>抱歉,<span>扫码失败!</span></p>
  	<span>失败原因：设备有问题。</span>
  	<div>解决方案：请联系客服!</div>-->
  	<img src="../../image/error1.png" alt="错误"  />
  	<p>设备有问题，请联系客服！</p>
  </div>
</div>
</template>
<script>
import headerTop from "../../components/header.vue";
export default {
  name: "qrFindError",
  data() {
    return {};
  },
  created(){    
  },
  components: {
    headerTop
  },
  methods:{
  	back:function(){
  		this.$router.back(-1);
  	}
  }
};
</script>
<style scoped>
.findPetInfo{
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
	position: relative;
	border-bottom: solid 1px #DCDCDC;
	width: 100%;
 	background: #fff;
	height: 40px;
	line-height: 40px;
}
.back{
	width: 22px;
	height: 22px;
	position: absolute;
	top: 18%;
}
/*.error_text{
	width: 18rem;
	margin: 0 auto;
	margin-top: 2rem;
	font-size: 1.5rem;
	color: #666666;
	line-height: 2.8rem;
	box-sizing: border-box;
	padding: 1rem;
	border: 1px;
	box-shadow: 0 0px 15px #38AAFF;
	border-radius: 8px;
}
.error_text p span{
	color: red;
	font-size: 1.8rem;
	font-weight: bold;
}*/
.error_text {
	width: 100%;
	box-sizing: border-box;
	padding: 0 1rem;
	text-align: center;
	margin-top: 10rem;
}
.error_text img{
	width: 5rem;
}
.error_text p{
	font-size: 1.5rem;
	line-height: 3rem;
}
</style> 