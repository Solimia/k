import { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Пошук фільмів..."
        className="border p-2 rounded w-full"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Пошук
      </button>
    </form>
  );
}

export default SearchBar;
