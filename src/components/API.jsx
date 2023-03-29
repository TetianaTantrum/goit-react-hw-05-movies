import axios from 'axios';
// Trending
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'f9bf05506ad1ee4c133a8c572dbb21a2';
async function getTrending(page) {
  const { data } = await axios.get(
    `${BASE_URL}trending/movie/week?api_key=${KEY}&page=${page}&language=en-US`
  );

  return data.results;
}
// Find MOVIE by id
async function getMovieById(movieId) {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}&append_to_response=videos&language=en-US`
  );
  return data;
}
// Find CAST by id
async function getCastById(movieId) {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  return data.cast;
}
// Find REVIEWS by id
async function getReviewsById(movieId) {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
  );
  return data.results;
}

// Find MOVIES by Name
async function getMoviesByQuery(searchQuery) {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
  );
  return data.results;
}

export {
  getTrending,
  getMovieById,
  getCastById,
  getReviewsById,
  getMoviesByQuery,
};
