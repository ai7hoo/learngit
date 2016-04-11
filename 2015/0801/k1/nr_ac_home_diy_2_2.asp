<!DOCTYPE html>
<html lang="zh-CN">
	<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<title>2-2</title>
	<meta name="keywords" content="#">
	<meta name="description" content="#">
	<script type="text/javascript" src="js/nr_js_jquery-1.js"></script>
	<script type="text/javascript" src="js/nr_js_jquery-ui-1.js"></script>

	<!-- START 新版本头尾js -->

	<!-- END 公用脚本 -->
	<script type="text/javascript" src="js/nr_login_trs_haier.js"></script>

	<!-- END 公用 head -->

	<!-- 自定义样式 START -->

	<link rel="stylesheet" href="css/nr_ac_reset.css">
	<link rel="stylesheet" href="css/nr_ac_home_diy.css">
<LINK href="index_files/style.css" rel="stylesheet"> 
	<!--[if IE 6]>
  <link rel="stylesheet" href="#images/nr_ac_ie6.css">
  <![endif]-->
	<!--[if IE 7]>
  <link rel="stylesheet" href="#images/nr_ac_ie7.css">
  <![endif]-->

	<!-- 自定义样式 END -->
	<script>
		var houseType = '两室两厅';
	</script>
	
	<script src="js/nr_ac_home_diy.js"></script>
	<script src="js/nr_ac_jquery.js"></script>
	</head>

	<body>

<!-- START header -->
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
<!-- #include file="top.asp" -->
<DIV id="content">
<!-- #include file="heard.asp" -->
</DIV>
<!-- END header -->


<!-- START content --> 
<!-- END header -->

<div id="nr_ac"> 
      <script>
		$(function() {
			var config = {
				height : '347'
			}
	
			$('#nr_ac').find('.js-adjust-height').each(function() {
	
				var length = $(this).siblings('.js-adjust-height').length + 1;
				var height = config.height / length;
				var src = $(this).children('a').attr('data-background');
	
				$(this).css('height', height + 'px');
				$(this).children('a').css('line-height', height + 'px');
	
				if (src) {
					$(this).children('a').css('background-image', 'url('+src+')');
				};
			});
      

      
		});
		$('.nr_ac_home_diy').find('.choose_xx').eq(0).find('.item1').on('click', function() {
          // view
          $(this).addClass('act').siblings().removeClass('act');
		   housetype = $(this).html();
		});
	</script> 
      
      <!-- START 主体 -->
      <div class="nr_ac_home_diy">
    <ul style="background-image: url(&quot;images/nr_ac_home_diy_bg_empty.jpg&quot;);" class="main">
    	<li class="active">
        	
            <h1>个性定制 DIY</h1>
             <div class="diy_bac_2_2" style=" background:url(images/diy2_2.jpg) no-repeat top center; height:650px; overflow:hidden; position:relative;">
             	<h3 class="title">2室2厅</h3>
                <div id="selecte_btn">
                	<ul class="choose_xx">
                    	<li class="item1 act">按面房间面积选型</li>
                        <li class="item1 ">按空调匹数选型</li>
                    </ul>
<style>
  #selecte_btn ul .item1 {
    cursor: pointer;
  }
</style>
<script>
  $(function(){
    //按照房间面积/空调匹数来选择下一步
    $("#selecte_btn ul .item1").on('click',function(){
      $("#selecte_btn ul .item1").removeClass("act");
      $(this).addClass("act");
      $("#selecteNext").data('difnext',$(this).index());
    });
    $( ".slider" ).slider();
  });

