'use strict';

describe('Service: panoramioService', function () {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = '200000';

  // load the service's module
  beforeEach(function() {
    module('angularPanoramioApp');
    module('ngMockE2E');
  });

  var lat = 41.9011422;
  var lon = 12.481368999999972;

  // instantiate service
  var $httpBackend;
  var panoramioService;
  beforeEach(inject(function ($injector, _panoramioService_) {
    panoramioService = _panoramioService_;

    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('http://www.panoramio.com/map/get_panoramas.php').passThrough();
  }));

  it('Deve essere definito', function () {
    expect(panoramioService).toBeDefined();
  });

  it('Deve ritornare una promessa', function() {
    var res = panoramioService.getMainPhoto(lat, lon);
    expect(res.then).toBeDefined();
  });

  it('Deve ritornare la prima foto da panoramio', function(done) {
    var res = panoramioService.getMainPhoto(lat,lon);
    res.success(function(data) {
      console.log(arguments);
      expect(data[0]).toEqual(1);
      expect(data[0]).toBeUndefined();
      expect(data[0].photo_file_url).toBeUndefined();
      expect(data[0].owner_name).toBeUndefined();
      expect(data[0].owner_url).toBeUndefined();
      done();
    })
    .error(function(data) {
      console.log(arguments);
    });
  });

  it('Deve ritornare 5 foto da panoramio', function(done) {
    var res = panoramioService.getPhotos(lat, lon);
    res.success(function(data) {
      expect(data.length).toEqual(5);
      done();
    });
  });

  it('Deve ritornare un immagine random', function(done) {
    var res = panoramioService.getRandomOriginal(lat, lon);
    var res2 = panoramioService.getRandomOriginal(lat, lon);
    res.success(function(data) {
      res2.success(function(data2) {
        expect(data.photo_file_url).toNotEqual(data2.photo_file_url);
        done();
      });
    });
  });

});
