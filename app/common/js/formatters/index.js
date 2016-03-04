'use strict';

var NAME = module.exports = 'app.common.formatters';

angular.module(NAME, [])
    .directive('meters', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, ngModel) {

                ngModel.$formatters.push(function (value) {
                    return value + ' meters';
                });

                ngModel.$parsers.push(function (value) {
                    return parseInt(value);
                });

            }
        };
    });