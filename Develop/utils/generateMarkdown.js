// function to return badge for license
function renderLicenseBadge(license) {

  if(license === 'APACHE 2.0') {
    return `
    ![badge](https://img.shields.io/badge/license-APACHE2.0-ff69b4.svg)`;
  }
  else if(license === 'BSD 3') {
    return `
    ![${license}](https://img.shields.io/badge/license-BSD3-ff69b4.svg)`;
  }
  else if(license === 'GPL 3.0') {
    return `
    ![${license}](https://img.shields.io/badge/license-GPL3.0-ff69b4.svg)`;
  }
  else if(license === 'MIT') {
    return `
    ![${license}](https://img.shields.io/badge/license-MIT-ff69b4.svg)`;
  }
  else {
    return '';
  }
};

// function to return website link for license
function renderLicenseLink(license) {

  if(license === 'APACHE 2.0') {
    return `
    ${license}(https://opensource.org/licenses/Apache-2.0)`;
  }
  else if(license === 'BSD 3') {
    return `
    ${license}(https://opensource.org/licenses/BSD-3-Clause)`;
  }
  else if(license === 'GPL 3.0') {
    return `
    ${license}(https://opensource.org/licenses/gpl-license)`;
  }
  else if(license === 'MIT') {
    return `
    ${license}(https://opensource.org/licenses/MIT)`;
  }
  else {
    return '';
  }
};

// function that returns the license section of README
function renderLicenseSection(license) {

  if(license === 'APACHE 2.0') {
    return `
    ${license}
    For more information on the license of this application:
    ${renderLicenseLink(license)}
    `;
  }
  else if(license === 'BSD 3') {
    return `
    ${license}
    For more information on the license of this application:
    ${renderLicenseLink(license)}
    `;
  }
  else if(license === 'GPL 3.0') {
    return `
    ${license}
    For more information on the license of this application:
    ${renderLicenseLink(license)}
    `;
  }
  else if(license === 'MIT') {
    return `
    ${license}
    For more information on the license of this application:
    ${renderLicenseLink(license)}
    `;
  }
  else {
    return '';
  }
};

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## **Description**
  ${data.description}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents  
  
  - [**Installation**](#installation)  
  - [**Usage**](#usage)  
  - [**Testing**](#testing)  
  - [**Contributions**](#contributions)  
  - [**License**](#license)  
  - [**Contact Me**](#contact-me)  

  ### [**Installation**](#table-of-contents)
  To install the necessary products, run the following:  
  ${data.installation}

  ### [**Usage**](#table-of-contents)
  ${data.usage}

  ### [**Testing**](#table-of-contents)
  ${data.testing}

  ### [**Contributions**](#table-of-contents)
  ${data.contributions}

  ### [**License**](#table-of-contents)
  ${renderLicenseSection(data.license)}

  ### [**Contact Me**](#table-of-contents)
  If you have any questions regarding this repo you can:  
    Email me directly at ${data.email}  
    Or checkout my work at GitHub: ${data.github}, (https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;