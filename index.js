const express = require('express');
const movies = require('./movies');

// console.log(movies);
const app = express();

app.get('/', (request, response) => {
  return response.send(movies);
});

app.listen(5000, () => {
  console.log('Listening on port 5000 .....');
});
