// do the needful
const { Employee, Manager, Engineer, Intern } = require('./lib/classes.js');

// TODO: Include packages needed for this application
const { writeFile } = require('fs').promises;
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		message: 'Manager\'s name?',
		name: 'manager',
	},
	{
		type: 'input',
		message: 'Manger\'s employee ID?',
		name: 'managerId',
	},
	{
		type: 'input',
		message: 'Manger\'s email?',
		name: 'managerEmail',
	},
	{
		type: 'input',
		message: 'Manager\'s office number?',
		name: 'managerOfficeNumber',
	},
	{
		type: 'confirm',
		message: 'Does this manager have an engineer under them?',
		name: 'existsEngineer',
	},
	{
		type: 'input',
		message: 'What\'s the name of this engineer?',
		name: 'engy',
		when: function( responses ) { return responses.existsEngineer === true; },
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
		.then( responses => writeToFile("./dist/profiles.html", generateHTML(responses)))
		.then( () => console.log("Successfully wrote HTML profile page.") )
		.catch( err => console.error(err) );
}


// Function call to initialize app
init();