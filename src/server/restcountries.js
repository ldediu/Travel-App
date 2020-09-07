const fetch = require('node-fetch');

const fetchRestCountriesApi = async (country_code = '') => {
    let restCountries_response = await fetch(`https://restcountries.eu/rest/v2/alpha/${country_code}`);
    if (restCountries_response.ok)
    {
        let restCountries_api_data = await restCountries_response.json();
        console.log(restCountries_api_data)
        let lang = [];
        let curr = [];
        restCountries_api_data.languages.forEach(el => {
            lang.push(el.name);
        });
        restCountries_api_data.currencies.forEach(el => {
            curr.push(el.name);
        });
        return {
            capital: restCountries_api_data.capital,
            population: restCountries_api_data.population,
            flag: restCountries_api_data.flag,
            lang: lang.join(', '),
            curr: curr.join(', ')
        };
    }
    else {
        console.log(`Error: ${restCountries_response.statusText}`);
        return {
            capital: 'no data',
            population: 'no data',
            flag: 'no data',
            lang: 'no data',
            curr: 'no data'
        };
    }
};

module.exports = fetchRestCountriesApi;