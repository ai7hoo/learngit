/**
 * Created by Administrator on 14-9-18.
 */


$(function(){
//    导航效果
    var nav= $(".head .ul-nav>li");
    nav.mouseenter(function(){
        $(this).children("ul").show();
    });
    nav.mouseleave(function(){
        $(this).children("ul").hide();
    });

//    banner效果
    var i = 0;
    var j;
    var k;
    var m;
    var dong = true;
    var liImg = $(".banner .hdp ul li");
    var tempul =  $(".banner .hdp ul");
    var num = $(".banner .hdp ul li").length;
    $(".banner .hdp").hover(function(){
        dong = false;
    },function(){
        dong = true;
    });
    var tempimg = new Array();
    for(j = 0;j < num;j++){
        tempimg[j] = liImg.eq(j).html();
    }
    var temp =setInterval(function(){
        if(dong == true){
            if(i>= num){i=-1}
            if(tempimg != undefined&&num > 1){
                var html = tempimg[i+1];
                tempul.children("li").eq(1).html(html);
                var li = tempul.children(":first").clone();
                tempul.children(":first").animate({marginLeft:"-1920px"},1500,function admin(){
                    li.appendTo(tempul);
                    tempul.children(":first").remove();
                });
                i++;
                if(i>=num){
                    i = 0
                }
            }
        }},3000);
//    点击向前
    $(".prev").click(function(){
        if(i==-1||i==num-1){
            k=0;
            i=-1
        }else{
            k= i+1
        }
        var html = tempimg[k];
        tempul.find("li").eq(1).html(html);
        var li = tempul.children(":first").clone();
        tempul.children(":first").animate({marginLeft:"-1920px"},1000,function admin(){
            li.appendTo(tempul);
            tempul.children(":first").remove();
        });
        i++;
    });

//    点击向后
    $(".next").click(function(){
        i--;
        if(i<0){
            m = num-1;
            i = num-1;
        }else{
            m= i
        }
        var html = tempimg[m];
        tempul.find("li").eq(1).html(html);
        var li = tempul.find("li").eq(1);
        tempul.css({marginLeft:"-1920px"});
        li.insertBefore(tempul.children(":first"));
        tempul.children(":first").animate({marginLeft:"1920px"},1000,function admin(){
            tempul.css({marginLeft:"0px"});
            tempul.children(":first").css({marginLeft:"0px"});
        });
    });
});

//新悦报刊效果
var imgUl = $(" .newspaper1 .img-list .paper-list .hdp1 ul");
var imgLi = $(" .newspaper1 .img-list .paper-list .hdp1 ul li");
var imgO = $(" .newspaper1 .img-show");
var span = $(".newspaper1 .newspaper-head .span4");
var len = $(imgUl).children("li").length;
var htm = $(imgUl).html();
var imgdong = true;
var kk = 0;
$(".newspaper1 .img-list .paper-list .hdp1").hover(function(){
    imgdong = false;
},function(){
    imgdong = true;
});
var imgTem = function(){
    if(imgdong == true){
        if (kk > len * 124) {
            $(imgUl).html(htm);
            kk = 0;
        }
        if (kk == 360) {
            $(imgUl).html(htm + htm);
            imgLi = $(" .newspaper1 .img-list .paper-list .hdp1 ul li");
        }
        $(imgUl).children("li").click(function(){
            var src2 = $(this).children("input").val();
            if(src2 == ""){
            	src2 = "<img src='"+$(this).children("img").attr("src")+"'/>";
            }
            var text = $(this).children("span").text();
            var div = $(this).children("div").html();
            $(imgO).html(src2);
            $(span).html(text);
            $(".paper-text").children("div").html(div);
        });
        var kkk = -kk + "px";
        imgUl.css({marginLeft: kkk});
        kk += 2;
    }
};
setInterval(imgTem,40);



$(imgUl).children("li:first-child").click();
//在线留言
var btn = $(".messages form .clear");
var check = $(".messages form div input[type=checkbox]");
var kong = "";
check.click(function(){
   $(this).siblings().removeAttr("checked");
});
btn.click(function(){
    $(".messages form div input").val(kong);
    $(".messages form div textarea").val(kong);
    $(".messages form div input[type=checkbox]").removeAttr("checked");
});

//时间轴效果
var ulList = $(" .main .span-list ul");
var liList = $(" .main .span-list ul li");
var liNum = $(".main .span-list ul li").length;
var text = $(".main .text div");
var cc = 0;
var isdong = true;
var text = $(".text");
$(".span-list").hover(function(){
    isdong = false;
},function(){
    isdong = true;
});
setInterval(function(){
    if(isdong ==true){
        cc++;
        $(liList).removeClass("now");
        $(liList).eq(cc).addClass("now");
        var le = -cc*200+"px";
        var le1 = -cc*1200+"px";
        if(cc<liNum-4){
            $(ulList).animate({marginLeft: le});
        }
        text.animate({marginLeft: le1});
        if(cc==liNum){
            cc=-1;
            $(ulList).animate({marginLeft: 0});
            $(liList).eq(cc+1).addClass("now");
            text.animate({marginLeft: 0});
        }
    }
},3000);

