define(['jquery'], function ($) {
     return function (config, element) {
         $(element).click(function (event) {
             $('[data-action="header-top-close"]').addClass('hide');
         })
     }
});
