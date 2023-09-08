'use client'
import React, { useState, useEffect } from 'react';
import SearchBar from './searchbar';

export const Box: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);

  const fetchWeather = (city: string) => {
    const apiKey = '7081c9025dfa71ddfa80cb284569e989';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('API Response:', data);
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
  }, []);
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  
  return (
    <>
<div className='mx-auto flex justify-center'>
  <div className='item-center'>
    <SearchBar onSearch={fetchWeather} />
  </div>
</div>

      <div className='w-96 h-96 bg-slate-50 border text-white text-bold rounded-lg mx-auto mt-10 flex justify-center items-center'>
        <div className='bg-teal-200 rounded-lg text-bold text-white opacity-70 shadow-2xl h-80 w-60'>
          <div className='text-xs text-white text-center mx-auto'>
            <div>{formattedDate}</div>
            <div className='text-lg font-bold text-white text-center mx-auto'>
            <div> {weatherData && weatherData.name}</div>
            </div>
          </div>
          <div className='text-5xl text-center text-white bg-opacity-100 font-bold mt-2 opacity-100 shadow-inherit drop-shadow-lg'>
  {weatherData && (weatherData.main.temp - 273.15).toFixed(2)}°C
</div>

          <div className='font-bold text-center text-sm text-white drop-shadow-md mt-3'>
            {weatherData && weatherData.weather[0].description}
          </div>
          <div className='flex justify-center items-center'>
            <div className='text-xs text-white flex justify-center items-center space-x-2'>
              <div className='text-xs'>wind</div>
              <div>{weatherData && weatherData.wind.speed}</div>
            </div>
          </div>
          <div className='text-xs text-white flex justify-center items-center space-x-2'>
            <div>humidity |</div>
            <div>{weatherData && weatherData.main.humidity}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Box;
