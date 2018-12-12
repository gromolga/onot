define(['jquery'], function ($) {
    return function (config, element) {
        var $element = $(element);
        var onScroll = function(){
            if($(window).scrollTop() > 50){
                $element.addClass("header-sticky");
            } else {
                $element.removeClass("header-sticky");
            }
        };
        $(window).scroll(onScroll);
        onScroll();
    };
});
