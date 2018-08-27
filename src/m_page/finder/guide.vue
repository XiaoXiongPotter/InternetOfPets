<template>
	<div class="guide">
		<div class="guide_top"><img src="../../image/find.jpg" alt="协寻吊牌" /></div>
		<div class="guide_bot">
			<div class="guide_logo"><img src="../../image/logo-m.png" alt="logo" /></div>
			<form>
				<div>
					<img src="../../image/people.png" alt="图标" />
					<input type="text" required="required" class="input_text" v-model="input_text" placeholder="请输入账号" />
					<span class="clear_input" @click="clear_input" v-bind:class="{'clear_inputb':isB,'clear_inputn':isN}">X</span>
				</div>
				<div>
					<img src="../../image/password.png" alt="图标" />
					<input type="password" required="required" class="password_text" v-model="password_text" placeholder="请输入密码" />
					<span class="clear_password" @click="clear_password">X</span>
				</div>
				<p class="identifying_code" v-show='flag'>
					<input v-show='flag' type="text" name="" id="" value="" v-model="code" placeholder="请输入验证码" />
					<img v-show='flag' :src="img" class="image" @click="change" ref="banner" />
				</p>
				<div>
					<p @click="login" id="sub">登陆</p>
					<button type="button" id="but">申请吊牌</button>
				</div>
			</form>
		</div>
		<div class="reg">
			<router-link to="/register">新用户注册</router-link>|
			<router-link to="/forgetpassword">忘记密码</router-link>
		</div>
	</div>
</template>

<script>
import headerTop from "../../components/header.vue";
//import IScroll from 'iscroll/build/iscroll-probe'
import { systemInit } from "../../api/index.js";
import { getimg } from "../../api/index.js";
import { bindDevice } from "../../deviceApi/index.js";
import store from "../../store/store.js";
import Qs from "qs";
import axios from "axios";
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
            loginshowflag: true,
            input_text: "",
            password_text: "",
            isB: true,
            isN: false
        };
    },
    created() {
        //	 this.$nextTick(() => {
        //        this.Scroll = new IScroll(this.$refs.wrapper, {
        //        click: true
        //      })
        //     })
    },
    components: {
        headerTop
    },
    mounted() {
        //生命周期
        console.log(sessionStorage.token);
        systemInit()
            .then(res => {
                let data = res.headers["x-auth-token"];
                if (data != undefined) {
                    this.$store.commit("set_token", data); //根据store中set_token方法将token保存至localStorage/sessionStorage中，data["Authentication-Token"]，获取token的value值
                    console.log(data);
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
    methods: {
        //login()登陆事件	Qs.stringify()将对象 序列化成URL的形式，以&进行拼接	axios()从node.js发出http请求、拦截or转换or取消 请求和响应、自动转换JSON数据
        login() {
            var data = Qs.stringify({
                username: this.input_text,
                password: this.password_text,
                imageCode: this.code
            });
            axios({
                method: "post",
                url: "/api/authentication/login",
                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded; charset=UTF-8"
                },
                data
            })
                .then(res => {
                    console.log(res.data);
                    if (res.data.header.status == 1000) {
                        sessionStorage.removeItem("imgcode");
                        this.loginsuccess = true;
                        //若有设备deviceCode则添加设备

                        let params = Qs.stringify({
                            code: this.$route.query.id
                        });
                        bindDevice(params).then(res => {
                            console.log(res.data.header.status);
                            if (res.data.header.status != "1000") {
                                alert("系统故障请联系客服人员");
                                return false;
                            }
                        });
                        this.$router.push({
                            name: "account",
                            query: {
                                username: res.data.data.username,
                                mobile: res.data.data.mobile
                            }
                        });
                        sessionStorage.setItem("login", "1");
                        this.$store.commit(
                            "set_token",
                            res.headers["x-auth-token"]
                        );
                    } else {
                        this.$message({
                            message: res.data.header.message,
                            center: true,
                            type: "error"
                        });
                        if (res.data.data.hasImgCode) {
                            sessionStorage.setItem(
                                "imgcode",
                                res.data.data.hasImgCode
                            );
                        }
                        if (res.data.header.status == 3001) {
                            this.flag = true;
                            getimg()
                                .then(res => {
                                    this.img =
                                        "data:image/jpeg;base64," +
                                        res.data.data;
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
        //  change verifying code
        change() {
            getimg()
                .then(res => {
                    this.img = "data:image/jpeg;base64," + res.data.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        clear_input() {
            //clear input value
            this.input_text = "";
        },
        clear_password() {
            //clear password value
            this.password_text = "";
        }
    }
};
</script>
<style scoped>
html {
    position: relative;
    font-size: 20px;
}
.guide {
    width: 100%;
}
.guide_top {
    width: 100%;
}
.guide_top img {
    width: 100%;
}
.guide_bot {
    width: 100%;
}
.guide_logo {
    width: 100%;
    text-align: center;
}
.guide_logo img {
    width: 50%;
}
.guide_bot form div {
    width: 80%;
    margin: 0 auto;
    height: 3.4rem;
    line-height: 3.4rem;
    position: relative;
    text-align: center;
    margin-bottom: 0.8rem;
}
.guide_bot form div input {
    width: 100%;
    height: 3.4rem;
    line-height: 100%;
    box-sizing: border-box;
    border: 1px solid #bfbfbf;
    border-radius: 5px;
    padding-left: 1.8rem;
    padding-right: 2.2rem;
}
.guide_bot form div input:focus {
    outline: none;
    border: 1px solid #38aaff;
}
.guide_bot form div img {
    width: 1.2rem;
    position: absolute;
    left: 2%;
    top: 0.8rem;
    vertical-align: middle;
}
.guide_bot form div button,
#sub {
    width: 42%;
    height: 3.4rem;
    border-radius: 5px;
    display: block;
    float: left;
    border: 0px;
    background-color: #0f589b;
    color: #ffffff;
    font-size: 0.8rem;
}
.guide_bot form div button#but {
    float: right;
    background-color: #eeeeee;
    color: #949393;
}
.reg {
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
.reg a {
    margin: 0 10px;
    color: #000000;
}
/*清除表单内容*/
.clear_input,
.clear_password {
    position: absolute;
    right: 0.5rem;
    top: 1.2rem;
    font-size: 0.8rem;
    color: #ffffff;
    display: none;
    width: 1.2rem;
    height: 1.2rem;
    line-height: 1.2rem;
    border-radius: 50%;
    border: 1px solid #cccccc;
    background: #cccccc;
    text-align: center;
}
.input_text:valid + .clear_input,
.password_text:valid + .clear_password {
    display: block;
}
.clear_inputb {
    opacity: 1;
}
.clear_inputn {
    opacity: 0;
}
/*验证码*/
.identifying_code {
    width: 80%;
    height: 3.4rem;
    margin: 0 auto;
    margin-bottom: 0.8rem;
}
.identifying_code input {
    width: 50%;
    height: 3.4rem;
    line-height: 100%;
    float: left;
    border-radius: 5px;
    border: 1px solid #bfbfbf;
    box-sizing: border-box;
    padding: 0 10px;
}
.identifying_code input:focus {
    outline: none;
    border: 1px solid #38aaff;
}
.identifying_code .image {
    float: right;
}
</style> 