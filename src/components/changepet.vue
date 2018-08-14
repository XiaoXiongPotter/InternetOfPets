<template>
<div class="changepet">
  <header-top :go-back='true'></header-top>
  <div class="itemBox">
     <el-radio class="radio" v-model="radio" label="1">
       <img src="../image/dog-pic.jpg" alt="">
        <span> 小小柴</span>
     </el-radio>
     <br>
  <el-radio  class="radio"  v-model="radio" label="2">
    <img src="../image/dog-pic.jpg" alt="">
        <span> 小小柴</span>

  </el-radio>
  </div>
  <div class="btn">确定绑定</div>
</div>
</template>
<script>
import headerTop from "../components/header";
export default {
  name: "changepet",
  data() {
    return {
      radio: "2"
    };
  },
  components: {
    headerTop
  }
};
</script>
<style scoped>
.itemBox {
  padding: 10px;
}
.radio img {
  width: 50px;
  margin-left: 20px;
  vertical-align: middle;
}
.radio span {
  margin-left: 20px;
  font-size: 16px;
}
.radio {
  margin-top: 20px;
}
.btn {
  color: #fff;
  border-radius: 50px;
  text-align: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  padding: 10px;
  background: #085196
}
</style>