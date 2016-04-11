define([
	'require',
	'jquery'
], function(require, $) {
	'use strict';
	function Backtop(opts){
		this.opts = $.extend({},Backtop.DEFAULT,opts);
	}
	
	Backtop.prototype.move = function(){
		var arr1 = [2,58,93,5,94,3];
		var maxNum = Math.max.apply(null,arr1);
		alert(maxNum);
	};
	
	Backtop.DEFAULT = {};
	
	return {
		Backtop:Backtop
	};
});