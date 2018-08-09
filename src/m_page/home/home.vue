
<template>
<div>
<v-header :go-back='false' :add-devices='true'></v-header>
    <div class="title">
        <i class="line"></i>
        <span>Home</span>
        <i class="line"></i>
    </div>
    <ul class="device_box">
        <li v-for="(info,index) in infos" :key="index">
            <div class="device_box_l">
                <img  :src="'../../../static/img/'+info.type+'.png'">
                <span>{{info.type}}</span>
            </div>
            <div class="device_box_r">
                <div class="touxiang_box">
                    <img src="../../image/dog-pic.jpg" alt="">
                </div>
                <div class="info_box">
                        <p>{{info.name}}</p>
                        <p>{{info.dogType}}</p>
                </div>
                <div class="btn_box">
                    <a class="btn caozuo" href ="../../static/page/necklace_map.html"></a>
                    <!--<router-link class="btn caozuo" to="/deviceManage"></router-link>-->
                    <router-link class="btn guanli" to="/necklaceManage"></router-link>
                </div>
            </div>
        </li>
    </ul>
    <v-foot :loginsuccess='loginsuccess' :loginshowflag='loginshowflag'></v-foot>
</div>
</template>
<script >
import header from "../../components/header";
import footernav from "../../components/footernav";
export default {
  name: "home",
  data() {
    return {
      necklace: require("../../image/necklace.png"),
      infos: [
        {
          type: "necklace",
          touxiang: "../../image/dog-pic.jpg",
          name: "大金毛",
          dogType: "拉布拉多"
        },
        {
          type: "pendant",
          touxiang: "../../image/dog-pic.jpg",
          name: "小金毛",
          dogType: "阿拉斯加"
        }
      ],
      loginsuccess:false,
      loginshowflag:true
    };
  },
    created(){
	 this.$nextTick(() => {
       if(sessionStorage.getItem('login')){
          	this.loginsuccess=true
          	this.loginshowflag=false
         }         
       })     
  },
  // computed: {
  //   deviceType:fucntion(type){
  //   }
  // },
  components: {
    "v-header": header,
    "v-foot": footernav
  }
};
</script>
<style scoped>
img {
  width: 100%;
}
.title {
  text-align: center;
}
.title span {
  color: #0ca8e3;
  font-size: 14px;
}
.line {
  display: inline-block;
  width: 15px;
  height: 1px;
  background: #085196;
  margin: 0 5px;
  position: relative;
  top: -4px;
}
.device_box li {
  box-sizing: border-box;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
}
.device_box li::after {
  content: " ";
  display: block;
  clear: both;
}
.device_box_l {
  float: left;
  width: 30%;
  padding: 10px 15px;
  box-sizing: border-box;
  border-right: 1px solid #ddd;
}
.device_box_l span {
  font-size: 12px;
  display: block;
  text-align: center;
  margin-top: 5px;
}
.device_box_r {
  float: left;
  width: 70%;
  padding: 0 10px;
  box-sizing: border-box;
}
.touxiang_box {
  width: 30%;
  float: left;
  overflow: hidden;
}
.touxiang_box img {
  border-radius: 5px;
}
.info_box {
  float: left;
  padding: 0 10px;
  font-size: 14px;
  width: 45%;
  box-sizing: border-box;
}
.info_box p {
  margin-top: 10px;
}
.info_box::after {
  content: " ";
  display: inline-block;
  clear: both;
}
.btn_box {
  float: left;
  width: 20%;
  line-height: 82px;
  padding-left: 10px;
  box-sizing: border-box;
}
.btn {
  display: block;
  width: 25px;
  height: 26px;
  background-size: 25px;
  background-repeat: no-repeat;
  float: left;
  margin: 2px 0;
}
.caozuo {
  background-image: url(../../image/caozuo.png);
}
.guanli {
  background-image: url(../../image/guanli.png);
}
</style>
