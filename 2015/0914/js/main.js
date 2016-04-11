requirejs.config({
	paths:{
		jquery:'jquery'
	}
});
requirejs(['jquery','backtop'],function($,backtop){
	var scroll = new backtop.Backtop();
	scroll.move();
});