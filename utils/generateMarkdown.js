// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.length > 0 && license[0] !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-brightgreen)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.length > 0 && license[0] !== "none") {
    return `## License
    Licensed under the ${license} license.
    `;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
//Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Deployed Application URL
${data.link}
## Screenshot
![alt-text](${data.screenshot})
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributors
${data.contributors}
## Testing
${data.test}
## Questions
Please send your questions [here](mailto:${
    data.email
  }?subject=[GitHub]%20README%20Generator) or visit [github/${
    data.creator
  }](https://github.com/${data.creator}).
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
