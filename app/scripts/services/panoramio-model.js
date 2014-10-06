'use strict';

/**
 * @ngdoc service
 * @name angularPanoramioApp.panoramioModel
 * @description
 * # panoramioModel
 * Factory in the angularPanoramioApp.
 */
angular.module('angularPanoramioApp')
  .factory('panoramioModel', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
