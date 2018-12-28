define([
    'jquery',
    'js/owl-carousel/owl.carousel.min'
], function ($) {
    return function (config, element) {
        $(element)
            .addClass('owl-carousel owl-theme')
            .owlCarousel(config);
        console.log(config);
    }
});
