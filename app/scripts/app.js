'use strict';

/**
 * @ngdoc overview
 * @name timelogApp
 * @description
 * # timelogApp
 *
 * Main module of the application.
 */
angular
  .module('timelogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'ui.bootstrap'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'TimelogCtrl'
      })
      .when('/showlog', {
        templateUrl: 'views/showlog.html',
        controller: 'ShowlogCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

