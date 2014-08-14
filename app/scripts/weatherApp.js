'use strict';

var weatherApp = angular.module('weatherApp', ['ngSanitize', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/main.html',
                controller: 'MainCtrl'
            })
            .when('/result', {
                templateUrl: 'partials/result.html',
                controller: 'ResultCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
