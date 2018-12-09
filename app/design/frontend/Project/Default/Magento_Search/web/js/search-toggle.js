define(['jquery'], function ($) {
    return function (config, element) {
        $(element).click(function (event) {
            $('.block-search').toggleClass("_show-element");
            $('.search-toggle').toggleClass("search-toggle-close");
        });
    }
});
