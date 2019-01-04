define([
    'jquery'
], function ($) {
    return function (config, element) {
        var $fakeTitleParent = $(element).parent();
        var $pageTitleHeading = $("#page-title-heading");
        var $pageTitleHeadingParent = $pageTitleHeading.parent();

        $(element)
            .remove();

        var onResize = function() {
            if($(window).width() > 767){
                $pageTitleHeading.prependTo($fakeTitleParent);
                $pageTitleHeading.css("display","block");
            } else {
                $pageTitleHeading.prependTo($pageTitleHeadingParent);
            }
        };

        onResize();
        $(window).resize(onResize);
    };
});
