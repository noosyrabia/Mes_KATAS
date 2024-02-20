// DESCRIPTION:
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59
// FUNDAMENTALS

//   1h = 3600000 ms
//1min = 60000
// 1s= 1000

function past(h, m, s){
    //#Happy Coding! ^_^
    return h*3600000 + m*60000 + s*1000
    
  }

  console.log(past(0, 2, 5));
  console.log(past(23, 59, 59));


//   Un autre solution 
// function past(h, m, s){
//     var hours = h * 60 * 60 * 1000;
//     var minutes = m * 60 * 1000;
//     var seconds = s * 1000;
    
//     return hours + minutes + seconds;
//   }


// Un autre solution
// function past(h, m, s){
//     const setTime = new Date().setHours(h, m, s);
//     const midnight = new Date().setHours(0, 0, 0);
    
//     return Math.round(setTime - midnight);
//   }