/* 
* @Author: Quinn
* @Date:   2015-12-19 11:31:57
* @Last Modified by:   Quinn
* @Last Modified time: 2015-12-19 13:32:57
*/

define(function(require,exports,module){
    var $ = require('jquery');
    var md5 = require('md5');

    // exports.doSomething = function(){
    //     console.log('- o-');
    // };
    module.exports = function(str){
        return md5(str).split('');
    };
    // module.exports = function(){
    //     console.log('- -!');
    // };
});