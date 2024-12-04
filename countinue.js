//1. print out 10 to 1

// for(let i=10; i>=1; i--){
//     console.log(i);
// }

// ----------------------------------------------------

//2. print out 50 to 79

// for(let i=50; i<=79; i++){
//     console.log(i);
// }

// ----------------------------------------------------

//3. enter n and print 1 to n

// let n = +prompt("Enter a number: ");

// for(let i=1; i<=n; i++){
//     console.log(i);
// }

// ----------------------------------------------------

//4. enter n and print -n to 1

// let n = +prompt("enter your number");

// for(let i=-n; i<=1; i++){
//     console.log(i);
// }

// ----------------------------------------------------

//5. enter n and print -n to n

// let n = +prompt("enter your number");

// for(let i=-n; i<=n; i++){
//     console.log(i);
// }

// ----------------------------------------------------

//6. enter n and print out odd number upto n

// let n = +prompt("enter your number");

// for(let i=1; i<=n; i+=2){
//     console.log(i);
// }

// ----------------------------------------------------

//7. enter n and print out even number upto n

// let n = +prompt("enter your number");

// for(let i=2; i<=n; i+=2){
//     console.log(i);
// }

// ----------------------------------------------------

//8. series print out 1, 4, 3, 16, 5,......

// let n = +prompt("Enter a Number :");
// let x = 0; y = 1;
// let z;

//Method : 1
// for(let i = 0; i <= e; i++){
//     console.log(x);

//     z = x + y;
//     x = y;
//     y = z;
// }


//Method : 2
// for(let i = 1; i <= e; i++){
//     if(i == 1){
//         console.log(x);
//     }else if(i == 2){
//         console.log(y);
//     }else{
//         z = x + y;
//         x = y;
//         y = z;
//         console.log(z);
//     }
// }

// ----------------------------------------------------

// 10. series print out 1, 4, 12, 32, ......

// let a=1,  i;
// let n = +prompt("enter your number");
// for (i=1; i<=n; i++){
//     console.log(a*i);
//     a*=2;
// }

// ----------------------------------------------------

// 11. find out factorial of given number

// let n = +prompt("enter your number");
// let num = 1;
// for (let i = 1; i <= n; i++) {
//     num *= i;
//     console.log(num);
//     }

// ----------------------------------------------------

// 12. enter n and print out tota; number's sum

// let n = +prompt("enter your number");
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum += i;
//     console.log(sum);
// }

// ----------------------------------------------------

// 13. enter n and print out even number's sum

// let n = +prompt("enter your number");
// let sum = 0;

// for (let i = 1; i <= n; i+=2) {
//     sum += i;
//     console.log(sum);
// }

// ----------------------------------------------------

// 14. enter n and print out odd number's sum

// let n = +prompt("enter your number");
// let sum = 0;

// for(let i=2; i<=n; i+=2){
//     sum += i;
//     console.log(sum);
// }

// ----------------------------------------------------

// 15. enter n and print out sum of digit of number

let n = +prompt("enter your number");
let sum = 0;
let num = n;

for(let i=1; i<=num; i++){
    sum += num % 10;
    console.log(sum);
    }