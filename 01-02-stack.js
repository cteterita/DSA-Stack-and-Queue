// 1. Walk through the Stack class in the curriculum and understand it well. Then write a Stack class with its core functions (push, pop) from scratch.

class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        // Create a new node pointing to the top (or null, if the stack is empty)
        let next = this.top !== null ? this.top : null;
        this.top = new _Node(data, next);
    }
    pop() {
        // Return null if the stack is empty
        if (this.top === null) return null;
        // Get the top node
        let top = this.top;
        // Assign the top to the node under it
        this.top = top.next;
        // Return the (original) top node
        return top;
    }
}

// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.

let trekStack = new Stack();
trekStack.push('Kirk');
trekStack.push('Spock');
trekStack.push('McCoy');
trekStack.push('Scotty');

console.log(trekStack);

// 2. Using the Stack class above, implement the following helper functions outside of the class:

// peek(): allows you to look at the top of the stack without removing it

function peek(stack) {
    return stack.top;
}

console.log(peek(trekStack));

// isEmpty(): allows you to check if the stack is empty or not

function isEmpty(stack) {
    return !stack.top;
}

console.log(isEmpty(trekStack));
let emptyStack = new Stack;
console.log(isEmpty(emptyStack));

// display(): to display the stack - what is the 1st item in your stack?

function display(stack) {
    let displayString = 'Top ->> ';
    let curr = stack.top;
    while (curr !== null) {
        displayString += curr.data + ', ';
        curr = curr.next;
    }
    return console.log(displayString);
}
display(trekStack);

// Remove McCoy from your stack and display the stack
trekStack.pop();
trekStack.pop();
display(trekStack);

module.exports = { Stack, peek, isEmpty, display };