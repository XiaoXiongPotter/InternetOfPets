<template>
	<div class="binddevice">
		<p class="petdevice" v-if="device.length>0">绑定设备:<span v-for="(item,index) in device" :key="index">{{item}}</span></p>
		<p class="adddevice" v-else @click="adddevice">点击添加设备</p>
	</div>
</template>
<script>
import { getPetDevices } from "../ClientServerApi/index.js";
import Qs from "qs";
export default {
  name: "binddevice",
  props: ["id"],
  data() {
    return {
      device: [],
      device1: ""
    };
  },
  mounted() {
    let params = Qs.stringify({ petId: this.id });
    getPetDevices(params)
      .then(res => {
        // console.log(res);
        if (res.data.header.status == 1000) {
          this.device1 = res.data.data[0].device.type;
          if (this.device1 == "NECKLACE") {
            this.device.push("智能项圈");
          }
          if (this.device1 == "TAG") {
            this.device.push("协寻二维码");
          }
          if (this.device1 == "ROBOT") {
            this.device.push("宠物机器人");
          }
          if (this.device1 == "BLUETOOTH") {
            this.device.push("蓝牙计步器");
          }
          if (this.device1 == "FEEDER") {
            this.device.push("智能喂食器");
          }
          if (this.device1 == "DISPENSER") {
            this.device.push("智能投食器");
          }
        }
        console.log(this.device)
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    adddevice() {
      this.$router.replace({ path: "/addDevice" });
    }
  }
};
</script>
<style scoped>
.petdevice {
  padding-top: 10px;
  font-family: "微软雅黑";
  font-size: 14px;
}
.adddevice {
  padding-top: 1rem;
  font-family: "微软雅黑";
  font-size: 1.2rem;
  color: #034b94;
  display: inline-block
}
</style>