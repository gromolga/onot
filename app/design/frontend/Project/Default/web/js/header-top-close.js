define(['jquery'], function ($) {
     return function (config, element) {
         $(element).click(function (event) {
             $('#js-header-top-close').click(function () {
                 $('.js-header-top-line').addClass('hide-element');
             });
         });
     }
});
