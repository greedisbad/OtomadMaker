document.onkeydown = Keydown; //设置键盘事件函数
document.onkeyup = Keyup;
document.onmousedown = function() {
	mouseUp = false;
}
document.onmouseup = function() {
	mouseUp = true;
}
var a = 0;
var mouseUp = true;
var endnum = '0';

var rate = new Array(1.876, 2.106, 2.364, 2.505, 2.811, 3.156, 3.542,
	0.938, 1.053, 1.182, 1.252, 1.405, 1.578, 1.771,
	0.470, 0.526, 0.591, 0.626, 0.703, 0.789, 0.886);

var keycode = new Array(49, 50, 51, 52, 53, 54, 55,
	81, 87, 69, 82, 84, 89, 85,
	65, 83, 68, 70, 71, 72, 74);

var note = new Array('1', '2', '3', '4', '5', '6', '7',
	'q', 'w', 'e', 'r', 't', 'y', 'u',
	'a', 's', 'd', 'f', 'g', 'h', 'j')
var index = 0; //播放的音符位置

var dogBarkingBuffer = null;
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var source1 = context.createBufferSource();
var source2 = context.createBufferSource();
var source3 = context.createBufferSource();
var source4 = context.createBufferSource();
var source5 = context.createBufferSource();
var source6 = context.createBufferSource();
var source7 = context.createBufferSource();
var gainNode1 = context.createGain();
var gainNode2 = context.createGain();
var gainNode3 = context.createGain();
var gainNode4 = context.createGain();
var gainNode5 = context.createGain();
var gainNode6 = context.createGain();
var gainNode7 = context.createGain();

$(document).ready(function() {
	var request = new XMLHttpRequest();
	request.open('GET', 'fuck.mp3', true);
	request.responseType = 'arraybuffer';
	//下面就是对音频文件的异步解析
	request.onload = function() {
		context.decodeAudioData(request.response, function(buffer) {
			dogBarkingBuffer = buffer;
		});
	}
	request.send();

});

function Keyup(event) {
	var key = event.which || event.keyCode;
	end(note[keycode.indexOf(key)]);
}

function Keydown(event) {
	var key = event.which || event.keyCode;
	var str = document.getElementById('a1').innerHTML;
	if(keycode.indexOf(key) == -1) //非法键盘值
		return;
	if(str.indexOf(note[keycode.indexOf(key)]) != -1) //已有就退出(找到key对应的字符)
		return;
	start(note[keycode.indexOf(key)]);
}

