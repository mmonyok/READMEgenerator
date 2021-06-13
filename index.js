const inquirer = require('inquirer');
const markDown = require('./markDown.js')
const fs = require('fs');


inquirer
    .prompt([
        {
            message: 'Please enter the name of your repository.',
            name: 'repoName'
        },
        {
            message: 'Please enter a short description for your repository.',
            name: 'repoDescr',
        },
        {
            message: 'What was your motivation for this project?',
            name: 'description1',
        },
        {
            message: 'Why did you build this project?',
            name: 'description2',
        },
        {
            message: 'What problem does this project solve?',
            name: 'description3',
        },
        {
            message: 'What did you learn on this project',
            name: 'description4',
        },
        {
            message: 'Please write your installation instructions for this project.',
            name: "installation"
        }
    ]).then(data => {
        const fileName = "./demo/README.md";

        fs.writeFile(
            fileName,
            markDown.generateMarkDown(data),
            err => err ? console.error(err) : console.log("Success!"));
    });