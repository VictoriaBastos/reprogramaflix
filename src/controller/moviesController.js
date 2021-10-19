let moviesData = require('../models/movies.json');

const getMovies = (req,res) => {
    res.status(200).send(moviesData)
}

const getMovieById = (req,res) => {
    idRequest = req.params.id
    movieRequested = moviesData.find( movie => movie.id == idRequest)
    res.status(200).send(movieRequested)
}

const getMovieByTitle = (req,res) => {
    titleRequested = req.query.Title.toLocaleLowerCase()
    
    movieRequested = moviesData.filter(
         movie => movie.Title.toLocaleLowerCase().includes(titleRequested))
    
    res.status(200).send(movieRequested)
}

const getMoviesByGenre = (req,res) => { // mudar para loop de movies
    genreRequested = (req.query.Genre).toLocaleLowerCase()

    moviesByGenre = moviesData.filter( 
        movie => movie.Genre.toLocaleLowerCase().includes(genreRequested))

    res.status(200).send(moviesByGenre)
}

const createMovie = (req,res) => {
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

const updateAnything = (req,res) => {
    idRequest = req.params.id
    infoUpdate = req.body

    movieToBeUpdated = moviesData.find( movie => movie.id == idRequest)

    //1o pegar o objeto movieToBeUpdated e criar um array de chaves.
    //Nesse array de chaves preciso percorrer e alterar cada um dos itens
    //Se a chave não foi alterada no body request((infoUpdate)), a original (movieToBeUpdated) permanece igual
    //Se a chave foi mandanda no body request (infoUpdate), a original (movieToBeUpdated) é alterada

    Object.keys(movieToBeUpdated).forEach( key => {
        if( infoUpdate[key] == undefined){
            movieToBeUpdated[key] == movieToBeUpdated[key]
        }else{
            movieToBeUpdated[key] = infoUpdate[key]
        }
    })

    //id não pode mudar
    movieToBeUpdated.id = idRequest

    res.status(200).json({
        "message":"Movie updated successfully",
        "movie": movieToBeUpdated
    })
}

const updateMovie = (req, res) => {
    idRequest = req.params.id
    infoUpdated = req.body

    infoUpdated.id = idRequest

    indexMovie = moviesData.findIndex(movie => movie.id == idRequest)
    moviesData.splice(indexMovie, 1, infoUpdated)

    res.status(200).json({
        "Message": "Movie updated successfully",
        "Movie":infoUpdated
    })
}

const updateTitle = (req, res) => {
    let idRequest = req.query.id
    let titleUpdate = req.query.Title

    movieToBeUpdated = moviesData.find(movie => movie.id == idRequest)

    movieToBeUpdated.Title = titleUpdate

    res.status(200).send(`Title updated: ${titleUpdate}`)

    //TAMBÉM ESTÁ FUNCIONANDO
    // let titleRequest = req.query.Title
    // let titleUpdate = req.body.Title
    // console.log(titleRequest)

    // movieToBeUpdated = moviesData.find(movie => movie.Title == titleRequest)
    // console.log(movieToBeUpdated)

    // movieToBeUpdated.Title = titleUpdate

    // res.send(`Title updated from ${titleRequest} to ${titleUpdate}`)

    //CONFLITO NAS ROTAS
    //[PATCH]/filmes/update/Title?{id} -> Query
    // const updateTitle = (req, res) => {
    //     idRequest = req.params.id;
    //     titleRequest = req.query.Title;

    //     movieToBeUpdated = moviesData.find(movie => movie.id == idRequest)
    //     movieToBeUpdated.Title = titleRequest

    //     res.status(200).json({
    //         "Message": "Title updated successfully",
    //         "Movie": movieToBeUpdated
    //     })
    // }
}

const deleteMovie = (req, res) => {
    idRequest = req.params.id;
    
    indexMovie = moviesData.findIndex(movie => movie.id == idRequest)
    
    movieDeleted = moviesData[indexMovie]
    
    moviesData.splice(indexMovie , 1)

    res.status(200).json({
        "Message": "Movie deleted successfully",
        "Movie": movieDeleted
    })
    
}

module.exports = {
    getMovies,
    getMovieById,
    getMovieByTitle,
    getMoviesByGenre,
    createMovie,
    updateMovie,
    updateTitle,
    deleteMovie,
    updateAnything
}