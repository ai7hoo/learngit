<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<title>customer</title>
<meta name="keywords" content="#">
<meta name="description" content="#">
<!-- START 公用 head -->
<!-- START 公用样式 -->
<link rel="shortcut icon" href="http://www.haier.com/cn/images/favicon.ico">
<style type="text/css">
input, textarea {
	outline: none;
}
</style>
<!-- END 公用 head -->

<!-- 自定义样式 START -->

<link rel="stylesheet" href="css/nr_ac_reset.css">
<link rel="stylesheet" href="css/nr_ac_home_diy.css">
<link rel="stylesheet" type="text/css" href="css/customer.css" />
<LINK href="index_files/style.css" rel="stylesheet"> 

<script type="text/javascript" src="js/jQuery.js"></script>
</head>

<body>

<!-- START header -->

<!-- #include file="top.asp" -->
<DIV id="content">
<!-- #include file="heard.asp" -->
</DIV>
<div id="nr_width_control" class="js_nr_width_control"> 
  
  <!-- END header --> 
  <!-- START nr_body -->
  <div id="nr_body">
    <div class="nr_content"> 
      <!-- START content -->
      
      <div id="nr_ac" class="customer_content price_content"> 
        
        <!-- START 主体 -->
       
        <div class="customer_box">
        	<div class="pic_title">
            	<img src="images/logo_02.png" />
                <div class="check_box">
                	<input class="message_text" id="customername" type="text" placeholder="客户名称">
                    <input class="message_text" id="customertel" type="text" placeholder="联系电话">
                    <input class="message_text" id="password" type="text" placeholder="查询密码">
                    <div style="width:100%; overflow:hidden; line-height: none; color:#333;">
                      <div style=" width:auto; height:auto; margin-top:5px; float:left;"><input style="width:auto !important; height:auto !important;" type="checkbox" name="CheckboxGroup1" value="记住密码" id="CheckboxGroup1_0"></div>&nbsp;记住密码
                      <div style="float:right;"><div style=" width:auto; height:auto; margin-top:5px; float:left;"><input type="checkbox" style="width:auto !important; height:auto !important;" name="CheckboxGroup1" value="自动登录" id="CheckboxGroup1_1"></div>&nbsp;自动登录</div>
                    </div>
                    
                    <div class="subbtn" style=" background-color:#4ac74a;"> <a href="#">开始查询</a> </div>
  
                </div>
            </div>
        </div>
        
        <!-- END 主体 --> 
        
        <!--guoshuang Monitor code end--> 
      </div>
      <!--[if IE 6]>
  <script src="#/cn/images/nr_ac_ie6.js"></script>
  <![endif]--> 
      <!--[if IE 7]>
  <script src="#/cn/images/nr_ac_ie7.js"></script>
  <![endif]--> 
      <!--[if IE 8]>
  <script src="#/cn/images/nr_ac_ie8.js"></script>
  <![endif]--> 
      
    </div>
  </div>
  <!-- END nr_body -->
  
  <div class="nr_fixed_width"> 
    <!--START footer--->
    <!-- #include file="down.asp" -->
    
    <!--END footer---> 
  </div>
</div>
<script type="text/javascript">
$(function(){
//    导航效果
    var nav= $(".head .ul-nav>li");
    nav.mouseenter(function(){
        $(this).children("ul").show();
    });
    nav.mouseleave(function(){
        $(this).children("ul").hide();
    });
});
</script>
<style type="text/css">
input,textarea{
    outline: none;
}
</style>
<!-- END footer -->
</body>
</html>