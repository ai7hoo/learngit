(function($){
	$.extend({
		"asynpic": function(opt){
			$(document).scroll(function(){
				var winScr = $(document).scrollTop();
				var eleOff = $("[data-src]");
				var winHei = window.innerHeight;
				
				for(var i = 0;i < eleOff.length;i++){
					if(winScr+winHei > eleOff.eq(i).offset().top){
						var tmpaa = eleOff.eq(i).data('src');
						eleOff.eq(i).prop("src",tmpaa);
						eleOff.eq(i).removeAttr('data-src');
					}
				}
			});
		}
	});
})(jQuery);