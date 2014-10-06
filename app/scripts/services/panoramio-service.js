'use strict';

/**
 * @ngdoc service
 * @name angularPanoramioApp.panoramioService
 * @description
 * # panoramioService
 * Service in the angularPanoramioApp.
 */
angular.module('angularPanoramioApp')
  .service('panoramioService', function panoramioService($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    if (typeof(Number.prototype.toRad) === 'undefined') {
        Number.prototype.toRad = function() {
            return this * Math.PI / 180;
        };
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    return {
        /**
         * Prende le foto dal servizio panoramio
         * @param  {[type]} lat [description]
         * @param  {[type]} lon [description]
         * @return {[type]}     [description]
         */
        getPhotos: function(lat, lon, size, from, to) {
          // TODO CHECK size
            switch (size) {
              case 'original':
              case 'medium':
              case 'small':
                break;
              default:
                size = 'small';
            }
            // TODO Check from to
            var radius = 5;
            var lon1 = lon - (radius / Math.abs(Math.cos(
                lat.toRad()) * 110));
            var lon2 = lon + (radius / Math.abs(Math.cos(
                lat.toRad()) * 110));
            var lat1 = lat - (radius / 110);
            var lat2 = lat + (radius / 110);
            return $http.jsonp('http://www.panoramio.com/map/get_panoramas.php?set=public&from=0&to=5&minx=' +
                lon1 + '&miny=' + lat1 + '&maxx=' +
                lon2 + '&maxy=' + lat2 + '&size=' + size + '&mapfilter=true&callback=JSON_CALLBACK'
            ).then(function(data) {
                return data.data.photos;
            });
        },


        getMainPhoto: function(lat, lon) {
            var radius = 5;
            var lon1 = lon - (radius / Math.abs(Math.cos(
                lat.toRad()) * 110));
            var lon2 = lon + (radius / Math.abs(Math.cos(
                lat.toRad()) * 110));
            var lat1 = lat - (radius / 110);
            var lat2 = lat + (radius / 110);
            return $http.jsonp('http://www.panoramio.com/map/get_panoramas.php?set=public&from=0&to=1&minx=' +
                lon1 + '&miny=' + lat1 + '&maxx=' +
                lon2 + '&maxy=' + lat2 + '&size=medium&mapfilter=true&callback=JSON_CALLBACK'
            ).then(function(data) {
                return data.data.photos;
            });
        },

        getRandomOriginal: function(lat, lon) {
            var radius = 5;
            var lon1 = lon - (radius / Math.abs(Math.cos(
                lat.toRad()) * 110));
            var lon2 = lon + (radius / Math.abs(Math.cos(
                lat.toRad()) * 110));
            var lat1 = lat - (radius / 110);
            var lat2 = lat + (radius / 110);
            return $http.jsonp('http://www.panoramio.com/map/get_panoramas.php?set=public&from=0&to=10&minx=' +
                lon1 + '&miny=' + lat1 + '&maxx=' +
                lon2 + '&maxy=' + lat2 + '&size=original&mapfilter=true&callback=JSON_CALLBACK'
            ).then(function(data) {
              var r = getRandomInt(0,10);
                return data.data.photos[r];
            });
        },

        getRandomMainPhoto: function(lat, lon) {
            var radius = 5;
            var lon1 = lon - (radius / Math.abs(Math.cos(
                lat.toRad()) * 110));
            var lon2 = lon + (radius / Math.abs(Math.cos(
                lat.toRad()) * 110));
            var lat1 = lat - (radius / 110);
            var lat2 = lat + (radius / 110);
            return $http.jsonp('http://www.panoramio.com/map/get_panoramas.php?set=public&from=0&to=10&minx=' +
                lon1 + '&miny=' + lat1 + '&maxx=' +
                lon2 + '&maxy=' + lat2 + '&size=medium&mapfilter=true&callback=JSON_CALLBACK'
            ).then(function(data) {
              var r = getRandomInt(0,10);
              return data.data.photos[r];
            });
        }
    };
  });
