'use strict';

var NAME = module.exports = 'app.common.filters';

angular.module(NAME, [])
    .filter('startFrom', function () {
        return function (input, start) {
            start = +start; // parse to int
            return angular.isArray(input) ? input.slice(start) : input;
        };
    })
    .filter('prefix', function () {
        return function (input, prefix) {
            return prefix + input;
        };
    })
    .filter('capitalize', function () {
        return function (input) {
            if (!input) {
                return input;
            }
            return input.toLowerCase().substring(0, 1).toUpperCase() + input.substring(1);
        }
    }).filter('time', function () {
        var addLeadingZero = function(n) {
            return (new Array(2).join('0') + n).slice(-2);
        };
        return function(input) {
            input = input || 0;
            var t = parseInt(input);
            return addLeadingZero(Math.floor(t / 60)) + ':' + addLeadingZero(t % 60);
        };
    })
    .filter('duration', function ($filter) {
        return function (input) {
            return (input > 0) ? $filter('time')(input) : '';
        };
    });