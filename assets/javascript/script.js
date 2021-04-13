var tmdb = "https://api.themoviedb.org/3/movie/550?api_key=cdeeab3b93b63acfe6a1d14f6ac420d2"
var genre = "https://api.themoviedb.org/3/genre/movie/list?api_key=cdeeab3b93b63acfe6a1d14f6ac420d2&language=en-US"
var movie = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=cdeeab3b93b63acfe6a1d14f6ac420d2&language=en-US"
var search = "https://api.themoviedb.org/3/search/movie?api_key=cdeeab3b93b63acfe6a1d14f6ac420d2&query=Home+Alone"
var key = "cdeeab3b93b63acfe6a1d14f6ac420d2"




fetch(search)
    .then(function (response) {
        return response.json();
    })
    .then (function (data) {
        console.log(data);
        // console.log(data);
    for (var i = 0; i < data.length; i++){
        console.log(data);
        console.log(data[i].adult);
        console.log(data[i].original_title);
    }
    })


    fetch(genre)
    .then(function (response){
        return response.json();
    })
    .then (function (data) {
        console.log(data);
    })






var genres = 28;
var runtimeLte = 100;
var releaseLte = 1991;
var releaseGte = 1980;
var voteGte = 8;
var adult = true;

var  getlink = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=${adult}&with_genres=${genres}&with_runtime.lte=${runtimeLte}release_date.gte=${releaseGte}&primary_release_date.lte=${releaseLte}&vote_average.gte=${voteGte}&page=10`;

fetch(getlink) 
    .then(function (yourpick){
        return yourpick.json();
    })
    .then (function (data) {
        console.log(data);
    })

    