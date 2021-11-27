// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFileAsync = util.promisify(writeToFile);
// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Waht is you project Tilte',
    },
    {
      type: 'input',
      name: 'Discription',
      message: 'Enter Project Description'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter project installation instructions'
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Enter project usage information'
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter project contribution guidelines'
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter project test instructions'
    },
    {
      type: 'checkbox',
      name: 'license',
      message: ' choose which license the application is covered under',
      choices: ['CC0', 'MIT', 'Apache', 'MPL', 'GPL', 'AGPL', 'JRL','AFPL']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GITHUB username'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your Email address'
    },

]) ;

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
  
    
});
};

// TODO: Create a function to initialize app
 async function init() {
    try{
    const data = await questions;
    const readMe = generateMarkdown(data);
    await writeFileAsync('./dist/README.md', readMe);
    console.log("README.md file has been generated");
    }catch(error) {
      console.log(error)};
      
};

// Function call to initialize app
init();

