const request = require('request');

var getWeather =(latitude, logitude, callback) => {
request({
    url: `https://api.darksky.net/forecast/53090cd0e9f4c18f5a4416ac304a2b47/${latitude},${logitude}`,
    json : true
},(error, response, body)=>{
    if(error){
        callback('Unable to connect to forcast.io Server');
    }else if(response.statusCode === 200){
        callback(undefined,{
            Temparature : body.currently.temperature,
            FeelsLike : body.currently.apparentTemperature
        })
    }else{
        console.log(response.statusCode)
    }
});
};

module.exports.getWeather = getWeather;