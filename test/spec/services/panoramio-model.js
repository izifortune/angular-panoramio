'use strict';

describe('Service: panoramioModel', function () {

  // load the service's module
  beforeEach(module('angularPanoramioApp'));

  // instantiate service
  var panoramioModel;
  beforeEach(inject(function (_panoramioModel_) {
    panoramioModel = _panoramioModel_;
  }));

  it('should do something', function () {
    expect(!!panoramioModel).toBe(true);
  });

});
