// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License:
  [![license](https://img.shields.io/badge/license-${data.license}-blue.svg)]
  ## Table of Contents
  - [Description](#descritpion)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Additional Info](#additional-info)

  ## Description:
  ${data.description}
  ## Intallation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${data.license}
  ## Contribution:
  ${data.contribution}
  ## Contact Information:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}]
`;
}

module.exports = generateMarkdown;
