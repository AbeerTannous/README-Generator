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
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
  
  ## Description ${data.Discription}

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#Tests)
- [Questions](#questions)
  
  ## Installation ${data.installation}
  
  ## Usage ${data.Usage}
  
  ## Contributing ${data.contribution}
  
  ## Tests ${data.test}
  
  ## License ${data.license}
  
  ## Questions

    <br />
    Find me on GitHub: [${data.github}](https://github.com/${data.github})<br />
    <br />
    Email me with any questions: ${data.email}<br /><br />
`;

}

module.exports = generateMarkdown;
