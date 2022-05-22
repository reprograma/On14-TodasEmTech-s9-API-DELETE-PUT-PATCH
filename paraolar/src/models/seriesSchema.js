const mongoose = require('mongoose')

const seriesSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId, 

    title: {
        type: String,
        unique: true,
        required: true
    },

    totalSeasons: {
        type: Number
    },

    genre: {
        type: Array,
        required: true
    },

    writers: {
        type: Array
    },

    poster: {
        type: String
    },

    actors: {
        type: Array
    },
    
    ratings: {
            rating: {
                type: String
            },
            
            likes: {
                type: String
        }
    },

    criadoEm: {
        type: Date,
        default: new Date()
    },

})

module.exports = mongoose.model("series", seriesSchema)