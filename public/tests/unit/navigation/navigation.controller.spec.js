describe('navigationController', function() {
  beforeEach(module('future150'));

  var $scope,
    navigationController,
    campsServiceGetAllStub,
    tournamentsServiceGetAllStub,
    $httpBackend;

  beforeEach(inject(function(_$controller_,
      _$q_,
      _$rootScope_,
      _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $scope = _$rootScope_.$new();

    var mockCampsService = {
      getAll: function() {}
    };
    var mockTournamentsService = {
      getAll: function() {}
    };

    campsServiceGetAllStub = sinon.stub(mockCampsService, 'getAll')
      .returns(_$q_.resolve({}));
    tournamentsServiceGetAllStub = sinon.stub(mockTournamentsService, 'getAll')
      .returns(_$q_.resolve({}));

    navigationController = _$controller_('navigationController', {
      campsService: mockCampsService,
      tournamentsService: mockTournamentsService
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
