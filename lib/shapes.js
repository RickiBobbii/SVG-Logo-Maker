//classes of shapes to render
class Shape {
    constructor() {
        this.shapeColor='';
    }
// TODOS issues with rendering shapeColor with current impliment, future fix
    // setShapeColor(shapeColor) {
    //     this.shapeColor= (shapeColor);
    // }
}

class Circle extends Shape{
    render() {
        return `<circle cx="150" cy="85" r="80"`
    }
};

class Triangle extends Shape{
    render() {
        return `<polygon points="50 15, 150 150, -50 150" transform="translate(100,-15)"`
    }
   
};

class Square extends Shape{
    render() {
        return `<rect x="50%" y="35%" width="200" height="200" transform="translate(-100,-100)"`
    }
};

module.exports = {
    Circle,
    Triangle,
    Square,
}
