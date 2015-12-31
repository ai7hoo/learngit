$(function () {
	$(".btn3").on('click', function () {
		$.ajax({
			url: "ajax.json",
			dataType: "json",
			type: "GET",
			success: function (data) {
				$("#myModalc .modal-header").html(data.name);
				$("#myModalc .modal-body").html(data.name + ' 的年龄是: ' + data.age);
			}
		});
	});
	
	//工具提醒tooltip需要开启手动初始化
	$("[data-toggle='tooltip']").tooltip();
	
	//弹出框popover也需要开启手动初始化
	$("[data-toggle='popover']").popover();
});