// let rabbit = {};
// rabbit.run = function (n) {
//    console.log("Run " + n + " meters");
// };
// rabbit.run(60);
//?Методы - это функции, хранящиеся в виде свойств объекта.*/

//! Protatyp

// const person = new Object ({
//    name: 'Erlan',
//    age: 22,
//    future: function () {
//       console.log('Future ');
      
//    }
// });

// Object.prototype.sayHello = function  (){
//    console.log('FullStack');
// };
// person.sayHello();

// const lena = Object.create(person);

// //*? const arr = [1,2,3,4,5,6,7];

// arr.push(12);
// arr.pop();
// console.log(arr);

//! THIS

// !function hello() {
//    console.log('Hello', this);  
// }

// const person = {
//    name: 'Erlan',
//    age: 22,
//    sayHello: hello,
//    sayHelloWindow: hello.bind(this),
//    logInfo: function (job, phone) {
//       console.group(`${this.name} info:`);
//       console.log(`Name is ${this.name}`);
//       console.log(`Age is ${this.age}`);
//       console.log(`job is : ${job}`);
//       console.log(`job is : ${phone}`);
//       console.groupEnd();
      
      
//    }
// };
// person.logInfo();

// const erl = {
//    name: 'Erlan',
//    surneme: 'Paz',
//    age: 23
// }; 
// Object.defineProperty(erl, "name", {
//    writable: false
// });

// // const AllLogInfo = person.logInfo.bind(lena, 'Frontend', '+996504482021')();

// let descriptor = Object.getOwnPropertyDescriptors(lena, 'name');

// console.log(JSON.stringify(descriptor,null,2));

let erl = {
   name: 'Erlan',
   surneme: 'Paz',
   age: 23,
   get fullName() {
   return `${this.name} ${this.surneme}`;
   }

};
console.log(erl.fullName);

