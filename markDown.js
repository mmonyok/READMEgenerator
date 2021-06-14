function generateMarkDown(data) {
    let collabs;
    function collaborators(data) {
        if (data.collabQ) {
            let array = data.collaborators.split(",");
            let emptyArray = [];
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
            return;
        }
    }
    collaborators(data);
    // let collaborators = collaborators();
    return `# ${data.repoName}
- ${data.repoDescr}

[Live Site!](${data.liveURL})

## Description
- ${data.description1}
- ${data.description2}
- ${data.description3}
- ${data.description4}

## Table of Contents
- [${data.repoName}](#${data.repoName})

## Installation
- ${data.installation}

## Usage
- ${data.usage}

![Visual display of project.](${data.imageURL})

## Credits
${collabs}`;
}

module.exports =  {
    generateMarkDown,
};