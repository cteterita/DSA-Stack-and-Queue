// Create a queue class using Doubly linked List
class _Node {
    constructor(data, prev) {
        this.data = data;
        this.next = null;
        this.prev = prev;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        let newNode = new _Node(data, this.last);
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
        this.first.prev = null;
        if (this.last === firstNode) {
            this.last === null;
        }
        return firstNode.data;
    }
}

// Use the items listed in #6 and enqueue them to your queue.
let trekQ = new Queue();
trekQ.enqueue('Kirk');
trekQ.enqueue('Spock');
trekQ.enqueue('Uhura');
trekQ.enqueue('Sulu');
trekQ.enqueue('Checkov');

console.log(trekQ);