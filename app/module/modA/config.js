'use strict';

module.exports = function ($stateProvider) {

    console.log('modA config');

    $stateProvider
        .state('app.modA', {
            url: '/modA',
            views: {
                'content': {
                    template: require('./template.html'),
                    controller: require('./ctrl'),
                    controllerAs: 'ctrl',
                    resolve: {
                        entities: function (ModAService) {
                            return ModAService.readCanned(10);
                        }
                    }
                }
            }
        });
};