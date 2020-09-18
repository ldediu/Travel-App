const fetch = require('node-fetch');

const fetchPixabayApi = async (api_key, city) => {
    // let link = `https://pixabay.com/api/?key=${api_key}&q=${city}&orientation=horizontal`;
    let link = `https://pixabay.com/api/?key=${api_key}&q=${city}&category=places&image_type=photo`
    let pixabay_response = await fetch(link);
    if (pixabay_response.ok)
    {
        let pixabay_api_data = await pixabay_response.json();
        if (pixabay_api_data.hits.length > 0)
        {
            return {
                pict: pixabay_api_data.hits[0].webformatURL
            };
        }
        else {
            return {
                pict: `https://i.picsum.photos/id/171/2048/1536.jpg?hmac=16eVtfmqTAEcr8VwTREQX4kV8dzZKcGWI5ouMlhRBuk`
            };
        }
    }
    else {
        console.log(`Error: ${pixabay_response.statusText}`);
        return {
            pict: `https://i.picsum.photos/id/171/2048/1536.jpg?hmac=16eVtfmqTAEcr8VwTREQX4kV8dzZKcGWI5ouMlhRBuk`
        };
    }
}

module.exports = fetchPixabayApi;