'use strict';

var NAME = module.exports = 'modA';

angular.module(NAME, [
    require('./entity')
])
    .config(require('./config'))
    .service('ModAService', require('./service'));