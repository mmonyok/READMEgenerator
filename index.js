// Finish credits section after finding out if there is an easier way to do what I did for the collaborators part.

const inquirer = require('inquirer');
const markDown = require('./markDown.js')
const fs = require('fs');


inquirer
    .prompt([
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
            message: 'Please provide the complete URL to your live project.',
            name: 'liveURL',
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
            type: 'confirm',
            message: 'Do you have collaborators on this project?',
            name: 'collabQ',
        },
        {
            message: "Please enter the first collaborator's name and username separated by a comma (no space before or after the comma) then repeat with each additional collaborator. Example: Jane Doe,jdoe,Steve Doe,sdoe",
            name: 'collaborators',
        },
        /*         {
                    type: 'number',
                    message: 'How many collaborators do you have?',
                    name: 'collaboratorNum',
                    when(data) {
                        return data.collaboratorsQ;
        
                    },
                },
                {
                    when: (data) => {
                        if (data.collaboratorsQ) {
                            for (let i = 0; i < data.collaboratorNum; i++) {
                                type: 'input',
                                message: 'Enter the name of your collaborator',
                                name: 'collabName[i]',
                            }
                        }
                    }
                } */
        {
            type: 'list',
            message: 'What type of license will this project use?',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
            name: 'license'
        }

    ]).then(data => {
        const fileName = "./demo/README.md";
        console.log(data);

        fs.writeFile(
            fileName,
            markDown.generateMarkDown(data),
            err => err ? console.error(err) : console.log("Success!"));
    });