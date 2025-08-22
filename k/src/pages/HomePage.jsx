import { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies(query);
      setMovies(data.results || []);
    };
    loadMovies();
  }, [query]);

  return (
    <div className="p-6">
      <SearchBar onSearch={(q) => setQuery(q)} />
      <Filters />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
