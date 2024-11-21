import Node from "./listNode";

class LinkedList {
    constructor() {
        this.head = null; // new LL is empty tf head is empty.
        this.size = 0; // nothing in the list.
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) { // means we have an empty list.
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

    prepend(value) { // add on to the front of the list.
        const newNode = new Node(value);
        if (!this.head) { //still gotta check if list is empty first.
            this.head = newNode; 
        } else {
            newNode.nextNode = this.head; // newNodes nextNode prop points to the head now.
            newNode = this.head; // set newNode to head of the list.
        }
        this.size++;
    }

    size() {
        return this.size;
    }

    head() {
        if (!this.head) {
            return null;
        } else {
            return this.head;
        }
    }

    tail() {
        if (!this.tail) {
            return null;
        } else {
            let current = this.head;
            while (current.nextNode) {
                current = current.nextNode;
            }
            return current; // this will be the last node (points to null so exits while loop).
        }
    }

    at(index) {
        if (index < 0 || index > this.size) {
            return null;
        } else {
            let current = this.head;
            while (current.nextNode) {
                for (i = 0; i < index; i++) {
                    current = current.nextNode;
                }
            return current;
            }
        }
    }

    pop() {
        if (!this.head) { // if list is empty, no action.
            return null;
        } else if (!this.head.nextNode) { // if the head is the only node.
            const value = this.head.value; // we want to keep this to return.
            this.head = null; // remove this head.
            this.size--; // decrement list size.
            return value;
        } else {
            let current = this.head;
            while (current.nextNode.nextNode) { // loop runs as long as current has 2x nextNodes - (2nd to last.)
                current = current.nextNode; // sets to 2nd last in list. 
            }
            const value = current.nextNode.value; // we can only set nextNode from the previous node. 
            current.nextNode = null; // remove it.
            this.size--;
            return value;
        }
    }

    contains(value) {
        const target = value;
        let current = this.head; // pointer to start traverse.
        while (current) {
            if (current.value === target) {
                return true; // if target is matched, return.
            }
            current = current.nextNode; // if current doesn't match, move onto the next.
        }
        return false;
    }
}

export default LinkedList;