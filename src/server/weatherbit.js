const fetch = require('node-fetch');

const fetchWeatherbitApi = async (api_key, lat, lng) => {
    let link = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${api_key}`;
    let weatherbit_response = await fetch(link);
    if (weatherbit_response.ok)
    {
        let weatherbit_api_data = await weatherbit_response.json();
        return {
            w_temp: Math.round(weatherbit_api_data.data[0].temp * 9 / 5 + 32) + 'F',
            w_descr: weatherbit_api_data.data[0].weather.description
        };
    }
    else {
        console.log(`Error: ${weatherbit_response.statusText}`);
        return {
            w_temp: 'no data',
            w_descr: 'no data'
        };
    }
}

module.exports = fetchWeatherbitApi;