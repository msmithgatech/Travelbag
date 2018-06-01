$(document).ready(function() {
    $("#getWeather").click(function() {
        var city = $("#city").val();
        var key = '2a654d06fe270170572f3dc587611142';

        $.ajax({
            url: '',
            dataType: '',
            type: '',
            data: {q:city, appid: key, units: 'metric'},

            success: function(data) {
                var wf = '';
                $.each(data.weather, function(index, val) {
                    wf += '<p><b>' + data.name + "</b><img src="+ val.icon + ".png></P>"+
                    data.main.temp + '&deg;C ' + ' | ' + val.main + "," +
                    val.description
                });

                $("#showWeather").html.input(wf)
            }

        });

    });

});