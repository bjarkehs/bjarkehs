'use strict';


// Declare app level module which depends on filters, and services
angular.module('bjarkehs', ['bjarkehs.filters', 'bjarkehs.services', 'bjarkehs.directives', 'bjarkehs.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'Home'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
