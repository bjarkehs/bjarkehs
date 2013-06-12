'use strict';

/* Filters */

angular.module('bjarkehs.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }])
  .filter('getAge', function() {
    return function(date) {
      var today = new Date();
      var birth = new Date(date + ' 00:00:00');
      var age = Math.floor((today - birth) / (31557600000));
      return age;
    }
  })
  .filter('capitalize', function() {
    return function(input) {
        return input.substring(0,1).toUpperCase()+input.substring(1);
    }
  });
