// add require modules
const fs= require('fs');
const inquirer = require("inquirer");

//function that will run questions in the terminal
const questions = () => {
    return inquirer
    .prompt([
        {
            type : "input",
            message : 'what is the title of your project?',
            name: 'title',
        },
        {
            type : "input",
            message : 'please provide a brief description of your project:',
            name: 'description',
        },
        {
            type : "input",
            message : 'please provide a step-by-step description of how to install your project:',
            name: 'Install',
        },
        {
            type : "input",
            message : "Please provide directions and examples for use:",
            name: 'usage',
        },
        {
            type : "input",
            message : 'Please list contributors to this project, if any:',
            name: 'credits',
        },
        {
            type : "input",
            message : 'please write any tests for your project:',
            name: 'test',
        },
        {
            type : "list",
            message : 'Please select a license from the list',
            choices: ['Apache 2.0 License','Boost Software License 1.0','BSD 3-Clause License','Eclipse Public License 1.0","The MIT License','Mozilla Public License 2.0'],
            name: 'license',
        },
        {
            type : "input",
            message : 'Please enter your github username:',
            name: 'username',
        },
        {
            type : "input",
            message : 'Please enter your email address:',
            name: 'email',
        },
    ])
}

