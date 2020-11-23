// Walk through the Queue class in the curriculum and understand it well. Then write a Queue class with its core functions (enqueue(), dequeue()) from scratch.

class _Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        let newNode = new _Node(data);
        if (this.first === null) {
            this.first = newNode;
        }
        if (this.last !== null) {
            this.last.next = newNode;
        }
        this.last = newNode;
    }
    dequeue() {
        if (this.first === null) return null;
        let firstNode = this.first;
        this.first = firstNode.next;
        if (this.last === firstNode) {
            this.last === null;
        }
        return firstNode.data;
    }
}

// Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, and Checkov to the queue.
let trekQ = new Queue();
trekQ.enqueue('Kirk');
trekQ.enqueue('Spock');
trekQ.enqueue('Uhura');
trekQ.enqueue('Sulu');
trekQ.enqueue('Checkov');

console.log(trekQ);

// Implement a peek() function outside of the Queue class that lets you take a peek at what the 1st item in the queue is.

function peek(queue) {
    return queue.first;
}

console.log(peek(trekQ));

// Implement a isEmpty() function outside the Queue class that allows you to check if the queue is empty or not.

function isEmpty(queue) {
    return !queue.first;
}

let emptyQueue = new Queue;

console.log(isEmpty(trekQ));
console.log(isEmpty(emptyQueue));

// Implement a display() function outside of the Queue class that lets you display what's in the queue.

function display(queue) {
    let s = '-->';
    let curr = queue.first;
    while(curr && curr.next) {
        s += ` ${curr.data},`
        curr = curr.next;
    }
    if (curr) {
        s += ` ${curr.data}`;
    }
    console.log(s);
}

display(trekQ);

// Remove Spock from the queue and display the resulting queue.
trekQ.dequeue();
trekQ.dequeue();

display(trekQ);

module.exports = { Queue, peek, isEmpty, display };