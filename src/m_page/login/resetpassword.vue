<template>
	<div class="resetpassword">
		<el-container>
		<el-header class="resetpassword-header"><p>重置密码</p></el-header>
		<el-main>
			<el-input
					placeholder="重置密码"
					v-model="respect"
					clearable
					type="password"
					>				
				</el-input>
				<span class="danger" v-show="flag1">密码不能少于6位</span>
				<el-input
					placeholder="确认密码"
					v-model="input1"
					clearable
					type="password"
					>				
				</el-input>
				<span class="danger" v-show="flag2">密码不一致</span>
		</el-main>
		<el-footer>
			<el-button type="danger" class="over" @click="complete">
					完成
				</el-button>
		</el-footer>
	</el-container>
	</div>
</template>
<script>
	import {submitpassword} from '../../api/index.js'
	import store from '../../store/store.js'
	export default{
		name: "reset",
		data () {
			return{
				input1:'',
				respect:'',
				flag1:false,
				flag2:false				
			}
		},
		mounted(){
				this.$store.commit('res_token', this.$route.query.token)
				console.log(this.$route.query.token)
			},
		methods: {
			complete(){
				if(this.flag1==false&&this.flag2==false&&this.input1.length>0&&this.respect.length>0){
					let params = {
						password: this.respect
					}
				submitpassword(params).then(res => {
				console.log(res.data)
        		if(res.data.code==200){
        			this.$router.replace({ path: '/resetsuccess' })
        		}
        		else{
        			this.$router.replace({ path: '/registerfalse' })
        		}
			}).catch(error => {
				console.log(error)
			})
				}
			}
		},
		watch: {
			respect(val){
				if(val.length>0&&val.length<6){
					this.flag1=true
				}else{
					this.flag1=false
				}
			},
			input1(val){
				if(val!=this.respect){
					this.flag2=true
				}else{
					this.flag2=false
				}
			}
		}
	}
</script>
<style scoped>
.resetpassword-header{
	text-align: center;
	background-color: #0ca8e3;
	color: white;
	font-family: "微软雅黑";
	font-size: 20px;
	position: relative;
}
.resetpassword-header p{
	font-weight: bold;
	margin-top: 18px;
}
.danger{
	font-size: 10px;
	color: red;
}
.el-input{
	margin-top: 10px;
}
.over{
	position: absolute;
	left: 50%;
	transform: translate(-50%);
}
</style>