function start(num) {
	$('img').rotate3Di('toggle', 0);
	$('img').animate({
		top: '-=20px',
		left: '-=10px',
		height: '+=40px',
		width: '+=20px'
	}, 0);
	$('img').animate({
		top: '+=20px',
		left: '+=10px',
		height: '-=40px',
		width: '-=20px'
	}, document.getElementById("speed").value / 2000.0, "swing");

	var str = document.getElementById('a').innerHTML;
	document.getElementById('a').innerHTML += num; //占用音轨情况，是否允许新加音轨
	document.getElementById('a1').innerHTML += num; //键入情况，是否允许新加音轨	
	if(document.getElementById('b').innerHTML.length >= 7) {
		document.getElementById('b').innerHTML += 8;
		document.getElementById('b1').innerHTML += 8
		return;
	}

	num = note.indexOf(num) + 1;

	for(var i = 1; i < 8; i++) { //找出没用到的轨道
		if(document.getElementById('b').innerHTML.indexOf(i) != -1)
			continue;
		var track = i;
		break;
	}
	document.getElementById('b').innerHTML += track; //占用音轨情况
	document.getElementById('b1').innerHTML += track;
	//document.getElementById('c').innerHTML+=num;
	//document.getElementById('d').innerHTML+=track;
	switch(track) {
		case 1:
			source1 = context.createBufferSource();
			source1.buffer = dogBarkingBuffer;
			source1.playbackRate.value = rate[num - 1];
			source1.connect(gainNode1);
			gainNode1.connect(context.destination);
			source1.loop = true;
			source1.loopStart = 0.079;
			source1.loopEnd = 0.096;
			gainNode1.gain.setValueAtTime(0, context.currentTime);
			gainNode1.gain.linearRampToValueAtTime(1, context.currentTime + 0.01);
			source1.start(context.currentTime);

			break;
		case 2:
			source2 = context.createBufferSource();
			source2.buffer = dogBarkingBuffer;
			source2.playbackRate.value = rate[num - 1];
			source2.connect(gainNode2);
			gainNode2.connect(context.destination);
			source2.loop = true;
			source2.loopStart = 0.079;
			source2.loopEnd = 0.096;
			gainNode2.gain.setValueAtTime(0, context.currentTime);
			gainNode2.gain.linearRampToValueAtTime(1, context.currentTime + 0.01);
			source2.start(context.currentTime);

			break;
		case 3:
			source3 = context.createBufferSource();
			source3.buffer = dogBarkingBuffer;
			source3.playbackRate.value = rate[num - 1];
			source3.connect(gainNode3);
			gainNode3.connect(context.destination);
			source3.loop = true;
			source3.loopStart = 0.079;
			source3.loopEnd = 0.096;
			gainNode3.gain.setValueAtTime(0, context.currentTime);
			gainNode3.gain.linearRampToValueAtTime(1, context.currentTime + 0.01);
			source3.start(context.currentTime);

			break;
		case 4:
			source4 = context.createBufferSource();
			source4.buffer = dogBarkingBuffer;
			source4.playbackRate.value = rate[num - 1];
			source4.connect(gainNode4);
			gainNode4.connect(context.destination);
			source4.loop = true;
			source4.loopStart = 0.079;
			source4.loopEnd = 0.096;
			gainNode4.gain.setValueAtTime(0, context.currentTime);
			gainNode4.gain.linearRampToValueAtTime(1, context.currentTime + 0.01);
			source4.start(context.currentTime);

			break;
		case 5:
			source5 = context.createBufferSource();
			source5.buffer = dogBarkingBuffer;
			source5.playbackRate.value = rate[num - 1];
			source5.connect(gainNode5);
			gainNode5.connect(context.destination);
			source5.loop = true;
			source5.loopStart = 0.079;
			source5.loopEnd = 0.096;
			gainNode5.gain.setValueAtTime(0, context.currentTime);
			gainNode5.gain.linearRampToValueAtTime(1, context.currentTime + 0.01);
			source5.start(context.currentTime);

			break;
		case 6:
			source6 = context.createBufferSource();
			source6.buffer = dogBarkingBuffer;
			source6.playbackRate.value = rate[num - 1];
			source6.connect(gainNode6);
			gainNode6.connect(context.destination);
			source6.loop = true;
			source6.loopStart = 0.079;
			source6.loopEnd = 0.096;
			gainNode6.gain.setValueAtTime(0, context.currentTime);
			gainNode6.gain.linearRampToValueAtTime(1, context.currentTime + 0.01);
			source6.start(context.currentTime);

			break;

		default:
			source7 = context.createBufferSource();
			source7.buffer = dogBarkingBuffer;
			source7.playbackRate.value = rate[num - 1];
			source7.connect(gainNode7);
			gainNode7.connect(context.destination);
			source7.loop = true;
			source7.loopStart = 0.079;
			source7.loopEnd = 0.096;
			gainNode7.gain.setValueAtTime(0, context.currentTime);
			gainNode7.gain.linearRampToValueAtTime(1, context.currentTime + 0.01);
			source7.start(context.currentTime);

	}

}

function end(num) {
	var count = document.getElementById('a').innerHTML.lastIndexOf(num);
	var track = document.getElementById('b').innerHTML.charAt(count);
	if((track == '') || (track == 8)) {
		var count2 = document.getElementById('a1').innerHTML.lastIndexOf(num);
		str1 = document.getElementById('a').innerHTML;
		str2 = document.getElementById('a1').innerHTML;
		document.getElementById('a').innerHTML = document.getElementById('a').innerHTML.substring(0, count) + document.getElementById('a').innerHTML.substring(count + 1, str1.length);
		document.getElementById('b').innerHTML = document.getElementById('b').innerHTML.substring(0, count) + document.getElementById('b').innerHTML.substring(count + 1, str1.length);
		document.getElementById('a1').innerHTML = document.getElementById('a1').innerHTML.substring(0, count2) + document.getElementById('a1').innerHTML.substring(count2 + 1, str2.length);
		document.getElementById('b1').innerHTML = document.getElementById('b1').innerHTML.substring(0, count2) + document.getElementById('b').innerHTML.substring(count2 + 1, str2.length);
		return;
	}
	var speed = document.getElementById("speed").value;
	switch(parseInt(track)) {
		case 1:
			gainNode1.gain.exponentialRampToValueAtTime(0.001, context.currentTime + speed / 2000.0);
			source1.stop(context.currentTime + speed / 2000.0);

			break;
		case 2:
			gainNode2.gain.exponentialRampToValueAtTime(0.001, context.currentTime + speed / 2000.0);
			source2.stop(context.currentTime + speed / 2000.0);

			break;
		case 3:
			gainNode3.gain.exponentialRampToValueAtTime(0.001, context.currentTime + speed / 2000.0);
			source3.stop(context.currentTime + speed / 2000.0);

			break;
		case 4:
			gainNode4.gain.exponentialRampToValueAtTime(0.001, context.currentTime + speed / 2000.0);
			source4.stop(context.currentTime + speed / 2000.0);

			break;
		case 5:
			gainNode5.gain.exponentialRampToValueAtTime(0.001, context.currentTime + speed / 2000.0);
			source5.stop(context.currentTime + speed / 2000.0);

			break;
		case 6:
			gainNode6.gain.exponentialRampToValueAtTime(0.001, context.currentTime + speed / 2000.0);
			source6.stop(context.currentTime + speed / 2000.0);

			break;
		default:
			gainNode7.gain.exponentialRampToValueAtTime(0.001, context.currentTime + speed / 2000.0);
			source7.stop(context.currentTime + speed / 2000.0);

	}
	document.getElementById('a1').innerHTML = document.getElementById('a1').innerHTML.replace(num, '');
	document.getElementById('b1').innerHTML = document.getElementById('b1').innerHTML.replace(track, '');

	var com = "document.getElementById('b').innerHTML=document.getElementById('b').innerHTML.replace('" + track + "', '');"
	com += "document.getElementById('a').innerHTML=document.getElementById('a').innerHTML.replace('" + num + "', '')"

	setTimeout(com, speed);

}

