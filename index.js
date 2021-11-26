// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
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
      name: 'github username',
      message: 'Enter your GITHUB username'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your Email address'
    },

]) ;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
