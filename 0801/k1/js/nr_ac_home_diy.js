jQuery(function(){
	
	//读取省信息
	jQuery.ajax({
		type: "post",
		url: "/HaierFramework/haier/league/queryProvinceInfo.do?",
		dataType: "json",
		success: function (data) {
			if(data.isSuccess){
				var provis = eval(data.provinces);
				for(var i=0;i<provis.length;i++){
					jQuery("#js_haier_province").append("<option value=\""+provis[i]+"\">"+provis[i]+"</option>");
				}
			}else{
				//alert("获取省份信息失败");
			}
		},
		error:function(){
		}
	});

	if (!navigator.cookieEnabled) {
		alert("您的浏览器禁用了cookie,请先启用cookie,否则无法保存该页信息！");
		location.href = "Customize.shtml";
		return;
	}
	//用户需求
	//区域
	var provinceName=jQuery.cookie("areaChinaName");
	var city= jQuery.cookie("cityChineseName");
	var area=jQuery.cookie("areaChineseName");
	//户型
	var houseType = jQuery.cookie("houseType");
	//房间信息
	var roomType=jQuery.cookie('roomType');
	var roomInfo=jQuery.cookie('roomInfo');
	//可选模块
	var checkboxValue=jQuery.cookie('checkboxValue');
	var personNum=jQuery.cookie('personNum');
	
	var locationInfo=provinceName+city+"市"+area;
	$('#js_plan_location').text(locationInfo);
	
	$('#js_plan_houseType').text(houseType);
	//附加功能
	
	var roomAreaStr='';
	var roomKzqStr='';
	var roomInfos = '';
	var roomTypes='';
	if(!(!roomInfo && typeof (roomInfo) != "undefined" && roomInfo != 0)){
		roomInfos = roomInfo.split(",");
		roomTypes = roomType.split(",");
		for(var i=0;i<roomInfos.length;i++){
			var _thisHouseType=roomTypes[i];
			var areaInfo=jQuery.cookie(roomInfos[i]);
			var areaInfos=areaInfo.split(',');
			//面积
			var areaSzie=areaInfos[0];
			if(roomAreaStr==""){
				roomAreaStr = _thisHouseType+":"+areaSzie+"m²";
			}else{
				roomAreaStr += " / "+_thisHouseType+":"+areaSzie+"m²";
			}
			//控制器
			var kzq=areaInfos[1];
			if(kzq=='xk'){
				kzq='线控器';
			}else if (kzq=='yk'){
				kzq='遥控器';
			}else{
				kzq='线控器+遥控器';
			}
			if(roomKzqStr==""){
				roomKzqStr = _thisHouseType+":"+kzq;
			}else{
				roomKzqStr += " / "+_thisHouseType+":"+kzq;
			}
		}
	}
	$('#js_plan_area').text(roomAreaStr);
	$('#js_plan_kzq').text(roomKzqStr);
	//附加功能
	if(!(!checkboxValue && typeof (checkboxValue) != "undefined" && checkboxValue != 0)){
		if(checkboxValue.indexOf('ktmfrs')!=-1){
			$('#plan_xq').append('<tr><td class="kt_tdname">附加功能</td><td>空调、热水二合一</td></tr>');
		}
	}
	
	//zhangmingxuan   add start
$('#nr_ac').find('.btn-group').find('.next').on('click', function() {
    var data = $(this).attr("data");
	var continueFlag=true;
	if("validate"==data){//进行面积校验
	   $(".areaSetter").each(function(){
	     var roomName=$(this).find("label").text();
		 var roomMj=$(this).find("input").val();
		 if(roomMj==0){
		    alert(roomName+"面积不能为空!");
			continueFlag=false;
			return false;
		 }
	   });
	}
    if(continueFlag==false){
	  return;
	}


	//根据选择的是空调还是面积来确定不同的转向
	if($(this).data('difnext') == 1){
		$now = $(this).parent().parent().removeClass('active').next().next().addClass('active');
	}
	else {
		$now = $(this).parent().parent().removeClass('active').next().addClass('active');
	}


	//$now = $(this).parent().parent().removeClass('active').next().addClass('active');

    if (!$now.find('.final').length) {
      $('#nr_ac').find('.nr_ac_home_diy').find('.main').css('background-image', 'url(/cn/images/nr_ac_home_diy_bg_empty.jpg)');
    } else {

      $('#nr_ac').find('.nr_ac_home_diy').find('.main').css('background-image', 'url(images/nr_ac_home_diy_switch_3.jpg)');
      $('#nr_ac').find('.final').find('.nav').find('li').eq(0).trigger('click');

    }
	
  });

  //guoshuang Monitor code start
  $('#nr_ac').find('.btn-group').find('#houseAreaNext').on('click', function() {
		var housetype =$("h3.title").html();
		if(housetype == "2室2厅"){
			var kt = $("#js_kt").val();
			var ct = $("#js_ct").val();
			var zw = $("#js_zw").val();
			var cw = $("#js_cw").val();
			var housearea = [kt,ct,zw,cw].join("");
			gsTrackEvent("第三步",housearea);
		}else if(housetype == "3室1厅"){
			var kt = $("#js_kt").val();
			var zw = $("#js_zw").val();
			var cw1 = $("#js_cw1").val();
			var cw2 = $("#js_cw2").val();
			var housearea = [kt,zw,cw1,cw2].join("");
			gsTrackEvent("第三步",housearea);
		}else if(housetype == "3室2厅"){
			var kt = $("#js_kt").val();
			var ct = $("#js_ct").val();
			var zw = $("#js_zw").val();
			var cw1 = $("#js_cw1").val();
			var cw2 = $("#js_cw2").val();
			var housearea = [kt,ct,zw,cw1,cw2].join("");
			gsTrackEvent("第三步",housearea);
		}else if(housetype == "4室1厅"){
			var kt = $("#js_kt").val();
			var ct = $("#js_ct").val();
			var zw = $("#js_zw").val();
			var cw1 = $("#js_cw1").val();
			var cw2 = $("#js_cw2").val();
			var cw3 = $("#js_cw3").val();
			var housearea = [kt,ct,zw,cw1,cw2,cw3].join("");
			gsTrackEvent("第三步",housearea);
		}else if(housetype == "5室1厅"){
			var kt = $("#js_kt").val();
			var ct = $("#js_ct").val();
			var zw = $("#js_zw").val();
			var cw1 = $("#js_cw1").val();
			var cw2 = $("#js_cw2").val();
			var cw3 = $("#js_cw3").val();
			var cw4 = $("#js_cw4").val();
			var housearea = [kt,ct,zw,cw1,cw2,cw3,cw4].join("");
			gsTrackEvent("第三步",housearea);
		}
	});
	//guoshuang Monitor code end
  
  
  
  

  $('#nr_ac').find('.nr_ac_home_diy').find('.return').on('click', function() {

    if( $(this).hasClass("oreturn") ){
		$now = $(this).parent().parent().removeClass('active').prev().prev().addClass('active');
	}
	else {
		$now = $(this).parent().parent().removeClass('active').prev().addClass('active');
	}

    if ($now.index()) {
      $now.parent('.main').css('background-image', 'url(/cn/images/nr_ac_home_diy_bg_empty.jpg)');
    } else {
      $now.parent('.main').css('background-image', 'url('+$now.parent('.main').attr('data-background')+')');
    }

  });

  $('#nr_ac').find('.nr_ac_home_diy').find('.selector').on('click', function(){
    if($(this).find('.normal').length > 0){
      $(this).find('.contents-sub-selector').toggleClass('checked').siblings('.contents-image').toggleClass('active');
	  if($(this).siblings('.selector:gt(0)').find('.contents-sub-selector').attr("class")==null){
	       $(this).siblings('.selector').find('.contents-sub-selector').removeClass('checked');
	  }
    } else {
     if ($(this).siblings('.selector').length > 1) {
        $(this).find('.contents-sub-selector').addClass('checked');
        $(this).siblings('.selector:gt(0)').find('.contents-sub-selector').removeClass('checked');
      } else {
        $(this).find('.contents-sub-selector').addClass('checked').parent().siblings().find('.contents-sub-selector').removeClass('checked');
      }
	  if($(this).siblings('.selector:gt(0)').find('.contents-sub-selector').attr("class")==null){
	      $(this).siblings('.selector').find('.contents-sub-selector').removeClass('checked');
	  }
    }
  });

  $('#nr_ac').find('.nr_ac_home_diy').find('.accessories').find('.contents-image').on('mouseenter', function(){
    $(this).siblings('.tips').fadeIn('fast');
  })
  $('#nr_ac').find('.nr_ac_home_diy').find('.accessories').find('.selector').on('mouseleave', function() {
    $(this).find('.tips').fadeOut('fast');
  });

  $('#nr_ac').find('.nr_ac_home_diy').find('.ctrlSetter').find('div').on('click', function(){
    if ($(this).hasClass('active')) {
      if ($(this).siblings().hasClass('active')) {
        $(this).removeClass('active');
      }
    } else {
     $(this).addClass('active');
    }
  });

  $('#nr_ac').find('.nr_ac_home_diy').find('.ctrlSetter').eq(0).find('.line-ctrl')
  .on('mouseenter', function(e){
    var top = e.pageY - 430 - e.offsetY;
    $('#nr_ac').find('.line-tips').css('top', top).delay(500).fadeIn('fast');
  })
  .on('mouseleave', function(){
    $('#nr_ac').find('.line-tips').fadeOut('fast');
  })

  $('#nr_ac').find('.nr_ac_home_diy').find('.ctrlSetter').eq(0).find('.remote-ctrl')
  .on('mouseenter', function(e){
    var top = e.pageY - 430 - e.offsetY;
    $('#nr_ac').find('.remote-tips').css('top', top).delay(500).fadeIn('fast');
  })
  .on('mouseleave', function(){
    $('#nr_ac').find('.remote-tips').fadeOut('fast');
  })
  //zhangmingxuan add end
})
$(function() {

  /**
   * params
   */

  var config = {

      max : 70,
      value : 0

  }

  /**
   * cache
   */
  
  var $areaSetter = $('#jsAreaForm').find('.areaSetter');

  /**
   * event binding
   */

  $('#finalNext').on('click', function() {
	//$(this).parent().parent().removeClass('active').siblings().addClass('active');

    //$('#nr_ac').find('.main').css('background-image', 'url(images/nr_ac_home_diy_switch_3.jpg)');

   // $('#nr_ac').find('.final').find('.nav').find('li').eq(0).trigger('click');	
	
	buildplan($(this));

	//guoshuang Monitor code start
	var peijian = $(".accessories .accessories-contents .selector").find(".checked").attr("data");
	var dianya = $(".voltage .voltage-contents .selector").find(".checked").attr("data");
	var needchoose = [peijian,dianya].join("");
	gsTrackEvent("第四步",needchoose);
	//guoshuang Monitor code end
   

  });
  $('#nr_ac').find('.final').find('.nav').on('click', 'li', function() {
    // view
    $(this).addClass('active').siblings().removeClass('active');

    var index = $(this).index();
    $('#nr_ac').find('.final').find('.content').find('ul').not(index).hide();
    $('#nr_ac').find('.final').find('.content').find('ul').eq(index).show();

    if($(this).index() === 1){
      $('#plan_productlist2').jScrollPane({showArrows: true});
      $('#plan_productlist2').parent().siblings().find('.scroll').jScrollPane({showArrows: true});
    }

    if($(this).html()=='分体式'){
        $('.download').attr('onclick','exportPlans(1)')
    }else{
        $('.download').attr('onclick','exportPlans(2)')
    }
  });

  //$('#nr_ac').find('.final').find('.return').on('click', function() {
  //  $(this).parent().parent().removeClass('active').siblings().addClass('active');
   // $('#nr_ac').find('.main').css('background-image', 'url('+$('#nr_ac').find('.main').attr('data-background')+')');
  //});

  /**
   * page init
   */
  
  $('#nr_ac').find('input').val(config.value);

  UISlider($areaSetter.find('.slider'), $areaSetter.find('input'), config);

  $('#jsAreaForm').find('.section').jScrollPane({showArrows: true});

  $('#nr_ac').find('.main').css('background-image', 'url('+$('#nr_ac').find('.main').attr('data-background')+')');

  //在线预约
   $('#nr_ac').find('.nr_ac_home_diy').find('.join').on('click', function() {
    $('.kt_floatbox2').show();
	gsTrackEvent("在线预约");
  });

  $(document).on('click', '.js_kt_close', function() {
    $('.kt_floatbox2').hide();
  });

  /**
   * toolKit
   */
  
    /**
     * Enable slider
     * @param {jQuery Object} $slider
     * @param {jQuery Object} $input
     * @param {Object}        config
     */
      function UISlider($slider, $input, config){

        // init the slider
        $slider.slider({
          orientation: "horizontal",
          range: "min",
          max: config.max,
          value: config.value,
          slide: refreshSwatch,
          change: refreshSwatch
        });

        // update input value
        function refreshSwatch(){
          var val = $(this).slider('value');
          $(this).prev().find('input').val(val);
        }

        $input
        .keypress(function (event) {
          // only number valid
            var eventObj = event || e;
            var keyCode = eventObj.keyCode || eventObj.which;
            if ((keyCode >= 48 && keyCode <= 57)){
              return true;
            }
            else {
              return false;
            }
        })
        .keyup(function() {
          // input to change slider
          var val = $(this).val();
          $(this).parent().siblings('.slider').slider('value', val);
        })
        .focus(function () {
          // disabled the imeMode
            this.style.imeMode = 'disabled';
        })
        .bind("paste", function () {
          // filter the paste
            var clipboard = window.clipboardData.getData("Text");
            if (/^\d+$/.test(clipboard)) {
              return true;
            }    
            else {
              return false;
            }
        })

      }
	  
	  

});
var jsonData = "";
function buildplan(obj){
	
	// start ************测试上生产的时候这两个参数为空*********
	var checkboxValue = "";
	var personNum = "";
	// end
	var panel=""; var power="";var wifi="0";//WiFi为0，则没选择WiFi，1为选择wifi
	//面板
	$(".accessories-contents").find("li").each(function(i){
	   if(i==0){//第一个li
	     $(this).find("div").each(function(){
		    if($(this).hasClass("checked")){
			   wifi="1";
			}
		 });
	   }else{
	     $(this).find("div").each(function(){
		    if($(this).hasClass("checked")){
		     panel=$(this).attr("data");
	        }
		 });
	   }
	});
	//电压
	$(".voltage-contents").find("div").each(function(){
	   if($(this).hasClass("checked")){
		 power=$(this).attr("data");
	   }
	});	
	if(houseType == "两室两厅"){
		//获取面积
		var kt = $("#js_kt").val();
		var ct = $("#js_ct").val();
		var zw = $("#js_zw").val();
		var cw = $("#js_cw").val();
		//zhangmingxuan add start
		var ktSetter='';var ctSetter='';var zwSetter='';var cwSetter='';
		$("#js_ktSetter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(ktSetter.length>0){
			     ktSetter+="|"+$(this).attr("data");
			   }else{
			     ktSetter+=$(this).attr("data");
			   }
			}
		});
		$("#js_ctSetter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(ctSetter.length>0){
			     ctSetter+="|"+$(this).attr("data");
			   }else{
			     ctSetter+=$(this).attr("data");
			   }
			}
		});
		$("#js_zwSetter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(zwSetter.length>0){
			     zwSetter+="|"+$(this).attr("data");
			   }else{
			     zwSetter+=$(this).attr("data");
			   }
			}
		});
		$("#js_cwSetter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(cwSetter.length>0){
			     cwSetter+="|"+$(this).attr("data");
			   }else{
			     cwSetter+=$(this).attr("data");
			   }
			}
		});
		//zhangmingxuan add end 
		var roomInfo = 'ck_kt1,ck_ct1,ck_ws0,ck_ws1';
		var roomstr = "ck_kt1:'"+kt+","+ktSetter+"',ck_ct1:'"+ct+","+ctSetter+"',ck_ws0:'"+zw+","+zwSetter+"',ck_ws1:'"+cw+","+cwSetter+"'";
		
		var roomType = "";
		var labelSize = $(".jspPane .areaSetter .input label").length;
		console.log("labelSize =" +labelSize);
		 $(".jspPane .areaSetter .input label").each(function(){
			 roomType += $(this).html() +",";
		  });
		var roomsType = roomType.substring(0,roomType.length-1);
		var housesType = $(".title").html();
		jQuery.cookie("houseType",housesType);
		jQuery.cookie("roomInfo",roomInfo);
		jQuery.cookie("ck_kt1",kt+","+ktSetter);
		jQuery.cookie("ck_ct1",ct+","+ctSetter);
		jQuery.cookie("ck_ws0",zw+","+zwSetter);
		jQuery.cookie("ck_ws1",cw+","+cwSetter);
		jQuery.cookie("personNum","1");
		jQuery.cookie("checkboxValue","");
		jQuery.cookie("roomType",roomsType);
		jQuery.cookie("areaChinaName","");
		jQuery.cookie("cityChineseName","");
		jQuery.cookie("areaChineseName","");
		jQuery.cookie("planNum","1");
		jQuery.cookie("pannel",panel);
		jQuery.cookie("power",power);
		jQuery.cookie("wifi",wifi);
		
		//拼json串
		jsonData = "{houseType:'"+ houseType+"',roomInfo:'"+roomInfo+"',"+roomstr+",checkboxValue:'"+ checkboxValue +"',personNum:'"+ personNum +"',roomType:'客厅,餐厅,主卧,次卧',uName:'',uAddress:'',uTel:'',uEmail:'',uMemo:'',areaChinaName:'山东',cityChineseName:'青岛',areaChineseName:'市北区',panel:'"+panel+"',power:'"+power+"',wifi:'"+wifi+"'}";
	}else if(houseType == "三室一厅"){
		//获取面积
		var kt = $("#js_kt").val();
		var zw = $("#js_zw").val();
		var cw1 = $("#js_cw1").val();
		var cw2 = $("#js_cw2").val();
		//zhangmingxuan add start 
		var ktSetter='';var zwSetter='';var cw1Setter='';var cw2Setter='';
		$("#js_ktSetter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(ktSetter.length>0){
			     ktSetter+="|"+$(this).attr("data");
			   }else{
			     ktSetter+=$(this).attr("data");
			   }
			}
		});
		$("#js_cw1Setter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(cw1Setter.length>0){
			     cw1Setter+="|"+$(this).attr("data");
			   }else{
			     cw1Setter+=$(this).attr("data");
			   }
			}
		});
		$("#js_zwSetter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(zwSetter.length>0){
			     zwSetter+="|"+$(this).attr("data");
			   }else{
			     zwSetter+=$(this).attr("data");
			   }
			}
		});
		$("#js_cw2Setter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(cw2Setter.length>0){
			     cw2Setter+="|"+$(this).attr("data");
			   }else{
			     cw2Setter+=$(this).attr("data");
			   }
			}
		});
		//zhangmingxuan add end
		var roomInfo = 'ck_kt1,ck_ws0,ck_ws1,ck_ws2';
		var roomstr = "ck_kt1:'"+kt+","+ktSetter+"',ck_ws0:'"+zw+","+zwSetter+"',ck_ws1:'"+cw1+","+cw1Setter+"',ck_ws2:'"+cw2+","+cw2Setter+"'";
		
		var roomType = "";
		var labelSize = $(".jspPane .areaSetter .input label").length;
		console.log("labelSize =" +labelSize);
		 $(".jspPane .areaSetter .input label").each(function(){
			 roomType += $(this).html() +",";
		  });
		var roomsType = roomType.substring(0,roomType.length-1);
		var housesType = $(".title").html();
		jQuery.cookie("houseType",housesType);
		jQuery.cookie("roomInfo",roomInfo);
		jQuery.cookie("ck_kt1",kt+","+ktSetter);
		jQuery.cookie("ck_ws0",zw+","+zwSetter);
		jQuery.cookie("ck_ws1",cw1+","+cw1Setter);
		jQuery.cookie("ck_ws2",cw2+","+cw2Setter);
		jQuery.cookie("personNum","1");
		jQuery.cookie("checkboxValue","");
		jQuery.cookie("roomType",roomsType);
		jQuery.cookie("areaChinaName","");
		jQuery.cookie("cityChineseName","");
		jQuery.cookie("areaChineseName","");
		jQuery.cookie("planNum","1");
		jQuery.cookie("pannel",panel);
		jQuery.cookie("power",power);
		jQuery.cookie("wifi",wifi);
		
		//拼json串
		jsonData = "{houseType:'"+ houseType+"',roomInfo:'"+roomInfo+"',"+roomstr+",checkboxValue:'"+ checkboxValue +"',personNum:'"+ personNum +"',roomType:'客厅,主卧,次卧1,次卧2',uName:'',uAddress:'',uTel:'',uEmail:'',uMemo:'',areaChinaName:'山东',cityChineseName:'青岛',areaChineseName:'市北区',panel:'"+panel+"',power:'"+power+"',wifi:'"+wifi+"'}";
	
	}else if(houseType == "三室两厅"){
		//获取面积
		var kt = $("#js_kt").val();
		var ct = $("#js_ct").val();
		var zw = $("#js_zw").val();
		var cw1 = $("#js_cw1").val();
		var cw2 = $("#js_cw2").val();
		//zhangmingxuan add start
		var ktSetter='';var zwSetter='';var cw1Setter='';var cw2Setter='';var ctSetter='';
		$("#js_ktSetter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(ktSetter.length>0){
			     ktSetter+="|"+$(this).attr("data");
			   }else{
			     ktSetter+=$(this).attr("data");
			   }
			}
		});
		$("#js_cw1Setter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(cw1Setter.length>0){
			     cw1Setter+="|"+$(this).attr("data");
			   }else{
			     cw1Setter+=$(this).attr("data");
			   }
			}
		});
		$("#js_zwSetter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(zwSetter.length>0){
			     zwSetter+="|"+$(this).attr("data");
			   }else{
			     zwSetter+=$(this).attr("data");
			   }
			}
		});
		$("#js_ctSetter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(ctSetter.length>0){
			     ctSetter+="|"+$(this).attr("data");
			   }else{
			     ctSetter+=$(this).attr("data");
			   }
			}
		});
		$("#js_cw2Setter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(cw2Setter.length>0){
			     cw2Setter+="|"+$(this).attr("data");
			   }else{
			     cw2Setter+=$(this).attr("data");
			   }
			}
		});
		//zhangmingxuan add end
		var roomInfo = 'ck_kt1,ck_ct1,ck_ws0,ck_ws1,ck_ws2';
		var roomstr = "ck_kt1:'"+kt+","+ktSetter+"',ck_ct1:'"+ct+","+ctSetter+"',ck_ws0:'"+zw+","+zwSetter+"',ck_ws1:'"+cw1+","+cw1Setter+"',ck_ws2:'"+cw2+","+cw2Setter+"'";
		
		var roomType = "";
		var labelSize = $(".jspPane .areaSetter .input label").length;
		console.log("labelSize =" +labelSize);
		 $(".jspPane .areaSetter .input label").each(function(){
			 roomType += $(this).html() +",";
		  });
		var roomsType = roomType.substring(0,roomType.length-1);
		var housesType = $(".title").html();
		jQuery.cookie("houseType",housesType);
		jQuery.cookie("roomInfo",roomInfo);
		jQuery.cookie("ck_kt1",kt+","+ktSetter);
		jQuery.cookie("ck_ct1",ct+","+ctSetter);
		jQuery.cookie("ck_ws0",zw+","+zwSetter);
		jQuery.cookie("ck_ws1",cw1+","+cw1Setter);
		jQuery.cookie("ck_ws2",cw2+","+cw2Setter);
		jQuery.cookie("personNum","1");
		jQuery.cookie("checkboxValue","");
		jQuery.cookie("roomType",roomsType);
		jQuery.cookie("areaChinaName","");
		jQuery.cookie("cityChineseName","");
		jQuery.cookie("areaChineseName","");
		jQuery.cookie("planNum","1");
		jQuery.cookie("pannel",panel);
		jQuery.cookie("power",power);
		jQuery.cookie("wifi",wifi);
		
		//拼json串
		jsonData = "{houseType:'"+ houseType+"',roomInfo:'"+roomInfo+"',"+roomstr+",checkboxValue:'"+ checkboxValue +"',personNum:'"+ personNum +"',roomType:'客厅,餐厅,主卧,次卧1,次卧2',uName:'',uAddress:'',uTel:'',uEmail:'',uMemo:'',areaChinaName:'山东',cityChineseName:'青岛',areaChineseName:'市北区',panel:'"+panel+"',power:'"+power+"',wifi:'"+wifi+"'}";
	}else if(houseType == "四室两厅"){
		//获取面积
		var kt = $("#js_kt").val();
		var ct = $("#js_ct").val();
		var zw = $("#js_zw").val();
		var cw1 = $("#js_cw1").val();
		var cw2 = $("#js_cw2").val();
		var cw3 = $("#js_cw3").val();
		var ktSetter='';var ctSetter='';var zwSetter='';var cw1Setter='';var cw2Setter='';var cw3Setter='';
		$("#js_ktSetter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(ktSetter.length>0){
			     ktSetter+="|"+$(this).attr("data");
			   }else{
			     ktSetter+=$(this).attr("data");
			   }
			}
		});
		$("#js_ctSetter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(ctSetter.length>0){
			     ctSetter+="|"+$(this).attr("data");
			   }else{
			     ctSetter+=$(this).attr("data");
			   }
			}
		});
		$("#js_zwSetter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(zwSetter.length>0){
			     zwSetter+="|"+$(this).attr("data");
			   }else{
			     zwSetter+=$(this).attr("data");
			   }
			}
		});
		$("#js_cw1Setter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(cw1Setter.length>0){
			     cw1Setter+="|"+$(this).attr("data");
			   }else{
			     cw1Setter+=$(this).attr("data");
			   }
			}
		});
		$("#js_cw2Setter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(cw2Setter.length>0){
			     cw2Setter+="|"+$(this).attr("data");
			   }else{
			     cw2Setter+=$(this).attr("data");
			   }
			}
		});
		$("#js_cw3Setter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(cw3Setter.length>0){
			     cw3Setter+="|"+$(this).attr("data");
			   }else{
			     cw3Setter+=$(this).attr("data");
			   }
			}
		});
		var roomInfo = 'ck_kt1,ck_ct1,ck_ws0,ck_ws1,ck_ws2,ck_ws3';
		var roomstr = "ck_kt1:'"+kt+","+ktSetter+"',ck_ct1:'"+ct+","+ctSetter+"',ck_ws0:'"+zw+","+zwSetter+"',ck_ws1:'"+cw1+","+cw1Setter+"',ck_ws2:'"+cw2+","+cw2Setter+"',ck_ws3:'"+cw3+","+cw3Setter+"'";
		
		var roomType = "";
		var labelSize = $(".jspPane .areaSetter .input label").length;
		console.log("labelSize =" +labelSize);
		 $(".jspPane .areaSetter .input label").each(function(){
			 roomType += $(this).html() +",";
		  });
		var roomsType = roomType.substring(0,roomType.length-1);
		var housesType = $(".title").html();
		jQuery.cookie("houseType",housesType);
		jQuery.cookie("roomInfo",roomInfo);
		var ktSetter='';var ctSetter='';var zwSetter='';var cw1Setter='';var cw2Setter='';var cw3Setter='';
		jQuery.cookie("ck_kt1",kt+","+ktSetter);
		jQuery.cookie("ck_ct1",ct+","+ctSetter);
		jQuery.cookie("ck_ws0",zw+","+zwSetter);
		jQuery.cookie("ck_ws1",cw1+","+cw1Setter);
		jQuery.cookie("ck_ws2",cw2+","+cw2Setter);
		jQuery.cookie("ck_ws3",cw3+","+cw3Setter);
		jQuery.cookie("personNum","1");
		jQuery.cookie("checkboxValue","");
		jQuery.cookie("roomType",roomsType);
		jQuery.cookie("areaChinaName","");
		jQuery.cookie("cityChineseName","");
		jQuery.cookie("areaChineseName","");
		jQuery.cookie("planNum","1");
		jQuery.cookie("pannel",panel);
		jQuery.cookie("power",power);
		jQuery.cookie("wifi",wifi);
		//拼json串
		jsonData = "{houseType:'"+ houseType+"',roomInfo:'"+roomInfo+"',"+roomstr+",checkboxValue:'"+ checkboxValue +"',personNum:'"+ personNum +"',roomType:'客厅,餐厅,主卧,次卧1,次卧2,次卧3',uName:'',uAddress:'',uTel:'',uEmail:'',uMemo:'',areaChinaName:'山东',cityChineseName:'青岛',areaChineseName:'市北区',panel:'"+panel+"',power:'"+power+"',wifi:'"+wifi+"'}";
	}else if(houseType == "五室两厅"){
		//获取面积
		var kt = $("#js_kt").val();
		var ct = $("#js_ct").val();
		var zw = $("#js_zw").val();
		var cw1 = $("#js_cw1").val();
		var cw2 = $("#js_cw2").val();
		var cw3 = $("#js_cw3").val();
		var cw4 = $("#js_cw4").val();
		
		var ktSetter='';var ctSetter='';var zwSetter='';var cw1Setter='';var cw2Setter='';var cw3Setter='';var cw4Setter='';
		$("#js_ktSetter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(ktSetter.length>0){
			     ktSetter+="|"+$(this).attr("data");
			   }else{
			     ktSetter+=$(this).attr("data");
			   }
			}
		});
		$("#js_ctSetter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(ctSetter.length>0){
			     ctSetter+="|"+$(this).attr("data");
			   }else{
			     ctSetter+=$(this).attr("data");
			   }
			}
		});
		$("#js_zwSetter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(zwSetter.length>0){
			     zwSetter+="|"+$(this).attr("data");
			   }else{
			     zwSetter+=$(this).attr("data");
			   }
			}
		});
		$("#js_cw1Setter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(cw1Setter.length>0){
			     cw1Setter+="|"+$(this).attr("data");
			   }else{
			     cw1Setter+=$(this).attr("data");
			   }
			}
		});
		$("#js_cw2Setter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(cw2Setter.length>0){
			     cw2Setter+="|"+$(this).attr("data");
			   }else{
			     cw2Setter+=$(this).attr("data");
			   }
			}
		});
		$("#js_cw3Setter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(cw3Setter.length>0){
			     cw3Setter+="|"+$(this).attr("data");
			   }else{
			     cw3Setter+=$(this).attr("data");
			   }
			}
		});
		$("#js_cw4Setter").find('div').each(function(){
		    if($(this).hasClass("active")){
			   if(cw4Setter.length>0){
			     cw4Setter+="|"+$(this).attr("data");
			   }else{
			     cw4Setter+=$(this).attr("data");
			   }
			}
		});
		var roomInfo = 'ck_kt1,ck_ct1,ck_ws0,ck_ws1,ck_ws2,ck_ws3,ck_ws4';
		
		var roomstr = "ck_kt1:'"+kt+","+ktSetter+"',ck_ct1:'"+ct+","+ctSetter+"',ck_ws0:'"+zw+","+zwSetter+"',ck_ws1:'"+cw1+","+cw1Setter+"',ck_ws2:'"+cw2+","+cw2Setter+"',ck_ws3:'"+cw3+","+cw3Setter+"',ck_ws4:'"+cw4+","+cw4Setter+"'";
		
		var roomType = "";
		var labelSize = $(".jspPane .areaSetter .input label").length;
		//console.log("labelSize =" +labelSize);
		 $(".jspPane .areaSetter .input label").each(function(){
			 roomType += $(this).html() +",";
		  });
		var roomsType = roomType.substring(0,roomType.length-1);
		var housesType = $(".title").html();
		jQuery.cookie("houseType",housesType);
		jQuery.cookie("roomInfo",roomInfo);
		var ktSetter='';var ctSetter='';var zwSetter='';var cw1Setter='';var cw2Setter='';var cw3Setter='';var cw4Setter='';
		jQuery.cookie("ck_kt1",kt+","+ktSetter);
		jQuery.cookie("ck_ct1",ct+","+ctSetter);
		jQuery.cookie("ck_ws0",zw+","+zwSetter);
		jQuery.cookie("ck_ws1",cw1+","+cw1Setter);
		jQuery.cookie("ck_ws2",cw2+","+cw2Setter);
		jQuery.cookie("ck_ws3",cw3+","+cw3Setter);
		jQuery.cookie("ck_ws4",cw4+","+cw4Setter);
		jQuery.cookie("personNum","1");
		jQuery.cookie("checkboxValue","");
		jQuery.cookie("roomType",roomsType);
		jQuery.cookie("areaChinaName","");
		jQuery.cookie("cityChineseName","");
		jQuery.cookie("areaChineseName","");
		jQuery.cookie("planNum","1");
		jQuery.cookie("pannel",panel);
		jQuery.cookie("power",power);
		jQuery.cookie("wifi",wifi);
		//拼json串
		jsonData = "{houseType:'"+ houseType+"',roomInfo:'"+roomInfo+"',"+roomstr+",checkboxValue:'"+ checkboxValue +"',personNum:'"+ personNum +"',roomType:'客厅,餐厅,主卧,次卧1,次卧2,次卧3,次卧4',uName:'',uAddress:'',uTel:'',uEmail:'',uMemo:'',areaChinaName:'山东',cityChineseName:'青岛',areaChineseName:'市北区',panel:'"+panel+"',power:'"+power+"',wifi:'"+wifi+"'}";
	}
		
		$.ajax( {
		url : "/HaierFramework/haier/aircondition/calculateAirPlan.do",
		type : "POST",
		dataType : "json",
		async : false,
		data : {
			jsonStr : jsonData
		},
		success : function(data) {
			if (data.isSuccess == true) {					
				var planInfoList1=data.planInfoList1;//一拖一 
				var planInfoList2=data.planInfoList2;//正常方案
									
				
				if(typeof(planInfoList1)!="undefined" && planInfoList1.length>0 && typeof(planInfoList2)!="undefined" && planInfoList2.length>0){//两套方案
					drawFenTi(data);
					drawDuoLian(data);
					$('#plan_desc').text('根据您的需求，我们为您提供了如下两套设计方案：');
				}else if(typeof(planInfoList1)!="undefined" && planInfoList1.length>0){
					drawFenTi(data);
					$('#js_plan_2').click();
					$('#js_plan_1').hide();
					//在线预约
					$('#plan_1').find('input').attr("checked",true);
					$('#plan_2').hide();
					$('#plan_2').next().hide();
					$('#plan_desc').text('根据您的需求，我们为您提供了如下设计方案：');
				}else if(typeof(planInfoList2)!="undefined" && planInfoList2.length>0){
					drawDuoLian(data);
					$('#js_plan_1').click();
					$('#js_plan_2').hide();
					//在线预约
					$('#plan_2').find('input').attr("checked",true);
					$('#plan_1').hide();
					$('#plan_1').next().hide();
					$('#plan_desc').text('根据您的需求，我们为您提供了如下设计方案：');
				}

				 //obj.parent().parent().removeClass('active').siblings().addClass('active');

          //$('#nr_ac').find('.main').eq(0).css('background-image', 'url(images/nr_ac_home_diy_switch_3.jpg)');

           $('#nr_ac').find('.final').find('.nav').find('li').eq(0).trigger('click');
      }else{
        //alert(data.resultMsg);
      }
    }
  });

}
//省份改变城市改变
function changeProvince(){
	var h_province = jQuery("#js_haier_province").val();
	if(h_province!=""){
		jQuery.ajax({
					type: "post",
					url: "/HaierFramework/haier/league/queryProvinceInfo.do?",
					data:"province="+h_province,
					dataType: "json",
					success: function (data) {
						if(data.isSuccess){
							jQuery("#js_haier_city").html("");
							var provis = eval(data.provinces);
							for(var i=0;i<provis.length;i++){
									jQuery("#js_haier_city").append("<option value=\""+provis[i]+"\">"+provis[i]+"</option>");
							}
						//	changeCity();
						}else{
							alert("获取城市信息失败");
						}
					},
					error:function(){
					}
				});
	}else{
		jQuery("#js_haier_city").html("<option value=\"\">请选择城市</option>");
		alert("请选择省份");
	}
}

