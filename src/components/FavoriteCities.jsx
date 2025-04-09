import { useWeather } from "../context/WeatherContext";

const FavoriteCities = () => {
  const { favorites, setCity } = useWeather();

  return (
<div className="p-4 bg-gray-100 dark:bg-neutral-800 rounded-xl shadow">
  <h3 className="text-lg font-bold mb-2 text-black dark:text-white">Favorite Cities</h3>
  <ul className="space-y-2">
    {favorites.map((city, i) => (
      <li key={i}>
        <button
          className="text-blue-600 dark:text-blue-400 hover:underline"
          onClick={() => setCity(city)}
        >
          {city}
        </button>
      </li>
    ))}
  </ul>
</div>

  );
};

export default FavoriteCities;
