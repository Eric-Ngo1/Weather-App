# Weather-App
This NodeJS Application makes asynchronous HTTP requests from the MapQuest geolocation API and Dark Sky API to create a program that tells 
you the weather given a certain address. This application handles any user arguments, including errors, and upon receiving a valid 
argument, it makes calls to the MapQuest API to retrieve the necesessary information of an address, such as the longitiude, latitude, 
street name, etc. and use that to call on the Dark Sky API which gives the current weather given a pair of latitude and longitude 
coordinates.
