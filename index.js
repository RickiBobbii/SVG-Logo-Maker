const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');


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
        const circle = new Circle().render();
        const triangle = new Triangle().render();
        const square = new Square().render();

        //Renders the SVG Logo
        const logoSvg = 
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${triangle} fill="${answers.shapeColor}" />
    <text x="50%" y="50%" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.title}</text>
</svg>`;
    //writes a file for the SVG logo    
    fs.writeFile('./logo.svg', logoSvg, (err) => {
        if (err) throw (err);
            console.log('Generated logo.svg');
    });
});