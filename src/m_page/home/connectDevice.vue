<template>
  <div class="connectDevice">
      <v-header :go-back="true"></v-header>
    <p class="explain">多尼斯智能设备网络接入</p>
    <dl>
        <dt>
            <img src="../../image/connent.jpg" alt="">
        </dt>
    </dl>
    <!-- <div class="configuration ">
          多尼斯宠联网平台智能设备接入
    </div> -->
    <router-link to="/createQrCode" class="next">下一步</router-link>
  </div>
</template>
<script>
import header from "../../components/header";
export default {
  name: "connectDevice",
  components: {
    "v-header": header
  }
};
</script>
<style scoped>
.explain {
  color: #0ca8e3;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
}
.connectDevice dl {
  width: 200px;
  height: 185px;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 10px;
  overflow: hidden;
}
.connectDevice dl dt {
  text-align: center;
}

.connectDevice dl dt p {
  background-color: #0ca8e3;
  color: #fff;
  height: 30px;
  line-height: 30px;
}
.configuration {
  color: #666;
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
}
.next {
  width: 200px;
  display: block;
  color: #fff;
  background-color: #085196;
  margin: 0 auto;
  padding: 12px;
  text-align: center;
  border-radius: 50px;
  margin-top: 20px;
}
</style>
