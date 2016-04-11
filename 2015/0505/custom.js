$(function () {
	$('.btn').bind('click', function () {
		$.each( $('.box li') ,function(i,n) {
			$('.arrbox').append(i + '===' + $('.box li').eq(i).text() + '<br \/>');
		});
	});
});