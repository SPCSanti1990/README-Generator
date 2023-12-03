// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub Username?',
    validate: your_github => {
        if (your_github) {
            return true;
        }
        else {
            console.log("Enter your GitHub username");
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: your_email => {
        if (your_email) {
            return true;
        }
        else {
            console.log("Enter your email address");
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'projectName',
    message: 'What is the project name?',
    validate: your_proj => {
        if (your_proj) {
            return true;
        }
        else {
            console.log("Enter a title for your project");
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'projectDesc',
    message: 'Please write a short desctiption of your project:',
    validate: your_input => {
        if (your_input) {
            return true;
        }
        else {
            console.log("Please provide a description of your project");
            return false;
        }
    }
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Choose a license that will be used in your project:',
    choices: ['MIT', 'GNU', 'Apache', 'None of the above'],
    validate: your_license => {
        if (your_license) {
            return true;
        }
        else {
            console.log("Enter a title for your project");
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'command',
    message: 'What command should be run to install dependencies?',
  },
  {
    type: 'input',
    name: 'run',
    message: 'What command should be run to run tests?',
  },
  {
    type: 'input',
    name: 'repo',
    message: 'What does the user need to know about using the repo?',
  },
  {
    type: 'input',
    name: 'contact',
    message: 'What does the user need to know about contributing to repo?',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }

    console.log("Success! Your README file has been created");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
