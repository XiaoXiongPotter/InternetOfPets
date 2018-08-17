<template>
	<div class="binddevice">
		<p class="petdevice">绑定设备:{{this.device}}</p>
	</div>
</template>
<script>
import {getPetDevices} from'../ClientServerApi/index.js'
import Qs from "qs";
export default {
	name:'binddevice',
	props:['id'],
	data(){
		return{
			device:'',
			device1:''
		}
	},
	mounted(){
		 let params = Qs.stringify({petId:this.id})
			getPetDevices(params).then(res => {
				// console.log(res)
				if(res.data.header.status==1000){
					this.device1=res.data.data[0].device.type
					if(this.device1=='NECKLACE'){
						this.device='智能项圈'
					}
					if(this.device1=='TAG'){
						this.device='协寻二维码'
					}
					if(this.device1=='ROBOT'){
						this.device='宠物机器人'
					}
					if(this.device1=='BLUETOOTH'){
						this.device='蓝牙计步器'
					}
					if(this.device1=='FEEDER'){
						this.device='智能喂食器'
					}
				}
     		}).catch(error => {
     		console.log(error)
			 })
	}
}	
</script>
<style scoped>
	.petdevice{
	padding-top: 10px;
	font-family: "微软雅黑";
	font-size: 14px;
}
</style>