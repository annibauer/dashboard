define(["js/processing"],function (processing){

    return{

        weatherApi: function(resolve){
            var request = require("request");

            var options = { method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/forecast',
            qs: { id: '3214104', appid: '546f70782c1a39ea1c1a978f0d817861', units:'metric'},
            headers: 
            { 'Postman-Token': '66066625-098d-4c4b-83cc-b1ce2979f94f',
                'Cache-Control': 'no-cache' } };

            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                var weatherJson = JSON.parse(body);
                console.log(weatherJson);
                
                weatherJson = weatherJson.list;
        
                var chron_Weather = new Array;

                for(var key in weatherJson){

                    var date = processing.dateConversion(weatherJson[key].dt_txt);

                    chron_Weather[key] ={
                        weekDay: date.weekDay,
                        date: date.date,
                        time: date.time,
                        temp: weatherJson[key].main.temp, 
                        description: weatherJson[key].weather[0].icon
                    }
                }
                processing.weatherArrayReformatting(chron_Weather);
                resolve(true);
          });

        },

        eduAPI: function(){
            var request = require("request");

            var options = { method: 'GET',
            url: 'https://api.ed.gov/data/mbk-highschool-dropout',
            qs: { api_key: 'QM7E2dhbdeoHZplcG2dXKGy2XRrFp0wwCmLSCeMf' },
            headers: 
            { 'Postman-Token': '40f3c5b7-eea3-40dd-85d9-4bbd00d8a43d',
                'cache-control': 'no-cache' } };

            request(options, function (error, response, body) {
            if (error) throw new Error(error);
                var json = JSON.parser(body);
                console.log(json);
                var dropOutRate = new Array;

                for(var key in json.resources){
                    dropOutRate[key] = {
                        year: json.resources[key].Year,
                        percentage: json.resources[key].percentage,
                        type: json.resources[key].characteristics
                    }     
                }

            });

        }
    }
});