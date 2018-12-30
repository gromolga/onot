define([
    'jquery',
    'Magento_Ui/js/modal/modal'
], function ($) {
    return function (config, element) {
        $(element).click(function (event) {
            event.preventDefault();
            $(this.hash).modal('openModal');
        })
    }
});
