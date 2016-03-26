describe('authenticationInterceptor', function() {
  beforeEach(module('future150Admin'));

  var authenticationInterceptor,
    globalConfig,
    authenticationServiceGetAuthTokenStub;

  beforeEach(inject(function(_authenticationInterceptor_,
      $injector,
      _authenticationService_,
      _config_) {
    authenticationInterceptor = _authenticationInterceptor_;
    globalConfig = _config_;
    authenticationServiceGetAuthTokenStub = sinon.stub(_authenticationService_, 'getAuthToken');
  }));

  it('should be defined', function() {
    expect(authenticationInterceptor).toBeDefined();
  });

  describe('request', function() {
    it('should be defined', function() {
      expect(authenticationInterceptor.request).toBeDefined();
    });
    it('should call getAuthToken method of authenticationService', function() {
      authenticationInterceptor.request({ url: ''});
      expect(authenticationServiceGetAuthTokenStub.called).toBeTruthy();
    });
    it('should return correct result when not requesting api url and token does not exist', function() {
      var result = authenticationInterceptor.request({ url: ''});
      expect(result).toEqual({ url: ''});
    });
    it('should return correct result when not requesting api url and token exists', function() {
      authenticationServiceGetAuthTokenStub.returns('12345');
      var result = authenticationInterceptor.request({ url: '', headers: {}});
      expect(result).toEqual({ url: '', headers: { Authorization: 'Bearer 12345' }});
    });
    it('should return correct result when requesting api url and token does not exist', function() {
      var result = authenticationInterceptor.request({ url: '//future150.herokuapp.com' });
      expect(result).toEqual({ url: '//future150.herokuapp.com' });
    });
    it('should return correct result when requesting api url and token exists', function() {
      authenticationServiceGetAuthTokenStub.returns('12345');
      var result = authenticationInterceptor.request({ url: '//future150.herokuapp.com', headers: {} });
      expect(result).toEqual({ url: '//future150.herokuapp.com', headers: { Authorization: 'Bearer 12345' } });
    });
  });
});
