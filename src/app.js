const generalRoutes = require('./routes/generalRoutes')
const moviesRoutes = require('./routes/moviesRoutes')
const seriesRoutes = require('./routes/seriesRoutes')

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/assistir', generalRoutes)
app.use('/filmes', moviesRoutes);
app.use('/series', seriesRoutes);

module.exports = app;