$(function () {
	//focus() blur()
	$(".box1 input").focus(function () {
		$(this).addClass('form_focus');
	}).blur(function () {
		$(this).removeClass('form_focus');
	});
	
	//textarea height+-
	$(".btn1").click(function () {
		if (!$("#tta").is(":animated")) {
			$("#tta").animate({
				"height": '+=50px'
			}, 500);
		}
	});
	$(".btn2").click(function () {
		if (!$("#tta").is(":animated")) {
			if ($("#tta").height() <= 200) {
				alert('最小高度为200px不能更小。');
				return false;
			}
			else {
				$("#tta").animate({
					"height": '-=50px'
				});
			}
		}
	});
	$(".btn3").click(function(){
		$('#tta').animate({
			"scrollTop": '+=20'
		},500);
	});
	$(".btn4").click(function(){
		$("#tta").animate({
			"scrollTop": '-=20'
		},500);
	});
	
	//checked
	//这里有个坑啊,用attr无法设置,attr在设置checkbox的时候有问题.
	//jquery官方推荐的是使用prop,
	$(".btn5").click(function(){
		$("[name=items]:checkbox").prop('checked', true);
	});
	$(".btn6").click(function(){
		$("[name=items]:checkbox").prop('checked', false);
	});
	$(".btn7").click(function(){
		$("[name=items]:checkbox").each(function(){
			//$(this).prop( 'checked', !$(this).prop('checked') );
			this.checked = !this.checked;
		});
	});
	$(".btn8").click(function(){
		var str = '已经选中的有:\n';
		$("[name=items]:checkbox:checked").each(function(){
			str += $(this).val() + '\n';
		});
		alert(str);
	});
	
	//select
	$(".btn9").click(function(){
		var $selta = $("#saaa option");
		$selta.appendTo('#sbbb');
	});
	$(".btn10").click(function(){
		var $seltok = $("#saaa option:selected");
		$seltok.appendTo('#sbbb');
	});
	
	//表单验证
	$(".username").blur(function(){
		if(this.value.length < 6){
			$(this).next('span').remove();
			$(this).after("<span class='err_msg'>* 用户名小于六位</span>");
			$(this).focus();
		}
		else {
			$(this).next('span').remove();
			$(this).focus();
		}
	});
	$(".username").keyup(function(){
		$(this).trigger('blur');
	});
	$(".btn11").click(function(){
		if($(".username").val() == '') {
			alert('用户名不能为空');
			$(".username").focus();
			return false;
		}
		$(".username").trigger('blur');
	});
	$(".btn12").click(function(){
		
	});
});