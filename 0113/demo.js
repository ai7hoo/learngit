/* 
* @Author: Quinn
* @Date:   2016-01-13 11:21:13
* @Last Modified by:   Quinn
* @Last Modified time: 2016-01-14 09:20:57
*/

var foo = Vue.extend({
  template:'<p>this is foo</p>'
});
var bar = Vue.extend({
  template:'<p>this is bar</p>'
});
var app = Vue.extend();
var router = new VueRouter();
router.map({
  '/foo':{
    component:foo
  },
  '/bar':{
    component:bar
  }
});
router.start(app,'#app');


var a = Vue.extend({
  template:'<p>this is a</p>'
});
var b = Vue.extend({
  template:'<p>this is b</p>'
});
var box = Vue.extend();
var router2 = new VueRouter();
router2.map({
  '/a':{
    component:a
  },
  '/b':{
    component:b
  }
});
router2.start(box,'#box');