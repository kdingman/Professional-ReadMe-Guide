// function to return badge for license
function renderLicenseBadge(license) {
  let licenseSelection = `${data.license}`;
  let licenseBadge = '';

  if(licenseSelection === 'Apache 2.0') {
    licenseSelection = 'Apache2.0';
    licenseBadge = 'https://img.shields.io/badge/license-${licenseSelection}-ff69b4';
  };
  if(licenseSelection === 'BSD 3') {
    licenseSelection = 'BSB3';
    licenseBadge = 'https://img.shields.io/badge/license-${licenseSelection}-ff69b4';
  };

  if(licenseSelection === 'GPL 3.0') {
    licenseSelection = 'GPL3.0';
    licenseBadge = 'https://img.shields.io/badge/license-${licenseSelection}-ff69b4';
  };

  if(licenseSelection === 'MIT') {
    licenseSelection = 'MIT';
    licenseBadge = 'https://img.shields.io/badge/license-${licenseSelection}-ff69b4';
  }
  else {
    return false;
  }

}

// function to return website link for license
function renderLicenseLink(license) {
  let licenseSelection = `${data.license}`;
  let licenseLink = '';

  if(licenseSelection === 'Apache 2.0') {
    licenseSelection = 'Apache2.0';
    licenseLink = 'https://opensource.org/licenses/Apache-2.0';
  };

  if(licenseSelection === 'BSD 3') {
    licenseSelection = 'BSD3';
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause'
  };

  if(licenseSelection === 'GPL 3.0') {
    licenseSelection = 'GPL3.0';
    licenseSelection = 'https://opensource.org/licenses/gpl-license'
  };

  if(licenseSelection === 'MIT') {
    licenseSelection = 'MIT';
    licenseLink = 'https://opensource.org/licenses/MIT'
  }
  else {
    return false;
  }
}

// function that returns the license section of README
function renderLicenseSection(license) {
  let licenseSelection = `${data.license}`;

  if(licenseSelection === 'Apache 2.0') {
    licenseSelection = 'Apache2.0';
  }

  if(licenseSelection === 'BSD 3') {
    licenseSelection = 'BSD3';
  }

  if(licenseSelection === 'GPL 3.0') {
    licenseSelection = 'GPL3.0';
  }

  if(licenseSelection === 'MIT') {
    licenseSelection = 'MIT';
  }
  else {
    return false;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  - [Description] (#description)
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Testing] (#testing)
  - [Contributions] (#contributions)
  - [Contact Me] (#contact-me)

  ## Description:
  ${data.decription}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Testing:
  ${data.testing}

  ## Contact Me:
  - GitHub: [${data.github}] (https://github.com/${data.github})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
