const inquirer = require("inquirer");

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
            default: "npm test"
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
        
    });