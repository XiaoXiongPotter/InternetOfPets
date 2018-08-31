<template>
  <div class="finder">
  
  
  
    <div class="header">
  
  
  
      <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
  
  
  
    </div>
  
  
  
    <el-main style="padding: 0;">
  
  
  
      <div class="main-header">
  
  
  
        <span>Finder</span>
  
  
  
      </div>
  
  
  
      <div class="main-nav">
  
  
  
        <div class="main-nav-left" @click="distance"><span>距离</span><img :src="src1" /></div>
  
  
  
        <div class="main-nav-right" @click="time"><span>时间</span><img :src="src2" /></div>
  
  
  
      </div>
  
  
  
      <div style="margin-top:15px;display:none;">
  
  
  
        <p>个人位置
  
  
  
          <p>
  
  
  
            <div id="allmap" style="width: 90%;height:200px;border: 1px solid gray;overflow:hidden;margin:10px auto;"></div>
  
  
  
      </div>
  
  
  
      <div class="main-content" ref="wrapper">
  
  
  
        <ul>
  
  
  
          <li v-for="(item,index) in list" :key='index'>
  
  
  
            <img :src='item.portrait' @click="inquire(index)">
  
  
  
            <div class="message" @click="inquire(index)">
  
  
  
              <p class="petname">{{item.petName}}</p>
  
  
  
              <span>{{item.loseTime}}</span>
  
  
  
              <p class="place">{{item.lostPlace}}</p>
  
  
  
            </div>
  
  
  
            <div class="reward">
  
  
  
              <div class="reward-title"><span>赏金</span></div>
  
  
  
              <p>￥{{item.bounty}}</p>
  
  
  
              <div class="reward-btn">
  
  
  
                <el-button size="mini" style="color: #FF8C00;padding: 3px 3px;position: absolute;left: 15%;"><a :href="'tel:'+item.mobile">联系主人</a></el-button>
  
  
  
              </div>
  
  
  
            </div>
  
  
  
          </li>
  
  
  
        </ul>
            <el-pagination layout="prev, pager, next" :total="this.page" style="text-align:center;position:fixed;bottom:50px;left:50%;transform:translate(-50%);" @current-change="handleSizeChange" v-if='this.page'>
  
  
  
          </el-pagination>
  
  
      </div>
  
  
  
    </el-main>
  
  
  
    <v-foot :loginsuccess='loginsuccess' :loginshowflag='loginshowflag'></v-foot>
  
  
  
  </div>
</template>
<script>
import IScroll from "iscroll/build/iscroll-probe";

import footernav from "../../components/footernav";

import { nearSearch } from "../../ClientServerApi/index.js";

import Qs from "qs";

