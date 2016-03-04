'use strict';

var NAME = module.exports = 'app.common.services';

angular.module(NAME, [])
    .service('FormUtilsService', require('./formUtils'))
    .service('GUIDService', require('./guid'));