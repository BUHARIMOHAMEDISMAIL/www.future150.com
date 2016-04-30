describe('eventsService', function() {
  beforeEach(module('future150'));

  var eventsService,
    $httpBackend,
    mockEventResult = {
      count: 2,
      events: [
        {},
        {}
      ]
    };

  beforeEach(inject(function(_eventsService_,
      _$httpBackend_) {
    eventsService = _eventsService_;
    $httpBackend = _$httpBackend_;

    $httpBackend.whenGET('/events').respond(mockEventResult);
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(eventsService).toBeDefined();
  });

  describe('getAll', function() {
    it('should be defined', function() {
      expect(eventsService.getAll).toBeDefined();
    });

    it('should return count of 2', function() {
      eventsService.getAll().then(function(eventResult) {
        expect(eventResult.count).toEqual(2);
      });
      $httpBackend.flush();
    });

    it('should return 2 events', function() {
      eventsService.getAll().then(function(eventResult) {
        expect(eventResult.events.length).toEqual(2);
      });
      $httpBackend.flush();
    });
  });

  describe('getBySlug', function() {
    it('should be defined', function() {
      expect(eventsService.getBySlug).toBeDefined();
    });
  });

  describe('getCamps', function() {
    it('should be defined', function() {
      expect(eventsService.getCamps).toBeDefined();
    });
  });

  describe('getTournaments', function() {
    it('should be defined', function() {
      expect(eventsService.getTournaments).toBeDefined();
    });
  });
});
