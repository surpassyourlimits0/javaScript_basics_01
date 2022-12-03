

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }

// while (num <= 55);

// for (let i = 0; i < 8; i++) {
//     if (i === 5) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }
// let i = 0;
// do {
//     alert(i);
//     i++;
// } while (i < 3);

// for ('Начало; условие; шаг') {
//... тело цикла ...
// }
// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }
//В целом, алгоритм работы цикла выглядит следующим образом:

// Выполнить начало
// → (Если условие == true → Выполнить тело, Выполнить шаг)
// → (Если условие == true → Выполнить тело, Выполнить шаг)
// → (Если условие == true → Выполнить тело, Выполнить шаг)
// → ...
/**8888888888888888888888888888888888888888 */
//№1

// let i = 0;
// for (; i < 3; i++) {
//     alert(i);
// }

//№2

// let i = 0;
// for (; i < 3;) {
//     console.log(i++);
// }
//888888888888888888888888888888888888888888888
// let i = 0;
// for (; ;) {
//     //infinity
//     console.log(i++);
//     if (i === 888) {
//         break;
//     }
// }

// let sum = 0;

// while (true) {
//     let value = +prompt('Введите число', '');

//     if (!value) { break; }

//     sum += value;
// }

// alert('Сумма:' + sum);

// for (let i = 0; i < 20; i++) {
//     if (i % 2) {
//         alert(i);
//     }
// }0
// let i = 6;

// if/*(?)*/ (i > 5) {
//     alert(i);
// } else {
//     continue;
// }

// outer: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         let input = prompt(`Значение на координатах (${i},${j})`, '');
//         if (!input) { continue outer; }
//         console.log(i, j);
//     }
// }
// alert('Готово!');

// let i = 0;
// while (i++ < 5) {
//     alert(i);
// }

// for (let i = 0; i < 12; i++) {
//     if (i % 2) { continue; }
//     alert(i);
// }

// let i = 0;

// while (i < 3) {
//     alert(`Number ${i++}!`);
// }

// for (let x = 0; x < 99;) {
//     let input = prompt(`${x}`, '');
//     if (x > 99) {
//         break;
//     }
//     else if (!input) {
//         break;
//     }
// }

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//This my code
// for (let y = 0; ;) {
//     let inp = +prompt(`Больше сто!`, '0');
//     if (inp > 100) {
//         break;
//     }
//     else if (!inp) {
//         break;
//     }
// }

//This prof code
// let num;

// do {
//     num = prompt("Ввведите число больше 100!", 0);
// } while (num <= 100 && num);
// let n = 100;
// for (let i = 2; i <= n; i++) {
//     for (let j = 2; j <= i; j++) {
//         if ((i % j == 0) && (j != i)) {
//             break;
//         } else {
//             console.log(i);
//             break;
//         }
//     }
// }

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//     for (let j = 2; j < i; j++) { // проверить, делится ли число..
//         if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//     }

//     alert(i); // простое число
// }