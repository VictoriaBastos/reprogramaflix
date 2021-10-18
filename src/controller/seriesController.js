let seriesData = require('../models/series.json');

const getSeries = (req,res) => { 
    res.status(200).send(seriesData)
}

const getSeriesById = (req,res) => {
    idRequest = req.params.id

    seriesRequested = seriesData.find( serie => serie.id == idRequest)
    
    res.status(200).send(seriesRequested)
}

// const getSeriesByTitle = (req,res) => {
//     titleRequest = (req.params.title).toLocaleLowerCase()

//     serieRequested = seriesData.filter( 
//         serie => (serie.title).toLocaleLowerCase().includes(titleRequest))

//     res.status(200).send(serieRequested)
// }

// CONFERIR LOOP DE ARRAY PARA GENRE
// const getSeriesByGenre = (req,res) => {
//     genreRequest = req.params.genre.toLocaleLowerCase()
//     console.log(genreRequest)

    // serieRequested = seriesData.filter(
    //     serie => ((serie.genre).filter(g => g.toLocaleLowerCase() == genreRequest))
    // )
// OU
// const serieRequested = seriesData.filter( serie => serie.genre.toString().includes(genreRequest))



//     res.status(200).send(seriesRequested)


// }

const createSeries = (req, res) => {
    newSeries = ({
        id:seriesData.length + 1,
        title:req.body.title,
        totalSeasons:req.body.totalSeasons,
        genre:req.body.genre,
        writers:req.body.writers,
        poster:req.body.poster,
        actors:req.body.actors,
        ratings:{"rating": req.body.ratings.rating,
                 "likes": req.body.ratings.likes}
         })

    seriesData.push(newSeries)

    res.status(201).json({
        "Message":"Serie criada com sucesso",
        "Series": newSeries
    })
}


const updateSeries = (req,res) => {
    idRequest = req.params.id
    infoUpdated = req.body

    indexSeries = seriesData.findIndex(series => series.id === idRequest)

    seriesData.splice(indexSeries,1,infoUpdated)

    res.status(200).json({
        "Message": "Series updated successfully",
        "Series":infoUpdated
    })
}

const deleteSeries = (req,res) => {
    idRequest = req.params.id

    seriesData = seriesData.filter(series => series.id != idRequest) // é preciso mudar const para let

    res.status(200).json({
        "Message": "Series deleted successfully",
    })
}








// const updateTitle = (req, res) => {
//     idRequest = req.params.id

//     seriesRequested = seriesData.find(series => series.id === idRequest)

//     newTitle = req.query.title
//     seriesRequested.title = newTitle;

//     res.status(200).json({
//         "Message":"Title updated successfully",
//         "Series": newTitle})
// }

module.exports = {
    getSeries,
    getSeriesById,
    // getSeriesByTitle,
    // getSeriesByGenre,
    createSeries,
    updateSeries,
    deleteSeries
    // updateTitle
}