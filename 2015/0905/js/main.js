require.config({
	paths: {
		jquery:"https://cdn.bootcss.com/jquery/3.0.0-alpha1/jquery",
		vue:"https://cdn.bootcss.com/vue/1.0.0-alpha.2/vue.js"
	}
});

requirejs(['jquery','validate'],function($,validate){
	console.log(validate.isEqual(2,2));
});