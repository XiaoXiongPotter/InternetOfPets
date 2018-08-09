<template>
<div class="mapBox">
	   <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" ak="0iNBiG0ofLhVcvQBf4alGldviDCQjQo4" v-bind:style="{height:height}">
	   </baidu-map>
       <div id="track" v-on:click='track()'>
			<img class='track'  alt=on src="../../../../static/img/track.png" />
		</div>
		<div id="pets">
			<img alt="pets" src="../../../../static/img/pets.png" />
		</div>
		<!-- <div id="open">
			<img alt="oepn" src="../../../../static/img/openTrack.png" />
		</div> -->
		<div id="close" v-on:click='led("close")'>
			<img alt="close" src="../../../../static/img/close.png" />
		</div>
		 <div id="flash" v-on:click='led("flash")'>
			<img alt="flash" src="../../../../static/img/flash.png" />
		</div>
		<div id="light" v-on:click='led("light")'>
			<img alt="light" src="../../../../static/img/light.png" />
		</div>
		<div id="fenceClose">
			<img alt="fenceClose" class='fance' src="../../../../static/img/fenceClose.png" />
		</div> 
		<div id="voice">
			<img alt="voice" src="../../../../static/img/voice.png" />
		</div> 
		<div id="refresh">
			<img alt="refresh" src="../../../../static/img/refresh.png" />
		</div> 
		<div id="trackReplay">
			<img alt="trackReplay" class = 'trackReplay' src="../../../../static/img/trackReplay.png" />
		</div> 
		<div id="sig">
			<img alt="sig" class = 'sig' src="../../../../static/img/sig0.png" />
		</div> 
		<!-- <div id="chr">
			<img alt="chr" class = 'chr' src="../../../../static/img/sig0.png" />
		</div>  -->
		<!--<audio src="/voice/ling1_dogness.mp3" controls="controls" id = 'audio'></audio>-->
	</div> 	

</div>
</template>

