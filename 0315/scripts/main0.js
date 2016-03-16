require.config({
  paths:{
    'vue':'../bower_components/vue/dist/vue.min',
    'vue-router':'../bower_components/vue-router/dist/vue-router'
  }
});
requirejs(['vue','vue-router'],function(Vue,VueRouter){
  Vue.use(VueRouter);
  // 创建组件
  var Foo = Vue.extend({
    template:
    '<div>'+
    '<h4>您好</h4>'+
    '<router-view></router-view>'+
    '</div>'
  });
  var Login = Vue.extend({
    template:
    '<p>'+
    '<input type="text" placeholder="用户名">'+
    '<br>'+
    '<input type="text" placeholder="密码">'+
    '<br>'+
    '<input type="button" value="登陆">'+
    '</p>'
  });
  var Register = Vue.extend({
    template:
    '<p>'+
    '<input type="text" placeholder="用户名">'+
    '<br>'+
    '<input type="text" placeholder="密码">'+
    '<br>'+
    '<input type="text" placeholder="确认密码">'+
    '<br>'+
    '<input type="button" value="注册">'+
    '</p>'
  });
  // 路由需要根组件
  var App = Vue.extend({});
  // 创建路由实例
  var router = new VueRouter();
  // 定义路由规则
  router.map({
    '/foo':{
      component:Foo,
      subRoutes:{
        '/':{
          component:{
            template:'欢迎您'
          }
        },
        '/login':{
          component:Login
        },
        '/register':{
          component:Register
        }
      }
    }
  });
  // 启动路由器，挂载到#app上
  router.start(App,'#app');
});
