
class Circle {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />`
    }
};

class Triangle {
    render() {
        return `<polygon points="50 15, 100 100, 0 100" fill="${answers.shapeColor}" />`
    }
};

class Square {
    render() {
        return `<rect width="200" height="200" fill="${answers.shapeColor}" />`
    }
};

module.exports = {
    Circle,
    Triangle,
    Square,
}