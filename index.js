// do the needful
const { testLog, Employee, Manager, Engineer, Intern } = require('./lib/classes.js');
testLog();

const joe = new Employee( 'bill', 3, "email@fake.com");
const bob = new Engineer( 'bill', 3, "email2@fake.com", "abloobloo");
console.log( bob.getRole() );
console.log( joe.getRole() );

