describe('registerController', function() {
  beforeEach(module('future150'));

  var $scope,
    registerController,
    authenticationServiceRegisterStub,
    $httpBackend;

  beforeEach(inject(function(_$controller_,
      _$q_,
      _$rootScope_,
      _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $scope = _$rootScope_.$new();

    var mockAuthenticationService = {
      register: function() {}
    };

    authenticationServiceRegisterStub = sinon.stub(mockAuthenticationService, 'register')
      .returns(_$q_.resolve({}));

    registerController = _$controller_('registerController', {
      authenticationService: mockAuthenticationService
    });
    $scope.$apply();
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(registerController).toBeDefined();
  });
});
