function generateMarkDown(data) {
    return `# ${data.repoName}
- ${data.repoDescr}

## Description
- ${data.description1}
- ${data.description2}
- ${data.description3}
- ${data.description4}`;
}

module.exports =  {
    generateMarkDown,
};