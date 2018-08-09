<template>
    	<div class="register">
		<el-container class="register-content">
			<el-header class="register-header" style="height: 50px;">
			<router-link to='/login'><i class="el-icon-arrow-left"></i></router-link><p>用户注册</p>
			</el-header>
			<el-main class="main">
				<el-input
					placeholder="请输入邮箱"
  					v-model="email"
  					clearable
  					class="mailbox"
  					v-show="flag"				
  					>
				</el-input>
				<span class="danger" v-show="flag4">邮箱格式不正确</span>
				<p class="danger" v-show="flag7">邮箱已被注册</p>
				<el-input v-model='phonenumber' placeholder="请输入手机号" class="input-with-select" v-show="flag1">
    			<el-select  slot="prepend" v-model="select" placeholder="+86" class="change">
      			<el-option  v-for="item in cities"
      			:key="item.value"
      			:label="item.value"
      			:value="item.value"
      			class="list">
      			<span style="float: left">{{ item.label }}</span>
      			<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span></el-option>
    			</el-select>
  			</el-input>
  			<span class="danger" v-show="flag5">手机不正确</span>
  			<br />
  			<p class="danger" v-show="flag6">手机已被注册</p>
  			
  			<el-button v-show="flag1" class="get" @click="send" ref='banner' :disabled='forbidden'>{{msg}}</el-button>
				<el-input
					placeholder="输入验证码"
  					v-model="input4"
  					v-show="flag1"
  					clearable
  					class="yanzheng"
  				>
				</el-input>
				<br />
  				<el-button class="phone" type="text" @click="phone">{{msg1}}</el-button>
  				<el-input
					placeholder="请输入密码"
  					v-model="password"
  					clearable
  					class="password"
  					type='password'
  				>
				</el-input>
				<span class="danger" v-show="flag2">密码少于6位</span>
		<br>
  				<el-input
					placeholder="再次输入密码"
  					v-model="repassword"
  					clearable
  					class="repassword"
  					type='password'
  					>
				</el-input>
				<span class="danger" v-show="flag3">密码不一致</span>
			</el-main>
			<el-footer>
			 <el-button type="danger" class="over" @click='finish()'>完成注册</el-button>
			</el-footer>
		</el-container>
	</div>
