'use strict';

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?','');

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false

};



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

if (personaMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
} else if (personaMovieDB.count >= 10 && personaMovieDB.count <30 ) {
    console.log('ВЫ класический зритель');
} else if (personaMovieDB.count >= 30 ) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}



console.log(personaMovieDB);

