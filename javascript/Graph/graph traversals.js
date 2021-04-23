/*
Name : Shubham Sapkal
Roll No. 2012118

Q. Write a program to implement graph traversals
Output :

A->B D 
B->A C 
C->B D 
D->C A 


Breadth First Traversal
A
B
D
C
Depth First Traversal
A
B
C
D

*/

class Graph{
  constructor(noOfVertices)
  {
    this.noOfVertices = noOfVertices;
    this.adjList = new Map();
  }
  
  addVertex(v)
  {
    this.adjList.set(v,[]);
  }
  
  addEdge(v, w)
  {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v); // doing for undirected Graph
  }
  
  
  printGraph()
  {
    let keys = this.adjList.keys();
    for(let v of keys)
    {
      let eList = this.adjList.get(v);
      let data = '';
      for(let e in eList)
      {
        data = data + eList[e] + ' ';
      }
      console.log(v + '->' + data);
    }
  }
  
  bfs(v)
  { //breadth first traversal 
    let q = [];
    q.push(v);
    let visited = [];
    let keys = this.adjList.keys();
    for(let v of keys)
    {
      visited[v] = false;
    }
    
    while(q.length > 0)
    {
      let element = q.shift();
      visited[element] = true;
      console.log(element);
      let eList = this.adjList.get(element);
      for(let eData in eList)
      {
        let e = eList[eData];
        if(! visited[e])
        {
          q.push(e);
          visited[e] = true;
        }
      }
    }
    
  }
  
  dfs(v)
  { // depth first traversal
    
    let visited = []; // let visited = new Array();
    let keys = this.adjList.keys();
    for(let v of keys)
    {
      visited[v] = false;
    }
    
    this.dfsRecu(v, visited);
  }
  
  dfsRecu(v, visited)
  {
    let eList = this.adjList.get(v);
    visited[v] = true;
    console.log(v);
    for(let eData in eList)
    {
      let e = eList[eData];
      if(!visited[e])
      {
        visited[e] = true;
        this.dfsRecu(e, visited);
      }
    }
  }
  
  
}


var g = new Graph(4);

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');

g.addEdge('A', 'B');
g.addEdge('B','C');
g.addEdge('C','D');
g.addEdge('D','A');

g.printGraph();
console.log('\n');
console.log('Breadth First Traversal');
g.bfs('A');

console.log('Depth First Traversal');
g.dfs('A');