function playmusic() {
	if(document.getElementById("playBtn").innerHTML == 'play') {
		document.getElementById("playBtn").innerHTML = 'stop';
		timedCount();
	} else {
		var com = "document.getElementById('b').innerHTML='';"
		com += "document.getElementById('b1').innerHTML='';"
		com += "document.getElementById('a').innerHTML='';"
		com += "document.getElementById('a1').innerHTML='';"

		com += "try{"
		for(var i = 0; i < 7; i++) {
			com += "source" + (i + 1) + ".stop();"
		}
		com += " }catch(err) {}"
		setTimeout(com, 0);
		document.getElementById("playBtn").innerHTML = 'play';
	}
}

function timedCount() {

	if(document.getElementById("playBtn").innerHTML == 'play') { //按下停止
		index = 0;
		return;
	}

	var speed = document.getElementById("speed").value;
	var num = document.getElementById("music").value.charAt(index);
	if(num == '-') {

		if(document.getElementById("music").value.charAt(index - 1) != '-')
			endnum = document.getElementById("music").value.charAt(index - 1);
		setTimeout("timedCount()", speed);

		index += 1;
		return;
	} else {
		if(endnum != '0') {
			end(endnum);
			endnum = '0';
		} else if(index != 0)
			end(document.getElementById("music").value.charAt(index - 1));
	}
	if(num == '') { //播放完毕
		document.getElementById("playBtn").innerHTML = 'play';
		index = 0;
		return;
	} else if(num == ' ' || num == 0) {
		index += 1;
		setTimeout("timedCount()", speed);
		return;
	}
	index += 1;
	start(num);

	setTimeout("timedCount()", speed);
}

