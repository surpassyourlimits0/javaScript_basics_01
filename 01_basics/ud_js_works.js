// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }

//     console.log(result);
//     return result;
// }

// firstTask();

// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//     // Пишем решение вот тут
//     for (let i = 0; i <= data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }

//     }
//     console.log(data);

//     // Не трогаем
//     return data;
// }
// secondTask();
// function thirdTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);
//     return result;
// }

// thirdTask();


// function fourthTask(num) {
//     let j = 2;

//     while (j++ < num) {
//         if (j % 2 === 0) {
//             continue;
//         } else {
//             console.log(j);
//         }
//     }
//     return j;

// }
// fourthTask(16);


///////////**** */

// let result = '';
// const length = 7;

// for (let i = 1; i <= length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//         console.log('1');
//     }
//     result += '\n';
//     console.log('2');

// }
// console.log(result);

// const lines = 5;
// let result = '';
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j <= lines - i; j++) {
//         result += "0";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += '\n';
// }
// console.log(result);
// const line = 5;
// let result = '';

// for (let i = 0; i <= line; i++) {
//     for (let j = 0; j <= line - i; j++) {
//         result += "0";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += '\n';
// }
// console.log(result);

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j <= lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j <= 2 * i + 1; j++) {
        result += "*";
    }
    result += '\n';

}
console.log(result);



// var i = 0,
//   j = 0;
// Желаемое количество строк
// var max = 15;
// var space = "",
//   star = "";

// while (i < max) {
//   space = "";
//   star = "";
//   for (j = 0; j < max - i; j++) space += " ";
//   for (j = 0; j < 2 * i + 1; j++) star += "*";
//   console.log(space + star);
//   i++;
// }