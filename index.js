// const inquirer = require('inquirer');
// const { writeFile } = require('fs').promises;


// // Use writeFileSync method to use promises instead of a callback function

// const questions = () => {
//   return inquirer.prompt([
//     {
//         type: "input",
//         name: "title",
//         message: "What is the title of your project?"
//     },
//     {
//         type: "input",
//         name: "description",
//         message: "Please provide a description of your project."
//     },
//     {
//         type: "input",
//         name: 'installation',
//         message: "What is the installation procedure for your project?"
//     },
//     {
//         type: "input",
//         name: 'useage',
//         message: "Please describe how a user would utilize your project."
//     },
//     {
//         type: "input",
//         name: 'license',
//         message: "What liscenses were used in this project?"
//     },
//   ]);
// };

// const generateMarkdown = ({title, description, installation, license}) =>
//   `# ${title}
//   ## Description
//   ${description}

//   ## Instalation
//   ${installation}

//   ## Liscense
//   ${license}
//   `;

// const init = () => {
//   questions()
//     .then((answers) => writeFile('README.md', generateMarkdown(answers)))
//     .then(() => console.log('Your README.md has been successfully created'))
//     .catch((err) => console.error(err));
// };



import inquirer from "inquirer";
import fs from "fs";
import {generateMarkdown} from './utils/generateMarkdown.js'

function init () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Please provide a description of your project.",
      },
      {
        type: "input",
        name: 'imageAlt',
        message: "What is the imageAlt?"
      },
      {
        type: "input",
        name: 'imageURL',
        message: "What is the image URL?"
      },
      {
        type: "input",
        name: "installation",
        message: "What is the installation procedure for your project?",
      },
      {
        type: "input",
        name: "useage",
        message: "Please describe how a user would utilize your project.",
      },
      {
        type: "list",
        name: "license",
        message: "What license was used for this project?",
        choices: [
          {name: "Apache"},
          {name: "MIT"},
          {name: "GNU"},
          {name: "ISC"},
          {name: "Perl"},
          {name: "None"},
        ]
      },
    ])
    .then((response) => {
      fs.writeFile("newREADME.md", generateMarkdown(response), (err) => {
        if (err)
          console.log(err);
        else {
          console.log("Your README has successfully been generated.");
        }
      })

    });
}


init();