/* modules importation */
const yargs = require('yargs');
const axios = require('axios');

/* input argument's parsing and alias creation */

var args = yargs
    .options({
        a:{
            demand : true,
            alias : 'address',
            string : true
        }
     }).argv;

var geolocationUrl = `https://maps.google.com/maps/api/geocode/json?address=${args.address}`;
console.log(geolocationUrl);

axios.get(geolocationUrl)
.then(function(response){
    console.log(response.data);
        console.log(response.data.results[0].formatted_address);
        var latitude = response.data.results[0].geometry.location.lat;
        var logitude = response.data.results[0].geometry.location.lng;
        var weatherUrl = `https://api.darksky.net/forecast/53090cd0e9f4c18f5a4416ac304a2b47/${latitude},${logitude}`
        console.log(weatherUrl)
        // console.log(lat, lng);
        return axios.get(weatherUrl)
        .then(function(response){
            console.log(response.data.currently.temperature);
            console.log(response.data.currently.apparentTemperature)
            // console.log(typeof response)
        }).catch(function(e){
            console.log(e)
        });
})
.catch(function(error){
        console.log(error);
});