let seriesData = require('../models/series.json');

const getSeries = (req,res) => {
    seriesRequested = req.query

    const keyRequested = Object.keys(seriesRequested).toString() 

    if(keyRequested == "") {
        res.status(200).send(seriesData)
    } else if(keyRequested == "title"){
        seriesByTitle = seriesData.filter( series => (series.title.toLocaleLowerCase()).includes((seriesRequested[keyRequested].toLocaleLowerCase())))

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

const createSeries = (req, res) => {
    newSeries = ({
        id:seriesData.length + 1,
        title:req.body.title,
        totalSeasons:req.body.totalSeasons,
        genre:req.body.genre,
        writers:req.body.writers,
        poster:req.body.poster,
        actors:req.body.actors,
        ratings:req.body.ratings
        })

    seriesData.push(newSeries)

    res.status(201).json({
        "Message":"Serie successfully added",
        "Series": newSeries
    })
}

const updateSeries = (req,res) => {
    idRequest = req.params.id
    infoUpdate = req.body

    infoUpdate.id = idRequest

    indexSeries = seriesData.findIndex(series => series.id === idRequest)

    seriesData.splice(indexSeries, 1, infoUpdate)

    res.status(200).json({
        "Message": "Series updated successfully",
        "Series":infoUpdate
    })
}

const updateTitle = (req,res) => {
    idRequest = req.query.id;
    titleUpdate = req.query.title

    seriesToBeUpdated = seriesData.find(series => series.id === idRequest)

    seriesToBeUpdated.title = titleUpdate

    res.status(200).json({
        "Message": "Title updated successfully",
        "Series": seriesToBeUpdated
    })
}

const updateAnything = (req,res) => {
    idRequest = req.params.id;
    infoUpdate = req.body

    seriesToBeUpdated = seriesData.find(series => series.id == idRequest)

    infoUpdate.id = idRequest

    Object.keys(seriesToBeUpdated).forEach(key => {
        if(infoUpdate[key] == undefined) {
            seriesToBeUpdated[key] = seriesToBeUpdated[key]
        }else{
            seriesToBeUpdated[key] = infoUpdate[key]
        }
    })

    res.status(200).json({
        "Message": "Series updated successfully",
        "Series": seriesToBeUpdated
    })

}

const deleteSeries = (req,res) => {
    idRequest = req.params.id

    seriesToBeDeleted = seriesData.find( series => series.id == idRequest)

    seriesData.splice(seriesData.indexOf(seriesToBeDeleted), 1)

    res.status(200).json({
        "Message": "Series deleted successfully",
        "Series":seriesToBeDeleted
    })
}

module.exports = {
    getSeries,
    getSeriesById,
    createSeries,
    updateSeries,
    updateTitle,
    updateAnything,
    deleteSeries
}