</template>
<script>
import {Verification} from '../../api/index.js'
import {registerByMobile} from '../../api/index.js'
import {registerSendEmail} from '../../api/index.js'
import {email} from '../../api/index.js'
import store from '../../store/store.js'
import Qs from 'qs'
import axios from 'axios'
export default {
  name: "register",
  data() {
    return {
      		email:'',
			password:'',
			repassword:'',
			phonenumber:'',
			input4:'',
			select:'',
			msg:'点击验证',
			msg1:'邮箱注册?',
			timer:0,
			count:60,
			forbidden:false,
			flag:false,
			flag1:true,
			flag2:false,
			flag3:false,
			flag4:false,
			flag5:false,
			flag6:false,
			flag7:false,
			flag8:false,
			cities: [{
          value: '+86',
          label: '中国'
       }, {
          value: '+852',
          label: '中国香港'
        }, {
          value: '+853',
          label: '中国澳门'
        }, {
          value: '+886',
          label: '中国台湾'
        }, {
          value: '+355',
          label: '阿尔巴尼亚'
        }, {
          value: '+213',
          label: '阿尔及利亚'
        }, {
          value: '+93',
          label: '阿富汗'
        }, {
          value: '+54',
          label: '阿根廷'
        }, {
          value: '+971',
          label: '阿拉伯联合酋长国'
        }, {
          value: '+297',
          label: '阿鲁巴'
        }, {
          value: '+968',
          label: '阿曼'
        }, {
          value: '+994',
          label: '阿塞拜疆'
        }, {
          value: '+20',
          label: '埃及'
        }, {
          value: '+251',
          label: '埃塞俄比亚'
        }, {
          value: '+353',
          label: '爱尔兰'
        }, {
          value: '+372',
          label: '爱沙尼亚'
        }, {
          value: '+376',
          label: '安道尔'
        }, {
          value: '+244',
          label: '安哥拉'
        }, {
          value: '+1264',
          label: '安圭拉'
        }, {
          value: '+1268',
          label: '安提瓜和巴布达'
        }, {
          value: '+43',
          label: '奥地利'
        }, {
          value: '+61',
          label: '澳大利亚'
        }, {
          value: '+1246',
          label: '巴巴多斯'
        }, {
          value: '+675',
          label: '巴布亚新几内亚'
        }, {
          value: '+1242',
          label: '巴哈马'
        }, {
          value: '+92',
          label: '巴基斯坦'
        }, {
          value: '+595',
          label: '巴拉圭'
        }, {
          value: '+970',
          label: '巴勒斯坦'
        }, {
          value: '+973',
          label: '巴林'
        }, {
          value: '+507',
          label: '巴拿马'
        }, {
          value: '+55',
          label: '巴西'
        }, {
          value: '+375',
          label: '白俄罗斯'
        }, {
          value: '+1441',
          label: '百慕大'
        }, {
          value: '+359',
          label: '保加利亚'
        }, {
          value: '+850',
          label: '北朝鲜'
        }, {
          value: '+1670',
          label: '北马里亚纳群岛'
        }, {
          value: '+229',
          label: '北宁'
        }, {
          value: '+32',
          label: '比利时'
        }, {
          value: '+354',
          label: '冰岛'
        }, {
          value: '+1787',
          label: '波多黎各'
        }, {
          value: '+48',
          label: '波兰'
        }, {
          value: '+387',
          label: '波斯尼亚和黑塞哥维那'
        }, {
          value: '+591',
          label: '玻利维亚'
        }, {
          value: '+501',
          label: '伯利兹'
        }, {
          value: '+267',
          label: '博兹瓦纳'
        }, {
          value: '+975',
          label: '不丹'
        }, {
          value: '+226',
          label: '布基纳法索'
        }, {
          value: '+257',
          label: '布隆迪'
        }, {
          value: '+240',
          label: '赤道几内亚'
        }, {
          value: '+45',
          label: '丹麦'
        }, {
          value: '+49',
          label: '德国'
        }, {
          value: '+670',
          label: '东帝汶'
        }, {
          value: '+228',
          label: '多哥'
        }, {
          value: '+1767',
          label: '多米尼加'
        }, {
          value: '+1809',
          label: '多明尼加共和国'
        }, {
          value: '+007',
          label: '俄国'
        }, {
          value: '+593',
          label: '厄瓜多尔'
        }, {
          value: '+291',
          label: '厄立特里亚'
        }, {
          value: '+33',
          label: '法国'
        }, {
          value: '+298',
          label: '法罗群岛'
        }, {
          value: '+689',
          label: '法属波利尼西亚'
        }, {
          value: '+379',
          label: '梵蒂冈'
        }, {
          value: '+63',
          label: '菲律宾'
        }, {
          value: '+679',
          label: '斐济'
        }, {
          value: '+358',
          label: '芬兰'
        }, {
          value: '+238',
          label: '佛得角'
        }, {
          value: '+500',
          label: '佛兰克群岛'
        }, {
          value: '+220',
          label: '冈比亚'
        }, {
          value: '+242',
          label: '刚果民主共和国'
        }, {
          value: '+243',
          label: '刚果民主共和国'
        }, {
          value: '+57',
          label: '哥伦比亚'
        }, {
          value: '+506',
          label: '哥斯达黎加'
        }, {
          value: '+1473',
          label: '格林纳达'
        }, {
          value: '+299',
          label: '格陵兰'
        }, {
          value: '+955',
          label: '格鲁吉亚'
        }, {
          value: '+53',
          label: '古巴'
        }, {
          value: '+1671',
          label: '关岛'
        }, {
          value: '+592',
          label: '圭亚那'
        }, {
          value: '+7',
          label: '哈萨克斯坦'
        }, {
          value: '+509',
          label: '海地'
        }, {
          value: '+82',
          label: '韩国'
        }, {
          value: '+31',
          label: '荷兰'
        }, {
          value: '+599',
          label: '荷属安的列斯'
        }, {
          value: '+382',
          label: '黑山'
        }, {
          value: '+504',
          label: '洪都拉斯'
        }, {
          value: '+686',
          label: '基里巴斯'
        }, {
          value: '+253',
          label: '吉布提'
        }, {
          value: '+996',
          label: '吉尔吉斯斯坦'
        }, {
          value: '+224',
          label: '几内亚'
        }, {
          value: '+1',
          label: '加拿大'
        }, {
          value: '+223',
          label: '加纳'
        }, {
          value: '+241',
          label: '加蓬'
        }, {
          value: '+855',
          label: '柬埔寨'
        }, {
          value: '+420',
          label: '捷克共和国'
        }, {
          value: '+263',
          label: '津巴布韦'
        }, {
          value: '+237',
          label: '喀麦隆'
        }, {
          value: '+974',
          label: '卡塔尔'
        }, {
          value: '+1345',
          label: '开曼群岛'
        }, {
          value: '+269',
          label: '科摩罗'
        }, {
          value: '+965',
          label: '科威特'
        }, {
          value: '+385',
          label: '克罗地亚'
        }, {
          value: '+254',
          label: '肯尼亚'
        }, {
          value: '+682',
          label: '库克群岛'
        }, {
          value: '+371',
          label: '拉脱维亚'
        }, {
          value: '+266',
          label: '莱索托'
        }, {
          value: '+856',
          label: '老挝'
        }, {
          value: '+370',
          label: '立陶宛'
        }, {
          value: '+231',
          label: '利比里亚'
        }, {
          value: '+218',
          label: '利比亚'
        }, {
          value: '+423',
          label: '列支敦士登'
        }, {
          value: '+262',
          label: '留尼汪'
        }, {
          value: '+352',
          label: '卢森堡'
        }, {
          value: '+250',
          label: '卢旺达'
        }, {
          value: '+40',
          label: '罗马尼亚'
        }, {
          value: '+261',
          label: '马达加斯加'
        }, {
          value: '+960',
          label: '马尔代夫'
        }, {
          value: '+356',
          label: '马耳他'
        }, {
          value: '+265',
          label: '马拉维'
        }, {
          value: '+60',
          label: '马来西亚'
        }, {
          value: '+389',
          label: '马其顿'
        }, {
          value: '+692',
          label: '马绍尔群岛'
        }, {
          value: '+230',
          label: '毛里求斯'
        }, {
          value: '+222',
          label: '毛里塔尼亚'
        }, {
          value: '+001',
          label: '美国'
        }, {
          value: '+1684',
          label: '美属萨摩亚'
        }, {
          value: '+1340',
          label: '美属维尔京群岛'
        }, {
          value: '+976',
          label: '蒙古'
        }, {
          value: '+1664',
          label: '蒙特塞拉特'
        }, {
          value: '+880',
          label: '孟加拉国'
        }, {
          value: '+51',
          label: '秘鲁'
        }, {
          value: '+691',
          label: '密克罗尼西亚'
        }, {
          value: '+95',
          label: '缅甸'
        }, {
          value: '+373',
          label: '摩尔多瓦'
        }, {
          value: '+377',
          label: '摩纳哥'
        }, {
          value: '+258',
          label: '莫桑比克'
        }, {
          value: '+52',
          label: '墨西哥'
        }, {
          value: '+264',
          label: '纳米比亚'
        }, {
          value: '+27',
          label: '南非'
        }, {
          value: '+211',
          label: '南苏丹'
        }, {
          value: '+674',
          label: '瑙鲁'
        }, {
          value: '+505',
          label: '尼加拉瓜'
        }, {
          value: '+977',
          label: '尼泊尔'
        }, {
          value: '+227',
          label: '尼日尔'
        }, {
          value: '+234',
          label: '尼日利亚'
        }, {
          value: '+683',
          label: '纽埃'
        }, {
          value: '+47',
          label: '挪威'
        }, {
          value: '+680',
          label: '帕劳'
        }, {
          value: '+351',
          label: '葡萄牙'
        }, {
          value: '+81',
          label: '日本'
        }, {
          value: '+46',
          label: '瑞典'
        }, {
          value: '+41',
          label: '瑞士'
        }, {
          value: '+503',
          label: '萨尔瓦多'
        }, {
          value: '+685',
          label: '萨摩亚'
        }, {
          value: '+381',
          label: '塞尔维亚'
        }, {
          value: '+232',
          label: '塞拉利昂'
        }, {
          value: '+221',
          label: '塞内加尔'
        }, {
          value: '+357',
          label: '塞浦路斯'
        }, {
          value: '+248',
          label: '塞舌尔'
        }, {
          value: '+966',
          label: '沙特阿拉伯'
        }, {
          value: '+239',
          label: '圣多美和普林西比'
        }, {
          value: '+290',
          label: '圣赫勒拿'
        }, {
          value: '+1869',
          label: '圣基茨和尼维斯'
        }, {
          value: '+1758',
          label: '圣卢西亚'
        }, {
          value: '+378',
          label: '圣马力诺'
        }, {
          value: '+508',
          label: '圣皮埃尔和密克隆'
        }, {
          value: '+1784',
          label: '圣文森特和格林纳丁斯'
        }, {
          value: '+94',
          label: '斯里兰卡'
        }, {
          value: '+421',
          label: '斯洛伐克'
        }, {
          value: '+386',
          label: '斯洛文尼亚'
        }, {
          value: '+268',
          label: '斯威士兰'
        }, {
          value: '+249',
          label: '苏丹'
        }, {
          value: '+597',
          label: '苏里南'
        }, {
          value: '+677',
          label: '所罗门群岛'
        }, {
          value: '+992',
          label: '塔吉克斯坦'
        }, {
          value: '+66',
          label: '泰国'
        }, {
          value: '+255',
          label: '坦桑尼亚'
        }, {
          value: '+676',
          label: '汤加'
        }, {
          value: '+1649',
          label: '特克斯和凯科斯群岛'
        }, {
          value: '+1868',
          label: '特立尼达和多巴哥'
        }, {
          value: '+216',
          label: '突尼斯'
        }, {
          value: '+688',
          label: '图瓦卢'
        }, {
          value: '+90',
          label: '土耳其'
        }, {
          value: '+993',
          label: '土库曼斯坦'
        }, {
          value: '+690',
          label: '托克劳'
        }, {
          value: '+681',
          label: '瓦利斯和富图纳群岛'
        }, {
          value: '+678',
          label: '瓦努阿图'
        }, {
          value: '+502',
          label: '危地马拉'
        }, {
          value: '+58',
          label: '委内瑞拉'
        }, {
          value: '+673',
          label: '文莱'
        }, {
          value: '+256',
          label: '乌干达'
        }, {
          value: '+380',
          label: '乌克兰'
        }, {
          value: '+598',
          label: '乌拉圭'
        }, {
          value: '+998',
          label: '乌兹别克斯坦'
        }, {
          value: '+34',
          label: '西班牙'
        }, {
          value: '+212',
          label: '西撒哈拉'
        }, {
          value: '+30',
          label: '希腊'
        }, {
          value: '+65',
          label: '新加坡'
        }, {
          value: '+687',
          label: '新喀里多尼亚'
        }, {
          value: '+64',
          label: '新西兰'
        }, {
          value: '+36',
          label: '匈牙利'
        }, {
          value: '+963',
          label: '叙利亚'
        }, {
          value: '+1876',
          label: '牙买加'
        }, {
          value: '+374',
          label: '亚美尼亚'
        }, {
          value: '+967',
          label: '也门'
        }, {
          value: '+964',
          label: '伊拉克'
        }, {
          value: '+98',
          label: '伊朗'
        }, {
          value: '+972',
          label: '以色列'
        }, {
          value: '+39',
          label: '意大利'
        }, {
          value: '+91',
          label: '印度'
        }, {
          value: '+62',
          label: '印度尼西亚'
        }, {
          value: '+44',
          label: '英国'
        }, {
          value: '+1284',
          label: '英属维尔京群岛'
        }, {
          value: '+246',
          label: '英属印度洋领地'
        }, {
          value: '+962',
          label: '约旦'
        }, {
          value: '+84',
          label: '越南'
        }, {
          value: '+260',
          label: '赞比亚'
        }, {
          value: '+235',
          label: '乍得'
        }, {
          value: '+350',
          label: '直布罗陀'
        }, {
          value: '+56',
          label: '智利'
        }, {
          value: '+236',
          label: '中非共和国'
        }
]
    }
  },
  mounted(){
	if(sessionStorage.getItem('time')){
  		let count1=sessionStorage.getItem('time')
    	this.timer=setInterval(() => {		
				count1--
				this.msg='重新发送'+count1+'S'
				this.forbidden=true
				this.count=count1
				sessionStorage.setItem('time', count1)
				if(this.count==0){
				this.msg='点击验证'
				this.count = 60
				clearInterval(this.timer)
				this.forbidden=false
				sessionStorage.removeItem('time',count1)
			}
			},1000)
	}
    
  },
  methods: {
			phone () {
				this.flag1 = !this.flag1
				if(this.flag1==true){
					this.msg1='邮箱注册?'
					this.flag=false
				}else{
					this.flag=true
					this.msg1='手机注册?'
				}
			},
			finish(){ 
				if(this.flag1==true){					
				var data =  Qs.stringify({
    				mobile: this.phonenumber,
					password: this.password,
					smsCode: this.input4
				})
				axios({
					method: 'post',
      				url: '/api/registerByMobile',
					headers:{
			 		"Content-Type":'application/x-www-form-urlencoded; charset=UTF-8'
					},
					data
					}).then(res => {
					console.log(res.data)
					if(res.data.header.status==1000){
						//成功后跳转页面
						this.$router.replace({ path: '/myAccount' })
						sessionStorage.setItem('login','1')
					}
					else {						
						this.$message({
          				message: res.data.msg,
          				center: true,
          				type:'error'
        					})
        					
					}
				}).catch(error => {
					console.log(error)
				})
				}else{
					if(this.email.length>0){
			let params = this.email
			email(params).then(res => {
				console.log(res.data)
				if(res.data.data==false){
					this.flag7=false					
					var data =  Qs.stringify({
    					email:this.email,
						password: this.password
				})
					axios({
					method: 'post',
      				url: '/api/registerSendEmail',
					headers:{
			 		"Content-Type":'application/x-www-form-urlencoded; charset=UTF-8'
					},
					data
					}).then(res => {
					console.log(res.data)
					if(res.data.header.status==1000){
						this.$message({
          				message: '请前往注册邮箱点击激活',
          				center: true,
          				type:'warning'
        				});	
        				setInterval(()=>{
        					this.$router.replace({ path: '/login' })
        				},3000)
					}else{
						this.$message({
          				message: res.data.msg,
          				center: true,
          				type:'error'
        				});					
					}
				}).catch(error => {
					console.log(error)
				})
				
				}else{
					this.flag7=true
				}				
			}).catch(error => {
				console.log(error)
			})
			}else{
				this.flag7=false
			}
				}
		},
		send () {
			if(this.phonenumber.length>0){
			let params = this.phonenumber
			email(params).then(res => {
				console.log(res.data)
				if(res.data.data==false){
				this.flag6=false
				this.timer=setInterval(() => {
				if(this.count==0){
				this.msg='点击验证'
				this.count = 60
				clearInterval(this.timer)
				this.forbidden=false
				sessionStorage.removeItem('time',this.count)
			}
			else{
				this.count--
				this.msg='重新发送'+this.count+'S'
				this.forbidden=true
				sessionStorage.setItem('time', this.count);
			}
			},1000)
				let params = {
				mobile:this.phonenumber+'&nativeCode='+this.select
			}
			Verification(params.mobile).then(res => {
				console.log(res)
			}).catch(error => {
				console.log(error)
			})
			
				}else{
					this.flag6=true
				}				
			}).catch(error => {
				console.log(error)
			})
			}
		}
		},
		watch: {
			password(newval,oldval){
				if(newval.length<6&&newval.length>0){
					this.flag2 = true
				}
				else{
					this.flag2 = false
				}
			},
			repassword(newval,oldval){
				if(newval != this.password&&newval.length!=0){
					this.flag3 = true
				}
				else{
					this.flag3 = false
				}
			},
			email(val){
				let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
				if(reg.test(val)||val.length==0){
					this.flag4=false
				}else{
					this.flag4=true
				}
			},
			phonenumber(val){
				let reg1 = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
				if(reg1.test(val)||val.length==0){
					this.flag5=false
				}
				else{
					this.flag5=true
				}
			}
		}
};
</script>
<style scoped>
.register-header{
	text-align: center;
	background-color: #0ca8e3;
	color: white;
	font-family: "微软雅黑";
	font-size: 18px;
	position: relative;
}
.register-header p{
	font-weight: bold;
	margin-top: 15px;
}
.el-icon-arrow-left{
	position: absolute;
	left: 5%;
	top: 50%;
	transform: translate(-5%,-50%);
}
.el-input{
	margin-top: 10px;
}
.over{
	margin-left: 35%;
}
.change{
	width: 80px;
}
a{
	color: white;
}
.get{
	width: 110px;
}
.yanzheng{
	width: 165px;
}
.danger{
	font-size: 10px;
	color: red;
}
.list{
	width: 250px;
}
</style>