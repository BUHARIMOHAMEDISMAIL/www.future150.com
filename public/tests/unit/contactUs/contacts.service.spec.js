describe('contactsService', function() {
  beforeEach(module('future150'));

  var contactsService,
    $httpBackend,
    mockContactResult = {
      count: 2,
      contacts: [
        {},
        {}
      ]
    };

  beforeEach(inject(function(_contactsService_,
      _$httpBackend_) {
    contactsService = _contactsService_;
    $httpBackend = _$httpBackend_;

    $httpBackend.whenGET('//future150.herokuapp.com/contacts').respond(mockContactResult);
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(contactsService).toBeDefined();
  });

  describe('getAll', function() {
    it('should be defined', function() {
      expect(contactsService.getAll).toBeDefined();
    });

    it('should return count of 2', function() {
      contactsService.getAll().then(function(contactResult) {
        expect(contactResult.count).toEqual(2);
      });
      $httpBackend.flush();
    });
    it('should return 2 contacts', function() {
      contactsService.getAll().then(function(contactResult) {
        expect(contactResult.contacts.length).toEqual(2);
      });
      $httpBackend.flush();
    });
  });
});
