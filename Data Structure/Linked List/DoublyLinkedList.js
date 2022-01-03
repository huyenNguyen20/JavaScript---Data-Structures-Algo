class Node {
    constructor(val){
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor(val){
        this.head = new Node(val);
        this.tail = this.head;
        this.length = 1;
    }
    // Append an item to the end of the list
    append(val){
        //Create a new node
        const newNode = new Node(val);
        //Connect the tail.next to the new node
        this.tail.next = newNode;
        //Connect the newNode.prev to this.tail
        newNode.prev = this.tail
        //Reset this.tail to the new node
        this.tail = newNode;
        //Increment the length
        this.length++;
        return this;
    }
    // Prepend an item to the beginning of the list
    prepend(val){
        //Create a new node
        const newNode = new Node(val);
        //Connect the newNode.next to the head
        newNode.next = this.head;
        //Connect this.head.prev to the new node
        this.head.prev = newNode;
        //Reset this.head to the newNode
        this.head = newNode;
        //Increment the length
        this.length++;
        return this;
    }
    // Insert a value at a certain index
    insert(index, value) {
        //Check Params
        if(index === 0){
            this.prepend(value);
        } else if(index >= this.length) {
            this.append(value);
        } else if(index > 0){
            const newNode = new Node(value);
            let currentNode = this.head;
            //Loop through the linked list to the given index
            for(let i = 1; i < this.length; i++){
                if(i === index) {
                    //NOTE: currentNode at index (i - 1)
                    //Set newNode.next to currentNode.next 
                    newNode.next = currentNode.next;
                    //Set currentNode.next.prev to newNode
                    currentNode.next.prev = newNode;
                    //Set currentNode.next to the newNode
                    currentNode.next = newNode;
                    //Set newNode.prev to currentNode
                    newNode.prev = currentNode;
                    //Increment this.length
                    this.length++;
                    break;
                }
                currentNode = currentNode.next;
            }
        }
    }
    //Remove item at a given index
    remove(index){
        //Check Params
        if(index === 0){
            this.head = this.head.next;
            this.length--;
        } else if(index === this.length - 1) {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            this.length--;
        } else if(index > 0 && index < this.length - 1){
            let currentNode = this.head;
            for(let i = 1; i < this.length; i++){
                if(i === index){
                    //Remove item
                    if(currentNode.next.next !== null){
                        currentNode.next.next.prev = currentNode;
                    }
                    currentNode.next = currentNode.next.next;
                    this.length--;
                    break;
                }
                currentNode = currentNode.next;
            }
        }
    }
    //Return an array of items in the list
    printListForward(){
        const result = [];
        let currentNode = this.head;
        //Loop through the linked list to the given index
        while(currentNode !== null){
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return result;
    }
    printListBackward(){
        const result = [];
        let currentNode = this.tail;
        //Loop through the linked list to the given index
        while(currentNode !== null){
            result.push(currentNode.value);
            currentNode = currentNode.prev;
        }
        return result;
    }
}

const newLinkedList = new DoublyLinkedList(10); // 10
newLinkedList.append(5); // 10->5
// console.log(newLinkedList.printListForward());
newLinkedList.append(16); // 10->5->16
// console.log(newLinkedList.printListForward());
newLinkedList.prepend(2); //2->10->5->16
// console.log(newLinkedList.printListForward());
newLinkedList.insert(2,6); // 2->10->6->5->16
// console.log(newLinkedList.printListForward());
// console.log(newLinkedList.printListBackward());
newLinkedList.insert(0,1); // 1->2->10->6->5->16
newLinkedList.insert(5,7); // 1->2->10->6->5->7->16
// console.log(newLinkedList.printListForward());
// console.log(newLinkedList.printListBackward());
newLinkedList.remove(4);    // 1->2->10->6->7->16
// console.log(newLinkedList.printListForward());
// console.log(newLinkedList.printListBackward());