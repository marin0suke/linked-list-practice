import Node from "./listNode.js";

export default class LinkedList {
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
        if (!this.head) { 
            this.head = newNode; 
        } else {
            newNode.nextNode = this.head; // newNodes nextNode prop points to the head now.
            this.head = newNode;
        }
        this.size++;
    }

    getSize() {
        return `Current list size = ${this.size}`;
    }

    getHead() {
        if (!this.head) {
            return null;
        } else {
            return `First item in the list is ${this.head.value}`; // when using template literal, need to access directly. 
        }
    }

    getTail() {
        if (!this.head) {
            return null;
        } else {
            let current = this.head;
            while (current.nextNode) {
                current = current.nextNode;
            }
            return `Last item in the list is ${current.value}`; // this will be the last node (points to null so exits while loop).
        }
    }

    getValueAt(index) {
        if (index < 0 || index > this.size) {
            return null;
        } 

        let current = this.head;
        let i = 0;

        while (i < index) {
            current = current.nextNode;
            i++;
        }

        return `Value at ${index} is ${current.value}`;
    }
    

    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            return null;
        }

        let current = this.head;
        let i = 0;

        while (i < (index - 1)) {
            current = current.nextNode;
            i++;
        }

        const newNode = new Node(value); // once we arrive where we need to be, create new node.
        newNode.nextNode = current.nextNode; // connect rest of list after index to the new node.
        current.nextNode = newNode; // then we can set current.nextNode and "overwrite" current.
        return console.log(this.toString());
    }

    removeAt(index) {
        //edge case for empty list:
        if (!this.head) {
          return null; 
        }

        //if index input invalid to list.
        if (index < 0 || index >= this.size) {
            return null;
        }

        // edge case if index input is 0.
        if (index === 0) {
            const removed = this.head;
            this.head = this.head.nextNode;
            this.size--;
            return `${removed.value} was removed from the list`;
        }

        // remove at index
        let current = this.head;
        let i = 0;
        
        while (i < index - 1) {
          current = current.nextNode;
          i++;
        }
      
        const removed = current.nextNode;
        current.nextNode = removed.nextNode;
        this.size--;
        return `${removed.value} was removed from the list`;
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
            return `${value} has been removed from the list.`;
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

    getIndex(value) {
        const target = value;
        if (!this.head) {
            console.log("List is empty");
            return null;
        }

        let current = this.head;
        let i = 0;

        while (current) {
            if (current.value === target) {
                return i;
            }
            current = current.nextNode;
            i++;
        }
        
        console.log("No such node with target value");
        return -1;
    }

    toString() {
        if (!this.head) {
            console.log("This list is empty!");
            return null;
        }

        if (!this.head.nextNode) {
            const singleNode = (String(this.head.value)); // not sure if this would work.
            console.log(singleNode);
            return singleNode;
        }

        let printedList = "";
        let current = this.head;
        while (current) { // bc we want to access the current value. so check for current. 
            printedList += `( ${String(current.value)} ) -> `; 
            current = current.nextNode;
        }

        printedList += "null"; // after exiting while loop, we should be ON null. 
        return printedList;
    } 
}
