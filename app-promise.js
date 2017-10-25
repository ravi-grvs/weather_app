const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
.options({
a:{
    demand : true,
    alias : 'address',
    describe : 'address to fetch weather',
    string : true
}  
})
.help()
.alias('help', 'h')
.argv;
var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`
console.log(geocodeUrl);
// axios.get(geocodeUrl).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
