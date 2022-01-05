class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    //Insert a new node
    insert(value){
        // Create a new node
        const newNode = new Node(value);
        // If the tree is empty
        if(this.root === null){
            this.root = newNode;
        } else {
            //Traverse to the leaf node
            let currentNode = this.root;
            while(true){
                if(newNode.value >= currentNode.value && !!currentNode.right) {
                    //1) If the newNode is greater or equal to its parent, then go right
                    currentNode = currentNode.right;
                } else if(newNode.value < currentNode.value && !!currentNode.left) {
                    //2) Else, the newNode will go left
                    currentNode = currentNode.left;
                } else break;
            }
            if(newNode.value >= currentNode.value) currentNode.right = newNode;
            else currentNode.left = newNode;
        }
    }
    //Return first node corresponding to the value
    lookup(value){
        if(!!this.root){
            let currentNode = this.root;
            //Traverse to the node
            while(!!currentNode){
                if(value > currentNode.value) currentNode = currentNode.right;
                else if(value < currentNode.value) currentNode = currentNode.left;
                else return currentNode;
            }
            return null;
        }
        return null;
    }
    //Remove a node from the tree
    remove(value){
        if(!!this.root){
            let item = null;
            let currentNode = this.root;
            let parentNode = null;
            //Traverse to the node
            while(true){
                if(value > currentNode.value && !!currentNode.right ) {
                    parentNode = currentNode;
                    currentNode = currentNode.right;
                } else if(value < currentNode.value && !!currentNode.left){
                    parentNode = currentNode;
                    currentNode = currentNode.left;
                } else if(value === currentNode.value) {
                    //Option 1: Have no right child
                    if(!currentNode.right){
                        //Case 1: Remove root node
                        if(parentNode === null) this.root = currentNode.left;
                        //Case 2: Remove non-root node
                        else {
                            if(currentNode.value < parentNode.value){
                                parentNode.left = currentNode.left;
                            } else {
                                parentNode.right = currentNode.left;
                            }
                        }
                    }
                    //Option 2: The right child doesn't have left child
                    else if(!currentNode.right.left){
                        //Attach any left child of the node to the right child of the node
                        if(!!currentNode.left) currentNode.right.left = currentNode.left;
                        //Case 1: Remove root node
                        if(parentNode === null) this.root = currentNode.right;
                        //Case 2: Remove non-root node
                        else{
                            //If the current node is smaller than the parent node, 
                            // attach its right child as its parent's left child
                            if(currentNode.value < parentNode.value){
                                parentNode.left = currentNode.right;
                            } else {
                                parentNode.right = currentNode.right;
                            }
                        }
                    }
                    //Option 3: The right child have left child
                    else {
                        //Find the left-most child and its parent
                        let leftMostNode = currentNode.right.left;
                        let leftMostParentNode = currentNode.right;
                        while(leftMostNode.left !== null){
                            leftMostParentNode = leftMostNode;
                            leftMostNode = leftMostNode.left;
                        }
                        //Attach the right branch of the leftMost node to the left of the leftMost parent Node
                        leftMostParentNode.left = leftMostNode.right;
                        //Attach the right branch of the current node to the right of the leftMost node
                        leftMostNode.right = currentNode.right;
                        //Attach the left branch of the current node to the left of the leftMost node
                        leftMostNode.left = currentNode.left;
                        //Case 1: Remove root node
                        if(parentNode === null) {
                            this.root = leftMostNode;
                        }
                        //Case 2: Remove non-root node
                        else{
                            if(currentNode.value < parentNode.value){
                                parentNode.left = leftMostNode;
                            } else {
                                parentNode.right = leftMostNode;
                            }
                        }
                    }
                    break;
                } else break;
            }
            return item;
        }
        return null;

    }
    //Breadth First Search
    //(The search will go from left to right, level by level)
    breadthFirstSearch(){
        let currentNode = this.root;
        let BFSList = [];
        let queue = []; // To keep track of children of each level from left to right
        // Initialize the queue;
        if(!!currentNode) queue.push(currentNode);
        let i = 0;
        while(queue.length > 0){
            currentNode = queue.shift();
            BFSList.push(currentNode.value);
            if(!!currentNode.left) queue.push(currentNode.left);
            if(!!currentNode.right) queue.push(currentNode.right);
        }
        return BFSList;
    }
    breadthFirstSearchRecursively(){
        if(!!this.root) {
            let queue = [this.root];
            let list = [];
            this.breadthFirstSearchRecursivelyHelper(queue, list);
            return list;
        }
        return [];
    }
    breadthFirstSearchRecursivelyHelper(queue, list){
        if(queue.length > 0){
            let currentNode = queue.shift();
            list.push(currentNode.value); 
            if(!!currentNode.left) queue.push(currentNode.left);
            if(!!currentNode.right) queue.push(currentNode.right);
            return this.breadthFirstSearchRecursivelyHelper(queue, list);
        }
    }
    //Depth First Search
    //(The search will goes down one branch of the tree each time, and all the way to the leaf nodes)
    depthFirstSearch(){
        let list = [];
        if(!!this.root){
            this.depthFirstSearchRecursively(this.root,list);
        }
        return list;
    }
    depthFirstSearchRecursively(node, list){
        if(!!node){
            //list.push(node.value); // Pre-order - Record the node in the order of traversal
            if(!!node.left)this.depthFirstSearchRecursively(node.left,list);
            list.push(node.value) // In-order - Record the node only after the left-most branch get exhausted
            if(!!node.right)this.depthFirstSearchRecursively(node.right,list);
            //list.push(node.value) // Post-order - Record the node only after the right-most branch get exhausted
        }
    }
}

function traverse(node){
    if(!!node){
        const tree = { value: node.value };
        tree.left = node.left === null ? null : traverse(node.left);
        tree.right = node.right === null ? null : traverse(node.right);
        return tree;
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(1);
tree.insert(7);
tree.insert(5);
tree.insert(6);
tree.insert(20);
tree.insert(15);
tree.insert(170);
tree.insert(180);
// console.log(JSON.stringify(traverse(tree.root)));
// tree.remove(9);
// console.log(JSON.stringify(traverse(tree.root)));
// const result1 = tree.breadthFirstSearch();
// const result2 = tree.breadthFirstSearchRecursively();
// console.log(result1);
// console.log(result2);
const result3 = tree.depthFirstSearch();
console.log(result3);

// Depth Search First
//     9
//  4     20
//1  6  15  170
//In-Order: [1,  4, 6, 9, 15, 20, 170]
//Pre-Order: [9, 4, 1, 6, 20, 15, 170]
//Post-Order: [1,  6, 4, 15, 170, 20, 9]

