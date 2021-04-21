/*
Name : Shubham Sapkal
Roll No. : 2012118

Output :
1 added to stack
2 added to stack
3 added to stack
4 added to stack
5 added to stack
5
4
3
2
1
pop
2
1
*/

class Stack {
  constructor(capacity) {
    this.MAX_SIZE = capacity;
    this.arr = new Array(capacity);
    this.CURRENT_SIZE = 0;
  }

  push = (data) => {
    if(this.CURRENT_SIZE < this.MAX_SIZE) {
        this.arr[this.CURRENT_SIZE] = data;
        this.CURRENT_SIZE += 1;
        console.log(`${data} added to stack`);
    } else {
        console.error("stack is full");
    }
  };

  pop = () => {
    if(this.CURRENT_SIZE > 0) {
        let index = this.CURRENT_SIZE;
        this.CURRENT_SIZE -= 1;
        return this.arr[index];
    } else {
        console.error("stack is empty");
    }
  };

  display = () => {
    for(let i = this.CURRENT_SIZE-1; i >= 0; i--) {
        console.log(this.arr[i]);
    }
  };
}

//staring point of script
const main = () => {
  const stack = new Stack(5);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  stack.display();
  console.log("pop");
  stack.pop();
  stack.pop();
  stack.pop();
  stack.display();
};

//run program
main();
