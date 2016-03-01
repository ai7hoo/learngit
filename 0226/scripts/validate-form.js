/* 
* @Author: Quinn
* @Date:   2016-02-26 14:36:30
* @Last Modified by:   Quinn
*/

define(['jquery','Vue','validate'],function($,Vue,validate){
  return {
    pageView: function(){
      console.log('this is pageView');
    },
    expressOrder: function(){
      console.log('this is expressOrder');
    },
    testJquery: function(){
      console.log( $('div').length );
    },
    testVue: function(){
      var MyComponent = Vue.extend({
        template:'<form id=form><input type="text" name=username /><input type="submit" /></form>'
      });
      Vue.component('my-component',MyComponent);
      new Vue({
        el: '#example',
      });
    },
    testValidate: function(){
      $("#form").validate({
        debug:true,
        onkeyup:false,
        rules: {
          username:{
            required:true,
            minlength:6
          }
        },
        messages: {
          username:{
            required:'姓名必填',
            minlength:'长度最小6位'
          }
        }
      });
    }
  }
});