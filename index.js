const inquirer = require('inquirer');
const fs = require('fs');

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
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <p>${answers.title}</p>
            <p>${answers.textColor}</p>
            <p>${answers.shape}</p>
            <p>${answers.shapeColor}</p>
        </body>
        </html>`;
    fs.writeFile('./logo.svg', logoSvg, (err) => {
        if (err) throw (err);
            console.log('Generated logo.svg');
    });
});