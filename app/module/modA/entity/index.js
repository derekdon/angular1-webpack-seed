'use strict';

require('./style.scss');

var NAME = module.exports = 'app.modA.entity';

angular.module(NAME, [
])
    .config(require('./config'));