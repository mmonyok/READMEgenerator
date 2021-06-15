let collabs;
let liveLink;
let licenseTitle;

// This function will take the data from the inquirer questions and create the file formatting that will later be written into the README.md file.""
function generateMarkDown(data) {
    // We need to also access the license file, so we can get all of the licensing information to input into the necessary sections.
    const license = require('./license.js');

    // This statement determines if the user said whether or not there is a live link. If there is then the live link will be written otherwise it will be absent from the README.
    if (data.confirmLink) {
        liveLink = `
[Live Site!](${data.liveURL})
`;
    } else {
        liveLink = "";
    };

    // This statement formats the beginning of the license section based on whether it is an MIT or Unlicense, otherwise the license title is repeated.
    if (data.licenseType === "MIT License" || data.licenseType === "The Unlicense") {
        licenseTitle = `${license.licenseText}`
    } else {
        licenseTitle = `- ${data.licenseType}

${license.licenseText}`
    };

    // This call needs to happen here so the collaborator data is collated in the proper order to be used in the formatting section below.
    collaborators(data);

    // This will return the formatted file data to the writeFile() method, so it can be written to the README.md file properly.
    return `# ${data.repoName}
- ${data.repoDescr}
${liveLink}
![Language Count](https://img.shields.io/github/languages/count/${data.username}/${data.repoName}?color=9400D3&label=Language%20Count&logo=github&logoColor=9400D3&style=plastic)

![Top Language](https://img.shields.io/github/languages/top/${data.username}/${data.repoName}?color=4B0082&logo=github&logoColor=4B0082&style=plastic)

![GitHub Followers](https://img.shields.io/github/followers/${data.username}?color=0000FF&label=Followers&logo=github&logoColor=0000FF&style=plastic)

![Forks](https://img.shields.io/github/forks/${data.username}/${data.repoName}?color=00FF00&label=Forks&logo=GitHub&logoColor=00FF00&style=plastic)

![License](https://img.shields.io/static/v1?label=license&message=${license.badgeName}&color=FFFF00&logo=github&logoColor=FFFF00&style=plastic)

![Repo Size](https://img.shields.io/github/repo-size/${data.username}/${data.repoName}?color=FF7F00&label=Repo%20Size&logo=github&logoColor=FF7F00&style=plastic)

![Code Lines](https://img.shields.io/tokei/lines/github/${data.username}/${data.repoName}?color=FF0000&label=Code%20Lines&logo=github&logoColor=FF0000&style=plastic)

## Description
- ${data.description1}
- ${data.description2}
- ${data.description3}
- ${data.description4}

## Table of Contents
- [${data.repoName}](#${data.repoName})
    - [Description](#description)
    - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

## Installation
- ${data.installation}

## Usage
- ${data.usage}

![Visual display of project.](${data.imageURL})

## Credits
Technologies Used:
- ${data.technologies}
${collabs}
## License
${licenseTitle}

## Contributing
- ${data.contributing}

## Tests
- ${data.testing}

## Questions
Please send any questions to the following:
- ${data.name}
    - Email: (${data.email})
    - GitHub: (https://github.com/${data.username})`;
}

// This function properly formats the collaborator data, but only if the user indicates they have collaborators.
function collaborators(data) {
    if (data.collabQ) {
        let array = data.collaborators.split(",");
        let emptyArray = [];
        let title = `\nCollaborators:`;
        emptyArray.push(title);
        for (let i = 0; i < array.length;) {
            let item1 = array[i];
            i++;
            let item2 = array[i];
            i++;
            let phrase = `- ${item1} (https://github.com/${item2})`;
            emptyArray.push(phrase);
        }
        collabs = emptyArray.join("\n");
    } else {
        collabs = "";
        return;
    }
}

module.exports = {
    generateMarkDown,
};