//绘制一拖一方案  分体式
function drawFenTi(data){
  $('#plan2_areaSize').text(data.totalArea1);
  $('#plan2_houseTye').text(data.houseType);
  $('#plan2_njNum').text(data.totalNjs1);
  $('#plan2_wjNum').text(data.totalNjs1);//分体式 没有外机 外机数=内机数
  $('#plan2_fh').text(data.totalPower1);
  $('#plan2_price').text(data.totalPriceStr1);
  var planInfoList1=data.planInfoList1;
  //默认背景图
   $("#fentiImg").attr("src","/cn/images/LEKA36BC6.png");
  /*if(planInfoList1.length>0){
    for(var i=0;i<planInfoList1.length;i++){
      if(planInfoList1[i].wjpower!=""){
          var docpuburl=planInfoList1[i].docpuburl;
        var proimg=planInfoList1[i].proimg;
        var imgurl=docpuburl.substring(0,docpuburl.lastIndexOf('/')+1);
        var proimgs=proimg.split('.');
        var finalImg=imgurl+proimgs[0]+"_350."+proimgs[1];
       $("#fentiImg").attr("src",finalImg);

    }
    }
  }*/
  var planhtml1=drawPlan(planInfoList1);
  var productHtml1=drawProduct(planInfoList1,1,data.totalNjs1);
  $('#plan2_list').empty();
  //增加列表显示主机数目
  var htmlOfType2="";
  var numlOfType2=0;

  if(planInfoList1.length>0){
		for(var i=0;i<planInfoList1.length;i++){
			var typeid=planInfoList1[i].typeid;
			if(typeid==1){
				numlOfType2++;
			}
		}
		htmlOfType2='<tr><td class="icon"><img src="/cn/images/nr_ac_home_diy_content_icon_sitting.png"></td><td>主机:220v</td><td>（*'+numlOfType2+'台）</td></tr>'
	}
	planhtml1+=htmlOfType2;
  $('#plan2_list').html(planhtml1);
  //$('#plan_productlist2').empty();
  //重新进来进行加载处理 start
    $('#plan_productlist2').removeAttr("style");
    var pStr=$('#plan_productlist2').find('p').eq(0);
	var imgStr=$('#plan_productlist2').find('img').eq(0);
	var parentLi=$('#plan_productlist2').parent();
	$('#plan_productlist2').remove();
	parentLi.find("h3").after('<div class="scroll" ID="plan_productlist2"></div>');
	//$('#plan_productlist1').html('');
	$('#plan_productlist2').append(pStr);
	$('#plan_productlist2').append(imgStr);
  //重新进来进行加载处理 end
  $('#plan_productlist2').append(productHtml1);
  $('#plan_productlist2').jScrollPane({showArrows: true});
  $('#plan_productlist2').parent().siblings().find('.scroll').jScrollPane({showArrows: true});

}
//绘制正常方案  多联式
function drawDuoLian(data){
  $('#plan1_areaSize').text(data.totalArea2);
  $('#plan1_houseTye').text(data.houseType);
  $('#plan1_njNum').text(data.totalNjs2);
  $('#plan1_wjNum').text(data.totalWjs2);
  $('#plan1_fh').text(data.totalPower2);
  $('#plan1_price').text(data.totalPriceStr2);
  var planInfoList2=data.planInfoList2;
  if(planInfoList2.length>0){
    for(var j=0;j<planInfoList2.length;j++){
      if(planInfoList2[j].wjpower!=""){
      var docpuburl=planInfoList2[j].docpuburl;
      var proimg=planInfoList2[j].proimg;
      var imgurl=docpuburl.substring(0,docpuburl.lastIndexOf('/')+1);
      var proimgs=proimg.split('.');
      var finalImg=imgurl+proimgs[0]+"_350."+proimgs[1];
      	  	$("#duolianImg").attr("src",finalImg);

    }
    }
  }
  if(!$("#duolianImg").attr("src")){
  	  $("#duolianImg").attr("src","/cn/images/LEKA36BC6.png");
  }

  
   //planInfoList2 = myArray_Unique(planInfoList2);
  
  var planhtml2=drawPlan(planInfoList2);
  var productHtml2=drawProduct(planInfoList2,2,data.totalWjs2);
  $('#plan1_list').empty();
  //增加列表显示主机数目
  var htmlOfType2="";
  
 
  
  if(planInfoList2.length>0){
		for(var i=0;i<planInfoList2.length;i++){
			var typeid=planInfoList2[i].typeid;
			var typename= planInfoList2[i].typename;
			var area=planInfoList2[i].area;
			var dwfh=planInfoList2[i].dwfh;
			var sbxh=planInfoList2[i].sbxh;
			var sbsl=planInfoList2[i].sbsl;
			var mkmc=planInfoList2[i].mkmc;
			var wjPower =planInfoList2[i].wjpower;
			if(typeid==2&&typename.indexOf("主机")>=0){
				htmlOfType2 += '<tr>';
				htmlOfType2 += '<td class="icon"><img src="/cn/images/nr_ac_home_diy_content_icon_sitting.png"></td>';
				htmlOfType2 += '<td>'+ typename +':'+jQuery.cookie("power")+'</td>';
				if(sbxh.length>16){
				  htmlOfType2 += '<td title="'+sbxh+'">'+ sbxh.substring(0,16) +'</td>';
				}else{
				  htmlOfType2 += '<td title="'+sbxh+'">'+ sbxh +'</td>';
				}
				htmlOfType2 += '<td>（*'+sbsl+'台）</td></tr>';
			}
		}
	}
	planhtml2+=htmlOfType2;
  $('#plan1_list').html(planhtml2);
  //$('#plan_productlist1').empty();
  //重新进来进行加载处理 start
    $('#plan_productlist1').removeAttr("style");
    var pStr=$('#plan_productlist1').find('p').eq(0);
	var imgStr=$('#plan_productlist1').find('img').eq(0);
	var parentLi=$('#plan_productlist1').parent();
	$('#plan_productlist1').remove();
	parentLi.find("h3").after('<div class="scroll" ID="plan_productlist1"></div>');
	//$('#plan_productlist1').html('');
	$('#plan_productlist1').append(pStr);
	$('#plan_productlist1').append(imgStr);
  //重新进来进行加载处理 end
  $('#plan_productlist1').append(productHtml2);
  $('#plan_productlist1').jScrollPane({showArrows: true});
  $('#plan_productlist1').parent().siblings().find('.scroll').jScrollPane({showArrows: true});
}


