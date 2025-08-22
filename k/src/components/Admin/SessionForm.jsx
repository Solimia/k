import { useState } from 'react';


export default function SessionForm({ onSubmit }) {
const [movie, setMovie] = useState('');
const [datetime, setDatetime] = useState('');
const [hall, setHall] = useState('');
const [price, setPrice] = useState('');


const handleSubmit = e => {
e.preventDefault();
onSubmit({ movie, datetime, hall, price });
};


return (
<form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-white rounded-xl shadow">
<input type="text" value={movie} onChange={e => setMovie(e.target.value)} placeholder="Фільм" className="p-2 border rounded" />
<input type="datetime-local" value={datetime} onChange={e => setDatetime(e.target.value)} className="p-2 border rounded" />
<input type="text" value={hall} onChange={e => setHall(e.target.value)} placeholder="Зал" className="p-2 border rounded" />
<input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Ціна" className="p-2 border rounded" />
<button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-xl">Зберегти сеанс</button>
</form>
);
}