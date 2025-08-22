export default function Filters({ genres, selectedGenre, onGenreChange, year, onYearChange, rating, onRatingChange }) {
return (
<div className="flex flex-wrap gap-4 mb-4">
<select value={selectedGenre} onChange={e => onGenreChange(e.target.value)} className="p-2 border rounded">
<option value="">Всі жанри</option>
{genres.map(g => <option key={g.id} value={g.name}>{g.name}</option>)}
</select>
<input type="number" placeholder="Рік" value={year} onChange={e => onYearChange(e.target.value)} className="p-2 border rounded w-24" />
<input type="number" placeholder="Рейтинг від" value={rating} onChange={e => onRatingChange(e.target.value)} className="p-2 border rounded w-24" />
</div>
);
}