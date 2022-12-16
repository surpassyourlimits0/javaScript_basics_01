// let rabbit = {};
// rabbit.run = function (n) {
//    console.log("Run " + n + " meters");
// };
// rabbit.run(60);
//?Методы - это функции, хранящиеся в виде свойств объекта.*/

//! Protatyp

const person = new Object ({
   name: 'Erlan',
   age: 22,
   future: 'Undefinde!'
});

Object.prototype.sayHello = function  (){
   console.log('FullStack');
   
};
person.sayHello();
