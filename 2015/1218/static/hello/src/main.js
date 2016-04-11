/* 
* @Author: Quinn
* @Date:   2015-12-18 12:37:26
* @Last Modified by:   Quinn
* @Last Modified time: 2015-12-19 11:25:15
*/

define(function(require,exports,module){
    var $ = require('jquery');
    var addNum = require('addNum');
    var Vue = require('vue');
    var Mock = require('mock');

    exports.sayHello = function(){
        //$('body').css('backgroundColor','red');
        addNum(85,6,function(){
            setTimeout(function(){
                //$('body').css('backgroundColor','yellow');
            },3000)
        });

        var box = new Vue({
            el:"#box",
            data:{
                msg:'aaa'
            }
        });

        var data = Mock.mock({
            'list|1-10':[{
                'id|+1':1,
                'name|2-8':'g'
            }]
        });
        box.$data = data;
        console.log(JSON.stringify(data, null, 4));
    }
});