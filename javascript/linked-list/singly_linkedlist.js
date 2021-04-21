/*
Name : Shubham Sapkal
Roll No. : 2012118

Output :
List Created...
1
2
3
After Insert...
10
1
30
2
3
40
After Delete...
10
1
30
2
40
After Reverse...
40
2
30
1
10
*/

class LinkedList
{
  constructor () 
  {
    this.list = null
  }

  create(ele)
  {
    if(!this.list)
    {
      this.list=new newNode(ele)
    }
    else
    {
      let temp=this.list
      while(temp.next!=null)//finding address of last node
        temp=temp.next
      temp.next=new newNode(ele)//appende newnode to list
    }
  }
  insert(ele, pos)
  {
    var node=new newNode(ele)
    if(pos==1)
    {
      node.next=this.list
      this.list=node
    }
    else
    {
      var temp=this.list
      var i=2
      while(i!=pos && temp.next!=null)//finding position
      {
        temp=temp.next
        i=i+1 
      }
      node.next=temp.next
      temp.next=node
    }
  }

  del(ele)
  {
    let temp=this.list
  	let prev=null
  	
  	while(temp.data!=ele && temp.next!=null)//finding node to be deleted
  	{
  		prev=temp
  		temp=temp.next
  	}
	if(temp.data==ele)
	{
		if(temp!=null)
		{
			if(prev!=null) //It's not first node
				prev.next=temp.next
		}
		else
				this.list=this.list.next //First node
		temp=null
	}
	else
		console.log("Element not present")
  }
  reverse()
  {
    var forward=this.list
    var curr=null
    var back=null
    while(forward)
    {
      back=curr
      curr=forward
      forward=forward.next
      curr.next=back
    }
    this.list=curr
  }

  display()
  {
    
      var temp=this.list
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

const list = new LinkedList()
list.create(1)
list.create(2)
list.create(3)
console.log("List Created...")
list.display()
list.insert(10,1)
list.insert(30,3)
list.insert(40,500)
console.log("After Insert...")
list.display()
console.log("After Delete...")
list.del(3)
list.display()
list.reverse()
console.log("After Reverse...")
list.display()
