/* 
* @Author: Quinn
* @Date:   2015-09-09 10:11:14
* @Last Modified by:   Quinn
* @Last Modified time: 2015-09-09 22:00:54
*/

requirejs.config({
    paths: {
        jquery: 'jquery'
    }
});
requirejs(['jquery', 'backtop'],function($,backtop){

    //初始化创建一个构造器
    var scroll = new backtop.ScrollTo({
        //参数dest, speed 默认可以不填写
        dest: 0,
        speed: 800
    });

    //调用自定义模块
    $("#backtop").on('click',$.proxy(scroll.move,scroll));

    $(window).on('scroll',function(){
        checkPosition($(window).height());
    });

    checkPosition($(window).height());

    // function move(){
    //     $("html,body").animate({
    //         scrollTop:0
    //     },800);
    // }
    // function go(){
    //     $("html,body").scrollTop(0);
    // }

    function checkPosition(pos){
        if($(window).scrollTop() > pos){
            $("#backtop").fadeIn();
        }
        else {
            $("#backtop").fadeOut();
        }
    }
});