module.exports = {
    generateTitle: function (title) {
        return `# ${title}\n\n`;
    },
    generateLicenseBadge: function (license) {
        return `![GitHub License](https://img.shields.io/badge/License-${license}-blue.svg)\n\n`;
    },
    generateDescription: function (description) {
        return `## Description\n\n${description}\n\n`;
    },
    generateTableOfContents: function () {
        return `## Table of Contents\n
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)\n\n`;
    },
    generateInstallation: function (installation) {
        return `## Installation\n\nTo install the necessary dependencies, run the following command:
\`\`\`
${installation}
\`\`\`\n\n`;
    },
    generateUsage: function (usage) {
        return `## Usage\n\n${usage}\n\n`;
    },
    generateLicense: function (license) {
        return `## License\n\nThis project is licensed under the ${license} license.\n\n`;
    },
    generateContributing: function (contributing) {
        return `## Contributing\n\n${contributing}\n\n`;
    },
    generateTests: function (tests) {
        return `## Tests\n\nTo run tests, run the following command:
\`\`\`
${tests}
\`\`\`\n\n`;
    },
    generateQuestions: function (username, email) {
        return `## Questions\n\nIf you have any questions about the repo, open an issue or want to discuss, contact me directly at ${email}.
You can find more of my work at [${username}](https://github.com/${username}/.)`;
    },
}