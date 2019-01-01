const yargs = require('yargs'); //api needed to parse arguments from cmd line
const geocode = require('./geocode/geocode.js'); // require helper file to grab location
const weather = require('./weather/weather'); // require helper file to grab weather at location

// configure possible arguments from the user and possible output for each arg
const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'To fetch weather at address location',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) => { //call to geocodeAddress to retrieve location of arg
  if (errorMessage) { //prints error and ends program if an error occurs
    console.log(errorMessage);
  } else {
    console.log(results.address); // prints address of arg otherwise
    weather.getWeather(results.latitude, results.Longitude,(errorMessage, weatherResults) => { //call to weather to fetch weather of address
      if(errorMessage) { //prints error and ends program if an error occurs
        console.log(erorMessage);
      } else { //prints current weather of address otherwise
        console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
      }
    });
  }
});
