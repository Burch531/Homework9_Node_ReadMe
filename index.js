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
        message: 'Please provide installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide project usage',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'License',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please provide who is contributing',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Please provide the project test',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Enter your github username', 
        name: 'username',
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    },
     
    {
        type: 'input',
        message: 'Provide email for questions',
        name: 'email',
    },
   
];


function init() {
    inquirer
    .prompt(questions)
    .then(function(data){
        const getInfo = `https://api.github.com/users/${data.username}`;

        axios.get(getInfo).then(function(res) {
          
            
          fs.writeFile("READMECREATED.md", generate(data), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("New README file created with success!");
          });
        });

});
}

// //Function call to initialize app
init();


