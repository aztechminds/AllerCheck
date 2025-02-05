// src/components/Location.jsx
import { useState, useEffect } from "react";
import { getWeatherData } from "../API/Weather"; // Import the weather API function
import { getPollenData } from "../API/Pollen"; // Import the pollen API function

export default function Location() {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [weather, setWeather] = useState(null);
  const [pollen, setPollen] = useState(null);
  const [error, setError] = useState(null);

  // Fetch the user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
        },
        (err) => {
          setError("Error getting location: " + err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  // Fetch weather and pollen data once location is available
  useEffect(() => {
    if (location.lat && location.lon) {
      // Fetch weather data
      getWeatherData(location.lat, location.lon)
        .then((data) => setWeather(data))
        .catch((err) => setError("Error fetching weather data: " + err.message));

      // Fetch pollen data
      getPollenData(location.lat, location.lon)
        .then((data) => setPollen(data))
        .catch((err) => setError("Error fetching pollen data: " + err.message));
    }
  }, [location]);

  // Function to check if weather is severe
  const isSevereWeather = () => {
    if (weather) {
      const temp = weather.main.temp;
      const weatherCondition = weather.weather[0].main;
      return temp > 30 || weatherCondition === "Thunderstorm"; // Example condition
    }
    return false;
  };

  // Function to check if pollen level is high
  const isHighPollenLevel = () => {
    if (pollen && pollen.data) {
      const pollenLevel = pollen.data[0]?.value; // Example structure
      return pollenLevel > 50; // Example threshold for high pollen level
    }
    return false;
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      {location.lat && location.lon ? (
        <div>
          <p className="text-green-500">
            Location: Latitude {location.lat}, Longitude {location.lon}
          </p>

          {/* Weather Warning */}
          {isSevereWeather() && (
            <p className="text-red-500">Severe weather warning! Stay safe.</p>
          )}

          {/* Pollen Warning */}
          {isHighPollenLevel() && (
            <p className="text-yellow-500">High pollen levels detected. Take precautions!</p>
          )}

          {/* Weather Details */}
          {weather && (
            <div>
              <h2>Weather:</h2>
              <p>Temperature: {weather.main.temp}°C</p>
              <p>{weather.weather[0].description}</p>
            </div>
          )}

          {/* Pollen Level */}
          {pollen && (
            <div>
              <h2>Pollen Level:</h2>
              <p>{pollen.data ? pollen.data[0]?.value : "No data available"}</p>
            </div>
          )}
        </div>
      ) : (
        <p>Loading your location...</p>
      )}
    </div>
  );
}
