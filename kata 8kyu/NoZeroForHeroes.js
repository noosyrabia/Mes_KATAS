DESCRIPTION:
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// function noBoringZeros(n) {
//     // your code
//     const numberToString = n.toString();
 
//     for (let i = numberToString.length-1   ; i >= 0  ; i --){
//         if (numberToString[i] !== '0') {
//             return parseInt(numberToString.slice(0, i+1));
//         }}}

// console.log(noBoringZeros(4500));

// Un autre solution 
 


// const number = 4500; 
// const numbertoString = number.toString()
// const regex = /0+$/
// console.log(numbertoString.replace(regex, ''))
// const convert = parseInt(numbertoString.replace(regex, ''));
// console.log(convert);
  
// function noBoringZeros(n){
//     const numberToString = n.toString();
//     const regex = /0+$/
//     return parseInt(numberToString.replace(regex, ''));

// }

// console.log(noBoringZeros(4500));


// explication de mon code : 
function noBoringZeros(n) {
    // Convertir le nombre en une chaîne de caractères
    const numberToString = n.toString();
    
    // Définir une expression régulière pour les zéros en fin de chaîne
    const regex = /0+$/;
    
    // Remplacer les zéros en fin de chaîne par une chaîne vide,
    // puis convertir la chaîne résultante en un nombre entier
    if(n === 0){return 0}
    else {
        return parseInt(numberToString.replace(regex, ''));}

  
}

// Exemple d'utilisation
console.log(noBoringZeros(4500));  // Résultat: 45


// un autre solution :
// function noBoringZeros(n) {
//     while(n%10==0 && n!=0){n/=10;}
//     return n;
//   }


// un autre solution : 
// function noBoringZeros(n) {
//     while (n % 10 === 0 && n !== 0) {
//       n = n / 10
//     }
//     return n
//   }