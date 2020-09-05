
const dotenv = require('dotenv')
const path = require('path')
const express = require('express')
//const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch')
const request = require('request')

let data_storage = {
    dest_name: '',
    country_name: '',
    lat: '',
    lng: '',
    dep_date: '',
    ret_date: ''
}

dotenv.config()
const api_geonamesorg = process.env.API_GEONAMESORG;
console.log(`API geonames.org = ${api_geonamesorg}`);

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('dist'))

app.post('/results', async function(req, res) {
    console.log('req = ',req.body)
    const geonames_res = await fetch(`http://api.geonames.org/searchJSON?q=${req.body.destination}&maxRows=3&username=${api_geonamesorg}`)
    try {
        const geonamesData = await geonames_res.json();
        data_storage.dep_date = req.body.departure_time;
        data_storage.ret_date = req.body.return_time;
        data_storage.dest_name = geonamesData.geonames[0].name;
        data_storage.country_name = geonamesData.geonames[0].countryName;
        data_storage.lat = geonamesData.geonames[0].lat;
        data_storage.lng = geonamesData.geonames[0].lng;
        console.log('server = ', data_storage);
        // if OK -> take country info
        // https://restcountries.eu/rest/v2/name/united%20states
        // - currency, language, population
        // -> weather
        // -> pic
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