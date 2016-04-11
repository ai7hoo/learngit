define(['jquery'],function($){
    function Yuanxing(opts){
        this.opts = $.extend({},Yuanxing.DEFAULT,opts);
    }

    Yuanxing.prototype.move = function(){
        alert('a');
    };

    Yuanxing.DEFAULT = {
        speed: 800
    };

    return {
        Yuanxing:Yuanxing
    };
});