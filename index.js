const express = require('express');
const movies = require('./movies');
const bodyParser = require('body-parser');
const {
  getAllMovies,
  searchMovies,
  createNewMovie,
  getMovieByTitle,
  getMovieByDirector,
} = require('./controller/movies');
const { response } = require('express');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Movies');
});
//gets all movies
app.get('/movies', getAllMovies);

//get movies by search query whether director or title) instructions are not super clear on whether or not you need 2 separte routes.
app.get('/movies/:query', searchMovies);

// create new movie
app.post('/movies', createNewMovie);
// curl req to confirm post to endpoint:
//curl -X POST -H "Content-Type: application/json" --data '{ "title": "Cabin in the Woods", "directors": ["Drew Goddard"], "releaseDate": "04/13/2012", "rating": "R","runTime": "95 mins", "genres": ["Horror"]}' http://localhost:8000/movies

//get movies by title
app.get('/movies/title/:query', getMovieByTitle);

//get movies by director
app.get('/movies/director/:query', getMovieByDirector);
app.listen(8000, () => {
  console.log('Listening on port 8000 .....');
});
