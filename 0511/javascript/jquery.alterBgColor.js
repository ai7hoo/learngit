//表格隔行换色和选中变色插件
//$("selected").alterBgColor(options);
//参数为对象,{odd:"odd",even:"even",selected:"selected"}
//带默认参数
;(function($){
	$.fn.extend({
		"alterBgColor": function( options ){
			$.extend({
				odd: "tb-odd",
				even: "tb-even",
				selected: "selected"
			}, options);
			
			//
			$("tbody>tr:odd", this).addClass("tb-odd");
			$("tbody>tr:even", this).addClass("tb-even");
			
			$("tbody>tr", this).click(function(){
				$(this).siblings('tr').removeClass("tb-selected");
				$(this).toggleClass("tb-selected");
			});
			
			return this;
			
			
		}
	});
})(jQuery);