(function(){
    'use strict';

    angular
        .module('App', ['ui.router', 'satellizer'])
        .config(function($stateProvider, $urlRouterProvider, $authProvider){
            $authProvider.loginUrl = 'http://localhost:8000/api/authenticate';

            $urlRouterProvider.otherwise('/auth');

            $stateProvider
                .state('auth', {
                    url: '/auth',
                    templateUrl: 'templates/auth.html',
                    controller: 'AuthController as vm'
                })
                .state('users',{
                    url: '/users',
                    templateUrl: 'templates/users.html',
                    controller: 'UserController as vm'
                });
        });
})();

