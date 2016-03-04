'use strict';

var NAME = module.exports = 'app.common.directives.dirA';

angular.module(NAME, [])
    .directive('dirA', function () {
        return {
            restrict: 'E',
            scope: {
                propA: '='
            },
            replace: true,
            template: require('./template.html'),
            link: function (scope, element, attrs) {
            }
        };
    });