export default {
  name: "finder",

  data() {
    return {
      list: "",

      src1: require("../../image/icon-up.png"),

      srcchange1: false,

      src2: require("../../image/icon-up.png"),

      srcchange2: false,

      loginsuccess: false,

      loginshowflag: true,

      page: "",

      curpage: 1
    };
  },

  beforeUpdate() {
    this.$nextTick(() => {
      this.Scroll = new IScroll(this.$refs.wrapper, {
        click: true
      });

      this.ready();
    });
  },

  created() {
    this.$nextTick(() => {
      if (sessionStorage.getItem("login")) {
        this.loginsuccess = true;

        this.loginshowflag = false;
      }

      let params = Qs.stringify({
        lat: sessionStorage.getItem("lat"),

        lon: sessionStorage.getItem("lng"),

        // lat: 31.18826,

        // lon: 121.43687,

        curPage: this.curpage,

        pageSize: 5
      });

      console.log(params);

      nearSearch(params)
        .then(res => {
          this.list = res.data.data.list;
          console.log(res);
          this.page = Math.ceil(res.data.data.count / 5) * 10;
        })

        .catch(error => {
          console.log(error);
        });
    });
  },

  methods: {
    //定位

    ready: function() {
      var th = this;

      var map = new BMap.Map("allmap");

      var point = new BMap.Point(114.0552, 22.55); // 创建点坐标

      var marker = new BMap.Marker(point); // 创建标注

      map.addOverlay(marker);

      map.centerAndZoom(point, 18);

      map.enableScrollWheelZoom(true); // 启用滚轮放大缩小，默认禁用

      map.enableContinuousZoom(true); // 启用地图惯性拖拽，默认禁用

      map.addControl(new BMap.NavigationControl()); // 添加默认缩放平移控件

      map.addControl(new BMap.OverviewMapControl()); // 添加默认缩略地图控件

      var geolocation = new BMap.Geolocation();

      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);

            map.addOverlay(mk);

            map.panTo(r.point);

            // console.log(r.point);

            sessionStorage.setItem("lng", r.point.lng);

            sessionStorage.setItem("lat", r.point.lat);
          } else {
            alert("failed" + this.getStatus());
          }
        },
        {
          enableHighAccuracy: true
        }
      );
    },

    distance() {
      this.srcchange = !this.srcchange;

      this.list.reverse();

      if (this.srcchange == true) {
        this.src1 = require("../../image/icon-down.png");
      } else {
        this.src1 = require("../../image/icon-up.png");
      }
    },

    time() {
      this.srcchange2 = !this.srcchange2;

      this.list.reverse();

      if (this.srcchange2 == true) {
        this.src2 = require("../../image/icon-down.png");
      } else {
        this.src2 = require("../../image/icon-up.png");
      }
    },

    handleSizeChange(event) {
      this.curpage = event;

      let params = Qs.stringify({
        lat: sessionStorage.getItem("lat"),

        lon: sessionStorage.getItem("lng"),

        // lat: 31.18826,

        // lon: 121.43687,

        curPage: this.curpage,

        pageSize: 5
      });

      console.log(params);

      nearSearch(params)
        .then(res => {
          this.list = res.data.data.list;

          console.log(res);

          this.page = Math.ceil(res.data.data.count / 5) * 10;
        })

        .catch(error => {
          console.log(error);
        });
    },

    inquire(index) {
      if (sessionStorage.getItem("login")) {
        this.$router.push({
          name: "petDetails",

          query: {
            featurePhoto: this.list[index].featurePhoto,

            petName: this.list[index].petName,

            petType: this.list[index].petType,

            bounty: this.list[index].bounty,

            loseTime: this.list[index].loseTime,

            lostPlace: this.list[index].lostPlace,

            content: this.list[index].content,

            mobile: this.list[index].mobile,

            email: this.list[index].email
          }
        });
      } else {
        this.$router.replace("/login");
      }
    }
  },

  components: {
    "v-foot": footernav
  }
};
</script>
<style scoped>
a {
  color: #ff8c00;
}

.header .imgBox {
  width: 100px;

  margin: 0 auto;
}

.imgBox img {
  width: 100%;

  vertical-align: middle;
}

.header {
  display: flex;

  width: 100%;

  background: #fff;

  color: #0ca8e3;

  height: 40px;

  line-height: 40px;

  position: relative;
}

.main-header {
  text-align: center;

  font-size: 15px;

  color: #00bfff;

  position: relative;

  width: 100px;

  left: 50%;

  transform: translate(-50%);
}

.main-header span::before {
  content: "";

  border-top: solid 1px #0000ff;

  width: 15px;

  display: block;

  position: absolute;

  top: 50%;

  left: 0;
}

.main-header span::after {
  content: "";

  border-top: solid 1px #0000ff;

  width: 15px;

  display: block;

  position: absolute;

  top: 50%;

  right: 0;
}

.main-nav {
  display: flex;

  border-bottom: solid 1px #c0c0c0;

  position: relative;
}

.main-nav-left {
  flex: 1;

  height: 50px;

  line-height: 50px;

  text-align: center;

  color: #696969;
}

.main-nav-left::after {
  border-right: solid 1px #c0c0c0;

  content: "";

  display: block;

  position: absolute;

  top: 40%;

  left: 50%;

  height: 15px;
}

.main-nav-right {
  flex: 1;

  height: 50px;

  line-height: 50px;

  text-align: center;

  color: #696969;
}

.main-nav-left img {
  vertical-align: middle;
}

.main-nav-right img {
  vertical-align: middle;
}

.main-content {
  position: absolute;

  top: 106px;

  bottom: 79px;

  width: 100%;

  overflow: hidden;

  touch-action: none;

  max-width: 720px;
}

.main-content ul li {
  display: flex;

  border-bottom: solid 1px #c0c0c0;
}

.main-content ul li img {
  width: 70px;

  height: 70px;

  padding: 15px 10px;
}

.message {
  flex: 1;

  padding: 15px 0px;
}

.message span {
  font-size: 13px;
}

.place {
  font-size: 13px;

  padding-top: 10px;
}

.petname {
  font-size: 1.8rem;

  color: #034b94;

  padding-bottom: 10px;
}

.reward {
  width: 70px;

  padding: 15px 0px;
}

.reward p {
  color: #de3f19;

  text-align: center;

  padding: 12px 0px;
}

.reward-title {
  font-size: 10px;

  text-align: center;
}

.reward-btn {
  position: relative;
}
</style>
