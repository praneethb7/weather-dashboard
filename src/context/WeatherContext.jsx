import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext();
const API_KEY = "9e54655e23b9c67d1753ccd32448b846"; 

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  });
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (city) fetchWeather(city);
  }, [city]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(setCurrentWeather);
    });
  }, []);

  const fetchWeather = (cityName) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(setCurrentWeather);
  };

  const addFavorite = (cityName) => {
    if (!favorites.includes(cityName)) {
      setFavorites([...favorites, cityName]);
    }
  };

  return (
    <WeatherContext.Provider value={{
      city, setCity, currentWeather, fetchWeather,
      favorites, addFavorite, darkMode, setDarkMode
    }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
