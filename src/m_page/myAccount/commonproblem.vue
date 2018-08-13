<template>
<div class="commonproblem">
	 <div class="header">
 	<img src="../../image/back.png" class="back" @click="back"/>
    <div class="imgBox"><img src="../../image/logo-m.png" alt=""></div>
   </div>
   <div class="head-nav" ref='banner' style="touch-action: none;">
   	<ul>
   		<li  :class="{active:flag5}" @click="changepage">智能宠物项圈</li>
   		<li :class="{active:flag6}" @click="changepage1">智能宠物机器狗</li>
   		<li :class="{active:flag7}" @click="changepage2">智能宠物投食器</li>
   		<li :class="{active:flag8}" @click="changepage3">智能宠物喂食器</li>
   		<li :class="{active:flag9}" @click="changepage4">智能宠物面包机</li>
   	</ul>
   </div>
   <div class="commonproblem-main" ref='wrapper' v-show="flag5">
   	<div>
   	<div class="page1" v-show="flag1">
   		<h4>1、请问你们项圈和马背主机内置的SIM卡用的是2G、3G还是4G？定位时的刷新和上传速度如何，延迟大吗？</h4>
		<p>我们内置的SIM卡是2G卡。当APP开启录制轨迹功能时，每60秒上传一次位置信息；当APP开启围栏和录制轨迹功能时，每30秒上传一次位置信息。轨迹模式下最多可以上传360个定位点，后期可根据实际需求调整上传时间。</p>
		<h4>2、我家的9斤博美能使用你们的智能产品吗？</h4>
		<p>我们的智能产品有项圈和马背两款产品，每款产品又分为大、中、小三个型号，还有真皮、织带等多种材质，基本上覆盖了绝大多数爱宠，肯定有一款适合您家的博美。</p>
		<h4>3、智能设备需要多久充一次电？</h4>
		<p>我们的智能设备充满一次电可以待机5—7天，如果每天溜宠2—3小时可以使用3天左右，而且每次充电时间仅需1～2小时即可充满。</p>
		<h4>4、智能设备可以防水吗？</h4>
		<p>智能设备防水防尘等级是IP65，可以做到生活防水，您只要不把它放在水里浸泡或者长时间冲洗，一般都不会出现损坏。</p>
		<h4>5、使用智能设备需要每月缴费吗？</h4>
		<p>智能设备内置SIM物联网卡，需要缴纳电信流量费用。购买后第一个月我们免费提供流量服务，从第二个月起您可以通过我们的APP软件方便地购买3个月、6个月、12个月流量套餐。 </p>
		<h4>6、我们可以自行更换内置的SIM卡吗？</h4>
		<p>我们的智能设备内置SIM卡，用户不能自行更换。因为我们的智能设备采用一体化设计，如自行更换内置的SIM卡会造成卡与设备不兼容、防水防尘性能下降甚至设备损坏，我们也无法提供保修服务。</p>
		<h4>7、智能设备的定位精度是多少？</h4>
		<p>智能设备的采用GPS、WIFI、LBS三种定位方式。室内一般采用WIFI定位，定位精度优于50米；室外优先采用GPS定位，定位精度优于10米。没有GPS或WIFI信号时采用LBS定位，精度优于500米。</p>
		<h4>8、市场上宠物定位产品很多，多尼斯智能产品与其他品牌相比有什么优点？</h4>
		<p>我们的智能设备与其他品牌产品相比，有以下优点：一是一体化设计，智能产品完美地把多尼斯项圈传统优势和中国航天物联网技术优势结合在一起，舒适无比，外观时尚；二是采用模块化组合，智能主机相对独立，可以与传统项圈、马背自由搭配，款式多样，使用方便；三是多样化功能，智能项圈具有实时定位、历史轨迹、眩亮闪灯、语音逗宠、宠友聊天等多种功能，至诚关怀，功能强大；四是全球化服务，我们与中国联通、Telenor、T－Mobile等全球电信运营商战略合作，内置全球各地适用的物联网卡，节约宠物主人单独办理SIM卡时间，用户只须在我们APP注册、充值即可使用。</p>
		<h4>9、智能设备如何开关机？</h4>
		<p>长按开关机键3秒钟即可开机（一代设备开机会发出提示音），确认智能设备是否开机方法：短按开关机键后灯亮代表设备是开机状态。长按开关机键8秒钟即可关机，确认智能设备是否关机方法：短按开关机键后灯不亮代表设备是关机状态。</p>
		<h4>10、为什么注册APP账号有时提示失败？</h4>
		<p>注册APP账号提示失败时，可能有以下三个方面原因：一是注册APP账号前一定要选国家或地区，且必须与智能项圈购买的国家或地区保持一致。二是我们提供邮箱号和手机号两种注册方式，但无论何种方式手机号和邮箱号均需要填写正确，不然无法收到验证消息和激活邮件。三是由于存在网络延时或网络信号差等情况，验证码或者邮件需要等待，若长时间未收到验证码或者邮件请检查后重试几次。</p>
   	</div>
   	<div class="page2" v-show='flag2'>
   		<h4>11、一个多尼斯APP账号最多可以绑定多少个智能设备？</h4>
		<p>我的APP软件具有多用户管理功能，一个多尼斯APP账号绑定宠物数量没有上限，您可以根据需要随意绑定。</p>
		<h4>12、我想更换正在使用的多尼斯APP账户的手机号，应该如何操作？</h4>
		<p>我们APP软件不支持直接更换手机号码。如您确需更换，请重新以新手机号注册一个新APP账号，并把原APP账户管理的宠物转让到新APP账户。</p>
		<h4>13、长时间没有登录导致忘记账号怎么办？</h4>
		<p>如果你的账号没有绑定我们的智能设备，建议重新注册一个新账号。如果已经绑定我们的智能设备，请您将设备上的“IMEI”号通过APP发给我们的在线客服，我们会帮您找回该设备对应的账号。</p>
		<h4>14、我的APP账号突然登录不了怎么办？</h4>
		<p>首先确保网络正常，其次确保是否有其他人正在登录您的账号。否则建议您卸载后重新安装APP，然后尝试登录。如果您的手机使用的是安卓系统，你还可以尝试以下操作：手机-&gt;设置-&gt;应用程序管理--&gt;多尼斯APP--&gt;清除数据--&gt;清除缓存，然后再登录试试。</p>
		<h4>15、如何绑定智能设备并添加宠物？</h4>
		<p>你可以点击APP软件主页界面右上角的“扫描功能框”（注意：第一次使用时需要设置手机允许APP获取手机拍照权限），采用以下三种方式添加宠物：一是直接扫描智能主机二维码图片添加宠物，识别成功后填写宠物的相关信息即可；二是识别手机相册里的二维码图片添加宠物，单击右上角选项图标选择“图片识别”，选择保存在手机本地相册的智能主机二维码图片，识别成功后填写宠物的相关信息即可；三是手工输入智能主机编号添加宠物，单击右上角选项图标选择“输入编号”，在弹出框中输入智能主机IMEI编号，点击确定后填写宠物的相关信息即可。</p>
		<h4>16、添加宠物出现扫描智能主机二维码失败怎么办？</h4>
		<p>请将智能主机放在在光线好的地方，反复调整智能主机与手机之间的距离和角度试试；或者把二维码图片拍照保存到手机，再通过识别相册里的二维码图片添加宠物；或者直接输入智能主机IMEI编号添加。如果通过以上方式仍然无法成功添加宠物，请确认您的智能设备购买地是否和您的APP账号注册地为同一个国家或地区，否则请重新注册一个账号，并选择国家与设备购买地一致。如果还是无法解决，请您将设备上的“IMEI”号或智能主机二维码图片通过APP发给我们的在线客服，我们会帮您解决。</p>
		<h4>17、添加宠物后APP主页没显示出来怎么办？</h4>
		<p>您可以进行以下操作：一是检查宠物是否添加成功，查看“宠物”页面宠物列表是否有您需要显示的宠物；二是检查是否选择宠物，否则您需要点击APP左上角“宠物选项框”选择您需要显示的宠物；三是检查“宠物”信息页面的“地图显示”是否为开启状态。如以上都正常，请点击右下角刷新图标，宠物主图标即可在主页地图中间位置显示出来。</p>
		<h4>18、如何添加朋友的宠物？</h4>
		<p>有以下三种方式：一是您可以将朋友加为宠友，通过宠物转让功能，将朋友的宠物添加为自己的宠物；二是您可以请您的朋友将宠物删除，您再扫描宠物二维码绑定并添加即可；三是如果您仅想关注朋友的宠物，您可将朋友加为宠友并选择其宠物直接关注即可（此方式只可查看宠物的位置信息）。</p>
   	</div>
   	<div class="page3" v-show='flag3'>
   		<h4>19、为什么有时关注了好友宠物但地图上没有显示好友宠物的位置？</h4>
		<p>可能是好友宠物被我的宠物图标遮挡住，也可能是APP没有开启好友宠物的地图显示功能。如检查发现好友宠物地图显示功能关闭将其开启即可，若仍无法显示请将我的宠物与好友宠物距离拉开或者暂时关闭我的宠物地图显示功能试一试。</p>
		<h4>20、我的智能设备最近使用频繁，突然无法连接怎么办？</h4>
		<p>在您确认手机网络是否正常、设备是否开机且有电、设备所在位置是否有遮挡外，需要重点在宠物信息栏查看智能设备资费是否到期。当您购买智能设备后我们会免费赠送1个月流量资费，以后您需要选择3个月、6个月、12个月套餐自行购买流量资费才能正常使用。当您购买相应套餐后我们会保证该套餐内设备能够正常使用，不会因所谓的超流量导致停机。</p>
   		<h4>21、我因选错宠物买错套餐，能申请取消订单吗？</h4>
		<p>对不起，我们暂时不支持取消订单。</p>
		<h4>22、我有多个智能项圈，如何同时给他们购买流量套餐资费？</h4>
		<p>如果您需要给多个项圈购买同一个套餐，在购买时，选择需要购买的套餐，勾选多个宠物即可一起支付。如果购买不同套餐，您需要逐一购买。</p>
		<h4>23、我购买流量套餐付款时，该如何选择支付方式？</h4>
		<p>如果您是中国内地用户，可选择微信或者支付宝支付；如果您是国外或境外用户，可选择VISA卡、Master卡支付。</p>
		<h4>24、我用信用卡支付流量套餐，显示支付失败怎么办？</h4>
		<p>超出信用卡支付额度或者信用卡信息填写错误等都会被银行判定为高风险支付，这些支付订单都会出现支付失败。遇到此类情况，建议您重新填写正确信息或更换一张信用卡再支付。如果仍然不能解决，请联系银行客服。</p>
		<h4>25、如何查看宠物当前位置？</h4>
		<p>点击APP主页左上角宠物选项框，选择需要查看的宠物头像，点击右下角刷新按钮，宠物的当前位置就会显示在屏幕上。如果显示“未连接”或者“位置更新不成功”，建议您重点确认手机网络是否正常、智能主机是否开机且有电、智能主机所在位置是否有遮挡。</p>
		<h4>26、智能设备定位功能是通过什么方式实现的？</h4>
		<p>智能设备采用GPS、WIFI、LBS三种定位方式。室内一般采用WIFI定位，室外优先采用GPS定位；没有GPS或WIFI信号时采用LBS定位。这三种定位方式智能设备能够自动切换，不需要手工操作。</p>
		<h4>27、刷新宠物位置为什么有时显示“获取定位超时”？</h4>
		<p>显示“获取定位超时”最大可能是宠物及智能主机所处地方没有网络信号或信号很差，当宠物离开此区域再次刷新时即可成功定位。</p>
		<h4>28、我给宠物录制的连续轨迹为什么有段时间内没有位置点更新？</h4>
		<p>如果这段时间宠物没有位置移动或所在位置没有网络信号，智能主机没有上传定位点，轨迹就不会更新。</p>
		<h4>29、为什么有时查看历史轨迹时，打开轨迹时间需要很久？</h4>
		<p>您可能录制轨迹时间过长，导致轨迹数据过多，打开轨迹时间就会很久。建议录制一段时间及时关闭此功能，或者每天录制一次。</p>
   	</div>
   	<div class="page4" v-show='flag4'>
   		<h4>30、为什么有时轨迹模式或围栏模式会被强制关闭？</h4>
		<p>轨迹或围栏模式被强制关闭有以下两种可能：一是为了省电我们设置每天轨迹模式只能使用6小时或围栏模式只能使用3小时，超过限制这两项功能当天会强行关闭，第二天方可使用；二是当设备电量低于10%时，我们也会强行关闭轨迹或围栏模式，确保剩余电量能够满足单次定位、灯带控制、语音逗宠等功能需要。</p>
   		<h4>31、为什么我的宠物出入围栏手机没有收到报警？</h4>
		<p>请检查以下设置：一是手机通知管理权限是否开启；二是APP警报设置包括振动或者铃声是否开启；三是围栏是否成功设置并开启。</p>
		<h4>32、为什么创建围栏时有时无法成功保存？</h4>
		<p>创建围栏时必须给围栏命名，且尽量不要设置特殊符号，否则无法保存。</p>
		<h4>33、为什么宠物离开围栏很远手机才收到警报？</h4>
		<p>智能主机本身定位会稍有延时，把位置信息上传到APP也有时延，同时手机收到定位信息、分析宠物是否出入围栏、确认是否发出报警也需要一定时间，加之有些环境下信号太弱也会影响上传速度。</p>
		<h4>34、为什么有时已经设置并保存围栏，启用围栏时还提醒“增加围栏并设置首选项”？</h4>
		<p>设置围栏之后，需要选中一个围栏作为首选项（使其变为蓝色），才能成功启用围栏功能。</p>
		<h4>35、为什么打开围栏有时看不到围栏显示区域？</h4>
		<p>可能是围栏设置位置较为偏远，或者围栏设置半径过小。可以将正在使用的围栏关闭，然后在当前宠物的围栏设置界面重新编辑围栏，将其半径变大或者将其位置移动到附近可见区域。</p>
		<h4>36、为什么我的项圈灯带控制有时不灵敏？</h4>
		<p>智能主机所在位置网络信号会影响灯带控制的灵敏度，如果宠物周边没有网络信号或信号很差，开启或关闭灯带有时可能不成功。建议您到信号好的地方试一试，或者重启智能主机。</p>
		<h4>37、为什么有时给智能设备发送语音不成功或很慢？</h4>
		<p>首先确认手机是否有网络，再确认智能主机所在位置有没有网络信号或网络信号不好导致设备不在线。您可以到信号好的地方试一试，或者重启智能主机。</p>
		<h4>38、开启止吠功能后为什么宠物大叫而智能设备没有发出止吠语音？</h4>
		<p>最大可能是宠物周边环境声音太大造成的。请先确认此时是否在设置的止吠时间范围内，然后将止吠设置中的环境音量调至最低试一试。</p>
		<h4>39、为什么有时扫描朋友的宠物二维码后显示“该设备暂时未连接过服务器”？</h4>
		<p>有可能你们的智能设备不属于同一个国家或地区，只有同一个国家或地区的智能设备，其主人之间才能扫码添加宠友。</p>
		<h4>40、我关注了好友宠物，为什么有时在地图上不能显示该宠物位置？</h4>
		<p>最大可能是关闭了好友宠物的地图显示功能。请点击“宠物”，选择“好友宠物”，将“地图显示”打开，即可看到好友宠物的动态。</p>
   	</div>
   	</div>
   </div>
    <div class="foot-page" v-show="flag5">
   	<el-pagination
   	@current-change='page'
  	background
  	layout="prev, pager, next"
  	:total="40"
  	style='text-align: center;'
  	>
	</el-pagination>
   	</div>
   	<div class="commonproblem-main" v-show="flag6">
   	<div>
   		<p>智能宠物机器狗</p>
   	</div>
   	</div>
   	<div class="foot-page" v-show="flag6">
   	<el-pagination
   	@current-change='page'
  	background
  	layout="prev, pager, next"
  	:total="40"
  	style='text-align: center;'
  	>
	</el-pagination>
   	</div>
   	<div class="commonproblem-main"  v-show="flag7">
   	<div>
   		<p>智能宠物投食器</p>
   	</div>
   	</div>
   	<div class="foot-page" v-show="flag7">
   	<el-pagination
   	@current-change='page'
  	background
  	layout="prev, pager, next"
  	:total="40"
  	style='text-align: center;'
  	>
	</el-pagination>
   	</div>
   	<div class="commonproblem-main" v-show="flag8">
   	<div>
   		<p>智能宠物喂食器</p>
   	</div>
   	</div>
   	<div class="foot-page" v-show="flag8">
   	<el-pagination
   	@current-change='page'
  	background
  	layout="prev, pager, next"
  	:total="40"
  	style='text-align: center;'
  	>
	</el-pagination>
   	</div>
   	<div class="commonproblem-main"  v-show="flag9">
   	<div>
   		<p>智能宠物面包机</p>
   	</div>
   	</div>
   	<div class="foot-page" v-show="flag9">
   	<el-pagination
   	@current-change='page'
  	background
  	layout="prev, pager, next"
  	:total="40"
  	style='text-align: center;'
  	>
	</el-pagination>
   	</div>
