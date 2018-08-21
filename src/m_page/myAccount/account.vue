<template>
	<div class="account" ref='banner'>
		<!-- <div class="header">
			<div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
		</div> -->
        <header-top></header-top>
		<div class="main-header">
			<span>My Account</span>
		</div>
		<div ref="wrapper" class='main'>
			<div style="height: 520px;">
			<div class="head-img">
			<div class="head_img">
				<img :src="imgflag?avatar:avatar1" @click.stop="uploadHeadImg" style="margin: auto;display: block;" />
			</div>
			<input type="file" accept="image/*" @change="handleFile" class="hiddenInput" />
		</div>
		<div class="main-headportrait">
			<div class="user">
				<span v-if="flag">{{message.nickname}}<img src="../../image/change.png" @click="edit"></span>
				<el-input v-model='user' placeholder='输入昵称' v-else @blur='input' ref='inp'></el-input>
			</div>
			<p>{{message.mobile}}</p>
		</div>
				<div class="main-content">
					<div @click="mypet">
						<el-row type="flex" class="row-bg" style="height: 50px;line-height: 50px;border-bottom: solid 1px #DCDCDC;">
							<el-col :span="21">
								<div class="msg"><img src="../../image/pet.png">
									<p>我的宠物</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="right"><img src="../../image/right.png"></div>
							</el-col>
						</el-row>
					</div>
					<div @click="mysearch">
						<el-row type="flex" class="row-bg" style="height: 50px;line-height: 50px;border-bottom: solid 1px #DCDCDC;">
							<el-col :span="21">
								<div class="msg"><img src="../../image/search.png">
									<p>我的协寻</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="right"><img src="../../image/right.png"></div>
							</el-col>
						</el-row>
					</div>
					<div @click="changepassword">
						<el-row type="flex" class="row-bg" style="height: 50px;line-height: 50px;border-bottom: solid 1px #DCDCDC;">
							<el-col :span="21">
								<div class="msg"><img src="../../image/changepassword.png">
									<p>修改密码</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="right"><img src="../../image/right.png"></div>
							</el-col>
						</el-row>
					</div>
					<a :href="'http://manager.dognessnetwork.com:8666/requestCustomerService?username='+message.username+'&token='+authtoken+'&platForm=web&area=en'">
						<el-row type="flex" class="row-bg" style="height: 50px;line-height: 50px;border-bottom: solid 1px #DCDCDC;">
							<el-col :span="21">
								<div class="msg"><img src="../../image/Customer.png">
									<p>在线客服</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="right"><img src="../../image/right.png"></div>
							</el-col>
						</el-row>
					</a>
					<a>
						<el-row type="flex" class="row-bg" style="height: 50px;line-height: 50px;border-bottom: solid 1px #DCDCDC;">
							<el-col :span="21">
								<div class="msg"><img src="../../image/help.png">
									<p>常见问题</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="right"><img src="../../image/right.png"></div>
							</el-col>
						</el-row>
					</a>
					<!-- <div @click="loginauthorization">
						<el-row type="flex" class="row-bg" style="height: 50px;line-height: 50px;border-bottom: solid 1px #DCDCDC;">
							<el-col :span="21">
								<div class="msg"><img src="../../image/authorization.png">
									<p>登录授权</p>
								</div>
							</el-col>
							<el-col :span="3">
								<div class="right"><img src="../../image/right.png"></div>
							</el-col>
						</el-row>
					</div> -->
				</div>
				<div class="out-btn">
					<el-button type="danger" plain style='margin:15px auto; display: block;' @click='out'>退出登录</el-button>
				</div>
				<div>
				</div>
			</div>
		</div>
		<v-foot :loginsuccess='loginsuccess' :loginshowflag='loginshowflag'></v-foot>
	</div>
