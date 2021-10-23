// const response = require("express")

// const filmesJson = require("./models/filmes.json")
// const seriesJson = require("./models/series.json")

// const express = require("express") //chamando o express
// const { application } = require("express")
// const app = express() //executando o express

const app = require("./src/app")
//variavel de porta sempre é maiuscula... SEMPRE
const PORT=7070

//iniciando o servidor
app.listen(PORT, ()=>{
    console.log(`alô doçura? tô na porta ${PORT}`)
})

// app.listen(7070, ()=>{
//     console.log("alô doçura! Tô na porta 7070")
// })