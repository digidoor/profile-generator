//test stuff Employee
//arrange
//act
//assert

const { Employee } = require('../lib/classes');

describe('Employee', () => {
  describe('Initialization', () => {
    // Positive test
    it("should create an object with a 'name' property set to the 'name' argument passed to the constructor", () => {
      // Arrange
      const text = 'Pick up milk';

      // Act
      const employee = new Employee(text, text, text);

      // Assert
      expect(employee.name).toEqual(text);
    });

    // Exception test
    it("should return \"Employee\" when using the getRole() method", () => {
      // Arrange
      const cb = () => new Employee();
      const err = new Error(
        "Expected parameter 'text' to be a non empty string"
      );

      // Assert
      expect(cb).toThrowError(err);
    });
  });
});

