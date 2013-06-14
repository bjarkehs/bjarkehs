'use strict';

var app = angular.module('bjarkehs.controllers', []);

/* Controllers */

app.controller('WelcomeCtrl', [function() {

}]);

app.controller('NewsCtrl', ['$scope', 'Project', function($scope, Project) {
    $scope.projects = Project.query();
    $scope.i = 0;
    $scope.details = false;

    $scope.toggleDetails = function toggleDetails(details) {
        if (details) {
            return false;
        }
        else {
            return true;
        }
    }
}]);

app.controller('FollowCtrl', ['$scope', 'Outlet', 'Tweet', function($scope, Outlet, Tweet) {
    $scope.outlets = Outlet.query();
    $scope.tweets = Tweet.query();
}]);

app.controller('ContactCtrl', [function() {

}]);