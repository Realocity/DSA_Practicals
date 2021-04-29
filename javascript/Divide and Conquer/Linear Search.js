/*
Name : Shubham Sapkal
Roll No. : 2012118

Output :
Found: 38 in 7 steps
Found: 42 in 9 steps
*/
const unsortedArr = [ 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 45, 39, 23, 2];

const sortedArr = [16, 17, 18, 19, 20, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];



const linear = (arr, target) => {
  let steps = 0;

  for (let i = 0; i < arr.length; i++) {
    steps++;
    if (arr[i] === target) return `Found: ${arr[i]} in ${steps} steps`;
  };
};

console.log(linear(unsortedArr, 38)); // 38 value in 7th Position
console.log(linear(sortedArr, 42)); // 42 value in 9th Position
 
