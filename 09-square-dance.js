// As people come to the dance floor, they should be paired off as quickly as possible: man with woman, man with woman, all the way down the line. If several men arrive in a row, they should be paired in the order they came, and likewise if several women do. Maintain a queue of "spares" (men for whom you have no women yet, or vice versa), and pair them as appropriate.

let { Queue, peek, isEmpty, display } = require('./06-queue.js');

class PairingMachine {
    constructor() {
        this.mQ = new Queue;
        this.fQ = new Queue;
    }
    femaleArrives(name) {
        if (this.mQ.first) {
            console.log(`${name} paired with ${this.mQ.dequeue()}`);
        } else {
            this.fQ.enqueue(name);
        }
    }
    maleArrives(name) {
        if (this.fQ.first) {
            console.log(`${this.fQ.dequeue()} paired with ${name}`);
        } else {
            this.mQ.enqueue(name);
        }
    }
    displayQueues() {
        console.log(`Males:`);
        display(this.mQ);
        console.log(`Females:`);
        display(this.fQ);
    }
}

let p = new PairingMachine;

p.femaleArrives('Judy');
p.femaleArrives('Ruth');

p.displayQueues();

p.maleArrives('Joe');
p.maleArrives('Bob');
p.maleArrives('Bernardo')

p.displayQueues();