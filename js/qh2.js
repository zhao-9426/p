var boxBig = document.getElementsByClassName('box-big')[0];
 var a = boxBig.getElementsByTagName('a');
 console.log(a);
 for(var i=0;i<a.length;i++){
	 a[i].onclick=function(){
	 		 for(var i=0;i<a.length;i++){
	 		 a[i].removeAttribute('class')
	 }
	 this.setAttribute('class','on')
	 console.log(1);
 }
 }