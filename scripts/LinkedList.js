import Node from './Node';

export default class LinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
  }

  unshift(data) {
    let newNode = new Node(data);
    let nodeToCheck = this.head;
    
    if (!nodeToCheck) {
      this.head = newNode;
      this.length++;

      return newNode;
    }

    newNode.next = nodeToCheck
    this.head = newNode;
    this.length++;

    return newNode;
  }

  shift() {
    let nodeToCheck = this.head;

    if (!nodeToCheck) {
      return null;
    }

    this.head = nodeToCheck.next;
    this.length--;

    return nodeToCheck;
  }

  push(data) {
    let newNode = new Node(data);
    let nodeToCheck = this.head;

    if (!nodeToCheck) {
      this.head = newNode;
      this.length++;

      return newNode;
    }

    while (nodeToCheck.next) {
      nodeToCheck = nodeToCheck.next;
    }

    nodeToCheck.next = newNode;
    this.length++;

    return newNode;
  }

  pop() {
    let nodeToCheck = this.head;
    let secondToLast;

    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      this.head = null;
    }

    while (nodeToCheck.next) {
      secondToLast = nodeToCheck;
      nodeToCheck = nodeToCheck.next;
    }

    if (secondToLast) {
      secondToLast.next = null; 
    }

    this.length--;

    return nodeToCheck;
  }
}
