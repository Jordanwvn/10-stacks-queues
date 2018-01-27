'use strict';

const Queue = require('../lib/queue.js');
require('jest');

describe('Queue Data Structure Module', function () {
  beforeEach(() => this.queue = new Queue());

  describe('default properties', () => {
    it('should create a new instance of a Queue', () => {
      expect(this.queue).toBeInstanceOf(Queue);
    });
    it('should have a default value of null assigned to the front property', () => {
      expect(this.queue.front).toBeNull();
    });
    it('should have a default value of null assigned to the back property', () => {
      expect(this.queue.back).toBeNull();
    });
    it('should have a default value of 0 assigned to the size property', () => {
      expect(this.queue.size).toEqual(0);
    });
    it('should have a maxSize property with a default value of 1048', () => {
      expect(this.queue.maxSize).toEqual(1048);
    });
  });
  describe('#enqueue', () => {
    it('should have a size of 20', () => {
      [...Array(20)].map((e, i) => this.queue.enqueue(~~(Math.random() * i)))
      expect(this.queue.size).toEqual(20);
    });
    it('should add a new node with the value of 1 to the back of the queue', () => {
      this.queue.enqueue(1);
      expect(this.queue.back.value).toEqual(1);
    });
    it('throw an error when maxSize is met', () => {
      expect(() => {
        [...Array(1049)].map((e, i) => this.queue.enqueue(~~(Math.random() * i)));
      }).toThrow();
    });
  });
  describe('#dequeue', () => {
    it('should remove the furthest forward most node from the queue', () => {
      this.queue.enqueue(7)
      expect(this.queue.front.value).toEqual(7);
      expect(this.queue.dequeue().value).toEqual(7);
    });
  });
});
