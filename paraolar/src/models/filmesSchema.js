const mongoose = require('mongoose')

const filmesSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    Title :{
        type: String,
        unique: true,
        required: true
    },
 
    Year:{
        type: String
    },

    Rated:{
        type: String
    },

    Released:{
        type: String
    },
    
    Runtime: {    
        type: String,
        required: true
    },

    Genre: {
        type: Array,
        required: true
    },

    Director: {
        type: String
    },
    
    Writer:{
        type: String
    },

    Actors: {
        type: Array
    },
    
    Plot:{
        type: String,
        required: true
    },
    
    Language:{
        type: Array,
        required: true
    },

    Country:{
        type: String
    },

    Awards:{
        type: String
    },
    
    criadoEm: {
        type: Date,
        default: new Date()
    },

})

module.exports = mongoose.model("filmes", filmesSchema)
