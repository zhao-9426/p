 var cck = document.getElementsByClassName('dao')[0];
 var li = cck.getElementsByTagName('li');
var swit =document.getElementsByClassName('duo-tu')[0];
var ul = swit.getElementsByTagName('ul');
var num=0;
 // 给文字添加绑定事件,改变样式
 for(var i=0;i<li.length;i++){
	 li[i].index=i;
	 li[i].onclick=function(){
		 for(var i=0;i<li.length;i++){
		 li[i].removeAttribute('class')
	 }
	 this.setAttribute('class','sty')
	 for(var i=0;i<ul.length;i++){
		 ul[i].style.display='none';
	 }
	  ul[this.index].style.display='block';
 }
 }
$(function(){
	$('.swit').children('ul').children('li').click(function(){
		$('.swit>ul>li').removeAttr('class');
		$('.swit>ul>li>div').css('display','none');
		$(this).attr('class','on');
		$(this).children('div').css('display','block')
	})
})
 
 
 