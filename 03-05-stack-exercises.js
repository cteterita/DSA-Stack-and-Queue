const { Stack, peek, isEmpty, display } = require('./01-02-stack');

require('./01-02-stack');

// 3. Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point.

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    let stack = new Stack;
    // Push it all into a stack
    for(let i = 0; i < s.length; i++) {
        stack.push(s[i]);
    }

    // See if it matches as it comes back out!
    for(let i = 0; i < s.length; i++) {
        if (s[i] !== stack.pop().data) return false;
    } 
    return true;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

// 4. A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a function that takes an arithmetic expression as an argument and returns true or false based on matching parenthesis. As a bonus provide a meaningful error message to the user as to what's missing. For example, you are missing a ( or missing a ")".

function isBalanced(s) {
    s = s.replace(/[^\(\)\[\]\{\}]+/g, "");
    let stack = new Stack;
    // Push it all into a stack
    for(let i = 0; i < s.length; i++) {
        stack.push(s[i]);
    }

    // See if it matches as it comes back out!
    for(let i = 0; i < s.length; i++) {
        let char = stack.pop().data;
        if (char === ')' && s[i] !== '(') return false;
        if (char === ']' && s[i] !== '[') return false;
        if (char === '}' && s[i] !== '{') return false;
    }
    return true;
}

console.log(isBalanced('(a+b)')); // true
console.log(isBalanced('[a+b)]')); // false
console.log(isBalanced('[(a+b)]')); // true
console.log(isBalanced('([(a+b)]')); // false

// 5. Write a program to sort a stack such that the smallest items are on the top (in ascending order). You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).

function sortStack(stack) {
    let aux = new Stack;
    let curr;
    while(!isEmpty(stack)) {
        curr = stack.pop().data;
        // Push the current item into the auxilary stack only if it's smaller than the top
        // Otherwise, pop items back into the original stack until it is the smallest
        while (!isEmpty(aux) && curr > aux.top.data) {
            stack.push(aux.pop().data);
        }
        aux.push(curr);
    }
    return aux;
}

let sortableStack = new Stack;
sortableStack.push(3);
sortableStack.push(5);
sortableStack.push(92);
sortableStack.push(1);
sortableStack.push(13);

display(sortStack(sortableStack))