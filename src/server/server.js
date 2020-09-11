
const dotenv = require('dotenv')
const path = require('path')
const express = require('express')
//const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch')
//const request = require('request')

const fetchGeonamesApi = require('./geonames')
const fetchRestCountriesApi = require('./restcountries')
const fetchWeatherbitApi = require('./weatherbit')
const fetchPixabayApi = require('./pixabay')

let data_storage = {
    dest_name: '',
    country_name: '',
    country_code: '',
    lat: '',
    lng: '',
    curr_city: '',
    dep_date: '',
    ret_date: '',
    capital: '',
    population: '',
    flag: '',
    lang: '',
    currency: '',
    weather_temp: '',
    weather_descr: '',
    pict: ''
}

dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('dist'))

app.post('/results', async function(req, res) {
    console.log('req = ',req.body)
    try {
        data_storage.dep_date = req.body.departure_time;
        data_storage.ret_date = req.body.return_time;
        data_storage.curr_city = req.body.current_city;
        //geonames.org api
        let geonamesData = await fetchGeonamesApi(req.body.destination, process.env.API_GEONAMESORG);
        data_storage.dest_name = geonamesData.dest_name;
        data_storage.country_name = geonamesData.country_name;
        data_storage.country_code = geonamesData.country_code
        data_storage.lat = geonamesData.lat;
        data_storage.lng = geonamesData.lng;

        //restcountries api
        let restcountriesData = await fetchRestCountriesApi(data_storage.country_code);
        data_storage.capital = restcountriesData.capital;
        data_storage.population = restcountriesData.population;
        data_storage.flag = restcountriesData.flag;
        data_storage.lang = restcountriesData.lang;
        data_storage.currency = restcountriesData.curr;

        //weatherbit.io api
        let weatherbit_data = await fetchWeatherbitApi(process.env.API_WEATHERBITIO, data_storage.lat, data_storage.lng);
        data_storage.weather_temp = weatherbit_data.w_temp;
        data_storage.weather_descr = weatherbit_data.w_descr;

        //picabay.com api
        let pixabay_data = await fetchPixabayApi(process.env.API_PIXABAYCOM, req.body.destination);
        data_storage.pict = pixabay_data.pict;

        res.send(data_storage);
    } catch (error) {
        console.log('error', error);
    }
})


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })

app.listen(8081, function () {
    console.log('Server is listening on port 8081')
})