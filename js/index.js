//		var current = 0;
//		var current_yellow = 0;  
//
//	function rotate(){
//	    var img_yellow=document.getElementsByClassName('img_yellow')[0];
//	    var img_blue=document.getElementsByClassName('img_blue')[0];
//	    var img_green=document.getElementsByClassName('img_green')[0];
//	    current+=50;
//	    current_yellow+=-50;
//	    img_blue.style.transform = 'rotate('+current+'deg)';
//	    img_yellow.style.transform = 'rotate('+current_yellow+'deg)';
//	    img_green.style.transform = 'rotate('+current+'deg)';
//	} 
//	var timer=setInterval("rotate()",100);      
   
var num = 0;   
setInterval(function(){
	num ++; 
	$(".img_blue").rotate(90*num);  
},1000);
   
   
document.getElementById("qq_card").addEventListener("click",function(){
	window.open("http://wpa.qq.com/msgrd?v=3&uin=2390415662&site=qq&menu=yes","_blank");
})

document.getElementById("qzone_card").addEventListener("click",function(){
	window.open("http://user.qzone.qq.com/2390415662/main","_blank");
})

