'use strict';

require('common/sass');

angular.module('app', [

    // Framework
    require('angular-ui-router'),
    require('angular-ui-bootstrap'),

    // Common
    require('common/js/constants'),
    require('common/js/filters'),
    require('common/js/services'),
    require('common/js/factories'),
    require('common/js/directives'),
    require('common/js/formatters'),
    require('common/js/validators'),
    require('common/templates'),

    // Modules
    require('modA')
])
    .config(require('./config'))
    .run(require('./run'))
    .controller('AppCtrl', require('./ctrl'));