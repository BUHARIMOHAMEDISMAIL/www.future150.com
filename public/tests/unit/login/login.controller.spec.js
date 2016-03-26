describe('loginController', function() {
  beforeEach(module('future150'));

  var $scope,
    $rootScope,
    loginController,
    $httpBackend,
    authenticationServiceLoginStub,
    stateGoStub;

  beforeEach(inject(function(_$controller_,
      _$rootScope_,
      _$q_,
      _$httpBackend_) {
    $rootScope = _$rootScope_;
    $scope = _$rootScope_.$new();
    $httpBackend = _$httpBackend_;

    var mockAuthenticationService = {
      login: function() {}
    };
    var mockState = {
      go: function() {}
    };

    authenticationServiceLoginStub = sinon.stub(mockAuthenticationService, 'login')
      .returns(_$q_.resolve());
    stateGoStub = sinon.stub(mockState, 'go');

    loginController = _$controller_('loginController', {
      authenticationService: mockAuthenticationService,
      $state: mockState
    });
    $scope.$apply();
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(loginController).toBeDefined();
  });

  it('should return correct title', function() {
    expect($rootScope.title).toEqual('Login');
  });

  it('should return correct description', function() {
    expect($rootScope.description).toEqual('');
  });

  describe('login', function() {
    it('should be defined', function() {
      expect(loginController.login).toBeDefined();
    });

    it('should call login function of authenticationService with correct params', function() {
      var testUser = {};
      loginController.login(testUser);
      expect(authenticationServiceLoginStub).toHaveBeenCalledWith(testUser);
    });

    it('should call go function of $state with correct params', function() {
      var testUser = {};
      loginController.login(testUser);
      $scope.$apply();
      expect(stateGoStub).toHaveBeenCalledWith('site.home');
    });
  });
});
