// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            }
            else {
                console.log('Please enter your GitHub username.');
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter a valid email address. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
                console.log('Please enter a valid email address.');
            }
        }

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your Project? (Required)',
        validate: titleInput => {
            if(titleInput) {
                return true;
            }
            else {
                console.log('Please enter the title of your Project.');
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project. (Required)',
        validate: descpitionInput => {
            if(descpitionInput) {
                return true;
            }
            else {
                console.log('Please enter a description of your ReadMe Guide.');
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions. (Required)',
        validate: instllationInput => {
            if(instllationInput) {
                return true;
            }
            else {
                console.log('Please enter your installation instructions.');
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What information does the user need to know about using your repo? (Required)',
        valide: usageInput => {
            if(usageInput) {
                return true;
            }
            else {
                console.log('Please enter information on the use of your repo.');
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What command should be run for testing? (Required)',
        validate: testingInput => {
            if(testingInput) {
                return true;
            }
            else {
                console.log('Please enter which command is run for testing.');
            }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What does the user need to know about making contributions to your repo?',
        validate: contributionsInput => {
            if(contributionsInput) {
                return true;
            }
            else {
                console.log('Please enter contribution information');
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license does your project have? (Required)',
        choices: ['Apache', 'BSD', 'GPL', 'MIT', 'None']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
