describe('playersController', function() {
  beforeEach(module('future150Admin'));

  var $controller,
    $scope,
    playersController,
    playersServiceGetAllSpy;

  beforeEach(inject(function(_$controller_,
      $rootScope,
      _playersService_) {
    $controller = _$controller_;
    $scope = $rootScope.$new();

    playersServiceGetAllSpy = sinon.spy(_playersService_, 'getAll');

    playersController = $controller('playersController', {
      $scope: $scope,
      playersService: _playersService_
    });
  }));

  it('should be defined', function() {
    expect(playersController).toBeDefined();
  });

  it('should call getAll method of players service', function() {
    expect(playersServiceGetAllSpy.calledOnce).toBe(true);
  });
});
