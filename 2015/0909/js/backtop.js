define(['jquery'],function($){
    function ScrollTo(opts){
        this.opts = $.extend({},ScrollTo.DEFAULT,opts);
        this.$el = $("body, html");
    }

    ScrollTo.prototype.move = function(){
        this.$el.animate({
            scrollTop: this.opts.dest
        },this.opts.speed);
    };

    ScrollTo.prototype.go = function(){
        this.$el.scrollTop(this.opts.dest);
    };

    ScrollTo.DEFAULT = {
        dest: 0,
        speed: 800
    };

    return {
        ScrollTo: ScrollTo
    };
});