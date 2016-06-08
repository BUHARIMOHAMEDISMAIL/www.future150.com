describe('campsService', function() {
  beforeEach(module('future150'));

  var campsService,
    $httpBackend,
    mockCampResult = {
      count: 2,
      camps: [
        {},
        {}
      ]
    };

  beforeEach(inject(function(_campsService_,
      _$httpBackend_) {
    campsService = _campsService_;
    $httpBackend = _$httpBackend_;

    $httpBackend.whenGET('/camps').respond(mockCampResult);
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(campsService).toBeDefined();
  });

  describe('getAll', function() {
    it('should be defined', function() {
      expect(campsService.getAll).toBeDefined();
    });

    it('should return count of 2', function() {
      campsService.getAll().then(function(campResult) {
        expect(campResult.count).toEqual(2);
      });
      $httpBackend.flush();
    });

    it('should return 2 events', function() {
      campsService.getAll().then(function(campResult) {
        expect(campResult.camps.length).toEqual(2);
      });
      $httpBackend.flush();
    });
  });

  describe('getBySlug', function() {
    it('should be defined', function() {
      expect(campsService.getBySlug).toBeDefined();
    });
  });
});
