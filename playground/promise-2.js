const request = require('request');
var geocodeAddress = (address) =>{

    
    return new Promise((resolve, reject)=>{
    var encodedAddress = encodeURIComponent(address);
    request ({
        url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, responce, body) => {
        if(error){
            reject('Unable to connect ot the Google Server');
        }else if(body.status === 'ZERO RESULTS'){
            reject('Unable to find that address');
        }else if (body.status === 'OK'){
            resolve({
                address : body.results[0].formatted_address,
                latitude : body.results[0].geometry.location.lat,
                longitude : body.results[0].geometry.location.lng
            });
        
        };
    });

});
};

geocodeAddress(75063).then((res)=>{
    console.log(res.address);
    console
    }, (errorMessage)=>{
        console.log(errorMessage);
    });