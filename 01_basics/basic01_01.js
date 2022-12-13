//numsbers
// let billion = 1e11;

// console.log(billion);

// let ms = 0.000001; //long ver

// let mse = 1e-6; // шесть нулей, слева от 1

// // Work 

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: { 'John Wick': '8.8' },
//     actors: {},
//     genres: [],
//     private: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из опследних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done!');
//         } else {
//             i--;
//             console.log('error!');
//         }

//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (numberOfFilms < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
//         console.log("Вы классический зритель");
//     } else if (numberOfFilms >= 30) {
//         console.log("Вы киноман!");
//     } else {
//         console.log("Error");
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.private);

// function writeYourGeneres() {
//     for (let i = 1; i <= 3; i++) {

//         personalMovieDB.genres[i - 1] = prompt(`your faavorite in num:${i}`);

//     }
// }
// writeYourGeneres();

// // Problem!

// function calculateVolumeAndArea(cub) {
//    if (typeof (cub) !== 'number' || cub < 0 || !Number.isInteger(cub)) {
//       return "error";
//    }
//    let volume = 0,
//       area = 0;

//    volume = cub * cub * cub;
//    area = 6 * (cub * cub);

//    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;

// }
// calculateVolumeAndArea(5);
// console.log(calculateVolumeAndArea(5));


// function trine(seatNum) {
//     if (typeof (seatNum) !== 'number' || seatNum < 0 || !Number.isInteger(seatNum)) {
//         return "При вычислении произошла ошибка";
//     } else if (seatNum === 0 || seatNum > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     return Math.ceil(seatNum / 4);

// }
// trine();
// console.log(trine(30));

//JavaScript clock!!!!!!!!!!

// function getTimeFromMinutes(timesTamp) {
//     if (typeof (timesTamp) !== 'number' || timesTamp < 0 || !Number.isInteger(timesTamp)) {
//         return "Ошибка, проверьте данные";
//     }

//     let hour = Math.floor(timesTamp / 60);
//     let min = timesTamp % 60;

//     let hourStr = '';

//     switch (hour) {
//         case 0:
//             hourStr = 'часов';
//             break;
//         case 1:
//             hourStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hourStr = 'часа';
//             break;
//         default:
//             hourStr = 'часов';
//     }

//     return `"Это ${hour} ${hourStr} и  ${min} минут"`;

// }// Место для первой задачи

// console.log(getTimeFromMinutes(665));

// //a

// function getMaxMinNum(a, b, c, d) {
//     if (typeof (a) !== 'number' ||
//         typeof (b) !== 'number' ||
//         typeof (c) !== 'number' ||
//         typeof (d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b, c, d);
//     }
// }
// console.log(getMaxMinNum(15, 78, 78.9, 45));
// //vs

// function sumFibs(num) {
//     var list = [1, 1];
//     var next = list[list.length - 1] + list[list.length - 2];

//     while (true) {
//         if (next <= num) {
//             list.push(next);
//             next = list[list.length - 1] + list[list.length - 2];
//         } else {
//             return list;
//         }
//     }
// }

// console.log(sumFibs(10));

// function fib(num) {
//     let list = [1, 1];
//     let finonachi = list[list.length - 1] + list[list.length - 2];

//     while (true) {
//         if (finonachi <= num) {
//             list.push(finonachi);
//             finonachi = list[list.length - 1] + list[list.length - 2];
//         } else {
//             return list;
//         }
//     }
// }
// console.log(fib(5527939700884757));
// //vs
// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }

// console.log(fib());

alert(`i'm threed script`);
