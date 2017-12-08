// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];


document.getElementById("output").innerHTML = integers.sort((a,b) => b-a).filter((isLessThan20) => isLessThan20 < 20).map(x => x*1.5 -1).reduce((a,b) => a+b);

//look at filter method - this is another way to write these functions in a method with {} and return statement
// console.log((integers.sort((a,b) => b-a).filter(function(isLessThan20){return isLessThan20 < 20})));

//WORK I DID TO FIGURE OUT THE METHODS NEEDED
// console.log(integers.sort((a,b) => b-a).filter(function(isLessThan20){return isLessThan20 < 20}).map(x => x*1.5 -1))
    // function(x){return (x*1.5) - 1})


// integers.sort ((a, b) => {
//     return b-a;
// });

// console.log(integers);
// // integers.sort(function(a, b){
// //     return b < 19;
// // });

// function isSmallEnough(value) {
//     return value < 20;
// }

// let lessThan20 = integers.filter(isSmallEnough);
// console.log(lessThan20);

// for (let i=0; i < lessThan20.length; i++){
// console.log(lessThan20);
// }

// function math(input) {
//     for (let i=0; i < lessThan20.length; i++) {
//     let input = lessThan20[i];
//     return (input * 1.5) - 1;  
//     }   
// };

// console.log(math(lessThan20));