</template>
<script>
import IScroll from "iscroll/build/iscroll-probe";
import footernav from "../../components/footernav";
import userInformation from "../myAccount/userInformation";
import { logout } from "../../api/index.js";
import { getpet } from "../../ClientServerApi/index.js";
import headerTop from "../../components/header";
import { updateUserInfo } from "../../api/index.js";
import { getLoginUser } from "../../api/index.js";
import Qs from "qs";
export default {
  name: "account",
  data() {
    return {
      message: {
        nickname: "",
        username: "",
        mobile: ""
      },
      listshow: false,
      loginsuccess: false,
      loginshowflag: true,
      flag: true,
      user: "",
      avatar: "",
      avatar1: "",
      imgflag: false,
      authtoken: sessionStorage.token
    };
  },
  created() {
    this.$nextTick(() => {
      this.Scroll = new IScroll(this.$refs.wrapper, {
        click: true
      });
      if (sessionStorage.getItem("login")) {
        this.loginsuccess = true;
        this.loginshowflag = false;
      }
    });
    console.log("account-token", sessionStorage.token);
  },
  mounted() {
    getLoginUser()
      .then(res => {
        console.log(res.data);
        this.message.nickname = res.data.data.nickname;
        this.message.username = res.data.data.username;
        this.message.mobile = res.data.data.mobile;
        this.avatar1 = res.data.data.photoUrl;
        console.log(this.message.username);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    // 打开图片上传
    uploadHeadImg: function() {
      this.$confirm("是否修改头像?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$el.querySelector(".hiddenInput").click();
        })
        .catch(() => {
          this.imgflag = false;
        });
    },
    // 将头像显示
    handleFile: function(e) {
      this.imgflag = true;
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = data => {
        let res = data.target || data.srcElement;
        this.avatar = res.result;
        let params = Qs.stringify({ picImg: data.target.result.split(",")[1] });
        updateUserInfo(params)
          .then(res => {})
          .catch(error => {
            console.log(error);
          });
      };
    },
    edit() {
      this.flag = false;
      this.user = this.message.nickname;
    },
    input() {
      this.flag = true;
      if (this.user != this.message.user) {
        this.message.nickname = this.user;
        let params = Qs.stringify({
          nickname: this.message.nickname
        });
        updateUserInfo(params)
          .then(res => {
            //console.log(res)
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    mypet() {
      getpet()
        .then(res => {
          if (res.data.header.status == 1000 && res.data.data.length > 0) {
            this.$router.replace({ path: "/mypet" });
          } else if (
            res.data.header.status == 1000 &&
            res.data.data.length == 0
          ) {
            this.$router.replace({ path: "/addpet" });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    mysearch() {
      this.$router.replace({ path: "/mysearch" });
    },
    changepassword() {
      this.$router.replace({ path: "/changepassword" });
    },
    // loginauthorization() {
    //   this.$router.replace({ path: "/loginauthorization" });
    // },
    out() {
      this.$router.replace({ path: "/login" });
      sessionStorage.removeItem("login");
      let params = sessionStorage.getItem("token");
      logout()
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  components: {
    "v-foot": footernav,
    userInformation,
    headerTop
  }
};
</script>
<style>
.account .el-message-box {
  width: 300px;
}
.account .el-input__inner {
  padding: 0 0;
  width: 90px;
  height: 30px;
  line-height: 30px;
  border-top-color: white;
  border-right-color: white;
  border-left-color: white;
}
.account .el-input__inner:hover {
  border-top-color: white;
  border-right-color: white;
  border-left-color: white;
}
</style>
<style scoped>
a {
  color: black;
}
.head_img img {
  width: 90px;
  height: 90px;
  border-radius: 50px;
}
.hiddenInput {
  display: none;
}
.header .imgBox {
  width: 100px;
  margin: 0 auto;
}
.imgBox img {
  width: 100%;
  vertical-align: middle;
}
.header {
  display: flex;
  width: 100%;
  background: #fff;
  color: #0ca8e3;
  height: 40px;
  line-height: 40px;
  position: relative;
}
.user {
  line-height: 30px;
  height: 30px;
  text-align: center;
  position: relative;
}
.user span {
  font-size: 15px;
}
.user img {
  position: absolute;
  width: 28px;
  height: 28px;
}
.main {
  overflow: hidden;
  position: absolute;
  bottom: 49px;
  top: 55px;
  width: 100%;
  max-width: 720px;
  touch-action: none;
}
.main-header {
  text-align: center;
  font-size: 15px;
  color: #00bfff;
  position: relative;
  width: 120px;
  left: 50%;
  transform: translate(-50%);
}
.main-header span::before {
  content: "";
  border-top: solid 1px #0000ff;
  width: 15px;
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
}
.main-header span::after {
  content: "";
  border-top: solid 1px #0000ff;
  width: 15px;
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
}
.main-headportrait p {
  text-align: center;
  padding: 5px 0px;
  color: #808080;
  font-family: "微软雅黑";
  font-size: 15px;
}
.msg p {
  font-family: "微软雅黑";
  font-size: 16px;
  padding-left: 40px;
}
.row-bg {
  position: relative;
}
.msg img {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 25%;
  left: 10px;
}
.right img {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 30%;
  right: 10px;
}
</style>

