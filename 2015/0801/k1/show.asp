<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<title>show</title>
<meta name="keywords" content="#">
<meta name="description" content="#">
<!-- START 公用 head -->
<!-- START 公用样式 -->
<link rel="shortcut icon" href="#">
<LINK href="index_files/style.css" rel="stylesheet"> 

<style type="text/css">
input, textarea {
	outline: none;
}
</style>
<!-- END 公用 head -->

<!-- 自定义样式 START -->

<link rel="stylesheet" href="css/nr_ac_reset.css">
<link rel="stylesheet" href="css/nr_ac_home_diy.css">

<!--[if IE 6]>
  <link rel="stylesheet" href="#/cn/images/nr_ac_ie6.css">
  <![endif]-->
<!--[if IE 7]>
  <link rel="stylesheet" href="#/cn/images/nr_ac_ie7.css">
  <![endif]-->

<!-- 自定义样式 END -->

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
      
      <div id="nr_ac"> 
        
        <!-- START 主体 -->
        <div class="nr_ac_home_diy">
          <ul style="background-image: url(&quot;images/nr_ac_home_diy_switch_2_2.jpg&quot;);" class="main">
            <li class="active">
              <h1>个性定制 DIY</h1>
              <ul class="choose">
                <li class="item active" data-src="images/nr_ac_home_diy_switch_2_2.jpg" data-href="nr_ac_home_diy_2_2.asp">2室2厅</li>
                <li class="item" data-src="images/nr_ac_home_diy_switch_3_1.jpg" data-href="nr_ac_home_diy_3_1.asp">3室1厅</li>
                <li class="item" data-src="images/nr_ac_home_diy_switch_3_2.jpg" data-href="nr_ac_home_diy_3_2.asp">3室2厅</li>
                <li class="item" data-src="images/nr_ac_home_diy_switch_4_2.jpg" data-href="nr_ac_home_diy_4_2.asp">4室2厅</li>
                <li class="item" data-src="images/nr_ac_home_diy_switch_5_2.jpg" data-href="nr_ac_home_diy_5_2.asp">5室2厅</li>
              </ul>
              <div class="btn-group"> <a href="#">下一步　　　〉</a> </div>
              <ul class="step">
                <li class="active"><a>1</a></li>
                <li><a>2</a></li>
                <li><a>3</a></li>
                <li><a>4</a></li>
                <li class="last"><a>5</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <script type="text/javascript" src="js/jQuery.js"></script> 
        <script>

      $(function() {
	  

        var index = 0;
		var housetype = "";
		
        $('.nr_ac_home_diy').find('.main').eq(0).find('.item').on('click', function() {
          // view
          $(this).addClass('active').siblings().removeClass('active');
		   housetype = $(this).html();
		   
          // logic
          index = $(this).index();
          var src = $(this).attr('data-src');
          $('.nr_ac_home_diy').find('.main').eq(0).css('background-image', 'url('+src+')');

        });

        $('.nr_ac_home_diy').find('.main').eq(0).find('.btn-group').find('a').on('click', function() {
          var href = $('.nr_ac_home_diy').find('.main').eq(0).find('.item').eq(index).attr('data-href');
          window.open(href,'_parent');
		  
		  gsTrackEvent("第二步",housetype);
        });

        $('.nr_ac_home_diy').find('.main').eq(0).find('.item').eq(index).trigger('click');

      });

    </script> 
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