// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 

## Description 
${data.description}
## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [Questions](#Questions )
- [GitHub Info](#GitHub) 
## Installation
 -To install this please use ${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contributors
Here is a list of anyone who has contributed to this ${data.contributors}
## Test
${data.test}
## Repository
${data.repo}
## Questions
- Please send any questions to ${data.email}
## GitHub
(https://github.com/${data.username})
`;
}



module.exports = generateMarkdown;
