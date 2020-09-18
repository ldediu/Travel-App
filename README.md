# Travel App

This web application helps to plan trips.
Simply enter the desired destination and dates of the trip.
The app provides information about the location like: general information about the country, current weather for that date, or a forecast based on historical data, photo of the destination, etc. 
The app allows saving and deleting trips in your local storage. 

## Example


Home            |  My Trips
:-------------------------:|:-------------------------:
![Travel App](./docs/small1.jpg)  |  ![Travel App](./docs/small2.jpg)

## API Used

* [Geonames API](http://www.geonames.org)
* [Weatherbit API](https://www.weatherbit.io)
* [Pixabay API](https://pixabay.com)
* [Restcountries API](https://restcountries.eu/)

## Built With

- HTML5 - Markup
- SASS - Styling
- JS - Client side language
- Webpack - Asset management
- Node JS - Server side language
- Express - Server side framework
- Babel - JS compiler
- Service Workers - Offline capability
- Jest - Testing suit

## Getting started

`cd` into your new folder and run:
- `npm install`

Add `.env` variables:
- `API_GEONAMESORG`
- `API_WEATHERBITIO`
- `API_PIXABAYCOM`

To test:
- `npm run test`

To start in `dev` mode:
- `npm run dev`

To start in `prod` mode:
- `npm run build`
- `npm start`


    
    