describe('tournamentsService', function() {
  beforeEach(module('future150'));

  var tournamentsService,
    $httpBackend,
    mockTournamentResult = {
      count: 2,
      tournaments: [
        {},
        {}
      ]
    };

  beforeEach(inject(function(_tournamentsService_,
      _$httpBackend_) {
    tournamentsService = _tournamentsService_;
    $httpBackend = _$httpBackend_;

    $httpBackend.whenGET('/tournaments').respond(mockTournamentResult);
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(tournamentsService).toBeDefined();
  });

  describe('getAll', function() {
    it('should be defined', function() {
      expect(tournamentsService.getAll).toBeDefined();
    });

    it('should return count of 2', function() {
      tournamentsService.getAll().then(function(tournamentResult) {
        expect(tournamentResult.count).toEqual(2);
      });
      $httpBackend.flush();
    });

    it('should return 2 events', function() {
      tournamentsService.getAll().then(function(tournamentResult) {
        expect(tournamentResult.tournaments.length).toEqual(2);
      });
      $httpBackend.flush();
    });
  });

  describe('getBySlug', function() {
    it('should be defined', function() {
      expect(tournamentsService.getBySlug).toBeDefined();
    });
  });
});
