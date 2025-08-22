import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function MovieCard({ movie }) {
  const { favorites, addFavorite, removeFavorite } = useAppContext();
  const isFav = favorites.some((m) => m.id === movie.id);

  return (
    <div className="bg-white rounded shadow p-2 flex flex-col">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded mb-2"
      />
      <h3 className="font-bold text-sm">{movie.title}</h3>
      <p className="text-xs text-gray-600">{movie.release_date}</p>

      <div className="flex justify-between mt-auto pt-2">
        <Link
          to={`/movie/${movie.id}`}
          className="text-blue-500 text-sm hover:underline"
        >
          Деталі
        </Link>
        <button
          onClick={() =>
            isFav ? removeFavorite(movie.id) : addFavorite(movie)
          }
          className={`text-sm px-2 py-1 rounded ${
            isFav ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
        >
          {isFav ? "Видалити" : "Обране"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
