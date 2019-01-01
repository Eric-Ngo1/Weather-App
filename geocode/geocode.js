const request = require('request'); //api needed to access a webpage


var geocodeAddress = (address, callback) => {
  //puts address in string form understood in a url link
  var formattedString = encodeURIComponent(address);

  //example of this function is seen on web page for request api
  request({
    url:`http://www.mapquestapi.com/geocoding/v1/address?key=uFPBJ0BSbY7za4D3Lov1pqSGTFRwU6N9&location=${formattedString}`,
    json: true //tells request that the data we're getting is json data, so it will convert to object for us
  }, (error, response, body) => { //set errorMessage in callback function
    if(body.results === undefined) {
      callback('Unable to connect to Mapquest servers.');
    } else if(body.results[0].locations[0].adminArea5 === '') {
      callback('Unable to find the address.');
    } else {
      callback(undefined, { //instatiate an object to return in callback with desired info
        address: `${body.results[0].locations[0].street} ${body.results[0].locations[0].adminArea5}, ${body.results[0].locations[0].adminArea3}, ${body.results[0].locations[0].adminArea1}`,
        latitude: body.results[0].locations[0].latLng.lat,
        Longitude: body.results[0].locations[0].latLng.lng
      })
    }
  });
}

module.exports = {
  geocodeAddress
}
