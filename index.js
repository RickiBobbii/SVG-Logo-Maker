const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/shapes');
const Triangle = require('./lib/shapes');
const Square = require('./lib/shapes');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter upto 3 characters. ',
            name: 'title',
            validate: (input)=>{ if(input){return true} else {return 'Please input a value to continue.'}},
        },
        {
            type: 'input',
            message: 'What text color would you like? (blue, red, orange, green) ',
            name: 'textColor',
            validate: (input)=>{ if(input){return true} else {return 'Please input a value to continue.'}},
        },
        {
            type: 'list',
            message: 'Select a shape. ',
            choices: ['circle', 'triangle', 'square'],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'What shape color would you like? (blue, red, orange, green) ',
            name: 'shapeColor',
            validate: (input)=>{ if(input){return true} else {return 'Please input a value to continue.'}},
        }
    ])
    .then((answers) => {
        const logoSvg =
        `<!DOCTYPE html>
        <html lang="en">
        <body>
            <p>${answers.title}</p>
            <p>${answers.textColor}</p>
            <p>${answers.shape}</p>
            <p>${answers.shapeColor}</p>
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${answers.shape} cx="150" cy="100" r="80" fill="${answers.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.title}</text>
      
      </svg>
        </body>
        </html>`;
    fs.writeFile('./logo.svg', logoSvg, (err) => {
        if (err) throw (err);
            console.log('Generated logo.svg');
    });
});