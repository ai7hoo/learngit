$(function(){
	var $btn_next = $('.change_btn .next');
	var $btn_prev = $('.change_btn .prev')
	var $vpic_content = $btn_next.parents('.vpic_head').next('.vpic_content');
	
	var $itemlists = $vpic_content.find('li');
	var $itemlist_width = $itemlists.eq(0).width() +  parseInt( $itemlists.eq(0).css("padding-left") ) + parseInt( $itemlists.eq(0).css("padding-right") );
	
	$vpic_content.children('ul').width($itemlists.length*$itemlist_width);
	
	var page = 4;
	var i = 1;
	var spage = Math.ceil($itemlists.length / page);
	
	
	$btn_next.click(function(){
		if( !$vpic_content.is(':animated') ){
			if(i < spage) {
				$vpic_content.animate({
					'left': '-='+$vpic_content.width()
				},600);
				i++;
			}
			else {
				$vpic_content.animate({
					'left': '0'
				},600);
				i = 1;
			}
			$(".v_circle span").removeClass('v_cursor').eq(i-1).addClass('v_cursor');
		}
		
	});
	
	$btn_prev.click(function(){
		if( $vpic_content.is(':animated') ){
			return false;
		}
		if(i == 1) {
			$vpic_content.animate({
				"left": -$vpic_content.width()*(spage-1)
			},600);
			i = spage;
		}
		else {
			$vpic_content.animate({
				'left': '+='+$vpic_content.width()
			},600);
			i--;
		}
		$(".v_circle span").removeClass('v_cursor').eq(i-1).addClass('v_cursor');
	});
});