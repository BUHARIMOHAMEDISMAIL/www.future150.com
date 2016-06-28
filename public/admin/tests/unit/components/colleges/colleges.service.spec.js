describe('collegesService', function() {
  beforeEach(module('future150Admin'));

  var collegesService,
    httpBackend,
    mockCollegesResponse,
    mockCollegeResponse;

  beforeEach(inject(function(_collegesService_,
      _$httpBackend_) {
    collegesService = _collegesService_;
    httpBackend = _$httpBackend_;
    mockCollegesResponse = {};
    mockCollegeResponse = {};
  }));

  it('should be defined', function() {
    expect(collegesService).toBeDefined();
  });

  describe('getAll', function() {
    it('should be defined', function() {
      expect(collegesService.getAll).toBeDefined();
    });
    it('should return the correct result without parameters', function() {
      httpBackend.whenGET('/colleges').respond(mockCollegesResponse);
      collegesService.getAll().then(function(result) {
        expect(result).toEqual(mockCollegesResponse);
      });
      httpBackend.flush();
    });
    it('should return the correct result with parameters', function() {
      httpBackend.whenGET('/colleges?page=3&pageSize=10&q=test').respond(mockCollegesResponse);
      collegesService.getAll('test', 3, 10).then(function(result) {
        expect(result).toEqual(mockCollegesResponse);
      });
      httpBackend.flush();
    });
  });

  describe('getById', function() {
    it('should be defined', function() {
      expect(collegesService.getById).toBeDefined();
    });
    it('should return the correct college', function() {
      httpBackend.whenGET('/colleges/123').respond(mockCollegeResponse);
      collegesService.getById(123).then(function(college) {
        expect(college).toEqual(mockCollegeResponse);
      });
      httpBackend.flush();
    });
  });

  describe('save', function() {
    it('should be defined', function() {
      expect(collegesService.save).toBeDefined();
    });
    it('should make post request to /colleges', function() {
      httpBackend.expectPOST('/colleges').respond(201);
      collegesService.save({});
      httpBackend.flush();
    });
    it('should make put request to /colleges/123', function() {
      httpBackend.expectPUT('/colleges/123').respond(204);
      collegesService.save({ _id: 123 });
      httpBackend.flush();
    });
  });

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });
});
