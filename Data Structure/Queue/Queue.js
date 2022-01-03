class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
/**
 * Queue(Linked List Implementation)
 * first            last
 *   |                |
 * item1 => item2 => item3
 */
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    // See the first item
    peek() {
        return this.first;
    }
    // Insert new item at the end of the queue
    enqueue(value) {
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else  {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    // Remove item at the beginning of the queue
    dequeue() {
        if(!!this.first){
            if(this.length === 1){
                this.last = null;
            }
            this.first = this.first.next;
            this.length--;
        }
        return this.first;
    }
    //print out the list
    printOut() {
        let result = [];
        let currentNode = this.first;
        while(currentNode !== null){
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return result;
    }
}

const newQueue = new Queue();
newQueue.enqueue("Google");
console.log(newQueue.printOut());
newQueue.enqueue("Yahoo");
console.log(newQueue.printOut());
newQueue.enqueue("Discord");
console.log(newQueue.printOut());
newQueue.dequeue();
console.log(newQueue.printOut());
newQueue.dequeue();
console.log(newQueue.printOut());
newQueue.dequeue();
console.log(newQueue.printOut());
