const inquirer = require("inquirer");
const util = require("./utils/generateMarkdown")
const fs = require("fs");

// Array of questions for user input
const questions = [
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
]

inquirer
    .prompt(questions)
    .then(function (response) {
        // Create README content with user inputs
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
        // Write file with README content
        if (response.title && response.license && response.description && response.installation && response.usage && response.contributing && response.tests && response.username && response.email) {
            fs.writeFile("README.md", readmeContent, function (err) {
                if (err) throw err;
                console.log("Your README file was successfully generated");
            });
        } else {
            console.log("Please answer all the questions.")
        };
    });