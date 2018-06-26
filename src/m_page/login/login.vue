<template>
    <div class="sign" ref="sign">
		<div class="sign-content">
			<el-header class="sign-header">
				<p>用户登录</p>
			</el-header>
			<el-main class="sign-msg">
				<el-input
					placeholder="用户名"
  					v-model="username"
  					clearable
  					class="username">
				</el-input>
				<el-input
					placeholder="密码"
					type="password"
					v-model="password"
  					clearable
  					class="password">
				</el-input>
				<el-input
					placeholder="请输入验证码"
  					v-model="code"
  					clearable
  					class="Verification">
				</el-input>
			
				<el-checkbox class="check" v-model="checked">记住密码</el-checkbox>
				<el-button class="forget" type="text">忘记密码?</el-button>
				<br/>
				<el-button class="login" type="primary" @click="login">登录</el-button>
				<el-button class="set" type="danger"><router-link to="/register">注册</router-link></el-button>
			</el-main>
			<el-footer class="footer">
				<span class="line"></span>
				<p class="three">第三方软件</p>
					<ul>
					<li><img src="@/image/qq.png"><p>QQ</p></li>
					<li><img src="@/image/wechat.png"><p>微信</p></li>
					<li><img src="@/image/sina.png"><p>新浪微博</p></li>
				</ul>
			</el-footer>
	</div>
	</div>
</template>
<script>
import {userLogin} from '../../api/index.js'
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      code: "",
      checked: false,
      show: []
    };
  },
  created() {
    // this.$nextTick(() => {
    //   this.draw();
    // });
  },
  methods: {
    login() {
      let params = {
        username: this.username,
        password: this.password,
        code: this.code
      };
      userLogin(params).then(res => {
        console.log(res)
      }).catch(error => {
      	console.log(error)
      });
      //   let val = this.code;
      //   if (this.username.length == 0) {
      //     alert("请输入账号");
      //   } else if (this.password.length == 0) {
      //     alert("请输入密码");
      //   } else if (val == "") {
      //     alert("请输入验证码！");
      //   } else if (val != num) {
      //     alert("验证码错误！请重新输入！");
      //     this.code = "";
      //   } else {
      //     alert("登录成功");
      //     this.code = "";

      //     //              this.$http.get("http://192.168.0.136:8080/petUser/id").then(
      //     //          function (res) {
      //     //              // 处理成功的结果
      //     //              alert(res.body);
      //     //          },function (res) {
      //     //          // 处理失败的结果
      //     //          }
      //     //      );
      //   }
    }
  }
};
</script>
<style scoped>
.sign-header{
	text-align: center;
	background-color: #1E90FF;
	color: white;
	font-family: "微软雅黑";
	font-size: 20px;
}
.sign-header p{
	padding-top: 20px;
	font-weight: bold;
}
.el-input{
	margin-top: 10px;
}
.forget{
	margin-left: 125px;
}
.login{
	margin-left: 25%;
	margin-top: 10px;
}
.set a{
	color: white;
}
.line {
  display: inline-block;
  height: 1px;
  width: 100%;
  border-bottom: solid 1px #dcdcdc;
}
.footer {
  position: relative;
}
.three {
  background-color: white;
  position: absolute;
  top: 5px;
  left: 40%;
  color: #808080;
}
.footer ul li{
	float: left;
	padding-left: 10%;
	margin-top: 20%;
}
.footer ul li img{
	width: 50px;
	height: 50px;
}
.footer ul li p{
	font-size: 15px;
	text-align: center;
}
</style>