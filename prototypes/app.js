// class Person {
//     name = "Aryeh";

//     constructor() {
//       this.age = 5;
//         }
    
//     greet() {
//         console.log('Hello, my name is ' +  this.name + ' and my age is ' + this.age)
//     }
// }

//constructor function, can use with new to instantiate an object instead of a class
function Person() {
    this.age= 30;
    this.name= 'Aryeh';
    this.greet= function() {
        console.log ('Hello, my name is ' +  this.name + ' and my age is ' + this.age);
    };
} 

const person = new Person ();
person.greet();