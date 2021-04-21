/*
Name : Shubham Sapkal
Roll no. : 2012118

Q. Write a program to Reverse a string using stack.

Output :
Stack Contains...
K
C
I
W
 
N
H
O
J
Reverse String is...
KCIW NHOJ
*/

//Reverse String using Stack
class Stack
{
  constructor () //constructor 
  {
    this.top = null
  }

  push(ele) //Adds an element to the stack.
  {
	  var node=new newNode(ele)
	  node.next=this.top
	  this.top=node
  }

  pop() //Removes and returns the topmost element of the stack.
  {
	  var temp=this.top
	  var char=temp.data
	  this.top=this.top.next
	  temp=null
	  return char  
  }
  reverse_string(str)
  {
     var i = 0
     var reversestr = ""
     //Adds all the characters to the stack.
     while (i != str.length) 
     {
         top.push(str.charAt(i))
         i++
     }
     console.log("Stack Contains...")
     top.display()
     var temp=this.top
     //Creates a reversed string by popping the stack.
     while (temp!=null) 
     {
        var char
        char=top.pop()
        reversestr += char
        temp=this.top
     }
     console.log("Reverse String is...")
     console.log(reversestr)
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
top.reverse_string("JOHN WICK")

