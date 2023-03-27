// TODO: Include packages needed for this application
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    "What's your project title?", 
    "How would you describe the functionality of this website? (Description)", 
    "Please list all of the sections included in your README: (Table of Contents)", 
    "What process did you go through to install your project? (Installation)", 
    "What will this website be used for? (Usage)", 
    "What type of licence will you use for this project? (License)", 
    "Who contributed to this development of this project? (Contributing) ", 
    "What kind of tests did you complete during this project? (Tests):", 
    "Do you have any questions you still want to explore from creating this project? (Questions)"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
