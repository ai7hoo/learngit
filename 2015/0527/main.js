$(function(){
	var $box = $(".box-block");
	$box.css('height', $(".box-block").eq(0).width());
	$(window).resize(function() {
		$box.css('height', $(".box-block").eq(0).width());
	});

	$box.on('click', function() {
		var ind = $(this).index();
		var indnum6 = (ind)%6;

		if(ind == 0){
			$(this).toggleClass('click-color');
			$box.eq( ind+1 ).toggleClass('click-color');
			$box.eq( ind+6 ).toggleClass('click-color');
		}
		else if(ind < 6){
			if(ind == 5){
				$(this).toggleClass('click-color');
				$box.eq( ind-1 ).toggleClass('click-color');
				$box.eq( ind+6 ).toggleClass('click-color');
			}
			else {
				$(this).toggleClass('click-color');
				$box.eq( ind-1 ).toggleClass('click-color');
				$box.eq( ind+1 ).toggleClass('click-color');
				$box.eq( ind+6 ).toggleClass('click-color');
			}
		}
		else if(indnum6 == 0){
			$(this).toggleClass('click-color');
			$box.eq( ind+1 ).toggleClass('click-color');
			$box.eq( ind-6 ).toggleClass('click-color');
			$box.eq( ind+6 ).toggleClass('click-color');
		}
		else if(indnum6 == 5){
			$(this).toggleClass('click-color');
			$box.eq( ind-1 ).toggleClass('click-color');
			$box.eq( ind-6 ).toggleClass('click-color');
			$box.eq( ind+6 ).toggleClass('click-color');
		}
		else {
			$(this).toggleClass('click-color');
			$box.eq( ind-1 ).toggleClass('click-color');
			$box.eq( ind+1 ).toggleClass('click-color');
			$box.eq( ind-6 ).toggleClass('click-color');
			$box.eq( ind+6 ).toggleClass('click-color');
		}
		checkboxbgcolor($box,'click-color');
	});
});

function checkboxbgcolor(obj,clsname){
	var count = 0;
	for(var i =0;i < obj.length;i++){
		if(obj.eq(i).hasClass(clsname)){
			count++;
		}
	}
	if(count == 36){
		alert('完成');
	}
}

function randombtn(){
	$(".box-block").removeClass('click-color');
	for(var i = 0; i < 36;i++){
		var ran = Math.ceil( Math.random()*2 );
		if(ran == 1){
			$(".box-block").eq(i).addClass('click-color');
		}
	}
}