describe('authenticationService', function() {
  beforeEach(module('future150'));

  var authenticationService,
    $httpBackend,
    localStorageServiceSetStub,
    localStorageServiceRemoveStub,
    localStorageServiceGetStub;

  beforeEach(inject(function(_authenticationService_,
      _localStorageService_,
      _$httpBackend_) {
    authenticationService = _authenticationService_;
    $httpBackend = _$httpBackend_;

    localStorageServiceSetStub = sinon.stub(_localStorageService_, 'set');
    localStorageServiceRemoveStub = sinon.stub(_localStorageService_, 'remove');
    localStorageServiceGetStub = sinon.stub(_localStorageService_, 'get');
    localStorageServiceGetStub.withArgs('user').returns({});
    localStorageServiceGetStub.withArgs('token').returns('1234');

    var testLoginResult = {
      token: '12345'
    },
    testProfileResult = {
      user: {
        profileImageUrl: '/uploads/img/test.png'
      }
    };

    $httpBackend.whenPOST('//future150.herokuapp.com/token').respond(testLoginResult);
    $httpBackend.whenGET('//future150.herokuapp.com/profile').respond(testProfileResult);
  }));

  it('should be defined', function() {
    expect(authenticationService).toBeDefined();
  });

  describe('login', function() {
    it('should be defined', function() {
      expect(authenticationService.login).toBeDefined();
    });

    it('should call set function of localStorageService with correct params', function() {
      authenticationService.login().then(function() {
        expect(localStorageServiceSetStub).toHaveBeenCalledWith('token', '12345');
      });
      $httpBackend.flush();
    });

    it('should call set function of localStorageService with correct params', function() {
      authenticationService.login().then(function() {
        expect(localStorageServiceSetStub).toHaveBeenCalledWith('user', { profileImageUrl: '/uploads/img/test.png' });
      });
      $httpBackend.flush();
    });
  });

  describe('logout', function() {
    it('should be defined', function() {
      expect(authenticationService.logout).toBeDefined();
    });

    it('should call remove function of localStorageService with correct params', function() {
      authenticationService.logout();
      expect(localStorageServiceRemoveStub).toHaveBeenCalledWith('token');
    });

    it('should call remove function of localStorageService with correct params', function() {
      authenticationService.logout();
      expect(localStorageServiceRemoveStub).toHaveBeenCalledWith('user');
    });
  });

  describe('getCurrentUser', function() {
    it('should be defined', function() {
      expect(authenticationService.getCurrentUser).toBeDefined();
    });

    it('should call get function of localStorageService with correct params', function() {
      authenticationService.getCurrentUser();
      expect(localStorageServiceGetStub).toHaveBeenCalledWith('user');
    });

    it('should return correct value', function() {
      var currentUser = authenticationService.getCurrentUser();
      expect(currentUser).toEqual({});
    });
  });

  describe('isAuthenticated', function() {
    it('should be defined', function() {
      expect(authenticationService.isAuthenticated).toBeDefined();
    });

    it('should return correct value', function() {
      var isAuthenticated = authenticationService.isAuthenticated();
      expect(isAuthenticated).toBeTruthy();
    });
  });

  describe('getAuthToken', function() {
    it('should be defined', function() {
      expect(authenticationService.getAuthToken).toBeDefined();
    });

    it('should call get function of localStorageService with correct params', function() {
      authenticationService.getAuthToken();
      expect(localStorageServiceGetStub).toHaveBeenCalledWith('token');
    });

    it('should return correct value', function() {
      var authToken = authenticationService.getAuthToken();
      expect(authToken).toEqual('1234');
    });
  });
});
