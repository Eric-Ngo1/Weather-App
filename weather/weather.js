const request = require('request'); //api needed to access a webpage

var getWeather = (lat, long, callback) => {
  request({ //uses latitude and longitude to call weather api
    url: `https://api.darksky.net/forecast/7bda893da2506cdcd420b1af98a0c618/${lat},${long}`,
    json: true //collect json data
  }, (error, response, body) => {
    if(!error && response.statusCode === 200) {
      callback(undefined, { //instantiate an object to return in callback with desired info
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else { //return errorMessage in callback otherwise
      callback('Unable to fetch weather.');
    }
  });
}

module.exports.getWeather = getWeather;
