'use strict';

var combo   = require('./combo'),
    themes  = require('./themes'),
    path    = require('./path'),
    _       = require('underscore');

var themeOptions = {};

_.each(themes, function(theme, name) {
    themeOptions[name] = {
        src: 'app/design/frontend/Project/Default/web/images/icons/*.png',
        dest: 'app/design/frontend/Project/Default/web/images/sprite.png',
        padding: 5,
        destCss: 'app/design/frontend/Project/Default/web/css/source/_sprite.less',
        imgPath: '../images/sprite.png', // path for less variable relative to main styles file
        algorithm: 'binary-tree'
    };
});

module.exports = themeOptions;
