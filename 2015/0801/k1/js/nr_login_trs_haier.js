function quanWenSearch(){
	var word = document.getElementById("fe_hd_keywords").value;
	if($.trim(word)!=""){
		word=encodeURIComponent(word);
		//window.location.href="/cn/hdyy/ssjg/?word="+word;
		//window.open("/cn/hdyy/ssjg/?word="+word);
		window.location.href="/was5/web/search?channelid=259041&searchword="+word;
	} 
}

function footSearch(){
	var word = document.getElementById("fe_bt_keywords").value;
	if($.trim(word)!=""){
		word=encodeURIComponent(word);
		//window.location.href="/cn/hdyy/ssjg/?word="+word;
		//window.open("/cn/hdyy/ssjg/?word="+word);
		window.location.href="/was5/web/search?channelid=259041&searchword="+word;
	} 
}
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
       var expires = '';
       if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
           var date;
           if (typeof options.expires == 'number') {
               date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
               date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
           var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
function getcookie(name) {
	var cookie_start = document.cookie.indexOf(name);
	var cookie_end = document.cookie.indexOf(";", cookie_start);
	return cookie_start == -1 ? '' : unescape(document.cookie.substring(cookie_start + name.length + 1, (cookie_end > cookie_start ? cookie_end : document.cookie.length)));
}
function setcookie(cookieName, cookieValue, seconds, path, domain, secure) {
    var expires = new Date();
    expires.setTime(expires.getTime() + seconds);
    document.cookie = escape(cookieName) + '=' + escape(cookieValue)
                                            + (expires ? '; expires=' + expires.toGMTString() : '')
                                            + (path ? '; path=' + path : '/')
                                            + (domain ? '; domain=' + domain : '')
                                            + (secure ? '; secure' : '');
}



//截取字符串，长度为字符为单位
function subHZString(str, len, hasDot) 
{ 
    var newLength = 0; 
    var newStr = ''; 
    var chineseRegex = /[^\x00-\xff]/g; 
    var singleChar = ''; 
    var strLength = str.replace(chineseRegex,'**').length; 
    for(var i = 0;i < strLength;i++) 
    { 
        singleChar = str.charAt(i).toString(); 
        if(singleChar.match(chineseRegex) != null) 
        { 
            newLength += 2; 
        }     
        else 
        { 
            newLength++; 
        } 
        if(newLength > len) 
        { 
            break; 
        } 
        newStr += singleChar; 
    } 
     
    if(strLength > len) 
    { 
        newStr += hasDot; 
    } 
    return newStr; 
}


function userloginstatus(){
	
	 //拼接html
    var _down="";
    var returnUrl = window.location.href;
	var ehaier=jQuery.cookie("EHaierSSOToken");//商城的cookie
    var trsidssdssotoken = "trsidssdssotoken";//同域Cookie
	var sdssotoken = jQuery.cookie(trsidssdssotoken);
	
	if(sdssotoken!=null && sdssotoken!=''){
	
		jQuery("#nr_top_login").hide();//登陆li的id
		jQuery("#nr_top_reg").hide();//注册li的id
		jQuery("#nr_top_userinfo_user").show();//用户名li的id
		jQuery("#nr_top_userinfo_my_haier").show();//我的海尔li的id
		var loginUserName = "haieruser";//当前登录用户
	    var ck_loginUserName = jQuery.cookie(loginUserName);

		if(ck_loginUserName!=null && ck_loginUserName!=''){
			var logusername=subHZString(ck_loginUserName,18,''); 
			//从cookie中读取当前登录用户
			jQuery("#nr_top_userinfo_user").find('a:eq(0)').attr("title",ck_loginUserName);
			jQuery("#nr_top_userinfo_user").find('a:eq(0)').html(logusername);
			jQuery("#nr_top_userinfo_user").find('a').each(function(){
				if($(this).attr("href").indexOf("haier_logout")>-1&&$(this).attr("href").indexOf("returnUrl")<0){
					$(this).attr("href",$(this).attr("href")+"?returnUrl="+returnUrl);
				}
			});
		}else{
			//同域cookie存在，但是 haieruser 没有取出值，去请求haier_ssosession.jsp获取当前登录用户
			var surl = "/ids/cn/haier_ssosession.jsp";
			jQuery.ajax({
				type: "post",
				dataType: "text",
				url: surl,
				error : function(XMLHttpRequest, textStatus, errorThrown){
				},
				success: function(returnData){
					if(jQuery.trim(returnData).length > 0){
						var loginUser = jQuery.trim(returnData);
						var loginUser2=subHZString(loginUser,18,'');
						jQuery("#nr_top_userinfo_user").find('a:eq(0)').attr("title",loginUser);
						jQuery("#nr_top_userinfo_user").find('a:eq(0)').html(loginUser2);
						jQuery("#nr_top_userinfo_user").find('a').each(function(){
							if($(this).attr("href").indexOf("haier_logout")>-1&&$(this).attr("href").indexOf("returnUrl")<0){
								$(this).attr("href",$(this).attr("href")+"?returnUrl="+returnUrl);
							}
						});
					}else{
						jQuery("#nr_top_login").show();
						var loginurl=jQuery("#nr_top_login").find('a:eq(0)').attr("href")+"?returnUrl="+returnUrl;
						jQuery("#nr_top_login").find('a:eq(0)').attr("href",loginurl);
						jQuery("#nr_top_reg").show();
						jQuery("#nr_top_userinfo_user").hide();
						jQuery("#nr_top_userinfo_my_haier").hide();
					}
				}
			});
		}
	}else{
		if(ehaier!=null && ehaier!=''){//商城的cookie
			window.location.href="/ids/cn/haier_login.jsp?returnUrl="+returnUrl;
		}
		jQuery("#nr_top_login").show();
		var loginurl=jQuery("#nr_top_login").find('a:eq(0)').attr("href")+"?returnUrl="+returnUrl;
		jQuery("#nr_top_login").find('a:eq(0)').attr("href",loginurl);
		jQuery("#nr_top_reg").show();
		jQuery("#nr_top_userinfo_user").hide();
		jQuery("#nr_top_userinfo_my_haier").hide();
		
		//监测是否自动登陆
		var autologin = jQuery.cookie("idsALInfo");
		if(autologin!=null && autologin!=''){
			jQuery.ajax({
				type: "post",
				dataType: "text",
				url: "/ids/cn/autoLogin.jsp",
				error : function(XMLHttpRequest, textStatus, errorThrown){
				},
				success: function(returnData){
					userloginstatus();
				}
			});
		}
    }
}

jQuery(function(){
	//加载用户登录信息
	userloginstatus();
});
//新增搜索框 提示浮层
var num;
var lightFlag=-1;
var words;
var timeoutId;
$(function(){
	document.body.onclick=function(){
		$('.pli_xiala').remove();
	}; 

	$('#fe_hd_keywords').keyup(function (event){
		var fckeyCode = event.which;
		if(fckeyCode != 38 && fckeyCode != 40){
			//初始化上下键选择
			lightFlag=-1;
			var keywowd =$('#fe_hd_keywords').val();
			$('.pli_xiala').remove();
			if($.trim(keywowd)!=''){
				keywowd=keywowd.replace(/\'/g, "\\'");
				keywowd=encodeURIComponent(keywowd);
				clearTimeout(timeoutId);
				timeoutId = setTimeout(function(){
					$.ajax({
						type:"GET",
						url:"/was5/web/search?channelid=289570&searchword="+keywowd,
						dataType:"html",
						async:true,
						success:function(data){
							//$('.js_hd_search').after(data);
							$('#btn_subfrom').after(data);
						},
						 error:function(data){
						 }
					});
				},500);
			}
		}else{//上 下选择键
			
			words = $('.pli_xiala').find('li');
			num = words.length;
			if (num <= 0) {
				return;
			}
			words.each(function(){
				$(this).css('background', '#fff');
			});
			var highLightIndex = ((fckeyCode != 38 ? num + 1 : num - 1) +lightFlag ) % num;
			lightFlag=highLightIndex
			words.eq(lightFlag).css('background', '#f8f8f8');
		}
		
	});
})