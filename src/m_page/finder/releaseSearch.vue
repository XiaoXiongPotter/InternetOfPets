<template>
    <div class="releaseSearch" ref='banner'>
        <div class="header">
            <img src="../../image/back.png" class="back" @click="back" />
            <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
        </div>
        <div class="main" ref='wrapper'>
            <div>
             <div class="petphoto">
            <p>宠物照片</p>
            <div class="head_img">
                <img :src="imgflag?avatar:avatar1" @click.stop="uploadHeadImg" style="margin-left:10px;margin-top: 10px;" />
                <!-- <img :src="imgflag1?avatar2:avatar1" @click.stop="uploadHeadImg1" style="margin-left:10px;margin-top: 10px;" v-show="flag" /> -->
                <!-- <img :src="imgflag2?avatar3:avatar1" @click.stop="uploadHeadImg2" style="margin-left:10px;margin-top: 10px;" v-show="flag1" /> -->
            </div>
            <input type="file" accept="image/*" @change="handleFile" class="hiddenInput" />
            <!-- <input type="file" accept="image/*" @change="handleFile1" class="hiddenInput1" /> -->
            <!-- <input type="file" accept="image/*" @change="handleFile2" class="hiddenInput2" /> -->
            </div>
                <div class="losepet">
                    <p>走失宠物</p>
                    <el-input v-model="petname" :disabled="true"></el-input>
                </div>
                <div class="getmoney">
                    <p>赏金(￥)</p>
                    <el-input v-model="money"></el-input>
                </div>
                <div class="synopsis">
                    <p>协寻简介</p>
                    <el-input v-model="introduction" placeholder="宝贝走丢了总该说点什么吧..."></el-input>
                </div>
                <div class="losttime">
                    <p>走失时间</p>
                    <div class="block">
                        <el-date-picker v-model="losttime" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期">
                        </el-date-picker>
                    </div>
                </div>
                <div class="place">
                    <p>走失地点</p>
                    <el-input v-model="loseplace" placeholder="宝贝在哪里走丢的呢?"></el-input>
                </div>
                <div class="mobile">
                    <p>电话</p>
                    <el-input v-model="mobile"></el-input>
                </div>
                <div class="email">
                    <p>邮箱</p>
                    <el-input v-model="email"></el-input>
                </div>
                <div class="release-btn">
                    <el-button type="primary" round style="margin: auto;display: block;margin-top: 15px;" @click='release'>确认发布</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import IScroll from "iscroll/build/iscroll-probe";
