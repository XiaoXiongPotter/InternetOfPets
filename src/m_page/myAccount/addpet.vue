<template>
    <div class="addpet">
    <div class="header">
     <img src="../../image/back.png" class="back" @click="back"/>
     <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
 </div>
 <div class="addpet-main" ref='wrapper'>
     <div>
     	<div class="title">
		<div class="head_img">
       	<img :src="imgflag?avatar:avatar1"  @click.stop="uploadHeadImg" style="margin: auto;display: block;"/>
    	 </div>
     	<input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>                
         </div>
         <div class="pet">
             <div class="petname">
                 <span>名称</span>
                 <el-input v-model="petname" placeholder='输入名称'></el-input>
             </div>
                 <div class="pet-msg">
                 <div class="petbelong">
                     <span>种类</span>
                     <el-input v-model='petbelong' placeholder='输入种类'></el-input>
                 </div>
                 <div class="sex">
                     <span>性别</span>
                     <br />
					<div class="selectsex" style="margin-top: 10px;">
					<el-radio v-model="radio" label="男" @change='selectman'>男</el-radio>
  					<el-radio v-model="radio" label="女" @change='selectwomen'>女</el-radio>
					</div>
                 </div>
                 </div>
                 <div class="pet-msg">
                 <div class="height">
                     <span>身高(cm)</span>
                     <el-input v-model='height' placeholder='例如:20' @change='addheight'></el-input>
					<span class="danger" v-show='flag'>格式不正确</span>
                 </div>
                 <div class="weight">
                     <span>体重(kg)</span>
                     <el-input v-model='weight' placeholder='例如:20' @change='addweight'></el-input>
					 <span class="danger" v-show='flag1'>格式不正确</span>
                 </div>
                 </div>
                 <div class="pet-msg">
                 <div class="birthday">
                     <span>出生日期</span>
                 <div class="block">
                <el-date-picker
                      v-model="birthday"
                      type="date"
                      value-format="yyyy-MM-dd"
                      placeholder="选择日期">
                </el-date-picker>
                 </div>
                 </div>
                 <div class="haircolor">
                     <span>毛色</span>
                     <el-input v-model='haircolor' placeholder='输入毛色'></el-input>
                 </div>
                 </div>
                 <div class="character">
                 <span>性格</span>
                 <el-input v-model="character" placeholder='输入性格'></el-input>
             </div>
             <div class="save-btn" style="margin: 20px 0;">
                  <el-button type="primary" round style='margin: auto;display: block;' @click='add'>确认添加</el-button>
             </div>
         </div>
     </div>
 </div>
    </div>
</template>
<script>
    import IScroll from 'iscroll/build/iscroll-probe'
    import axios from "axios";
    import {getpet} from '../../ClientServerApi/index.js'
    import {addPet} from '../../ClientServerApi/index.js'
    import Qs from "qs";
    export default {
        name:'addpet',
        data(){
            return{
                src:'',
                petname:'',
                petbelong:'',
                height:'',
                weight:'',
                birthday:'',
                haircolor:'',
                character:'',
                avatar:'',
				avatar1:require('../../image/addpet1.png'),
				imgflag:false,
				radio:'男',
            	man:'男',
            	women:'女',
            	flag:false,
            	flag1:false
            }
        },
         mounted(){
           this.$nextTick(() => {
          this.Scroll = new IScroll(this.$refs.wrapper, {
          click: true
        })
       })     
  },
        methods:{
        uploadHeadImg: function () {
       	this.$el.querySelector('.hiddenInput').click()
    },
    // 将头像显示
    	handleFile: function (e) {
        this.imgflag=true
        let $target = e.target || e.srcElement
        let file = $target.files[0]
    	var reader = new FileReader()
    	reader.readAsDataURL(file)
    	reader.onload = (data) => { 
        let res = data.target || data.srcElement
        this.avatar = res.result
        sessionStorage.setItem('base',data.target.result.split(',')[1])
    	}
    	},
    	addheight(){
    			let reg = /^[0-9]*$/
        	if(reg.test(this.height)){
        		this.flag=false
        	}else{
        		this.flag=true
        	}
    	},
    	addweight(){
    			let reg = /^[0-9]*$/
        	if(reg.test(this.weight)){
        		this.flag1=false
        	}else{
        		this.flag1=true
        	}
    	},
    	selectman(){
        	this.radio=this.man
        },
        selectwomen(){
        	this.radio=this.women
        },
        back(){
          this.$router.replace({ path: '/mypet' })
          sessionStorage.removeItem('base')
         },
        add(){
        	if(this.flag==false&&this.flag1==false){
        	var params = Qs.stringify({
                name:this.petname,
                height:this.height,
                weight:this.weight,
                birthTime:this.birthday,
                petType:this.petbelong,
                color:this.haircolor,
                gender:this.radio,
                portrait:sessionStorage.base,
                character:this.character
      })
      addPet(params).then(res =>{
          console.log(res)
          if(res.data.header.status==1000){
              sessionStorage.removeItem('base')
              this.$router.replace({ path: '/mypet' })
          }
      }).catch(error => {
          console.log(error)
      })
        	}
        }
        }
    }
</script>
<style>
.pet .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 100px;
}
.pet .el-input__icon{
    display: none;
}
.pet .el-input__inner{
    padding: 0 0;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border-top-color: white;
    border-right-color: white;
    border-left-color: white;
}
.pet .el-input__inner:hover{
    border-top-color: white;
    border-right-color: white;
    border-left-color: white;
}
</style>
<style scoped>
.addpet .danger{
	font-size: 10px;
	color: red;
}
.head_img img{
  width:100px;
  height:100px;
  border-radius:50px
}
.hiddenInput{
  display: none;
}
.addpet{
    width: 100%;
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
    width: 100%;
      background: #fff;
      color: #0ca8e3;
      height: 40px;
      line-height: 40px;
    position: relative;
}
.back{
    width: 22px;
    height: 22px;
    position: absolute;
    top: 18%;
}
.addpet-main{
    position: absolute;
    top: 40px;
    bottom: 0;
    width: 100%;
    max-width: 720px;
    overflow: hidden;
    touch-action: none;
}
.petname{
    margin-left: 15px;
    width: 50%;
}
.pet{
    width: 100%;
}
.pet span{
    font-size: 16px;
    color: #00BFFF;
}
.petbelong{
    flex: 1;
    margin-left: 15px;
    margin-top: 40px;
}
.pet-msg{
    display: flex;
}
.sex{
    flex: 1;
    margin-top: 40px;
}
.height{
    flex: 1;
    margin-left: 15px;
    margin-top: 40px;
}
.weight{
    flex: 1;
    margin-top: 40px;
}
.birthday{
    flex: 1;
    margin-left: 15px;
    margin-top: 40px;
}
.haircolor{
    flex: 1;
    margin-top: 40px;
}
.character{
    margin-top: 40px;
    margin-left: 15px;
    width: 50%;
}
</style>
