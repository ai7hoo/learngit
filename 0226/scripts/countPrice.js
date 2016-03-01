define(['jquery'],function($){
  var _count = Math.random();
  return function(){
    console.log('this is countPrice ' + _count.toFixed(2));
  }
});