function selectMusic(obj) {
	var tune = {
		'Entrance': 'yeyu1uyeyu21yeyu1232u1y1yryu1u143231utu2343e2eueyeyu1uyeyu21yeyu1232u1y1yryu1u143231utu2343e2eueyeyu1uyeyu21yeyu1232u1y1yryu1u143231utu2343e2',
		'甩葱歌': 'y-2-2---34-2-2---43-1-1-3-4-2-2---2y-2-2---34-2-2---466654-3-4-2-2--26-6-5-4-3-1-1--355554-3-4-2-2--26-6-5-4-3-1-1--355554-3-4-2-2--',
		'欢乐颂': 'e-e-r-t-t-r-e-w-q-q-w-e-e-w-w-  e-e-r-t-t-r-e-w-q-q-w-e-w-q-q-  w-w-e-q-w-ere-q-w-ere-w-q-w-t-',
		'Lost Woods': 'r-y-u---r-y-u---r-y-u-3-2---u-1-u-t-e---------w-e-t-e-----------r-y-u---r-y-u---r-y-u-3-2---u-1-3-u-t---------u-t-w-e-----------w-e-r---t-y-u---1-u-e-----------w-e-r---t-y-u---1-2-3-----------w-e-r---t-y-u---1-u-e-----------w-q r-e t-r y-t u-y 1-u 2-1 34--23-----------------------',
		'PAD长': 'h-r-ere-t-r-ereqw-y-tyty1-y-t-y-',
		'俄罗斯方块': '3---u-1-2-321-u-y---y-1-3---2-1-u-----1-2---3---1---y---y------- 2---4-6---5-4-3-----1-3---2-1-u---u-1-2---3---1---y---y---    3---u-1-2-321-u-y---y-1-3---2-1-u-----1-2---3---1---y---y------- 2---4-6---5-4-3-----1-3---2-1-u---u-1-2---3---1---y---y---',
		'Sis puella magica!': 'w--er-e-q-w---wer-e-q-w-w--er-e-w-q-erw-------q-w--er-e-q-w---wer-e-q-w-w--er-e-w-q-erw-----werty-w--ytre-e-erw-----werty-w--ytre-e-r-y-----werty-w--yt-r-t-yuy---tyt---rtr---req-q-erw---------',
		'宾克斯的美酒': '3555-----6-53--5--      3555-----6-53--1------- 5-32-1y-u1--5-32-1y-1t--y-1t-ty-u1-43-32-12---- 5-32-1y-u1--5-32-1y-1t--y-1t--y-u1-43-12-21----',
		'lisa-riccia': 'y-1-3---2-2---y---3---3-2-2-4--3--2-2---3-1---t---3---3-2-2-5--4--3-3---4-4---y---1---1-u-u-y-u-  2---2-2-2-2-3-  2---1-1---y-1-2-1-3---2-2---y---3---3-2-2-4--3--2-2---3-1---t---3---3-2-2-5--4--3-3---4-4---y---1---1-u-u-y-u-  2---2-2-2-2-3-  2---1-1---  u-1-u---1-t---e---t-y---u---1---u-1-5---5-4---3---1---u---1-u-1-5-3-    3---2---1---1---1-2---3-1---1-3-3-1-1-y-3---------',
		'cirno': 'werty--yryrew--- wry2--2121ty-----2-4--4346352u52u3-42y431t33--22wery--yryrew--- wry2--2121ty-----2-4--4346352u52u3-42y431t33--22',
		'Undertale': 'q-1-t---r-1-q---q-e-1--21-t-r---q-1-t---r-1-q---q-e-1--21-t-r---',
		'思出一千万': 'rrr-rrr-w---w-r---r-w---y-t-y-  rrr-rrr-w---w-y---t-r---t---    t---t-t-e---y---t---r---e---w---w-y-1-u-----w-w-w-y-1-u---1---2-t-r-t-2---1-4---2---1---2-----',
		'康康舞曲': 'g-w-w-e-w-q-q-e-r-y-1-y-y-t-t---y-j-j-y-t-q-q-e-e-w-e-w-e-w-e-w-g-w-w-e-w-q-q-e-r-y-1-y-y-t-t---y-j-j-y-t-q-q-e-e-w-e-w-w-q-q---3---1---y---t---5-2-3-4-3-2-1---3---1---y---t---r-t-y-u-2-1-1---3---1---y---t---5-2-3-4-3-2-1---3---1---y---t---r-t-y-u-1-t-u-t-1-t-u-t-1-t-u-t-1-t-u-t-1--11--11--11--11--11--11--11--11--11--11--11--11--',
		'???': '111-111u-u1-tty-111-111u-u1-tty-111-111u-u1-tty-wry121yretu232ut111-111u-u1-tty-111-111u-u1-tty-111-111u-u1-tty-wry121yretu232ut'
	};
	var musicspeed = {
		'Entrance': 100,
		'甩葱歌': 70,
		'欢乐颂': 80,
		'Lost Woods': 80,
		'PAD长': 80,
		'俄罗斯方块': 80,
		'Sis puella magica!': 150,
		'宾克斯的美酒': 150,
		'lisa-riccia': 70,
		'cirno': 150,
		'Undertale': 300,
		'思出一千万': 80,
		'康康舞曲': 70,
		'???': 90
	};
	var opt = obj.options[obj.selectedIndex]
	document.getElementById("music").value = tune[opt.text];
	document.getElementById("speed").value = musicspeed[opt.text];

	//全暂停
	var com = "document.getElementById('b').innerHTML='';"
	com += "document.getElementById('b1').innerHTML='';"
	com += "document.getElementById('a').innerHTML='';"
	com += "document.getElementById('a1').innerHTML='';"
	com += "try{"
	for(var i = 0; i < 7; i++) {
		com += "source" + (i + 1) + ".stop();"
	}
	com += " }catch(err) {}"
	setTimeout(com, 0);
	document.getElementById("playBtn").innerHTML = 'play';
	$("#select").blur();
}
$(document).ready(function() {

	for(var i = 0; i < 7; i++) {
		var com = "document.getElementById('btn" + (i + 1) + "').addEventListener('mousedown', function() {	start('" + note[i + 7] + "');});";
		com += "document.getElementById('btn" + (i + 1) + "').addEventListener('mouseup', function() {	end('" + note[i + 7] + "');});";
		com += "document.getElementById('btn" + (i + 1) + "').addEventListener('mouseleave', function() {if(mouseUp==false)	end('" + note[i + 7] + "');});";

		setTimeout(com, 0);

	}
});

function isNumber(speed) {
	if(speed.value == '' || isNaN(speed.value) || speed.value == '0') {
		speed.value = 100;
		alert('音符长度必须为非0数字');
	}
}