'use strict';

let numberOfFilms;
function start() {
     numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?','');

     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?','');   
     }
}

start();

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false

};





function remrmberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотреных фильмов?',''),
              b = prompt('На сколько оцените его?','');
    
              if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
             
            personaMovieDB.movies[a] = b;
            
        } else {
        console.log('error');
        i--;
        }
}
}

remrmberMyFilms();



function detectPersonslLevel() {
    
    if (personaMovieDB.count < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if (personaMovieDB.count >= 10 && personaMovieDB.count <30 ) {
        console.log('ВЫ класический зритель');
    } else if (personaMovieDB.count >= 30 ) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonslLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personaMovieDB);
    }
}

showMyDB(personaMovieDB.privat);

function writeYourGeners() {
    for (let i = 1; i <= 3; i++) {
        personaMovieDB.geners[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGeners();


