import { useState } from "react";
import { useWeather } from "../context/WeatherContext";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const { setCity } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setCity(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4">
     <input
  className="px-4 py-2 rounded-lg w-full bg-gray-100 dark:bg-neutral-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none"
/>
<button className="bg-gray-300 dark:bg-neutral-700 hover:bg-gray-400 dark:hover:bg-neutral-600 text-black dark:text-white px-4 py-2 rounded-lg">
  Search
</button>


    </form>
  );
};

export default SearchBar;
