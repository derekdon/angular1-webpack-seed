'use strict';

var NAME = module.exports = 'app.common.directives';

angular.module(NAME, [
    require('./dirA'),
    require('./stockHistory')
])
    .directive('compile', function ($compile) {
        return function (scope, element, attrs) {
            scope.$watch(
                function (scope) {
                    return scope.$eval(attrs.compile);
                },
                function (value) {
                    element.html(value);
                    $compile(element.contents())(scope);
                }
            );
        };
    })
    .directive('headTitle', function ($rootScope, TITLE, TITLE_SPLITTER) {
        return {
            restrict: 'E',
            link: function (scope, element, attrs) {
                $rootScope.pageTitle = element.text();
                $rootScope.fullPageTitle = $rootScope.pageTitle ? $rootScope.pageTitle + TITLE_SPLITTER + TITLE : TITLE;
                element.remove();
            }
        };
    })
    .directive('focusMe', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var conditionMet = attrs.focusMeCondition ? scope.$eval(attrs.focusMeCondition) : true,
                    delay;
                if (conditionMet) {
                    delay = attrs.focusMe ? Number(attrs.focusMe) : 100;
                    $timeout(function () {
                        element[0].focus();
                        if (ionic.Platform.isAndroid()) {
                            cordova.plugins.Keyboard.show();
                        }
                    }, delay);
                }
            }
        };
    })
    .directive('focusWhen', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                scope.$watch(attrs.focusWhen, function (newValue, oldValue) {
                    if (newValue) {
                        var delay = attrs.focusDelay ? Number(attrs.focusDelay) : 500;
                        $timeout(function () {
                            element[0].focus();
                            if (ionic.Platform.isAndroid()) {
                                cordova.plugins.Keyboard.show();
                            }
                        }, delay);
                    } else {
                        element[0].blur();
                        if (ionic.Platform.isAndroid()) {
                            cordova.plugins.Keyboard.hide();
                        }
                    }
                })
            }
        };
    })
    .directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind('keydown keypress', function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter);
                    });
                    event.preventDefault();
                }
            });
        };
    });