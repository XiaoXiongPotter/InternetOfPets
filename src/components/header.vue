<template>
    <div class="header">
        <div class="head_goback">
            <img src="../image/goback.png" v-if="goBack" alt="" @click="$router.go(-1)">
        </div>
        <div class="imgBox"><img src="../image/logo-m.png" alt=""></div>
        <div class="add" @click="show = !show" v-if="addDevices">
            <transition name="el-fade-in-linear">
                <div v-show="show" class="transition-box">
                    <div class="triangle "></div>
                    <div class="funBtn ">
                        <p>
                            <router-link to="/addDevice">添加设备</router-link>
                        </p>
                        <p>
                            <a :href="'../../static/page/scan.html?token='+authToken"> 扫一扫</a>
                        </p>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
import { systemInit } from "../api/index.js";
export default {
    name: "Pheader",
    props: ["goBack", "addDevices"],
    data: () => ({
        show: false,
        authToken: sessionStorage.token
    }),
    created() {
        //验证token是否过期
        systemInit().then(res => {
            // console.log('token',res.headers['x-auth-token'])
            // console.log('token111',this.authToken)
            console.log("11", this.authToken);
            if (this.authToken == undefined) {
                this.$router.push({ path: "/login" });
            } else if (this.authToken != res.headers["x-auth-token"]) {
                this.$router.push({ path: "/login" });
                this.$message({
                    type: "success",
                    message: "用户登录超时，请重新登录"
                });
                // alert('token过期')
            }
        });
    }
};
</script>
<style scoped>
.head_goback {
    float: left;
    width: 10%;
    height: 40px;
    text-align: center;
}
.head_goback img {
    width: 15px;
    vertical-align: middle;
}
.header {
    width: 100%;
    background: #fff;
    color: #0ca8e3;
    height: 40px;
    line-height: 40px;
    /* position: absolute;;
  
  z-index: 10000;  */
}
.header .imgBox {
    float: left;
    width: 80%;
    text-align: center;
    margin: 0 auto;
}
.imgBox img {
    width: 100px;
    vertical-align: middle;
}
.header .add {
    float: left;
    width: 10%;
    height: 40px;
    background-image: url(../image/add.png);
    background-repeat: no-repeat;
    display: inline-block;
    background-size: 25px;
    background-position: center;
    position: relative;
}

.triangle {
    position: absolute;
    top: 30px;
    display: inline-block;
    width: 0;
    height: 0;
    border-bottom: 20px solid rgba(0, 0, 0, 0.8);
    border-left: 20px solid transparent;
}
.funBtn {
    position: absolute;
    top: 50px;
    right: 0;
    width: 100px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    text-align: center;
    color: #fff;
}
.funBtn p a {
    color: #fff;
}
</style>

