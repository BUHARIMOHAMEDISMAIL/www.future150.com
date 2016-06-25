describe('tournamentController', function() {
  beforeEach(module('future150'));

  var $scope,
    $rootScope,
    tournamentController,
    mockTournamentsService,
    tournamentsServiceGetBySlugStub,
    testTournament,
    $httpBackend;

  beforeEach(inject(function(_$controller_,
      _$rootScope_,
      _$q_,
      _$httpBackend_) {
    $rootScope = _$rootScope_;
    $scope = _$rootScope_.$new();
    $httpBackend = _$httpBackend_;

    mockTournamentsService = {
      getBySlug: function() {}
    };

    var mockState = {
      params: {
        slug: 'test-tournament'
      }
    };

    testTournament = {
    };

    tournamentsServiceGetBySlugStub = sinon.stub(mockTournamentsService, 'getBySlug')
      .returns(_$q_.resolve(testTournament));

    tournamentController = _$controller_('tournamentController', {
      $state: mockState,
      tournamentsService: mockTournamentsService
    });
    $scope.$apply();
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(tournamentController).toBeDefined();
  });

  describe('tournament', function() {
    it('should return correct tournament', function() {
      expect(tournamentController.tournament).toBe(testTournament);
    });
  });
});
