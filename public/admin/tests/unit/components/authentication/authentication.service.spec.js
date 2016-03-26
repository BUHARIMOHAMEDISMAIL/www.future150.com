describe('authenticationService', function() {
  beforeEach(module('future150Admin'));

  var authenticationService,
    httpBackend,
    localStorageServiceSetStub,
    localStorageServiceRemoveStub,
    localStorageServiceGetStub;

  beforeEach(inject(function(_authenticationService_,
      _$httpBackend_,
      localStorageService) {
    authenticationService = _authenticationService_;
    httpBackend = _$httpBackend_;
    localStorageServiceSetStub = sinon.stub(localStorageService, 'set');
    localStorageServiceRemoveStub = sinon.stub(localStorageService, 'remove');
    localStorageServiceGetStub = sinon.stub(localStorageService, 'get');

    localStorageServiceGetStub.withArgs('user').returns({ username: 'test' });
    localStorageServiceGetStub.withArgs('token').returns('12345');
  }));

  it('should be defined', function() {
    expect(authenticationService).toBeDefined();
  });

  describe('login', function() {
    it('should be defined', function() {
      expect(authenticationService.login).toBeDefined();
    });
    it('should make post request to /token', function() {
      httpBackend.expectPOST('/token').respond(201, { token: '12345' });
      httpBackend.whenGET('/profile').respond({ user: {} });
      authenticationService.login({});
      httpBackend.flush();
    });
    it('should call set function of localStorageService with correct parameters', function() {
      httpBackend.whenPOST('/token').respond(201, { token: '12345' });
      httpBackend.whenGET('/profile').respond({ user: {} });
      authenticationService.login({});
      httpBackend.flush();
      expect(localStorageServiceSetStub.calledWith('token', '12345')).toBeTruthy();
    });
    it('should make get request to /profile', function() {
      httpBackend.whenPOST('/token').respond(201, { token: '12345' });
      httpBackend.expectGET('/profile').respond({ user: {} });
      authenticationService.login({});
      httpBackend.flush();
    });
    it('should call set function of localStorageService with correct parameters when profileImageUrl is empty', function() {
      httpBackend.whenPOST('/token').respond(201, { token: '12345' });
      httpBackend.whenGET('/profile').respond({ user: { username: 'test' } });
      authenticationService.login({});
      httpBackend.flush();
      expect(localStorageServiceSetStub.calledWith('user', { username: 'test', profileImageUrl: '//placehold.it/160x160?text=No Image' })).toBeTruthy();
    });
    it('should call set function of localStorageService with correct parameters when profileImageUrl is not empty', function() {
      httpBackend.whenPOST('/token').respond(201, { token: '12345' });
      httpBackend.whenGET('/profile').respond({ user: { username: 'test', profileImageUrl: 'test.png' } });
      authenticationService.login({});
      httpBackend.flush();
      expect(localStorageServiceSetStub.calledWith('user', { username: 'test', profileImageUrl: 'test.png' })).toBeTruthy();
    });
  });

  describe('logout', function() {
    it('should be defined', function() {
      expect(authenticationService.logout).toBeDefined();
    });
    it('should call remove function of localStorageService with correct parameters', function() {
      authenticationService.logout();
      expect(localStorageServiceRemoveStub.calledWith('token')).toBeTruthy();
    });
    it('should call remove function of localStorageService with correct parameters', function() {
      authenticationService.logout();
      expect(localStorageServiceRemoveStub.calledWith('user')).toBeTruthy();
    });
  });

  describe('getCurrentUser', function() {
    it('should be defined', function() {
      expect(authenticationService.getCurrentUser).toBeDefined();
    });
    it('should call get function of localStorageService with correct parameters', function() {
      authenticationService.getCurrentUser();
      expect(localStorageServiceGetStub.calledWith('user')).toBeTruthy();
    });
    it('should return the correct user', function() {
      var currentUser = authenticationService.getCurrentUser();
      expect(currentUser).toEqual({ username: 'test' });
    });
  });

  describe('isAuthenticated', function() {
    it('should be defined', function() {
      expect(authenticationService.isAuthenticated).toBeDefined();
    });
    it('should call get function of localStorageService with correct parameters', function() {
      authenticationService.isAuthenticated();
      expect(localStorageServiceGetStub.calledWith('user')).toBeTruthy();
    });
    it('should return the correct value', function() {
      var isAuthenticated = authenticationService.isAuthenticated();
      expect(isAuthenticated).toBeTruthy();
    });
  });

  describe('getAuthToken', function() {
    it('should be defined', function() {
      expect(authenticationService.getAuthToken).toBeDefined();
    });
    it('should call get function of localStorageService with correct parameters', function() {
      authenticationService.getAuthToken();
      expect(localStorageServiceGetStub.calledWith('token')).toBeTruthy();
    });
    it('should return the correct value', function() {
      var authToken = authenticationService.getAuthToken();
      expect(authToken).toEqual('12345');
    });
  });

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });
});
