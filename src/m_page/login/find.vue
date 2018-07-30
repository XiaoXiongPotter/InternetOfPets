<template>
<el-container>
	<el-header>1</el-header>
	<el-main style="padding: 0;">
		<div class="main-header">
			<span>Finder</span>
		</div>
		<div class="main-nav">
			<div class="main-nav-left"><span>距离</span><img src="../../image/icon-up.png"/></div>
			<div class="main-nav-right"><span>时间</span><img src="../../image/icon-up.png"/></div>
		</div>
	</el-main>
	<el-footer style="position: fixed;bottom: 0;width: 100%;">3</el-footer>
</el-container>	
</template>
<script>
	export default{
		name: "find",
		data(){
			return{
				list:[
				{
				 'img':require('../../image/pet1.jpg'),
				 'petname':'二哈',
				 'petvariety':'哈士奇',
				 'time':'2018-06-03',
				 'place':'东莞市南城汽车站附近'
				},
				{
				 'img':require('../../image/pet2.jpg'),
				 'petname':'蝴蝶',
				 'petvariety':'蝴蝶犬',
				 'time':'2018-06-10',
				 'place':'东莞市南城汽车站附近'
				}
				]
			}
		}
	}
</script>
<style scoped>
.main-header{
 	text-align: center;
 	font-size: 15px;
 	color: #00BFFF;
 	position: relative;
 	width: 100px;
 	left: 50%;
 	transform: translate(-50%);
}
.main-header span::before{
	content: '';
	border-top:solid 1px #0000FF;
	width: 15px;
	display: block;
	position: absolute;
	top: 50%;
	left: 0;
}
.main-header span::after{
	content: '';
	border-top:solid 1px #0000FF;
	width: 15px;
	display: block;
	position: absolute;
	top: 50%;
	right: 0;
}
.main-nav{
	display: flex;
	border-bottom: solid 1px #C0C0C0;
	position: relative;
}
.main-nav-left{
	flex: 1;
	height: 50px;
	line-height: 50px;
	text-align: center;
	color: #696969;
}
.main-nav-left::after{
	border-right: solid 1px #C0C0C0;
	content: '';
	display: block;
	position: absolute;
	top: 40%;
	left: 50%;
	height: 15px;
}
.main-nav-right{
	flex: 1;
	height: 50px;
	line-height: 50px;
	text-align: center;
	color: #696969;
}
.main-nav-left img{
	vertical-align: middle;
}
.main-nav-right img{
	vertical-align: middle;
}
</style>