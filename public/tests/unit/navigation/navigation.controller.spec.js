describe('navigationController', function() {
  beforeEach(module('future150'));

  var $scope,
    navigationController,
    eventsServiceGetCampsStub,
    eventsServiceGetTournamentsStub,
    $httpBackend;

  beforeEach(inject(function(_$controller_,
      _$q_,
      _$rootScope_,
      _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $scope = _$rootScope_.$new();

    var mockEventsService = {
      getCamps: function() {},
      getTournaments: function() {}
    };

    eventsServiceGetCampsStub = sinon.stub(mockEventsService, 'getCamps')
      .returns(_$q_.resolve({}));
    eventsServiceGetTournamentsStub = sinon.stub(mockEventsService, 'getTournaments')
      .returns(_$q_.resolve({}));

    navigationController = _$controller_('navigationController', {
      eventsService: mockEventsService
    });
    $scope.$apply();
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(navigationController).toBeDefined();
  });
});
