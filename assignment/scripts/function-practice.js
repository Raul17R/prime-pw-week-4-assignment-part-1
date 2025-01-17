console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(names) {
  
  return('Hello, '); 
}
// Remember to call the function to test
console.log(helloName('Nancy'));

// 3. Function to add two numbers together & return the result
let result = addNumbers(5, 5)
function addNumbers( firstNumber, secondNumber ) {
    return firstNumber + secondNumber;
}
console.log('The Result is ', result);


// 4. Function to multiply three numbers & return the result
let total = multiplyThree(3, 1, 7)
function multiplyThree( a, b, c){
  return a * b * c;
}
console.log('The resulf of this multiplication is: ', total);


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    
    return 'True';
  }else if (number <=0){
    return 'False';
  }
  
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
console.log('This is not false, is ', isPositive (8));
console.log('This is not true, is ', isPositive(0));
console.log('This is not true, is ', isPositive(-10));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let array = [2,3,5,6,7]
function lastItem(array) {
    let lastNumber = array[array.length - 1];
    if (lastNumber >=0) {
      return 'This is the als number ', lastNumber;
    }else{
      return 'Undefined';
    }
   }
   console.log(lastItem(array));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let grades = [2,7,8,9,1,1234];
 //value = false;

//flag = false;
function find( value){
  flag = false;
  for (let index = 0; index < grades.length; index++) {
    if(value === grades[index]){
      flag = true;
      return flag;
    }
  }
  return flag;
}

console.log(find(1234));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
