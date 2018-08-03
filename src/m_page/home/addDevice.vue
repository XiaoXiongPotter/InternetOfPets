<template>
  <div class="addDevice">
    <v-header :go-back='true' ></v-header>
    <div class="title">
        <i class="line"></i>
        <span>Add Device</span>
        <i class="line"></i>
    </div>
    <p class="explain">请输入您要接入的设备</p>
    <ul>   
        <li>
            <router-link to="/connectDevice">
                <img src="../../image/robot.jpg" alt="">
                <span>多尼斯智能宠物机器狗</span>
            </router-link>
        </li>
        <li>
            <router-link to="/connectDevice">
                <img src="../../image/feeder.jpg" alt="">
                <span>多尼斯智能喂食器</span>
            </router-link>
        </li>
        <li>
            <router-link to="/connectDevice">
                <img src="../../image/bread.jpg" alt="">
                <span>多尼斯智能面包机</span>
            </router-link>
        </li>
    </ul>
  </div>
</template>
<script>
import header from "../../components/header";
export default {
  name: "addDevice",
  components:{
    'v-header':header
  }
};
</script>
<style scroped>
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
.explain {
  text-align: center;
  margin-top: 30px;
  color: #666;
  font-size: 14px;
}
.addDevice ul {
  margin-top: 20px;
}
.addDevice li {
  box-sizing: border-box;
  padding: 10px;
  height: 100px;
  line-height: 100px;
}
.addDevice li span {
  display: inline-block;
  padding-left: 10px;
  height: 100px;
  line-height: 100px;
  vertical-align: middle;
  color: #0ca8e3;
}
.addDevice ul img {
  width: 80px;
  height: 80px;
  vertical-align: middle;
}
</style>
