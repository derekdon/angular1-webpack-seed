'use strict';

var _ = require('lodash');

module.exports = function ($scope, $state, $stateParams, entity, $timeout) {

    var ctrl = this;

    ctrl.NAME = 'ModAEntityCtrl';

    ctrl.init = function () {
        try {
            console.log(ctrl.NAME, 'init()');
            ctrl.entity = _.clone(entity);
            ctrl.editing = !!ctrl.entity._id;
            createTextMap();
        } catch (e) {
            console.error(e.name, e.message);
            throw e; // Re-throw for unit tests etc.
        }
    };

    ctrl.cancel = function (form) {
        console.log(ctrl.NAME, 'cancel()');
        form.$setPristine();
        $state.go('app.modA');
    };

    ctrl.revert = function (form) {
        console.log(ctrl.NAME, 'revert()');
        $timeout(function () { // Allow text fields time to blur
            ctrl.init();
            form.$setPristine();
            form.$setUntouched();
            form.$setValidity();
        });
    };

    ctrl.submit = function (form) {
        console.log(ctrl.NAME, 'submit()', form.$valid);
        if (form.$valid) {
            form.$setPristine();
            form.$setSubmitted();
            // TODO: Submit data
        }
    };

    function createTextMap() {
        ctrl.text = {};
        if (ctrl.editing) {
            _.merge(ctrl.text, {
                viewTitle: 'Edit Entity'
            })
        } else {
            _.merge(ctrl.text, {
                viewTitle: 'Create Entity'
            })
        }
        console.log('ctrl.text', ctrl.text);
    }

    ctrl.init();

    ctrl.destroy = function () {
        console.log(ctrl.NAME, 'destroy()');
    };

    $scope.$on('$destroy', function () {
        ctrl.destroy();
    });
};