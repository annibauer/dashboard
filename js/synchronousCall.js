define(["js/functions", "js/socket_io"],function (functions, socket_io){

    return{

        syncCall: function(){
            var promises = new Array;
            promises.push(new Promise((resolve) =>   functions.weatherApi(resolve)));

            Promise.all(promises)
                .then(data => {
                    if (!data.includes(false)) {
                        setInterval(function(){socket_io.sendData()},1000);
                    } else {
                    console.log("PROMISE ERROR");
                }
                });
            },
    }
});