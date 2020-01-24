import React, { useState } from "react";
import { getWeatherInfo } from '../API'
function WeatherApp() {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState({})

    const handleChangeInput = ({ target }) => {
        const { value } = target
        setCity(value)
    }
    const searchApi = async () => {
        const { data } = await getWeatherInfo(city)
        setWeather(data)
        console.log('request ajax', data)
    }
    return (
        <div>
            <input type="text" name="city" placeholder="Enter City name" onChange={handleChangeInput} value={city} />
            <button type="button" onClick={searchApi}>Search</button>
            <hr></hr>
            {weather && weather.current ?
                <div className="weather-info">
                    <h1>{weather.current.weather_descriptions[0]}</h1>
                    <img src={weather.current.weather_icons[0]} alt="" />
                    <h4>{weather.current.temperature} ºC </h4>
                </div>
                : <p>No yet</p>
            }

        </div>
    );
}

export default WeatherApp