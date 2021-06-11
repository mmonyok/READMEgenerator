const inquirer = require('inquirer');
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
    ]).then(data => {
        const fileName = `${data.repoName}.json`;

        fs.writeFile(
            fileName,
            JSON.stringify(data, null, `\t`),
            err => err ? console.error(err) : console.log("Success!"));
    });