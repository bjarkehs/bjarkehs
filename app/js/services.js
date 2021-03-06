'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('bjarkehs.services', ['ngResource'])
  .factory('Outlet', ['$resource', function($resource) {
    return $resource('outlets/:outletId.json', {}, {
      query: {method: 'GET', params: {outletId:'outlets'}, isArray:true}
    });
  }])
  .factory('Project', ['$resource', function($resource) {
    return $resource('projects/:projectId.json', {}, {
      query: {method: 'GET', params: {projectId:'projects'}, isArray:true}
    });
  }])
  .factory('Tweet', ['$resource', function($resource) {
    return $resource('twitter.json', {}, {
      query: {method: 'GET', isArray:true}
    });
  }])
  .factory('Mail', ['$resource', function($resource) {
    return $resource('scripts/sendMail.php', {}, {
      send: {method: 'POST'}
    });
  }]);
