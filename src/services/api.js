import axios from 'axios';

const key = 'c3664196b2f1c1fa55ad771f8fef61e7';

export const getPopularMovies = () => {
  const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${key}`;
  return axios.get(url).then(data => data.data);
};

export const searchMovies = query => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`;
  return axios.get(url).then(data => data.data);
};

export const getMovieDetails = id => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`;
  return axios.get(url).then(data => data.data);
};

export const getMovieCast = id => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`;
  return axios.get(url).then(data => data.data);
};

export const getReviews = id => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`;
  return axios.get(url).then(data => data.data);
};
