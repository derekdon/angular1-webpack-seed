'use strict';

module.exports = function ($stateProvider) {

    console.log('modA entity config');

    $stateProvider
        .state('app.modA-entity', {
            url: '/modA-entity',
            params: {
                id: null,
                entity: null
            },
            views: {
                'content': {
                    template: require('./template.html'),
                    controller: require('./ctrl'),
                    controllerAs: 'ctrl',
                    resolve: {
                        entity: function ($stateParams, ModAService) {
                            if ($stateParams.entity) {
                                return $stateParams.entity;
                            } else if ($stateParams.id) {
                                return ModAService.read($stateParams.id);
                            } else {
                                return {}; // TODO: Use an entity service to create blank entities
                            }
                        }
                    }
                }
            }
        });
};