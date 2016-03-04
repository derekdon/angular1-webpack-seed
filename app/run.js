'use strict';

module.exports = function ($rootScope) {

    console.log('app run');

    var listeners = [];

    listeners.push($rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        // If the user is not authorized, we can redirect them etc.
        console.info('toState', toState, 'toParams', toParams);
    }));

    listeners.push($rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        console.error(error);
    }));

    $rootScope.$on('$destroy', function () {
        listeners.forEach(function (listener) {
            listener();
        })
    });

};