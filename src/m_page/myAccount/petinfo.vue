<template>
	<transition name="show">
	<div class="petinfo" v-show="showflag">
	<div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
    <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
    <span @click="edit">编辑</span>
 	</div>
 	<div class="main" ref='wrapper'>
 		<div>
 			<div class="title">
 				<img :src="list.img" v-if='list'/>
 			</div>
 			<div class="petmessage">
 				<div class="petname" v-if='list'>
 					<span>名称</span>
 					<p>{{list.petname}}</p>
 				</div>
 				<div class="pet-msg">
 				<div class="petbelong" v-if='list'>
 					<span>种类</span>
 					<p>{{list.petbelong}}</p>
 				</div>
 				<div class="sex" v-if='list'>
 					<span>性别</span>
 					<p>{{list.sex}}</p>
 				</div>
 				</div>
 				<div class="pet-msg">
 					<div class="height" v-if='list'>
 					<span>身高(cm)</span>
 					<p>{{list.height}}</p>
 					</div>
 					<div class="weight" v-if='list'>
 					<span>体重(kg)</span>
 					<p>{{list.weight}}</p>
 					</div>
 				</div>
 				<div class="pet-msg">
 					<div class="birthday" v-if='list'>
 					<span>出生日期</span>
 					<p>{{list.birthday}}</p>
 					</div>
 					<div class="haircolor" v-if='list'> 
 					<span>毛色</span>
 					<p>{{list.haircolor}}</p>
 					</div>
 				</div>
 				<div class="pettype" v-if='list'>
 					<span>主人</span>
 					<p>{{list.pettype}}</p>
 				</div>
 				<div class="binddevice" v-if='list'>
 					<span>绑定设备</span>
 					<p>{{list.binddevice}}</p>
 					</div>
 			</div>
 			<div>
 			<div class="delete-btn" style="margin: 20px 0;">
 				<el-button type="primary" round style='margin: auto;display: block;'@click='remove'>删除宠物</el-button>
 			</div>
 			<div class="search-btn">
 				<el-button type="primary" round style='margin: auto;display: block;'@click='search'>发布协寻</el-button>
 			</div>
 			</div>
 		</div>
 	</div>
 	<editpet :list='list' ref='banner'></editpet>
	</div>
	</transition>
</template>
<script>
	import IScroll from 'iscroll/build/iscroll-probe'
	import editpet from '../myAccount/editpet'
	export default{
		name: "petinfo",
		props:['list','index'],
		data(){
			return{
				showflag:false,
				listshow:false,
				changeflag:false,
				petname:'',
				petbelong:'',
				sex:'',
				height:'',
				weight:'',
				birthday:'',
				haircolor:'',
				pettype:''
			}
		},
		 beforeUpdate(){
	 	  this.$nextTick(() => {
          this.Scroll = new IScroll(this.$refs.wrapper, {
          click: true
        })
       })     
  },
  components: {
   		editpet
  },
  methods:{
  	change(){
  		this.listshow=true
  	},
  	cancel(){
  		this.listshow=false
  	},
  	back(){
  		this.showflag=false	
  	},
  	edit(){
  		this.$refs.banner.show()
  		this.$refs.banner.focus()
  	},
  	show(){
  		this.showflag=true
  	},
  	search(){
  		this.$router.replace({ path: '/releaseSearch' })
  	},
  	remove(){
		this.showflag=false
		this.$emit('remove',this.index)
  	}
	}
  }
</script>
<style scoped>
.petinfo{
	position: fixed;
    left: 0;
    top: 0;
    bottom: 0px;
	width: 100%;
    z-index: 30;
    background-color: #fff;
    transition: all .2s linear;
}
.petinfo.show-enter, .petinfo.show-leave-to{
	transform: translateX(100%);
}
.header span{
	position: absolute;
	right: 10px;
	font-size: 15px;
}
.header .imgBox {
  width: 100px;
  margin: 0 auto;
}
.imgBox img {
  width: 100%;
  vertical-align: middle;
}
.header{
	display: flex;
	position: relative;
	width: 100%;
 	background: #fff;
  	color: #0ca8e3;
  	height: 40px;
  	line-height: 40px;
}
.back{
	width: 22px;
	height: 22px;
	position: absolute;
	top: 18%;
}
.main{
	position: absolute;
	top: 40px;
	bottom: 0px;
	width: 100%;
	overflow: hidden;
	touch-action: none;
}
.title p{
	text-align: center;
	font-size: 14px;
	padding-top: 5px;
}
.title img{
	width: 100px;
	height: 100px;
	border-radius: 50%;
	display: block;
	margin: auto;
}
.petmessage{
	margin-top: 30px;
}

.petname{
	position: relative;
	margin-left: 15px;
	width: 50%;
}
.petmessage span{
	font-size: 16px;
	color: #00BFFF;
}
.petmessage p{
	font-size: 14px;
}
.petbelong{
	flex: 1;
	position: relative;
	margin-left: 15px;
}
.pet-msg{
	display: flex;
	margin-bottom: 30px;
	margin-top: 30px;
}
.sex{
	flex: 1;
	position: relative;
}
.height{
	flex: 1;
	position: relative;
	margin-left: 15px;
}
.weight{
	flex: 1;
	position: relative;
}
.birthday{
	flex: 1;
	position: relative;
	margin-left: 15px;
}
.haircolor{
	flex: 1;
	position: relative;
}
.pettype{
	position: relative;
	margin-left: 15px;
	margin-top: 30px;
	width: 50%;
}
.binddevice{
	margin-left: 15px;
	margin-top: 30px;
}
</style>