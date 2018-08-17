<template>
    <div class="mypet">
        <div class="header">
            <img src="../../image/back.png" class="back" @click="back" />
            <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
            <img src="../../image/add.png" class="add" @click="addpet" />
            <i v-show="showflag"></i>
            <p v-show="showflag" @click="addpetto">添加宠物</p>
        </div>
        <div class="main" ref='wrapper'>
            <ul>
                <li v-for="(item,index) in petlist" :key='index' class="petlist" @click="petinfos(index)">
                    <div class="petimg"><img :src="item.portrait" /></div>
                    <div class="petmsg">
                        <p class="petname">{{item.name}}</p>
                        <p class="birthday">出生日期:{{item.birthTime.split(' ')[0]}}</p>
                        <binddevice :id='item.id'></binddevice>
                    </div>
                </li>
            </ul>
        </div>
        <editpet ref='banner' :list='petlist' :index='index' @remove='remove' v-if='petlist' @react='react'></editpet> 
    </div>
</template>
<script>
import IScroll from "iscroll/build/iscroll-probe";
import editpet from "../myAccount/editpet";
import { getpet } from "../../ClientServerApi/index.js";
import { getPetDevices } from "../../deviceApi/index.js";
import binddevice from "../../components/binddevice";
import axios from "axios";
import Qs from "qs";
export default {
    name: "mypet",
    inject: ["reload"],
    data() {
        return {
            petlist: "",
            index: "",
            showflag: false
        };
    },
    beforeUpdate() {
        this.$nextTick(() => {
            this.Scroll = new IScroll(this.$refs.wrapper, {
                click: true,
                preventDefault:false
            });
        });
    },
    created() {
        getpet()
            .then(res => {
                console.log(res);
                if (res.data.header.status == 1000) {
                    this.petlist = res.data.data;
                }
            })
            .catch(error => {
                console.log(error);
            });
    },
    methods: {
        back() {
            this.$router.replace({ path: "/myAccount" });
        },
        react() {
            this.reload();
        },
        petinfos(index) {
            this.index = index;
            this.$refs.banner.show();
        },
        addpet() {
            this.showflag = !this.showflag;
        },
        addpetto() {
            this.$router.replace({ path: "/addpet" });
        },
        remove(index) {
            this.petlist.splice(index, 1);
            getpet()
                .then(res => {
                    console.log(res);
                    if (res.data.header.status == 1000) {
                        this.petlist = res.data.data;
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    components: {
        editpet,
        binddevice
    }
};
</script>
<style scoped>
.birthday{
	padding-top: 10px;
	font-family: "微软雅黑";
	font-size: 14px;
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
.header i {
    width: 0;
    height: 0;
    border-bottom: 20px solid black;
    border-left: 20px solid transparent;
    position: absolute;
    z-index: 10;
    top: 33px;
    right: 15px;
}
.header p {
    z-index: 10;
    background-color: black;
    color: white;
    font-size: 13px;
    line-height: 30px;
    width: 80px;
    text-align: center;
    height: 30px;
    position: absolute;
    top: 42px;
    right: 5px;
}
.back {
    width: 22px;
    height: 22px;
    position: absolute;
    top: 18%;
}
.add {
    width: 22px;
    height: 22px;
    position: absolute;
    top: 18%;
    right: 0;
}
.main {
    position: absolute;
    overflow: hidden;
    width: 100%;
    max-width: 720px;
    top: 41px;
    bottom: 0px;
    touch-action: none;
}
.petlist {
    display: flex;
    border-bottom: solid 1px #dcdcdc;
}
.petimg {
    flex: 1;
}
.petimg img {
    width: 70px;
    height: 70px;
    padding: 15px 10px;
}
.petmsg {
    flex: 2;
    padding: 15px 0px;
}
.petname {
    font-family: "微软雅黑";
    font-size: 20px;
    font-weight: bold;
    color: #4169e1;
}
.petdevice {
    padding-top: 30px;
    font-family: "微软雅黑";
    font-size: 14px;
}
</style>