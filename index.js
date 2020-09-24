let numberOfFilms;
//function start() {
    //numberOfFilms = +prompt('How many films have you watched?');
    //while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        //numberOfFilms = +prompt('How many films have you watched?');
    //}
//}
//start();
const personalMovieDB = {
    count: 0,
    movies: {},
    actors:{},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('How many films have you watched?');
        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('How many films have you watched?');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const film = prompt('what the last film have you watched?');
            const rateFilm = prompt( 'rate the film');
            personalMovieDB.movies[film] = rateFilm;
            if(film != null && film !== "" && rateFilm != null && rateFilm !== "" && film.length < 20){
                console.log('OK!');
            } else {
                console.log('NO!');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        } else if ( 30 > personalMovieDB.count > 10) {
            console.log("Вы классический зритель");
        } else  if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log('произошла ошибка');
        }

    },
    showMyDB: function () {
        if (this.privat === false){
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function () {
        for (let i = 0; i < 3; i ++){
            let favouriteGenres = prompt('Назовите любимый жарнр');
            while (favouriteGenres === '' || favouriteGenres == null){
                favouriteGenres = +prompt('Назовите любимый жарнр');
            }
            personalMovieDB.genres.push(favouriteGenres);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat !== false) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};


//function rememberMyFilms() {
   // for (let i = 0; i < 2; i++) {
        //const film = prompt('what the last film have you watched?');
        //const rateFilm = prompt( 'rate the film');
        //personalMovieDB.movies[film] = rateFilm;
        //if(film != null && film != "" && rateFilm != null && rateFilm != "" && film.length < 20){
            //console.log('OK!');
        //} else {
            //console.log('NO!');
            //i--;
        //}
    //}
//}
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.genres.forEach(function (item,i) {
    console.log(`Любимый жанр ${i+1} -это ${item}`);
});
//function detectPersonalLevel (){
    //if (personalMovieDB.count < 10){
        //console.log("Просмотрено довольно мало фильмов");
    //} else if ( 30 > personalMovieDB.count > 10) {
        //console.log("Вы классический зритель");
    //} else  if (personalMovieDB.count > 30) {
        //console.log("Вы киноман");
    //} else {
        //console.log('произошла ошибка');
    //}
//}
//detectPersonalLevel();

//function  showMyDB (){
    //if (personalMovieDB.privat == false){
        //console.log(personalMovieDB);
    //}
//}
//showMyDB();

//function writeYourGenres (){
    //for (let i = 0; i < 3; i ++){
        //let favouriteGenres = prompt('Назовите любимый жарнр');
        //personalMovieDB.genres.push(favouriteGenres);
    //}
//}
//writeYourGenres();
console.log(personalMovieDB);

