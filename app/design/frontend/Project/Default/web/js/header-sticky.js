define(['jquery'], function ($) {
    return function (config, element) {
        var $element = $(element);
        var $header = $('[data-action="header-sticky"]');
        var headerHeight = $header.outerHeight();
        var onScroll = function(){
            if($(window).scrollTop() > 120){
                $element.addClass("header-sticky");
                $element.next().height(headerHeight);
            } else {
                $element.removeClass("header-sticky");
                $element.next().height(0);
            }
        };
        $(window).scroll(onScroll);
        onScroll();
    };
});

