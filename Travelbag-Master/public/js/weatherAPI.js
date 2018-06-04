
function getWeather() {
    $('.weatherResponse').html('');

    var cityName = $('#cityName').val();
    var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=1482e6a9892488f38581017ec3381ac5';

$.getJSON(apiCall, weatherCallback);

function weatherCallback(weatherData) {
    var cityName = weatherData.name;
    var country = weatherData.sys.country;
    var description = weatherData.weather[0].description;

    $('.weatherResponse').append(" The forecast for " + cityName + " " + country + " is " + description);
    
}  

}