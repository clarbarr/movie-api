const movies = require('../movies');

const getAllMovies = (request, response) => {
  return response.send(movies);
};

const getMovieByTitle = (request, response) => {
  const { title } = request.params;

  const movieTitle = movies.filter((movie) => movie.title == title);

  return response.send(movieTitle);
};

const getMovieByDirector = (request, response) => {
  const { directors } = request.params;

  const movieDirector = movies.filter(
    (movie) => movie.directors.length == directors
  );

  return response.send(movieDirector);
};
module.exports = { getAllMovies, getMovieByDirector, getMovieByTitle };
