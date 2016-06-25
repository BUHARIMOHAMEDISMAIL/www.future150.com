var Contact = require('../../../app/models/contact');

describe('Contact', function() {
  var contact;

  beforeEach(function() {
    contact = new Contact({
      firstName: 'Elmer',
      lastName: 'Fudd'
    });
  });

  it('should be defined', function() {
    expect(contact).toBeDefined();
  });

  describe('firstName', function() {
    it('should be defined', function() {
      expect(contact.firstName).toBeDefined();
    });

    it('should equal Elmer', function() {
      expect(contact.firstName).toEqual('Elmer');
    });
  });

  describe('lastName', function() {
    it('should be defined', function() {
      expect(contact.lastName).toBeDefined();
    });

    it('should equal Fudd', function() {
      expect(contact.lastName).toEqual('Fudd');
    });
  });
});
