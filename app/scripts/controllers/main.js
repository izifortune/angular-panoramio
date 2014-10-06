'use strict';

/**
 * @ngdoc function
 * @name angularPanoramioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPanoramioApp
 */
angular.module('angularPanoramioApp')
  .controller('MainCtrl', function ($scope, panoramioService) {
    var lat = 41.9011422;
    var lon = 12.481368999999972;
    var res = panoramioService.getMainPhoto(lat, lon);
    res.then(function(data) {
      console.log(data);
      $scope.photo = data[0];
      $scope.medium = data[0].photo_file_url.replace('small', 'medium');
    });

    var res2 = panoramioService.getPhotos(lat, lon, 'original');
    res2.then(function(data) {
      console.log(data);
      $scope.original = data;
    });
  });