</script>
                </div>  
            </div>
            
            <div class="btn-group"> <a href="show.asp" class="return">〈　　　　返回</a> <a class="next" id="selecteNext" data="">下一步　　　〉</a> 
            </div>
            <ul class="step">
                  <li><a>1</a></li>
                  <li class="active"><a>2</a></li>
                  <li><a>3</a></li>
                  <li><a>5</a></li>
                  <li class="last"><a>5</a></li>
                </ul>
            
        </li>
        
        <!---areaForm--s-->
          <li>
        <h1>个性定制 DIY</h1>
        <div style=" background: url(images/nr_ac_home_diy_switch_2_2_2.jpg) no-repeat top center; height:650px; overflow:hidden; position:relative;">
              <h3 class="title">2室2厅</h3>
              <div class="areaForm" id="jsAreaForm">
            <h4>请输入房间使用面积</h4>
            <div tabindex="0" style="overflow: hidden; padding: 0px; width: 254px;" class="section jspScrollable">
                  <div style="width: 254px; height: 400px; overflow:hidden;" class="jspContainer">
                <div style="padding: 0px; width: 243px; top: 0px; float:left;" class="jspPane">
                      <div class="areaSetter">
                    <div class="input">
                          <label>客厅</label>
                          <input value="0" maxlength="2" id="js_kt" type="text">
                        </div>
                    <div class="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                          <div style="width: 0%;" class="ui-slider-range ui-widget-header ui-slider-range-min"></div>
                          <a style="left: 0%;" class="ui-slider-handle ui-state-default ui-corner-all" href="#"></a></div>
                  </div>
                      <div class="ctrlSetter" id="js_ktSetter">
                    <div class="line-ctrl" data="xk"></div>
                    <div class="remote-ctrl good active" data="yk"></div>
                  </div>
                      <div class="areaSetter">
                    <div class="input">
                          <label>餐厅</label>
                          <input value="0" maxlength="2" id="js_ct" type="text">
                        </div>
                    <div class="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                          <div style="width: 0%;" class="ui-slider-range ui-widget-header ui-slider-range-min"></div>
                          <a style="left: 0%;" class="ui-slider-handle ui-state-default ui-corner-all" href="#"></a></div>
                  </div>
                      <div class="ctrlSetter" id="js_ctSetter">
                    <div class="line-ctrl" data="xk"></div>
                    <div class="remote-ctrl good active" data="yk"></div>
                  </div>
                      <div class="areaSetter">
                    <div class="input">
                          <label>主卧</label>
                          <input value="0" maxlength="2" id="js_zw" type="text">
                        </div>
                    <div class="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                          <div style="width: 0%;" class="ui-slider-range ui-widget-header ui-slider-range-min"></div>
                          <a style="left: 0%;" class="ui-slider-handle ui-state-default ui-corner-all" href="#"></a></div>
                  </div>
                      <div class="ctrlSetter" id="js_zwSetter">
                    <div class="line-ctrl" data="xk"></div>
                    <div class="remote-ctrl good active" data="yk"></div>
                  </div>
                      
                      <!----
                        <div class="areaSetter">
                              <div class="input">
                            <label>次卧</label>
                            <input value="0" maxlength="2" id="js_cw" type="text">
                          </div>
                              <div class="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                            <div style="width: 0%;" class="ui-slider-range ui-widget-header ui-slider-range-min"></div>
                            <a style="left: 0%;" class="ui-slider-handle ui-state-default ui-corner-all" href="#"></a></div>
                            </div>
                        <div class="ctrlSetter" id="js_cwSetter">
                              <div class="line-ctrl" data="xk"></div>
                              <div class="remote-ctrl good active" data="yk"></div>
                            </div>
                            ----> 
                      
                    </div>
                <div class="jspVerticalBar" style="width:10px; float:right;">
                      <div class="jspCap jspCapTop"></div>
                      <a class="jspArrow jspArrowUp jspDisabled"></a>
                      <div style="height: 370px;" class="jspTrack">
                    <div style="height: 230px;" class="jspDrag">
                          <div class="jspDragTop"></div>
                          <div class="jspDragBottom"></div>
                        </div>
                  </div>
                      <a class="jspArrow jspArrowDown"></a>
                      <div class="jspCap jspCapBottom"></div>
                    </div>
              </div>
                </div>
          </div>
              <div class="line-tips"> <img src="images/nr_ac_home_diy_line_ctrl_text.jpg" alt=""> </div>
              <div class="remote-tips"> <img src="images/nr_ac_home_diy_remote_ctrl_text.jpg" alt=""> </div>
            </div>
        <div class="btn-group"> <a class="return">〈　　　　返回</a> <a class="next" id="houseAreaNext" data="validate">下一步　　　〉</a> </div>
        <ul class="step">
              <li><a>1</a></li>
              <li><a>2</a></li>
              <li class="active"><a>3</a></li>
              <li><a>4</a></li>
              <li class="last"><a>5</a></li>
            </ul>
      </li>
      
       <!---areaForm--e-->
       
       
        <!---areaForm1--s-->
        
        <!---->
        <li>
        <h1>个性定制 DIY</h1>
        <div style=" background: url(images/nr_ac_home_diy_switch_2_2_2.jpg) no-repeat top center; height:650px; overflow:hidden; position:relative;">
              <h3 class="title">2室2厅</h3>
              <div class="areaForm" id="jsAreaForm">
            <h4>请输入空调匹数</h4>
            <div tabindex="0" style="overflow: hidden; padding: 0px; width: 254px;" class="section jspScrollable">
                  <div style="width: 254px; height: 400px; overflow:hidden;" class="jspContainer">
                <div style="padding: 0px; width: 243px; top: 0px; float:left;" class="jspPane">
                      <div class="areaSetter">
                    <div class="input">
                          <label>客厅</label>
                          <input value="0" maxlength="2" id="js_kt" type="text">
                        </div>
                    <div class="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                          <div style="width: 0%;" class="ui-slider-range ui-widget-header ui-slider-range-min"></div>
                          <a style="left: 0%;" class="ui-slider-handle ui-state-default ui-corner-all" href="#"></a></div>
                  </div>
                      <div class="ctrlSetter" id="js_ktSetter">
                    <div class="line-ctrl" data="xk"></div>
                    <div class="remote-ctrl good active" data="yk"></div>
                  </div>
                      <div class="areaSetter">
                    <div class="input">
                          <label>餐厅</label>
                          <input value="0" maxlength="2" id="js_ct" type="text">
                        </div>
                    <div class="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                          <div style="width: 0%;" class="ui-slider-range ui-widget-header ui-slider-range-min"></div>
                          <a style="left: 0%;" class="ui-slider-handle ui-state-default ui-corner-all" href="#"></a></div>
                  </div>
                      <div class="ctrlSetter" id="js_ctSetter">
                    <div class="line-ctrl" data="xk"></div>
                    <div class="remote-ctrl good active" data="yk"></div>
                  </div>
                      <div class="areaSetter">
                    <div class="input">
                          <label>主卧</label>
                          <input value="0" maxlength="2" id="js_zw" type="text">
                        </div>
                    <div class="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                          <div style="width: 0%;" class="ui-slider-range ui-widget-header ui-slider-range-min"></div>
                          <a style="left: 0%;" class="ui-slider-handle ui-state-default ui-corner-all" href="#"></a></div>
                  </div>
                      <div class="ctrlSetter" id="js_zwSetter">
                    <div class="line-ctrl" data="xk"></div>
                    <div class="remote-ctrl good active" data="yk"></div>
                  </div>
                     
                    </div>
                <div class="jspVerticalBar" style="width:10px; float:right;">
                      <div class="jspCap jspCapTop"></div>
                      <a class="jspArrow jspArrowUp jspDisabled"></a>
                      <div style="height: 370px;" class="jspTrack">
                    <div style="height: 230px;" class="jspDrag">
                          <div class="jspDragTop"></div>
                          <div class="jspDragBottom"></div>
                        </div>
                  </div>
                      <a class="jspArrow jspArrowDown"></a>
                      <div class="jspCap jspCapBottom"></div>
                    </div>
              </div>
                </div>
          </div>
              <div class="line-tips"> <img src="images/nr_ac_home_diy_line_ctrl_text.jpg" alt=""> </div>
              <div class="remote-tips"> <img src="images/nr_ac_home_diy_remote_ctrl_text.jpg" alt=""> </div>
            </div>
        <div class="btn-group"> <a class="return oreturn">〈　　　　返回</a> <a class="next" id="houseAreaNext" data="validate">下一步　　　〉</a> </div>
        <ul class="step">
              <li><a>1</a></li>
              <li><a>2</a></li>
              <li class="active"><a>3</a></li>
              <li><a>4</a></li>
              <li class="last"><a>5</a></li>
            </ul>
      </li>
      <!---->
       <!---areaForm1--e-->
       
      
          <li style="background-image: url(&quot;images/nr_ac_home_diy_bg_empty.jpg&quot;);">
        <h1><span></span>个性定制 DIY</h1>
        <div>
              <h3 class="sub-title">请根据你的中央空调使用需求做选择</h3>
              <div>
            <div class="accessories">
                  <h4 class="accessories-title">使用配件</h4>
                  <ul class="accessories-contents">
                <li class="selector">
                      <div class="contents-title">WIFI模块<span>（可选）</span></div>
                      <div class="contents-image part"><img src="images/nr_ac_home_diy_step3_item_1.jpg" class="active"><img src="images/nr_ac_home_diy_step3_item_1_normal.jpg" class="normal"></div>
                      <div class="contents-sub-selector">
                    <div class="nr_ac_radio"></div>
                  </div>
                    </li>
                <li class="selector">
                      <div class="contents-title">3D面板</div>
                      <div class="contents-image"><img src="images/nr_ac_home_diy_step3_item_2.jpg"></div>
                      <div class="contents-sub-selector checked" data="3d">
                    <div class="nr_ac_radio"></div>
                  </div>
                      <div class="tips"> <img src="images/nr_ac_home_diy_step3_tips1.jpg"> </div>
                    </li>
                <li class="selector">
                      <div class="contents-title">普通面板</div>
                      <div class="contents-image"><img src="images/nr_ac_home_diy_step3_item_3_gray.jpg"></div>
                      <div class="contents-sub-selector" data="normal">
                    <div class="nr_ac_radio"></div>
                  </div>
                      <div class="tips"> <img src="images/nr_ac_home_diy_step3_tips2.jpg"> </div>
                    </li>
              </ul>
                </div>
            <div class="voltage">
                  <h4 class="voltage-title">外机使用电压</h4>
                  <div class="voltage-contents-title">请选择所使用电压</div>
                  <ul class="voltage-contents">
                <li class="selector">
                      <div class="contents-image"><img src="images/nr_ac_home_diy_step3_item_4.jpg"></div>
                      <div class="contents-sub-selector checked" data="220v">
                    <div class="nr_ac_radio"></div>
                  </div>
                    </li>
                <li class="selector">
                      <div class="contents-image"><img src="images/nr_ac_home_diy_step3_item_5_gray.jpg"></div>
                      <div class="contents-sub-selector" data="380v">
                    <div class="nr_ac_radio"></div>
                  </div>
                    </li>
              </ul>
                </div>
          </div>
            </div>
        <div class="btn-group"> <a class="return">〈　　　　返回</a> <a class="next" id="finalNext">下一步　　　〉</a> </div>
        <ul class="step">
              <li><a>1</a></li>
              <li><a>2</a></li>
              <li><a>3</a></li>
              <li class="active"><a>4</a></li>
              <li class="last"><a>5</a></li>
            </ul>
      </li>
          <li>
        <div class="final">
              <ul class="nav">
            <li>多联式</li>
            <li>分体式</li>
          </ul>
              <ul class="content">
            <li>
                  <ul>
                <li>
                      <h3>多联式家庭中央空调</h3>
                      <div class="scroll" id="plan_productlist1">
                    <p>本案是一套空调使用面积为<span id="plan1_areaSize"></span>平米两室两厅的户型，内机台数为<span id="plan1_njNum"></span>台，外机台数为<span id="plan1_wjNum"></span>台，总负荷为<span id="plan1_fh"></span>W的多联式家庭中央空调设计方案</p>
                    <img id="duolianImg" src="images/LEKA36BC6.jpg"> </div>
                    </li>
                <li class="blue">
                      <h3>两室两厅</h3>
                      <div class="scroll">
                    <table>
                          <tbody id="plan1_list">
                      </tbody>
                        </table>
                    <h4>方案优点</h4>
                    <h5>美观高贵</h5>
                    <p>满足个性化需求的同时更加彰显品位，灵动调温，营造静怡、舒畅、放松的家居氛围，为您打造宁静、舒适、健康的生活环境。</p>
                    <h5>管路连接方便</h5>
                    <p>采用先进的直流变频技术，单管制一拖多，墙体外立面美观；室内机自由组合，一台外机最多可连接19台室内机，室内走管凿洞少，在节省安装空间的同时也节省了初期投资成本。</p>
                    <div class="tips">* 由于南北温度差异，本方案仅供参考，具体方案请咨询当地海尔经销商。</div>
                  </div>
                      <div class="panel">
                    <form action="" method="post" id="myform2">
                          <a href="javascript:;" class="download">下载本方案</a>
                        </form>
                    <a class="join">在线预约</a> </div>
                    </li>
              </ul>
                </li>
            <li>
                  <ul>
                <li>
                      <h3>分体式家庭中央空调</h3>
                      <div class="scroll" id="plan_productlist2">
                    <p>本案是一套空调使用面积为<span id="plan2_areaSize"></span>平米两室两厅的户型，内机台数为<span id="plan2_njNum"></span>台，外机台数为<span id="plan2_wjNum"></span>台，总负荷为<span id="plan2_fh"></span>W的多联式家庭中央空调设计方案</p>
                    <img id="duolianImg" src="images/P020131218565040948531_350.jpg"> </div>
                    </li>
                <li class="blue">
                      <h3>两室两厅</h3>
                      <div class="scroll">
                    <table>
                          <tbody id="plan2_list">
                      </tbody>
                        </table>
                    <h4>方案优点</h4>
                    <h5>美观大方</h5>
                    <p>室内机与家庭整体装修融合，一体化隐形设计，节省家居空间，打造居家之美；出风口和回风口均采用时尚格扇设计，美观大方，尽显星级酒店般的雍容华贵。</p>
                    <h5>薄静快灵</h5>
                    <p>超薄灵巧机身，保证房间层高舒适美观；超静音运转，呵护甜蜜睡眠；快速冷暖，营造室内均匀温度；设计灵活，安装便利。</p>
                    <div class="tips">* 由于南北温度差异，本方案仅供参考，具体方案请咨询当地海尔经销商。</div>
                  </div>
                      <div class="panel">
                    <form action="" method="post" id="myform1">
                          <a href="javascript:;" class="download">下载本方案</a>
                        </form>
                    <a class="join">在线预约</a> </div>
                    </li>
              </ul>
                </li>
          </ul>
              <a class="return"><span>〈</span>　　　返回</a> </div>
        <ul class="step">
              <li><a>1</a></li>
              <li><a>2</a></li>
              <li><a>3</a></li>
              <li><a>4</a></li>
              <li class="last active"><a style="color:white;">5</a></li>
            </ul>
      </li>
        </ul>
  </div>
      <!-- END 主体 --> 
      
      <!--guoshuang Monitor code end--> 
    </div>
