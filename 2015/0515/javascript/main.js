$(function () {
	msgajax();
	setInterval(function(){
		msgajax();
	},3000);

	$("#msgsendbtn").bind('click', function () {
		var username = $("#msgname").val();
		var usertext = $("#msgtext").val();
		if (username == '' || usertext == '') {
			alert("不能为空");
			return false;
		}
		$.ajax({
			url: 'post.php',
			data: {
				username: username,
				usertext: usertext
			},
			type: "POST",
			success: function(data){
				$(".msgbox").html('');
				for(var i=0;i<data.length;i++){
					var msg = $("<div class='msg' data-list="+data[i]["id"]+">"+"<div class='msg-user'>"+data[i]['user']+"&nbsp;"+data[i]['time']+"</div>"+"<div class='msg-con'>"+data[i]['msg']+"</div>"+"</div>");
					$(".msgbox").append(msg);
					
				}
			},
			datetype:"json"
		});
	});
});

function msgajax(){
	$.getJSON('post.php', function(data) {
		$(".msgbox").html('');
		for(var i=0;i<data.length;i++){
			var msg = $("<div class='msg' data-list="+data[i]["id"]+">"+"<div class='msg-user'>"+data[i]['user']+"&nbsp;"+data[i]['time']+"</div>"+"<div class='msg-con'>"+data[i]['msg']+"</div>"+"</div>");
			$(".msgbox").append(msg);
			
		}
	});

	$(".msgbox").scrollTop( -($(".msg").length*$(".msg").height()-$(".msgbox").height()) );
	console.log( $(".msg").length*$(".msg").height()-$(".msgbox").height() );
}