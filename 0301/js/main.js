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
  })
});