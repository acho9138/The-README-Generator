// Functions which return README content with user input
const generateTitle = (title) => (
`# ${title}

`);

const generateLicenseBadge = (license) => (
`![GitHub License](https://img.shields.io/badge/License-${license.replace(" ", "%20")}-blue.svg)

`);

const generateDescription = (description) => (
`## Description

${description}

`);

const generateTableOfContents = () => (
`## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

`);

const generateInstallation = (installation) => (
`## Installation

To install the necessary dependencies, run the following command:

\`\`\`
${installation}
\`\`\`

`);

const generateUsage = (usage) => (
`## Usage

${usage}

`);

const generateLicense = (license) => (
`## License

This project is licensed under the ${license} license.

`);

const generateContributing = (contributing) => (
`## Contributing

${contributing}

`);

const generateTests = (tests) => (
`## Tests

To run tests, run the following command:
\`\`\`
${tests}
\`\`\`

`);

const generateQuestions = (username, email) => (
`## Questions

If you have any questions, found an issue or want to discuss, contact me at ${email}. You can find more of my work at [${username}](https://github.com/${username}/.).`);

// Export to index.js file
module.exports = {
    generateTitle: generateTitle,
    generateLicenseBadge: generateLicenseBadge,
    generateDescription: generateDescription,
    generateTableOfContents: generateTableOfContents,
    generateInstallation: generateInstallation,
    generateUsage: generateUsage,
    generateLicense: generateLicense,
    generateContributing: generateContributing,
    generateTests: generateTests,
    generateQuestions: generateQuestions
}