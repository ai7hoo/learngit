define(['jquery','Vue'],function($,Vue){
  return {
    ma1:function(options){
      var opts = {
        el:"#example"
      };
      var opt = $.extend(opts,options);
      var example = new Vue({
        el:opt.el,
        data:{
          title:"ttt"
        }
      });
    }
  }
});
