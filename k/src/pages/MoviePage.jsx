import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';


export default function MoviePage() {
const { id } = useParams();
const [movie, setMovie] = useState(null);
const { favorites, setFavorites } = useApp();
const fav = favorites.some(f => f.id === parseInt(id));


useEffect(() => {
fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY&append_to_response=videos`)
.then(res => res.json())
.then(data => setMovie(data));
}, [id]);


const toggleFav = () => {
if(fav) setFavorites(favorites.filter(f => f.id !== movie.id));
else setFavorites([...favorites, movie]);
};


if(!movie) return <p className="p-6 text-gray-500">Завантаження...</p>;


const trailer = movie.videos?.results.find(v => v.type === 'Trailer');


return (
<div className="max-w-5xl mx-auto p-6">
<div className="flex flex-col md:flex-row gap-6">
<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-2xl shadow-lg w-72" />
<div className="flex flex-col gap-4">
<h1 className="text-3xl font-bold">{movie.title}</h1>
<p className="text-gray-600">{movie.release_date?.slice(0,4)} • {movie.genres?.map(g => g.name).join(", ")}</p>
<p className="text-yellow-500 font-semibold">⭐ {movie.vote_average?.toFixed(1)}</p>
<p className="text-gray-700">{movie.overview}</p>
<button onClick={toggleFav} className={`px-4 py-2 rounded-xl w-fit ${fav ? 'bg-red-500 text-white':'bg-gray-200'}`}>{fav ? '💖 Додано в обране':'➕ Додати в обране'}</button>
</div>
</div>
{trailer && <div className="mt-8"><h2 className="text-xl font-semibold mb-4">Трейлер</h2><iframe width="100%" height="400" src={`https://www.youtube.com/embed/${trailer.key}`} title="YouTube trailer" frameBorder="0" allowFullScreen className="rounded-2xl shadow-lg"/></div>}
</div>
);
}