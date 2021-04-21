/*
Name : Shubham Sapkal
Roll No. : 2012118

Output :
display Left Tree :
data: 54
data: 30
data: 5
  
display Right Tree :
data: 54
data: 78
data: 99
*/
class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert = (data) => {
    const newNode = new Node(data, null, null);
    //check if root node is null
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    //traverse this list and insert at appropriate location
    let tmpRoot = this.root;
    let prevRoot;
    let atLeft = false;

    while (tmpRoot !== null) {
      prevRoot = tmpRoot;
      if (data < tmpRoot.data) {
        tmpRoot = tmpRoot.left;
        atLeft = true;
      } else {
        tmpRoot = tmpRoot.right;
        atLeft = false;
      }
    }
    //check and add
    if (atLeft) prevRoot.left = newNode;
    else prevRoot.right = newNode;
  };

  // display Tree Left
  displayTreeLeft = () => {
    let tmpRoot = this.root;
    while (tmpRoot !== null) {
      console.log(`data: ${tmpRoot.data}`);
      tmpRoot = tmpRoot.left;
    }
  };
  // display Tree Right
  displayTreeRight = () => {
    let tmpRoot = this.root;
    while (tmpRoot !== null) {
      console.log(`data: ${tmpRoot.data}`);
      tmpRoot = tmpRoot.right;
    }
  };
}

//main entry point : insert values
const main = () => {
  let bts = new BST();
  bts.insert(54);
  bts.insert(30);
  bts.insert(78);
  bts.insert(99);
  bts.insert(5); 
  
  console.log("  ");
  // display Tree Left
  console.log("display Left Tree :");
  bts.displayTreeLeft();
  console.log("  ");
  // display Tree Right
  console.log("display Right Tree :");
  bts.displayTreeRight();
};

main();
