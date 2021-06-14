function generateMarkDown(data) {
    let collabs;
    let license = data.license.split(" ").join("%20")
    function collaborators(data) {
        if (data.collabQ) {
            let array = data.collaborators.split(",");
            let emptyArray = [];
            let title = `- Contributors:`;
            emptyArray.push(title);
            for (let i = 0; i < array.length;) {
                let item1 = array[i];
                i++;
                let item2 = array[i];
                i++;
                let phrase = `\t- ${item1} (https://github.com/${item2})`;
                emptyArray.push(phrase);
            }
            collabs = emptyArray.join("\n");
        } else {
            return;
        }
    }
    collaborators(data);
    return `# ${data.repoName}
- ${data.repoDescr}

[Live Site!](${data.liveURL})

![Language Count](https://img.shields.io/github/languages/count/${data.username}/${data.repoName}?color=9400D3&label=Language%20Count&logo=github&logoColor=9400D3&style=plastic)

![Top Language](https://img.shields.io/github/languages/top/${data.username}/${data.repoName}?color=4B0082&logo=github&logoColor=4B0082&style=plastic)

![GitHub Followers](https://img.shields.io/github/followers/${data.username}?color=0000FF&label=Followers&logo=github&logoColor=0000FF&style=plastic)

![Forks](https://img.shields.io/github/forks/${data.username}/${data.repoName}?color=00FF00&label=Forks&logo=GitHub&logoColor=00FF00&style=plastic)

![License](https://img.shields.io/static/v1?label=license&message=${license}&color=FFFF00&logo=github&logoColor=FFFF00&style=plastic)

![Repo Size](https://img.shields.io/github/repo-size/${data.username}/${data.repoName}?color=FF7F00&label=Repo%20Size&logo=github&logoColor=FF7F00&style=plastic)

![Code Lines](https://img.shields.io/tokei/lines/github/${data.username}/${data.repoName}?color=FF0000&label=Code%20Lines&logo=github&logoColor=FF0000&style=plastic)

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
${collabs}

## License
`;
}

module.exports =  {
    generateMarkDown,
};