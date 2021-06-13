function generateMarkDown(data) {
    return `# ${data.repoName}
- ${data.repoDescr}

[Live Site!](${liveURL})

## Description
- ${data.description1}
- ${data.description2}
- ${data.description3}
- ${data.description4}

## Table of Contents
- [${data.repoName}](#${data.repoName})

## Installation
- ${data.installation}

`;
}

module.exports =  {
    generateMarkDown,
};