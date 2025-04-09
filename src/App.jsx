import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import FavoriteCities from "./components/FavoriteCities";
import { WeatherProvider, useWeather } from "./context/WeatherContext";

const AppContent = () => {
  const { darkMode, setDarkMode } = useWeather();

  return (
    <div className={`min-h-screen ${darkMode ? "dark bg-black text-white" : "bg-white text-black"}`}>
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">🌦️ Weather Dashboard</h1>
          <button
  onClick={() => setDarkMode(!darkMode)}
  className="bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-neutral-600 text-black dark:text-white px-4 py-2 rounded"
>
  {darkMode ? "Light Mode" : "Dark Mode"}
</button>


        </div>

        <SearchBar />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <CurrentWeather />
          </div>
          <FavoriteCities />
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <WeatherProvider>
    <AppContent />
  </WeatherProvider>
);

export default App;
