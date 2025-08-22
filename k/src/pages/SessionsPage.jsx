export default function SessionsPage(){
const testSessions = [
{id:1,movie:"Inception",datetime:"2025-08-20T18:00",hall:"A",price:200},
{id:2,movie:"Interstellar",datetime:"2025-08-21T20:00",hall:"B",price:220}
];
return (<div className="p-6"><h1 className="text-2xl font-bold mb-4">Розклад сеансів</h1><div className="space-y-4">{testSessions.map(s=><div key={s.id} className="bg-white p-4 rounded-xl shadow flex justify-between items-center"><div><p className="font-semibold">{s.movie}</p><p className="text-gray-500">{new Date(s.datetime).toLocaleString()} • Зал {s.hall}</p></div><p className="font-bold">{s.price} грн</p></div>)}</div></div>);
}