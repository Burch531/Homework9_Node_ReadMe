// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 

## Description 
${data.description}
## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 
## Installation
        ${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contributors
${data.contributors}
## Test
${data.test}
## Repository
${data.repo}
## Questions
- please send any questions to ${data.email}
## GitHub
(https://github.com/${data.username})
`;
}



module.exports = generateMarkdown;
