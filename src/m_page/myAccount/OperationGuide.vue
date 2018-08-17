<template>
<div class="OperationGuide">
	 <div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
    <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
   </div>
   <div class="head-nav" ref='banner' style="touch-action: none;">
   	<ul>
   		<li  :class="{active:flag5}" @click="changepage" style="font-size: 12px;">多尼斯智能宠伴机器人</li>
   		<li :class="{active:flag6}" @click="changepage1" style="font-size: 12px;">多尼斯自动饮水器</li>
   		<li :class="{active:flag7}" @click="changepage2" style="font-size: 12px;">多尼斯智能摄像逗宠器</li>
   		<li :class="{active:flag8}" @click="changepage3" style="font-size: 12px;">多尼斯智能喂食器</li>
   		<li :class="{active:flag9}" @click="changepage4" style="font-size: 12px;">多尼斯迷你逗宠机器人</li>
   	</ul>
   </div>
   <div class="OperationGuide-main" v-show="flag5" style="margin-top: 20px;">
   	 <div class="block">
    <el-carousel trigger="click"  arrow="always" :autoplay='false' indicator-position="none">
      <el-carousel-item v-for="item in Intelligentpetrobot" :key="item">
        <img :src="item"/>
      </el-carousel-item>
    </el-carousel>
  </div>
   </div>
   	<div class="OperationGuide-main" v-show="flag6"  style="margin-top: 20px;">
   	   	 <div class="block">
    <el-carousel trigger="click"  arrow="always" :autoplay='false' indicator-position="none">
      <el-carousel-item v-for="item in Automaticwater" :key="item">
      	<img :src="item"/>
      </el-carousel-item>
    </el-carousel>
  </div>
   	</div>
   	<div class="OperationGuide-main"  v-show="flag7" style="margin-top: 20px;">
   	   	 <div class="block">
    <el-carousel trigger="click"  arrow="always" :autoplay='false'  indicator-position="none">
      <el-carousel-item v-for="item in Pamper" :key="item">
			<img :src="item"/>
      </el-carousel-item>
    </el-carousel>
</div>
   	</div>
   	<div class="OperationGuide-main" v-show="flag8"  style="margin-top: 20px;">
 
   	   	 <div class="block">
    <el-carousel trigger="click"  arrow="always" :autoplay='false'  indicator-position="none">
      <el-carousel-item v-for="item in Feeders" :key="item">
		<img :src="item"/>
      </el-carousel-item>
    </el-carousel>
  </div>
   	</div>
   	<div class="OperationGuide-main"  v-show="flag9"  style="margin-top: 20px;">
      <div class="block">
    <el-carousel trigger="click"  arrow="always" :autoplay='false'   indicator-position="none">
      <el-carousel-item v-for="item in Bread" :key="item">
		<img :src="item" />
      </el-carousel-item>
    </el-carousel>
   	</div>
   	</div>
</div>
</template>
<script>
import IScroll from "iscroll/build/iscroll-probe";
export default {
  name: "OperationGuide",
  data() {
    return {
      flag5: true,
      flag6: false,
      flag7: false,
      flag8: false,
      flag9: false,
      Intelligentpetrobot: [
        require("../../image/petrobot1.jpg"),
        require("../../image/petrobot2.jpg"),
        require("../../image/petrobot3.jpg"),
        require("../../image/petrobot4.jpg"),
        require("../../image/petrobot5.jpg"),
        require("../../image/petrobot6.jpg"),
        require("../../image/petrobot7.jpg"),
        require("../../image/petrobot8.jpg")
      ],
      Automaticwater: [
        require("../../image/Waterdispenser1.jpg"),
        require("../../image/Waterdispenser2.jpg"),
        require("../../image/Waterdispenser3.jpg"),
        require("../../image/Waterdispenser4.jpg")
      ],
      Pamper: [
        require("../../image/pamper1.jpg"),
        require("../../image/pamper2.jpg"),
        require("../../image/pamper3.jpg"),
        require("../../image/pamper4.jpg"),
        require("../../image/pamper5.jpg"),
        require("../../image/pamper6.jpg"),
        require("../../image/pamper7.jpg"),
        require("../../image/pamper8.jpg")
      ],
      Feeders: [
        require("../../image/Feeders1.jpg"),
        require("../../image/Feeders2.jpg"),
        require("../../image/Feeders3.jpg"),
        require("../../image/Feeders4.jpg"),
        require("../../image/Feeders5.jpg"),
        require("../../image/Feeders6.jpg"),
        require("../../image/Feeders7.jpg"),
        require("../../image/Feeders8.jpg")
      ],
      Bread: [
        require("../../image/breadinfo1.jpg"),
        require("../../image/breadinfo2.jpg"),
        require("../../image/breadinfo3.jpg"),
        require("../../image/breadinfo4.jpg"),
        require("../../image/breadinfo5.jpg"),
        require("../../image/breadinfo6.jpg"),
        require("../../image/breadinfo7.jpg"),
        require("../../image/breadinfo8.jpg")
      ]
    };
  },
  created() {
    this.$nextTick(() => {
      this.newScroll = new IScroll(this.$refs.banner, {
        click: true,
        scrollX: true,
        scrollY: false
      });
    });
  },
  methods: {
    back() {
      this.$router.replace({ path: "/myAccount" });
    },
    changepage() {
      this.flag5 = true;
      this.flag6 = false;
      this.flag7 = false;
      this.flag8 = false;
      this.flag9 = false;
    },
    changepage1() {
      this.flag6 = true;
      this.flag5 = false;
      this.flag7 = false;
      this.flag8 = false;
      this.flag9 = false;
    },
    changepage2() {
      this.flag7 = true;
      this.flag5 = false;
      this.flag6 = false;
      this.flag8 = false;
      this.flag9 = false;
    },
    changepage3() {
      this.flag8 = true;
      this.flag5 = false;
      this.flag7 = false;
      this.flag6 = false;
      this.flag9 = false;
    },
    changepage4() {
      this.flag9 = true;
      this.flag5 = false;
      this.flag7 = false;
      this.flag8 = false;
      this.flag6 = false;
    }
  }
};
</script>
<style>
.el-carousel__container {
  height: 300px;
}
.OperationGuide .el-carousel__container {
  width: 100%;
}
.OperationGuide .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.OperationGuide .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
<style scoped>
.block img {
  width: 100%;
  height: 100%;
}
.active {
  border-bottom: 1px solid #409eff;
  color: red;
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
  position: relative;
  width: 100%;
  background: #fff;
  height: 40px;
  line-height: 40px;
}
.back {
  width: 22px;
  height: 22px;
  position: absolute;
  top: 18%;
}
.head-nav {
  overflow: hidden;
}
.head-nav ul {
  display: flex;
  flex-wrap: nowrap;
  width: 720px;
  text-align: center;
}
.head-nav li {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.OperationGuide-main h4 {
  padding-top: 5px;
}
.OperationGuide-main p {
  font-size: 13px;
  padding-top: 10px;
  text-indent: 10px;
}
.foot-page {
  position: fixed;
  width: 100%;
  bottom: 0px;
}
.introduction ul li {
  padding: 10px;
  font-size: 13px;
  color: #409eff;
}
</style>
