<template>
  <div class="connectDevice">
    <p class="explain">智能宠物机器狗网络接入</p>
    <dl>
        <dt>
            <img src="../../image/robot.jpg" alt="">
        </dt>
        <dt>
                <p>智能宠物机器狗</p>
        </dt>
    </dl>
    <div class="configuration ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugiat ab sint quod provident, assumenda numquam nihil. Totam optio beatae itaque, quod provident id expedita aspernatur ipsa? Magni, ipsa ullam.
    </div>
    <router-link to="" class="next">下一步</router-link>
  </div>
</template>
<script>
export default {
  name: "connectDevice"
};
</script>
<style> 
.explain{
    color: #0ca8e3;
    text-align: center;
    margin-top:20px;
}
.connectDevice dl{
    width:200px;
    height:185px;
    margin:0 auto;
    margin-top: 40px;
    border-radius: 10px;
    overflow: hidden;
} 
.connectDevice dl dt{
    text-align: center
}
.connectDevice dl dt:first-child{
    background-color:#f0f0f0; 
}
.connectDevice dl dt p{
    background-color: #0ca8e3;
    color: #fff;
    height:30px;
    line-height: 30px;
}
.configuration {
    color: #666;
    width:90%;
    margin:0 auto;
    margin-top:20px;
}
.next{
    width:200px;
    display: block;
    color: #fff;
    background-color: #085196;
    margin: 0 auto;
    padding:12px ;
    text-align: center;
    border-radius: 50px;
    margin-top:20px;;
}
</style>
