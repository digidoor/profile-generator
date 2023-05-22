const { Employee } = require('../lib/classes');

describe('Employee', () => {
  describe('Initialization', () => {
    // Positive test
    it("should create an object with a 'name', 'id', and 'email' property set to those arguments passed to the constructor", () => {
      // Arrange
      const name = 'Josephus';
	  const id = "3";
	  const email = "example@email.com";

      // Act
      const employee = new Employee(name, id, email);

      // Assert
      expect(employee.getName()).toEqual(name);
      expect(employee.getId()).toEqual(id);
      expect(employee.getEmail()).toEqual(email);
    });
  });
	
  describe('Return proper role', () => {

    // Exception test
    it("should return \"Employee\" when using the getRole() method", () => {
      // Arrange
      const bob = new Employee();
      response = bob.getRole();

      // Assert
      expect(response).toEqual("Employee");
    });
  });
});

