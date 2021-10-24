const express = require("express")
const cors = require("cors")

const tarefas = require("./routes/toDoRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/todo", tarefas)

module.exports = app