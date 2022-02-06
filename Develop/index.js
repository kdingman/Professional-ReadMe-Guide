// Packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions to generate ReadMe File
const questions = [
    // Title of Project
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
    // Description of Project
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project. (Required)',
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            }
            else {
                console.log('Please enter a description of your ReadMe Guide.');
            }
        }
    },
    // Installtion instructions needed for project
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
        validate: installationInput => {
            if(installationInput) {
                return true;
            }
            else {
                console.log('Please enter your installation instructions.');
            }
        }
    },
    // Information needed to use repo
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
    // Provide testing that was written or provide examples
    {
        type: 'input',
        name: 'testing',
        message: 'Please provide any tests written for your application and give examples on how to run them.',
        validate: testingInput => {
            if(testingInput) {
                return true;
            }
            else {
                console.log('Please provide any information testing the application.');
            }
        }
    },
    // Instructions on how a developer can contribute to your repo
    {
        type: 'input',
        name: 'contributions',
        message: 'Please provide instructions on how other developers can contribute to your application.',
        validate: contributionsInput => {
            if(contributionsInput) {
                return true;
            }
            else {
                console.log('Please enter contribution guidelines.');
            }
        }
    },
    // The type of license used for this application
    {
        type: 'list',
        name: 'license',
        message: 'What type of license does your project have?',
        choices: ['APACHE 2.0', 'BSD 3', 'GPL 3.0', 'MIT', 'None']
    },
    // GitHub username provided for developer contact
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
    // Email provided for developer contact
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
];

// Write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err)
            throw err;
            console.log('YEAH! Information was transferred successfully to the README!')
    });
};

// Initialize app
function init() {
    inquirer.prompt(questions).then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Call initialize app
init();