class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
class LinkedList {
    constructor(val){
        this.head = new Node(val);
        this.tail = this.head;
        this.length = 1;
    }
    // Append an item to the end of the list
    append(val){
        if(this.length === 0) {
            this.head = new Node(val);
            this.tail = this.head;
            this.length = 1;
        } else {
            //Create a new node
            const newNode = new Node(val);
            //Connect the tail.next to the new node
            this.tail.next = newNode;
            //Reset this.tail to the new node
            this.tail = newNode;
            //Increment the length
            this.length++;
            return this;
        }

    }
    // Prepend an item to the beginning of the list
    prepend(val){
        //Create a new node
        const newNode = new Node(val);
        //Connect the newNode.next to the head
        newNode.next = this.head;
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
                    //Set newNode.next to currentNode.next
                    newNode.next = currentNode.next;
                    //Set currentNode.next to the newNode
                    currentNode.next = newNode;
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
        } else if(index > 0 && index <= this.length - 1){
            let currentNode = this.head;
            for(let i = 1; i < this.length; i++){
                if(i === index){
                    //Remove item
                    currentNode.next = currentNode.next.next;
                    this.length--;
                    break;
                }
                currentNode = currentNode.next;
            }
        }
    }
    //Return an array of items in the list
    printList(){
        const result = [];
        let currentNode = this.head;
        //Loop through the linked list to the given index
        while(currentNode !== null){
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return result;
    }
    //Reverse the whole linked list
    reverse(){
        //Edge Case
        if(this.length > 1){
            let first = this.head;
            let second = this.head.next;
            while (second !== null) {
                // Assgin temp to second.next 
                // (which will not be modified in the current operation)
                const temp = second.next;
                second.next = first;
                first = second;
                second = temp;
            }
            this.tail = this.head;
            this.head.next = null;
            this.head = first;
        }
        return this;
    }
}

const newLinkedList = new LinkedList(10);
newLinkedList.append(5);
newLinkedList.append(16);
newLinkedList.prepend(2); //2->10->5->16
//console.log(newLinkedList.printList());
newLinkedList.insert(2,6); // 2->10->6->5->16
//console.log(newLinkedList.printList());
newLinkedList.insert(0,1); // 1->2->10->6->5->16
//console.log(newLinkedList.printList());
newLinkedList.insert(5,7); // 1->2->10->6->5->7->16
//console.log(newLinkedList.printList());
// newLinkedList.remove(5);    // 1->2->10->6->5
//console.log(newLinkedList.printList());
newLinkedList.reverse();
console.log(newLinkedList.printList());
console.log(newLinkedList.head);
console.log(newLinkedList.tail);