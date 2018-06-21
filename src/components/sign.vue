<template>
	<div class="sign">
		<div class="sign-content">
			<el-header class="sign-header">
				<p>用户登录</p>
			</el-header>
			<el-main class="sign-msg">
				<el-input
					placeholder="用户名"
  					v-model="input10"
  					clearable
  					class="username">
				</el-input>
				<el-input
					placeholder="密码"
					type="password"
  					clearable
  					class="password">
				</el-input>
				<el-input
					placeholder="请输入验证码"
  					v-model="input1"
  					clearable
  					class="Verification">
				</el-input>
				<canvas id="canvas" width="100" height="38" @click="draw()" ref="canvas"></canvas>
			</br>
				<el-checkbox class="check" v-model="checked">记住密码</el-checkbox>
				<el-button class="forget" type="text">忘记密码?</el-button>
				<el-button class="login" type="primary" @click="login">登录</el-button>
				<el-button class="set" type="danger">注册</el-button>
			</el-main>
			<el-footer class="footer">
				<span class="line"></span>
				<p class="three">第三方软件</p>
					<ul>
					<li><img src="../image/qq.png"><p>QQ</p></li>
					<li><img src="../image/wechat.png"><p>微信</p></li>
					<li><img src="../image/sina.png"><p>新浪微博</p></li>
				</ul>
			</el-footer>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'sign',
		data () {
			return {
				 input10: '',
				 input1:'',
				 checked: false,
				 show:[]
			}
		},
		methods: {
			draw () {
		let canvas_width=this.$refs.canvas.width;
		let canvas_height=this.$refs.canvas.height;
        let canvas = this.$refs.canvas
        let context = canvas.getContext("2d");
        canvas.width = canvas_width;
        canvas.height = canvas_height;
        let sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
        let aCode = sCode.split(",");
        let aLength = aCode.length;
        
        for (var i = 0; i <= 3; i++) {
            var j = Math.floor(Math.random() * aLength);
            var deg = Math.random() * 30 * Math.PI / 180;
            var txt = aCode[j];
            this.show[i] = txt.toLowerCase();
            var x = 10 + i * 20;
            var y = 20 + Math.random() * 8;
            context.font = "bold 23px 微软雅黑";

            context.translate(x, y);
            context.rotate(deg);

            
            context.fillText(txt, 0, 0);

            context.rotate(-deg);
            context.translate(-x, -y);
        }
        for (var i = 0; i <= 5; i++) { 
            context.beginPath();
            context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.stroke();
        }
        for (var i = 0; i <= 30; i++) { 
            context.beginPath();
            var x = Math.random() * canvas_width;
            var y = Math.random() * canvas_height;
            context.moveTo(x, y);
            context.lineTo(x + 1, y + 1);
            context.stroke();
        }
			},
			login () {
				let val = this.input1;
				let num = this.show.join('');
				if(val==''){
                alert('请输入验证码！');
            }else if(val == num){
                alert('登录成功');
                this.input1 = '';
             
            }else{
                alert('验证码错误！请重新输入！');
                this.input1 = '';
         
            }
			}
	}
		}
			
</script>

<style scoped>
.sign{
	height: 950px;
	background-image: url("../image/timg.jpg");
}
.sign-content{
	width:400px;
	height:550px;
	background-color:white;
	position: absolute;
	left:50%;
	top:50%;
	transform:translate(-50%,-50%);
	border-radius: 10px;
}
.sign-header p{
	font-size: 20px;
	font-weight: bold;
	font-family: "微软雅黑";
	text-align: center;
	padding-top: 15px;
}
.username{
	width:300px;
	margin-left: 30px;
}
.password{
	width:300px;
	margin-left: 30px;
	margin-top: 20px;
}
.Verification{
	width: 180px;
	margin-left: 30px;
	margin-top: 20px;
}
  #canvas{
            display: inline-block;
            border:1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
            position: absolute;
            right: 50px;
            top: 200px;
        }
.check{
	margin-left: 30px;
}
.forget{
	margin-left: 150px;
}
.login{
	margin-top: 10px;
	margin-left: 25%;
	margin-right: 15px;
}
.line{
	display: inline-block;
	height: 1px;
	width: 100%;
	border-bottom: solid 1px #DCDCDC;
}
.footer{
	position: relative;
}
.three{
	background-color: white;
	position: absolute;
	top: 5px;
	left: 40%;
	color: #808080;
}
.footer ul{
	list-style: none;
}
.footer ul li{
	margin-top: 35px;
	margin-left: 50px;
	float: left;
	cursor: pointer;
}
.footer ul li p{
	text-align: center;
}
.footer ul li img{
	width: 50px;
	height: 50px;
}
</style>