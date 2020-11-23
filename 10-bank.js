// At the Ophidian Bank, a single teller serves a long queue of people. New customers join the end of the queue, and the teller will serve a customer only if they have all of the appropriate paperwork. Write a representation of this queue; 25% of the time (random), a customer's paperwork isn't quite right, and it's back to the end of the queue. Show what a few minutes of the bank's lobby would look like.

let { Queue, peek, isEmpty, display } = require('./06-queue.js');

class Bank extends Queue {
    constructor(rejectionRate) {
        super();
        this.rejectionRate = rejectionRate;
    }
    serveNext() {
        // Serve the next customer
        let customer = this.dequeue();
        // x% of the time, send them to the back of the line
        if (Math.random() < this.rejectionRate) { //
            this.enqueue(customer);
            console.log(`${customer} sent to back of line`);
        } else {
            console.log(`${customer} served`);
        }
    }
}

let obsidian = new Bank(.25);

obsidian.enqueue(1);
obsidian.enqueue(2);
obsidian.enqueue(3);
obsidian.enqueue(4);
obsidian.enqueue(5);

obsidian.serveNext();
display(obsidian);
obsidian.serveNext();
display(obsidian);
obsidian.serveNext();
display(obsidian);
obsidian.serveNext();
display(obsidian);
obsidian.serveNext();
display(obsidian);