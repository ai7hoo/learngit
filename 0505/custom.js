//text/javascript
$(document).ready(function() {
//	$(".btn").live('click',function() {
//		alert($(this).html());
//	});
//	在1.7+版本中live()已经变更为on()
//	在1.4+版本中用delegate()
//	在1.3+版本中用live()


	var myurl = "http://www.baidu.com/about.html";
	var en_myurl = encodeURIComponent(myurl);
	var un_en_myurl = decodeURIComponent(en_myurl);
	alert(un_en_myurl);


});