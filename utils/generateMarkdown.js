// Functions to return README content with user inputs
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

If you have any questions about the repo, open an issue or want to discuss, contact me directly at ${email}.
You can find more of my work at [${username}](https://github.com/${username}/.).`);

// Export to index.js
module.exports = {
    generateTitle,
    generateLicenseBadge,
    generateDescription,
    generateTableOfContents,
    generateInstallation,
    generateUsage,
    generateLicense,
    generateContributing,
    generateTests,
    generateQuestions
}