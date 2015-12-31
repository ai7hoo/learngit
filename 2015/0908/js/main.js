requirejs.config({
	path:{
		jquery: 'js/jquery'
	}
});
requirejs(['jquery','my'],function($,my){
	my.isEmpty('#inp');
});