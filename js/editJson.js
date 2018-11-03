define(["js/weatherHL"],function (weatherHL){

    var weatherData = new Array;
    var dates = new Array;

    return {
        // writes raw data from API call into a seperate json file used for logging
        edit_weather_json: function (array, dates) {
            const editJsonFile = require("edit-json-file");
            let file = editJsonFile(`./weatherJson/weather.json`);

            var json = file.data.weather;

            for (var i in dates) {
                if (i < 5) {

                    var date = dates[i].date;
                    json[i].date = date;
                    json[i].weekDay = dates[i].weekDay;

                    for (var timeskey in array[date]) {

                        if (array[date][timeskey].time === "6:00") {
                            json[i].six.temp = Math.round(array[date][timeskey].temp);
                            json[i].six.description = array[date][timeskey].description;
                        }
                        if (array[date][timeskey].time === "9:00") {
                            json[i].nine.temp = Math.round(array[date][timeskey].temp);
                            json[i].nine.description = array[date][timeskey].description;
                        }
                        if (array[date][timeskey].time === "12:00") {
                            json[i].twelve.temp = Math.round(array[date][timeskey].temp);
                            json[i].twelve.description = array[date][timeskey].description;
                        }
                        if (array[date][timeskey].time === "15:00") {
                            json[i].fifteen.temp = Math.round(array[date][timeskey].temp);
                            json[i].fifteen.description = array[date][timeskey].description;
                        }
                        if (array[date][timeskey].time === "18:00") {
                            json[i].eightteen.temp = Math.round(array[date][timeskey].temp);
                            json[i].eightteen.description = array[date][timeskey].description;
                        }
                        if (array[date][timeskey].time === "21:00") {
                            json[i].twentyone.temp = Math.round(array[date][timeskey].temp);
                            json[i].twentyone.description = array[date][timeskey].description;
                        }
                    }
                }
            }

            file.set("weather", json);

            file.save();
            file = editJsonFile(`./weatherJson/weather.json`, {
                autosave: true
            });

            weatherHL.tempHL();


        }

    }
});