function drawPlan(planInfoList){
	var html = "";
	if(planInfoList.length>0){
		for(var i=0;i<planInfoList.length;i++){
			var typeid=planInfoList[i].typeid;
			var typename= planInfoList[i].typename;
			var area=planInfoList[i].area;
			var dwfh=planInfoList[i].dwfh;
			var sbxh=planInfoList[i].sbxh;
			var sbsl=planInfoList[i].sbsl;
			var mkmc=planInfoList[i].mkmc;
			if(typeid==1){
				html += '<tr>';
				html += '<td class="icon"><img src="/cn/images/nr_ac_home_diy_content_icon_sitting.png"></td>';
				html += '<td>'+ typename +':'+ area +'㎡</td>';
				if(sbxh.length>16){
				  html += '<td title="'+sbxh+'">'+ sbxh.substring(0,16) +'</td>';
				}else{
				  html += '<td title="'+sbxh+'">'+ sbxh +'</td>';
				}
				html += '</tr>';
			}
		}
	}
	return html;
}
function drawProduct(planInfoList,num,wjnum){
	var productHtml='';
	var wjHtml='';
	var neijimaidian='<li>超薄设计，厚度仅为185mm</li><li>超静音运转，噪音仅21分贝</li><li>快速冷暖，精确控温</li><li>设计灵活，安装便利</li>';
	var waijimaidian='<li>高效节能，远超国家一级能效</li><li>舒适静音，噪音最低45分贝</li><li>直流双转子压缩机，稳定可靠</li><li>超长冷媒配管，安装设计更自由</li>';
	var disticModelNo='';
	//是否有热水功能 热水功能的外机 不需要绘商城购买
	var selectreshui=false;
	var checkboxValue=jQuery.cookie('checkboxValue');
	if(!(!checkboxValue && typeof (checkboxValue) != "undefined" && checkboxValue != 0)){
		if(checkboxValue.indexOf('ktmfrs')!=-1){
			selectreshui=true;
		}
	}
	
	if(planInfoList.length>0){
		for(var i=0;i<planInfoList.length;i++){
			var typeid=planInfoList[i].typeid;
			var typename= planInfoList[i].typename;
			
			var sbxh=planInfoList[i].sbxh;
			var proimg=planInfoList[i].proimg;
			var marklink=planInfoList[i].marklink;
			var detaillink=planInfoList[i].detaillink;
			var docpuburl=planInfoList[i].docpuburl;
			docpuburl=docpuburl.substring(0,docpuburl.lastIndexOf('/')+1);
			//处理图片切的120的
			var proimgs=proimg.split('.');
			proimg=proimgs[0]+"_120."+proimgs[1];
			if(disticModelNo.indexOf(sbxh)==-1){
				disticModelNo+=","+sbxh;
				if(typeid==1){
					//绘制产品展示
					proimg=docpuburl+proimg;
					//modify by 2014-6-24
					if(num == 1){
						//获取产品id
						var puburl=planInfoList[i].docpuburl;
						puburl = puburl.substring(puburl.lastIndexOf('/')+1,puburl.lastIndexOf('.'));
						puburl = puburl.substring(puburl.lastIndexOf('_')+1);
						//读取产品概述
						jQuery.ajax({
							url:"/cn/business/central_air_conditioning/rskt/neiji/ytynj/productdesc.json",
							dataType:"text",
							async:false,
							success:function(data){
								var obj = eval ("(" + data + ")");
								for(var i=0;i<obj.length-1;i++){
									var d = obj[i];
									if(d.id == undefined){
										return;
									}else{
										var productid = d.id;
										var desc = d.prodesc;
										if(productid == puburl){
											var descs = desc.split("|");
											neijimaidian = "";
											for(var j=0;j<descs.length-1;j++){
												neijimaidian += '<li>'+ descs[j] +'</li>';
											}
										}
									}
								}
							}
						});
					}
					
					productHtml += '<dl><dt><img src="'+proimg+'"></dt><dd> <p>'+sbxh+'</p><p>（内置水泵）</p> </dd>  </dl>';
				}
				//else if (typename.indexOf('主机')!=-1){
				//	proimg=docpuburl+proimg;
				//	productHtml += '<dl><dt><img src="'+proimg+'"></dt><dd> <p>'+sbxh+'</p><p>（内置水泵）</p> </dd>  </dl>';
				//}
			}
		}
		//拼接外机
		if(num==1){//分体，先写死
		    wjHtml='<dl><dt><img src="/cn/images/fwyy_waiji.jpg"></dt><dd> <p>RFC80MXS</p><p>(x'+ wjnum+')</p> </dd>  </dl>';
		}else{//多联，取wjpower不为空的一项，取出照片
		    for(var i=0;i<planInfoList.length;i++){
				var wjpower = planInfoList[i].wjpower;
				var proimg=planInfoList[i].proimg;
				var typename=planInfoList[i].typename;
				var docpuburl=planInfoList[i].docpuburl;
				var sbxh=planInfoList[i].sbxh
				docpuburl=docpuburl.substring(0,docpuburl.lastIndexOf('/')+1);
				//处理图片切的120的
				var proimgs=proimg.split('.');
				proimg=proimgs[0]+"_120."+proimgs[1];
				if(""!=wjpower){
				  wjHtml+='<dl><dt><img src="'+docpuburl+proimg+'"></dt><dd> <p>'+typename+':'+sbxh+'</p><p></p> </dd>  </dl>';
				}
			}
		}
	}
	return productHtml+wjHtml;
}
//下载方案
function exportPlans(num){
	//var jsonData3 = getJsonStr(num);
	var _thisjsonData = jsonData.replace("}",",'planNum':'"+num+"'}");
	var form = document.getElementById("myform"+num);
		form.action = "/HaierFramework/haier/aircondition/exportPlans.do?jsonStr="+_thisjsonData;
		document.charset="utf-8";
		form.submit();	
		gsTrackEvent("下载本方案");
}

