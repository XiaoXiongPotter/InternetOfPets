<template>
  <div class="home">
    <v-header :go-back='false' :add-devices='true'></v-header>
    <div v-if="islogin">
      <div class="title">
        <i class="line"></i>
        <span>HOME</span>
        <i class="line"></i>
      </div>
      <ul class="device_box">
        <li v-for="(info,index) in infos" :key="index">
          <div class="device_box_l">
            <img :src="'../../../static/img/'+info.device.type +'.png'">
            <span>{{info.device.type | infosCmputed}}</span>
          </div>
          <div class="device_box_r">
            <div class="touxiang_box">
              <img :src="info.pet?info.pet.portrait:'../../../static/img/defaultpet.jpg'" alt="">
            </div>
            <div class="info_box">
              <p>{{info.device.deviceName}}</p>
              <p>{{info.pet?info.pet.name:'未绑定宠物'}}</p>
            </div>
            <div class="btn_box">
              <a class="btn caozuo" v-show="info.device.type=='NECKLACE'?true:false" href="../../static/page/necklace_map.html"></a>
              <router-link class="btn caozuo" v-show="info.device.type=='TAG'?true:false" to="/tag"></router-link>
              <router-link class="btn guanli" :to="{path:'/deviceManage',query:{deviceCode:info.device.deviceCode,binded:info.pet==null?'':info.pet.id}}"></router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="notlogin" v-else>
      亲，请先登录再查看您的设备
      <router-link :to="{name:'login'}">去登录</router-link>
    </div>
    <v-foot :loginsuccess='loginsuccess' :loginshowflag='loginshowflag'></v-foot>
  </div>
</template>
<script >
import { getDevices } from "../../deviceApi/index.js";
import header from "../../components/header";
import footernav from "../../components/footernav";

export default {
    name: "home",
    data() {
        return {
            necklace: require("../../image/necklace.png"),
            islogin: false,
            infos: "",
            loginsuccess: false,
            loginshowflag: true
        };
    },
    mounted() {
        console.log(sessionStorage);

        if (sessionStorage.login == 1) {
            this.islogin = sessionStorage.login;
            getDevices()
                .then(res => {
                    this.infos = res.data.data;
                    console.log(res.data);
                })
                .catch(err => {});
        }
    },
    created() {
        this.$nextTick(() => {
            if (sessionStorage.getItem("login")) {
                this.loginsuccess = true;
                this.loginshowflag = false;
            }
        });
    },
    computed: {},
    filters: {
        infosCmputed: function(value) {
            if (value == "FEEDER") return "智能喂食器";
            if (value == "BLUETOOTH") return "蓝牙计步器";
            if (value == "ROBOT") return "宠物机器人";
            if (value == "TAG") return "协寻二维码";
            if (value == "NECKLACE") return "智能项圈";
        },
        lowercase: function(value) {
            return value.toLowerCase();
        }
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
.home {
    width: 100%;
}
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
    padding-top: 20px;
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
    padding: 0px 15px;
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid #ddd;
}
.device_box_l img{
  width:60px;
  height:60px;
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
    height:100%;
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
    width: 60px;
    height: 60px;
    vertical-align: middle
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
.notlogin {
    text-align: center;
}
</style>
