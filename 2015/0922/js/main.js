/* 
* @Author: Quinn
* @Date:   2015-09-22 16:34:21
* @Last Modified by:   Quinn
* @Last Modified time: 2015-09-22 16:53:48
*/

$(document).ready(function(){
    var items = new Vue({
        el:"#items",
        data: {
            item:[]
        }
    });
    //ajax
    $.ajax({
        url:'http://localhost/learngit/0922/mv.php',
        type:'get',
        success:function(data){
            var d = eval("("+data+")");
            for(var i=0;i<=49;i++){
                items.item.push({
                    picUrl:d[i].picUrl
                });
            }
        },
        error:function(err){
            console.log(err);
        }
    });
});