// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.length > 0 && license[0] !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-brightgreen)`;
  }
  return "";
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.length > 0 && license[0] !== "none") {
    return `* [License](#license)`;
  }
  return "";
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.length > 0 && license[0] !== "none") {
    return `## License
    Licensed under the ${license} license.
    `;
  }
  return "";
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Screenshot
![website-screenshot](${data.screenshot})
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
${renderLicenseLink(data.license)}
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
  }?subject=[GitHub]%20README%20Generator) or visit the [GitHub repo.](${
    data.githubRepo
  }).
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
