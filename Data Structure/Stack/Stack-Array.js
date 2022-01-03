class Stack {
    constructor(){
        this.data = [];
    }
    //See the top node
    peek(){
        return this.data[this.data.length - 1];
    }
    //Push an item on top of the stack
    push(value){
        this.data.push(value);
        return this;
    }
    pop(){
        this.data.pop();
        return this;
    }
    printOut() {
        return this.data;
    }

}

const newStack = new Stack();
newStack.push("Google");
//console.log(newStack.printOut());
newStack.push("Yahoo");
newStack.push("Discord");
console.log(newStack.peek());
console.log(newStack.printOut());
newStack.pop();
console.log(newStack.printOut());
newStack.pop();
console.log(newStack.printOut());
newStack.pop();
console.log(newStack.printOut());
newStack.pop();
console.log(newStack.printOut());