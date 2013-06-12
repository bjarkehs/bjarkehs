'use strict';

/* Controllers */

angular.module('bjarkehs.controllers', []).
  controller('Home', ['$scope','$filter', 'Outlet', 'Project', function($scope, $filter, Outlet, Project) {
    $scope.parts = [
        "partials/welcome.html",
        "partials/news.html",
        "partials/follow.html",
        "partials/contact.html"
    ];
    $scope.outlets = Outlet.query();
    $scope.projects = Project.query();
  }])
  .controller('MyCtrl2', [function() {

  }]);