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

// let hamburger;
// const fries = NaN;
// const cols = 0;
// const nuggets = 2;

// if (hamburger && cols || fries ===3 && nuggets) {
//     console.log("Done")
// } 



// for (let i = 0; i < 3; i++) {
//     console.log(i)
//     for (let i = 0; i < 3; i++) {
//         console.log(i)    
//     }
// }



// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {

//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }


//     result += '\n';
// }

// console.log(result);