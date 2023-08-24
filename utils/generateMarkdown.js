// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return ``;
  }
  else {
    return `![Licence Badge](https://img.shields.io/badge/License-${license}-blue)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return ``;
  }
  else {
    return `* [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ``;
  }
  else {
    return `## License
This project is licensed with ${license}.`;
  }
}

// TODO: Create a function to generate markdown for README
// export function generateMarkdown(data) {
//   return `# ${data.title}

// ## Liscence
// ${renderLicenseSelection(data.license)}
// `;
// }

export function generateMarkdown(response) {
  return `${renderLicenseBadge(response.license)}
  # ${response.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Useage](#useage)
  ${renderLicenseLink(response.license)}
  
  ## Description
  ${response.description}

  ![${response.imageAlt}](${response.imageURL})

  ## Installation
  ${response.installation}

  ## Useage
  ${response.useage}

  ${renderLicenseSection(response.license)}

  `;
}


//module.exports = generateMarkdown;
