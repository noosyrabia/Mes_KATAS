// Dans ce kata, vous allez créer une fonction 
// qui prend une liste et renvoie une liste dans l'ordre inverse.

function reverseList(list) {
   const reverse = list.reverse();
   return( reverse)
}

console.log(reverseList([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseList(["pomme", "banane", "orange"])); 