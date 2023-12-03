// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `[![license](https://img.shields.io/badge/license-${license}-blue.svg)]`
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    Licensed under the ${license} license.`
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License:
  ${renderLicenseBadge(data.license)}

  ## Description:
  ${data.projectDesc}
  ## Intallation:
  ${data.command}
  ## Usage:
  ${data.repo}
  ## License:
  ${renderLicenseLink(data.license)}
  ## Contribution:
  ${data.run}
  ## Contact Information:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}]
`;
}

module.exports = generateMarkdown;
