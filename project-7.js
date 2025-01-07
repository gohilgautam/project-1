// 1. create a school and create a student and feculty method.The student method gives the student name,email and contact number as arguments and print all detail the same as faculty using class & object.

// class School {
//     constructor(name, location) {
//       this.name = name;
//       this.location = location;
//     }
  
//     student(name, email, contactNumber) {
//         this.name = name;
//         this.email = email;
//         this.contactNumber = contactNumber;
//     }
  
//     faculty() {
//       console.log(`student Name: ${this.name}`);
//       console.log(`student Email: ${this.email}`);
//       console.log(`student Contact Number: ${this.contactNumber}`);
//     }
// }

// let school = new School("ABC School", "New York");
// school.student("Gohil Gautam", "gohilgautam2405@gmail.com", "8799125274");
// school.faculty();

/*
    Student Name: Gohil Gautam
    Student Email: gohilgautam2405@gmail.com
    Student Contact Number: 8799125274
    
*/

// 2. Create a Person class with an argument name and age. create an Employee class through print out details of Person Class.

// class person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     hello() {
       
//     }
// }
// class employee extends person {
//     hello() {
//         console.log(`MY Name is ${this.name} MY Age is ${this.age}`);
//     }
// }
// const detail = new employee("Gautam", "22");

// detail.hello();


/*
MY Name is Gautam MY Age is 22.
*/

// 3. Employee class creates a constructor called print a simple message

// class employee{
//     constructor(name,age,department){
//         this.name = name;
//         this.age = age;
//         this.department = department;
//     }
//     printmessage(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age}
//             years old and I am working in ${this.department} department`);
//             }
// }

// let emp = new employee("Gautam", 22, "IT");
// emp.printmessage();

/*
Hello, my name is Mayur and I am 25 years old and I am working in IT department
*/


// 4. Create a shape class and create a rectangle and circle method find circle area(3.14*r*r) and rectangle area (width height) using with argument.

// class shape  {
//     rectangleArea(w, h) {
//         return w * h;
//     }
//     circleArea(r) {
//         return 3.14 * r * r;
//     }
// }
// const value = new shape ();
// console.log("Rectangle Area is :", value.rectangleArea(70 , 23));
// console.log("Circle Area is :", value.circleArea(23));


/*
output :-
        Rectangle Area is : 1610
        Circle Area is : 1661.06

*/