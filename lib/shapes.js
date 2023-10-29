//classes of shapes to render
class Shape {
    constructor() {
        this.shapeColor='';
    }
    setShapeColor(shapeColor) {
        this.shapeColor= (shapeColor);
    }
}

class Circle extends Shape{
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
};

class Triangle extends Shape{
    render() {
        return `<polygon points="50 15, 100 100, 0 100" fill="${this.shapeColor}" />`
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