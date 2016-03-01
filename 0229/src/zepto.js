/* 
* @Author: Quinn
* @Date:   2016-02-26 14:36:37
* @Last Modified by:   Quinn
*/

require.config({
  baseUrl:"bower_components",
  paths:{
    'zepto':'http://g.alicdn.com/sj/lib/zepto/zepto',
    'sm':'http://g.alicdn.com/msui/sm/0.6.2/js/sm',
    'sm-extend':'http://g.alicdn.com/msui/sm/0.6.2/js/sm-extend',
    'Vue':'vue/dist/vue.min',
  },
  shim:{
    'sm':{
      deps:['zepto']
    },
    'sm-extend':{
      deps:['zepto']
    },
    'zepto':{
      exports:'$'
    }
  }
});

require(['zepto','sm','sm-extend'],function($,sm,smExtend){
  $.init();
  $(document).on('click', '.open-preloader', function () {
      $.showPreloader();
      setTimeout(function () {
          $.hidePreloader();
      }, 2000);
    });
    $(document).on('click','.open-preloader-title', function () {
      $.showPreloader('Custom Title')
      setTimeout(function () {
          $.hidePreloader();
      }, 2000);
    });
});