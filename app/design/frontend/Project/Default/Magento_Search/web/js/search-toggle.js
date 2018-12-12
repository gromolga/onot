define(['jquery'], function ($) {
    return function (config, element) {
        $(element).click(function () {
            $('.block-search').toggleClass("show");
            $(this).toggleClass("search-toggle-close");
        });
    }
});
