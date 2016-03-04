'use strict';

var _ = require('lodash');

module.exports = function ($scope, $state, $stateParams) {

    var ctrl = this;
    ctrl.NAME = 'AppCtrl';

    ctrl.init = function () {
        console.log(ctrl.NAME, 'init()');
    };

    ctrl.init();

    ctrl.destroy = function () {
        console.log(ctrl.NAME, 'destroy()');
    };

    $scope.$on('$destroy', function () {
        ctrl.destroy();
    });
};