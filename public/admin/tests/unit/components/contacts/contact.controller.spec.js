describe('contactController', function() {
  beforeEach(module('future150Admin'));

  var $controller,
    $scope,
    contactController,
    contactsServiceGetByIdStub,
    contactsServiceSaveStub,
    mockContactResponse,
    stateGoSpy;

  beforeEach(inject(function(_$controller_,
      $rootScope,
      $q,
      _contactsService_) {
    $controller = _$controller_;
    $scope = $rootScope.$new();
    mockContactResponse = {};
    var $state = {
      go: function() { }
    };

    contactsServiceGetByIdStub = sinon.stub(_contactsService_, 'getById').returns($q.when(mockContactResponse));
    contactsServiceSaveStub = sinon.stub(_contactsService_, 'save').returns($q.when());
    stateGoSpy = sinon.spy($state, 'go');

    contactController = $controller('contactController', {
      $scope: $scope,
      contactsService: _contactsService_,
      $stateParams: { id: 123 },
      $state: $state
    });
  }));

  it('should be defined', function() {
    expect(contactController).toBeDefined();
  });

  it('should call getById method of contacts service with the correct parameters', function() {
    expect(contactsServiceGetByIdStub.calledWith(123)).toBeTruthy();
  });

  it('should have correct contact', function() {
    $scope.$digest();
    expect(contactController.contact).toBe(mockContactResponse);
  });

  describe('save', function() {
    it('should be defined', function() {
      expect(contactController.save).toBeDefined();
    });

    it('should call save method of contacts service with correct parameters', function() {
      contactController.save({});
      expect(contactsServiceSaveStub.calledWith({})).toBeTruthy();
    });

    it('should call go method of $state', function() {
      contactController.save({});
      $scope.$digest();
      expect(stateGoSpy.calledWith('contacts')).toBeTruthy();
    });
  });
});
