// define properties `Triangle`, `Circle` and `Square`

// input classes in a parent `Shape` class and use inheritance to reuse the code in the child classes
class Shape {
    function() { // function for colour
        this.color = '';
    }
    setColor(color) {
        this.color = color; // sets the colour to what is chosen
    }
}

// triangle
class Triangle extends Shape {
    render() {
        return `<polygon height="200" width="300" points="150, 18 244, 182 56, 182" fill="${this.color}"/>` // inherits color property from parent record Shape
    }
};

// circle
class Circle extends Shape {
    render() {
        return `<circle height="200" width="300" cx="150" cy="100" r="80" fill="${this.color}"/>` // inherits color property from parent record Shape
    }
}

// square
class Square extends Shape {
    render() {
        return `<rect height="200" width="200" x="50" fill="${this.color}"/>` // inherits color property from parent record Shape, w x h must be equal to form a square
    }
}

module.exports = { Triangle, Circle, Square }
