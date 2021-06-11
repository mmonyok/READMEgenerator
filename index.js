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
        const fileName = "README.md";

        fs.writeFile(
            fileName,
            generateMarkDown(data),
            err => err ? console.error(err) : console.log("Success!"));
    });

function generateMarkDown(data) {
    return `# ${data.repoName}
${data.repoDescr}`;
}