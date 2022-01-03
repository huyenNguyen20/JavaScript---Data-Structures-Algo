class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

/** Stack (Linked List Implementation)
 * bottom              top
 *  |                   |
 * item1 <= item2 <= item3
 */
class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    //See the top node
    peek(){
        return this.top;
    }
    //Push an item on top of the stack
    push(value){
        //Create a new node
        const newNode = new Node(value);
        //If Length = 0
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
            this.length++;
        } else {
            const holdingNode = this.top;
            this.top = newNode;
            this.top.next = holdingNode;
            this.length++;
        }
    }
    pop(){
        //If the length is one
        let item = this.top;
        if(this.length === 1) {
            this.top = null;
            this.bottom = null;
        } else if (this.length > 1){
            this.top = this.top.next;
        }
        this.length--;
        return this.top;
    }
    printOut() {
        let result = [];
        let currentNode = this.top;
        for(let i = 0; i < this.length; i++){
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return result;
    }

}

const newStack = new Stack();
newStack.push("Google");
//console.log(newStack.printOut());
newStack.push("Yahoo");
newStack.push("Discord");
console.log(newStack.printOut());
newStack.pop();
console.log(newStack.printOut());
newStack.pop();
console.log(newStack.printOut());
newStack.pop();
console.log(newStack.printOut());
newStack.pop();
console.log(newStack.printOut());