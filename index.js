const inquirer = require("inquirer");
const util = require("./utils/generateMarkdown")
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the project's name?",
            name: "title"
        },
        {
            type: "input",
            message: "Please write a short description of the project.",
            name: "description"
        },
        {
            type: "list",
            message: "What kind of license should your project have?",
            name: "license",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: "input",
            message: "What command should be run to install the dependencies?",
            name: "installation",
            default: "npm i"
        },
        {
            type: "input",
            message: "What command should be run to run tests",
            name: "tests",
            default: "npm run test"
        },
        {
            type: "input",
            message: "Provide instructions on how the project is used.",
            name: "usage"
        },
        {
            type: "input",
            message: "What does the user need to know about contributing to the project?",
            name: "contributing"
        },
    ])
    .then(function (response) {
        let readmeContent = "";
        readmeContent += util.generateTitle(response.title);
        readmeContent += util.generateLicenseBadge(response.license);
        readmeContent += util.generateDescription(response.description);
        readmeContent += util.generateTableOfContents();
        readmeContent += util.generateInstallation(response.installation);
        readmeContent += util.generateUsage(response.usage);
        readmeContent += util.generateLicense(response.license);
        readmeContent += util.generateContributing(response.contributing);
        readmeContent += util.generateTests(response.tests);
        readmeContent += util.generateQuestions(response.username, response.email);
        
        fs.writeFile("README-example.md", readmeContent, function (err) {
            if (err) throw err;
            console.log("Your README file was successfully generated");
        });
    });