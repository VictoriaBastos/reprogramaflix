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

const createMovie = (req, res) => {
    newMovie = ({
        id:moviesData.length + 1,
        Title: req.body.Title,
        Year: req.body.Year,
        Rated:req.body.Rated,
        Released: req.body.Released,
        Runtime: req.body.Runtime,
        Genre:req.body.Genre,
        Director: req.body.Director,
        Writer: req.body.Writer,
        Actors: req.body.Actors,
        Plot: req.body.Plot,
        Language: req.body.Language,
        Country: req.body.Country,
        Awards: req.body.Awards
    })

    moviesData.push(newMovie)

    res.status(201).json({
        "Message":"Filme adicionado com sucesso",
        "Movie":newMovie
    })
}

module.exports = {
    getMovies,
    getMovieById,
    getMovieByTitle,
    getMoviesByGenre,
    createMovie
}