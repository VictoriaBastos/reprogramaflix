const express = require('express');
const cors = require('cors');
const generalRoutes = require('./routes/generalRoutes')
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', generalRoutes)
// app.use('/movies', moviesRoutes);
// app.use('/series', seriesRoutes);

module.exports = app;