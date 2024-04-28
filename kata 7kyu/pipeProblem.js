// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.

// Task
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
let newArray = []; 
let minNumber = Math.min(...numbers);
let maxNumber = Math.max(...numbers);
for(let i = minNumber ; i <= maxNumber; i++){
    newArray.push(i)
}
return newArray
}

console.log(pipeFix([1,3,5,6,7,8,9]));
console.log(pipeFix([6,9]));
console.log(pipeFix([1,9]));
console.log(pipeFix([-1,5]));


// Autres options:
// function pipeFix(numbers){
//     var first = numbers[0];
//     var last = numbers[numbers.length-1];
    
//     var arr = [];
//     for(var i = first; i <= last; i++) {
//       arr.push(i);
//     }
//     return arr;
//   }


// function getMaxOfArray(numbers) {
//     return Math.max.apply(null, numbers);
//   }
  
//   function getMinOfArray(numbers) {
//     return Math.min.apply(null, numbers);
//   }
  
//   function pipeFix(numbers){
//     var newArray = [];
//     var min = getMinOfArray(numbers);
//     var max = getMaxOfArray(numbers);
//     for (var i = min; i <= max; i++) {
//       newArray.push(i);
//     }
//     return newArray;
//   }

// slice is nice
// function pipeFix(num, arr = [] ){
//     for ( let i = num[0]; i <= num.slice(-1)[0]; i++){
//       arr.push(i)
//     }
//     return arr
//   }