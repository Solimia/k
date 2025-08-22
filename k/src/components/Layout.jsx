import { Link } from 'react-router-dom';


export default function Layout({ children }) {
return (
<div className="min-h-screen bg-gray-50">
<header className="bg-gray-900 text-white p-4 flex justify-between items-center">
<h1 className="text-2xl font-bold"><Link to="/">🎬 Кінотеатр</Link></h1>
<nav className="space-x-4">
<Link to="/favorites" className="hover:underline">Обрані</Link>
<Link to="/sessions" className="hover:underline">Сеанси</Link>
<Link to="/admin" className="hover:underline">Адмін</Link>
</nav>
</header>
<main>{children}</main>
</div>
);
}