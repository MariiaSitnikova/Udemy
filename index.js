const numberOfFilms = +prompt('How many films have you watched?');
alert(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};
console.log(personalMovieDB);

const film = prompt('what the last film have you watched?');
const rateFilm = prompt( 'rate the film');
personalMovieDB.movies[film] = rateFilm;
console.log(personalMovieDB);
