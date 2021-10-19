const catalogueRoutes = require('./routes/catalogueRoutes')
const moviesRoutes = require('./routes/moviesRoutes')
const seriesRoutes = require('./routes/seriesRoutes')

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/assistir', catalogueRoutes)
app.use('/filmes', moviesRoutes);
app.use('/series', seriesRoutes);

module.exports = app;