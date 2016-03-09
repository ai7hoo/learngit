requirejs.config({
  baseUrl:'bower_components',
  paths:{
    'jquery':'jquery/dist/jquery',
    'bootstrap':'bootstrap/dist/js/bootstrap',
    'Vue':'vue/dist/vue'
  },
  shim:{
    'bootstrap':{
      deps:['jquery']
    }
  }
});
requirejs(['jquery','bootstrap','Vue'],function($,bootstrap,Vue){

  var address = new Vue({
    el:"#example",
    data:{
      addList:[]
    }
  });

  $("#tijiao").on('click',function(event){
    address.addList = [];
    // 检测回车/换行符
    var str =  $("#testbox").val();
    var regStr = /\n/ig;
    var sArr = [];
    var tArr = [];
    sArr = str.split(regStr);
    for(var i=0;i<sArr.length;i++){
      if( sArr[i] != '' ){
        tArr.push(sArr[i]);
      }
    }
    console.log(tArr);
    address.addList=tArr;
  });

  $("#box").on('click',function(event){
    // 接管接口
    $.oldGetJSON = $.getJSON;

    $.getJSON = function(url,callback){
      console.log( 'url: %s', url );
      callback({
        status:'ok',
        data:{
          id:1445,
          nickname:'quinn'
        }
      });
    }
    // 接管接口

    $.getJSON('http://localhost/test.php',function(res){
      if(res.status == 'ok'){
        alert(res.data.nickname);
      }
    });

    $.getJSON = $.oldGetJSON; // 恢复接口
  });
});