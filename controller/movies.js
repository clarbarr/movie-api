const movies = require('../movies');

// general movie search query
const searchMovies = (request, response) => {
  const { query } = request.params;
  const genericQuery = query.toLowerCase();

  //call movie searches
  const byTitle = filterMovieByTitle(genericQuery);
  const byDirector = filterMovieByDirector(genericQuery);
  const searchResults = byTitle.concat(byDirector);
  return response.send(searchResults);
};

const getAllMovies = (request, response) => {
  return response.send(movies);
};

const filterMovieByTitle = (title) => {
  const movieTitle = movies.filter((movie) =>
    movie.title.toLowerCase().includes(title.toLowerCase())
  );
  return movieTitle;
};

const filterMovieByDirector = (directors) => {
  const movieDirector = movies.filter((movie) => {
    for (let i = 0; i < movie.directors.length; i++) {
      const director = movie.directors[i].toLowerCase();
      if (director.includes(directors.toLowerCase())) {
        return true;
      }
    }
  });
  return movieDirector;
};

const getMovieByDirector = (request, response) => {
  const { query } = request.params;
  return response.send(filterMovieByDirector(query));
};

const getMovieByTitle = (request, response) => {
  const { query } = request.params;
  return response.send(filterMovieByTitle(query));
};

const createNewMovie = (request, response) => {
  return response.send(request.body);
};

module.exports = {
  getAllMovies,
  getMovieByDirector,
  getMovieByTitle,
  searchMovies,
  createNewMovie,
};
