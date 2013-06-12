'use strict';

/* Controllers */

angular.module('bjarkehs.controllers', []).
  controller('Home', ['$scope','$filter', 'Outlet', 'Project', 'Tweet', function($scope, $filter, Outlet, Project, Tweet) {
    $scope.parts = [
        "partials/welcome.html",
        "partials/news.html",
        "partials/follow.html",
        "partials/contact.html"
    ];
    $scope.outlets = Outlet.query();
    $scope.projects = Project.query();
    $scope.tweets = Tweet.query();
  }])
  .controller('MyCtrl2', [function() {

  }]);