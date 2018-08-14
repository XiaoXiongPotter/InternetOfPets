<template>
<div class="guide"> 
	<div class="guide_top"><img src="../../image/find.jpg" alt="协寻吊牌" /></div>  
	<div class="guide_bot">
		<div class="guide_logo"><img src="../../image/logo-m.png" alt="logo" /></div>
		<form>
			<div>
				<img src="../../image/people.png" alt="图标" />
				<input type="text" required="required" class="input_text" value="" placeholder="请输入账号" />
				<span class="clear_input" @click="clear_input">X</span>
			</div>
			<div><img src="../../image/password.png" alt="图标" /><input type="password" value="" placeholder="请输入密码" /></div>
			<p class="identifying_code">
				<input v-show='flag' type="text" name="" id="" value="" placeholder="验证码" />
				<img v-show='flag' :src="img" class="image" @click="change" ref="banner"/>
			</p>
			<div><button type="button" @click="login" id="sub">登陆</button><button type="button" id="but">申请吊牌</button></div>
		</form>
	</div>
	<div class="reg">
		<router-link to="/register">新用户注册</router-link>|
		<router-link to="/forgetpassword">忘记密码</router-link>
	</div>
</div>
</template>
<style scoped>
	.clear_input{
		position: absolute;
		right: 0;
		top: 5px;
		font-size: 20px;
		color: #38aaff;
		display: none;
	}
	.input_text:valid + .clear_input {display: block;}
</style>
<script>
import headerTop from "../../components/header.vue";
//import IScroll from 'iscroll/build/iscroll-probe'
import store from "../../store/store.js";
import Qs from "qs";
import axios from "axios";
import { systemInit } from "../../api/index.js";
import { getimg } from "../../api/index.js";
export default {
  name: "guide",
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
  created(){
//	 this.$nextTick(() => {
//        this.Scroll = new IScroll(this.$refs.wrapper, {
//        click: true
//      })
//     })     
  },
  components: {
    headerTop
  },
  mounted() {//生命周期
  	console.log(sessionStorage.token);
    systemInit()
      .then(res => {
        let data = res.headers["x-auth-token"];
        if (data != undefined) {
          this.$store.commit("set_token", data);//根据store中set_token方法将token保存至localStorage/sessionStorage中，data["Authentication-Token"]，获取token的value值
        }
      })
      .catch(error => {
        console.log(error);
      });
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
  methods:{
  	//login()登陆事件
  	login() {
      var data = Qs.stringify({//Qs.stringify()将对象 序列化成URL的形式，以&进行拼接
        username: this.username,
        password: this.password,
        imageCode: this.code
      });
      axios({//从node.js发出http请求、拦截or转换or取消 请求和响应、自动转换JSON数据
        method: "post",
        url: "/api/authentication/login",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        data
      })
        .then(res => {
          console.log(res.data);
          if (res.data.header.status == 1000) {
            sessionStorage.removeItem("imgcode");
          	console.log(imagecode)
            this.loginsuccess = true;
            this.$router.push({ name: "account",query:{username:res.data.data.username,mobile:res.data.data.mobile} });
            sessionStorage.setItem("login", "1");
            this.$store.commit("set_token", res.headers["x-auth-token"]);
              
          } else {
            this.$message({
              message: res.data.header.message,
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
          alert("")
        })
        .then(res => {
          console.log(res.data);
          if (res.data.header.status == 1000) {
            sessionStorage.removeItem("imgcode");
            this.loginsuccess = true;
            this.$router.replace({ path: "/myAccount" });
            sessionStorage.setItem("login", "1");

            this.$store.commit("set_token", res.headers["x-auth-token"]);
          } else {
            this.$message({
              message: res.data.header.message,
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
//    if (this.checked == true) {
//      localStorage.setItem("username", this.username);
//      localStorage.setItem("password", this.password);
//    }
    },
    change() {
      getimg()
        .then(res => {
          this.img = "data:image/jpeg;base64," + res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    clear_input(){//previousSibling
    	var find_cli=document.getElementsByClassName("clear_input");
    	var val=find_cli.previousSibling;
    	setAttribute(val,"")
    }
  }
};

</script>
<style scoped>
	html {
		position: relative;
	    font-size: 20px; 
	}
	.guide{
		width: 100%;
	}
	.guide_top{
		width: 100%;
	}
	.guide_top img{
		width: 100%;
	}
	.guide_bot{
		width: 100%;
	}
	.guide_logo{
		width: 100%;
		text-align: center;
	}
	.guide_logo img{
		width: 50%;
	}
	.guide_bot form div{
		width: 80%;
		margin: 0 auto;
		height: 3.4rem;
		line-height: 3.4rem;
		position: relative;
		text-align: center;
		margin-bottom: 0.8rem;
	}
	.guide_bot form div input{
		width: 100%;
		height: 3.4rem;
		line-height: 100%;
		box-sizing: border-box;
		border: 1px solid #bfbfbf;
		border-radius: 5px;
		padding-left: 1.8rem;
	}
	.guide_bot form div img{
		width: 1.2rem;
		position: absolute;
		left: 2%;
		top: 0.8rem;
		vertical-align: middle;
	}
	.guide_bot form div button{
		width: 42%;
		height: 3.4rem;
		border-radius: 5px;
		display: block;
		float: left;
		border: 0px;
		background-color: #0f589b;
		color: #FFFFFF;
		font-size: 0.8rem;
	}
	.guide_bot form div button#but{
		float: right;
		background-color: #eeeeee;
		color: #949393;
	}
	.reg{
		width: 80%;
		height: 1.6rem;
		line-height: 1.6rem;
		font-size: 0.6rem;
		/*position: absolute;*/
		bottom: 0.5rem;
		left: 10%;
		margin-left: 10%;
		text-align: center;
		margin-top: 0.5rem;
	}
	.reg a{
		margin: 0 10px;
		color: #000000;
	}
</style> 