//从cookie中取值
function getJsonStr(num){
	var returnStr = "";
	//舒适选项
	var checkboxValue = "";
	//房屋类型
	var houseType = "";
	//房间信息
	var roomInfo = "";
	//房屋类型
	var roomType = "";
	//人数
	var personNum = jQuery.cookie("personNum");
	checkboxValue = jQuery.cookie("checkboxValue");
	houseType = jQuery.cookie("houseType");
	roomInfo = jQuery.cookie("roomInfo");
	roomType = jQuery.cookie("roomType");
	var areaChinaName = jQuery.cookie("areaChinaName");
	var cityChineseName = jQuery.cookie("cityChineseName");
	var areaChineseName = jQuery.cookie("areaChineseName");
	//zhangmingxuan add start
	var panel = jQuery.cookie("pannel");
	var power = jQuery.cookie("power");
	//zhangmingxuan add end
	var roomArray = "";
	if(!(!roomInfo && typeof (roomInfo) != "undefined" && roomInfo != 0)){
		roomArray = roomInfo.split(",");
	}
	var roomStr = "";
	if(roomArray.length>0){
		for(var i=0;i<roomArray.length;i++){
			var keyName = roomArray[i];
			var value = jQuery.cookie(keyName);
			roomStr +="," + keyName+":'"+value+"'";
		}
	}
	//在线预约表单信息
	var uName = jQuery("#uName").val()||"";
	var uProvince = jQuery("#js_haier_province").val()||"";
	var uCity = jQuery("#js_haier_city").val()||"";
	var uAddress = jQuery("#uAddress").val()||""; 
	var uTel = jQuery("#uTel").val()||""; 
	var uEmail = jQuery("#uEmail").val()||""; 
	var uMemo = (jQuery("#uMemo").val()||"").toValidJson();
	
	//拼json串
	returnStr += "{houseType:'"+ houseType+"',roomInfo:'"+roomInfo+"'"+roomStr+",checkboxValue:'"+checkboxValue+"',personNum:'"+personNum+"',roomType:'"+roomType+"',uName:'"+uName+"',uProvince:'"+uProvince+"',uCity:'"+uCity+"',uAddress:'"+uAddress+"',uTel:'"+uTel+"',uEmail:'"+uEmail+"',uMemo:'"+uMemo+"',areaChinaName:'"+areaChinaName+"',cityChineseName:'"+cityChineseName+"',areaChineseName:'"+areaChineseName+"',panel:'"+panel+"',power:'"+power+"'";
	
	if(num!=0){
		returnStr +=",planNum:'"+num+"'}";
	}else{
		returnStr +="}";
	}
	
	
	return returnStr;
}
//去除换行符	
String.prototype.toValidJson=function(){
  	v = this;
  	if(v != undefined && v != null && v != ""){
	  	v=v.toString().replace(new RegExp('(["\"])', 'g'),"\\\""); 
		v=v.replace(/[\r\n]/g, "");
	}
	return v;
};
//提交在线预约
function submitOnlineR(){
	//$('#plan_yy').html("");
	//检查表单
	var radioObj=$('#plan_num').find('input:checked');
	if(radioObj.length <= 0){
		alert("请选择方案！");
		$('#plan_num').find('input:eq(0)').focus();
		return false;
	}
	if(jQuery("#uName").val()==""){
		alert("请填写姓名！");
	}
	if(jQuery.trim(jQuery("#uName").val())==""){
		jQuery("#uName").focus();
		return false;
	}
	
	var province = $("#js_haier_province").val();
	if(province == "" || province=="请选择省份/直辖市"){
		alert("所在省份不得为空！");		
		jQuery("#js_haier_province").focus();
		return false;
	}
	
	var city = $("#js_haier_city").val();
	if(city == "" || city=="请选择城市/县"){
		alert("所在城市不得为空！");		
		jQuery("#js_haier_city").focus();
		return false;
	}
	
	if(jQuery("#uTel").val()==""){
		alert("请填写联系电话！");
	}
	
	if(jQuery.trim(jQuery("#uTel").val())==""){
		jQuery("#uTel").focus();
		return false;
	}

	if(jQuery("#uMemo").val().length>200){
		alert("备注的字数不能超过200！");		
		jQuery("#uMemo").focus();
		return false;
	}
	
	

	//$('#plan_yy').attr("src","http://test.haier.com/cn/images/nr_ac_zxyytjz.png");
	//$('#plan_yy').unbind("click",submitOnlineR); 
	$('#plan_yy').hide();
	$('#plan_ing').show();
	//palnOline();
	setTimeout(function(){
		palnOline()
	},1000)
	
	//$('#plan_yy').attr("onclick",'return false');
	
	//$('#plan_yy').attr("onclick",'submitOnlineR()');
	
	gsTrackEvent("预约成功");
}
function closeOnlineBox(){
	$(".js_kt_close").click();
	$('#plan_yy').show();
	$('#plan_ing').hide();
}

