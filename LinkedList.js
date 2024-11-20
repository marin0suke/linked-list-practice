import Node from "./listNode";

class LinkedList {
    constructor() {
        this.head = null; // new LL is empty tf head is empty.
        this.size = 0; // nothing in the list.
    }

    append(value) {
        const newNode = new Node(value);
        if(!this.head) { // means we have an empty list.
            this.head = newNode; // if there is no head, this newNode becomes the head (first in the list)
        } else { // the list already has nodes in it
            let current = this.head; // initialise pointer to move through the list. set it to the start.
            while (current.nextNode) { // while the referenced node has a nextNode property (there is another node after)
                current = current.nextNode; // move the pointer to the next node.
            }
            current.nextNode = newNode; // while loop will exit when there is nothing to move to - so we will be at the current last node, where the nextNode property is null. here we set nextNode to the newNode!
        }
        this.size++; 
    }
}

export default LinkedList;