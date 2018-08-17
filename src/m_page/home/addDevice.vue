<template>
    <div class="addDevice">
        <v-header :go-back='true'></v-header>

        <div ref="wrapper" class='addDevice-box'>
            <div>
                <div class="title">
                    <i class="line"></i>
                    <span>Add Device</span>
                    <i class="line"></i>
                </div>
                <p class="explain">请选择您要接入的设备</p>
                <ul>
                    <li>
                        <router-link to="/connectDevice">
                            <img src="../../image/robot.jpg" alt="">
                            <span>多尼斯智能宠伴机器人</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/connectDevice">
                            <img src="../../image/feeder.jpg" alt="">
                            <span>多尼斯智能喂食器</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/connectDevice">
                            <img src="../../image/bread.jpg" alt="">
                            <span>多尼斯迷你逗宠机器人</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/connectDevice">
                            <img src="../../image/camrarobot.jpg" alt="">
                            <span>多尼斯智能摄像逗宠器</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/connectDevice">
                            <img src="../../image/tag.jpg" alt="">
                            <span>多尼斯协寻吊坠</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/connectDevice">
                            <img src="../../image/water.jpg" alt="">
                            <span>多尼斯自动饮水机</span>
                        </router-link>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>
<script scoped>
import header from "../../components/header";
import IScroll from "iscroll/build/iscroll-probe";
export default {
    name: "addDevice",
    components: {
        "v-header": header
    },
    created() {
        this.$nextTick(() => {
            this.Scroll = new IScroll(this.$refs.wrapper, {
                click: true
            });
        });
    }
};
</script>
<style scroped>

.addDevice-box {
    position: absolute;
    top:40px;
    width: 100%;
    height: 90%;
    overflow: hidden;
    touch-action: none;
}
.title {
    text-align: center;
}
.title span {
    color: #0ca8e3;
    font-size: 14px;
}
.line {
    display: inline-block;
    width: 15px;
    height: 1px;
    background: #085196;
    margin: 0 5px;
    position: relative;
    top: -4px;
}
.explain {
    text-align: center;
    margin-top: 30px;
    color: #666;
    font-size: 14px;
}
.addDevice ul {
    margin-top: 20px;
}
.addDevice li {
    box-sizing: border-box;
    padding: 10px;
    height: 100px;
    line-height: 100px;
}
.addDevice li span {
    display: inline-block;
    padding-left: 10px;
    height: 100px;
    line-height: 100px;
    vertical-align: middle;
    color: #0ca8e3;
}
.addDevice ul img {
    width: 80px;
    height: 80px;
    vertical-align: middle;
}
</style>