function palnOline(){
	//选择的方案
	var numObj=$('#plan_num').find('input:checked');
	var numObjid=$(numObj).parent().attr('id');
	var num=0;
	if(numObjid.indexOf('1')!=-1){
		num=1;
	}else{
		num=2;
	}
	
	//后台交互
	var jsonData2 = getJsonStr(num);		
	$.ajax( {
		url : "/HaierFramework/haier/aircondition/savePlan.do",
		type : "POST",
		dataType : "json",
		async : false,
		data : {
			jsonStr : jsonData2
		},
		success : function(data) {
			//$('#plan_yy').css({'text-decoration':'none','color':'#fff'});
			//$('#plan_yy').removeAttr('onclick');
			if (data.isSuccess == true) {					
				var result = data.subStatus;
				if(result=="empty"){
					alert("请填写姓名及联系电话");
					//closeOnlineBox();
				}
				
				if(result=="success"){
					alert("提交成功！");
					closeOnlineBox();
				}
				if(result=="fail"){
					alert("提交失败，请直接联系海尔！");
					closeOnlineBox();
				}
				
			}else{
				alert(data.resultMsg);
				closeOnlineBox();
			}
			
		}
	});
}

 
 
 function myArray_Unique(myArray)  
{  	
	var haha=myArray;  
	for(var i=0;i<myArray.length;i++)  
	{  
		for(var j=0;j<myArray.length;j++)  
		{  
			var temp =  myArray[i];  
			var typename = temp.typename;
			if((i+j+1)<myArray.length&&typename==myArray[i+j+1].typename) //如果当前元素与后一个元素相等  
			haha.splice(i+j+1,1); //然后就移除下一个元素   
	    }  
	}  
	return haha;  
} 
