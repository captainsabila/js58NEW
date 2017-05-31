/*Given an array with these elements in it:

var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];
Write a function that returns the largest element in an array.
Write a function that checks whether an element occurs in an array.
For example:

function inArray(array, element) { ... }

if(inArray(numberList, 3)) { console.log("It exists!") }
Write a function that returns the elements on odd positions in an array. 
For the list given above, it would print 5, 20, 90

Write a function that computes the running total of an array. (IE: What is the sum of all of the values in an array)

Write a function that tests whether a string is a palindrome. For example "racecar" would return true, but "cat" would not.

You can do all of these in 1 javascript file.
*/

//Write a function that returns the largest element in an array.
var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];
var largestNumber = function(array) {
	var m = 0
	for (i =0; i < array.length; i++) {
		if (array[i]> m){
		m = array[i]
		}
	}
	return m;
}
console.log(largestNumber(numberList));

//Write a function that checks whether an element occurs in an array.
function inArray(array, element) {
	for (i = 0; i <array.length;i++) {
		if(array[i] === element) {
			return true;
		}
	} return false;
}
if (inArray(numberList, 8)==true) {
console.log("It exists!"); 
} 
else {console.log("It does not exist")}

//Write a function that returns the elements on odd positions in an array. 
function oddElement(array) {
	var newArray = [];
	for (i = 1; i <array.length; i+=2) {
			newArray.push(array[i])
	} return newArray
}	

console.log(oddElement(numberList))
//Given an array with these elements in it:

//var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];
//Write a function that computes the running total of an array. 
//(IE: What is the sum of all of the values in an array)
function runningTotal(array) {
	var total = 0
	for (i = 0; i <array.length; i++){
		total += array[i]
	} return total
}
console.log(runningTotal(numberList))


//Write a function that tests whether a string is a palindrome. For example "racecar" would return true, but "cat" would not.

function palindrome(word) {
  var x = Math.floor(word.length / 2);
  for (var i = 0; i < x; i++)
    if (word[i] !== word[word.length - i - 1])
      return false;
  return true;
}

console.log(palindrome('racecar'))