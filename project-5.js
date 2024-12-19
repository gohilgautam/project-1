// 1. write a simple javascript program to print expected output using the following array

// let array = ["Red", "Green", "White", "Black"]
// 1)
// console.log(myColor.join(", "));

// // 2)
// console.log("Red + Green + White + Black");

// // 3)
// console.log(myColor.slice(0, 3).join(", "));

// // 4) 
// console.log(myColor[0]);

// // 5)
// console.log(myColor.slice(1, 3).join(", "));

// // 6)
// myColor.push("orange");
// console.log(myColor.join(", "));

// ----------------------------------------------------------------------------------------------------

// 2.Write a JavaScript program to get the sum of all array elements using for loop and foreach loop.

// let data = [11, 22, 33, 44, 55]
// let sum = 0;
// for (let i = 0; i < data.length; i++) {
//     sum += data[i];
// }
// console.log("Sum using for loop:", sum);

// let sumeach = 0;
// data.forEach(function(ele, index) {
//     sumeach += ele;
// });
// console.log("Sum using forEach loop:", sumeach);

//output :- Sum using for loop: 165
//          Sum using forEach loop: 165   

// ----------------------------------------------------------------------------------------------------

// 3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)

// let data = [11, 22, 33, 44, 55];

// let max = Math.max(11, 22, 33, 44, 55)
// console.log("Maximum value:", max);

// let min = Math.min(11, 22, 33, 44, 55)
// console.log("Minimum value:", min);

//output :- Maximum value: 55
//          Minimum value: 11
// ----------------------------------------------------------------------------------------------------

//5. write a javascript program to negative value using the filter array function

// let numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20]

// let pn = numbers.filter((ele, index) =>{
//     return ele > 0
// })

// console.log(pn)

// output :- [1, 5, 12, 19, 20]

// -----------------------------------------------------------------------------------------------------

//6. write a javascript program using array map() method and return the square of the array element.

// let arr = [2, 5, 6, 3, 8, 9]

// let square = arr.map((ele, index) => {
//         return ele * ele
//     })
// console.log(square);

//output :- [4, 25, 36, 9, 64, 81]

// -----------------------------------------------------------------------------------------------------

//7.Write a JavaScript program for sorting an array in ascending descending.

// let numbers = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];

// let ascending = numbers.sort((a, b) => a - b);
// console.log("Ascending Order:", ascending);

// let descending = numbers.sort((a, b) => b - a);
// console.log("Descending Order:", descending);

// -----------------------------------------------------------------------------------------------------

//8. Write a JavaScript program which filters out any string which is less than 8 characters.

// let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
// let Word = words.filter(word => word.length < 8);
// console.log(Word);

//output :- ['Python', 'Go', 'Java', 'PHP', 'Ruby']

// -----------------------------------------------------------------------------------------------------

// 9.write a JavaScript program to print expected output for the following string.
// x="airplane"; output:-r
// x = "oxoxoxox"; output:- "oXоХохох"
// x="A New Java Book";
// output:- "a new java book", "A NEW JAVA BOOK"

// 1)
// let x = "airplane";
// console.log(x[2]);
//output :- r

// 2)
// let y = "oxoxoxox";

// 3)

// let words="A New Java Book";
// console.log(words.toLowerCase());
// console.log(words.toUpperCase());

//output :- a new java book, A NEW JAVA BOOK

// -----------------------------------------------------------------------------------------------------

// 10. write a JavaScript program for array reverse.

// let numbers = [23, 20, 17, 12, 5]


// 14. . write a JavaScript program convert string to array.

// let a = "Hire the top 1% freelance developers";

// let b = a.split(" ");
// console.log(b);
// Output:- ["Hire", "the", "top", "1%"]

// -----------------------------------------------------------------------------------------------------

// 11. write a JavaScript program to check if a value is found or not?

// let fruits = ["apple", "banana", "cherry"];
// console.log(fruits.includes("banana")+`, This is find`);
//  // Output :- true 'This is found in the array.'
// console.log(fruits.includes("orange")+`, This is not find`);
//  // Output :- false 'This is not found in the array.'

// -----------------------------------------------------------------------------------------------------------------------


// 12. write a JavaScript program to print your name and write the number of total characters.

// let Name = prompt("Enter Your Name :-");
// console.log("The Total Number of Character is :-",Name.length); 

// Output :- The Total Number of Character is :- 3

// -----------------------------------------------------------------------------------------------------------------------


// 13. write a JavaScript program given this output using replace concept.
// Input: "I often take a walk with my dog in the evening. 
// His dog follows him everywhere. I don't feed my dog in the morning";


// let str = `I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning`;
// console.log("String Before Replace :-",str);
// let newStr = str.replace(/dog/g, "cat");
// console.log("String After Replace :-",newStr); 

// Output: "I often take a walk with my cat in the evening. 
// His cat follows him everywhere. I don't feed my cat in the morning"

// -----------------------------------------------------------------------------------------------------------------------

// 14. write a JavaScript program convert string to array.
// Input :- "Hire the top 1% freelance developers";

// let string = "Hire the top 1% freelance developers";
// let stringToArray = string.split(" "); 

// console.log("Array : ", stringToArray);
// Output:- Array : ["Hire", "the", "top", "1%", "freelance", "developers"]

// -----------------------------------------------------------------------------------------------------------------------


// 15. write a JavaScript program to convert an array to string.
// Input:- ['5', 32, 'Daniel'];

// let Arr = ['5', 32, 'Daniel'];
// let arrayToString =  Arr.join(", ");
// console.log(arrayToString)
// Output: 5,32, Daniel