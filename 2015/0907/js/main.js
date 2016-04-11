require.config({
	paths: {
		jquery:'js/jquery'
	}
});

requirejs(['myjs'],function(myjs){
	alert(myjs.boxWidth());
});