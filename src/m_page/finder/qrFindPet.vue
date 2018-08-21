<template>
	<div class="qrFindFet">
		<div class="header">
			<img src="../../image/back.png" class="back" @click="back" />
			<div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
		</div>
		<!--宠物信息-->
		<div class="cw_news">
			<div class="pet_img">
				<div class="imgbox"><img :src="featurePhoto" alt=" " /></div>
				<p v-text="name" ></p>
			</div>
			<ul>
				<li>
					<div><img src="../../image/cheng.png" alt="" /></div>
					<span v-text="weight"></span>  <i> kg</i>
				</li>
				<li>
					<div><img src="../../image/height.png" alt="" /></div>
					<span v-text="height"></span><i>cm</i>
				</li>
				<li>
					<div><img src="../../image/birth.png" alt="" /></div>
					<span v-text="birthTime"></span>
				</li>
				<li>
					<div><img src="../../image/xingge.png" alt="" /></div>
					<span v-text="character"></span>
				</li>
				<li>
					<div><img src="../../image/pinzhong.png" alt="" /></div>
					<span  v-text="petType"></span>
				</li>
				<li>
					<div><img src="../../image/male.png" alt="" /></div>
					<span  v-text="gender"></span>
				</li>
			</ul>
			<div class="clear" style="clear: both;width: 100%;height: 0;"></div>
			<div class="describe">
				<div class="des_con">
					<div class="des_pic"><img src="../../image/description.png" alt=" " /></div>
					<div class="des_essay" v-text="content">
						你好!<br />我的宠物走丢了，他是一只白毛的猎兔犬，脖子上有个带二维码的吊牌。如果有好心人士看到了脖子上带有吊牌的猎兔犬， 请扫描吊牌上的二维码，可以查看狗狗信息和主人的联系方式，帮助走丢的狗狗找到主人。谢谢！
					</div>
					<div class="clear" style="clear: both;width: 100%;height: 0;"></div>
				</div>
			</div>
		</div>
		<!--主人信息-->
		<div class="zr_news">
			<div class="zr">
				<div class="zr_pic"><img src="../../image/man.jpg" alt="主人头像" /></div>
				<div class="zr_desc">
					<p v-text="nickname"></p>
					<span v-text="email"></span>
					<a :href="'tel:'+mobile" v-text="mobile"></a>
				</div>
				<div class="clear"></div>
			</div>
			<div class="adr">
				<p> 主人目前不方便透露地址信息</p>
				<div><img src="../../image/find_device.png" /></div>
			</div>
		</div>

	</div>
</template>
<script>
import headerTop from "../../components/header.vue";
import { getTagInfo } from "../../ClientServerApi/index.js";
import Qs from "qs";
import { mobile } from '../../api';
export default {
    name: "qrPindFet",
    data() {
        return {
            name: "",
            weight: "",
			height: "",
			birthTime:'',
			character:'',
			petType:'',
			gender:'',
			content:'',
			featurePhoto:'',
			nickname:'',
			mobile:'',
			email:'',
        };
    },
    created() {
        let params = Qs.stringify({
            id: this.$route.query.id
        });
        getTagInfo(params).then(res => {
			let pet = res.data.data
			this.name = pet.petName
			this.weight = pet.weight
			this.height = pet.height
			this.birthTime = pet.birthTime.substr(5,5)
			this.character = pet.character
			this.petType = pet.petType
			this.gender = pet.gender
			this.content = pet.content
			this.featurePhoto = pet.featurePhoto
			this.nickname = pet.nickname
			this.mobile = pet.mobile
			this.email = pet.email
			console.log(pet);
			
        });
	},
	mounted() {},
    components: {
        headerTop
    },
    methods: {
        back: function() {
            this.$router.back(-1);
        }
    }
};
</script>
<style scoped>
.imgbox{
	height:300px;
	overflow: hidden;
}
.clear {
    width: 100%;
    height: 0;
    clear: both;
}
.qrFindFet {
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
.header {
    display: flex;
    position: relative;
    border-bottom: solid 1px #dcdcdc;
    width: 100%;
    background: #fff;
    height: 40px;
    line-height: 40px;
}
.back {
    width: 22px;
    height: 22px;
    position: absolute;
    top: 18%;
}
/*宠物信息*/
.pet_img {
    width: 100%;
}
.pet_img div {
    font-size: 0;
}
.pet_img div img {
    width: 100%;
}
.pet_img p {
    text-align: center;
    background: #06509b;
    color: #ffffff;
    font-size: 1.5rem;
    line-height: 3.2rem;
}
.cw_news ul li {
    width: 16.666%;
    float: left;
    text-align: center;
    margin-top: 1rem;
    border-bottom: 1px solid #e6e6e6;
}
.cw_news ul li div {
    width: 80%;
    margin: 0 auto;
}
.cw_news ul li div img {
    width: 100%;
}
.cw_news ul li span {
    line-height: 1.6rem;
}
.describe {
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
    margin: 1rem 0;
}
.des_pic {
    width: 30%;
    float: left;
    text-align: center;
}
.des_pic img {
    width: 80%;
}
.des_essay {
    width: 65%;
    float: right;
    margin-right: 2%;
    height: 6.5rem;
    line-height: 2rem;
    overflow: auto;
}
/*主人信息*/
.zr_news {
    width: 100%;
    background: #eeeeee;
}
.zr {
    width: 90%;
    margin: 0 auto;
    padding-top: 1rem;
}
.zr_pic {
    width: 30%;
    float: left;
}
.zr_pic img {
    width: 100%;
    border-radius: 8px;
}
.zr_desc {
    width: 65%;
    float: right;
}
.zr_desc p {
    font-size: 1.5rem;
    line-height: 2.8rem;
    font-weight: bold;
    color: #666666;
}
.zr_desc span {
    color: #e97311;
    line-height: 2.2rem;
    font-size: 1.5rem;
    display: block;
    margin-bottom: 0.5rem;
}
.zr_desc a {
    padding: 0.3rem 0.5rem;
    line-height: 2.2rem;
    color: #ffffff;
    font-size: 1.5rem;
    background: #e97311;
    border-radius: 15px;
}
.adr p {
    width: 90%;
    margin: 0 auto;
    background: #06509b;
    color: #ffffff;
    text-align: center;
    box-sizing: border-box;
    padding: 1.5rem 2.5rem;
    margin-top: 1rem;
    line-height: 1.5rem;
    border-radius: 5px;
}
.adr div {
    width: 25%;
    margin: 0 auto;
}
.adr div img {
    width: 100%;
}
</style> 