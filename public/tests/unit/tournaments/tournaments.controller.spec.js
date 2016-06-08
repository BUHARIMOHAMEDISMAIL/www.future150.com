describe('tournamentsController', function() {
  beforeEach(module('future150'));

  var $controller,
    $scope,
    $rootScope,
    tournamentsController,
    $httpBackend,
    mockTournamentsService,
    tournamentsServiceGetAllStub;

  beforeEach(inject(function(_$controller_,
      _$rootScope_,
      _$q_,
      _$httpBackend_) {
    $rootScope = _$rootScope_;
    $controller = _$controller_;
    $scope = _$rootScope_.$new();
    $httpBackend = _$httpBackend_;

    mockTournamentsService = {
      getAll: function() {}
    };

    var mockTournamentsResult = {
      count: 2,
      tournaments: [
        {},
        {}
      ]
    };
    tournamentsServiceGetAllStub = sinon.stub(mockTournamentsService, 'getAll')
      .returns(_$q_.resolve(mockTournamentsResult));

    tournamentsController = $controller('tournamentsController', {
      $scope: $scope,
      tournamentsService: mockTournamentsService
    });
    $scope.$apply();
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(tournamentsController).toBeDefined();
  });

  it('should call getCamps function of eventsService with correct params', function() {
    expect(tournamentsServiceGetAllStub).toHaveBeenCalledWith(null, 1, 10);
  });

  describe('count', function() {
    it('should be correct value', function() {
      expect(tournamentsController.count).toBe(2);
    });
  });

  describe('camps', function() {
    it('should have correct length', function() {
      expect(tournamentsController.tournaments.length).toEqual(2);
    });
  });
});
