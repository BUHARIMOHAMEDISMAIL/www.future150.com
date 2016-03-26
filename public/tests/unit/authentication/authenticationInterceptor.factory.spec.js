describe('authenticationInterceptor', function() {
  beforeEach(module('future150'));

  var authenticationInterceptor,
    authenticationServiceGetAuthTokenStub;

  beforeEach(inject(function(_authenticationInterceptor_,
      _authenticationService_) {
    authenticationInterceptor = _authenticationInterceptor_;
    authenticationServiceGetAuthTokenStub = sinon.stub(_authenticationService_, 'getAuthToken').returns('1234');
  }));

  it('should be defined', function() {
    expect(authenticationInterceptor).toBeDefined();
  });

  describe('request', function() {
    it('should be defined', function() {
      expect(authenticationInterceptor.request).toBeDefined();
    });

    it('should call getAuthToken function of authenticationService with correct parameters', function() {
      var config = {
        headers: {}
      };
      authenticationInterceptor.request(config);
      expect(authenticationServiceGetAuthTokenStub).toHaveBeenCalled();
    });

    it('should return correct value', function() {
      var config = {
        url: '/test',
        headers: {}
      };
      config = authenticationInterceptor.request(config);
      var expectedConfig = {
        url: '/test',
        headers: {
          Authorization: 'Bearer 1234'
        }
      };
      expect(config).toEqual(expectedConfig);
    });
  });
});
