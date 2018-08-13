<template>
	<div class="binddevice">
		<p class="petdevice">绑定设备:{{this.device}}</p>
	</div>
</template>
<script>
import {getPetDevices} from'../deviceApi/index.js'
import Qs from "qs";
export default {
	name:'binddevice',
	props:['id'],
	data(){
		return{
			device:''
		}
	},
	mounted(){
		 let params = Qs.stringify({petId:this.id})
			getPetDevices(params).then(res => {
				console.log(res)
				if(res.data.header.status==1000){
					this.device=res.data.data[0].devName
				}
     		}).catch(error => {
     		console.log(error)
     		})
	}
}	
</script>
<style scoped>
	.petdevice{
	padding-top: 30px;
	font-family: "微软雅黑";
	font-size: 14px;
}
</style>