// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require("axios");
const generate = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the Title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description of the project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Table of Contents for the project',
        name: 'contents',
    },
    {
        type: 'input',
        message: 'Installation',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'License',
        choices: ['MIT'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Contributing',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Test',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Enter your github username', 
        name: 'questions',
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'questions',
    },
];
then((response) => {
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();