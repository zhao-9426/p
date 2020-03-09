var imgs =document.getElementsByClassName('imgbox')[0];
var flex =document.getElementsByClassName('ProductImg')[0];
var inde =document.getElementsByClassName('inde')[0];
var left =inde.getElementsByClassName('left')[0];
var right =inde.getElementsByClassName('right')[0];
//获取一个初始位置
var x = imgs.offsetLeft;
// 设置改变位置的值
var num1 = 0;
var time;
var s=0;
// var s=0;
function fun1(){
	time = setInterval(function(){
	// 
		// 设置变量改变
	num1-=10;
	// 改变标志变量
	s=1;
	// 设置结束条件
	if(num1%1280==0){
		// 满足条件后停止定时器
		clearInterval(time);
		s=0
	}
	imgs.style.left = x+num1+'px';
	 
	},1)
	}
// setInterval(runa,4000);
function runa(){
	 fun1();
	// 判断是否需要切回第一张
	if(imgs.offsetLeft<=-5120){
		imgs.style.left ='-1280px';
		num1=0;
		x=imgs.offsetLeft
		}
}
// 给右边按钮绑定点击事件
right.onclick=function(){
	if(s==0){
			runa();
	}
}
// 给左按钮绑定点击事件
left.onclick=function(){
	if(s==0){
		// x=imgs.offsetLeft
	time = setInterval(function(){
	// 
		// 设置变量改变
	num1+=10;
	// 改变标志变量
	s=1;
	// 设置结束条件
	if(num1%1280==0){
		// 满足条件后停止定时器
		clearInterval(time);
		s=0
	}
	imgs.style.left = x+num1+'px';
	},1)
	if(imgs.offsetLeft>=-1280){
		imgs.style.left ='-5120px';
		x=imgs.offsetLeft;
		num1=0;
		}
	}
}
