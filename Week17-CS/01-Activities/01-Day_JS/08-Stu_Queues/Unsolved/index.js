// create the Queue class with two methods to remove and add an element
// async method by nature
class Queue {
    // create constructor object for an empty array
    constructor(container = []) {
        this.container = container;
    }

    // adds an element to the back of the queue
    addToQueue(el) {
        return this.container.push(el);
    }

    // removes an element from the front of the queue
    removeFromQueue() {
        return this.container.shift(); // shift removes first el from an array, pop removes last
    }
}

module.exports = Queue;
