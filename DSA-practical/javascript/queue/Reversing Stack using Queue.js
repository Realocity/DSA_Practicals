/*
Name : Shubham Sapkal
Roll No. : 2012118

Q. Write a program to reverse stack using queue.

Output :
push() — Adds an element.
Display elements
51
41
31
21
11
adding to Queue...
51
41
31
21
11
REVERSE...
11
21
31
41
51
*/
class Queue
{
  constructor () // Constructor 
  {
    this.front = null
    this.rear = null
  }

  insert(ele)
  {
	    var node = new newNode(ele)
	    if(this.front==null)							
	      this.front=node
	    else
		    this.rear.next=node
	    this.rear=node
  }
  //Get from queue and push on stack
  push_stack()
  {
    var temp=this.front
	  while(temp!=null)
	  {
	    top.push(temp.data)
  	  temp=temp.next
  	  this.front=this.front.next
	   }
  }
  display()
  {
      var temp=this.front
      while(temp!=null)
      {
        console.log(temp.data)
        temp=temp.next
      }
  }
}
class Stack
{
  constructor () 
  {
    this.top = null
  }

  push(ele)
  {
	  var node=new newNode(ele)
	  node.next=this.top
	  this.top=node
  }
  //pop from stack and add to queue
  pop_add_queue()
  {
	  var temp=this.top
	  while(temp!=null)
	  {
	    front.insert(temp.data)
  	  temp=temp.next
  	}
    this.top=null
  }
    display()
    {
        var temp=this.top
        while(temp!=null)
        {
          console.log(temp.data)
          temp=temp.next
        }
    }
}

class newNode 
{
  constructor (data, next) 
  {
    this.data = data
    this.next = null
  }

}

const top = new Stack()
const front = new Queue()
console.log("push() — Adds an element.")
top.push(11)
top.push(21)
top.push(31)
top.push(41)
top.push(51)
console.log("Display elements")
top.display()
top.pop_add_queue()
console.log("adding to Queue...")
front.display()
front.push_stack()
console.log("REVERSE...")
top.display()
