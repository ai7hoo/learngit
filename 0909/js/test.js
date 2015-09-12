define(['jquery'],function($){
	function ScrollTop(opts){
		this.opts = $.extend({},ScrollTop.DEFAULT,opts);
		this.$el = $("body, html");
	};
	
	ScrollTop.prototype.move = function(){
		this.$el.animate({
			scrollTop:this.opts.dest
		},this.opts.speed);
	};
	
	ScrollTop.prototype.go = function(){
		this.$el.scrollTop(this.opts.dest);
	};
	
	ScrollTop.DEFAULT = {
		dest: 0,
		speed: 800
	};
	
	return {
		ScrollTop:ScrollTop
	}
});