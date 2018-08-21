<template>
	<div class="findPetInfo">
		<div class="header">
			<img src="../../image/back.png" class="back" @click="back" />
			<div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
		</div>
		<div class="pet_news">
			<div class="pet_pic"><img :src="photoUrl" alt="头像" /></div>
			<div>宠物名称<br />
				<span v-text="name">厌骨</span>
			</div>
			<ul>
				<li >宠物品种<br />
					<span v-text="petType">秋田</span>
				</li>
				<li >宠物毛色<br />
					<span v-text="color">浅棕色</span>
				</li>
				<li >宠物性别<br />
					<span v-text="gender">男</span>
				</li>
				<li >宠物体重(Kg)<br />
					<span v-text="weight">10</span>
				</li>
				<li >宠物身高(cm)<br />
					<span v-text="height">40</span>
				</li>
				<li >出生日期<br />
					<span v-text="birthTime">2018-08-14</span>
				</li>
				<li >宠物性格<br />
					<span v-text="character">嚣张跋扈</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import headerTop from "../../components/header.vue";
import { getTagInfo } from "../../ClientServerApi/index.js";
import Qs from "qs";
export default {
    name: "findPetInfo",
    data() {
        return {
						name: "",
						color:'',
            weight: "",
            height: "",
            birthTime: "",
            character: "",
            petType: "",
            gender: "",
						content: "",
						photoUrl:'',
        };
    },
    created() {
        let params = Qs.stringify({
            id: this.$route.query.id
        });
        getTagInfo(params).then(res => {
            let pet = res.data.data;
            this.name = pet.petName;
						this.weight = pet.weight;
						this.color = pet.color;
            this.height = pet.height;
            this.birthTime = pet.birthTime.substr(0,10);
            this.character = pet.character;
            this.petType = pet.petType;
            this.gender = pet.gender;
						this.content = pet.content;
						this.photoUrl = pet.portrait
            console.log(res);
        });
    },
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
.findPetInfo {
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
.pet_news {
    width: 90%;
    margin: 0 auto;
    margin-top: 2rem;
}
.pet_news div {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    line-height: 2.4rem;
    color: #38aaff;
}
.pet_news ul li {
    width: 50%;
    float: left;
    margin-bottom: 1.8rem;
    font-size: 1.5rem;
    color: #38aaff;
}
.pet_news ul li span,
.pet_news div span {
    /*margin-left: 6.8rem;*/
    font-size: 1.2rem;
    line-height: 2.4rem;
    color: #696969;
}
.pet_pic {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
}
.pet_pic img {
    width: 100%;
}
</style> 