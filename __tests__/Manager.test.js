const { Manager } = require('../lib/classes');

describe('Manager', () => {
  describe('Initialization', () => {
    // Positive test
    it("should create an object with a 'name', 'id', 'officeNumber', and 'email' properties set to those arguments passed to the constructor", () => {
      // Arrange
      const name = 'Josephus';
	  const id = "3";
	  const email = "example@email.com";
	  const officeNumber = "45";

      // Act
      const manager = new Manager(name, id, email, officeNumber);

      // Assert
      expect(manager.getName()).toEqual(name);
      expect(manager.getId()).toEqual(id);
      expect(manager.getEmail()).toEqual(email);
      expect(manager.getOfficeNumber()).toEqual(officeNumber);
    });
  });
	
  describe('Return proper role', () => {

    // Exception test
    it("should return \"Manager\" when using the getRole() method", () => {
      // Arrange
      const bob = new Manager();
      response = bob.getRole();

      // Assert
      expect(response).toEqual("Manager");
    });
  });
});

