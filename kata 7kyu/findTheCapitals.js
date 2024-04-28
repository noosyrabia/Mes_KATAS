// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]
 
function capitals(word) {
	if(word === 0){
        return "la chaine est vide"
    }
    let indices =[];

    for(let i = 0; i < word.length; i++){
        if(word[i] >= 'A' && word[i] <= 'Z'){
            indices.push(i);
        }
    }
    return indices;
};
console.log(capitals('AzIRaMLkoiurtT'));


// var capitals = function (word) {
// 	// Write your code here
//   let indices= []; 
//   for(let i = 0; i < word.length; i++){
//       if(word[i] >= 'A' && word[i] <= 'Z'){
//         indices.push(i)
//       }
//   }
//   return indices
// };

// ************************************************
// Autres solution 
var capitals = function (word) {
    var caps = [];
      for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  };



//   Autre
// const capitals = word => { return word.match(/[A-Z]/g).map( x => { return word.indexOf(x) }) }

// // Autre
// var capitals = function (word) {
//     return word.split('').reduce(function(result, c, i) {
//       if (c.toUpperCase() === c) result.push(i);
//       return result;
//     }, []);
//   };