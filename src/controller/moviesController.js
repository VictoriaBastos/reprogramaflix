// GET /filmes/filtrar?{genero}
const moviesData = require('../models/movies.json');

const getMovies = (req,res) => {
    res.status(200).send(moviesData)
}

const getMovieById = (req,res) => {
    idRequest = req.params.id
    movieRequested = moviesData.find( movie => movie.id == idRequest)
    res.status(200).send(movieRequested)
}

const getMovieByTitle = (req,res) => {
    titleRequested = (req.query.Title).toLocaleLowerCase()
    
    movieRequested = moviesData.filter(
         movie => movie.Title.toLocaleLowerCase().includes(titleRequested))
    
    res.status(200).send(movieRequested)
}

const getMoviesByGenre = (req,res) => {
    genreRequested = (req.query.Genre).toLocaleLowerCase()
    console.log(genreRequested)

    moviesByGenre = moviesData.filter( 
        movie => movie.Genre.toLocaleLowerCase().includes(genreRequested))

    res.status(200).send(moviesByGenre)
}


module.exports = {
    getMovies,
    getMovieById,
    getMovieByTitle,
    getMoviesByGenre
}