//作用域学习
//js是函数级别的作用域
// var j = 1000;
// function test(){
// 	if(false){
// 		var i=10;
// 	}else {
// 		var t = 100;
// 	}
// 	console.log(j);
// }
// test();

// var j = 100;
// //波浪形~直接执行
// ~function test(){
// 	console.log(j);
// }();


//闭包，就是拿到本不该属于它的东西。
// function test(){
// 	var j = 1000;
// 	return function(){
// 		return j;
// 	}
// }

// var bb = test()();
// console.log(bb);

//this谁调用就指谁。
// function test(){
// 	alert(this.m);
// }
// //undefined
// window.test();

// this.m = 1000;
// var obj = {
// 	m:100,
// 	test:function(){
// 		alert(this.m);
// 		return function(){
// 			alert(this.m);
// 		}
// 	}
// };
// (obj.test())();

// function test(){
// 	alert(this.style.color);
// }
// window.onload = function(){
// 	document.getElementById('test').onclick = test;
// }


// this.a = 1000;
// function test(){
// 	this.a = 1;
// }
// test.prototype.geta = function(){
// 	return this.a;
// }
// var p = new test;
// console.log(p.geta());


// function test(){
// 	this.a = 1;
// }

// test.prototype.a = 100;
// var p = new test;
// console.log(p.a);


//指引
// function test(num){
// 	var num = num + 1;
// 	return num;
// }
// var num = 1;
// alert(test(num));//2
// alert(num);//1


// function test(obj){
// 	obj.age = "20";
// 	console.log('内部变量',obj);
// }
// var obj = {
// 	name:"xiaoming"
// };
// test(obj);
// console.log(obj);

//面向切面编程
function test(){
	//alert(2);
	return 'aaa';
}
Function.prototype.before = function(fn){
	var __self = this;
	return function(){
		fn.apply(__self,arguments);
		return __self.apply(__self,arguments);
	}
}
Function.prototype.after = function(fn){
	var __self = this;
	return function(){
		var result = __self.apply(__self,arguments);
		if(result == false){
			return false;
		}
		fn.apply(this,arguments);
		return result;
	}
}
test.before(function(){
	console.time('a');
}).after(function(){
	console.timeEnd('a');
})();
