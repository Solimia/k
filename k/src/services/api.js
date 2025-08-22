const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// Запити з TMDB
export const fetchMovies = async (query = "") => {
  const url = query
    ? `${API_URL}/search/movie?api_key=${API_KEY}&language=uk-UA&query=${query}`
    : `${API_URL}/movie/popular?api_key=${API_KEY}&language=uk-UA`;

  const res = await fetch(url);
  return res.json();
};

export const fetchMovieDetails = async (id) => {
  const res = await fetch(
    `${API_URL}/movie/${id}?api_key=${API_KEY}&language=uk-UA`
  );
  return res.json();
};

export const fetchGenres = async () => {
  const res = await fetch(
    `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=uk-UA`
  );
  return res.json();
};
