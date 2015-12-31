require.config({
	paths: {
		"jquery":"https://cdn.bootcss.com/jquery/3.0.0-alpha1/jquery",
		"underscore":"https://cdn.bootcss.com/underscore.js/1.8.3/underscore",
		"backbone":"https://cdn.bootcss.com/backbone.js/1.2.2/backbone",
		"myMod":"myMod"
	},
	shim: {
		'underscore':{
			exports: '_'
		},
		'backbone':{
			deps: ['underscore','jquery'],
			exports:'Backbone'
		},
		'myMod':{
			deps:['jquery'],
			init:function(){
				return {
					myMod:myMod,
					myMod2:myMod2,
				}
			},
			exports:'myMod'
		}
	}
});

require(['myMod'],function(myMod){
	myMod.myMod('#btn1');
	myMod.myMod2('#btn2');
});