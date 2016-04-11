//表格隔行换色和选中变色插件
//$("selected").alterBgColor(options);
//参数为对象,{odd:"odd",even:"even",selected:"selected"}
//带默认参数
; (function ($) {
	$.fn.extend({
		"alterBgColor": function (options) {
			return this.each(function () {
				$.extend({
					odd: "tb-odd",
					even: "tb-even",
					selected: "td-selected",
					hover: "td-hover"
				}, options);
				$("tbody>tr:odd", this).addClass("tb-odd");
				$("tbody>tr:even", this).addClass("tb-even");
				$("tbody>tr", this).click(function () {
					$(this).siblings('tr').removeClass("tb-selected");
					$(this).toggleClass("tb-selected");
					if ($(this).hasClass("tb-selected")) {
						$(this).removeClass("tb-hover");
					}
				});
				$("tbody>tr", this).mouseover(function () {
					if (!$(this).hasClass("tb-selected")) {
						$(this).addClass("tb-hover");
					}
				}).mouseout(function () {
					$(this).removeClass("tb-hover");
				});
				return this;
			});



		}
	});
})(jQuery);