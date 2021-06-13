function generateMarkDown(data) {
    return `# ${data.repoName}
- ${data.repoDescr}

## Description
- ${data.description1}`;
}

module.exports =  {
    generateMarkDown,
};