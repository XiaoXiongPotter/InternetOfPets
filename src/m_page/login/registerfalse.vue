<template>
	<div class="registerfalse">
		<div class="mes">
			<img src="../../image/false.png"/>
			<span>链接已经失效</span>
		</div>
			<el-button type="primary" class="btn"><router-link to="/login">立即登录</router-link></el-button>
	</div>
</template>
<script></script>
<style scoped>
a{
	color: white;
}
span{
	font-size: 25px;
	color: #FFA500;
	display: inline-block;
	vertical-align: middle;
}
img{
	display: inline-block;
	vertical-align: middle;
}
.btn{
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}
.mes{
	width: 250px;
	position: absolute;
	left: 50%;
	top: 30%;
	transform: translate(-50%,-30%);
}
</style>