define(['jquery'],function($){
	return {
		boxWidth:function(){
			return $('body').offset().width;
		},
		boxHeight:function(){
			return $('body').offset().height;
		}
	};
});