const { Intern } = require('../lib/classes');

describe('Intern', () => {
  describe('Initialization', () => {
    // Positive test
    it("should create an object with a 'name', 'id', 'school', and 'email' properties set to those arguments passed to the constructor", () => {
      // Arrange
      const name = 'Josephus';
	  const id = "3";
	  const email = "example@email.com";
	  const school = "Heald college";

      // Act
      const intern = new Intern(name, id, email, school);

      // Assert
      expect(intern.getName()).toEqual(name);
      expect(intern.getId()).toEqual(id);
      expect(intern.getEmail()).toEqual(email);
      expect(intern.getSchool()).toEqual(school);
    });
  });
	
  describe('Return proper role', () => {

    // Exception test
    it("should return \"Intern\" when using the getRole() method", () => {
      // Arrange
      const bob = new Intern();
      response = bob.getRole();

      // Assert
      expect(response).toEqual("Intern");
    });
  });
});

