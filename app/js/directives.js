'use strict';

var app = angular.module('bjarkehs.directives', []);

/* Directives */

app.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
}]);

app.directive('sticky', ['$window', function($window) {
    return function(scope, element, attrs) {
        var windowElem = angular.element($window);
        var elementOffset = $(element).offset().top-40;
        windowElem.bind('scroll', function(e) {
            if (elementOffset-$(windowElem).scrollTop() < 0) {
                attrs.$set('class', 'fixed');
            } else {
                attrs.$set('class', '');
            }
         });
        // scope.offset = scope[attrs.scrollPosition];
        // var windowEl = angular.element($window);
        //     windowEl.on('scroll', function() {
        //         scope.$apply(function() {
        //             scope[attrs.scrollPosition] = windowEl.scrollTop();
        //         });
        //     });
    };
}]);