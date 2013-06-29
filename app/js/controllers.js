'use strict';

var app = angular.module('bjarkehs.controllers', ['ui.bootstrap.dialog']);

/* Controllers */

app.controller('WelcomeCtrl', [function() {

}]);

app.controller('NewsCtrl', ['$scope', 'Project', function($scope, Project) {
    $scope.projects = Project.query();
}]);

app.controller('FollowCtrl', ['$scope', 'Outlet', 'Tweet', function($scope, Outlet, Tweet) {
    $scope.outlets = Outlet.query();
    $scope.tweets = Tweet.query();
}]);

app.controller('ContactCtrl', ['$scope', '$dialog', function($scope, $dialog) {
    $scope.initialContact = {};
    $scope.contact = angular.copy($scope.initialContact);

    $scope.opts = {
        backdrop: true,
        keyboard: true,
        backdropClick: true,
        templateUrl: 'partials/message_sent.html',
        controller: 'DialogCtrl'
    };

    $scope.openDialog = function(){
        var d = $dialog.dialog($scope.opts);
        d.open();
    };

    $scope.openDialog();

    $scope.sendMail = function sendMail(contact) {
        $scope.contact = angular.copy($scope.initialContact);

        $scope.openDialog();
    };

}]);

app.controller('DialogCtrl', ['$scope', 'dialog', function($scope, dialog) {
    $scope.close = function(){
        dialog.close();
    };
}]);