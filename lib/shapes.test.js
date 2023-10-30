const { Circle, Triangle, Square } = require('./shapes');
//Run tests for shapes using 'npm run test' in CLI

//Circle test
describe('Circle', () => {
    test('Circle renders correctly', ()=> {
        const shape = new Circle();
        expect(shape.render()).toEqual(`<circle cx="150" cy="85" r="80"`);
    });        
});

//Triangle test
describe('Triangle', () => {
    test('Triangle renders correctly', ()=> {
        const shape = new Triangle();
        expect(shape.render()).toEqual(`<polygon points="50 15, 150 150, -50 150" transform="translate(100,-15)"`);
    });        
});

//Square test
describe('Square', () => {
    test('Square renders correctly', ()=> {
        const shape = new Square();
        expect(shape.render()).toEqual(`<rect x="50%" y="35%" width="200" height="200" transform="translate(-100,-100)"`);
    });        
});