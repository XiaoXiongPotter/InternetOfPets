<template>
<div class="necklaceManage">
  <header-top :go-back="true"></header-top>
   <div class="title">
        <i class="line"></i>
        <span>Device Manage</span>
        <i class="line"></i>
    </div>
    <div class="device-info">
      <ul>
        <li>
          <span>产品名称</span>
          <p>宠物智能定位项圈</p>
        </li>
        <li>
          <span>产品编号</span>
          <p>2346546464</p>
        </li>
        <li>
          <span>绑定宠物</span>
          <p>二哈哈</p>
        </li>
      </ul>
    </div>
    <div class="btnGroup">
        <router-link class="btn" to='/changepet'>更改绑定宠物</router-link>
       <button class="btn">设备解绑</button>
    </div>
</div>
</template>
<script>
import headerTop from "../../components/header";
export default {
  name: "necklaceManage",
  components: {
    headerTop
  }
};
</script>
<style>
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
.device-info li{
  padding:10px;
}
.device-info span{
  font-size: 14px;
  color:#0ca8e3
}
.device-info p{
  color:#666;
  margin-top:10px;
}
.btnGroup .btn{
  display: block;
  width: 80%;
  margin: 0 auto;
  margin-top: 40px;
  border: none;
  background: #085196;
  color: #fff;
  font-size: 16px;
  border-radius: 50px;
  padding:10px;
  text-align: center;
  box-sizing: border-box;
}

</style>