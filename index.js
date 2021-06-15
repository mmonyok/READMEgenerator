const inquirer = require('inquirer');
const markDown = require('./markDown.js');
const license = require('./license.js');
const fs = require('fs');


inquirer
    .prompt([
        {
            message: 'What is your First and Last name?',
            name: 'name',
        },
        {
            message: 'What is your email address?',
            name: 'email',
        },
        {
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            message: 'Please enter the name of your repository.',
            name: 'repoName'
        },
        {
            message: 'Please enter a short description for your repository.',
            name: 'repoDescr',
        },
        {
            type: 'confirm',
            message: 'Does your project have a live link?',
            name: 'confirmLink',
        },
        {
            message: 'Please provide the complete URL to your live project.',
            name: 'liveURL',
            when(data) {
                return data.confirmLink
            },
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
        },
        {
            message: 'Please provide detailed instructions for how to use your project.',
            name: 'usage',
        },
        {
            message: 'Please enter the relative path or the complete URL to your project screenshot or GIF.',
            name: 'imageURL',
        },
        {
            message: "Please list all technologies used on this project.",
            name: "technologies",
        },
        {
            type: 'confirm',
            message: 'Do you have collaborators on this project?',
            name: 'collabQ',
        },
        {
            message: "Please enter the first collaborator's name and username separated by a comma (no space before or after the comma) then repeat with each additional collaborator. Example: Jane Doe,jdoe,Steve Doe,sdoe",
            name: 'collaborators',
            when(data) {
                return data.collabQ;
            },
        },
        {
            message: 'How can people contribute to this project?',
            name: 'contributing',
        },
        {
            message: 'What are the testing instructions?',
            name: 'testing',
        },
        {
            type: 'list',
            message: 'What type of license will this project use?',
            choices: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v3.0', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense'],
            name: 'licenseType',
        },
    ]).then(data => {
        console.log(data);
        const fileName = "./demo/README.md";
        license.generateLicense(data);

        fs.writeFileSync(
            fileName,
            markDown.generateMarkDown(data),
            err => err ? console.error(err) : console.log("Success!"));
    });