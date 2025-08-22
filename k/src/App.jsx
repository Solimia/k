import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Тимчасові сторінки для тесту
function HomePage() {
  return <div className="p-4 text-xl">Головна сторінка</div>;
}

function MoviePage() {
  return <div className="p-4 text-xl">Сторінка фільму</div>;
}

function FavoritesPage() {
  return <div className="p-4 text-xl">Обрані фільми</div>;
}

function SessionsPage() {
  return <div className="p-4 text-xl">Сеанси</div>;
}

function AdminPage() {
  return <div className="p-4 text-xl">Адмінка</div>;
}

// Простий Layout
function Layout({ children }) {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white mb-4 rounded">
        <h1 className="text-xl font-bold">🎬 Кінотеатр</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
