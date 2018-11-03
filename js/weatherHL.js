define([],function (){

    return{
        tempHL: function(){
            const editJsonFile = require("edit-json-file");
            let file = editJsonFile(`./weatherJson/weather.json`);
            var json = file.data.weather;
            var tempArray = new Array;

            for(var key in json){

                for(var time in json[key]){
                    if((time != "high") && (time != "low") && (time !="weekDay") && (time != "date")){
                        tempArray.push(json[key][time].temp);
                    }
                }
                
                var high = Math.max.apply(Math, tempArray);
                var low = Math.min.apply(Math, tempArray);
                json[key].high = high;
                json[key].low = low;
                tempArray= [];
            }

            file.set("weather", json);
            file.save();
            file = editJsonFile(`./weatherJson/weather.json`, {
                autosave: true
            });


        }
    }
});