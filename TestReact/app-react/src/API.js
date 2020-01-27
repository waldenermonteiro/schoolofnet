import axios from 'axios'

const getWeatherInfo = async (city) => {
    return await axios.get(`http://api.weatherstack.com/current?access_key=f82f810596ce526a0ae37cde6ac7fbde&query=${city}`)
}

export {
    getWeatherInfo
}