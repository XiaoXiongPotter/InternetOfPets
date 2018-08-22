<template>
    <div class="sign" ref="sign">
        <div class="sign-content">
            <el-header class="sign-header" style="height: 50px;">
                <p>多尼斯宠联网平台</p>
            </el-header>
            <el-main class="sign-msg">
                <el-input placeholder="手机/邮箱" v-model="username" clearable class="username">
                </el-input>
                <el-input placeholder="密码" type="password" v-model="password" clearable class="password">
                </el-input>
                <div class="ver">
                    <el-input placeholder="请输入验证码" v-model="code" v-show='flag' clearable class="Verification">
                    </el-input>
                    <img v-show="flag" :src="img" class="image" @click="change" ref="banner" />
                </div>
                <br />
                <div class="for-btn" style="max-width: 720px;">
                    <el-checkbox class="check" v-model="checked">记住密码</el-checkbox>
                    <el-button class="forget" type="text">
                        <router-link to="/forgetpassword">忘记密码?</router-link>
                    </el-button>
                </div>
                <br/>
                <div class="btn">
                    <el-button class="login" type="primary" @click="login">登录</el-button>
                    <el-button class="set" type="danger">
                        <router-link to="/register">注册</router-link>
                    </el-button>
                </div>
            </el-main>
            <el-footer class="footer">
                <p class="three">第三方软件</p>
                <ul>
                    <li><img src="@/image/qq.png">
                        <p>QQ</p>
                    </li>
                    <li>
                        <a href="https://open.weixin.qq.com/connect/qrconnect?appid=wx21af39d03b12dd37&redirect_uri=http://www.dognessnetwork.com:8080/wxLogin&response_type=code&scope=snsapi_login&state=wx#wechat_redirect"><img src="@/image/wechat.png">
                            <p>微信</p>
                        </a>
                    </li>
                    <li><img src="@/image/sina.png">
                        <p>新浪微博</p>
                    </li>
                </ul>
            </el-footer>
            <v-foot :loginsuccess='loginsuccess' :loginshowflag='loginshowflag'></v-foot>
        </div>
    </div>
</template>
<script>
import { systemInit } from "../../api/index.js";
import { getimg } from "../../api/index.js";
import { userLogin } from "../../api/index.js";
import store from "../../store/store.js";
import Qs from "qs";
import axios from "axios";
import footernav from "../../components/footernav";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      code: "",
      count: 0,
      checked: false,
      flag: false,
      img: "",
      num: 1,
      loginsuccess: false,
      loginshowflag: true
    };
  },
  created() {
    systemInit()
      .then(res => {

        let data = res.headers["x-auth-token"];
        // if (data == sessionStorage.token) {
        //     this.$router.push({ path: "/" });
        //     this.$message({
        //         type: "success",
        //         message: "已登录，请勿重复登录"
        //     });
        // } else {
        if (data != undefined) {
          this.$store.commit("set_token", data); //根据store中set_token方法将token保存至localStorage/sessionStorage中，data["Authentication-Token"]，获取token的value值
        }
        // }
      })
      .catch(error => {
        console.log(error);
      });
  },
  mounted() {
    //生命周期
    console.log(sessionStorage.token);

    if (sessionStorage.getItem("imgcode")) {
      this.flag = true;
      getimg()
        .then(res => {
          this.img = "data:image/jpeg;base64," + res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
    if (localStorage) {
      this.username = localStorage.getItem("username");
      this.password = localStorage.getItem("password");
    }
  },
  components: {
    "v-foot": footernav
  },
  methods: {
    login() {
      var params = Qs.stringify({
        username: this.username,
        password: this.password,
        imageCode: this.code
      });
      userLogin(params)
        .then(res => {
          console.log(res.data);
          if (res.data.header.status == 1000) {
            sessionStorage.removeItem("imgcode");
            this.loginsuccess = true;
            this.$router.push({
              name: "account",
              query: {
                username: res.data.data.username,
                mobile: res.data.data.mobile
              }
            });
            sessionStorage.setItem("login", "1");
            this.$store.commit("set_token", res.headers["x-auth-token"]);
          } else if (res.data.header.status == 3026) {
            this.$message({
              message: "邮箱未激活",
              center: true,
              type: "error"
            });
          } else {
            this.$message({
              message: "账号或密码错误",
              center: true,
              type: "error"
            });
            if (res.data.data.hasImgCode) {
              sessionStorage.setItem("imgcode", res.data.data.hasImgCode);
            }
            if (res.data.header.status == 3001) {
              this.flag = true;
              getimg()
                .then(res => {
                  this.img = "data:image/jpeg;base64," + res.data.data;
                })
                .catch(error => {
                  console.log(error);
                });
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
      if (this.checked == true) {
        localStorage.setItem("username", this.username);
        localStorage.setItem("password", this.password);
      }
    },
    change() {
      getimg()
        .then(res => {
          this.img = "data:image/jpeg;base64," + res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style>
.el-message {
  min-width: 60%;
}
</style>
<style scoped>
.sign-header {
  text-align: center;
  background-color: #0ca8e3;
  color: white;
  font-family: "微软雅黑";
  font-size: 18px;
}
.sign-header p {
  padding-top: 15px;
  font-weight: bold;
}
.el-input {
  margin-top: 10px;
}
.check {
  margin-top: 10px;
}
.forget {
  position: absolute;
  right: 15px;
}
.for-btn {
  position: relative;
}
.forget a {
  color: #409eff;
}
.btn {
  /*width: 160px;*/
  height: 40px;
  position: absolute;
  left: 50%;
  margin-top: 20px;
  transform: translate(-50%);
}
.sign-msg {
  height: 300px;
}
.set a {
  color: white;
}
.Verification {
  width: 50%;
}
.three {
  text-align: center;
  color: #708090;
  position: relative;
}
.three:after {
  content: "";
  border-bottom: solid 1px #dcdcdc;
  width: 35%;
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
}
.three:before {
  content: "";
  border-bottom: solid 1px #dcdcdc;
  width: 35%;
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
}
.footer ul {
  display: flex;
  margin-top: 50px;
}
.footer ul li {
  flex: 1;
  position: relative;
}
.footer ul li img {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.footer ul li p {
  font-size: 15px;
  text-align: center;
  margin-top: 50px;
  color: black;
}
.ver {
  position: relative;
}
.image {
  position: absolute;
  right: 0%;
  top: 70%;
  transform: translate(0%, -70%);
}
</style>