describe('contactUsController', function() {
  beforeEach(module('future150'));

  var $scope,
    $rootScope,
    contactUsController,
    mockContactsService,
    contactsServiceGetAllStub,
    $httpBackend;

  beforeEach(inject(function(_$controller_,
      _$rootScope_,
      _$q_,
      _$httpBackend_) {
    $rootScope = _$rootScope_;
    $scope = _$rootScope_.$new();
    $httpBackend = _$httpBackend_;

    mockContactsService = {
      getAll: function() {}
    };

    var testContactsResult = {
      contacts: [
        {},
        {}
      ]
    };

    contactsServiceGetAllStub = sinon.stub(mockContactsService, 'getAll')
      .returns(_$q_.resolve(testContactsResult));

    contactUsController = _$controller_('contactUsController', {
      contactsService: mockContactsService
    });
    $scope.$apply();
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(contactUsController).toBeDefined();
  });

  it('should return correct title', function() {
    expect($rootScope.title).toEqual('Contact Us');
  });

  it('should return correct description', function() {
    expect($rootScope.description).toEqual('Contact Future150 to send feedback, submit information or request information. Media contact information is provided.');
  });

  it('should call getAll method of contacts service', function() {
    expect(contactsServiceGetAllStub).toHaveBeenCalled();
  });

  describe('contacts', function() {
    it('should have correct length', function() {
      expect(contactUsController.contacts.length).toEqual(2);
    });
  });
});
