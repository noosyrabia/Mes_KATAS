// DESCRIPTION:

// Count of positives / sum of negatives
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// My final solution  
function countPositivesSumNegatives(input) {
    // your code here
    if( !input || input.length === 0){
      return []
    }
  
    let positive = 0; 
    let negative = 0; 
    
    for(let i = 0 ; i < input.length ; i++){
      
      if(input[i] > 0){ 
        positive = positive + 1
                      }
      else if(input[i] <= 0 ){
        negative = negative + input[i]
      } 
  
      
    }
    return [positive , negative]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([-1, -2, -3, -4, -5])); 
console.log(countPositivesSumNegatives([])); 
console.log(countPositivesSumNegatives([0, 0]));




// Un autre solution 
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

// // Exemples d'utilisation
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); 
// // Résultat attendu: [10, -65]

// console.log(countPositivesSumNegatives([-1, -2, -3, -4, -5])); 
// // Résultat attendu: [0, -15]

// console.log(countPositivesSumNegatives([])); 
// // Résultat attendu: []
// console.log(countPositivesSumNegatives([0, 0]));

// Un autre solution  
// function countPositivesSumNegatives(input) {
//     var newArr = [];
//     var positiveNumber = 0;
//     var negativeNumber = 0;
    
    // Validate Input
    // if (input === null || input.length === 0)
    //   return newArr;
    
    // // Loop through array of Numbers 
    // for (var i = 0; i < input.length; i++) {
    //   if (input[i] == 0)
    //    continue;
    
    //   // Count positives
    //   else if (input[i] > 0) 
    //     positiveNumber++;     
          
    //   // Sum negatives
    //   else if (input[i] < 0) 
    //     negativeNumber += input[i];
      
    // }
    
    // // Prepare Output
    // newArr.push(positiveNumber);
    // newArr.push(negativeNumber);
    
    // return newArr