'use strict';

const Node = require('./node.js');

module.exports = class {
  constructor() {
    this.front = null;
    this.back = null;
    this.maxSize = 1048;
    this.size = 0;
  }
  enqueue(value) {
    if (this.size === this.maxSize) throw new Error ('Queue Overflow!');

    let node = new Node (value);

    this.back ? this.back.next = node : this.front = node;
    this.back = node;
    this.size++;

    return this.front;
  }
  dequeue() {
    let first = this.front;
    this.front = this.front.next;
    first.next = null;
    this.size--;

    return first;
  }
}
