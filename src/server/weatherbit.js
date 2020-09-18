const fetch = require('node-fetch');

const fetchWeatherbitApi = async (api_key, lat, lng, date) => {
    let link = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${api_key}`;
    let date_diff = Math.ceil((new Date(date) - new Date()) / 1000 / 60 / 60 / 24);
    let usual = ' ';
    if (date_diff > 8)
    {
        let fakeDate = date.split('-');
        fakeDate[0] = fakeDate[0] - 1 + '';
        fakeDate = fakeDate.join('-');
        usual = 'usually ';
        link = `https://api.weatherbit.io/v2.0/history/hourly?key=${api_key}&lat=${lat}&lon=${lng}&start_date=${fakeDate}:12&end_date=${fakeDate}:13`;
    }
    let weatherbit_response = await fetch(link);
    if (weatherbit_response.ok)
    {
        let weatherbit_api_data = await weatherbit_response.json();
        return {
            w_temp: usual + (Math.round(weatherbit_api_data.data[0].temp * 9 / 5 + 32)) + ' ',
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

// const fetch = require('node-fetch');
//
// const fetchWeatherbitApi = async (api_key, lat, lng, date) => {
//     let link = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${api_key}`;
//     let weatherbit_response = await fetch(link);
//     if (weatherbit_response.ok)
//     {
//         let weatherbit_api_data = await weatherbit_response.json();
//         return {
//             w_temp: Math.round(weatherbit_api_data.data[0].temp * 9 / 5 + 32) + ' ',
//             w_descr: weatherbit_api_data.data[0].weather.description
//         };
//     }
//     else {
//         console.log(`Error: ${weatherbit_response.statusText}`);
//         return {
//             w_temp: 'no data',
//             w_descr: 'no data'
//         };
//     }
// }
//
// module.exports = fetchWeatherbitApi;
