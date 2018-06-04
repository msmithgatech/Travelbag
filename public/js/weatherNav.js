
// $(document).ready(function() {
//     $("#getWeather").click(function() {
//         var city = $("#city").val();
//         var key = '2a654d06fe270170572f3dc587611142';

//         $.ajax({
//             url: '',
//             dataType: '',
//             type: '',
//             data: {q:city, appid: key, units: 'metric'},

//             success: function(data) {
//                 var wf = '';
//                 $.each(data.weather, function(index, val) {
//                     wf += '<p><b>' + data.name + "</b><img src="+ val.icon + ".png></P>"+
//                     data.main.temp + '&deg;C ' + ' | ' + val.main + "," +
//                     val.description
//                 });

//                 $("#showWeather").html.input(wf)
//             }

//         });

//     });

// });

$(document).ready(function() {

    //get location
    $("#getWeather").click(function() {
        var city = $('#city').val();
        weather(city);



    function weather() {
        var URL = 'https://fcc-weather-api.glitch.me/api/current?lat=53.70&lon=-1.24';

        $.getJSON(URL, function(data){
            console.log(data)
            updateDOM(data);
        });
    }

    function updateDOM(data) {

        var city = data.name;
        var temp = data.main.temp *1.8+32;
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;

        $('#city').html(city);
        $('#temp').html(temp);
        $('#desc').html(desc);
        $('#icon').attr('src', icon);


    }
});

});