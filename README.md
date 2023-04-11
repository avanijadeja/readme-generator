# README Generator

## Description
When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.You can quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.So, In this project I create a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.I use inquirer@8.2.4 in this project.

Here as per project guideline first I clone starter code.So Main you can see Develop folder, .gitignore file and README.md file. This README.md files shows how this project works. And in Develop folder,you can see Assets folder in that I save my sample readme.md file screenshot which I generated using inquirer, and video of readme file.also you can see node_modules,utils,index.js,package-lock.json,package.json and README.md file which is generated by this application.

For this project I first install inquirer module using npm i inquirer@8.2.4. to install particular version @8.2.4 of inquirer module, then when on terminal we have to run index.js file using command node index.js then on terminal using prompt method user have to answers particular questions which is related to README.md file when user answers this question then one message is appear in command line like "Readme file was successfully created". so README.md file is created.In this README.md file whatever user answers for particular question on that particular sections this answers display.As per project requirement I also added License logo on the top of readme file. for license on prompt I use choice so user have to select one of license from list.I also code for particular license their logo in generated using badgeLicense method.and using createReadme method its create README.md file. Also in README.md file when you click on any Table of Contents then user can go to that particular content.example if user click on Contributing in Table of Contents then directly user can see Contributing section.Also when user click on github link user can visit github account.So as per project requirements this project dynamically generates a professional README.md file from a user's input. 

From this project I learn node.js, how to use modules of node.js, how to use prompt method, how to get data from command line and build file from this data.So I improved my knowledge in node.js.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## installation
here I used inquirer module so first open terminal,go to the file where the node.js file is store.run npm i inquirer@8.2.4 then, run node index.js in your terminal and press enter to start application.

## usage
Must have terminal to use.

Here I attached some links.

Screenshot of README file.
<img width="1440" alt="README" src="https://user-images.githubusercontent.com/1708182/231059588-ad4bdd99-7651-4276-b1ee-6c2bc812c8f6.png">



Screencastify video gif format.
![screencastify video .gif](./Develop/Assets/README_VIDEO.gif)



A walkthrough video demonstrating the functionality of the application- https://drive.google.com/file/d/1V7k7OBBUua_i1CfZxKfIj0OEr-QatrQ1/view?usp=sharing

The URL of the GitHub repository - https://github.com/avanijadeja/readme-generator

## credits
N/A

## license
This project is using the The MIT License license. For further information, please visit [here](https://choosealicense.com/license/).

## Badges
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

