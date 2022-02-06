// function to return badge for license
function renderLicenseBadge(license) {

  if(license === 'APACHE 2.0') {
    return `
    ![badge](https://img.shields.io/badge/license-APACHE2.0-ff69b4)`;
  }
  if(license === 'BSD 3') {
    return `
    ![badge](https://img.shields.io/badge/license-BSD3-ff69b4)`;
  }
  if(license === 'GPL 3.0') {
    return `
    ![badge](https://img.shields.io/badge/license-GPL3.0-ff69b4)`;
  }
  if(license === 'MIT') {
    return `
    ![badge](https://img.shields.io/badge/license-MIT-ff69b4)`;
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
  if(license === 'BSD 3') {
    return `
    ${license}(https://opensource.org/licenses/BSD-3-Clause)`;
  }
  if(license === 'GPL 3.0') {
    return `
    ${license}(https://opensource.org/licenses/gpl-license)`;
  }
  if(license === 'MIT') {
    return `
    ${license}(https://opensource.org/licenses/MIT)`;
  }
  else {
    return '';
  }
};

// function that returns the license section of README
function renderLicenseSection(license) {

  if(license !== 'none') {
    return `
    ${license}`;
  }
  // if(license === 'BSD 3') {
  //   return `
  //   ${license}`;
  // }
  // if(license === 'GPL 3.0') {
  //   return `
  //   ${license}`;
  // }
  // if(license === 'MIT') {
  //   return `
  //   ${license}`;
  // }
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

  ## [**Installation**](#table-of-contents)
  To install the necessary products, run the following:  
  ${data.installation}

  ## [**Usage**](#table-of-contents)
  ${data.usage}

  ## [**Testing**](#table-of-contents)
  ${data.testing}

  ## [**Contributions**](#table-of-contents)
  ${data.contributions}

  ## [**License**](#table-of-contents)
  This project is licensed under the ${renderLicenseSection(data.license)} license.

  For more information on the license of this application:
  ${renderLicenseLink(data.license)}  

  ## [**Contact Me**](#table-of-contents)
  If you have any questions regarding this repo you can:  
    Email me directly at ${data.email}  
    Or checkout my work at GitHub: ${data.github}, (https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;