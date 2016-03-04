'use strict';

require('./index.scss');

var NAME = module.exports = 'app.common.directives.stockHistory';

angular.module(NAME, [])
    .directive('stockHistory', function () {
        return {
            restrict: 'E',
            scope: {
                stocks: '=',
                refreshRate: '@',
                chartType: '@'
            },
            replace: true,
            template: require('./template.html'),
            controller: require('./ctrl'),
            controllerAs: 'ctrl',
            link: function (scope, element, attrs) {
                scope.ctrl.init();
            }
        };
    });