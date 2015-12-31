function mmm() {
	var count = new Array();
	for (var i = 1; i < 10; i++) {
		for (var j = 1; j < 10; j++) {
			count.push(i+'x'+j+'='+i*j);
			console.log(count);
			var box = document.getElementById('box');
			box.innerHTML = count.join(', ');
		}
	}
};

$(function(){
	$('.btn2').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		var a = '       a a a    ';
		$("#inpboxa").val(a);
		$("#inpboxb").val($.trim(a));
	});
});