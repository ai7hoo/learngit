//这是一个获取和设置颜色的插件$("select").color();
//开始的";"是为了防止之前的代码没有加防止压缩出现错误
//插件使用闭包原理,()(),内部函数可以访问内部的所有局部变量,外面的无法访问内容变量,但是可以通过函数调用内部变量.
//第一个"()"是一个匿名函数;第二个"()"是用来执行第一个"()"匿名函数的,第二个"()"可以传递参数进去,以供内部函数使用
;(function($){	//此处将"$"作为匿名函数的形象
	//此处的插件是对jQuery对象的扩展,所以使用$.fn.extend()就可以
	$.fn.extend({
		"color":function(value){
			//这里写插件代码
			//参数value存在就是设置颜色值,否则就是获取元素的颜色值
			if( value === undefined ) {
				//如果没有设置值则获取this的颜色
				return this.css("color");
			}
			else {
				//否则的话就设置this的颜色值为value
				return this.css("color", value);
			}
		},
		//如果要定义一组插件可以在这里继续
		"border":function(value){
			
		}
	});
})(jQuery);		//这里将"jQuery"作为实参传递给匿名函数