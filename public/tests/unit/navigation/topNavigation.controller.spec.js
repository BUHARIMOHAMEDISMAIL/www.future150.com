describe('topNavigationController', function() {
  beforeEach(module('future150'));

  var $scope,
    topNavigationController,
    $httpBackend;

  beforeEach(inject(function(_$controller_,
      _$rootScope_,
      _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $scope = _$rootScope_.$new();

    var mockAuthenticationService = {
      isAuthenticated: function() {},
      getCurrentUser: function() {},
      logout: function() {}
    };

    topNavigationController = _$controller_('topNavigationController', {
      $scope: $scope,
      authenticationService: mockAuthenticationService
    });
    $scope.$apply();
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(topNavigationController).toBeDefined();
  });
});