<script>
    import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
    export default {
	 data () {
	    return {
	      center: {lng: 0, lat: 0},
	      zoom: 3,
	      height:480+'px'
	    }
	  },
	  methods: {
	    handler ({BMap, map}) {
	      console.log(BMap, map)
	      this.center.lng = 116.404
	      this.center.lat = 39.915
	      this.zoom = 15
	    },
	    led:function(lightStatus){
		if(status_=='on'){
			ledControl(lightStatus, deviceId, timestamp)
		}else{
			alert('请先链接设备')
		}
	   },
	   track:function(){
	   console.log(deviceId)
	   //录制轨迹注册
	     var status = 'off';
	     if(trackIndex=='0'){
	         status='on'
	     }
		 $.ajax({
			url : serverUrl + '/necklace/device/onoffTrack?deviceCode=' + deviceId + "&onoff="
					+ status + "&timestamp=" + timestamp,
			type : 'POST',
			headers:{x_auth_token: '123'},
			success : function(res) {
				var data = res.header.status;
				console.log(res)
				if (data == '1000') {
				if(status=='on'){
				  trackIndex=1
				}else{
				  trackIndex=0
				}
					timeOut = setTimeout(function(){
						alert('网络异常')
					},12000)
				} else if (data == '8000') {
					alert('请先链接设备')
				} else {
					alert('切换失败，请稍后重试')
				} 
			}
		})  
	   }
	  },
	  components: {
	    BaiduMap
	  }
  }
   var map = BaiduMap ;
   //轨迹录制关闭标志位
    var trackIndex = 0; 
	var url = location.href;
	//设备状态
	var status_;
	//添加的圆形覆盖物（围栏）
	var circle;
	//获取当前时间戳
	var timestamp = new Date().getTime();
	var ggPoint;
	//轨迹结束mark
	var carMk;
	//轨迹开始mark
	var carMk2;
	//历史轨迹显示、关闭状态
	var click = 0;
	//信号
	var sig;
	//电量
	var power;
	//充电状态
	var chr;
	//电量
	var power;
	var ggPoints = [];
	var newPoints = [];
	//经度
	var lon;
	//纬度
	var lat;
	//定时器
	var timeOut;
	//调用接口的url
	//var serverUrl = 'http://192.168.0.122:9270/CollarServer';
	var serverUrl = 'http://192.168.0.123/ClientServer';
	//链接socket的url
	//var socketUrl = 'http://dogness.imwork.net:9227/stomp';
	//var socketUrl = 'https://www.dognessnetwork.com/socket/stomp/topic/chat/';
	//var socketUrl = 'wss://www.dognessnetwork.com/messageServer/chat';
	var socketUrl = 'ws://localhost:8088/messageServer/chat';
	//当前定位
	var nopoint = null;
	//加载谷歌地图
	var googleMap, infoWindow;
	//imei
	var imei = url.substring(url.indexOf('imei'), url.length)
	//判断是在哪个国际
	var language = 'ZH';
	//围栏状态
	var fanceStatus;
	//开关轨迹状态
	var trakeStatus;
	//led灯的状态
	var ledStatus;
	//地图上头像的marker
	var marker;
	//围栏的id
	var fanceId; //= url.substring(url.indexOf('fanceId=')+8, url.indexOf("&imei"));
	//设备的主键
	var deviceId = "1";
	//轨迹线段
	var polyline;
	//正则
	var regu = /^[1-9]\d*$/;
	var height = $(document).height();
	var room = "866557030061396";
		// var socket = new SockJS('http://dogness.imwork.net:8082/stomp'); 
		//var socket = new SockJS(socketUrl);
		var socket = new WebSocket(socketUrl);
		socket.onopen = function()
	        {
	            console.log("链接打开");
	            //sessionId是用户登录时的sessionId，要传到soket服务器
	            var message = {
	        		       "sessionId": 789
	        		     }
	            socket.send(JSON.stringify(message) );
	        };
	        //收到的消息
	        socket.onmessage = function (data)
	        {
	        	console.log("======服务器返回消息======")
	        	console.log(data.data);
			    var message = null;
				var json = JSON.parse(data.data);
				message = JSON.parse(json.data);
				console.log('推送数据：')
				console.log(message)
				var type = json.type;
				console.log('type:'+type)
				//推送的是什么命令
				var cmd = null;
				if(message.cmd != undefined){
					cmd = message.cmd;
				}else{
					cmd = json.cmd;
				}
				//操作状态
				var msgId = message.msgId;
				console.log("cmd:"+cmd);
				console.log("msgId:"+msgId); 
				//判断定位信息并显示(tmpInfo)
				if(type=='tmpInfo'){
					 status_ = 'on';
					 lon = message.lon;
					 lat = message.lat;
					 var point = new BMap.Point(lon,lat);
					if(language=='ZH'){
						var img = '../../../../static/img/on.png';
						console.log('lon:'+lon+'lat:'+lat)
						exchange(point, img);
						//alert(fanceStatus)
						if(fanceStatus=='1'){
							isInCircle(point);
						}
					} 
				}else if(type=='regist'){//判断是否是上下线(regist)
					var neackStatus = message.status;
				    console.log('状态：'+neackStatus)
				     if(neackStatus=='on'){
				    	status_ = 'on';
				    	console.log('将要获取定位')
				    	getCurrentLocation(deviceId,timestamp);
				    	//getPets();
				    }else{
				    	// map.removeOverlay();
				    	status_ = 'off';
				    	 var point = new BMap.Point(lon,lat);
							if(language=='ZH'){
								var img = '../../../../static/img/off.png';
								exchange(point, img);
							} 
				    } 
				}else if(type=='devReply'){//操作硬件回复
					if(cmd=='rDevCfg'){
						var tOrF = 't';
						if(msgId.indexOf('.f')>0){
							tOrF = 'f'
						}
						var on;
						var off;
						//开关轨迹
						if(tOrF=='t'){
							 on = msgId.indexOf('t.on');
							 off = msgId.indexOf('t.off');
							if(off<1&&on>0){
								$('.track').attr({src:'../../../../static/img/openTrack.png',alt:'off'})
							}else{
								$('.track').attr({src:'../../../../static/img/track.png',alt:'on'})
						   }
						}else{//开关围栏
							console.log("开关围栏")
							on = msgId.indexOf('f.1');
							off = msgId.indexOf('f.0');
							if(off>0){
								$('.fance').attr({src:'../../../../static/img/fenceClose.png',alt:'close'})
								fanceStatus = 0;
								//清除围栏
								map.removeOverlay(circle);
							}
						}//清除定时器
						window.clearTimeout(timeOut);
					}else if(cmd=='rShutdown'){//关机
						status_ = 'off';
						 var point = new BMap.Point(lon,lat);
							if(language=='ZH'){
								var img = '../../../../static/img/off.png';
								exchange(point, img);
								}
					}
				}else if(type=='heart'){
					sig = message.sig;
					chr = message.chr;
					power = message.power;
					initSig(sig);
					initChr(chr,power)
				} 
	            
	        }
	        if (language == 'ZH') {
			getCurrentLocation(deviceId,timestamp);
		} else {
			//initGogleMap()
			//getPets();

		}
	//注册各个按钮点击事件
	//刷新页面
	$('#refresh').click(function(){
		window.location.reload();
	})
	//轨迹回放注册
	$('#trackReplay').click(function(){
			 if(click=='0'){
				 click = 1;
				 $.ajax({
						url : serverUrl+'/necklace/info/getTrackTime?deviceCode=' + deviceId,
						type : 'POST',
						headers:{x_auth_token: '123'},
						success : function(data) {
							console.log('注册轨迹回放：')
							console.log(data)
							var num = data.data.trackTime.length;
							//alert(data.data.trackTime[0].startTime)
							console.log('轨迹shijian');
							console.log(data.data.trackTime[num-1]);
							if (num < 1) {
								alert('宠物还没有运动轨迹，赶紧去与宠物散步吧')
							}  else {
								//有轨迹查询轨迹
								var startTime = data.data.trackTime[0].startTime;
								 $.ajax({
									type:'POST',
									headers:{x_auth_token: '123'},
									url:serverUrl+'/necklace/info/getTrackRecord?deviceCode=' + deviceId+'&startTime='+startTime,
									success:function(data){
										console.log('轨迹回放')
										console.log(data)
										var oPoint = JSON.parse(data.data);
										var points = [];
										console.log('length:'+oPoint.length)
										for(var i=0;i<oPoint.length;i++){
											points[i] = new BMap.Point(oPoint[i].lon,oPoint[i].lat)
										}
										console.log(points.length)
										//注册开始结束图标
										startAnEnd(points[0], 0)
										startAnEnd(points[points.length-1], points.length-1)
										//遍历点并将轨迹注册到页面
										var j = 0;
											 for(var i = 0; i < points.length; i+=9){
												if(points.length-10*(j+1) > 0){
													j++;
													console.log(points.length-10*(j+1))
													gpsToBd(points.slice(i,i+10))
												}else{
													gpsToBd(points.slice(i,points.length))
												}
											} 
									}
								}) 
							}

						}
					}) 
			 }else{
				click = 0;
				//map.removeOverlay(carMk);
				//map.removeOverlay(carMk2);
				map.clearOverlays();
				getPets()
				polyline.remove();
			 }
	})
	//围栏设置
	$('#fenceClose').click(function(){
		/*  currentLon = message.lon;
		 currentLat */
		 if(status_=='on'){
			if(fanceStatus=='1'){
				clsoeFance();
			}else{
				window.location.href='/fanceAdd.html?lon='+lon+'&lat='+lat+'&'+imei+'&imeiId='+imeiId
			}
	    }else{
	    	alert('请先链接设备')
	    } 
		
	})

	/*****************************************************************************************/
	// 向百度地图添加标注
	function mark(point, img) {
		var myIcon = new BMap.Icon(img, new BMap.Size(40, 50), {
			// 指定定位位置
			offset : new BMap.Size(10, 25),
		// 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置   
		// imageOffset: new BMap.Size(0, 0 - i * 25) // 设置图片偏移  
		});
		// 创建标注对象并添加到地图 
		    marker = new BMap.Marker(point, {
			icon : myIcon
		});
		map.addOverlay(marker);
		//marker.setAnimation(BMAP_ANIMATION_BOUNCE);
	}

	//经纬度定位
	//用经纬度设置地图中心点
	function theLocation(point) {
	console.log('==========map============')
	map = new BMap.Map('bm-view')
	console.log(map)
		map.removeOverlay(marker);
		map.panTo(point);
	}

	//获得项圈定位
	function getPets() {
		var deviceUrl = serverUrl+'/necklace/info/getNecByDevId?deviceCode='+deviceId  ;
		$.ajax({
					type : 'POST',
					url : deviceUrl,
					headers:{x_auth_token: '123'},
					success : function(data) {
						console.log('getPets')
						console.log(data)
						//围栏状态
						fanceStatus = '0';
						//是否开启录制轨迹
						trakeStatus = '0';
						//记录项圈上次定位
						lon = null;
						lat = null;
						ledStatus='close';
						var img = '../../../../static/img/off.png';
						status_ = 'off';
						var loaction = data.data.location;
						console.log('location:')
						console.log(loaction)
						if(loaction != null && loaction!='undefined' && loaction!=''){
							var newLoaction = JSON.parse(loaction);
						    if(newLoaction.lon != 'undefined'){
						    	lon = newLoaction.lon;
							    lat = newLoaction.lat
							    status_ = data.data.status;
							    console.log(' status_ = data.data.status:'+status_)
							    fanceStatus = data.data.fanceStatus;
							    trakeStatus = data.data.trackStatus;
							    fanceId = data.data.fanceId;
							    deviceId = data.data.deviceCode;
							    ledStatus = data.data.led;
							    sig = data.data.sig;
							    chr = data.data.chr;
							    power = data.data.power;
							    console.log('当前定位lon：'+lon+'lat：'+lat+"\n"+'status_:'+status_+"=====fanceStatus:"+fanceStatus
							    		+"======trakeStatus:"+trakeStatus+"=========fanceId:"+fanceId+'========deviceId:'+deviceId
							    		+"=====ledStatus:"+ledStatus+"=======sig:"+sig+'========chr:'+chr+'=======power:'+power)
						    }
						}//如果上次有定位，显示上次定位
						console.log('fanceStatus:'+fanceStatus)
						if(status_=='on'){
							img = '../../../../static/img/on.png';
						}
						//围栏开启
						if(fanceStatus=='1'){
							$('.fance').attr({src:'../../../../static/img/fanceOpen.png',alt:'fanceOpen'});
							getGeoFance();
						}
						//信号
						initSig(sig);
						//电量
						initChr(chr,power);
						//录制轨迹开启
						if(trakeStatus=='1'){
							$('.track').attr({src:'../../../../static/img/openTrack.png',alt:'off'})
						}else{
						$('.track').attr({src:'../../../../../static/img/track.png',alt:'off'})
						console.log($('.track'))
						}
						if (lat !=null && lon != null) {
							var p = new BMap.Point(lon, lat)
							console.log(img)
							exchange(p, img);
						} else {//原来没有定位
							console.log("没有定位")
							getCurrentByBd();
						}
						ledControl(ledStatus, deviceId, timestamp)
					},
					fail:function(){
						console.log('fail')
					}
				})
	}
	/******************************* **********************************************************************  */
	 function AddOver(points) {
		console.log('画线条')
		console.log(points)
		    polyline = new BMap.Polyline(points, {
			strokeColor : "#1869AD",
			strokeWeight : 3,
			strokeOpacity : 1
		});
		map.addOverlay(polyline);
	} 
	/******************************* **********************************************************************  */
	//注册轨迹
	function drawGreenLine(i) {
		var polyline = new BMap.Polyline([
				new BMap.Point(newPoints[i].lng, newPoints[i].lat),//起始点的经纬度  
				new BMap.Point(newPoints[i + 1].lng, newPoints[i + 1].lat) //终点的经纬度  
		], {
			strokeColor : "green",//设置颜色  
			strokeWeight : 4, //宽度  
			strokeOpacity : 1
		});//透明度  
		map.addOverlay(polyline);
	}

	//
	function exchange(ggPoint, img) {
		var convertor = new BMap.Convertor();
		var pointArr = [];
		pointArr.push(ggPoint);
		convertor.translate(pointArr, 1, 5, function(data) {
			if (data.status === 0) {
				theLocation(data.points[0])
				mark(data.points[0], img);
			}
		})
	}
	//百度地图坐标转换后判断是否在围栏之内
	function isInCircle(ggPoint) {
		var convertor = new BMap.Convertor();
		var pointArr = [];
		var audio = $('#audio')
 	    var a = document.getElementById('audio');
		pointArr.push(ggPoint);
		convertor.translate(pointArr, 1, 5, function(data) {
			if (data.status === 0) {
				  if(BMapLib.GeoUtils.isPointInCircle(data.points[0],circle)){
					  a.pause();
				  }else
				  {
					  audio.attr('loop','true')
					  a.play();
				  }
			}
		})
	}
     //轨迹显示起始点坐标转换
	function startAnEnd(ggPoint,num) {
		var convertor = new BMap.Convertor();
		var pointArr = [];
		pointArr.push(ggPoint);
		convertor.translate(pointArr, 1, 5, function(data) {
			if (data.status === 0) {
				if(num=='0'){
					 carMk2 = new BMap.Marker(data.points[0],//起始点的经纬度  
							{
								icon : myBeginIcon
							});
					console.log(carMk2)
							map.addOverlay(carMk2); 
					//设置轨迹定位时地图中心点
					        map.panTo(data.points[0]);
					
				}else{
					 carMk = new BMap.Marker(data.points[0],//终点的经纬度  
							{
								icon : myEndIcon
							});
							map.addOverlay(carMk); 
				} 
				//mark(data.points[0], img);
			}
		})
	}
	//led灯控制
	function ledControl(status, deviceId, timestamp) {
		console.log('led状态：'+timestamp)
			$.ajax({
				url : serverUrl + '/necklace/device/controlLED?deviceCode=' + deviceId + "&status="
						+ status + "&timestamp=" + timestamp,
				type : 'POST',
				headers:{x_auth_token: '123'},
				success : function(res) {
				console.log(res)
				},
				fail:function(){
					alert('fail')
				}
			})
	}
	//获取当前定位
	function getCurrentLocation(deviceId,timestamp){
		$.ajax({
			url : serverUrl + '/necklace/device/getCurrentLocation?deviceCode=' + deviceId + "&timestamp=" + timestamp,
			type : 'POST',
			headers:{x_auth_token: '123'},
			success : function(res) {
				console.log('获得定位：')
				console.log(res)
				getPets();
			}
		})
	}
	//百度获取当前定位
	function getCurrentByBd(){
		var geolocation = new BMap.Geolocation();
		geolocation.getCurrentPosition(function(r) {
			if (this.getStatus() == BMAP_STATUS_SUCCESS) {
				nopoint = r.point;
				var img = '../../../../static/img/on.png';
				var new_point = new BMap.Point(r.point.lng,r.point.lat);
				mark(new_point,img);
				map.panTo(new_point);
				/*alert('您的位置：'+r.point.lng+','+r.point.lat); */
			} else {
				alert('failed' + this.getStatus());
			}
		}, {
			enableHighAccuracy : true
		})
	}
	//关闭围栏
	function clsoeFance(){
			$.ajax({
	    		type:'POST',
	    		url:serverUrl+'/necklace/device/onoffFance?deviceCode='+deviceId+'&onoff=0&timestamp='+timestamp,
	    		headers:{x_auth_token: '123'},
	    		success:function(res){
	    			timeOut = setTimeout(function(){
	    				alert('网络异常')
	    			},60000);//60s的等待时间
	    		}		
	    	})
}
	//获取围栏信息并添加围栏到页面
	function getGeoFance(){
		$.ajax({
			type:'POST',
			url: serverUrl+'/necklace/info/getGeoFance?fanceId='+fanceId,
			headers:{x_auth_token: '123'},
		    success:function(data){
		    	console.log('围栏信息：')
		    	var center = data.data.fanceCenter;
		    	var headerStatus = data.header.status;
		    	var radius = data.data.radius;
		    	if(headerStatus=='1000'){
		    		var mPoint = new BMap.Point(center.substring(center.indexOf(',')+1,center.length),center.substring(0,center.indexOf(',')));
		    		addCircle(mPoint,radius);
		    	}else{
		    		alert('网络异常')
		    	}
		    }
		})
	}
	//添加围栏
	function addCircle(mPoint,radius) {
		//var map = new BMap.Map("allmap")
		var convertor = new BMap.Convertor();
		var pointArr = [];
		pointArr.push(mPoint);
		convertor.translate(pointArr, 1, 5, function(data) {
			if (data.status === 0) {
				circle = new BMap.Circle(data.points[0],radius,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3,enableEditing:false});
				console.log('mPoint')
	    		console.log(mPoint)
	    		//map.panTo(mPoint);
				map.addOverlay(circle);
				map.centerAndZoom(
						mPoint, 15);
			}
		})
	}
	//大批量坐标装换，gps to bd
	function gpsToBd(points){
		 setTimeout(function(){
		        var convertor = new BMap.Convertor();
		        convertor.translate(points, 1,5, function (data){
		            if(data.status === 0) {
		            	var bPoint = [];
		            	var j = 0;
		                for (var i = 0; i < data.points.length; i++) {
		                	bPoint[i] = data.points[i];
		                   // bm.addOverlay(new BMap.Marker(data.points[i]));
		                    //bm.setCenter(data.points[i]);
		                }
		                console.log('转换后坐标')
		                console.log(bPoint)
		                AddOver(bPoint);
		              }
		            })
		    }, 100);
	}
	//信号图标
	function initSig(sig){
		if(sig < 26 && sig > 0){
			$('.sig').attr({src:'../../../../static/img/sig1.png',alt:'sig1'});
		}else if(sig < 51){
			$('.sig').attr({src:'../../../../static/img/sig2.png',alt:'sig2'});
		}else if(sig < 76){
			$('.sig').attr({src:'../../../../static/img/sig3.png',alt:'sig3'});
		}else if(sig < 101){
			$('.sig').attr({src:'../../../../static/img/sig4.png',alt:'sig4'});
		}else{
			$('.sig').attr({src:'../../../../static/img/sig0.png',alt:'sig0'});
		}
	}
	//电池
	function initChr(chr,power){
		
	}
