// do the needful
const { Employee, Manager, Engineer, Intern } = require('./lib/classes.js');

// TODO: Include packages needed for this application
const { writeFile } = require('fs').promises;
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		message: 'Manager?',
		name: 'manager',
	},
	{
		type: 'input',
		message: 'Screenshot filename?',
		name: 'screenfile',
		when: function( responses ) { return responses.screenshot === true; },
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data)
{
	return writeFile(fileName, data);
}

// TODO: Create a function to initialize app
function init()
{
	inquirer.prompt(questions)
		.then( responses => writeToFile("./dist/README.out", generateHTML(responses)))
		.then( () => console.log("Successfully wrote ReadMe file") )
		.catch( err => console.error(err) );
}


// Function call to initialize app
init();