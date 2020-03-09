var img =document.getElementsByClassName('img')[0];
var flex =document.getElementsByClassName('swiper-box')[0];
var inde =document.getElementsByClassName('boss')[0];
var dot =document.getElementsByClassName('dot')[0];
var li =dot.getElementsByTagName('li');
console.log(li)
var left =inde.getElementsByClassName('left')[0];
var right =inde.getElementsByClassName('right')[0];
//获取一个初始位置
var x = img.offsetLeft;
// 设置改变位置的值
var num1 = 0;
var time;
var s=0;
var m=Math.floor(-num1/1280);
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
	img.style.left = x+num1+'px';
	 
	},1)
	}
// setInterval(runa,4000);
function runa(){
	 fun1();
	// 判断是否需要切回第一张
	if(img.offsetLeft<=-9808){
		img.style.left ='-1280px';
		num1=0;
		x=img.offsetLeft
		}
		// bb(num1);
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
	img.style.left = x+num1+'px';
	},1)
	if(img.offsetLeft>=-1280){
		img.style.left ='-10240px';
		x=img.offsetLeft;
		num1=0;
		}
	}
}
$(function(){
	$('.hezi').children('a').click(function(){
		$('.hezi').children('a').removeAttr('class');
		$(this).attr('class','on1');
	})
})
 // 小圆点绑定点击事件
	  // for(var i=0;i<li.length;i++){
		 //  li[i].index=i;
		 //  li[i].onclick=function(){
			//   for(var i=0;i<li.length;i++){
			// 	  li[i].removeAttribute('class');
			//   }
			//   this.setAttribute('class','bian');
		 //  }
		 //  }
		  // function bb(m){
			 // for(var i=0;i<li.length;i++){
			 // li[i].removeAttribute('class');
			 // }
			 // li[m].setAttribute('class','bian'); 
		  // }