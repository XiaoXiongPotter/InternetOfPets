<template>
<div class="guide"> 
	<router-link to="/forgetpassword">11111111111</router-link>
    <div class="" ref="wrapper" >
  <img src="../../image/guide.jpg" alt="">
<br>
<br>
<br>
<br>

<br>
<br>
    </div>
  
</div>
</template>
<script>
import headerTop from "../../components/header.vue";
import IScroll from 'iscroll/build/iscroll-probe'
export default {
  name: "guide",
  data() {
    return {};
  },
  created(){
	 this.$nextTick(() => {
          this.Scroll = new IScroll(this.$refs.wrapper, {
          click: true
        })
       })     
  },
  components: {
    headerTop
  }
};
</script>
<style scoped>
.guide img {
  width: 100%;
}

</style> 