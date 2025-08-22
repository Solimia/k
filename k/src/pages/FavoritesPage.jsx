import { useApp } from '../context/AppContext';
import MovieCard from '../components/MovieCard';


export default function FavoritesPage() {
const { favorites } = useApp();
if(favorites.length===0) return <p className="p-6 text-gray-500">Обраних фільмів поки немає.</p>;
return <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">{favorites.map(m=><MovieCard key={m.id} movie={m} />)}</div>;
}