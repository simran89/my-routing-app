"use client";

import { useState } from "react";

// Type for weather response from OpenWeatherMap
interface Weather {
  name: string;
  sys: { country: string };
  main: { temp: number };
  weather: { description: string }[];
}

export default function WeatherPage() {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "c99fa8a7e4eb54f036c8f927bf5ff571";

  const fetchWeather = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) throw new Error("City not found");

      const data = await res.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setWeather(null);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Weather APP</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={fetchWeather} disabled={loading}>
        {loading ? "Fetching..." : "Get Weather"}
      </button>

      {weather && (
        <div>
          <h2>
            {weather.name}, {weather.sys?.country}
          </h2>
          <h3>Temperature: {weather.main?.temp}°C</h3>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
