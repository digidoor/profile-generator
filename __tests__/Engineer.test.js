const { Engineer } = require('../lib/classes');

describe('Engineer', () => {
  describe('Initialization', () => {
    // Positive test
    it("should create an object with a 'name', 'id', 'github', and 'email' properties set to those arguments passed to the constructor", () => {
      // Arrange
      const name = 'Josephus';
	  const id = "3";
	  const email = "example@email.com";
	  const github = "mygithub";

      // Act
      const engineer = new Engineer(name, id, email, github);

      // Assert
      expect(engineer.getName()).toEqual(name);
      expect(engineer.getId()).toEqual(id);
      expect(engineer.getEmail()).toEqual(email);
      expect(engineer.getGithub()).toEqual(github);
    });
  });
	
  describe('Return proper role', () => {

    // Exception test
    it("should return \"Engineer\" when using the getRole() method", () => {
      // Arrange
      const bob = new Engineer();
      response = bob.getRole();

      // Assert
      expect(response).toEqual("Engineer");
    });
  });
});

