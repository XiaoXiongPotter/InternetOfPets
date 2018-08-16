<<<<<<< HEAD
<template>
  <div class="connectDevice">
    <v-header :go-back="true"></v-header>
    <p class="explain">智能宠物机器狗网络接入</p>
    <div style="margin: 20px;">
      <el-form :label-position="labelPosition" label-width="80px" :model="formcon">
      <el-form-item label="请输入正在连接的wifi名">
        <el-input v-model="formcon.name"></el-input>
      </el-form-item>
      <el-form-item label="请输入正在连接的wifi密码">
        <el-input v-model="formcon.pwd"></el-input>
      </el-form-item>

    </el-form>
    </div>
    
    <button class='btn' @click="getQrCode"> 生成二维码</button>
  </div>
</template>
<script>
import header from "../../components/header";
import Qs from "qs";
import { bindDevice } from "../../deviceApi/index.js";
export default {
    data() {
        return {
            labelPosition: "top",
            formcon: {
                name: "",
                pwd: ""
            }
        };
    },
    name: "createQrCode",
    methods: {
        getQrCode() {
            let params = Qs.stringify({
                wifi: this.formcon.name,
                pwd: this.formcon.pwd
            });

            bindDevice(params).then(res => {
                console.log(res.data.data);
                this.$alert(
                    '<img src="' + res.data.data + '" style="width:100%">',
                    "请将二维码对准设备摄像头",
                    {
                        dangerouslyUseHTMLString: true
                    }
                );
            });
        }
    },
    components: {
        "v-header": header
    }
};
</script>
<style scoped>
.btn {
    border: 0;
    color: #fff;
    background: #034694;
    padding: 10px 0;
    border-radius: 50px;
    display: block;
    width: 80%;
    margin: 0 auto;
}
.explain{
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  color: #034694
}
</style>
=======
<template>
  <div class="connectDevice">
      <v-header :go-back="true"></v-header>
    <p class="explain">智能宠物机器狗网络接入</p>
<div style="margin: 20px;"></div>
<el-form :label-position="labelPosition" label-width="80px" :model="formcon">
  <el-form-item label="请输入正在连接的wifi名">
    <el-input v-model="formcon.name"></el-input>
  </el-form-item>
  <el-form-item label="请输入正在连接的wifi密码">
    <el-input v-model="formcon.pwd"></el-input>
  </el-form-item>
  
</el-form>
    <button class='btn' @click="getQrCode" > 生成二维码</button>
  </div>
</template>
<script>
import header from "../../components/header";
import Qs from "qs";
import { bindDevice } from "../../deviceApi/index.js";
export default {
  data() {
    return {
      labelPosition: "top",
      formcon: {
        name: "",
        pwd: ""
      }
    };
  },
  name: "createQrCode",
  methods: {
    getQrCode() {
      let params = Qs.stringify({
        wifi: this.formcon.name,
        pwd: this.formcon.pwd
      });

      bindDevice(params).then(res => {
        console.log(res.data.data);
        this.$alert('<img src="'+res.data.data+'" style="width:100%">', '请将二维码对准设备摄像头', {
          dangerouslyUseHTMLString: true
        });
      });
    }
  },
  components: {
    "v-header": header
  }
};
</script>
<style scoped>
.btn {
  border: 0;
  color: #fff;
  background: #034694;
  padding: 10px 0;
  border-radius: 50px;
  display: block;
  width: 80%;
  margin: 0 auto;
}
</style>
>>>>>>> 553b0de4ccb51399ddfe351dc2b161162f6ab33f
