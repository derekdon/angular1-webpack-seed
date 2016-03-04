'use strict';

var NAME = module.exports = 'app.common.templates';

require('!!ng-cache?prefix=common!./form.errors.html');
require('!!ng-cache?prefix=common!./main.html');

angular.module(NAME, [])
    .run(function () {
       console.log('Added common templates to the $templateCache');
    });