
const dotenv = require('dotenv')
const path = require('path')
const express = require('express')
//const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch')
const request = require('request')

let data_storage = {}

dotenv.config()
const api_geonamesorg = process.env.API_GEONAMESORG;
console.log(`API geonames.org = ${api_geonamesorg}`);

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('dist'))

Routes
app.post('/results', async function(req, res) {
    console.log(req)
    const geonames_res = await fetch(`http://api.geonames.org/searchJSON?q=${req.body.city}&maxRows=3&username=${api_geonamesorg}`)
    try {
        const geonamesData = await geonames_res.json();
        console.log(geonamesData);
        res.send(geonamesData);
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

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Server is listening on port 8081')
})