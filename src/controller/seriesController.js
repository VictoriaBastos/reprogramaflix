let seriesData = require('../models/series.json');

const getSeries = (req,res) => {
    seriesRequested = req.query

    const keyRequested = Object.keys(seriesRequested).toString() //how to make it lowercase

    if(keyRequested == "") {
        res.status(200).send(seriesData)
    } else if(keyRequested == "title"){
        seriesByTitle = seriesData.find( series => (series.title.toLocaleLowerCase()).includes((seriesRequested[keyRequested].toLocaleLowerCase())))

        res.status(200).send(seriesByTitle)
      } else if(keyRequested == "genre"){
        seriesByGenre = seriesData.filter( series => (series.genre.toString().toLocaleLowerCase().includes(seriesRequested[keyRequested].toLocaleLowerCase())))
        res.status(200).send(seriesByGenre)
    } else{
        res.status(404).send("Invalid request. Try again searching by title or genre.")
    }
}

const getSeriesById = (req,res) => {
    idRequest = req.params.id

    seriesById = seriesData.find( series => series.id == idRequest)

    res.status(200).send(seriesById)
}

// const getSeries = (req,res) => { 
//     res.status(200).send(seriesData)
// }

// //query titulo,genero, sem query

// const getSeriesByFilters = (req,res) => { 
//     keyRequested = req.query
//     console.log(keyRequested)

//     seriesFiltered = seriesData.find()

// }

// const getSeriesById = (req,res, next) => {
//     idRequest = req.query.id

//     seriesRequested = seriesData.find( serie => serie.id == idRequest)
    
//     res.status(200).send(seriesRequested)
// }

// const getSeriesByTitle = (req,res) => {
//     titleRequest = req.query.title;

//     seriesRequested = seriesData.find( serie => serie.Title == titleRequest)

//     res.status(200).send(seriesRequested)

// }

// const getSeriesByGenre = (req,res) => {
//     genreRequest = req.query.genre.toLocaleLowerCase()
//     console.log(genreRequest)

//     serieRequested = seriesData.filter( serie => { //change to filter again
//         ((serie.genre).toString().toLocaleLowerCase()).includes(genreRequest)   
//     })

    
//     res.status(200).send(serieRequested)
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

    infoUpdated.id = idRequest

    res.status(200).json({
        "Message": "Series updated successfully",
        "Series":infoUpdated
    })
}

const updateTitle = (req,res) => {
    idRequest = req.params.id;
    titleUpdate = req.query.title

    seriesToBeUpdated = seriesData.find(series => series.id === idRequest)

    seriesToBeUpdated.title = titleUpdate

    res.status(200).json({
        "message": "Title updated successfully",
        "Series": seriesToBeUpdated
    })
}

const updateAnything = (req,res) => {
    idRequest = req.params.id;
    infoUpdate = req.body

    seriesToBeUpdated = seriesData.find(series => series.id == idRequest)

    Object.keys(seriesToBeUpdated).forEach(key => {
        if(infoUpdate[key] == undefined) {
            seriesToBeUpdated[key] = seriesToBeUpdated[key]
        }else{
            seriesToBeUpdated[key] = infoUpdate[key]
        }
    })

    infoUpdate.id = idRequest

    res.status(200).json({
        "message": "Series updated successfully",
        "series": seriesToBeUpdated
    })

}

const deleteSeries = (req,res) => {
    idRequest = req.params.id

    seriesToBeDeleted = seriesData.find( series => series.id == idRequest)

    seriesData.splice(seriesData.indexOf(seriesRequested), 1)

    res.status(200).json({
        "Message": "Series deleted successfully",
        "Series":seriesToBeDeleted
    })
}

module.exports = {
    getSeries,
    getSeriesById,
    // getSeriesByTitle,
    // getSeriesByGenre,
    createSeries,
    updateSeries,
    updateTitle,
    updateAnything,
    deleteSeries
}