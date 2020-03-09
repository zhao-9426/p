var nav =document.getElementsByClassName('option')[0];
var scrollTop = 0;
	// 获取触发改变的位置
var endTop = nav.offsetTop+nav.offsetHeight;
// 绑定滚动条的位置
window.onscroll=function(){
	// 获取滚动条的位置
	scrollTop = document.documentElement.scrollTop;
	// 判断滚动条是否到大指定位置
	if(scrollTop>=endTop){
		nav.style.position='fixed';
		nav.style.top = '0';
		nav.style.background='white';
		nav.style.zIndex='200'
	}else{
		nav.style.position='relative'
	}
}
$(function(){
	$(document).scroll(function(){
		console.log(window.scrollTop)
	})
	$('.option>a:eq(0)').click(function(){
		window.scroll(0,960)
	})
	$('.option>a:eq(1)').click(function(){
		window.scroll(0,1360)
	})
	$('.option>a:eq(2)').click(function(){
		window.scroll(0,2160)
	})
	$('.option>a:eq(3)').click(function(){
		window.scroll(0,3140)
	})
	$('.option>a:eq(4)').click(function(){
		window.scroll(0,4000)
	})
	$('.option>a:eq(5)').click(function(){
		window.scroll(0,4800)
	})
	
})