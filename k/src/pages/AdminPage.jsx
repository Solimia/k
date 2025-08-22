import React, { useState } from "react";
import MovieForm from "../components/Admin/MovieForm";
import SessionForm from "../components/Admin/SessionForm";
import StatsChart from "../components/Admin/StatsChart";

export default function AdminPage() {
  // Тестові дані для графіка
  const chartData = [
    { movie: "Inception", sales: 120 },
    { movie: "Interstellar", sales: 80 },
    { movie: "Tenet", sales: 45 }
  ];

  // Для форм
  const [movies, setMovies] = useState([]);
  const [sessions, setSessions] = useState([]);

  return (
    <div className="page-content">
      <h2>Панель адміністратора</h2>

      <section className="admin-section">
        <h3>Додати фільм</h3>
        <MovieForm movies={movies} setMovies={setMovies} />
      </section>

      <section className="admin-section">
        <h3>Додати сеанс</h3>
        <SessionForm sessions={sessions} setSessions={setSessions} />
      </section>

      <section className="admin-section">
        <h3>Статистика продажів</h3>
        <StatsChart data={chartData} />
      </section>
    </div>
  );
}
