// There are many ways to implement a queue. You have learned using singly linked list, and doubly linked list. Keeping the concept of a queue in mind, implement a queue using 2 stacks and no other data structure. (You are not allowed to use a doubly linked list or array. Use your stack implementation with a linked list from above to solve this problem.)

const { Stack, peek, isEmpty, display } = require('./01-02-stack');

class Queue extends Stack {
    constructor() {
        super();
        this.auxStack = new Stack;
    }
    enqueue(data) {
        while (this.next) {
            this.auxStack.push(this.pop());
        }
        this.push(data);
        while (this.auxStack.next) {
            this.push(auxStack.pop());
        }
    }
    dequeue() {
        return this.pop().data;
    }
}

let trekQ = new Queue();
trekQ.enqueue('Kirk');
trekQ.enqueue('Spock');
trekQ.enqueue('Uhura');
trekQ.enqueue('Sulu');
trekQ.enqueue('Checkov');

console.log(trekQ);

trekQ.dequeue();

console.log(trekQ);