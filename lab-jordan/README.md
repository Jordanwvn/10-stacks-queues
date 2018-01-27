### INSTALLATION AND USE:

Run npm init to install the necessary dependencies before running the program.

This program can be used to create fully functional stacks and queues. These data structures can be used to store whatever type of data the user desires.

### STACK
The stack constructor will create a standard stack object as follows:
```javascript
let Stack = require ('[filepath]/stack.js');

let newStack = new Stack;
console.log(newStack);
// returns: {top: null, size: 0, maxSize: 1048}
```

#### Push
`Stack.push(value)` is used to add a new item to the stack using the passed in value.

```javascript
newStack.push(1);
console.log(newStack);
// returns: {top: {value: 1, next: null}, size: 1, maxSize: 1048}
```

#### Pop
`Stack.pop()` is used to remove an item from the stack and return its value.
```javascript
newStack.pop();
// returns 1
console.log(newStack);
// returns: {top: null, size: 0, maxSize: 1048}
```

#### Peek
`Stack.peek()` is used to view the item on top of the stack.
```javascript
newStack.push(1);
newStack.push(2);
newStack.push(3);

newStack.peek();
// returns {value: 3, next: {value: 2, next: {value: 1, next: null}}}
```

### QUEUE
The queue constructor will create a standard queue object as follows:
```javascript
let Queue = require ('[filepath]/queue.js');

let newQueue = new Queue;
console.log(newQueue);
// returns: {front: null, back: null, size: 0, maxSize: 1048}
```

#### Enqueue
`Queue.enqueue(value)` is used to add a new item to the queue using the passed in value.
```javascript
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
console.log(newQueue);
// returns: {front: {value: 3, next: {value: 2, next: {value: 1, next: null}}}, back: {value: 1, next: null}, size: 3, maxSize: 1048}
```

#### Dequeue
`Queue.dequeue()` is used to remove an item from the queue and return its value.
```javascript
newQueue.dequeue();
// returns: {value: 3, next: null}
console.log(newQueue);
// returns: {front: {value: 2, next: {value: 1, next: null}}, back: {value: 1, next: null}, size: 3, maxSize: 1048}
```
