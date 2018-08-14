
<template>
  <div class="nav">
    <!--命名路由-->
    <ul>
      <!--this inspection reports XML/HTML tags with missing mandatory attrbutes ,you can specify attrbute name that should not  be reported-->
      <!--home被点击后，一直处于激活状态，因此需要使用精确匹配模式，在router-link中添加exact属性-->
      <router-link :to="{name:'home'}" tag="li" active-class="activeNav" exact>
        <div>
          <i class="icon home-tip"></i>
        </div>
        <div>首页</div>
      </router-link>
      
      <router-link :to="{name:'finder'}" active-class="activeNav" tag="li">
        <div>
          <i class="icon finder-tip"></i>
        </div>
        <div>协寻</div>
      </router-link>
      <router-link :to="{name:'account',params:{user:'xu'}}" active-class="activeNav" tag="li" v-show='loginsuccess'>
        <div>
          <i class="icon account-tip"></i>
        </div>
        <div>我的</div>
      </router-link>
       <router-link :to="{name:'login'}" active-class="activeNav" tag="li" v-show='loginshowflag'>
        <div>
          <i class="icon account-tip"></i>
        </div>
        <div>我的</div>
      </router-link>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "footernav",
  props:['loginsuccess','loginshowflag']
};
</script>
<style >
.nav {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #0ca8e3;
  width: 100%;
  font-size: 14px;
  color: #ffffff;
  box-sizing: border-box
}
.nav li {
  width: 33.3%;
  padding:5px 0;
  float: left;
  text-align: center;
}
.icon{
  display: block;
  width:25px;
  height: 25px;
  margin: 0 auto;
}
.finder-tip{
  background-image: url(../image/finder-tip.png);
  background-size: 25px;
}
.home-tip{
  background-image: url(../image/home-tip.png);
  background-size: 25px;
}
.account-tip{
  background-image: url(../image/account-tip.png);
  background-size: 25px;
}
.activeNav{
  color: #000
}
</style>

