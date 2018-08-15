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
          <p v-text='deviceName'></p>
        </li>
        <li>
          <span>产品编号</span>
          <p v-text='deviceCode'></p>
        </li>
        <li>
          <span>绑定宠物</span>
          <p><el-select v-model="bindPet" placeholder="未绑定宠物" @change="changepet" >
            <el-option
              v-for="(item,index) in options"
              :key="index"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
          </p>
        </li>
      </ul>
    </div>
    <div class="btnGroup">
        <!-- <router-link class="btn" to='/changepet'>更改绑定宠物</router-link> -->
         <router-link class="btn" :to="{path:'/releaseSearch', query:{id:bindPet,petname:petname}}">发布协寻信息</router-link>
         <el-button type="text" class="btn"  @click="unbind">设备解绑</el-button>
     
    </div>
</div>
</template>
<script>
import headerTop from "../../components/header";
import Qs from "qs";
import { getDevicesInfo } from "../../deviceApi/index.js";
import { getpet } from "../../ClientServerApi/index.js";
import { bindPet } from "../../deviceApi/index.js";
import { unbindDevice } from "../../deviceApi/index.js";
export default {
  name: "deviceManage",
  data() {
    return {
      deviceInfo: "",
      deviceName: "",
      deviceCode: "",
      options: "",
      bindPet: this.$route.query.binded,
      petname:''
    };
  },
  created() {
    let params = Qs.stringify({
      deviceCode: this.$route.query.deviceCode
    });
    //获得谁设备详细信息
    getDevicesInfo(params)
      .then(res => {
        this.deviceInfo = res;
        this.deviceName = res.data.data.device.deviceName;
        this.deviceCode = res.data.data.device.deviceCode;
        this.petId = res.data.data.device.petId
        //  this.bindPet =res.data.data.pet==null?'':res.data.data.pet
        console.log("bingpat", res.data);
        //输出返回值
        console.log("设备", res);
      })
      .catch(err => {});
    getpet().then(res => {
      this.options = res.data.data;
      console.log("petlist", res.data.data);
      
    });
  },
  methods: {
    //切换绑定宠物
    changepet() {
      console.log(this.bindPet, this.deviceCode);
      let params = Qs.stringify({
        deviceCode: this.deviceCode,
        petId: this.bindPet
      });
      //绑定宠物
      bindPet(params).then(res => {
        console.log(res);
         this.$message({
                type: "success",
                message: "绑定宠物成功!"
              });
              this.$router.push({ path: "/" });
      });
    },
    //设备解绑
    unbind() {
      let params = Qs.stringify({
        code: this.deviceCode
      });
      this.$confirm("确定要解绑设备吗?", "解绑", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          unbindDevice(params).then(res => {
            if (res.data.header.status == "1000") {
              this.$message({
                type: "success",
                message: "解绑成功!"
              });
              this.$router.push({ path: "/" });
            }
            console.log(res.data.header);
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消解绑"
          });
        });
    }
  },
  components: {
    headerTop
  }
};
</script>
<style scoped>
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
.device-info li {
  padding: 10px;
}
.device-info span {
  font-size: 14px;
  color: #0ca8e3;
}
.device-info p {
  color: #666;
  margin-top: 10px;
}
.btnGroup .btn {
  display: block;
  width: 80%;
  margin: 0 auto;
  margin-top: 40px;
  border: none;
  background: #085196;
  color: #fff;
  font-size: 16px;
  border-radius: 50px;
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
}
 
</style>
