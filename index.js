// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project:",
  },
  {
    type: "input",
    name: "screenshot",
    message:
      "Please provide the relative path to the image you want to use as the screenshot:",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the purpose and functionality of this project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage information:",
  },
  {
    type: "input",
    name: "contributors",
    message: "Contribution guidelines:",
  },
  {
    type: "input",
    name: "test",
    message: "Test instructions:",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project:",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "creator",
    message: "Write your GitHub username:",
  },
  {
    type: "input",
    name: "githubRepo",
    message: "Enter the link to the project's GitHub repository:",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address:",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => console.log(err));
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      writeToFile("./README.md", generateMarkdown(answers));
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
