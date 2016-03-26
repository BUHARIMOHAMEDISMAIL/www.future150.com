describe('campsController', function() {
  beforeEach(module('future150'));

  var $controller,
    $scope,
    $rootScope,
    campsController,
    $httpBackend,
    mockEventsService,
    eventsServiceGetCampsStub;

  beforeEach(inject(function(_$controller_,
      _$rootScope_,
      _$q_,
      _$httpBackend_) {
    $rootScope = _$rootScope_;
    $controller = _$controller_;
    $scope = _$rootScope_.$new();
    $httpBackend = _$httpBackend_;

    mockEventsService = {
      getCamps: function() {}
    };

    var mockEventsResult = {
      count: 2,
      events: [
        {},
        {}
      ]
    };
    eventsServiceGetCampsStub = sinon.stub(mockEventsService, 'getCamps')
      .returns(_$q_.resolve(mockEventsResult));

    campsController = $controller('campsController', {
      $scope: $scope,
      eventsService: mockEventsService
    });
    $scope.$apply();
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(campsController).toBeDefined();
  });

  it('should return Camps', function() {
    expect(campsController.title).toEqual('Camps');
  });

  it('should call getCamps function of eventsService with correct params', function() {
    expect(eventsServiceGetCampsStub).toHaveBeenCalledWith(null, 1, 10);
  });

  describe('count', function() {
    it('should be correct value', function() {
      expect(campsController.count).toBe(2);
    });
  });

  describe('camps', function() {
    it('should have correct length', function() {
      expect(campsController.camps.length).toEqual(2);
    });
  });
});
