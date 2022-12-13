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

//*****************************************CALLBACK */

// function call(lang, callback) {
//     console.log(`I learn the ${lang},`);
//     callback();
// }

// function done() {
//     console.log("I did it");
// }

// call('javascript', done);
/* *********ВЫЗОВ СКРИПТОТВ***************/
// function loadScript(src, callback) {

//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(script);
//     document.head.append(script);
// }
// loadScript('script.js', function (script) {

//     loadScript('app2.js', function (script) {

//         loadScript('basic01_01.js', function (script) {
//             // ...и так далее, пока все скрипты не будут загружены
//         });

//     });

// });
/* ***** END*****************/
// Перехват ошибок
// В примерах выше мы не думали об ошибках. А что если загрузить скрипт не удалось? Колбэк должен уметь реагировать на возможные проблемы.

// Ниже улучшенная версия loadScript, которая умеет отслеживать ошибки загрузки:
// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));

//     document.head.append(script);
// }
// Мы вызываем callback(null, script) в случае успешной загрузки и callback(error), если загрузить скрипт не удалось.

//Живой пример:

// loadScript('/my/script.js', function (error, script) {
//     if (error) {
//         // обрабатываем ошибку
//     } else {
//         // скрипт успешно загружен
//     }
// });
// Опять же, подход, который мы использовали в loadScript, также распространён и называется «колбэк с первым аргументом - ошибкой» («error - first callback»).

//Правила таковы:

// Первый аргумент функции callback зарезервирован для ошибки.В этом случае вызов выглядит вот так: callback(err).
// Второй и последующие аргументы — для результатов выполнения.В этом случае вызов выглядит вот так: callback(null, result1, result2…).
// Одна и та же функция callback используется и для информирования об ошибке, и для передачи результатов.
//********************************* */
//Адская пирамида вызовов
//На первый взгляд это рабочий способ написания асинхронного кода.Так и есть.Для одного или двух вложенных вызовов всё выглядит нормально.
//
//Но для нескольких асинхронных действий, которые нужно выполнить друг за другом, код выглядит вот так:
//
// loadScript('1.js', function (error, script) {

//     if (error) {
//         handleError(error);
//     } else {
//         // ...
//         loadScript('2.js', function (error, script) {
//             if (error) {
//                 handleError(error);
//             } else {
//                 // ...
//                 loadScript('3.js', function (error, script) {
//                     if (error) {
//                         handleError(error);
//                     } else {
//                         // ...и так далее, пока все скрипты не будут загружены (*)
//                     }
//                 });

//             }
//         });
//     }
// });
// // В примере выше:

// // 1 Мы загружаем 1.js. Продолжаем, если нет ошибок.
// // 2 Мы загружаем 2.js. Продолжаем, если нет ошибок.
// // 3 Мы загружаем 3.js. Продолжаем, если нет ошибок. И так далее (*).
// // Чем больше вложенных вызовов, тем наш код будет иметь всё большую вложенность, которую сложно поддерживать, особенно если вместо ... у нас код, содержащий другие цепочки вызовов, условия и т.д.

// // Иногда это называют «адом колбэков» или «адской пирамидой колбэков».

// //*******************Такой подход к написанию кода не приветствуется.

// //Мы можем попытаться решить эту проблему, изолируя каждое действие в отдельную функцию, вот так:

// loadScript('1.js', step1);

// function step1(error, script) {
//     if (error) {
//         handleError(error);
//     } else {
//         // ...
//         loadScript('2.js', step2);
//     }
// }

// function step2(error, script) {
//     if (error) {
//         handleError(error);
//     } else {
//         // ...
//         loadScript('3.js', step3);
//     }
// }

// function step3(error, script) {
//     if (error) {
//         handleError(error);
//     } else {
//         // ...и так далее, пока все скрипты не будут загружены (*)
//     }
// }

const obj = {
    name: "erlan",
    // age: 22,
    // IQ: 209,
    marrid: "not marrid",
    carrir: {
        futurerang: "billioner in 28 years old"
    }
};

const { IQ: i = 212, age: a = 1001 } = obj;
console.log(i, a);
// delete obj.name;
// console.log(obj);

for (let key in obj) {
    if (typeof (obj[key]) === 'object') {
        for (let i in obj[key]) {
            console.log(`Свойства ${key} имеет внутри: ${obj[key][i]}`);
        }
    } else {
        console.log(`Свойства ${key} имеет внутри: ${obj[key]}`);
    }

}


