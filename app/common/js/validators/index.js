'use strict';

var NAME = module.exports = 'app.common.validators';

angular.module(NAME, [])
    .directive('integerValidator', function () {
        var INTEGER_REGEXP = /^\-?\d+$/;
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$validators.integer = function (modelValue, viewValue) {
                    return ctrl.$isEmpty(modelValue) ? true : INTEGER_REGEXP.test(viewValue);
                };
            }
        };
    })
    .directive('fullnameValidator', function () {
        var FULLNAME_REGEXP = /^[a-z ,.'-]+$/i;
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$validators.fullnameValidator = function (modelValue, viewValue) {
                    return ctrl.$isEmpty(modelValue) ? false : FULLNAME_REGEXP.test(viewValue);
                };
            }
        };
    })
    .directive('usernameValidator', function ($q, $timeout) {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {

                var usernames = ['Jim', 'John', 'Jill', 'Jackie'];

                ctrl.$asyncValidators.username = function (modelValue, viewValue) {

                    if (ctrl.$isEmpty(modelValue)) {
                        // consider empty model valid
                        return $q.when();
                    }

                    var def = $q.defer();

                    $timeout(function () {
                        // Mock a delayed response
                        if (usernames.indexOf(modelValue) === -1) {
                            // The username is available
                            def.resolve();
                        } else {
                            def.reject();
                        }

                    }, 2000);

                    return def.promise;
                };
            }
        };
    });