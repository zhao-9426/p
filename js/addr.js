var big =document.getElementById('city');
var small =document.getElementById('sh');
// 创建数组
var arr1 =[
	['南岸','合川','璧山'],
	['成都','攀枝花','大凉山'],
	['浦东','松江','黄埔']
]
var index ;
 big.onchange=function(){
	 // 消除原本的option标签
	 small.options.length = 1;
	 // 获取当前的value值 用来当做arr1的下标
	 index = this.value;
	 console.log(index)
	 // 遍历数组
	 for(var i=0;i<arr1.length;i++){
		 // 判断获取的值和数组内对象的index属性的值是否相等
		 // if(index==arr1[i].index){
			 // var newArr = arr1[i]
			 // console.log(newArr)
			 // for(var j=0;j<newArr.length;j++){
				 // 创建标签 添加到页面上
				 var option = new Option(arr1[index][i],i);
		          small.appendChild(option);
			 // }
		 // }
		 
	 }
 }