import React, { useState } from "react";

function WeatherApp() {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState({})

    const handleChangeInput = ({ target }) => {
        const { value } = target
        setCity(value)
    }
    const searchApi = () => {
        console.log('REQUEST AJAX')
    }
    return (
        <div>
            <input type="text" name="city" placeholder="Enter City name" onChange={handleChangeInput} value={city} />
            <button type="button" onClick={searchApi}>Search</button>
            <hr></hr>
            <div className="weather-info"></div>

        </div>
    );
}

export default WeatherApp