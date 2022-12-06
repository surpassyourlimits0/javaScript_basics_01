//numsbers
let billion = 1e11;

console.log(billion);

let ms = 0.000001; //long ver

let mse = 1e-6; // шесть нулей, слева от 1

// Work 

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
   }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: { 'John Wick': '8.8' },
   actors: {},
   genres: [],
   private: false
};

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один из опследних просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его?', '');
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('done!');
      } else {
         i--;
         console.log('error!');
      }

   }
}

rememberMyFilms();

function detectPersonalLevel() {
   if (numberOfFilms < 10) {
      console.log("Просмотрено довольно мало фильмов");
   } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
      console.log("Вы классический зритель");
   } else if (numberOfFilms >= 30) {
      console.log("Вы киноман!");
   } else {
      console.log("Error");
   }
}

detectPersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}
showMyDB(personalMovieDB.private);

function writeYourGeneres() {
   for (let i = 1; i <= 3; i++) {

      personalMovieDB.genres[i - 1] = prompt(`your faavorite in num:${i}`);

   }
}
writeYourGeneres();