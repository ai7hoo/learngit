$(function(){
	var box = new Vue({
		el: "#box",
		data: {
			id:2,
			message:mm(),
			content:'content',
			// todos:[
			// 	{
			// 		on:false,
			// 		text:'text'
			// 	},
			// 	{
			// 		on:false,
			// 		text:'haha'
			// 	}
			// ],
		}
	});
	box.$data.$todos='0';
	
	$.ajax({
		url:'http://localhost/testdata.json',
		type:'get',
		timeout:15000,
		success:function(data){
			for(var i=0;i<data.data.length;i++){
				console.log(i);
			}
		},
		error:function(err){
			alert(err);
		}
	});
});

function mm(){
	return 'message';
}