require.config({
  baseUrl:'scripts',
  paths:{
    'moduleA':'modules/moduleA/moduleA',
    'moduleB':'modules/moduleB/moduleB',
    'jquery':'http://cdn.bootcss.com/jquery/2.2.0/jquery.min',
    'Vue':'http://cdn.bootcss.com/vue/1.0.16/vue.min',
    'validate':'http://cdn.bootcss.com/jquery-validate/1.14.0/jquery.validate.min'
  },
  shim:{
    'jquery.validate':{
      deps:['jquery'],
      exports:'jquery.fn.validate'
    }
  }
});

require(['moduleA','moduleB','jquery','validate'],function(moduleA,moduleB,$){
  // do something...
  $("body").css('background','#eee');

  $("#signupForm").validate({
    debug:true,
    onkeyup:false,
    rules:{
      username:{
        required:true,
        minlength:6
      }
    },
    messages:{
      username:{
        required:"必须填写名字",
        minlength:'长度最小为6位'
      }
    }
  });

  moduleA.ma1();
});
