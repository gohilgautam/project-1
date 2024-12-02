// 1. Enter Electricity UNIT and Calculate amount to pay
// For first 50 units, Rs: 1/unit
// For next 100 units, 2/unit
// For next 100 units, 3/ units
// For units above 250, 4/units
// For all bills above 150 units an additional surcharge of 20% of total bill amount is added

// let unit, bill;
// unit = +prompt("Please Enter Your Unit")

// if(unit <= 50){
//     bill = unit * 1
// }
//     else if(unit <= 150){
//     bill = 50 * 1 + (unit - 50) * 2
//     }
//     else if(unit <= 250){
//     bill = 50 * 1 + 100 * 2 + (unit - 150) * 3
//     }
//     else {
//     bill = 50 * 1 + 100 * 2 + 100 * 3 + (unit - 250) * 4;
// }
//     if (unit > 150) {
//     bill += bill * 0.20;
// }
// console.log("Total electricity consuption is ₹", bill)
    
/*
output
 please enter your unit :- 300
 your electricity bill is :- 900.00

*/

// ----------------------------------------------------------------------------------------------------------------------------------------------

// 2. Write a JAVASCRIPT Program to print season according user input using switch case. (eg. 1 to 4 for "Winter", 5 to 8 for "Summer", 9 to 12 "Monsoon" then add any number print "Invalid season" etc.)

// let season = +prompt("Please Enter Your Season Number(1-12):  ");

// switch (season) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//             console.log("Winter");
//             break;
//         case 5:
//         case 6:
//         case 7:
//         case 8:
//             console.log("Summer");
//             break;
//         case 9:
//         case 10:
//         case 11:
//         case 12:
//             console.log("Monsoon");
//             break;
//     default:console.log("Invalid Season");
//     }
 

// ----------------------------------------------------------------------------------------------------------------------------------------------


// 3. Write a JAVASCRIPT Program to find rate based on year and calculate total interest using nested if (IPRN/100) Principal Amount (P) Interest Rate No. of Years (N) (if 3<N-5 then R is 3 | if 5<N-8 then R is 5 | if 8<N<=12 then R is 12 else R is 15)


// let amount, years;

//         amount = +prompt("enter amount",amount);
//         years = +prompt("enter year",years);
//         let Rate;

//         if (years > 3 && years <= 5){
//             Rate = 3;
//         } 
//         else if (years > 5 && years <= 8){
//             Rate = 5;
//         } 
//         else if (years > 8 && years <= 12){
//             Rate = 12;
//         } 
//         else{
//             Rate = 15;
//         }

//         let interest = (amount * Rate * years) / 100;

//         console.log("Principal: " + amount);
//         console.log("Rate: " + Rate + "%");
//         console.log("Years: " + years);
//         console.log("Total Interest: " + interest);


// ----------------------------------------------------------------------------------------------------------------------------------------------


// 4. Write a JAVASCRIPT Program to check Voting Eligibility

// let age = +prompt("please enter your age between 1-100");

// if (age >= 18) {
//     console.log("You are eligible to vote");
//     } 
//     else{
//         console.log("You are not eligible to vote")
//     }
    

// ----------------------------------------------------------------------------------------------------------------------------------------------


// 5. Write a JAVASCRIPT Program to Classify Age Groups

// let age = +prompt("please enter your age between 1-100");
// if (age < 0) {
//     console.log("Invalid age")
// }
// else if (age <= 12) {
//     console.log("Child")
// }
// else if (age <= 18) {
//     console.log("Teenager")
// }
// else if (age <= 35) {
//     console.log("Adult")
// }
// else if (age <= 60) {
//     console.log("Middle Aged")
// }
// else{
//     console.log("Senior Citizen")
// }