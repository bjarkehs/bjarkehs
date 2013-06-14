'use strict';

var app = angular.module('bjarkehs.filters', []);

/* Filters */

app.filter('interpolate', ['version', function(version) {
    return function(text) {
        return String(text).replace(/\%VERSION\%/mg, version);
    }
}]);

app.filter('getAge', function() {
    return function(date) {
        var today = new Date();
        var birth = new Date(date + ' 00:00:00');
        var age = Math.floor((today - birth) / (31557600000));
        return age;
    }
});

app.filter('capitalize', function() {
    return function(input) {
        return input.substring(0,1).toUpperCase()+input.substring(1);
    }
})

app.filter('twitterify', function() {
    return function(str) {
        var twitterUrl = 'https://twitter.com';
        var urlRegExp = /[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/g;
        var atUserRegExp = /(@([A-Za-z0-9-_]+))/g;
        var hashTagRegExp = /(#([A-Za-z0-9-_]+))/g;

        function linkToUrl(url) {
            return '<a href="'+ url +'" target="_blank">'+url+'</a>';
        }

        function linkToUser(match, atUser, user) {
            return '<a href="'+ twitterUrl + '/' + user +'" target="_blank">'+atUser+'</a>';
        }

        function linkToTag(match, hashTag, tag) {
            return '<a href="'+ twitterUrl + '/search/' + tag +'" target="_blank">'+hashTag+'</a>';
        }

        return str.replace(urlRegExp, linkToUrl).replace(atUserRegExp, linkToUser).replace(hashTagRegExp, linkToTag);
    }
});

app.filter('twitterToTimestamp', ['$filter', function($filter) {
    return function(date) {
        return new Date(Date.parse(date)).getTime();
    }
}]);
