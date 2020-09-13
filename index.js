let numberOfFilms;
function start() {
    numberOfFilms = +prompt('How many films have you watched?');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('How many films have you watched?');
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const film = prompt('what the last film have you watched?');
        const rateFilm = prompt( 'rate the film');
        personalMovieDB.movies[film] = rateFilm;
        if(film != null && film != "" && rateFilm != null && rateFilm != "" && film.length < 20){
            console.log('OK!');
        } else {
            console.log('NO!');
            i--;
        }
    }
}
rememberMyFilms();


function detectPersonalLevel (){
    if (personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if ( 30 > personalMovieDB.count > 10) {
        console.log("Вы классический зритель");
    } else  if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log('произошла ошибка');
    }
}
detectPersonalLevel();

function  showMyDB (){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres (){
    for (let i = 0; i < 3; i ++){
        let favouriteGenres = prompt('Назовите любимый жарнр');
        personalMovieDB.genres.push(favouriteGenres);
    }
}
writeYourGenres();
console.log(personalMovieDB);