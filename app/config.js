'use strict';

module.exports = function ($stateProvider, $urlRouterProvider) {

    console.log('app config');

    $stateProvider
        .state('app', {
            url: '/app',
            views: {
                'main': {
                    templateUrl: 'common/main.html'
                }
            }
        });

    $urlRouterProvider.otherwise('/app/modA');
};