</script>

<style scoped>
img{
width:40px;
height:40px;
}
.mapBox{
	position: relative;
	
	width:100%;
	height: 100%;
}
.bm-view {
  width: 100%;
  height:80px;
}
#pets {
	width: 40px;
	height: 40px;
	top: 50px;
	left: 10px;
	position: absolute;
	z-index: 9999;
}

#open {
	width: 40px;
	height: 40px;
	top: 150px;
	left: 10px;
	position: absolute;
	z-index: 9999;
}

#track {
	width: 40px;
	height: 40px;
	top: 220px;
	right: 10px;
	position: absolute;
	float: right;
	z-index: 9999;
}

#close {
	width: 40px;
	height: 40px;
	top: 150px;
	right: 10px;
	position: absolute;
	float: right;
	z-index: 9999;
}

#flash {
	width: 40px;
	height: 40px;
	top: 150px;
	right: 60px;
	position: absolute;
	float: right;
	z-index: 9999;
}

#light {
	width: 40px;
	height: 40px;
	top: 150px;
	right: 110px;
	position: absolute;
	float: right;
	z-index: 9999;
}
#fenceClose {
	width: 40px;
	height: 40px;
	top: 290px;
	right: 10px;
	position: absolute;
	float: right;
	z-index: 9999;
}
#voice {
	width: 40px;
	height: 40px;
	top: 360px;
	right: 10px;
	position: absolute;
	float: right;
	z-index: 9999;
}
#refresh {
	width: 40px;
	height: 40px;
	top: 660px;
	right: 10px;
	position: absolute;
	float: right;
	z-index: 9999;
}
#trackReplay {
	width: 40px;
	height: 40px;
	top: 420px;
	right: 10px;
	position: absolute;
	float: right;
	z-index: 9999;
}
#sig {
	width: 40px;
	height: 40px;
	top: 20px;
	right: 10px;
	position: absolute;
	float: right;
	z-index: 9999;
}
</style>