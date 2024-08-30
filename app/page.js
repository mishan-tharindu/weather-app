// app/page.js

'use client';

import { useState } from 'react';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    if (!city){
      setError("Please Enter a city name.");
      return;
    } 

    const apiKey = 'f524f4a3f66b684de434d97cabcd043c'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);

      if(!response.ok){

        // Handle different response errors
        if (response.status === 404) {
          setError("City not found. Please check the spelling and try again.");
        } else if (response.status === 401) {
          setError("Invalid API key. Please check your API key and try again.");
        } else {
          setError("An error occurred while fetching the weather data. Please try again later.");
        }
        setWeather(null);
        return;

      }

      const data = await response.json();
      setWeather(data);
      setError(null);  // Clear any previous errors

    } catch (error) {
      console.error("Network error:", error);
      setError("Unable to connect to the weather service. Please check your internet connection and try again.");
      setWeather(null);  // Clear weather data on error
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Weather App</h1>
      <div className="flex space-x-4">
        <input 
          type="text" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          placeholder="Enter city name"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button 
          onClick={getWeather}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Get Weather
        </button>
      </div>

      {error && (
        <div className="mt-4 text-red-600">
          <p>{error}</p>
        </div>
      )}

      {weather && (
        <div className="mt-10 p-6 bg-white rounded-lg shadow-md w-80 text-center">
          <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
          <p className="text-xl">{weather.main?.temp}°C</p> {/* Using optional chaining */}
          <p className="text-gray-700">{weather.weather?.[0]?.description}</p> {/* Safely accessing description */}
        </div>
      )}
    </div>
  );
}
