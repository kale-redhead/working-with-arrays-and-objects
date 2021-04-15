/*
  Once you complete a problem, refresh ./destructuring.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

const color = carDetails.color;
const make = carDetails.make;
const model = carDetails.model;
const year = carDetails.year;


////////// PROBLEM 2 //////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting( obj ) {
  const firstName = obj.firstName;
  const lastName = obj.lastName;
  const title = obj.title;
  
  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}



////////// PROBLEM 3 //////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

function totalPopulation( obj ){
   const pop1 = obj.utah;
   const pop2 = obj.california;
   const pop3 = obj.texas;
   const pop4 = obj.arizona;

   return pop1 + pop2 + pop3 + pop4;
}



////////// PROBLEM 4 //////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

function ingredients( obj ){
  const c = obj.carb;
  const f = obj.fat;
  const p = obj.protein;

  const array = [];

  array.push(c);
  array.push(f);
  array.push(p);

  return array;
}



////////// PROBLEM 5 //////////

/*
  Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration.
  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }

  Write a function called largeNumbers that will take a destructured object as it's parameter.
  The object properties will be named first, second, and third and their values will be numbers.
  Find the smallest number of the three and return that number.
*/

function largeNumbers({first, second, third}){
  if(first < second && first < third){
    return first;
  }
  else if(second < first && second < third){
    return second;
  }
  else if(third < second && first > third){
    return third;
  }
}



////////// PROBLEM 6 //////////

/*
  Write a function called numberGroups that will take a destructured object as it's parameter.
  The object properties will be named a, b, and c and their values will be arrays of numbers.
  Find the longest array and return that array.
*/

function numberGroups( {a, b , c} ){
  if(a.length > b.length && a.length > c.length){
    return a;
  }
  else if(a.length < b.length && b.length > c.length){
    return b;
  }
  else if(c.length > b.length && a.length < c.length){
    return c;
  }
}