<style>
  @charset "UTF-8";
  *{list-style:none;margin:0 0;padding:0 0;font-size:12px}
  .clear{clear:both}
  a img{border:none}
  .kt_select{width:150px}
  .kt_err{color:#fe697c;font-size:13px;font-weight:normal}
  .kt_title{padding:10px 0}
  .kt_title h1{font-size:22px;color:#606060;font-weight:normal;line-height:22px}
  .kt_l{float:left}
  .kt_r{float:right}
  .right{float:right}
  .left{float:left}
  .kt_w100{width:100px}
  .kt_w120{width:120px}
  .kt_btn_big{height:42px;line-height:42px;background:url(kt_btn2.gif) top left;color:white;font-size:16px;display:block;cursor:pointer}
  .kt_btn_big b{display:block;height:42px;line-height:42px;background:url(kt_btn2.gif) right -42px;padding:0 15px 0 10px;text-align:center;font-size:16px}
  span.kt_btn_big_hover{background-position:left -84px}
  span.kt_btn_big_hover b{background-position:right -126px}
  .kt_btn_14{height:34px;line-height:34px;background:url(images/nr_ac_kt_btn14.gif) top left;color:white;font-size:14px;display:block;cursor:pointer;margin:0 auto;}
  .kt_btn_14 b{display:block;height:34px;font-size:14px;line-height:34px;background:url(images/nr_ac_kt_btn14.gif) right -34px;padding:0 15px 0 15px;text-align:center}
  a.kt_btn_14_hover{background-position:left -68px}
  a.kt_btn_14_hover b{background-position:right -102px;color:white}
  .kt_btn_12{height:30px;line-height:34px;background:url(kt_btn12.gif) top left;color:white;font-size:12px;display:block;cursor:pointer;margin:0 auto;}
  .kt_btn_12 b{display:block;height:30px;line-height:30px;background:url(kt_btn12.gif) right -30px;padding:0 15px 0 15px;text-align:center}
  a.kt_btn_12_hover{background-position:left -60px}
  a.kt_btn_12_hover b{background-position:right -90px;color:white}
  .mt5{margin-top:5px}
  .mt10{margin-top:10px}

  .kt_body *{font-family:"微软雅黑"}
  .kt_body{background:url(kt_bg.jpg) no-repeat top center #f5f5f8;}
  .kt_body .kt_banner{width:1000px;height:242px;background:url(kt_banner.jpg);margin:0 auto}
  .kt_body .kt_main{background:url(kt_mainbg.jpg) no-repeat top left white;width:1000px;margin:0 auto;padding-top:25px}

  .kt_mainleft{width:745px;float:left}
  .kt_mainright{width:235px;float:right}
  /**表单**/
  .kt_frombox{width:940px;margin:0 auto;position:relative;}
  .kt_frombox h3.kt_tit1{background:url(kt_ico1.jpg) no-repeat top left;line-height:29px;height:29px;color:#005aaa;font-size:14px;padding:0 0 0 40px;}
  .kt_frombox h3.kt_tit2{background:url(kt_ico1.jpg) no-repeat left -29px;line-height:29px;height:29px;color:#005aaa;font-size:14px;padding:0 0 0 40px;}
  .kt_frombox h3.kt_tit3{background:url(kt_ico1.jpg) no-repeat left -58px;line-height:29px;height:29px;color:#005aaa;font-size:14px;padding:0 0 0 40px;}
  .kt_frombox table.kt_from {margin-left:40px;}
  .kt_frombox table.kt_from td{padding:12px 0px 14px 5px}

      /**填写房间信息**/
  .kt_fj_list{width:950px;_width:951px;position:relative;left:-5px;padding-top:18px}
  .kt_fj_list ul li{float:left;padding:0 5px 15px 5px;position:relative}
  .kt_fj_list ul li .kt_t{height:4px;width:464px;background:url(kt_listbig_bg.jpg) no-repeat top left; overflow:hidden;}
  .kt_fj_list ul li .kt_b{height:4px;width:464px;background:url(kt_listbig_bg.jpg) no-repeat left -4px; overflow:hidden;}
  .kt_fj_list ul li .kt_m{width:444px;background:#d5eef3; overflow:hidden;position:relative;padding:6px 10px}
  .kt_fj_list ul li div.kt_m h3{background:#d5eef3;width:120px;height:50px;line-height:45px;color:#00c1ff;text-align:center;font-size:24px;font-weight:normal;position:absolute;top:0;left:0;padding:0 0}
  .kt_fj_list ul li div.kt_m img.kt_room{width:218px;height:214px;float:left;_position:absolute;}
  .kt_fj_list ul li div.kt_m .kt_r{height:194px;width:226px;background:white;float:right;padding-top:20px;_overflow:hidden}
  .kt_fj_list ul li div.kt_m .kt_r table{margin:0 10px 0 20px;font-size:16px;color:#4a4a4a;width:198px;}
  .kt_fj_list ul li div.kt_m .kt_r table input{width:55px;height:20px;border:1px solid #ededed;color:#4a4a4a;padding:2px 2px}
  .kt_fj_list ul li div.kt_m .kt_r table td{padding:0px 0 8px;font-size:14px}
  .kt_fj_list ul li div.kt_m .kt_r table td span{color:#efefef;font-family:"黑体"}
  .kt_fj_list ul li div.kt_m .kt_r ul.kt_ykq{margin:0px 0 0 20px;_height:97px;_overflow:hidden}
  .kt_fj_list ul li div.kt_m .kt_r ul.kt_ykq li{width:95px;height:97px;background:url(kt_btn1.jpg) top left;padding:0 0;cursor:pointer;margin:0 3px 0 0}
  .kt_fj_list ul li div.kt_m .kt_r ul.kt_ykq li.hover{background-position:-95px top;}
  .kt_fj_list ul li div.kt_m .kt_r ul.kt_ykq li.vis{background-position:-190px top; }
  .kt_fj_list ul li div.kt_m .kt_r ul.kt_ykq li img{width:81px;height:81px;margin:10px 4px 0}
  .kt_fj_list ul li .kt_del{position:absolute;top:-6px;right:-1px;background:url(kt_close.gif) no-repeat;width:23px;height:23px;cursor:pointer;display:none}
  .kt_fj_list ul li.kt_small{position:relative;}
  .kt_fj_list ul li.kt_small .kt_t{width:227px;background:url(kt_listsmall_bg.jpg) top left;}
  .kt_fj_list ul li.kt_small .kt_m{width:211px;padding:6px 8px}
  .kt_fj_list ul li.kt_small .kt_m h3{width:211px;position:relative;height:34px;line-height:25px;font-size:22px}
  .kt_fj_list ul li.kt_small .kt_m .kt_r{width:210px;margin:0 auto;padding-top:10px;height:170px;}
  .kt_fj_list ul li.kt_small .kt_m .kt_r table{font-size:13px;margin:0 13px;width:183px}
  .kt_fj_list ul li.kt_small .kt_m .kt_r table td{padding:0px 0 5px}
  .kt_fj_list ul li.kt_small .kt_m .kt_r ul.kt_ykq{margin:0 6px 0 8px;_margin:0 5px 0 7px;}
  .kt_fj_list ul li.kt_small .kt_m .kt_r ul.kt_ykq li{margin:0 2px 0 1px}
  .kt_fj_list ul li.kt_small .kt_b{width:227px;background:url(kt_listsmall_bg.jpg) left -4px;}
  .kt_fj_list ul li.kt_small .kt_del{position:absolute;top:-6px;right:-1px;background:url(kt_close.jpg) no-repeat;width:23px;height:23px;cursor:pointer;display:none}

  .kt_fj_list ul li.box1_err .kt_t{background-position:-928px top}
  .kt_fj_list ul li.box1_err .kt_b{background-position:-928px -4px}
  .kt_fj_list ul li.box1_err .kt_m{background:#ffa9b4}
  .kt_fj_list ul li.box1_err .kt_m h3{background:#ffa9b4;color:white}
  .kt_fj_list ul li.box1_hover .kt_t{background-position:-464px top}
  .kt_fj_list ul li.box1_hover .kt_b{background-position:-464px -4px}
  .kt_fj_list ul li.box1_hover .kt_m{background:#00c1ff}
  .kt_fj_list ul li.box1_hover .kt_m h3{background:#00c1ff;color:white}

  .kt_fj_list ul li.box2_err .kt_t{background-position:-455px top}
  .kt_fj_list ul li.box2_err .kt_b{background-position:-455px -4px}
  .kt_fj_list ul li.box2_err .kt_m{background:#ffa9b4}
  .kt_fj_list ul li.box2_err .kt_m h3{background:#ffa9b4;color:white}
  .kt_fj_list ul li.box2_hover .kt_t{background-position:-228px top}
  .kt_fj_list ul li.box2_hover .kt_b{background-position:-228px -4px}
  .kt_fj_list ul li.box2_hover .kt_m{background:#00c1ff}
  .kt_fj_list ul li.box2_hover .kt_m h3{background:#00c1ff;color:white}


    /**添加其他房间**/
  .kt_addroom{width:264px;margin:0 auto;padding-bottom:15px}

    /**遥控器简介**/
  .kt_ykq_info{border-top:2px solid #f0f0f0;border-bottom:2px solid #f0f0f0;;padding:2px 0;margin-bottom:15px}
  .kt_ykq_info .kt_l{width:465px;padding-top:15px;margin:15px 0 0}
  .kt_ykq_info .kt_r{width:464px;border-left:1px solid #ddd;padding-top:15px;margin:15px 0 0}
  .kt_ykq_info img{float:left;width:195px;height:164px;margin-left:15px}
  .kt_ykq_info .kt_r img{margin-left:35px;margin-right:15px}
  .kt_ykq_info .kt_textbox{float:left;width:186px;padding-top:10px}
  .kt_ykq_info .kt_textbox p{font-size:14px;color:#777777;font-weight:bold;padding-bottom:5px}
  .kt_ykq_info .kt_textbox ul li{font-size:12px;color:#7f7e7e;display:block;padding-left:13px;background:url(kt_point.jpg) top left no-repeat;}
  .kt_ykq_info h3{color:#40c8f4;font-size:13px;text-align:center;padding:15px 0 15px;font-weight:normal}

    /**附加功能选择**/
  .kt_addfunction{background:#d5eef5;padding:7px 7px}
  .kt_addfunction .kt_cont{background:white;_height:1px;border:1px solid #d5eef5}
  .kt_addfunction h3{color:#0bade1;background:#d5eef5;padding-bottom:12px;font-size:14px;padding-left:15px}
  .kt_addfunction .kt_l{width:420px;padding:20px 21px}
  .kt_addfunction .kt_l table td{font-size:14px;color:#393636;padding-right:5px;padding-bottom:10px;font-weight:bold}
  .kt_addfunction .kt_l table td a{font-size:12px}
  .kt_addfunction .kt_l table td span{color:#40c8f4}
  .kt_addfunction .kt_l img{width:111px;height:111px;float:left;margin-left:17px}
  .kt_addfunction .kt_l .kt_textbox{width:240px;float:left;margin-left:25px;font-size:13px;color:#393636}
  .kt_addfunction .kt_l .kt_textbox table td{padding-top:20px;padding-bottom:10px}

    /**生成方案**/
  .kt_submit{width:142px;float:right;padding:35px 0}


  /**********结果页面 start*****************/
    /**欢迎语**/
  h1.kt_tit{background:url(kt_bg2.jpg) no-repeat top left #32bee1;color:white;font-size:22px;line-height:32px;padding:8px 30px}
  h1.kt_tit span{display:block;text-indent:38px;font-size:16px;font-weight:normal;line-height:22px}
    /**需求列表**/
  .kt_roominfo{border:1px solid #ddd;border-top:none;padding:15px 29px}
  .kt_roominfo h3{font-size:14px;color:#494848;height:30px;line-height:30px;padding:0 0;}
  .kt_roominfo table{border-top:2px solid #a0a1a2;border-bottom:2px solid #a0a1a2;width:100%}
  .kt_roominfo table td{padding:8px 16px;border-bottom:1px solid #ddd;}
  .kt_roominfo table td.kt_tdname{background:#f1f2f2;border-right:1px solid #ddd;width:80px}
    /**方案**/
  .kt_pro{display:none}
  div.show{display:block}
  .kt_projectbox{border:1px solid #dedede;margin-top:10px;margin-bottom:30px}
  .kt_projectbox h3{font-size:14px;color:#767676;height:38px;line-height:38px;padding:0 0;padding-left:20px;}
  .kt_projectbox ul.kt_tabbox{height:47px;background:url(kt_subbg.jpg) repeat-x;padding:0 0;}
  .kt_projectbox ul.kt_tabbox li{display:block;height:47px;line-height:47px;font-size:20px;color:#767676;width:250px;text-align:center;float:left;background:url(kt_subbg.jpg) left -47px repeat-x;cursor:pointer}
  .kt_projectbox ul.kt_tabbox li.cur{background:url(kt_subbg.jpg) center -94px no-repeat #32bee1;color:white}

  .kt_projectbox .kt_proinfobox{padding:22px 22px;_overflow:hidden;_width:700px}
  .kt_projectbox .kt_proinfobox .kt_jianshu{background:url(kt_bg3.jpg) no-repeat bottom #f7f7f7;padding:15px 15px 30px 15px;font-size:13px}
  .kt_table table{width:100%;}
  .kt_table table td{border-bottom:1px solid #ddd;border-right:1px solid #ddd;padding:7px 5px;text-align:center;font-size:12px;color:#393636}
  .kt_table table td.td1{background:#f1f2f2}
  .kt_table table td.last{border-right:none}
  .kt_table table tr.kt_trheader td{border-right:none;border-bottom:2px solid #a0a1a2;font-weight:bold;color:#000}
    
       /**方案优点 ***/
  .kt_betterbox{}
  .kt_betterbox h3{font-size:14px;color:#393636;padding-left:14px}
  .kt_betterbox ul li{display:block;border:1px solid #e0e0e0;padding:7px 13px;background:#fbfbfb;line-height:18px;margin-bottom:10px}
  .kt_betterbox ul li span{color:#005aaa;font-weight:bold}
  .kt_betterbox ul li p{color:#393636;text-indent:20px;padding:0}
      /**产品展示 ***/
  .kt_product{background:white}
  .kt_product h3{font-size:14px;color:#393636;}
  .kt_product ul{display:block;background:white;width:720px}
  .kt_product ul ul{margin-top:0;width:auto;overflow:hidden;}
  .kt_product ul li.kt_plist{border-bottom:1px solid #ddd;padding:10px 0;display:block;width:350px;float:left;margin:5px 0px 5px 0;}
  .kt_product ul li img{width:110px;height:110px;float:left;margin:0 10px 0 5px;}
  .kt_product ul li .kt_text{width:210px;float:left;padding-top:10px;height:161px}
  .kt_product ul li .kt_text a{color:#393636;font-size:14px;font-weight:bold}
  .kt_product ul li .kt_text ul li{background:url(kt_point.jpg) no-repeat left 3px;line-height:20px;padding-left:15px}
  .kt_product ul li .kt_tool {width:70px;height:70px;overflow:hidden;padding:18px 35px;float:left;border-left:1px solid #ddd}
  .kt_product ul li li{border:none;padding:0 0;margin:0 0}
      /**方案造价 ***/
  .kt_price{border:1px solid #ddd;background:#f5fdff;padding:11px 22px}
  .kt_price p{font-size:13px;color:#393636;line-height:18px;padding:0 0}
  .kt_price p span{color:#005aaa;font-weight:bold}
      /**分享 ***/
  .kt_fx{width:150px;_width:160px;margin:10px auto;color:#000;font-size:13px;line-height:24px;}
  .kt_fx span{float:left}
  .kt_fx #ckepop{float:right;margin-top:5px}
      /**注 ***/
  .kt_impbox{font-size:13px;color:#393636;}
  .kt_impbox a{color:#32beff;cursor:pointer;font-size:13px}
      /**预约按钮盒子 ***/
  .kt_btnyy{width:420px;margin:20px auto}
  .kt_btnyy td{width:140px}
    /**全球客服热线 ***/
  .kt_qqkfbox{border:1px solid #ddd;padding:0 10px;padding-top:0px;padding-bottom:20px;*padding:20px 10px}
  .kt_qqkfbox table{margin-top:20px}
  .kt_qqkfbox td{font-size:16px; font-weight:bold;text-align:left;padding:0 5px}
  .kt_qqkfbox td.kt_tdico{width:50px;vertical-align:top;text-align:right}
  .kt_qqkfbox ul{display:block;width:165px;margin:10px auto 0}
  .kt_qqkfbox ul li{line-height:25px;font-size:12px}
  .kt_qqkfbox .kt_btn_m{margin:15px auto}

  /** 浮动 **/
  .kt_zz{width:100%;background:black;opacity:.6;filter:Alpha(Opacity=60);position:absolute;height:700px;top:0;left:0;display:none;z-index:10000}
  .kt_floatbox{width:100%;position:absolute;top:0;left:0;display:none;z-index:10000;}
  .kt_floatbox .kt_fbox{position:relative;width:820px;margin-left:auto;margin-right:auto;margin-top:50px}
  .kt_floatbox .kt_fbox .kt_showbox{width:820px;overflow:hidden;position:relative;}
  .kt_floatbox .kt_fbox .kt_showbox ul{width:5000000px;position:relative;}
  .kt_floatbox .kt_fbox .kt_showbox ul li{width:820px;float:left;}
  .kt_floatbox .kt_fbox .kt_showbox ul li img{width:820px;height:500px;}
  .kt_floatbox .kt_fbox .kt_showbox ul li h3{color:white;font-size:18px;font-weight:normal;text-align:center;padding:0 0;line-height:40px}
  .kt_floatbox .kt_fbox .js_kt_per{width:30px;height:66px;background:url(kt_floatimg.gif) no-repeat left -37px; position:absolute;top:250px;left:20px;cursor:pointer;opacity:.5;filter:Alpha(Opacity=50);}
  .kt_floatbox .kt_fbox .js_kt_next {width:30px;height:66px;background:url(kt_floatimg.gif) no-repeat -56px -37px; position:absolute;top:240px;right:20px;cursor:pointer;opacity:.7;filter:Alpha(Opacity=70);}
  .kt_floatbox .kt_fbox .js_kt_close{background:url(kt_floatimg.gif) top left; width:31px;height:31px;cursor:pointer;position:absolute;top:0px;right:-50px ;cursor:pointer;opacity:.7;filter:Alpha(Opacity=70);}
  .kt_floatbox .kt_fbox span.kt_fbtnhover{opacity:1;filter:Alpha(Opacity=100);}

  /** 在线预约 **/
  .kt_floatbox2{width:100%;height:100%;position:absolute;top:0;left:0;display:none;z-index:10000;background-color:rgba(0,0,0,.3);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#4D000000,endColorstr=#4D000000); 
       zoom: 1;}
  .kt_zxyybox{width:420px;height:500px;background:white;padding:3px 3px 10px;font-size:13px;position:relative;left:50%;top:50%;margin-left:-210px;margin-top:-250px;}
  .kt_zxyybox h2{font-size:14px;color:black;line-height:30px;border-bottom:1px solid #ededed;padding:5px 10px;margin:0 10px}
  .kt_zxyybox .kt_cont{margin:10px 20px}
  .kt_zxyybox td{padding:2px 3px;line-height:25px}
  .kt_zxyybox .kt_text{width:230px}
  .kt_zxyybox textarea{width:230px;height:70px;resize:none;_width:238px}
  .kt_zxyybox td.td_name{text-align:right;vertical-align:top;padding-right:10px;white-space:nowrap}
  .kt_zxyybox td.td_name .kt_red{color:red;padding:2px 2px}
  .kt_zxyybox table{display:block;margin-bottom:15px;margin-left:20px}
  .kt_zxyybox table td table{margin:0 0}
  .kt_zxyybox .kt_tit{font-weight:bold;color:#303030}
  .kt_zxyybox .js_kt_close{background:url(images/nr_ac_kt_close2.jpg) top left; width:28px;height:28px;cursor:pointer;position:absolute;top:5px;right:5px ;cursor:pointer;opacity:.7;filter:Alpha(Opacity=70);}
  /**********结果页面 end*****************/

  a {cursor:pointer;}

</style>
<div class="kt_floatbox2">
      <div class="kt_zxyybox">
    <h2>在线预约</h2>
    <div class="kt_cont ">
          <h3>尊敬的用户：</h3>
          <p>如果您对海尔的方案书感兴趣，我们非常愿意为您提供更多资料，为您提供全方位的服务，并为您量身定制合适的解决方案。</p>
          <p class="kt_tit">请选择您的需要的方案：</p>
          <table>
        <tbody>
              <tr id="plan_num">
            <td id="plan_2"><input name="rad" type="radio"></td>
            <td>多联式家庭中央空调</td>
            <td id="plan_1"><input name="rad" type="radio"></td>
            <td>分体式家庭中央空调</td>
          </tr>
            </tbody>
      </table>
          <p class="kt_tit">请填写您的联系方式：</p>
          <table class="js_jqfrom">
        <tbody>
              <tr>
            <td class="td_name"><span class="kt_red">*</span>姓名:</td>
            <td colspan="2"><input class="kt_text" id="uName" type="text"></td>
          </tr>
              <tr>
            <td class="td_name"><span class="kt_red">*</span>区域:</td>
            <td><select name="" id="js_haier_province" onChange="changeProvince();" style="width:115px">
                <option selected="selected" value="">请选择省份/直辖市</option>
                <option value="安徽省">安徽省</option>
                <option value="北京市">北京市</option>
                <option value="福建省">福建省</option>
                <option value="甘肃省">甘肃省</option>
                <option value="广东省">广东省</option>
                <option value="广西壮族自治区">广西壮族自治区</option>
                <option value="贵州省">贵州省</option>
                <option value="海南省">海南省</option>
                <option value="河北省">河北省</option>
                <option value="河南省">河南省</option>
                <option value="黑龙江省">黑龙江省</option>
                <option value="湖北省">湖北省</option>
                <option value="湖南省">湖南省</option>
                <option value="吉林省">吉林省</option>
                <option value="江苏省">江苏省</option>
                <option value="江西省">江西省</option>
                <option value="辽宁省">辽宁省</option>
                <option value="内蒙古自治区">内蒙古自治区</option>
                <option value="宁夏回族自治区">宁夏回族自治区</option>
                <option value="青海省">青海省</option>
                <option value="山东省">山东省</option>
                <option value="山西省">山西省</option>
                <option value="陕西省">陕西省</option>
                <option value="上海市">上海市</option>
                <option value="四川省">四川省</option>
                <option value="天津市">天津市</option>
                <option value="西藏自治区">西藏自治区</option>
                <option value="新疆维吾尔自治区">新疆维吾尔自治区</option>
                <option value="云南省">云南省</option>
                <option value="浙江省">浙江省</option>
                <option value="重庆市">重庆市</option>
              </select></td>
            <td><select name="" id="js_haier_city" style="width:115px">
                <option selected="selected" value="">请选择城市/县</option>
              </select></td>
          </tr>
              <tr>
            <td class="td_name">地址:</td>
            <td colspan="2"><input class="kt_text" id="uAddress" type="text"></td>
          </tr>
              <tr>
            <td class="td_name"><span class="kt_red">*</span>电话:</td>
            <td colspan="2"><input class="kt_text" id="uTel" type="text"></td>
          </tr>
              <tr>
            <td class="td_name">邮箱:</td>
            <td colspan="2"><input class="kt_text" id="uEmail" type="text"></td>
          </tr>
              <tr>
            <td class="td_name">备注:</td>
            <td colspan="2"><textarea name="" cols="30" rows="10" id="uMemo"></textarea></td>
          </tr>
              <tr>
            <td colspan="3"><!--<a href="javascript:;" id="plan_yy" onclick="submitOnlineR();" class="kt_btn_14 kt_w100 mt10 right" ><b>提交</b></a>--> 
                  <img src="images/nr_ac_zxyysub.png" id="plan_yy" onClick="submitOnlineR();" style="float:right;cursor:pointer;"> <img src="images/nr_ac_zxyytjz.png" id="plan_ing" style="float:right;cursor:pointer;display:none"></td>
          </tr>
            </tbody>
      </table>
        </div>
    <span class="js_kt_close"></span> </div>
    </div>

<!--[if IE 6]>
  <script src="#images/nr_ac_ie6.js"></script>
  <![endif]--> 
<!--[if IE 7]>
  <script src="#images/nr_ac_ie7.js"></script>
  <![endif]--> 
<!--[if IE 8]>
  <script src="#images/nr_ac_ie8.js"></script>
  <![endif]--> 
<!-- START footer -->
<!-- #include file="down.asp" -->

<!-- END footer -->
</body>
</html>