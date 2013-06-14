'use strict';

var app = angular.module('bjarkehs.directives', []);

/* Directives */

app.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
}]);
