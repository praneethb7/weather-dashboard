import { useWeather } from "../context/WeatherContext";

const CurrentWeather = () => {
  const { currentWeather, addFavorite } = useWeather();

  if (!currentWeather) return <p className="text-center text-gray-400">Loading weather...</p>;

  const { name, main, weather } = currentWeather;
  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
<div className="text-center p-6 bg-gray-100 dark:bg-neutral-800 rounded-xl shadow">
  <h2 className="text-2xl font-bold mb-2">{name}</h2>
  <img src={icon} alt="weather icon" className="mx-auto" />
  <p className="text-lg capitalize text-gray-600 dark:text-gray-300">{weather[0].description}</p>
  <p className="text-4xl font-semibold mt-2 text-black dark:text-white">{main.temp}°C</p>
  <button
    onClick={() => addFavorite(name)}
    className="mt-4 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
  >
    Add to Favorites
  </button>
</div>

  );
};

export default CurrentWeather;
