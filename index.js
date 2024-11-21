import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("monkey");
list.append("bird");
list.append("tiger");
list.append("donkey");
list.append("sheep");
list.append("t-rex");


console.log(list.toString());
console.log(list.getIndex("sheep"));
list.append("pupper");
console.log(list.toString());
list.prepend("spag bol");
console.log(list.toString());
console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.getValueAt(3));
console.log(list.pop());
console.log(list.toString());
console.log(list.contains("donkey"));
console.log(list.contains("donke"));

list.insertAt("hamster", 3);