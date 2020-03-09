// var topC = document.getElementsByClassName('top')[0];
var chartImg = document.getElementsByClassName('chart-img')[0];
var  img = chartImg.getElementsByTagName('li');
var dot =document.getElementsByClassName('dot')[0];
var cirs =dot.getElementsByTagName('li');
var chartBox=document.getElementsByClassName('chart-box')[0];
 // var times;
 // var scrollTop =0;
 // 设置变量当做li变量的下标
 var num = 0;
 // 设置循环定时器  让图片自己切换
 var timeb = setInterval(run1,3000)
 
 
 // 给获取的所有小圆点添加属性来设置下标值
 for(var i=0;i<cirs.length;i++){
	 //通过给每一个小圆点添加属性来设置下标值
	 cirs[i].index=i;
	 cirs[i].onclick=function(){
		 // 清除其他图片的style
		 for(var i=0;i<img.length;i++){
			 img[i].style.opacity='0';
		 }
		 // 清除其他小圆点的style
		 for(var i=0;i<cirs.length;i++){
			 cirs[i].style.background='white';
		 }
		 // 修改被点击的小圆点的style
		 this.style.background='#2fc7a0';
		 // 设置对应图片变换
		 img[this.index].style.opacity='1';
		 // 当点击后的下标赋给定时器内的下标
		 num = this.index;
	 }
 }
 // 当鼠标放在轮播图上时 轮播图应该停止
 chartBox.onmouseover=function(){
 		 clearInterval(timeb);
		 console.log(11)
 }
chartBox.onmouseout=function(){
	  timeb = setInterval(function(){
		  // console.log(run)
		  run1()
	  },3000)
	  
}
	
function run1(){
	 // 让num改变  这样li才能切换
	 num++;
	 console.log(num)
	 // 设置num的范围
	 if(num>=img.length){
			 // 如果超过范围 则又变回初始值
			 num=0;
	 }
	 // 设置指定li添加style属性前,先清除所有li的style样式
	 for(var i=0;i<img.length;i++){
		 img[i].style.opacity='0';
		 cirs[i].style.background='white';
	 }
	
	 // 让指定li标签添加上style
	 img[num].style.opacity='1';
	 cirs[num].style.background='#2FC7A0';
}
	//  time = setInterval(function(){
	//  	 // 设置指定li添加style属性前,先清除所有li的style样式
	//  	 for(var i=0;i<img.length;i++){
	//  		 img[i].style.opacity='0';
	//  	 }
	//  	 // 让num改变  这样li才能切换
	//  	 num++;
	//  	 // 设置num的范围
	//  	 if(num>=img.length){
	//  		 // 如果超过范围 则又变回初始值
	//  		 num=0;
	//  	 }
	//  	 // 让指定li标签添加上style
	//  	 img[num].style.opacity='1';
	//  },3000)
	//  // 设置定时器让小圆点自己切换
	//  timel = setInterval(function (){
	//  	 // 设指定小圆点前先清除所有小圆点样式
	//  	 for(var i=0;i<cirs.length;i++){
	//  		 cirs[i].style.background='white';
	//  	 }
	//  	 // 设置指定小圆点添加style  应该和图片下标对应
	//  	 cirs[num].style.background='#2FC7A0';
	//  },3000)
 // }
 
 
 // 返回顶部
 //          topC.onclick=function(){
 //           times = setInterval(function(){
	// 				document.documentElement.scrollTop = scrollTop;
	// 				if(scrollTop<=0){
	// 					clearInterval(times)
	// 				}
	// 			},10)
	// 		}
 
 