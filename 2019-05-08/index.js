$(document).ready(function(){  //jquery中的$(document).ready()方法类似于window.onload方法
var v = $("video")[0];  //获取视频对象
console.log($("video")[0])
//播放暂停  参考https://www.runoob.com/tags/ref-eventattributes.html中的多媒体事件 play/pause
$("#play").on("click", function () {
	if (v.paused) {
		v.play();
		$(this).removeClass("play").addClass("pause");
	} else {
		v.pause();
		$(this).removeClass("pause").addClass("play");
	}
});
//回到开始并暂停
$("#stop").on("click", function () {
	v.pause();
	v.currentTime = 0;
	$("#play").removeClass("pause").addClass("play");
	v.playbackRate = 1;
	$("#rate1").css("opacity", 0.8);
	$("#rate3").css("opacity", 0.4);
});
//1倍速 参考http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp 只有 Google Chrome 和 Safari 支持 playbackRate 属性？？w3school过时了么，测试IE9也可实现倍速播放
$("#rate1").on("click", function () {
	v.playbackRate = 1;
	$("#rate1").css("opacity", 0.8);
	$("#rate3").css("opacity", 0.4);
});
//3倍速
$("#rate3").on("click", function () {
	v.playbackRate = 3;
	$("#rate3").css("opacity", 0.8);
	$("#rate1").css("opacity", 0.4);
});
//静音 参考http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp muted属性控制是否静音 true/false
$("#sound").on("click", function () {
	if (v.muted) {
		v.muted = false;
		$(this).removeClass("mute").addClass("sound");
	} else {
		v.muted = true;
		$(this).removeClass("sound").addClass("mute");
	}
});
//获取总时长 参考http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp dutarion视频总时长以秒计
$("video").on("loadedmetadata", function () {
	var dur = v.duration;
	var durM = Math.floor(dur / 60);
	if (durM < 10) {
		durM = "0" + durM;
	}
	var durS = parseInt(dur % 60);
	$(".time span:last").html(durM + ":" + durS);
});
//更新缓冲时长
$("video").on("progress", function () {
	// console.log(v.buffered.start(0), v.buffered.end(0))
});
//更新当前播放时长
$("video").on("timeupdate", function () {
	//更新数字
	var cur = v.currentTime;
	var curM = Math.floor(cur / 60);
	if (curM < 10) {
		curM = "0" + curM;
	}
	var curS = Math.floor(cur % 60);
	if (curS < 10) {
		curS = "0" + curS;
	}
	$(".time span:first").html(curM + ":" + curS);
	//更新进度条
	var progressPercent = cur / v.duration;
	$(".current").css("width", progressPercent * 100 + "%");
});
//拖拽进度条
var ifdown;
$(".progress").on("mousedown", function (e) {
	ifdown = true;
	v.currentTime = e.offsetX / 450 * v.duration;
});
$(document).on("mousemove", function (e) {
	if (ifdown) {
		var progressX = e.pageX - $(".progress").offset().left;
		if (progressX < 0) {
			progressX = 0;
		} else if (progressX > 480) {
			progressX = 480;
		}
		$(".current").css("width", progressX / 480 * 100 + "%");
		v.currentTime = progressX / 480 * v.duration;
	}
});
$(document).on("mouseup", function (e) {
	ifdown = false;
});
//更新音量条
$("video").on("volumechange", function () {
	$(".currentVolume").css("width", v.volume * 100 + "%");
});
//拖拽音量条
var ifvolumedown;
$(".volume").on("mousedown", function (e) {
	ifvolumedown = true;
	v.volume = e.offsetX / 60;
});
$(document).on("mousemove", function (e) {
	if (ifvolumedown) {
		var volumeX = e.pageX - $(".volume").offset().left;
		if (volumeX < 0) {
			volumeX = 0;
		} else if (volumeX > 60) {
			volumeX = 60;
		}
		v.volume = volumeX / 60;
	}
});
$(document).on("mouseup", function (e) {
	ifvolumedown = false;
});
//键盘控制
$(document).on("keydown", function (e) {
	if (e.keyCode == 37) {
		v.currentTime -= 5;
	} else if (e.keyCode == 39) {
		v.currentTime += 5;
	} else if (e.keyCode == 38) {
		v.volume += 0.1;
	} else if (e.keyCode == 40) {
		v.volume -= 0.1;
	}
});
//播放结束
$("video").on("ended", function () {
	v.currentTime = 0;
	$("#play").removeClass("pause").addClass("play");
});
//控制面板显示与隐藏
$(".container").on("mouseenter", function () {
	$(".top").stop().animate({
		top: "0"
	}, 500);
	$(".bottom").stop().animate({
		bottom: "0"
	}, 500);
});
$(".container").on("mouseleave", function () {
	$(".top").stop().animate({
		top: "-50px"
	}, 500);
	$(".bottom").stop().animate({
		bottom: "-60px"
	}, 500);
	});
})
