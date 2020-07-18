module.exports = {
    generateTitle: function (title) {
        if (title) {
            return `# ${title}\n`};
    },
    generateLicenseBadge: function (license) {
        return `![GitHub License](https://img.shields.io/badge/License-${license}-blue.svg)\n`;
    },
    generateDescription: function (description) {
        return `## Description
        ${description}\n`
    },
    generateTableOfContents: function () {
        return `## Table of Contents

        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Contributing](#contributing)
        * [Tests](#tests)
        * [Questions](#questions)\n`
    },
    generateInstallation: function (installation) {
        return `## Installation
        
        To install the necessary dependencies, run the following command:
        \`\`\`
        ${installation}
        \`\`\`\n`
    },
    generateUsage: function (usage) {
        return `## Usage
        
        ${usage}\n`
    },
    generateLicense: function (license) {
        return `## License
        
        This project is licensed under the ${license} license\n`
    },
    generateContributing: function (contributing) {
        return `## Contributing
        
        ${contributing}\n`
    },
    generateTests: function (tests) {
        return `## Tests
        
        To run tests, run the following command:
        \`\`\`
        ${tests}
        \`\`\`\n`
    },
    generateQuestions: function (username, email) {
        return `## Questions
        
        If you have any questions about the repo, open an issue or want to discuss, contact me directly at ${email}. You can find more of my work at [${username}](https://github.com/${username}/.)`
    },
}