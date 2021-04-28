function searchAlgorithm (number){
 
    for(let i = 0; i< number; i++){
    if(number == array[i]){
      console.log("Found it, it's at index " + i)
    }else{
      console.log("Not found")
    }
    
  };
  
}


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

searchAlgorithm(5)