import { useState } from 'react';


export default function MovieForm({ onSubmit, initialData }) {
const [title, setTitle] = useState(initialData?.title || '');
const [overview, setOverview] = useState(initialData?.overview || '');
const [year, setYear] = useState(initialData?.year || '');


const handleSubmit = e => {
e.preventDefault();
onSubmit({ title, overview, year });
};


return (
<form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-white rounded-xl shadow">
<input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Назва фільму" className="p-2 border rounded" />
<textarea value={overview} onChange={e => setOverview(e.target.value)} placeholder="Опис" className="p-2 border rounded" />
<input type="number" value={year} onChange={e => setYear(e.target.value)} placeholder="Рік" className="p-2 border rounded" />
<button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-xl">Зберегти</button>
</form>
);
}