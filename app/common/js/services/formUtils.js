'use strict';

module.exports = function () {

    var utils = this;

    utils.labelValidityClasses = function (field) {
        return {
            'valid': field.$valid,
            'has-error': field.$invalid && field.$touched
        }
    };

    utils.iconValidityClasses = function (field) {
        return {
            'icon fa fa-check-circle': field.$valid,
            'icon fa fa-exclamation-triangle': field.$invalid && field.$touched
        }
    };

    utils.stepIconStatusClasses = function (step) {
        return {
            'icon fa fa-check-circle': step.isComplete,
            'icon fa fa-exclamation-triangle': step.isStarted && !step.isComplete
        }
    };

    utils.includeErrorMessages = function (field) {
        return field.$touched;
    };

    utils.disableSubmit = function (step, form) {
        return form.$invalid || step.isComplete && form.$pristine;
    };

    return utils;
};