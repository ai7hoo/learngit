define(['jquery'],function($){
	return {
		isEmpty: function(inp){
			$inp = $(inp);
			$inp.blur(function(){
				if(this.value == ''){
					console.log(false);
				}
				else {
					console.log(true);
				}
			});
		},
		isEqual:function(str1,str2){
			return str1 === str2;
		}
	};
});