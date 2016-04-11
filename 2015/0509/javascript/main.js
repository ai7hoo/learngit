$(function(){

    // .load()
    $(".btn1").one('click',function(){
        $(".loadbox").load('load.html', function(txt, status, req){
            $(".loadbox").slideDown('slow');
        });
    });

    // $.get()
    $(".btn2").one('click',function(){
        $.get('get.php',function(data,status){
            $(".getbox").append('用户名:'+data.username);
        });
    });

    // $.post()
    $(".btn3").bind('click',function(event){
        if( !checkForm($(".username")) ){
            alert("用户名不能为空!");
            $(".username").focus();
            return false;
        }
        else if(!checkForm($(".userpwd"))){
            alert("密码不能为空");
            $(".userpwd").focus();
            return false;
        }
        $.post('post.php',{
            "username": $(".username").val(),
            "userpwd": $(".userpwd").val()
        },function(data){
            $(".postbox").html('用户名是：' + data.username + '密码是：' + data.userpwd);
        });

        // event.stopPropagation();
        // event.preventDefault();
        return false;
    });

    //$.ajax()
    $(".btn4").bind('click', function(){
        $.ajax({
            url: 'ajax.php',
            beforeSend: function(){
                $(".ajaxbox").css('background', '#5bc0de');
            },
            type: 'POST',
            dataType: 'json',
            data: {
                "username": "ai7hoo",
                "userpwd": "123456",
                "age": "22",
                "sex": "male"
            },
            complete: function(){
                $(".ajaxbox").css('background', '#ffffff');
            },
            success: function(){
                var obj = {c:3,b:6,q:8};
                var k = $.param(obj);
                console.log(k);
            },
            error: function(){},
        });
        $.ajaxPrefilter(function(options){
            options.global = true;
        });
        
        return false;
    });

});

function checkForm(inp){
    if(inp.val() == ""){
        return false;
    }
    else {
        return true;
    }
}