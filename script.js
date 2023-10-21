'use strict';

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?','');

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false

};

const a = prompt('Один из последних просмотреных фильмов?',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотреных фильмов?',''),
      d = prompt('На сколько оцените его?','');

personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;

console.log(personaMovieDB);

// const hamburger = 3;
// const fries = 3;
// const cols = 0;
// const nuggets = 0;

// if (hamburger === 3 && cols || fries ===3 && nuggets) {
//     console.log("Done")
// } else {console.log ("No")
// }