//新月产品展示效果
var ulpo = $(".Allp .main .img-list ul");
var lipo = $(".Allp .main .img-list ul li");
var nums1 = $(".Allp .main .img-list ul li").length;
var nums = $(".Allp .main .img-list ul li").length;
var pp = 1;
var imgTemp =  new Array();
for(var iii = 0;iii< nums;iii++){
    imgTemp[iii] = $(lipo).eq(iii).html();
}
$(".Allp .main .prev").click(
    function(){
    pp++;
    $(lipo).removeClass("now");
    $(lipo).removeClass("now1");
    $(lipo).removeClass("now3");
    var p1 = pp+1;
    var p2 = pp+1;
    var p0 = pp-1;
    if(pp == 0){
        p0=nums-1;
    }else if(pp == 2){
        if(nums<2*nums1){
        ulc = $(ulpo).children("li").removeClass("now").removeClass("now1").removeClass("now3");
        $(ulc).clone().appendTo(ulpo);
        nums = $(".Allp .main .img-list ul li").length;
        lipo = $(".Allp .main .img-list ul li");
        }
    }else if(pp==nums/2-1){
        p1 = -1;
        if(nums<2*nums1){
        ulc = $(ulpo).children("li").removeClass("now").removeClass("now1").removeClass("now3");
        $(ulc).clone().appendTo(ulpo);
        nums = $(".Allp .main .img-list ul li").length;
        lipo = $(".Allp .main .img-list ul li");
        }
    }
    $(lipo).eq(pp).addClass("now");
    $(lipo).eq(p0).addClass("now1");
    $(lipo).eq(p0).addClass("now3");
    $(lipo).eq(p1).addClass("now1");
    $(lipo).eq(p2).addClass("now1");
    console.log(pp,p0,p1,p2,nums);
    if(pp>=nums1){
        pp=0;
        }
    });
$(".Allp .main .next").click(
    function(){
        if(nums<3*nums1){
            ulc = $(ulpo).children("li").removeClass("now").removeClass("now1").removeClass("now3");
            ulpo.prepend($(ulc).clone());
            nums = $(".Allp .main .img-list ul li").length;
            lipo = $(".Allp .main .img-list ul li");
        }
        pp--;
        $(lipo).removeClass("now");
        $(lipo).removeClass("now1");
        $(lipo).removeClass("now3");
        var p1 = pp+1;
        var p2 = pp+1;
        var p0 = pp-1;
        if(pp == 0){
            p0=nums-1;
            if(nums<3*nums1){
            ulc = $(ulpo).children("li").removeClass("now").removeClass("now1").removeClass("now3");
            ulpo.prepend($(ulc).clone());
            nums = $(".Allp .main .img-list ul li").length;
            lipo = $(".Allp .main .img-list ul li");
            }
        }else if(pp==1){
            if(nums<3*nums1){
            ulc = $(ulpo).children("li").removeClass("now").removeClass("now1").removeClass("now3");
            ulpo.prepend($(ulc).clone());
            nums = $(".Allp .main .img-list ul li").length;
            lipo = $(".Allp .main .img-list ul li");
            }
        }
        else if(pp==nums/2-1){
            p1 = -1;
        }
        $(lipo).eq(pp).addClass("now");
        $(lipo).eq(p0).addClass("now1");
        $(lipo).eq(p0).addClass("now3");
        if(pp == 0){
            $(lipo).eq(p0).removeClass("now3");
            $(lipo).eq(p1).addClass("now3");
        }
        $(lipo).eq(p1).addClass("now1");
        $(lipo).eq(p2).addClass("now1");
        console.log(pp,p0,p1,p2,nums);
        if(pp<=0){
            pp=nums1;
        }
    });



function alert_div(w,h,obj){
	//获取浏览器窗口高度
	var bh = document.documentElement.clientHeight;
	var left = (((document.body.clientWidth - w)/2)/document.body.clientWidth)*100 + "%";
	var top = ((bh - h)/2)/bh*100 + "%";
	
	var video = $(obj).find("input:hidden").val();
	var title = $(obj).find("p").html();
	$(".alert_title").html(title.substr(0,18)+"...").attr("title",title);
	$(".alert_filter").css({"display":"block"});
	$(".alert_content").css({"height": h-40,"width":w-2}).html(video);
	$(".alert_main").css({"width":w,"height":h,"left":left,"top":top,"display":"block"});
}

function alert_close(){
	$(".alert_filter").css("display","none");
	$(".alert_main").css("display","none");
	$(".alert_content").html("");
}

