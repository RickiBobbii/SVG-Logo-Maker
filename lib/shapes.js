//classes of shapes to render
class Shape {
    constructor() {
        this.shapeColor='';
    }
    setShapeColor(shapeColor) {
        this.shapeColor= (shapeColor);
    }
}

// TODOS issues with rendering shapeColor with current impliment
// have to delete shapeColor inheritence to make work
class Circle extends Shape{
    render() {
        return `<circle cx="150" cy="85" r="80" fill="${this.shapeColor}" />`
    }
};

class Triangle extends Shape{
    render() {
        return `<polygon points="50 15, 150 150, -50 150" transform="translate(100,-15)"`
    }
   
};

class Square extends Shape{
    render() {
        return `<rect width="200" height="200" fill="${this.shapeColor}" />`
    }
};

module.exports = {
    Circle,
    Triangle,
    Square,
}

//function to render selected shape