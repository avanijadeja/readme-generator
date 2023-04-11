// add require modules
const fs = require('fs');
const inquirer = require("inquirer");

//function that will run questions in the terminal
const questions = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                message: 'what is the title of your project?',
                name: 'title',
            },
            {
                type: "input",
                message: 'please provide a brief description of your project:',
                name: 'description',
            },
            {
                type: "input",
                message: 'please provide a step-by-step description of how to install your project:',
                name: 'install',
            },
            {
                type: "input",
                message: "Please provide directions and examples for use:",
                name: 'usage',
            },
            {
                type: "input",
                message: 'Please list contributors to this project, if any:',
                name: 'credits',
            },
            {
                type: "input",
                message: 'please write any tests for your project:',
                name: 'test',
            },
            {
                type: "list",
                message: 'Please select a license from the list',
                choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'Eclipse Public License 1.0','The MIT License', 'Mozilla Public License 2.0'],
                name: 'license',
            },
            {
                type: "input",
                message: 'Please enter your github username:',
                name: 'username',
            },
            {
                type: "input",
                message: 'Please enter your email address:',
                name: 'email',
            },
        ])
}

// function that takes the license response and pulls the corresponding license badge
const badgeLicense = (response) => {
    var badge;

    if (response.license == "Apache 2.0 License") {
        badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    else if (response.license == "Boost Software License 1.0") {
        badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    }
    else if (response.license == "BSD 3-Clause License") {
        badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    }
    else if (response.license == "Eclipse Public License 1.0") {
        badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    }
    else if (response.license == "The MIT License") {
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    else if (response.license == "Mozilla Public License 2.0") {
        badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
    return badge;
}

//function that creates the content for the readme file using template literal
const createReadme = (response) => `
# ${response.title}
${badgeLicense(response)}
## description
${response.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
## Installation
${response.install}
## usage
${response.usage}
## Contributing
${response.credits}
## Tests
${response.test}
## License
This project is using the ${response.license} license.
## Questions
Please reach out with any questions you may have!
Here are some ways you can connect with me :
Github: [${response.username}](https://github.com/${response.username})
Email: <${response.email}>
`;


//function runs all the questions, then takes the response and writes a readme file.
function init(){
    questions()
    .then((response) => fs.writeFile('readme.md', createReadme(response), (err) => 
    err ? console.error(err) : console.log('Readme file was successfully created')));
}

// Function call to initialize app
init();