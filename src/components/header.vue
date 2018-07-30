
<template>
  <div class="header">
      <div class="imgBox"><img src="../image/logo-m.png" alt=""></div>
          <router-link class="add" to="/addDevice"></router-link>
   
  </div>
</template>
<script>
export default {
  name: "Pheader"
};
</script>
<style>
.header {
  width: 100%;
  background: #fff;
  color: #0ca8e3;
  height: 40px;
  line-height: 40px;
  position: relative;
}
.header .imgBox {
  width: 100px;
  margin: 0 auto;
}
.header img {
  width: 100%;
  vertical-align: middle;
}
.header .add {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-image: url(../image/add.png);
  background-size: 25px;
  position: absolute;
  right: 10px;
  top:10px;
  box-sizing: border-box;
  
}
</style>

