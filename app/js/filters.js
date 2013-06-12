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
    })
    .filter('twitterify', function() {
        return function(str) {
            var twitterUrl = 'https://twitter.com';
            var urlRegExp = /[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/g;
            var atUserRegExp = /(@([A-Za-z0-9-_]+))/g;
            var hashTagRegExp = /(#([A-Za-z0-9-_]+))/g;

            function linkToUrl(url) {
                return url.link(url);
            }

            function linkToUser(match, atUser, user) {
                return atUser.link(twitterUrl + '/' + user);
            }

            function linkToTag(match, hashTag, tag) {
                return hashTag.link(twitterUrl + '/search/' + tag);
            }

            return str.replace(urlRegExp, linkToUrl).replace(atUserRegExp, linkToUser).replace(hashTagRegExp, linkToTag);
        }
    });
