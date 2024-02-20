// Isograms
// DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
    //...
    if(str === undefined || str === null){
          return false
      }
    
    let letters = str.toLowerCase().split(""); 
    for(let i = 0; i < letters.length-1; i ++ ){
      for(let j = i+1 ; j < letters.length; j++ ){
        if(letters[i] ===  letters[j]){
          return false
        }
      }
    }
      return true
      }
  

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('moose'));
console.log(isIsogram('aba'));
console.log(isIsogram('AAB'));
console.log(isIsogram('Hello World'));
console.log(isIsogram('abelaya'));
console.log(isIsogram(''));
console.log(isIsogram(null));
console.log(isIsogram('0'));

// un autre soltution  
// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size == str.length;
// }

// un autre solution 
// function isIsogram(str){
//     return !str.match(/([a-z]).*\1/i);
//   }