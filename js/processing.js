define(["js/editJson"],function (editJson){

    var weatherData = new Array;
    var dates = new Array;

    return{

        dateConversion: function(date){

            var date = new Date(date);

            // year
            var year = date.getFullYear();

            // month
            var month = date.getMonth();
            var monthArray = ["January", "Feburary", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
            month = monthArray[month];

            // day
            var day = date.getDate();

            // weekDay
            var weekDay = date.getDay();
            var weekDayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            weekDay = weekDayArray[weekDay];

            // time
            var hour = date.getHours(); 
            var time = hour +":00";

            var dateFormatted = day +". " + month + " " + year; 

            return ({weekDay: weekDay, date: dateFormatted, time:time});
        },

        weatherArrayReformatting: function(array){

            // make seperate array for dates
            for (i = 0; i < array.length; i++) {
                var date = array[i].date;
                var dateAlreadyExists = false;
                for (var key in dates) {
                    if (dates[key].date === date) {
                        dateAlreadyExists = true;
                    }
                }
                if (dateAlreadyExists === false) {
                    dates.push({ date: date, weekDay: array[i].weekDay });
                    weatherData[date] = new Array;
                }
            }

            for (var dateKey in dates) {
                var date = dates[dateKey].date;
                for (var arrayKey in array) {
                    if (date === array[arrayKey].date) {
                        weatherData[date].push({
                            time: array[arrayKey].time,
                            temp: array[arrayKey].temp,
                            description: array[arrayKey].description
                        });
                    }
                }
            }
            
            editJson.edit_weather_json(weatherData,dates);

        },

        dates,
        weatherData
    }
});