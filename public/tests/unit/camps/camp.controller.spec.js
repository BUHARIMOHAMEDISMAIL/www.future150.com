describe('campController', function() {
  beforeEach(module('future150'));

  var $scope,
    $rootScope,
    campController,
    mockEventsService,
    eventsServiceGetBySlugStub,
    testEvent,
    $httpBackend;

  beforeEach(inject(function(_$controller_,
      _$rootScope_,
      _$q_,
      _$httpBackend_) {
    $rootScope = _$rootScope_;
    $scope = _$rootScope_.$new();
    $httpBackend = _$httpBackend_;

    mockEventsService = {
      getBySlug: function() {}
    };

    var mockState = {
      params: {
        slug: 'test-event'
      }
    };

    testEvent = {
    };

    eventsServiceGetBySlugStub = sinon.stub(mockEventsService, 'getBySlug')
      .returns(_$q_.resolve(testEvent));

    campController = _$controller_('campController', {
      $state: mockState,
      eventsService: mockEventsService
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
      expect(campController.camp).toBe(testEvent);
    });
  });
});
