const fetch = require('node-fetch');

const fetchGeonamesApi = async (city = '', api_key) => {
    let geonames_response = await fetch(`http://api.geonames.org/searchJSON?q=${city}&maxRows=3&username=${api_key}`);
    if (geonames_response.ok)
    {
        let geonames_api_data = await geonames_response.json();
        if (geonames_api_data.geonames.length > 0)
            geonames_api_data = geonames_api_data.geonames[0];
        return {
            dest_name: geonames_api_data.name,
            country_name: geonames_api_data.countryName,
            country_code: geonames_api_data.countryCode,
            lat: geonames_api_data.lat,
            lng: geonames_api_data.lng
        };
    }
    else {
        console.log(`Error: ${geonames_response.statusText}`);
        return {
            dest_name: 'no data',
            country_name: 'no data',
            country_code: 'no data',
            lat: 'no data',
            lng: 'no data'
        };
    }
};

module.exports = fetchGeonamesApi;