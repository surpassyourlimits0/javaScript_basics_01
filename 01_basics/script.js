/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: { 'John Wick': '8.8' },
//     actors: {},
//     genres: [],
//     private: false
// };

// const a = prompt('Один из опследних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: { 'John Wick': '8.8' },
//     actors: {},
//     genres: [],
//     private: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из опследних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done!');
//     } else {
//         i--;
//         console.log('error!');
//     }

// }

// if (numberOfFilms < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
//     console.log("Вы классический зритель");
// } else if (numberOfFilms >= 30) {
//     console.log("Вы киноман!");
// } else {
//     console.log("Error");
// }

// console.log(personalMovieDB);

// function ret() {
//     let num = 40;


//     return num;
// }

// const another = ret();
// console.log(another);

// //FUNCTION EXPRESSION

// const EXPRESSION = function () {
//     console.log('oi');
// };

// EXPRESSION();

// //СТРЕЛОЧНЫЕ ФУНКЦИИ

// const arrow = (a, b) => a + b;

// Заполнение массива !!!
// Переварот массива!!!

// function secondTask() {

//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i <= data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done!`;
//         }
//     }
//     console.log(data.reverse());
//     return data;
// }
// secondTask();

// function secondTask() {

//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i];

//     }
//     console.log(data);
//     return data;
// }
// secondTask();

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j <= lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j <= i * 2; j++) {
//         result += "*";
//     }
//     result += '\n';
// }

// console.log(result);

// function createUrl(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }

// const itcall = createUrl('com');

// console.log(itcall('google'));
// console.log(itcall('amazon'));

// //Замыкание function

// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);

//     const person1 = { name: 'Unde', age: 22, job: 'Frontend' };
//     const person2 = { name: 'Kaid', age: 19, job: 'smm' };

//     bind(person1.logPerson);
//     bind(person2, logPerson);
// }

// let val = 7
// function createAdder() {
//     function addNumbers(a, b) {
//         let ret = a + b
//         return ret
//     }
//     return addNumbers
// }
// let adder = createAdder()
// let sum = adder(val, 8)
// console.log('example of function returning a function: ', sum)

// function createCounter() {
//     let counter = 0
//     const myFunction = function () {
//         counter = counter + 1
//         return counter
//     }
//     return myFunction
// }
// const increment = createCounter()
// const c1 = increment()
// const c2 = increment()
// const c3 = increment()
// console.log('example increment', c1, c2, c3)

// function makeWorker() {
//     let name = "Pete";

//     return function () {
//         alert(name);
//     };
// }

// let name = "John";

// // create a function
// let work = makeWorker();

// // call it
// work();

// let phrase = 'hello';

// function say(name) {
//     console.log(`${phrase}, ${name}`);
// }

// phrase = "Hi";

// say("John");


// function makeCounter() {
//     let count = 0;
//     alert("1");

//     return function () {
//         alert("2se");
//         return count++; // есть доступ к внешней переменной "count"
//     };
// }

// let counter = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1
// alert(counter()); // 2


//Замыкание!!!
// function makeCounter() {
//     let names;

//     return function () {
//         console.log(names);
//     };
// }
// let names = "te";
// let work = makeCounter();
// work();

// let phrase = "hello";

// if (true) {
//     let user = "Jphn";

//     console.log(`${phrase}, ${user}`);
// }
// alert(user("Jphn"));

//…Но, если есть вложенная функция, которая всё ещё
//доступна после выполнения f, то у неё есть свойство [[Environment]],
// которое ссылается на внешнее лексическое окружение, тем самым оставляя
//его достижимым, «живым»:

// g доступно и продолжает держать внешнее лексическое окружение в памяти

// function f() {
//     let value = 123;

//     function g() {
//         console.log(value);
//     }
//     return g;
// }

// let gf = f();
// gf();
//.
// function f() {
//     let value = Math.random();

//     return function () { alert(value); };
// }

// три функции в массиве, каждая из них ссылается на лексическое окружение
// из соответствующего вызова f()
// let arr = [f(), f(), f()];
// console.log(arr);
// /*********************************************** */

// function f() {
//     let value = 123;

//     function g() {
//         console.log(value);
//     }
//     return g;
// }

// let g = f();// пока g существует,
// соответствующее лексическое окружение существует


// g = null;// ...а теперь память очищается

//
// function Counter() {
//     let count = 0;

//     this.up = function () {
//         return ++count;
//     };
//     this.down = function () {
//         return --count;
//     };
// }

// let counter = new Counter();

// console.log(counter.up()); // ?
// console.log(counter.up()); // ?
// console.log(counter.down()); // ?

// function sum(a) {
//     return function (b) {
//         return a + b;
//     };
// }

// console.log(sum(1)(200));
// console.log(sum(5)(6));

// function makeArmy() {
//     let shooters = [];

//     let i = 0;
//     while (i < 10) {
//         let shooter = function () { // функция shooter
//             let j = i;
//             alert(j); // должна выводить порядковый номер
//         };
//         shooters.push(shooter);
//         i++;
//     }

//     return shooters;
// }

// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[5]();

// let func = x => x * x;
// console.log(func(98));

// let func2 = (x, y) => { return x + y; };
// console.log(func2(2, 2));