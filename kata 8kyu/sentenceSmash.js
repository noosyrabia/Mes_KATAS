// Write a function that takes an array of words and smashes them together 
// into a sentence and returns the sentence. You can ignore any need to 
// sanitize words or add punctuation, but you should add spaces between each word. Be careful, 
// there shouldn't be a space at the beginning or the end of the sentence!

// Écrivez une fonction qui prend un tableau de mots, les rassemble en une phrase et renvoie la phrase. 
// Vous pouvez ignorer tout besoin de nettoyer les mots ou d'ajouter de la ponctuation, 
// mais vous devez ajouter des espaces entre chaque mot.
//  Attention, il ne doit pas y avoir d'espace en début ou en fin de phrase !

function smashWords(words) {
  
    let phrase = words.join(" ")
   return  phrase
}

console.log(smashWords([ "aa","bb","cc","dd","ee" ]));


// autre réponse 
// Smash Words
// function smash (words) {
//     "use strict";
//     return words.join(' ');
// };

// smash = function (words) {
//     return words.join(" ");
//   };

// // Smash Words
// function smash (words) {
//     "use strict";
//     return words.join(" ").trim();    
// };


// Autre réponse
// const smash = words => {
    // "use strict";
    // let result = '';
    // if (words.length === 0) {
    //   return result;
    // }
    // for (let count = 0; count < words.length; count++) {
    //   if (words[count] === words[words.length-1]) {
    //     result += words[count];
    //     return result;
    //   }
    //   result += (words[count] + ' ');
    // }
//   };