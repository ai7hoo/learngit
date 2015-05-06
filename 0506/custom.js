//javascript document
$(function () {
	$('.boxhtml').bind('click',function(){
		$(this).children('span').html('fuck' + parseInt(Math.random()*10000));
	});
	
	$(".boxtext").bind('click',function() {
		$(this).children('span').text('boxtextaa');
	});
	
	$(".inputval").bind('click',function(){
		$(this).find('.inp').val('boxinputval');
	});
	
	$(".boxchildren").bind('click',function(){
		$(this).children('span').html('');
	});
	
	$('.boxnext').bind('click',function(){
		$(this).find('li').eq(0).next().html('');
	});
	
	$(".boxprev").bind('click',function(){
		$(this).find('li').eq(-1).prev().html('');
	});
	
	$('.boxsiblings').bind('click',function(){
		$(this).find('li').eq(1).siblings().html('');
	});
	
	$('.boxclosest').bind('click',function(){
		$(this).children('ul').children('li').children('ul').children('li').eq(0).closest('li').css('background-color','#aaaaaa');
	});
	
	$('.boxparent').bind('click',function(){
		$(this).children('ul').children('li').children('ul').children('li').eq(0).parent('ul').css('background-color','#aaaaaa');
	});
	
	$(".boxparents").bind('click',function(){
		$(this).children('ul').children('li').children('ul').children('li').eq(0).parents('ul').css('background-color','#aaaaaa');
	})
});