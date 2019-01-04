define([
    'jquery'
], function ($) {
    return function (config, element) {
        $(element).click(function (event) {
            $('[data-role="toggle-content"]').slideToggle();
        })
    };
});
