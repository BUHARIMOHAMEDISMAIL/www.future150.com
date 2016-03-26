describe('contactsService', function() {
  beforeEach(module('future150Admin'));

  var contactsService,
    httpBackend,
    mockContactsResponse,
    mockContactResponse;

  beforeEach(inject(function(_contactsService_,
      _$httpBackend_) {
    contactsService = _contactsService_;
    httpBackend = _$httpBackend_;
    mockContactsResponse = {};
    mockContactResponse = {};
  }));

  it('should be defined', function() {
    expect(contactsService).toBeDefined();
  });

  describe('getAll', function() {
    it('should be defined', function() {
      expect(contactsService.getAll).toBeDefined();
    });
    it('should return the correct result without parameters', function() {
      httpBackend.whenGET('//future150.herokuapp.com/contacts').respond(mockContactsResponse);
      contactsService.getAll().then(function(result) {
        expect(result).toEqual(mockContactsResponse);
      });
      httpBackend.flush();
    });
    it('should return the correct result with parameters', function() {
      httpBackend.whenGET('//future150.herokuapp.com/contacts?page=3&pageSize=10&q=test').respond(mockContactsResponse);
      contactsService.getAll('test', 3, 10).then(function(result) {
        expect(result).toEqual(mockContactsResponse);
      });
      httpBackend.flush();
    });
  });

  describe('getById', function() {
    it('should be defined', function() {
      expect(contactsService.getById).toBeDefined();
    });
    it('should return the correct contact', function() {
      httpBackend.whenGET('//future150.herokuapp.com/contacts/123').respond(mockContactResponse);
      contactsService.getById(123).then(function(contact) {
        expect(contact).toEqual(mockContactResponse);
      });
      httpBackend.flush();
    });
  });

  describe('save', function() {
    it('should be defined', function() {
      expect(contactsService.save).toBeDefined();
    });
    it('should make post request to /contacts', function() {
      httpBackend.expectPOST('//future150.herokuapp.com/contacts').respond(201);
      contactsService.save({});
      httpBackend.flush();
    });
    it('should make put request to /contacts/123', function() {
      httpBackend.expectPUT('//future150.herokuapp.com/contacts/123').respond(204);
      contactsService.save({ _id: 123 });
      httpBackend.flush();
    });
  });

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });
});
