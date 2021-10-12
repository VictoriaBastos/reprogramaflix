const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// app.use('/movies', moviesRoutes);
// app.use('/series', seriesRoutes);

module.exports = app;