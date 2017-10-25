
const request = require('request');

var geocodeAddress = (address, callback)=>{   

var encodedAddress = encodeURIComponent(address);

request ({
    url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, responce, body) => {
    if(error){
        callback('Unable to connect ot the Google Server');
    }else if(body.status === 'ZERO RESULTS'){
        callback('Unable to find that address');
    }else if (body.status === 'OK'){
        callback(undefined,{
            address : body.results[0].formatted_address,
            latitude : body.results[0].geometry.location.lat,
            longitude : body.results[0].geometry.location.lng
        });
    
        };
});
};

module.exports={
    geocodeAddress
}