</div>
</template>
<script>
	import IScroll from 'iscroll/build/iscroll-probe'
	export default {
		name:'commonproblem',
		data(){
			return{
				flag1:true,
				flag2:false,
				flag3:false,
				flag4:false,
				flag5:true,
				flag6:false,
				flag7:false,
				flag8:false,
				flag9:false
			}
		},
  	created(){
  	 this.$nextTick(() => {
          this.Scroll = new IScroll(this.$refs.wrapper, {
          click: true
        })
         this.newScroll = new IScroll(this.$refs.banner, {
          click: true,
          scrollX:true,
          scrollY:false
        })
       })
  	},
		methods:{
			back(){
				this.$router.replace({ path: '/myAccount' })
			},
			page(event){
				console.log(event)
				if(event==1){
					this.flag1=true
				}else{
					this.flag1=false
				}
				if(event==2){
					this.flag2=true
				}else{
					this.flag2=false
				}
				if(event==3){
					this.flag3=true
				}else{
					this.flag3=false
				}
				if(event==4){
					this.flag4=true
				}else{
					this.flag4=false
				}
			},
			changepage(){
				this.flag5=true
				this.flag6=false
				this.flag7=false
				this.flag8=false
				this.flag9=false
			},
			changepage1(){
				this.flag6=true
				this.flag5=false
				this.flag7=false
				this.flag8=false
				this.flag9=false
			},
			changepage2(){
				this.flag7=true
				this.flag5=false
				this.flag6=false
				this.flag8=false
				this.flag9=false
			},
			changepage3(){
				this.flag8=true
				this.flag5=false
				this.flag7=false
				this.flag6=false
				this.flag9=false
			},
			changepage4(){
				this.flag9=true
				this.flag5=false
				this.flag7=false
				this.flag8=false
				this.flag6=false
			}
		}
	}
</script>
<style scoped>
.active{
	border-bottom: 1px solid #409EFF;
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
	position: relative;
	width: 100%;
 	background: #fff;
  	height: 40px;
  	line-height: 40px;
}
.back{
	width: 22px;
	height: 22px;
	position: absolute;
	top: 18%;
}
.head-nav ul{
	display: flex;
	flex-wrap: nowrap;
	width: 720px;
	text-align: center;
}
.head-nav li{
	flex: 1;
	height: 40px;
	line-height: 40px;
}
.commonproblem-main{
	position: absolute;
	overflow: hidden;
	width: 100%;
	top: 82px;
	bottom: 40px;
	touch-action: none;
}
.commonproblem-main h4{
	padding-top: 5px;
}
.commonproblem-main p{
	font-size: 14px;
	padding-top: 5px;
	text-indent: 10px;
}
.foot-page{
	position: fixed;
	width: 100%;
	bottom: 0px;
}
</style>