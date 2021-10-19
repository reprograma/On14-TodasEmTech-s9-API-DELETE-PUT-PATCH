const moviesData = require('../models/movies.json')
const seriesData = require('../models/series.json')

const getAll = (req,res) => {
    res.status(200).json([{
        "Movies":moviesData,
        "Series":seriesData
    }])
}

module.exports = {
    getAll
}