import { addPublish } from "../../ClientServerApi/index.js";
import Qs from "qs";
export default {
    name: "releaseSearch",
    data() {
        return {
            showflag: false,
            petname: "",
            money: "",
            introduction: "",
            losttime: "",
            avatar: "",
            avatar1: require("../../image/addpet.png"),
            // avatar2:"",
            // avatar3:"",
            imgflag: false,
            mobile: "",
            email: "",
            loseplace: "",
            id: "",
            // flag:false,
            // imgflag1:false,
            // imgflag2:false,
            // flag1:false,
            // imgbase:[]
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.Scroll = new IScroll(this.$refs.wrapper, {
                click: true
            });
        });
    },
    created() {
        this.id = this.$route.query.id;
        this.petname = this.$route.query.petname;
    },

    methods: {
        // 打开图片上传
        uploadHeadImg: function() {
            this.$el.querySelector(".hiddenInput").click();
        },
        // 将头像显示
        handleFile: function(e) {
            this.imgflag = true;
            let $target = e.target || e.srcElement;
            let file = $target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            this.changeflag = true;
            reader.onload = data => {
                let res = data.target || data.srcElement;
                this.avatar = res.result;
                sessionStorage.setItem(
                    "base",
                    data.target.result.split(",")[1]
                );
                this.flag=true
            };
        },
        //         // 打开图片上传
        // uploadHeadImg1: function() {
        //     this.$el.querySelector(".hiddenInput1").click();
        // },
        // // 将头像显示
        // handleFile1: function(e) {
        //     this.imgflag1 = true;
        //     let $target = e.target || e.srcElement;
        //     let file = $target.files[0];
        //     var reader = new FileReader();
        //     reader.readAsDataURL(file);
        //     this.changeflag = true;
        //     reader.onload = data => {
        //         let res = data.target || data.srcElement;
        //         this.avatar2 = res.result;
        //         sessionStorage.setItem(
        //             "base1",
        //             data.target.result.split(",")[1]
        //         );
        //         this.flag1=true
        //     };
        // },
        //                 // 打开图片上传
        // uploadHeadImg2: function() {
        //     this.$el.querySelector(".hiddenInput2").click();
        // },
        // // 将头像显示
        // handleFile2: function(e) {
        //     this.imgflag2 = true;
        //     let $target = e.target || e.srcElement;
        //     let file = $target.files[0];
        //     var reader = new FileReader();
        //     reader.readAsDataURL(file);
        //     this.changeflag = true;
        //     reader.onload = data => {
        //         let res = data.target || data.srcElement;
        //         this.avatar3 = res.result;
        //         sessionStorage.setItem(
        //             "base2",
        //             data.target.result.split(",")[1]
        //         );
        //     };
        // },
        back() {
            sessionStorage.removeItem("base");
            // sessionStorage.removeItem("base1");
            //  sessionStorage.removeItem("base2");
            this.$router.back(-1)
        },
        release() {
            // this.imgbase.push(sessionStorage.base,sessionStorage.base1,sessionStorage.base2)
            // console.log(this.imgbase)
            let params = Qs.stringify({
                content: this.introduction,
                lat: 31.18826,
                lon: 121.43687,
                mobile: this.mobile,
                email: this.email,
                loseTime: this.losttime,
                lostPlace: this.loseplace,
                bounty: this.money,
                featurePhoto: sessionStorage.base,
                petId: this.id
            });
            addPublish(params)
                .then(res => {
                    console.log(res);
                    if (res.data.header.status == 1000) {
                        this.$router.replace({ path: "/finder" });
                        sessionStorage.removeItem("base");
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>
<style>
.losepet .el-input.is-disabled .el-input__inner {
    border-top-color: white;
    border-right-color: white;
    border-left-color: white;
    color: #0ca8e3;
}

.getmoney .el-input__inner {
    border-top-color: white;
    border-right-color: white;
    border-left-color: white;
}
.getmoney .el-input__inner:hover {
    border-top-color: white;
    border-right-color: white;
    border-left-color: white;
}
.losttime .el-input__inner {
    border-top-color: white;
    border-right-color: white;
    border-left-color: white;
}
.losttime .el-input__inner:hover {
    border-top-color: white;
    border-right-color: white;
    border-left-color: white;
}
.place .el-input__inner {
    border-top-color: white;
    border-right-color: white;
    border-left-color: white;
}
.place .el-input__inner:hover {
    border-top-color: white;
    border-right-color: white;
    border-left-color: white;
}
.mobile .el-input__inner {
    border-top-color: white;
    border-right-color: white;
    border-left-color: white;
}
.mobile .el-input__inner:hover {
    border-top-color: white;
    border-right-color: white;
    border-left-color: white;
}
.email .el-input__inner {
    border-top-color: white;
    border-right-color: white;
    border-left-color: white;
}
.email .el-input__inner:hover {
    border-top-color: white;
    border-right-color: white;
    border-left-color: white;
}
.synopsis .el-input__inner {
    height: 80px;
}
</style>
<style scoped>
.head_img img {
    width: 60px;
    height: 60px;
}
.hiddenInput {
    display: none;
}
.hiddenInput1 {
    display: none;
}
.hiddenInput2 {
    display: none;
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
    width: 100%;
    background: #fff;
    color: #0ca8e3;
    height: 40px;
    line-height: 40px;
    position: relative;
}
.back {
    width: 22px;
    height: 22px;
    position: absolute;
    top: 18%;
}
.main {
    position: absolute;
    top: 40px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    touch-action: none;
}
.main p {
    padding-left: 10px;
    font-size: 13px;
}
.getmoney {
    margin-top: 15px;
}
.synopsis {
    margin-top: 15px;
}
.synopsis p {
    padding: 10px 10px;
}
.losttime {
    margin-top: 15px;
}

.petphoto p {
    padding-left: 10px;
    font-size: 13px;
}
.place {
    margin-top: 15px;
}
.mobile {
    margin-top: 15px;
}
.email {
    margin-top: 15px;
}
</style>