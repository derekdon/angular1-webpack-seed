'use strict';

var NAME = module.exports = 'app.common.factories';

angular.module(NAME, [])
    .factory('LocalStorageFactory', require('./localStorage'));