describe('campController', function() {
  beforeEach(module('future150'));

  var $scope,
    $rootScope,
    campController,
    mockCampsService,
    campsServiceGetBySlugStub,
    testCamp,
    $httpBackend;

  beforeEach(inject(function(_$controller_,
      _$rootScope_,
      _$q_,
      _$httpBackend_) {
    $rootScope = _$rootScope_;
    $scope = _$rootScope_.$new();
    $httpBackend = _$httpBackend_;

    mockCampsService = {
      getBySlug: function() {}
    };

    var mockState = {
      params: {
        slug: 'test-camp'
      }
    };

    testCamp = {
    };

    campsServiceGetBySlugStub = sinon.stub(mockCampsService, 'getBySlug')
      .returns(_$q_.resolve(testCamp));

    campController = _$controller_('campController', {
      $state: mockState,
      campsService: mockCampsService
    });
    $scope.$apply();
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(campController).toBeDefined();
  });

  describe('camp', function() {
    it('should return correct camp', function() {
      expect(campController.camp).toBe(testCamp);
    });
  });
});
