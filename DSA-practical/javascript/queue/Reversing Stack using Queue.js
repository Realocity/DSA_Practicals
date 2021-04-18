/*
Name : Shubham Sapkal
Roll No. : 2012118

Q. Write a program to reverse stack using queue.

Output :
push() — Adds an element.
[ 19, 28, 37, 46 ]
Display elements
[ 46, 37, 28, 19 ]
*/
class Stack {
  top = -1;
  stack = [];

  push(ele) {
    this.top += 1;
    this.stack[this.top] = ele;
  }

  pop() {
    if (!this.isEmpty()) {
      const ele = this.stack[this.top];
      this.top -= 1;
      return ele;
    }
  }

  isEmpty() {
    return this.top === -1;
  }

  display() {
    if (!this.isEmpty()) {
      console.log(this.stack);
    }
  }
}

class Queue {
  front = 0;
  rear = 0;
  queue = [];

  push(ele) {
    this.queue[this.rear] = ele;
    this.rear += 1;
  }

  pop() {
    if (!this.isEmpty()) {
      //shift all elements one index left
      const ele = this.queue[this.front];
      for (let i = 0; i < this.rear - 1; i++) {
        this.queue[i] = this.queue[i + 1];
      }
      this.rear -= 1;
      return ele;
    }
  }

  isEmpty() {
    return this.front === this.rear;
  }

  display() {
    if (!this.isEmpty()) {
      console.log(this.queue);
    }
  }
}

function reverseStack() {
  const stack = new Stack();
  stack.push(19);
  stack.push(28);
  stack.push(37);
  stack.push(46);
  stack.display();
  ////////////////
  const queue = new Queue();
  while (!stack.isEmpty()) {
    queue.push(stack.pop());
  }
  while (!queue.isEmpty()) {
    stack.push(queue.pop());
  }
  stack.display();
}

reverseStack();
