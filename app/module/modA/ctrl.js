'use strict';

var _ = require('lodash'),
    stocks = require('common/data/stocks.csv');

module.exports = function ($scope, $state, $stateParams, entities, ModAService) {

    var ctrl = this;
    ctrl.NAME = 'ModACtrl';

    ctrl.init = function () {
        console.log(ctrl.NAME, 'init()');
        ctrl.entities = _.clone(entities);
        ctrl.stocks = _.cloneDeep(stocks);
    };

    ctrl.init();

    ctrl.destroy = function () {
        console.log(ctrl.NAME, 'destroy()');
    };

    $scope.$on('$destroy', function () {
        ctrl.destroy();
    });
};