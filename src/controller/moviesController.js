// GET /filmes/buscar/{id]}

const moviesData = require('../models/movies.json');

const getMovies = (req,res) => {
    res.status(200).send(moviesData)
}

const getMoviesById = (req,res) => {
    idRequest = req.params.id
    movieRequested = moviesData.find( movie => movie.id == idRequest)
    res.status(200).send(movieRequested)
}






module.exports = {
    getMovies,
    getMoviesById
}