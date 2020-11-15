const express = require('express');
const movies = require('./movies');
const {
  getAllMovies,
  getMovieByTitle,
  getMovieByDirector,
} = require('./controller/movies');

const app = express();

app.get('/', getAllMovies);

app.get('/:title', getMovieByTitle);
app.get('/:director', getMovieByDirector);
app.listen(8000, () => {
  console.log('Listening on port 8000 .....');
});
