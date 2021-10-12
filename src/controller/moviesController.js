// GET /filmes/buscar/?{titulo}

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




module.exports = {
    getMovies,
    getMovieById,
    getMovieByTitle,
}